# Flashing

:::warning Mondrian only
This guide is only applicable for POCO F5 Pro (mondrian)!
:::

:::tip Getting the ROM zip
You can get the ROM from my Telegram channel [@mondrianmoment](https://t.me/mondrianmoment)
:::

## First time flashing

:::tip Images
All the images are automatically updated when a new build is released
:::

1. Download [boot.img](https://proxy.meowery.eu/out/boot.img), [dtbo.img](https://proxy.meowery.eu/out/dtbo.img), [vendor_boot.img](https://proxy.meowery.eu/out/vendor_boot.img), and [recovery.img](https://proxy.meowery.eu/out/recovery.img)
2. Boot into bootloader (POWER + VOL_DOWN)
3. Flash all images

```bash
fastboot flash boot boot.img
fastboot flash dtbo dtbo.img
fastboot flash vendor_boot vendor_boot.img
fastboot flash recovery recovery.img
```

4. Reboot into recovery

```bash
fastboot reboot recovery
```

5. Wipe data in recovery
6. Sideload the ROM


```bash
adb sideload crDroidAndroid-XXX.zip
```

7. Click no, and reboot into the system

## Subsequent flashing

1. Download the ROM zip
2. Boot into recovery
3. Sideload the ROM

```bash
adb sideload crDroidAndroid-XXX.zip
```

4. Click no, and reboot into the system
