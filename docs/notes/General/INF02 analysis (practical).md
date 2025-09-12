# INF02 Analysis (practical part)
I decided to analyze the last 8 exams, alongside the grading guidelines, provided by the [Arkusze.pl website](https://arkusze.pl/egzamin-zawodowy-kwalifikacja-inf-02/). Be warned I'm analyzing only the practical part of the exam, not the theoretical one.



# Exam structure
:::warning IMPORTANT INFORMATION
Basic information you need to know before the exam:
1. You **MUST ARRIVE AT LEAST 30 MINUTES** before the exam begins.
2. You have **150 minutes to complete** the exam.
3. All accounts you are given use the `ZAQ!2wsx` password. Linux uses the `administrator` account, while Windows uses the `Administrator` account.
4. The OSs used are Windows 10, Windows Server 2022, Ubuntu 22.04 and Ubuntu Server 22.04.
5. **After each completed task, raise your hand** until an attendant comes up to you to verify your work.
6. **Attendants might randomly come up to you** and ask you to explain what you're doing/did. Respond calmly and clearly.
7. Take screenshots and place them in a specified folder, as instructed by the exam document.
8. **CABLING IS GRADED**, make sure to **clean up your workspace** and **properly manage your cables**. You can be asked to leave if your workspace is messy.
:::
The exam consists of about 6 task types, each of which are described below

## UTP cable wiring [easy]
:::tip Important
1. Make sure to follow the T568**B** wiring standard precisely
2. Learn proper [Ethernet wiring](/notes/General/Ethernet%20Wiring.html)
:::
You will have to crimp a UTP cable according to the T568**B** standard. You can learn how to do that in the [Ethernet wiring part of the site](/notes/General/Ethernet%20Wiring.html). This is in my opinion the easiest part of the exam, it doesn't change, **you will have to do it**. Your exposed wire can extend up to 2.5cm away from the keystone jack, so you probably don't have to worry about making a "perfect cable".

## Computer issue diagnosis [mid]
:::tip Important
1. **Document BIOS navigation**, including all steps taken to access and modify settings
2. Follow the safety protocols while disassembling the computer, not doing that will lose you points
3. Use GPU-Z to check the GPU status
:::
You will have to diagnose and fix a computer issue. This will probably involve disabling the dGPU and using the iGPU instead. A broken dGPU was the cause of the issue in some of the exams, and its likely to repeat again. You will probably have to use GPU-Z to check the GPU status. Make sure to follow the safety protocols while working on the computer, including properly handling components, and making sure the computer is fully off.

## Router + Switch configuration [easy]
:::tip Important
1. Read the attached documentation for the Switch, it contains really important information about IP addresses, and other stuff.
2. Make sure to memorize, or note down, important IPs from the configuration, you can use notepad or vim for that.
3. Ask an attendant for a pin if you need to reset the device, if there are none avaliable in close proximity.
:::
You will probably have to configure the LAN and WAN interfaces, alongside configuring DHCP and DNS servers. You may be asked to configure the Switch's IP address and add it to the DHCP server. This is **a relatively straightforward task**, but make sure to double-check your configurations before applying changes. If you make any mistake and have to reset the device, check around you for a High Tech Device Resetting Item (pin), if there are none avaliable, try a paperclip, if there are none near you, ask an attendant for help.

## Windows server [mid]
:::tip Important
1. Familiarize yourself with **Active Directory, IIS, DNS, and GPEdit**.
2. Good luck. Windows server is hell.
:::
You will almost certainly have to configure Active Directory, including promoting the server to a domain controller, creating a forest, and a domain (e.g. `inf02.local`). You will also possibly create user policies (e.g. "password never expires", or "password must meet complexity requirements") and group policies, that you later have to attach users to. You may be asked to install a DNS or IIS service.

## Ubuntu [easy]
:::tip Important
1. Familiarize yourself with the terminal, including basic system administration commands.
2. Remember that you can mostly use the `--help` operand for more information on commands, alongside reading `man` pages about specific commands.
3. Ubuntu uses Gnome, try it out in a virtual machine, and have a feel for where items are in the settings.
:::
You will probably be asked to set up an IP address (static or by a DHCP server), and point the DNS server to a specific address, sometimes that is Windows Server's IP address. You will have to use the terminal for directory creation (`mkdir`), managing users/groups (`useradd`, `usermod`, `groupadd`), symbolic links (`ln -s`), and changing modes for a file (`chmod`), alongside basic Linux tasks.

## Configuration of network devices [hard]
:::tip Important
1. Your best bet is watching a video on someone installing a network printer and configuring it.
2. As I said before, Windows Server is hell.
:::
You will most probably be tasked with installing a network printer on Windows Server, then sharing it in the network. Alongside configuring default settings (pages, amount of copies printed, etc.)

## Cost estimate [mid]
:::tip Important
1. Double-check your calculations for accuracy.
2. Do not "wing it", take your time, as this is at the end of the exam, you'll probably be tired and make mistakes.
:::
At the end of the exam, you will likely be asked to make a cost estimate from a provided list of hardware/software components, or services. Make sure to account for VAT (23%) in your calculations. You will likely be using MS Excel for this task, it is rare that you'll have to do the calculations manually.

## Ending note
Stay calm during the exam, remember to breathe in, and out. Take your time to think, as you have a whole 150 minutes to complete the exam, it's better to leave the exam hall later than to rush and make mistakes. Double-check your answers!