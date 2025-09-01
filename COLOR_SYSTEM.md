# Dynamic Color System

This project features a flexible, URL-based color system that allows users to customize the theme colors dynamically through URL parameters.

## How It Works

### 1. URL Parameters

The system reads color and theme parameters from the URL:

- `?color=#FF0000` - Sets the primary color to red
- `?theme=light` - Sets the theme to light mode
- `?color=#00FF00&theme=dark` - Sets both color and theme

### 2. Fallback System

- If no URL parameters are provided, the system uses the default colors
- If an invalid color is provided, it falls back to the default JS Yellow (#FFD369)
- The system maintains the existing dark/light theme functionality

## Usage Examples

### Basic Color Change

```
https://yourdomain.com/?color=#61DAFB
```

This will apply React Blue as the primary color.

### Custom Color + Theme

```
https://yourdomain.com/?color=#4FC08D&theme=light
```

This will apply Vue Green with a light theme.

### Reset to Default

```
https://yourdomain.com/
```

No parameters = default JS Yellow theme.

## Popular Color Examples

Here are some popular colors you can use:

- **React Blue**: `?color=#61DAFB`
- **Vue Green**: `?color=#4FC08D`
- **Angular Red**: `?color=#DD0031`
- **Node Green**: `?color=#339933`
- **Python Blue**: `?color=#3776AB`
- **Ruby Red**: `?color=#CC342D`
- **Go Blue**: `?color=#00ADD8`
- **Rust Orange**: `?color=#CE422B`
- **Swift Orange**: `?color=#FF6B35`

## Technical Implementation

### Components

- `useUrlColor.ts` - Hook for URL parameter handling
- `DynamicColorContext.tsx` - Context provider for color state

### CSS Variables

The system uses CSS custom properties for dynamic theming:

```css
:root {
  --color-primary: #ffd369;
  --color-primary-light: #ffe082;
  --color-primary-dark: #f57f17;
  --color-accent: #b5a99d;
  --color-background: #1c1c1c;
  --color-text: #fff7f0;
}
```

### Utility Classes

- `.text-dynamic-primary` - Dynamic primary text color
- `.bg-dynamic-primary` - Dynamic primary background
- `.border-dynamic-primary` - Dynamic primary border

## Integration

### Adding to Components

```tsx
import { useDynamicColor } from "../contexts/DynamicColorContext";

function MyComponent() {
  const { colorScheme } = useDynamicColor();

  return (
    <div style={{ backgroundColor: colorScheme.primary }}>
      Dynamic colored content
    </div>
  );
}
```

### Using CSS Variables

```tsx
// The CSS variables are automatically updated based on URL parameters
<div className="bg-dynamic-primary text-dynamic-accent">
  This will use the current URL color
</div>
```

## Benefits

1. **Shareable URLs** - Users can share specific color themes
2. **Brand Consistency** - Companies can use their brand colors
3. **Personalization** - Users can choose their preferred colors
4. **Fallback Safety** - System always has working defaults
5. **Performance** - No additional API calls or complex state management
6. **Simple** - Just change the URL, no UI components needed

## How to Use

1. **Manual URL Editing**: Simply add `?color=#YOURCOLOR` to your URL
2. **Bookmarking**: Save URLs with specific colors as bookmarks
3. **Sharing**: Share URLs with specific color themes
4. **Testing**: Quickly test different color schemes

## Future Enhancements

- Color palette generation based on primary color
- Saved color preferences in localStorage
- Color accessibility validation
- Animated color transitions
- Export/import color schemes
