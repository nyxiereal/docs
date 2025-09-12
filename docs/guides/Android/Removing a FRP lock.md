# Removing a FRP lock
:::warning Unlocked bootloader only
This guide only works for devices with an unlocked bootloader!
:::

:::tip What even is FRP?
FRP (Factory Reset Protection) is a feature of Android that prevents unauthorized access to a device after it has been factory reset. It can be bypassed on devices with an unlocked bootloader.
:::

1. Boot into fastboot (POWER + VOL_DOWN)
2. Run this command while the phone is connected to a PC
```bash
fastboot erase frp
```
3. This will remove the FRP partition, you can now reboot your device