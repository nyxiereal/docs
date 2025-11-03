# What features have been backported to Aliucord?

:::tip Legend
- 💣: Broken or partially broken
- 🚧: Still in development or beta
:::

# Plugins
| Feature                          | Plugin Name            |
| -------------------------------- | ---------------------- |
| Voice messages                   | VoiceMessages          |
| Audio playing                    | AudioPlayer 💣          |
| Forwarding messages              | ForwardMessages        |
| Closing DMs from bottomsheet     | CloseDMs               |
| Slash commands V3                | SlashCommandsFixBeta 🚧 |
| Components V2                    | ComponentsV2Beta 🚧     |
| Quests                           | ViewQuests 🚧           |
| Summaries                        | Summaries 🚧            |
| Embed playing                    | PlayableEmbeds         |
| Swiping to reply                 | SwipeToReply           |
| Nick command                     | SlashNick              |
| Changing pronouns & display name | MoreProfile            |
| Duplicate channel                | CloneChannels          |
| Discovery                        | Discovery 💣            |
| Devices page                     | Sessions 💣             |
| Webhooks                         | EditWebhooks           |
| Sorted searching                 | Scout                  |
| Markdown syntax                  | MoreHighlight          |
| Connection icons                 | UnknownConnectionIcons |
| Copy message link                | MessageLinkContext     |
| Delete embed                     | DeleteEmbeds           |
| Favorite channels                | FavoriteChannels       |
| New emojis                       | NewEmojis              |
| Favorite GIFs                    | Frecents 💣🚧            |
| Member since                     | UserDetails            |

# Built-in to Aliucord
- Viewing forwarded messages
- Upload size (new 10mb limit for non-nitro users)
- Display names
- Pomelo usernames (`@username` instead of `username#1234`)
- Polls
- Pronouns
- New profile badges (quests, developer, etc.)

# Aliucord from storage
:::tip Note
- This method is used for core features that are not merged yet, this means that they are still in an Alpha state, use at your own risk.
- You can't use multiple `.zip`s at once, you'll need to decide which features you prefer.
:::
1. How to use Aliucord from storage:
    1. Download the `.zip` file from the links below
    2. Extract it and find `Aliucord.zip` inside it
    3. Move `Aliucord.zip` to your `Aliucord` folder
    5. Open Aliucord settings
    6. Enable [Developer Mode](https://files.catbox.moe/10707n.jpg) & [Aliucord from storage](https://files.catbox.moe/lruiyx.jpg)
    7. Restart Aliucord

2. Backports that use this method:
    - [Guild tags](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Ffluff_guildtag/build.zip?status=completed)
    - [Nameplates](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_nameplate/build.zip?status=completed)
    - [Display name styles](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_displaynamestyles/build.zip?status=completed)
    - [Avatar decor](https://nightly.link/LavaDesu/Aliucord/workflows/build/feat%2Fdecor_avatar/build.zip?status=completed)
    - [Account Standing](https://nightly.link/omardotdev/aliucar/workflows/build/feat%2Faccount-standing/build.zip?status=completed)
---
For a full list of features currently missing/being worked on, see [Missing Features](./Missing%20Features.md)
