# Subham Debnath - Minimalist Portfolio

A clean, modern, and professional personal portfolio for a Full Stack Developer & AI Enthusiast. Built with React, Vite, and simple CSS.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment Instructions (Vercel)

This project is built with Vite and React, making it incredibly simple to deploy for free using Vercel. Follow these steps to get your site live in minutes:

### Prerequisites
- A GitHub account
- A Vercel account (you can sign up using your GitHub account)

### Steps to Deploy

1. **Push to GitHub**:
   - Initialize a git repository if you haven't already:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Create a new repository on GitHub and push your code:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git branch -M main
     git push -u origin main
     ```

2. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com/) and sign in.
   - Click the **"Add New..."** button and select **"Project"**.
   - Under the "Import Git Repository" section, find your newly created repository and click **"Import"**.
   - Configure your project:
     - **Project Name**: You can keep the default or change it.
     - **Framework Preset**: Vercel should automatically detect "Vite".
     - **Root Directory**: Leave as `./`.
     - **Build and Output Settings**: Vercel will auto-fill these (Build Command: `npm run build`, Output Directory: `dist`).
   - Click the **"Deploy"** button.

3. **Success!**
   - Vercel will now build and deploy your project. Once finished, you will be provided with a live production URL (e.g., `https://your-repo-name.vercel.app`).
   - Any future pushes to your `main` branch on GitHub will automatically trigger a new build and deploy on Vercel.

---
© 2026 Subham Debnath
