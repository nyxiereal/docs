# Fucked up AnyKernel3 zip

:::tip Context
I flashed a fucked up AnyKernel3 zip that I built onto my device (mondrian, Poco F5 Pro), and it caused my system to bootloop, even after trying to reflash the stock boot image. Here are the solutions I got [from luk](https://discord.com/channels/628008280605589549/653821647102672926/1405256165306400808) in the [LOS Discord](https://discord.gg/gD6DMtf). Here's the error I got
```
-- Wiping data ...
ERROR:   recovery: Snapshot: vendor_b returned error code: Merge failed
ERROR:   recovery: Merge could not be completed and will be marked as failed
ERROR:   recovery: Unrecoverable merge failure detected
Unable to check merge status and/or complete update merge.
Unable to check update status or merge, cannot wipe partitions.
```
:::
1. Run
```bash
fastboot snapshot-update cancel
```
1. After that download the super_empty.img for your device
```bash
fastboot flash super super_empty.img
```
1. And wipe your data
```bash
fastboot -w
```
1. After that, sideload the LineageOS zip once you're in recovery
```bash
adb sideload <lineageos>.zip
```

