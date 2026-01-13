# Jensen Theme - Visual Guide

This document describes the visual appearance of the Jensen theme for VSCode.

## Core Design Principles

The Jensen theme brings the **Cyber Renaissance** aesthetic from Deus Ex: Human Revolution to your code editor, featuring:

1. **Dark Foundation**: Deep carbon black (`#141514`) provides a comfortable base for long coding sessions
2. **Signature Gold**: The iconic gold accent (`#EDA622`) guides your eye to important elements
3. **High Contrast**: Bright white text (`#FBFBFB`) on dark backgrounds ensures excellent readability
4. **Purposeful Colors**: Each color serves a functional purpose in the coding experience

## Color Mapping by Element Type

### Syntax Highlighting

| Element Type          | Color               | Hex       | Example                        |
|-----------------------|---------------------|-----------|--------------------------------|
| **Keywords**          | Marigold (Gold)     | `#EDA622` | `const`, `let`, `function`, `class`, `if`, `return` |
| **Strings**           | French Lime (Green) | `#A0FF33` | `"Hello World"`, `'text'`      |
| **Functions**         | French Lime (Green) | `#A0FF33` | Function names and calls       |
| **Numbers/Constants** | Electronic Copper   | `#E55D02` | `42`, `true`, `false`, `null`  |
| **Types/Classes**     | Pacific Blue        | `#0EA2C9` | Class names, interfaces, types |
| **Comments**          | Silver Sand (Gray)  | `#C4C7C4` | `// comment` (italicized)      |
| **Variables**         | White               | `#FBFBFB` | Variable names                 |
| **Operators**         | White               | `#FBFBFB` | `+`, `-`, `=`, `&&`, etc.      |
| **Tags (HTML/JSX)**   | Marigold (Gold)     | `#EDA622` | `<div>`, `<Component>`         |
| **Attributes**        | Electronic Copper   | `#E55D02` | `className`, `id`, props       |

### UI Elements

| UI Element               | Color                  | Hex       | Description                              |
|--------------------------|------------------------|-----------|------------------------------------------|
| **Editor Background**    | Eerie Black            | `#141514` | Main editing canvas                      |
| **Sidebar Background**   | Dark Gray              | `#1a1a1a` | File explorer, search, git panels        |
| **Activity Bar**         | Eerie Black            | `#141514` | Left-most icon bar                       |
| **Status Bar**           | Eerie Black            | `#141514` | Bottom bar                               |
| **Panel Background**     | Dark Gray              | `#1a1a1a` | Terminal, output, problems panels        |
| **Active Line**          | Subtle Highlight       | `#1a1a1a` | Current line background                  |
| **Selection**            | Café Noir (Gold Brown) | `#503a1d` | Selected text background                 |
| **Selection Text**       | Dutch White (Cream)    | `#F2E2BA` | Text color when selected                 |
| **Cursor**               | Marigold (Gold)        | `#EDA622` | Text cursor                              |
| **Line Numbers**         | Muted Gray             | `#5a5a5a` | Line numbers in gutter                   |
| **Active Line Number**   | Marigold (Gold)        | `#EDA622` | Current line number                      |
| **Active Tab Border**    | Marigold (Gold)        | `#EDA622` | Top border of active tab                 |
| **Focus Border**         | Marigold (Gold)        | `#EDA622` | Border around focused elements           |

### Status Indicators

| Status Type        | Color               | Hex       | Usage                                    |
|--------------------|---------------------|-----------|------------------------------------------|
| **Success/Added**  | French Lime (Green) | `#A0FF33` | Git added files, success messages        |
| **Info/Modified**  | Pacific Blue        | `#0EA2C9` | Git modified files, info messages        |
| **Warning**        | Marigold (Gold)     | `#EDA622` | Warnings, important notices              |
| **Error/Deleted**  | Imperial Red        | `#ED333C` | Errors, git deleted files                |
| **Conflict**       | Electronic Copper   | `#E55D02` | Merge conflicts                          |

## Language-Specific Examples

### JavaScript/TypeScript

```javascript
// Comments are gray and italicized (#C4C7C4)
const greeting = "Hello";  // 'const' is gold, string is green
function sayHello(name) {  // 'function' is gold, function name is green
  return `${greeting}, ${name}!`;  // return is gold, template string is green
}

class User {  // 'class' is gold, 'User' is blue
  constructor(name) {  // 'constructor' is gold, function name is green
    this.name = name;  // 'this' is gold italics, 'name' is white
  }
}
```

### Python

```python
# Comments are gray (#C4C7C4)
def calculate(x: int) -> int:  # 'def' is gold, types are blue
    result = x * 2  # variable is white, number is copper
    return result  # 'return' is gold

class Calculator:  # 'class' is gold, 'Calculator' is blue
    pass
```

### HTML/JSX

```html
<!-- Comments are gray -->
<div className="container">  <!-- tag is gold, attribute is copper -->
  <h1>Hello World</h1>  <!-- tag is gold, content is green (string) -->
  <button onClick={handleClick}>  <!-- attribute is copper -->
    Click Me  <!-- string is green -->
  </button>
</div>
```

### CSS/SCSS

```css
/* Comments are gray */
.container {  /* class name is gold */
  background: #141514;  /* property is blue, value is copper */
  color: #FBFBFB;
  font-size: 14px;  /* numbers are copper */
}
```

## Terminal Colors

The integrated terminal uses ANSI color mappings consistent with the iTerm theme:

- **Black**: `#141514` (Background)
- **Red**: `#ED333C` (Errors)
- **Green**: `#A0FF33` (Success, strings in output)
- **Yellow/Gold**: `#EDA622` (Warnings)
- **Blue**: `#0EA2C9` (Info, links)
- **Cyan**: `#DED765` (Secondary info)
- **White**: `#FBFBFB` (Regular text)

## Debugging Mode

When in debugging mode:
- Status bar changes to gold-brown background (`#503a1d`)
- Breakpoint icons are red (`#ED333C`)
- Current debug line is highlighted with gold

## Git Integration

- **Added files**: Green text (`#A0FF33`)
- **Modified files**: Blue text (`#0EA2C9`)
- **Deleted files**: Red text (`#ED333C`)
- **Untracked files**: Green text (`#A0FF33`)
- **Conflicted files**: Copper text (`#E55D02`)
- **Ignored files**: Dark gray text (`#5a5a5a`)

## Contrast Ratios

The theme maintains WCAG AA accessibility standards:
- White text on black background: ~15:1 (Excellent)
- Gold accent on black: ~7:1 (Good)
- Green text on black: ~12:1 (Excellent)
- Blue text on black: ~5:1 (Good)

## Best Practices

For the optimal Jensen experience:

1. **Font Recommendations**: 
   - Fira Code (with ligatures)
   - Cascadia Code
   - JetBrains Mono
   - Source Code Pro

2. **Font Size**: 13-15px for most displays

3. **Line Height**: 1.5-1.6 for comfortable reading

4. **Bracket Pair Colorization**: Enable for better code structure visibility

5. **File Icons**: Material Icon Theme pairs well with Jensen

---

*"I never asked for this... but I'm glad it exists."*
