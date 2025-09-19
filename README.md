# Dynamic Resume Template

A modern, fully customizable resume website that loads all content dynamically from JSON data. Perfect for developers who want a professional online presence without hardcoded content.

## ✨ Features

### 🎯 Fully Data-Driven
- **Zero Hardcoded Content**: All text, links, and data loaded from `data/resume-data.json`
- **Easy Customization**: Update your resume by editing a single JSON file
- **Template-Based**: Reusable for any professional with minimal changes

### 🎨 Interactive Elements
- **Dynamic Technology Map**: Interactive SVG visualization of your tech stack with hover effects
- **Skill Proficiency Charts**: Animated bar charts and radar charts
- **Project Filtering**: Filter projects by category with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🚀 Advanced Features
- **Multiple View Modes**: Toggle between tech map, skills grid, and proficiency charts
- **GitHub Activity Heatmap**: Simulated contribution calendar
- **Smooth Scroll Navigation**: Elegant page transitions
- **Performance Optimized**: Fast loading with efficient animations

## 🛠️ Quick Setup

### Prerequisites
- Any modern web browser
- A simple HTTP server (Python, Node.js, or any static file server)

### Installation
1. **Clone or Download** this repository
2. **Customize** your data in `data/resume-data.json`
3. **Serve** the files using any HTTP server
4. **Deploy** to GitHub Pages, Netlify, or any static hosting

### Local Development
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then open `http://localhost:8080` in your browser.

## 📝 Data Structure

### Basic Information
```json
{
  "basics": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "Your Phone",
    "location": "Your Location",
    "profileImage": "URL to your photo",
    "summary": ["Array of summary paragraphs"],
    "social": {
      "github": "GitHub URL",
      "linkedin": "LinkedIn URL",
      "email": "mailto:your.email@example.com"
    }
  }
}
```

### Enhanced Technology Map
The tech map supports advanced clustering with skill levels:

```json
{
  "skills": {
    "techMap": {
      "centralHub": "Your Core Specialization",
      "viewBox": "0 0 1000 700",
      "centerPosition": {"x": 500, "y": 350},
      "clusters": [
        {
          "name": "Cluster Name",
          "position": {"x": 300, "y": 200},
          "color": "iam|protocol|development|devops|database",
          "icon": "🛡️",
          "description": "Cluster description",
          "technologies": [
            {
              "name": "Technology Name",
              "position": {"x": 220, "y": 120},
              "size": 22,
              "experience": "5+ years",
              "projects": "25+",
              "level": "expert|advanced|intermediate",
              "description": "Technology description"
            }
          ]
        }
      ],
      "connections": [
        {
          "from": "Tech A",
          "to": "Tech B",
          "strength": "strong|medium|weak",
          "type": "implements|integrates|uses"
        }
      ]
    }
  }
}
```

### Work Experience
```json
{
  "work": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM",
      "location": "Location",
      "summary": "Brief summary",
      "highlights": ["Achievement 1", "Achievement 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Projects
```json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "image": "Project image URL",
      "category": "iam|healthcare|finance|web|mobile",
      "stats": {
        "users": "2M+ users",
        "transactions": "10M+ daily"
      },
      "technologies": ["Tech1", "Tech2"],
      "links": {
        "demo": "Demo URL",
        "case": "Case study URL"
      }
    }
  ]
}
```

## 🎨 Customization Guide

### Colors and Themes
Edit the color schemes in `styles.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Technology Map Positioning
Use the interactive coordinates in the JSON file. The viewBox is `0 0 1000 700`:
- Center: `(500, 350)`
- Clusters: Position around the center
- Technologies: Position relative to cluster centers

### Skill Levels
- **Expert**: 5+ years experience, thick border
- **Advanced**: 3-5 years experience, medium border  
- **Intermediate**: 1-3 years experience, thin border

## 🚀 Deployment

### GitHub Pages
1. Fork this repository
2. Update `data/resume-data.json` with your information
3. Enable GitHub Pages in repository settings
4. Your resume will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. No build configuration needed - deploy as static site
3. Auto-deploys on every commit

### Custom Domain
Point your domain to the hosting service and update any absolute URLs in the JSON file.

## 🔧 Advanced Features

### Interactive Elements
- **Hover Effects**: Technology nodes show detailed information on hover
- **Click Interactions**: Technologies can show extended details
- **Zoom Controls**: Zoom in/out of the technology map
- **Smooth Animations**: CSS transitions and animations throughout

### Performance
- **Lazy Loading**: Images and heavy content load as needed
- **Efficient Rendering**: SVG-based graphics for crisp visuals
- **Minimal Dependencies**: Pure JavaScript, no external libraries

### SEO Optimization
- **Dynamic Meta Tags**: Page title and meta descriptions from JSON
- **Semantic HTML**: Proper heading structure and landmarks
- **Accessible Design**: Keyboard navigation and screen reader support

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own resume!

## 🎯 Use Cases

- **Software Developers**: Showcase your tech stack and projects
- **Data Scientists**: Display your analysis and visualization skills
- **Product Managers**: Highlight your product portfolio
- **Designers**: Present your design process and tools
- **Consultants**: Demonstrate your expertise areas

## 🔄 Version History

- **v2.0**: Dynamic template system with interactive tech map
- **v1.0**: Static resume with basic interactivity

## 📞 Support

For questions or issues:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser and JSON configuration details

---

**Made with ❤️ for the developer community**
