# Changelogs

## 2.5.0 (current version)
- fix VC disconnecting issue by removing an old workaround
- don't remove billing if user has nitro (the "billing settings" section from settings is now also removed for non-nitro users)
- fix links opening in aliucord's window instead of the link's app window (such as youtube)

## 2.4.0
- user decorations coming soon (there's a coreplugin that lays the underground, they are not visible yet tho)
- add google sideloading block warning
- rich video embed fix (such as fxtwitter)
- italize CorePlugins for /plugins command
- randomize donation link in settings
- fix AutoMod messages being broken (caused by ForwardedMessages)
- disable school hubs dialog
- add support for avif
- remove billing
- prevent overriding CorePlugins with external plugins in PluginDownloader
- support new pins features
- fix duplicate install buttons in #plugin-development channel
- use original ref from links in PluginDownloader

## 2.3.1
- fix various poll bugs
- add fallback gif format sticker
- NPE when leaving guild with forwarded msg loaded (fixes a crash when leaving a server with a forwarded message loaded)
- handle unknown new reply message types (fixes reply previews)
- add AlignThreads fix as a CorePlugin
