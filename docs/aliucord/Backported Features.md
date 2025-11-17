# What features have been backported to Aliucord?

:::tip Legend
- 💣: Broken or partially broken
- 🚧: Still in development or beta
:::

> How do i install the plugins from here?
> 
Click the plugin names, it will download the plugin .zip, now just move it to the `Aliucord/plugins` folder using a file manager & restart Aliucord if it was open.
> 
# Plugins
| Feature                          | Plugin Name                                                                                                                |
| -------------------------------- | ----------------------                                                                                                     |
| Voice messages                   | [VoiceMessages](https://github.com/mantikafasi/AliucordPlugins/raw/builds/VoiceMessages.zip)                               |
| Audio playing                    | [AudioPlayer](https://github.com/Archimedes9500/Halkiion-rushiiMachine-aliucord-plugins/raw/builds/AudioPlayer.zip) (fork) |
| Forwarding messages              | [ForwardMessages](https://github.com/reisxd/AliucordPlugins/raw/builds/ForwardMessages.zip)                                |
| Closing DMs from bottomsheet     | [CloseDMs](https://github.com/reisxd/AliucordPlugins/raw/builds/ForwardMessages.zip)                                     |
| SlashCommandsV3                  | [SlashCommandsFix](https://github.com/LavaDesu/Awoocord/raw/builds/SlashCommandsFixBeta.zip) 🚧 |
| ComponentsV2                     | [ComponentsV2](https://github.com/LavaDesu/Awoocord/raw/builds/ComponentsV2Beta.zip) 🚧         |
| Quests                           | [ViewQuests](https://github.com/nyxiereal/AliucordPlugins/raw/builds/ViewQuests.zip) 🚧         |
| Summaries                        | [Summaries](https://github.com/MCausc78/RNSucks/raw/builds/Summaries.zip) 🚧                    |
| Embed playing                    | [PlayableEmbeds](https://github.com/Enovale/AliucordPlugins/raw/builds/PlayableEmbeds.zip) (fork)                          |
| Swiping to reply                 | [SwipeToReply](https://github.com/RazerTexz/My-plugins/raw/builds/SwipeToReply.zip)                                        |
| Nick command                     | [SlashNick](https://github.com/rushiiMachine/aliucord-plugins/raw/builds/SlashNick.zip)                                    |
| Changing pronouns & display name | [MoreProfile](https://github.com/Halkiion/aliucord-plugins/raw/builds/MoreProfile.zip)                                     |
| Duplicate channel                | [CloneChannels](https://github.com/DiamondMiner88/aliucord-plugins/raw/builds/CloneChannels.zip)                           |
| Discovery                        | [Discovery](https://github.com/wingio/plugins/raw/builds/Discovery.zip) 💣                      |
| Devices page                     | [Sessions](https://github.com/wingio/plugins/raw/builds/Sessions.zip) 💣                        |
| Webhooks                         | [EditWebhooks](https://github.com/c10udburst-discord/aliucord-plugins/raw/builds/EditWebhooks.zip)                         |
| Sorted searching                 | [Scout](https://github.com/LavaDesu/Awoocord/raw/builds/Scout.zip)                                                         |
| Markdown syntax                  | [MoreHighlight](https://github.com/wingio/plugins/raw/builds/MoreHighlight.zip)                                            |
| Connection icons                 | [UnknownConnectionIcons](https://github.com/nyakowint/AliuPlugins/raw/builds/UnknownConnectionIcons.zip)                   |
| Copy message link                | [MessageLinkContext](https://github.com/wingio/plugins/raw/builds/MessageLinkContext.zip)                                  |
| Delete embed                     | [DeleteEmbeds](https://github.com/c10udburst-discord/aliucord-plugins/raw/builds/DeleteEmbeds.zip)                         |
| Favorite channels                | [FavoriteChannels](https://github.com/zt64/aliucord-plugins/raw/builds/FavoriteChannels.zip)                               |
| New emojis                       | [NewEmojis](https://github.com/Juby210/Aliucord-plugins/raw/builds/NewEmojis.zip)                                          |
| Favorite GIFs                    | [Frecents](https://github.com/zt64/aliucord-plugins/raw/builds/Frecents.zip)                                               |
| Member since                     | [UserDetails](https://github.com/Juby210/Aliucord-plugins/raw/builds/UserDetails.zip)                                      |
| DMTabsV2                         | [DMTabs](https://github.com/OmegaSunkey/awesomeplugins/raw/builds/DMTabs.zip)                                              |

# Built-in to Aliucord
- Viewing forwarded messages
- Upload size (new 10mb limit for non-nitro users)
- Display names
- Pomelo usernames (`@username` instead of `username#1234`)
- Polls
- Pronouns
- New profile badges (quests, developer, etc.) (soon in core)
- Avatar decorations (soon in core, at the moment you can use [this](Backported%20Features.html#aliucord-from-storage))

# Aliucord from storage
:::tip Note
- This method is used for core features that are not merged yet, this means that they are still in an Alpha state, use at your own risk.
- You can't use multiple `.zip`s at once, you'll need to decide which features you prefer.
:::
1. How to use Aliucord from storage:
    1. Download the `.zip` file from the links below
    2. Extract it and find `Aliucord.zip` inside it
    3. Move `Aliucord.zip` to your `Aliucord` folder ([video tutorial](https://streamable.com/dj705w))
    5. Open Aliucord settings
    6. Enable [Developer Mode](https://files.catbox.moe/10707n.jpg) & [Aliucord from storage](https://files.catbox.moe/lruiyx.jpg) ([video tutorial](https://streamable.com/pxcs34))
    7. Restart Aliucord

2. Backports that use this method:
    - [Guild tags, nameplates, display name styles, avatar decorations (All in One)](https://nightly.link/LavaDesu/Aliucord/workflows/build/next/build.zip?status=completed)
      - [Guild tags](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Ffluff_guildtag/build.zip?status=completed)
      - [Nameplates](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_nameplate/build.zip?status=completed)
      - [Display name styles](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_displaynamestyles/build.zip?status=completed)
      - [Avatar decorations](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_avatar/build.zip?status=completed)
    - [Account Standing (also includes avatar decorations)](https://nightly.link/omardotdev/aliucar/workflows/build/feat%2Faccount-standing/build.zip?status=completed)

For a full list of features currently missing/being worked on, see [Missing Features](./Missing%20Features.md)
