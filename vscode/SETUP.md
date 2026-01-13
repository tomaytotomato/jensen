# Setup and Testing Guide

## Quick Setup for Development

### Testing Locally

1. **Copy to VSCode Extensions Directory**:
   
   ```bash
   # Linux/macOS
   cp -r vscode ~/.vscode/extensions/jensen-theme
   
   # Windows (PowerShell)
   Copy-Item -Path vscode -Destination "$env:USERPROFILE\.vscode\extensions\jensen-theme" -Recurse
   ```

2. **Restart VSCode**

3. **Activate the Theme**:
   - Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (macOS)
   - Select "Jensen" from the list

### Installing from VSIX

1. **Package the extension** (if not already done):
   ```bash
   cd vscode
   npm install -g @vscode/vsce
   vsce package
   ```

2. **Install in VSCode**:
   - Open VSCode
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
   - Type "Extensions: Install from VSIX"
   - Select the `jensen-theme-1.0.0.vsix` file

### Validation Checklist

After installation, verify these elements:

#### Editor
- [ ] Background is deep carbon black (`#141514`)
- [ ] Text is bright white (`#FBFBFB`)
- [ ] Comments are gray and italicized
- [ ] Keywords (if, const, let, function) are gold (`#EDA622`)
- [ ] Strings are green (`#A0FF33`)
- [ ] Functions are green (`#A0FF33`)
- [ ] Numbers are copper/orange (`#E55D02`)
- [ ] Classes/Types are blue (`#0EA2C9`)
- [ ] Current line is highlighted
- [ ] Selection background is gold-brown (`#503a1d`)
- [ ] Cursor is gold (`#EDA622`)

#### UI Elements
- [ ] Activity Bar has dark background
- [ ] Active activity item has gold border
- [ ] Sidebar background is dark gray (`#1a1a1a`)
- [ ] Active tab has gold top border
- [ ] Status bar is carbon black
- [ ] Terminal follows color scheme

#### Git Decorations
- [ ] Added files are green
- [ ] Modified files are blue
- [ ] Deleted files are red

#### Syntax Testing Files

Create test files in different languages to verify syntax highlighting:

**test.js**:
```javascript
// This is a comment
const greeting = "Hello World";
function sayHello(name) {
  return `${greeting}, ${name}!`;
}
const result = sayHello("Jensen");
console.log(result);
```

**test.py**:
```python
# This is a comment
def greet(name: str) -> str:
    greeting = "Hello World"
    return f"{greeting}, {name}!"

result = greet("Jensen")
print(result)
```

**test.ts**:
```typescript
// This is a comment
interface User {
  name: string;
  age: number;
}

class Greeter {
  constructor(private message: string) {}
  
  greet(user: User): string {
    return `${this.message}, ${user.name}!`;
  }
}
```

### Publishing to Marketplace (Future)

To publish to the VSCode Marketplace:

1. Create a publisher account at https://marketplace.visualstudio.com/manage
2. Get a Personal Access Token from Azure DevOps
3. Login with vsce:
   ```bash
   vsce login tomaytotomato
   ```
4. Publish:
   ```bash
   vsce publish
   ```

### Troubleshooting

**Theme doesn't appear in list**:
- Ensure the extension directory is in the correct location
- Restart VSCode completely
- Check Developer Tools console for errors (`Help > Toggle Developer Tools`)

**Colors look wrong**:
- Ensure no other color customizations in `settings.json`
- Disable other themes that might conflict
- Check `workbench.colorCustomizations` is not overriding theme colors

**Syntax highlighting issues**:
- Verify the file extension is correct
- Check that language support is installed
- Try reopening the file
