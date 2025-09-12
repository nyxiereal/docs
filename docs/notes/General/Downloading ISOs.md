# Downloading ISOs

:::tip TLDR
- Windows 10 LTSC - [click](https://drive.massgrave.dev/pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso)  
- Windows Server 2022 - [click](https://drive.massgrave.dev/pl-pl_windows_server_2022_updated_july_2025_x64_dvd_f3e39b78.iso)  
- Ubuntu 22.04(.05) - [click](https://ubuntu.com/download/server/thank-you?version=22.04.5&architecture=amd64&lts=true)  
- Ubuntu Server 22.04(.05) - [click](https://ubuntu.com/download/server/thank-you?version=22.04.5&architecture=amd64&lts=true)  
- After installing, click "Devices" and "Insert Guest Additions...", then install them from the CD image.  
- On Ubuntu, switch to Xorg in the login screen settings.
:::

## General information
1. After installing the operating system, make sure to install virtualbox guest additions, it will make it easier to see, use the shared clipboard and drag and drop files between the host and the guest.

## Windows 10 LTSC
1. For Windows I recommend using the LTSC version from [massgrave](https://massgrave.dev/windows_ltsc_links). The long term support channel is faster, has no bloatware compared to the regular release, and has more features (since its an enterprise version). Comparing it to Pro, LTSC still has more features.
2. If you have more time you can debloat your VM easily:
   1. Install all updates, restart the system to complete them, then check for updates again and restart if needed.
   2. Download the [ReviOS playbook](https://github.com/meetrevision/playbook/releases/latest) and [AME Wizard](https://github.com/Ameliorated-LLC/trusted-uninstaller-cli/releases/latest)
   3. Follow the instructions in the AME Wizard.

## Windows Server 2022
1. For Windows Server 2022 I still use [massgrave](https://massgrave.dev/windows_server_links#windows-server-2022), but this time it's not LTSC. Instead, I go for the regular version, since there's no LTSC version avaliable.
2. After you download and insert the iso into virtualbox, you have to use the graphical interface install option, but not the one for datacenters.

## Ubuntu 22.04(.05)
1. Ubuntu... Before installing disconnect internet from the virtual machine, then proceed with the usual installation. 
2. After the installation is complete, you can reconnect to the internet, but do NOT enable automatic updates or update the system, it will make it really unstable.
3. If you run into graphical issues in GDM click on the gear icon in the bottom right corner and select "Xorg", Wayland doesn't play well with virtual machines yet. This usually occurs after installing virtualbox guest additions.

## Ubuntu Server 22.04(.05)
1. During the installation do NOT select additional services to be installed and do NOT install any of them on the system during the setup process.