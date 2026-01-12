# Jensen Theme - GitHub Copilot Instructions

## Project Overview

Jensen is a theme collection inspired by the iconic aesthetics of **Deus Ex: Human Revolution**, created by **tomaytotomato**. This project brings the Cyber Renaissance aesthetic to various development environments through carefully crafted color schemes featuring signature gold and copper tones against dark backgrounds.

## Core Design Philosophy

When working on this project, embrace the augmented aesthetic:

- **Cyber Renaissance**: Blend futuristic technology with refined, elegant design
- **High Contrast**: Maintain readability with distinct foreground/background separation
- **Signature Gold**: The iconic gold/copper accent (`#EDA622`) is the hallmark of this theme
- **Dark Foundation**: Deep blacks (`#141514`) provide the canvas for augmented interfaces
- **Purposeful Accents**: Each color serves a functional purpose inspired by UI design from the game

## Official Color Palette

Always reference these canonical colors when developing theme variants:

| Color      | Hex       | RGB           | HSL            | Purpose                    |
|------------|-----------|---------------|----------------|----------------------------|
| Background | `#141514` | `20 21 20`    | `120° 2% 8%`   | Deep carbon black          |
| Foreground | `#FBFBFB` | `251 251 251` | `0° 0% 98%`    | Bright white text          |
| Comment    | `#C4C7C4` | `196 199 196` | `120° 3% 77%`  | Muted gray for comments    |
| Green      | `#A0FF33` | `160 255 51`  | `88° 100% 60%` | French lime (success/safe)  |
| Blue       | `#0EA2C9` | `14 162 201`  | `193° 87% 42%` | Electric blue (info)       |
| Red        | `#F25244` | `242 82 68`   | `5° 87% 61%`   | Alert red (danger/warning) |
| Yellow     | `#EDA622` | `237 166 34`  | `39° 85% 53%`  | Signature gold (highlight) |

## Coding Guidelines

### When Creating New Theme Variants

1. **Consistency First**: Always use the exact hex values from the palette above
2. **Test Contrast**: Ensure all text remains readable against backgrounds
3. **Maintain Hierarchy**: Keep the visual importance: Gold > Green/Blue > Red > Comment
4. **Document Changes**: Update relevant README files with color mappings
5. **Do not go crazy with Docs**: Do not add excessive documentation, keep it concise and relevant. Use README file or SETUP.md for instructions.
5. **Cross-Platform**: Test themes across different OS and application versions

### When Writing Documentation

- Use language that evokes the Deus Ex aesthetic ("augmented", "cyber renaissance", etc.)
- Include the signature quote: *"I never asked for this..."*
- Credit **tomaytotomato** as the creator
- Reference Eidos Montreal and Deus Ex: Human Revolution appropriately
- Maintain a professional yet enthusiastic tone

### Code Style Preferences

- Use clear, descriptive variable names
- Prefer declarative configuration over imperative code
- Document color values with their semantic meaning, not just hex codes
- Keep build scripts and configuration files well-organized

## Supported Platforms

Currently supported:
- **IntelliJ IDEA** (JetBrains IDEs)
- **iTerm** (macOS terminal)

When adding new platform support:
- Create a dedicated directory for the platform
- Include a comprehensive README with installation instructions
- Test thoroughly before committing
- Update the main README.md with links to the new platform

## Build and Development

### IntelliJ Plugin
- Built with Gradle
- Plugin XML configuration in `intellij/src/main/resources/META-INF/`
- Theme JSON in `intellij/src/main/resources/theme/`
- Use Gradle wrapper for consistency: `./gradlew`

### General Guidelines
- Keep dependencies minimal
- Follow platform-specific best practices
- Version control all source files but exclude build artifacts
- Use semantic versioning for releases

## Inspiration and Attribution

This project is a tribute to:
- **Deus Ex: Human Revolution** by Eidos Montreal
- The stunning UI/UX design by Eric Bellefeuille
- The cyberpunk aesthetic that defined a generation of gaming

When suggesting features or changes, consider: "Would Adam Jensen approve of this augmentation?"

## License

This project is MIT licensed. Respect copyright and give proper attribution when forking or adapting.

---

*"I never asked for this... but I'm glad it exists."*

