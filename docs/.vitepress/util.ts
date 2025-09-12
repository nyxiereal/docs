import fs from 'fs'
import path from 'path'
const { resolve } = path

export const scanDir = pathName => {
    const path = resolve(__dirname, `../${pathName}`)
    return getMsg(path, pathName)
}

export const getMsg = (path, basePath) => {
    let res = fs.readdirSync(path).filter(item => !(String(item) === '.DS_Store'))
    if (res) {
        let arr = res.map(item => {
            const fullPath = resolve(path, item)
            const isDirectory = fs.statSync(fullPath).isDirectory()

            if (String(item).endsWith('.md')) {
                // Extract file name without extension
                const fileName = item.split('.')[0]

                // Skip Index.md files as they will be handled by their parent directory
                if (fileName === 'Index') {
                    return null
                }

                // Create the correct link path directly
                return {
                    text: fileName,
                    link: `/${basePath}/${fileName}`
                }
            } else if (isDirectory && item !== 'images' && !item.startsWith('.')) {
                // Only process directories that are not named "images"
                const subPathName = basePath ? `${basePath}/${item}` : item
                const subItems = getMsg(fullPath, subPathName)
                
                // Check if there's an Index.md file in the directory
                const indexPath = resolve(fullPath, 'Index.md')
                const hasIndex = fs.existsSync(indexPath)
                
                return {
                    text: item,
                    link: hasIndex ? `/${subPathName}/Index` : undefined,
                    items: subItems,
                    collapsible: true,
                }
            } else {
                // Skip non-markdown files that aren't directories, or "images" directories
                return null
            }
        }).filter(Boolean) // Remove null items from the array

        return arr
    } else {
        console.warn('No articles found')
        return []
    }
}