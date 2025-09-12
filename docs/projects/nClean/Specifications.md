# Specifications
This page describes the internal (or not) JSON file specification for each type of data used by nClean.

## Exit codes
The following exit codes are used by the worker
1. 1001 - Playbook execution is disabled
2. 2001 - No network connectivity
3. 2002 - Failed to get configuration from WebUI
4. 2003 - Couldn't send telemetry
5. 2004 - Critical error occurred

## Clients list
The clients.json file is an internal file of the WebUI, it stores the client list, alongside logs, and analytics data,
```json
{
  "d0d50fcb-3ea3-46a3-b3c7-402c774d36c2": { // UUIDv4 of the client
    "first_seen": "2025-08-22T00:53:33.961896", // Timestamp when the client first connected to the WebUI
    "last_seen": "2025-08-22T00:53:41.342691", // Timestamp when the client last connected to the WebUI
    "local_ip": "10.0.2.15", // Local IP of the client
    "note": "Class 201, Computer 10", // Note about the client
    "execution_logs": [ // List of exection logs
      {
        "timestamp": "2025-08-22 00:53:41", // Timestamp when the Worker was started
        "username": "usernamehere", // Username of the currently logged in user
        "log": "HOST: [INT] Starting nClean Worker... [...]" // Execution log, encoded so it doesn't fuck with the JSON spec
      },
      {
        "timestamp": "2025-08-23 01:21:50", // Timestamp when the Worker was started
        "username": "usernamehere", // Username of the currently logged in user
        "log": "HOST: [INT] Starting nClean Worker... [...]" // Execution log, encoded so it doesn't fuck with the JSON spec
      }
    ],
    "analytics": { // Analytics data collected from the client
      "CPU": { // CPU information
        "LogicalProcessors": 4, // Amount of threads
        "Name": "Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz", // CPU string
        "Cores": 4 // Amount of cores
      },
      "Wallpaper": { // Wallpaper information
        "Path": "C:/Windows/Web/Wallpaper/MeetRevision/v2/desktop.jpg", // Full path to the wallpaper, using the unix slash, because windows sucks
        "SHA256": "BE3DBDE7778E74E26AF4AE3E63541A3B48A053A49826D966899BD36255FC70FE", // SHA256 hash of the wallpaper
        "LastModified": "2024-12-01 08:59:58" // Timestamp when the wallpaper file was last modified
      },
      "Uptime": { // Uptime information
        "UptimeHours": 0.36121048266666667, // Uptime in hours
        "LastBootTime": "2025-08-22 00:31:58" // Timestamp when the system was last powered on
      },
      "Disks": [ // Information about drives (multiple entries possible)
        {
          "DriveLetter": "C:", // Drive letter
          "UsedBytes": 24420962304, // Amount of used space
          "TotalBytes": 65971232768, // Total amount of space
          "FreeBytes": 41550270464 // Amount of free space
        }
      ],
      "NetworkProfiles": { // Network profile information
        "WiFiProfiles": {} // I don't have wifi on my PC, so no wifi profiles are available, might add later once I get example information for it
      },
      "OperatingSystem": { // Operating system information
        "Architecture": "64-bitowy", // Architecture of the operating system, 32bit systems are rare, but supported from what I can see
        "Name": "Microsoft Windows 10 IoT Enterprise LTSC", // Build string of the operating system
        "Version": "10.0.19044" // Detailed version of the operating system
      },
      "InstalledApps": [ // List of installed apps
        {
          "Version": "140.0.4", // Version of the application
          "Name": "Mozilla Firefox (x64 en-US)" // Name of the application
        },
        {
          "Version": "140.0.4", // Version of the application
          "Name": "Mozilla Maintenance Service" // Name of the application
        },
        {
          "Version": "14.44.35208", // Version of the application
          "Name": "Microsoft Visual C++ 2022 X64 Minimum Runtime - 14.44.35208" // Name of the application
        }
      ]
    }
  }
}
```

## Server configuration
The server_config.json file stores important information that is relayed to the Worker as the part of the initialization process, and used for the WebUI's operation,
```json
{
  "postRunCommand": "calc", // Command to run after the playbook has finished execution
  "executePlaybooks": true, // Toggle execution of playbooks
  "forceExecutePlaybooks": true, // Force execution of playbooks, skips the 24h timeout
  "useCustomPlaybooks": false, // Toggles the use of custom playbooks
  "customPlaybook": { // Defines a custom playbook
    /// This is covered in the next section
  },
  "highlightedApps": [ // List of applications to highlight in the UI
    "opera gx",
    "roblox",
    "tlauncher",
    "crystal launcher"
  ],
  "expectedWallpaperHashes": [ // List of expected wallpaper hashes
    "50CDB53CC50C8364CD6B06BA4F83C6FFE235DCE118D00E1B1E9513D68844AD34"
  ],
  "hostUrl": "http://192.168.0.158:5000" // Host URL of the server, down to the port, can be a web page, https or http
}
```

## Custom Playbook
This is mostly internal, for advanced users who want to create their own playbooks,
```json
// Only the JSON representation of the PowerShell object is provided below.
{
  "title": "DefaultPlaybook", // Title of the playbook
  "description": "Default playbook for nClean", // Description of the playbook
  "version": "1.0.0", // Version of the playbook
  "configuration": { // Configuration settings for the playbook
    "OnlyRemoveOlderThanHours": 24, // Only remove files older than this many hours
    "UserDirectories": [ // List of user directories to clean, start with "$UserHome"
      "$UserHome\\Downloads",
      "$UserHome\\Documents"
    ],
    "BrowserInformation": { // Information about browsers that the playbook will target and attempt to clean
      "firefox.exe": [ // Name of the process that prevents the deletion of the profile data
        "$UserHome\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles", // List of directories that contain browser profile data
        "$UserHome\\AppData\\Local\\Mozilla\\Firefox\\Profiles"
      ],
      "chrome.exe": [ // Name of the process that prevents the deletion of the profile data
        "$UserHome\\AppData\\Local\\Google\\Chrome\\User Data" // List of directories that contain browser profile data
      ]
    },
    "APPXPackages": [ // List of APPX packages that the playbook will attempt to remove (debloat)
      "Microsoft.Windows.SecureAssessmentBrowser", // Name of the APPX package
      "Microsoft.Windows.PeopleExperienceHost" // Name of the APPX package
    ]
  }
}
```