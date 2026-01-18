# Jensen Theme for Vim Lightline

Bring the Cyber Renaissance to your Vim statusline with this Lightline theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones, Jensen transforms your statusline into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against dark backgrounds
- 🎯 **Carefully Crafted Colors**: Optimized for readability in the statusline
- 💻 **Lightline Compatible**: Designed specifically for the vim-lightline plugin
- ✨ **Pairs Perfectly**: Complements the Jensen Vim color scheme

## Prerequisites

You must have [lightline.vim](https://github.com/itchyny/lightline.vim) installed:

```vim
" Using vim-plug
Plug 'itchyny/lightline.vim'

" Using Vundle
Plugin 'itchyny/lightline.vim'

" Using pathogen
git clone https://github.com/itchyny/lightline.vim ~/.vim/bundle/lightline.vim
```

## Installation

### For Vim

1. Copy `jensen-light.vim` to your Vim autoload directory:
   ```bash
   mkdir -p ~/.vim/autoload/lightline/colorscheme/
   cp jensen-light.vim ~/.vim/autoload/lightline/colorscheme/jensen.vim
   ```

2. Add to your `.vimrc`:
   ```vim
   let g:lightline = {
         \ 'colorscheme': 'jensen',
         \ }
   ```

3. Restart Vim or reload: `:source $MYVIMRC`

### For Neovim

1. Copy to Neovim's autoload directory:
   ```bash
   mkdir -p ~/.config/nvim/autoload/lightline/colorscheme/
   cp jensen-light.vim ~/.config/nvim/autoload/lightline/colorscheme/jensen.vim
   ```

2. Add to your `init.vim` or `init.lua`:
   ```vim
   let g:lightline = {
         \ 'colorscheme': 'jensen',
         \ }
   ```
   Or in Lua:
   ```lua
   vim.g.lightline = {
     colorscheme = 'jensen',
   }
   ```

## Complete Example Configuration

```vim
let g:lightline = {
      \ 'colorscheme': 'jensen',
      \ 'active': {
      \   'left': [ [ 'mode', 'paste' ],
      \             [ 'gitbranch', 'readonly', 'filename', 'modified' ] ]
      \ },
      \ 'component_function': {
      \   'gitbranch': 'FugitiveHead'
      \ },
      \ }
```

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Main background, canvas                                  |
| **White**         | `#FBFBFB`   | Primary text, foreground elements                        |
| **Silver Sand**   | `#C4C7C4`   | Comments, muted text, secondary information              |
| **Marigold**      | `#EDA622`   | Primary accent, signature gold highlight, mode indicator |
| **Electronic Copper** | `#E55D02` | Secondary accent, warnings                            |
| **French Lime**   | `#A0FF33`   | Success states, insert mode                              |
| **Pacific Blue**  | `#0EA2C9`   | Information states, visual mode                          |
| **Imperial Red**  | `#ED333C`   | Error states, replace mode                               |

## Tips

- **Pair with Jensen Vim**: Use the Jensen Vim color scheme for a cohesive look
- **Font Powerline**: Install Powerline fonts for enhanced statusline symbols
- **Customize Components**: Lightline is highly customizable - check the documentation
- **True Color**: Enable true color support for the best appearance:
  ```vim
  set termguicolors
  ```

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
- **Editors**: Vim, Emacs, BBEdit
- **Terminals**: iTerm2, Alacritty, Warp, Hyper
- **Browsers**: Firefox, Chrome, Brave
- **And many more!**

Visit the [Jensen Theme website](https://tomaytotomato.github.io/jensen/) to browse all available themes.

## Credits

Inspired by the stunning UI/UX design of **Deus Ex: Human Revolution** by Eidos Montreal.

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

*"I never asked for this... but I'm glad it exists."*

