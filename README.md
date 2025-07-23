# Periodic Table of Haiku - Modern Redesign

A modern, responsive redesign of the original Periodic Table of Haiku website, featuring a clean interface and enhanced user experience while preserving all the original haiku content.

## 🎨 Design Features

### Modern Visual Design
- **Clean Typography**: Uses Inter font for excellent readability
- **Color-Coded Elements**: Each element type has a distinct, accessible color
- **Smooth Animations**: Subtle hover effects and loading animations
- **Responsive Layout**: Adapts beautifully to desktop, tablet, and mobile devices

### Enhanced User Experience
- **Keyboard Navigation**: Full keyboard accessibility support
- **Touch Support**: Optimized for mobile touch interactions
- **Modern Lightbox**: Improved modal with better formatting and accessibility
- **Loading Animations**: Elements fade in with staggered timing

### Technical Improvements
- **CSS Custom Properties**: Modern CSS with design tokens
- **Flexible Grid System**: Responsive periodic table layout
- **Accessibility**: ARIA labels, focus management, and screen reader support
- **Performance**: Optimized animations and efficient rendering

## 📱 Responsive Breakpoints

- **Desktop (1200px+)**: Full periodic table layout
- **Tablet (768px-1199px)**: Condensed layout with 9 columns
- **Mobile (480px-767px)**: Grid layout with 6 columns
- **Small Mobile (<480px)**: Single column layout

## 🎯 Element Categories & Colors

- **Hydrogen**: Blue (#60a5fa)
- **Alkali Metals**: Pink (#f472b6)
- **Alkaline Earth**: Green (#86efac)
- **Transition Metals**: Purple (#a78bfa)
- **Post-Transition**: Yellow (#fbbf24)
- **Metalloids**: Teal (#34d399)
- **Nonmetals**: Red (#f87171)
- **Noble Gases**: Orange (#fbbf24)
- **Lanthanides**: Cyan (#06b6d4)
- **Actinides**: Lime (#84cc16)
- **Unknown**: Gray (#9ca3af)

## 🚀 Getting Started

1. **Open the website**: Navigate to `index.html` in your browser
2. **Explore elements**: Click on any element to view its haiku
3. **Use keyboard**: Tab through elements and press Enter to view haiku
4. **Mobile experience**: Touch elements on mobile devices for haiku display

## 🎮 Interactive Features

### Desktop & Tablet
- **Click**: View haiku in modal
- **Hover**: Element scales and shows shadow
- **Keyboard**: Tab navigation with Enter to activate

### Mobile
- **Touch**: Tap elements to view haiku
- **Touch Feedback**: Elements scale down on touch
- **Swipe**: Scroll through haiku content

### Lightbox Controls
- **Click outside**: Close modal
- **Escape key**: Close modal
- **Close button**: X button in top-right corner

## 📁 File Structure

```
PeriodicTableOfHaiku/
├── index.html              # Main website
├── css/
│   └── style.css          # Modern CSS styles
├── scripts/
│   └── script.js          # Enhanced JavaScript
├── fonts/                 # Custom fonts (legacy)
├── img/                   # Images
├── test.html              # Test page for functionality
└── README.md              # This documentation
```

## 🛠️ Technical Details

### CSS Features
- CSS Custom Properties for consistent theming
- CSS Grid for responsive periodic table layout
- Flexbox for component layouts
- Modern animations with CSS transitions
- Mobile-first responsive design

### JavaScript Enhancements
- Modern ES6+ syntax
- Event delegation for performance
- Accessibility improvements
- Touch event handling
- Smooth animations

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Accessibility**: Screen readers, keyboard navigation

## 🎨 Customization

### Colors
Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --primary-color: #2563eb;
  --hydrogen: #60a5fa;
  --alkali: #f472b6;
  /* ... more colors */
}
```

### Typography
Change fonts by updating the font variables:

```css
:root {
  --font-sans: 'Your Font', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

### Animations
Modify animation timing and effects:

```css
.element-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

## 🔧 Development

### Testing
1. Open `test.html` to verify functionality
2. Test responsive design by resizing browser
3. Verify keyboard navigation
4. Test on mobile devices

### Adding New Elements
1. Add HTML element to `index.html`
2. Add haiku data to `scripts/script.js`
3. Style element with appropriate CSS class

## 📄 License

Original content © 1999-2024 Ron Sparks. All rights reserved.

## 🙏 Acknowledgments

- **Original Design**: Ron Sparks and contributors
- **Haiku Poets**: All the original haiku contributors
- **Modern Web Standards**: CSS Grid, Flexbox, and modern JavaScript
- **Typography**: Inter font family by Google Fonts
- **Icons**: SVG icons for close buttons

---

*This redesign preserves the original charm and content while providing a modern, accessible, and responsive user experience.* 