# Jensen Theme for IntelliJ IDEA

A cyberpunk theme plugin for JetBrains IDEs inspired by Deus Ex: Human Revolution.

![](marketplace/screenshots_promo.png)

## Features

- Dark theme with gold and copper accent colors
- Based on the iconic Deus Ex: Human Revolution color palette
- Optimized for long coding sessions with eye-friendly contrasts
- Supports IntelliJ IDEA 2024.1 and later

## Building the Plugin

```bash
./gradlew build
```

The built plugin will be available at `build/distributions/jensen-theme-1.0.0.zip`

## Installing

1. Build the plugin using the command above
2. In IntelliJ IDEA, go to `Settings/Preferences` → `Plugins`
3. Click the gear icon and select `Install Plugin from Disk...`
4. Select the `jensen-theme-1.0.0.zip` file
5. Restart IntelliJ IDEA
6. Go to `Settings/Preferences` → `Appearance & Behavior` → `Appearance`
7. Select "Jensen" from the Theme dropdown

## Development

To test the plugin in a sandbox IntelliJ instance:

```bash
./gradlew runIde
```

## Color Palette

The theme uses the following key colors from Deus Ex: Human Revolution:

- **Background**: `#141514` - Eerie Black
- **Foreground**: `#C4C7C4` - Silver Sand
- **Accent**: `#EDA622` - Marigold (Gold)
- **Secondary Accent**: `#BB831B` - Dark Goldenrod (Copper)
- **Strings**: `#A0FF33` - French Lime (Green)
- **Functions**: `#0EA2C9` - Pacific Blue
- **Errors**: `#ED333C` - Imperial Red
- **Selection**: `#503A1D` - Cafe Noir

## Credits

Based on the [Dune Arrakis theme](https://github.com/anvell/intellij-themes) by Anvell.

*"I never asked for this..."*

