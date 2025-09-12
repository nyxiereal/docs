# Overview of the architecture
As said before, nClean is a 3-stage project. Each section defines what each stage does.

## PreLauncher
1. The PreLauncher is a simple PowerShell5 compatible script that prepares the system for the deployment of the Worker
2. Execution tree:
   1. Check if the script is running as admin, if not, ask the user to launch it as admin
   2. Create a directory in `C:/nClean`, so that only Administrators have access to it
   3. Download the worker script from the locally hosted server, `$HostUrl/int/worker.ps1` to `C:/nClean/main.ps1`
   4. Check if there is already a task scheduled to run the `nClean-Worker`, if yes, remove it, if not, create one. It will run:
      1. Once after the PreLauncher has completed execution
      2. At login, delayed by 30 seconds
      3. At startup, delayed by 2 minutes
   5. After the PreLauncher has completed execution, the Worker will be manually triggered once

## Worker
1. The worker is a PowerShell5 compatible script that executes the main cleanup tasks defined in a playbook. It is ran as SYSTEM, but it executes the playbook tasks for the currently logged in user
2. Execution tree:
   1. Get the currently logged in user
   2. Ensure the current folder (`C:/nClean/`) has the correct permissions, set it to hidden and set the permissions if it doesn't
   3. Get the host identifier
      1. If it already exists (a file named `hostidentifier.txt` exists), use it
      2. If it doesn't exist, create a new UUIDv4 and save it to `hostidentifier.txt`
   4. Check for internet connectivity, the script will try to check for internet for 2 minutes, every 30 seconds, until a connection is available or the timeout is reached.
      1. If the timeout is reached, the script will exit with code `2001`
      2. If a connection is available, the script will continue execution
   5. Fetch the configuration from the WebUI server
      1. If the configuration is not available, the script will exit with code `2002`
   6. Check if playbook execution is disabled, forced, or neither in the configuration
      1. If it is disabled, exit with code `1001`
      2. If it is forced, skip the last-run-time check
      3. If neither, proceed to the last-run-time check, that ensures that the worker can only execute once every 24 hours. If there is time remaining until the 24 hours pass, the script will `Sleep` for that duration of time
   7. Execute the playbook tasks for the currently logged in user in this order
      1. Apply browser policies to firefox, chrome, and edge
      2. Check user directories/file for for files that havent been touched for more than 24 hours
      3. Clean up browser information if the browser isnt running right now
      4. Remove all specified APPX packages
   8. Update the `lastruntime.txt` file with the current timestamp
   9. Send telemetry data and the execution log to the WebUI server
   10. Exit with the code `0`

## WebUI
1. The WebUI is a fairly simple, yet advanced web interface that allows users to manage the nClean server, including viewing logs, configuring playbooks, or changing the master configuration. It is made in Python, and can be ran from a Docker container, behind cloudflare, using uvicorn (recommended)
2. The WebUI communicates with the `Worker` and `PreLauncher` scripts via a JSON API, it allows the user to quickly, and easily manage nClean without even touching the terminal
3. Overview of the interface
   1. Dashboard - It shows the recently connected clients, total amount of clients that have ever connected, amount of clients that had connected to the server today, and the server status. The recent client activity list shows the last 5 clients that connected to the server, alongside their UUID, local IP, and last connection date
   2. Clients - Shows the whole list of clients, their UUID, local IP, last connection date, note, and a button to view the client's details
   3. Search - Allows the user to easily filter the client list by the amount of free space, unexpected wallpapers, uptime, flagged apps, amount of ram, and app details
   4. Settings - Allows the user to configure the nClean worker settings, including the toggle for playbook execution, forced execution, usage of a custom playbook, post-run command, host url (used to generate the `PreLauncher` script), highlighting of apps, and the expected wallpaper hash
   5. Playbooks - A menu to easily configure and manage playbooks according to the specifications
   6. Generator - A page for creating the `PreLauncher` script, and generating PowerShell commands, and URLs for it. It allows the user to customize the URL used to get and then launch the PreLauncher, and later Worker
   7. Users - Allows administrators to manage users

## Collected telemetry
1. Amount of RAM installed in the system
