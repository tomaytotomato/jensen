# Jensen Theme for Visual Studio Code

Bring your code editor into the Cyber Renaissance with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your VSCode workspace into an augmented experience.

![Jensen Theme](../src/img/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during long coding sessions
- 🎯 **Carefully Crafted Syntax Colors**: Optimized for readability and visual hierarchy
- 🔧 **Complete UI Integration**: Every element of VSCode themed consistently
- 💻 **Multi-language Support**: Works beautifully with JavaScript, TypeScript, Python, Java, C++, and more

## Installation

### From VSIX File

1. Download the latest `.vsix` file from the [releases page](https://github.com/tomaytotomato/jensen/releases)
2. Open VSCode
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
4. Type "Extensions: Install from VSIX" and select it
5. Navigate to the downloaded `.vsix` file and select it
6. Restart VSCode when prompted

### From Source

1. Clone the repository:
   ```bash
   git clone https://github.com/tomaytotomato/jensen.git
   ```

2. Copy the `vscode` directory to your VSCode extensions folder:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\jensen-theme`
   - **macOS**: `~/.vscode/extensions/jensen-theme`
   - **Linux**: `~/.vscode/extensions/jensen-theme`

3. Restart VSCode

4. Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (macOS) to open the theme selector

5. Select **Jensen** from the list

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name              | Hex       | Usage                                                    |
|-------------------------|-----------|----------------------------------------------------------|
| **Eerie Black**         | `#141514` | Main background, editor canvas, terminal background      |
| **White**               | `#FBFBFB` | Primary text, foreground elements, code syntax           |
| **Silver Sand**         | `#C4C7C4` | Comments, muted text, secondary information              |
| **Marigold**            | `#EDA622` | Primary accent, keywords, highlights, active states      |
| **Electronic Copper**   | `#E55D02` | Constants, numbers, HTML attributes, secondary accent    |
| **French Lime**         | `#A0FF33` | Strings, functions, success states, added files          |
| **Pacific Blue**        | `#0EA2C9` | Types, classes, info states, modified files              |
| **Imperial Red**        | `#ED333C` | Errors, deletions, warnings, critical alerts             |
| **Dutch White**         | `#F2E2BA` | Selection text, highlighted foreground                   |
| **Café Noir**           | `#503A1D` | Selection background, active states                      |
| **Dark Goldenrod**      | `#BB831B` | Hover states, secondary gold highlights                  |

### Syntax Highlighting Examples

- **Keywords & Storage**: Gold (`#EDA622`) - `const`, `let`, `function`, `class`, `if`, `return`
- **Strings**: French Lime (`#A0FF33`) - `"Hello World"`, `'text'`
- **Functions**: French Lime (`#A0FF33`) - Function names and calls
- **Numbers & Constants**: Electronic Copper (`#E55D02`) - `42`, `true`, `false`, `null`
- **Types & Classes**: Pacific Blue (`#0EA2C9`) - Class names, types, interfaces
- **Comments**: Silver Sand (`#C4C7C4`) - Single-line and multi-line comments (italicized)
- **Variables**: White (`#FBFBFB`) - Variable names
- **Attributes**: Gold/Copper tones - HTML/JSX attributes

## UI Theme Details

### Editor
- Background: Deep carbon black (`#141514`)
- Active line: Subtle highlight (`#1a1a1a`)
- Selection: Gold brown (`#503a1d`) with cream text (`#F2E2BA`)
- Find/Replace: Gold highlights with matching borders
- Line numbers: Muted gray with gold active line number

### Sidebar & Activity Bar
- Background: Dark gray (`#1a1a1a`)
- Active item: Gold underline/border (`#EDA622`)
- Badge: Gold background with black text

### Status Bar
- Background: Carbon black (`#141514`)
- Debugging mode: Gold brown background (`#503a1d`)

### Terminal
- Follows the same color scheme as iTerm theme
- ANSI colors properly mapped
- Gold cursor (`#EDA622`)

### Tabs
- Active tab: Gold top border (`#EDA622`)
- Inactive unfocused tab: Muted gold border (`#BB831B`)
- Modified files: Blue indicator (`#0EA2C9`)

## Screenshots

> **Note**: Add screenshots here showing various programming languages and UI elements

## Recommended Settings

For the best experience with Jensen theme, consider these VSCode settings:

```json
{
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', 'JetBrains Mono', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "workbench.iconTheme": "material-icon-theme",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true
}
```

## Building the Extension

To build a `.vsix` package for distribution:

1. Install `vsce` (Visual Studio Code Extension Manager):
   ```bash
   npm install -g @vscode/vsce
   ```

2. Navigate to the vscode directory:
   ```bash
   cd vscode
   ```

3. Package the extension:
   ```bash
   vsce package
   ```

4. This will create a `jensen-theme-1.0.0.vsix` file

## Contributing

If you like this theme or think it needs a tweak, please get involved! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Other Platforms

Jensen is available for multiple platforms:

- **[IntelliJ IDEA](../intellij)** - Full IDE theme
- **[iTerm](../iterm2)** - Terminal color scheme
- **[Terminal.app](../terminal)** - macOS terminal
- **[Firefox](../firefox)** - Browser theme
- **[Tailwind CSS](../tailwind)** - Utility classes and components

## Credits

- **tomaytotomato** - Theme creator
- **[Eidos Montreal](https://www.eidosmontreal.com/)** - For creating Deus Ex: Human Revolution
- **[Eric Bellefeuille](https://www.behance.net/gallery/2465641/Deus-Ex-Human-Revolution-User-Interface)** - For the outstanding UI design work in the game
- **[Themer.dev](https://themer.dev)** - For their awesome tool

## License

[MIT License](../LICENSE)

---

*"I never asked for this..."*

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) for more information and to explore other themes.
