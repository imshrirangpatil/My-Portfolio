# Shrirang Patil - AI/ML Research Engineer Portfolio

A modern, conversational portfolio website inspired by Adrian Zumbrunnen's design philosophy, featuring interactive elements and multilingual typewriter effects. Showcases expertise in Human-AI/Robot Interaction and conversational AI systems.

🌐 **Live Demo**: [https://imshrirangpatil.github.io/My-Portfolio/](https://imshrirangpatil.github.io/My-Portfolio/)

## ✨ Features

### 🎯 **Conversational Design**
- **Multilingual Typewriter Effect**: Cycles through "Hi" in 8 languages (English, Hindi, Spanish, French, Japanese, Korean, Chinese, German)
- **Interactive Chat Interface**: Users can ask questions and get contextual responses about Human-AI/Robot Interaction
- **Adrian Zumbrunnen-inspired**: Clean, minimalist design with conversational tone

### 🎨 **Modern UI/UX**
- **Single Column Layout**: Clean, centered design for optimal readability
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Accessibility**: Keyboard navigation and focus management

### 🚀 **Technical Features**
- **Performance Optimized**: Intersection Observer, debounced scroll events
- **Fast Loading**: Optimized CSS and JavaScript
- **SEO Ready**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Automatic deployment workflow

## 🛠️ **Technologies Used**

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Typewriter effect, interactive chat, smooth scrolling
- **GitHub Pages**: Free hosting and automatic deployment

## 📁 **Project Structure**

```
My-Portfolio/
├── index.html          # Main portfolio page
├── css/
│   └── style.css       # All styles with CSS custom properties
├── js/
│   └── script.js       # Interactive functionality
├── docs/
│   └── resume.pdf      # Downloadable resume
├── images/
│   └── profile.jpg     # Profile image (if needed)
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
└── README.md           # This file
```

## 🎯 **Portfolio Sections**

### 1. **Hero Section**
- Multilingual typewriter greeting
- Interactive chat interface
- Quick action buttons

### 2. **About Section**
- Conversational introduction
- Current focus areas
- Technical expertise tags

### 3. **Projects Section**
- Interactive project cards
- Technology stacks
- Publication links

### 4. **Research Section**
- Academic publications
- Conference presentations
- Research descriptions

### 5. **Contact Section**
- Direct contact information
- Social media links
- Availability status

## 🚀 **Deployment**

### **GitHub Pages (Automatic)**
1. Push changes to `main` branch
2. GitHub Actions automatically deploys
3. Site updates at: `https://imshrirangpatil.github.io/My-Portfolio/`

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/imshrirangpatil/My-Portfolio.git

# Navigate to directory
cd My-Portfolio

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 🎨 **Design Philosophy**

### **Adrian Zumbrunnen Inspiration**
- **Conversational Tone**: Direct, personal language about Human-AI/Robot Interaction
- **Minimalist Aesthetic**: Black, gray, white color palette
- **Interactive Elements**: Chat interface and hover effects
- **Clean Typography**: Inter font with proper hierarchy

### **Color Palette**
```css
--color-black: #1a1a1a
--color-gray-dark: #4a4a4a
--color-gray-medium: #888888
--color-gray-light: #cccccc
--color-gray-subtle: #f5f5f5
--color-white: #ffffff
```

## 📱 **Responsive Breakpoints**

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adjusted spacing)
- **Mobile**: < 768px (Single column, stacked)

## 🔧 **Customization**

### **Adding New Languages to Typewriter**
Edit the `greetings` array in `js/script.js`:
```javascript
const greetings = [
    { text: "Hi", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    // Add more languages here
];
```

### **Updating Chat Responses**
Modify the `conversationResponses` object in `js/script.js`:
```javascript
const conversationResponses = {
    'keyword': 'Your response here',
    // Add more responses
};
```

## 📊 **Performance**

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Bundle Size**: < 50KB total
- **Mobile Optimized**: Touch-friendly interactions

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📞 **Contact**

**Shrirang Patil**
- 📧 Email: [imshrirangpatil@gmail.com](mailto:imshrirangpatil@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/imshrirangpatil](https://linkedin.com/in/imshrirangpatil)
- 💻 GitHub: [github.com/imshrirangpatil](https://github.com/imshrirangpatil)
- 🌐 Portfolio: [imshrirangpatil.github.io/My-Portfolio](https://imshrirangpatil.github.io/My-Portfolio)

---

*Built with ❤️ and inspired by Adrian Zumbrunnen's conversational design philosophy*