# Jensen for [Sublime Text](https://sublimetext.com)

> Augment your editor with Cyber Renaissance aesthetics

![Jensen Theme Screenshot](./screenshot.png)

## About

Jensen is a theme collection inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. This Sublime Text theme brings the signature gold and copper tones of the Cyber Renaissance to your code editor, featuring high contrast and purposeful color choices against a deep carbon black background.

Created by **tomaytotomato** as a tribute to the stunning UI/UX design of Deus Ex: Human Revolution by Eidos Montreal.

## Color Palette

Jensen uses a carefully crafted color scheme:

| Color      | Hex       | Purpose                    |
|------------|-----------|----------------------------|
| Background | `#141514` | Deep carbon black          |
| Foreground | `#FBFBFB` | Bright white text          |
| Comment    | `#C4C7C4` | Muted gray for comments    |
| Green      | `#A0FF33` | French lime (strings/data) |
| Blue       | `#0EA2C9` | Electric blue (keywords/types) |
| Red        | `#F25244` | Alert red (errors/warnings) |
| Gold       | `#EDA622` | Signature gold (classes/emphasis) |

### Syntax Coloring

- **Gold** (`#EDA622`): Class names, important declarations, headings
- **Blue** (`#0EA2C9`): Keywords (`public`, `class`, `void`), types, constants
- **Green** (`#A0FF33`): String literals, functions, attributes
- **Red** (`#F25244`): Reserved for errors, warnings, and deprecated items
- **Gray** (`#C4C7C4`): Comments


## Installation

### Package Control

1. Open the command palette with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
2. Type "Install Package" and select `Package Control: Install Package`
3. Search for "Jensen Color Scheme" and press Enter

### Manual Installation

1. Download `jensen.tmTheme` from this repository
2. Open Sublime Text and go to `Preferences → Browse Packages...`
3. Create a folder called `User` if it doesn't exist
4. Copy `jensen.tmTheme` into the `User` folder
5. Go to `Preferences → Color Scheme` and select `Jensen`

For detailed installation instructions, see [INSTALL.md](./INSTALL.md).

## Features

- **High Contrast**: Distinct foreground/background separation for optimal readability
- **Signature Gold**: The iconic `#EDA622` gold highlights classes and important declarations
- **Intuitive Colors**: Keywords and structure in blue, data/strings in green, emphasis in gold
- **Reserved Red**: Red color reserved exclusively for errors and warnings, avoiding visual fatigue
- **Markdown Support**: Enhanced styling for Markdown documents with gold headings
- **JSON Highlighting**: Nested level alternating between gold keys and green values

## Inspiration

This theme is a tribute to **Deus Ex: Human Revolution** by Eidos Montreal and the cyberpunk aesthetic that defined a generation of gaming.

*"I never asked for this..."*

## License

[MIT License](./LICENSE)
