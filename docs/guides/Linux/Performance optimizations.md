# Linux performance optimizations
This is a collection of optimizations that I've gathered over time to make my Arch Linux systems boot faster and run smoother.  
:::warning Testing
This has been tested on all of my systems, please have an arch install usb ready in case something goes wrong. My systems are:
| Name               | CPU                   | RAM         | Storage                        |
| ------------------ | --------------------- | ----------- | ------------------------------ |
| ThinkPad T14 Gen 2 | AMD Ryzen 7 PRO 5850U | 2x16GB DDR4 | 2TB WD Green SN350 NVMe        |
| Main PC            | Intel Core i5-10400F  | 2x16GB DDR4 | 1TB Lexar NM710 NVMe + 4TB HDD |
| ThinkPad T470s     | Intel Core i5-7600U   | 24GB DDR4   | 1TB i-dont-remember NVMe       |
:::

## Setting up Booster initramfs
1. Install booster
```
yay -S booster
```
2. Edit the `/etc/booster.yaml` file so it applies ZSTD compression
:::tip Other options
You might want to enable module stripping if you're feeling adventurous. It will make the initramfs smaller, but it might break things.  
To enable it add `strip: true` to the `booster.yaml` file.
:::
```yaml
compression: zstd
```
3. Regenerate the initramfs
```bash
sudo /usr/lib/booster/regenerate_images
```
4. Adding a pacman hook to regenerate the initramfs on kernel updates. Run `sudo nvim /etc/pacman.d/hooks/90-booster-rebuild.hook` and add the following:
```bash
[Trigger]
Operation = Install
Operation = Upgrade
Type = Package
Target = linux-*
# Change to just `linux` if you only use the default kernel

[Action]
Description = Regenerating Booster initramfs...
When = PostTransaction
Exec = /usr/lib/booster/regenerate_images
```

## Setting up EFIStub booting (removing the bootloader)
1. Forward your current kernel parameters to a file readable by systemd-ukify
```bash
cat /proc/cmdline | sudo tee /etc/kernel/cmdline
```
2. Install systemd-ukify
```bash
yay -S systemd-ukify
```
3. Build the EFI stub image. I am using the `linux-cachyos` kernel, if you're using a different one, look for the appropriate files in `/boot/`
```bash
sudo ukify build \
    --linux=/boot/vmlinuz-linux-cachyos \
    --initrd=/boot/amd-ucode.img \
    --initrd=/boot/booster-linux-cachyos.img \
    --cmdline="@/etc/kernel/cmdline" \
    --output=/boot/EFI/linux-cachyos/arch-linux-cachyos.efi
```
4. Add a new boot entry to UEFI
:::tip IMPORTANT
Make sure to change `/dev/nvme0n1` and `-p 1` to the appropriate disk and partition where your EFI System Partition is located.  
You can check this with `lsblk`, and looking for the partition with the `/boot` mountpoint. In my example, it's `/dev/nvme0n1p1`.
````
❯ lsblk 
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
zram0       253:0    0    4G  0 disk [SWAP]
nvme0n1     259:0    0  1.8T  0 disk 
├─nvme0n1p1 259:1    0    1G  0 part /boot
└─nvme0n1p2 259:2    0  1.8T  0 part /
````
:::
```bash
sudo efibootmgr -c -d /dev/nvme0n1 -p 1 -L "ArchLinux" -l 'EFI/linux-cachyos/arch-linux-cachyos.efi'
```
5. Add a pacman hook to rebuild the EFI stub image on kernel updates. Edit this to match your kernel and initramfs paths. Run `sudo nvim /etc/pacman.d/hooks/95-ukify.hook` and add the following, replacing the paths with the ones that match your system:
```bash
[Trigger]
Operation = Install
Operation = Upgrade
Type = Package
Target = linux-cachyos

[Action]
Description = Rebuilding the UKI...
When = PostTransaction
Exec = /usr/bin/systemd-ukify build --linux=/boot/vmlinuz-linux-cachyos --initrd=/boot/amd-ucode.img --initrd=/boot/booster-linux-cachyos.img --cmdline="@/etc/kernel/cmdline" --output=/boot/EFI/linux-cachyos/arch-linux-cachyos.efi
```
6. Reboot, and remove your old bootloader from the system, it's no longer needed as the system will boot directly from the EFI stub.

## Optimizing NetworkManager
This only applies if you are using NetworkManager, and cannot just replace it with systemd-networkd.
1. Disable the wait-online service. This will make your system boot slightly faster, but it will not wait for the network to be fully up before finishing the boot process. This doesn't matter in 99.9% of cases.
```bash
sudo systemctl disable NetworkManager-wait-online.service
```

## Using ZRAM
ZRAM creates compressed blocks of RAM that can be used as swap. This is beneficial for all systems.
1. Install zram-generator
```bash
yay -S zram-generator
```
2. Create a configuration file for zram-generator. Run `sudo nvim /etc/systemd/zram-generator.conf` and add the following:
```ini
[zram0]
zram-size = min(ram / 2, 4096)
compression-algorithm = zstd
```
3. Reload daemons and start the zram swap
```bash
sudo systemctl daemon-reload
sudo systemctl enable systemd-zram-setup@zram0.service
sudo systemctl start systemd-zram-setup@zram0.service
```
4. Verify that the zram swap is active
```bash
sudo systemctl status systemd-zram-setup@zram0.service
```

## Kernel parameters
:::tip How to edit
Edit the `/etc/kernel/cmdline` file to add or remove kernel parameters.
:::
1. Using the ADIOS elevator
```
elevator=adios
```
2. Overall optimizations
```
rw zswap.enabled=0 loglevel=3 quiet
```