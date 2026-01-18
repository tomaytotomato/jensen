# Jensen Theme for Prism.js

Bring the Cyber Renaissance to your code blocks with this Prism.js theme inspired by the iconic aesthetics of **Deus Ex: Human Revolution**. Featuring signature gold and copper tones set against dark backgrounds, Jensen transforms your syntax highlighting into an augmented experience.

![Jensen Theme](../public/jensen_large.png)

**Creator:** tomaytotomato

## Features

- 🎨 **Cyber Renaissance Aesthetic**: Rich gold (`#EDA622`) and copper tones against deep carbon black backgrounds
- 🌙 **Dark Theme Optimized**: Easy on the eyes for code documentation
- 🎯 **Carefully Crafted Colors**: Optimized for readability and visual hierarchy
- 💻 **Universal**: Works with any Prism.js setup on websites, blogs, and documentation

## Installation

### Method 1: Link After Prism CSS

1. Include Prism.js in your HTML as normal
2. Add Jensen theme after the Prism CSS:
   ```html
   <link href="prism.css" rel="stylesheet" />
   <link href="path/to/jensen-prism.css" rel="stylesheet" />
   ```

### Method 2: Replace Default Theme

1. Use `jensen-prism.css` instead of the default Prism theme:
   ```html
   <link href="path/to/jensen-prism.css" rel="stylesheet" />
   ```

### Method 3: Import in CSS

```css
@import url('path/to/jensen-prism.css');
```

## Usage

Once installed, Jensen will automatically style all your Prism code blocks:

```html
<pre><code class="language-javascript">
// Your code here will be augmented with Jensen colors
const jensen = 'amazing';
console.log(jensen);
</code></pre>
```

## Supported Languages

Jensen for Prism.js supports all languages that Prism.js supports, including:

- JavaScript, TypeScript
- Python, Ruby, PHP
- HTML, CSS, SCSS
- Bash, PowerShell
- C, C++, C#, Java, Kotlin
- Go, Rust, Swift
- And many more!

## Color Palette

The Jensen theme uses a carefully curated palette inspired by Deus Ex: Human Revolution's iconic UI design:

| Color Name        | Hex Code    | Usage                                                    |
|-------------------|-------------|----------------------------------------------------------|
| **Eerie Black**   | `#141514`   | Code block background                                    |
| **White**         | `#FBFBFB`   | Default text, plain code                                 |
| **Silver Sand**   | `#C4C7C4`   | Comments, documentation                                  |
| **Marigold**      | `#EDA622`   | Keywords, operators, signature gold highlight            |
| **Electronic Copper** | `#E55D02` | Functions, class names                                |
| **French Lime**   | `#A0FF33`   | Strings, regex patterns                                  |
| **Pacific Blue**  | `#0EA2C9`   | Numbers, constants, built-ins                            |
| **Imperial Red**  | `#ED333C`   | Important keywords, deleted lines                        |

## Customization

You can customize Jensen by editing `jensen-prism.css`. Common customizations:

```css
/* Adjust background opacity */
pre[class*="language-"] {
  background: rgba(20, 21, 20, 0.95);
}

/* Change border style */
pre[class*="language-"] {
  border-left: 3px solid #EDA622;
}

/* Customize line numbers (if using line-numbers plugin) */
.line-numbers .line-numbers-rows {
  border-right: 1px solid #EDA622;
}
```

## Tips

- **Line Numbers**: Use Prism's line-numbers plugin for enhanced code blocks
- **Line Highlight**: The line-highlight plugin looks great with Jensen's gold accents
- **Copy Button**: Add a copy-to-clipboard plugin - Jensen's colors work perfectly with it
- **Dark Mode**: Jensen is designed for dark mode but can be adapted for light backgrounds

## Example Integration

Complete example with Prism plugins:

```html
<!DOCTYPE html>
<html>
<head>
  <link href="prism.css" rel="stylesheet" />
  <link href="jensen-prism.css" rel="stylesheet" />
</head>
<body>
  <pre class="line-numbers"><code class="language-javascript">
function augment() {
  console.log('I never asked for this...');
}
  </code></pre>
  
  <script src="prism.js"></script>
</body>
</html>
```

## Related Themes

Jensen is available for **30+ applications**. Check out the [main repository](https://github.com/tomaytotomato/jensen) for themes for:

- **IDEs**: IntelliJ IDEA, VS Code, Xcode, Sublime Text
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

