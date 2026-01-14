<p align="center" width="100%">
    <img src="src/img/jensen_large.png">
</p>

Jensen is a theme inspired from the awesome video
game [Deus Ex Human Revolution](https://youtu.be/0af2wvSdwwI)

Bring your machine into the Cyber Renaissance with these gold and copper tones.

## 🌐 Website

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) for an interactive showcase of all available themes and platforms.

The website features:
- Live color palette preview
- Searchable app directory
- Installation guides for each platform
- Deus Ex inspired Cyber Renaissance design

See [website/README.md](./website/README.md) for development information.

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design.

| Color Name        | Hex Code    | RGB           | Usage Examples & Context                                                                                           |
|-------------------|-------------|---------------|--------------------------------------------------------------------------------------------------------------------|
| **Eerie Black**   | `#141514`   | `20 21 20`    | Main background, terminal background, editor canvas, dark UI panels                                                |
| **White**         | `#FBFBFB`   | `251 251 251` | Primary text, foreground elements, code syntax, high contrast content                                              |
| **Silver Sand**   | `#C4C7C4`   | `196 199 196` | Comments, muted text, disabled states, secondary information, ANSI bright black                                    |
| **Marigold**      | `#EDA622`   | `237 166 34`  | Primary accent, signature gold highlight, selected items, active states, warning buttons, brand color              |
| **Electronic Copper** | `#E55D02` | `229 93 2`  | Secondary accent, hover states, warm highlights, alternative buttons, copper tones                                 |
| **French Lime**   | `#A0FF33`   | `160 255 51`  | Success states, ANSI green, positive feedback, confirmation buttons, strings in code, safe zone indicators         |
| **Pacific Blue**  | `#0EA2C9`   | `14 162 201`  | Information states, ANSI cyan, links, function names in code, tech/data highlights, info buttons                   |
| **Imperial Red**  | `#ED333C`   | `237 51 60`   | Error states, ANSI red, danger buttons, warnings, critical alerts, important highlights, deletion confirmations    |
| **Dutch White**   | `#F2E2BA`   | `242 226 186` | Light gold tone, subtle highlights, warm backgrounds, documentation backgrounds                                    |
| **Café Noir**     | `#503A1D`   | `80 58 29`    | Dark gold shadows, hover states on gold elements, depth layers, muted gold backgrounds                             |
| **Dark Goldenrod**| `#BB831B`   | `187 131 27`  | Medium gold tone, active gold states, secondary gold highlights, hover effects                                     |

### Usage Guidelines

- **Terminals**: Use French Lime for ANSI green, Pacific Blue for ANSI cyan, Imperial Red for ANSI red
- **Code Editors**: Marigold for keywords/functions, French Lime for strings, Pacific Blue for types/classes, Silver Sand for comments
- **Web/UI**: Marigold for primary CTAs, Electronic Copper for secondary actions, French Lime for success, Imperial Red for errors
- **Accent Hierarchy**: Marigold (primary) → Electronic Copper (secondary) → French Lime/Pacific Blue (contextual) → Imperial Red (critical)

## Apps

The Jensen theme is available for **30+ applications** across IDEs, terminals, browsers, and more! All apps are managed centrally in [`apps.json`](./apps.json).

### Featured Applications

- **IDEs**: [IntelliJ IDEA](./intellij), [VS Code](./vscode), [Xcode](./xcode)
- **Terminals**: [iTerm2](iterm2), [Alacritty](alacritty), [Warp](./warp), [Hyper](./hyper)
- **Editors**: [Vim](./vim), [Sublime Text](./sublime), [Emacs](./emacs)
- **Browsers**: [Firefox](./firefox), [Chrome](./chrome), [Brave](./brave)
- **Web Dev**: [Tailwind CSS](./tailwind), [Prism](./prism)
- **Tools**: [tmux](./tmux), [Alfred](./alfred), [Slack](./slack)

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes with search and filtering.

### Adding New Applications

To add a new application theme to the repository:

1. Create a directory for your app in the root (e.g., `myapp/`)
2. Add an SVG icon to `public/icons` (preferred)
3. Include theme files and a README.md with installation instructions
4. Update [`apps.json`](./apps.json) with your app's metadata:

```json
{
  "id": "myapp",
  "name": "My App",
  "description": "Brief description of the theme",
  "category": "ide|editor|terminal|browser|web|tool|desktop|app|design",
  "status": "available",
  "platform": ["macOS", "Windows", "Linux"],
  "directory": "myapp",
  "icon": "myapp/myapp.svg",
  "screenshot": null,
  "links": {
    "github": "https://github.com/tomaytotomato/jensen/tree/main/myapp",
    "marketplace": null,
    "docs": "./myapp"
  },
  "tags": ["Your", "Tags", "Here"],
  "files": ["theme-file.ext"]
}
```

The website will automatically display your theme with search, filtering, and category support.

## Fork and get involved

If you like this theme or think it needs a tweak here or there, please get involved.

Play around with the theme on [Themer.dev](https://themer.dev/?colors.dark.shade7=%23F2F2F2&colors.dark.shade0=%23141514&colors.dark.accent7=%23EDA622&colors.dark.accent6=%23A04201&colors.dark.accent1=%23EDA622&colors.dark.accent4=%23F5FFE5&colors.dark.accent5=%23E55D02&colors.dark.accent3=%23EDA622&colors.dark.accent2=%23F7CF6F&colors.dark.accent0=%23ED333C&calculateIntermediaryShades.dark=true)

## Thanks

- [Themer.dev](https://themer.dev) for their awesome tool
- [Eidos interactive](https://www.eidosmontreal.com/games/deus-ex-human-revolution/) for making an
  outstanding game
- [Dracula organisation](https://draculatheme.com/) for inspiring me to make a dark theme
- [Eric Bellefeuille ](https://www.behance.net/gallery/2465641/Deus-Ex-Human-Revolution-User-Interface/modules/18399319) for his awesome design work in the game.
- [Game UI Database](https://gameuidatabase.com/gameData.php?id=283)

## License

[MIT License](./LICENSE)

*"I never asked for this..."*
