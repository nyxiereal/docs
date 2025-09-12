#!/usr/bin/env fish

# Function to display help
function show_help
    echo "Usage: compress_images [DIRECTORY]"
    echo "Compresses all png, jpg, and jpeg images in a directory to webp format."
    echo "If no directory is provided, the current directory is used."
end

# Check for help flag
if test "$argv[1]" = "-h" -o "$argv[1]" = "--help"
    show_help
    exit 0
end

# Set the directory
set target_dir $argv[1]
if test -z "$target_dir"
    set target_dir "."
end

# Check if the directory exists
if not test -d "$target_dir"
    echo "Error: Directory '$target_dir' not found."
    exit 1
end

# Find and convert images
for file in (find "$target_dir" -type f -iname "*.webp" -o -iname "*.jpg" -o -iname "*.jpeg")
    set new_file (path change-extension webp "$file")

    if cwebp -q 98 "$file" -o "$new_file"
        echo "Converted: $file -> $new_file"
        rm "$file"
    else
        echo "Error converting: $file"
    end
end

echo "Image compression complete."