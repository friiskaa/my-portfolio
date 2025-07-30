# 🎨 My Portfolio Website

This is my personal portfolio website built with Next.js and deployed on Vercel.

🔗 **Live site:** [my-portfolio-friska.vercel.app](https://my-portfolio-friska.vercel.app)

---

## 📁 Project Structure

- `pages/`: Main routes of the website
- `components/`: Reusable React components
- `public/`: Static assets (images, icons, etc.)
- `app/blog/[id]/`: Dynamic route for individual blog detail pages
- `components/Blog.tsx`: Blog list component that fetches data from a Laravel API

---

## ✨ Features

- Responsive design
- Project showcase section
- Contact form (using FormSubmit)
- Blog section (fetched from Laravel REST API)
- Animated UI with Framer Motion
- Deployed to Vercel

---

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Laravel API for blog data
- **Deployment**: Vercel

---

## 📸 Screenshots

![Homepage](./public/screenshots/portfolio-home.png)
![Tech/Tools](./public/screenshots/portfolio-about.png)
![Projects](./public/screenshots/portfolio-projects.png)
![Blogs](./public/screenshots/portfolio-blogs.png)

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/friiskaa/my-portfolio.git
cd my-portfolio
npm install
npm run dev