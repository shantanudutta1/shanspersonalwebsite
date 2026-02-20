# LiltStack Logo Usage Guide

## Overview
The LiltStack logo features three flowing waves that represent layers, flow, and the stack concept. The logo uses a vibrant blue-to-cyan gradient and modern sans-serif typography.

## Logo Component

The logo is available as a React component located at:
```
/app/frontend/src/components/LiltStackLogo.js
```

## Usage Examples

### 1. Primary Logo (Default)
```jsx
import { LiltStackLogo } from './components/LiltStackLogo';

<LiltStackLogo variant="primary" size="medium" />
```

### 2. Icon Only
Perfect for favicons, app icons, or compact spaces:
```jsx
<LiltStackLogo variant="icon" size="medium" />
```

### 3. Dark Mode
Optimized for dark backgrounds:
```jsx
<LiltStackLogo variant="dark" size="medium" />
```

### 4. Glassmorphism
Modern frosted-glass effect:
```jsx
<LiltStackLogo variant="glass" size="medium" />
```

### 5. Standalone Wave Icon
Just the wave symbol without text:
```jsx
import { WavesIcon } from './components/LiltStackLogo';

<WavesIcon className="w-12 h-12" />
```

## Size Options

The logo component supports four sizes:
- `small` - h-8 (32px)
- `medium` - h-12 (48px) 
- `large` - h-16 (64px)
- `xlarge` - h-24 (96px)

Example:
```jsx
<LiltStackLogo variant="primary" size="xlarge" />
```

## Color Palette

The logo uses a gradient with these color stops:

- **Blue**: #2563eb (electric blue)
- **Teal**: #0891b2 (medium cyan)
- **Cyan**: #06b6d4 (bright cyan)

### Typography
- Font: Inter, system-ui, sans-serif
- Weight: Bold (700)
- Gradient applied via `bg-clip-text`

## Implementation in Your App

### Navigation Bar
```jsx
import { LiltStackLogo } from './components/LiltStackLogo';

<nav>
  <LiltStackLogo variant="primary" size="medium" />
</nav>
```

### Footer
```jsx
<footer className="bg-slate-900">
  <LiltStackLogo variant="dark" size="medium" />
</footer>
```

### Hero Section
```jsx
<section>
  <LiltStackLogo variant="primary" size="xlarge" />
  <h1>We Build. We Run. You Scale.</h1>
</section>
```

## Logo Showcase Page

View all logo variations at:
```
http://localhost:3000/logo
```

This page displays:
- Primary logo
- Interactive icon
- Dark mode version
- Glassmorphism variant
- All size variations
- Icon-only versions
- Usage code examples

## File Locations

### Component Files
- `/app/frontend/src/components/LiltStackLogo.js` - Main logo component
- `/app/frontend/src/pages/LogoShowcase.js` - Showcase page

### Integration
- Navigation: `/app/frontend/src/components/Navigation.js`
- Footer: `/app/frontend/src/components/Footer.js`
- Routes: `/app/frontend/src/App.js`

## Best Practices

1. **Spacing**: Always provide adequate whitespace around the logo
2. **Minimum Size**: Don't use the logo smaller than 24px height
3. **Backgrounds**: 
   - Use primary variant on white/light backgrounds
   - Use dark variant on dark backgrounds
   - Use glass variant on gradient/colorful backgrounds
4. **Icon Only**: Use icon-only variant when space is limited (mobile menu, favicon)
5. **Consistency**: Stick to one variant throughout a single page/context

## SVG Structure

The wave icon consists of three curved paths:
- Top wave (smallest, 8px stroke)
- Middle wave (medium, 9px stroke)  
- Bottom wave (largest, 10px stroke)

All waves use the same gradient and rounded line caps for a smooth, modern look.

## Accessibility

- The logo uses semantic HTML
- Gradient ensures good contrast ratios
- Text remains readable when gradient is applied
- Icon-only variants should include appropriate aria-labels in production

## Export Options

To export the logo as SVG:
```jsx
import { WavesIcon } from './components/LiltStackLogo';

// Use in your app or extract the SVG code from the component
```

## Browser Support

The logo uses:
- SVG (universal support)
- CSS gradients (modern browsers)
- `bg-clip-text` (modern browsers, graceful fallback)

## Questions?

For more details or custom implementations, refer to:
- Logo Showcase: http://localhost:3000/logo
- Component Source: `/app/frontend/src/components/LiltStackLogo.js`
