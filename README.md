[text](../../../Portfolio/my-website/LICENSE)# AI-Powered Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and TypeScript, featuring AI-powered components and smooth animations. The site includes an intelligent chat assistant powered by Google's Gemini AI model.

![Website Screenshot](public/imgs/website.png)

## Features

- 🤖 **AI Chat Assistant** - Interactive chat powered by Groq with Deepseek R1 using Expressjs please check [text](https://github.com/rakanugraha18/rakadevbackend)
- 🚀 **Interactive Code Typing Animation** - Dynamic code display with syntax highlighting
- 💻 **Responsive Design** - Optimized for all devices from mobile to desktop
- 🎨 **Modern UI/UX** - Clean, professional interface with smooth animations
- 🌙 **Dark Mode** - Sleek dark theme for optimal viewing
- 📧 **Contact Form** - Integrated with Resend for reliable email delivery
- 📱 **Mobile-First Approach** - Fully responsive with tailored mobile experience
- 🎯 **SEO Optimized** - Built-in metadata configuration
- ⚡ **Performance Optimized** - Fast loading and smooth transitions
- 🔄 **Loading Animations** - Smooth loading transitions with Lottie

## Tech Stack

- **Framework**: Next.js and Expressjs for backend
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: Framer Motion, Lottie Animations
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui, Lucide React Icons
- **Email Service**: Resend
- **AI Integration**: Groq with Deepseek R1 using Expressjs
- **Code Highlighting**: Prism React Renderer
- **Deployment**: Vercel and Render for Backend

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakanugraha18/rakanugrahadev
   cd rakanugrahadev
   ```
2. **Install dependencies**
   ```bash
   npm install  # or yarn install or pnpm install
   ```
3. **Set up environment variables**

   ```bash
   # Create a .env.local file with the following variables:
   NEXT_PUBLIC_RAKABACKEND_URL=your_backend_api_url
   ```

   Note: This app have a backend api for chat with AI, if you want to use gemini please check aga kadela repository [text](https://github.com/agakadela/my-website)
   But if you want to follow me, you have to deploy backend using expressjs [text](https://github.com/rakanugraha18/rakadevbackend)

4. **Start the development server**
   ```bash
   npm run dev  # or yarn dev
   ```
5. **Build for production**
   ```bash
   npm run build  # or yarn build
   ```

## Customizing the Portfolio

All main content is centralized in `data/index.ts` for easy customization.

### 1. Personal Information

```typescript
home: {
  name: "Your Name",
  description: "Your Tagline",
  cvLink: "#contact",
}
```

### 2. Social Links

```typescript
sidebar: {
  links: [
    { name: "github", link: "https://github.com/yourusername", icon: Github },
  ];
}
```

### 3. Projects

```typescript
projects: {
  projects: [
    {
      id: 1,
      title: "Project Name",
      description: "Project description",
      image: "/projects-imgs/your-image.png",
      previewLink: "https://project-url.com",
    },
  ];
}
```

### 4. Technologies/Skills

```typescript
technologies: {
  skills: [
    {
      id: 1,
      name: "technology-name",
      src: "/skills/icon.svg",
      link: "https://tech-url",
    },
  ];
}
```

### 5. Contact Information

```typescript
contact: {
  email: "your.email@domain.com",
  name: "Your Name"
}
```

### Image Requirements

- Project images: `public/projects-imgs/` (1200x630px recommended)
- Skill icons: `public/skills/` (SVG format recommended)
- Optimize all images for web use

## Deployment

This portfolio is optimized for Vercel. To deploy:

1. Fork the repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Add the required environment variables:
   - `NEXT_PUBLIC_RAKABACKEND_URL`
5. Deploy!

## Contact

Your Name

- Website: [rakanugrahadev](https://rakanugrahadev.v)
- Email: rakamenjadidev@gmail.com
- GitHub: [@yourgithub](https://github.com/rakanugraha18)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Resend](https://resend.com)

---

Made with 🥳 by Raka Nugraha
