# Jensen Theme for Vim

Bring the Cyber Renaissance to Vim with this theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your editor into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes during extended coding sessions
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Universal Vim Support**: Works with Vim, Neovim, and compatible editors

## Installation

### For Vim

1. Copy `jensen.vim` to your Vim colors directory:
   - **macOS/Linux**: `~/.vim/colors/`
   - **Windows**: `%USERPROFILE%\vimfiles\colors\`
2. Create the directory if it doesn't exist:
   ```bash
   mkdir -p ~/.vim/colors
   cp jensen.vim ~/.vim/colors/
   ```
3. Add to your `.vimrc`:
   ```vim
   colorscheme jensen
   ```
4. Restart Vim or reload: `:source $MYVIMRC`

### For Neovim

1. Copy `jensen.vim` to Neovim's colors directory:
   - **macOS/Linux**: `~/.config/nvim/colors/`
   - **Windows**: `%LOCALAPPDATA%\nvim\colors\`
2. Add to your `init.vim` or `init.lua`:
   ```vim
   colorscheme jensen
   ```
   Or in Lua:
   ```lua
   vim.cmd('colorscheme jensen')
   ```

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, canvas                                  |
| **White**         | `#FBFBFB`   | Primary text, foreground elements                        |
| **Silver Sand**   | `#C4C7C4`   | Comments, muted text, secondary information              |
| **Marigold**      | `#EDA622`   | Primary accent, signature gold highlight, selected items |
| **Electronic Copper** | `#E55D02` | Secondary accent, hover states, warm highlights        |
| **French Lime**   | `#A0FF33`   | Success states, positive feedback, strings               |
| **Pacific Blue**  | `#0EA2C9`   | Information states, links, functions                     |
| **Imperial Red**  | `#ED333C`   | Error states, warnings, critical alerts                  |

## Tips

- **Terminal Colors**: For the best experience, use a terminal that supports 256 colors or true color
- **Syntax Highlighting**: Ensure syntax highlighting is enabled: `syntax enable`
- **Airline/Lightline**: Check out the Jensen theme for vim-airline or lightline for matching statuslines
- **True Color**: Enable true color support in your `.vimrc`:
  ```vim
  set termguicolors
  ```

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Terminals**: iTerm2, Alacritty, Warp, Hyper, Windows Terminal
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

