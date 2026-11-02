# Abdul Malik B J - Modern AI & Data Science Developer Portfolio

A modern, responsive, high-performance personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**, created specifically for **Abdul Malik B J** (Final Year B.Tech Artificial Intelligence & Data Science Student at Anna University).

---

## 🌟 Live Demo & Preview

- **Developer**: Abdul Malik B J
- **Title**: AI/ML Engineer & Data Engineer
- **Academic Background**: B.Tech AI & Data Science | Anna University (CGPA: 8.20)
- **Deployment Platform**: Vercel Ready (`vercel.json` included)

---

## 🚀 Key Highlights & Resume Grounding

All information, projects, technical skills, and experiences are strictly grounded in Abdul Malik's official resume:

1. **Section 1 – Hero**:
   - Prominent headline with dynamic typing/gradient tags (`AI/ML Engineer`, `Data Engineer`).
   - Official portrait with ambient glowing gradient backdrop.
   - 1-Click functional resume download (`/Abdul_Malik_Resume.pdf`).
   - Direct navigation to projects, GitHub, LinkedIn, and email.

2. **Section 2 – About Me**:
   - Career objective: Seeking entry-level AI/ML Engineer / Data Engineer role.
   - Core foundations in statistics, ETL pipelines, and machine learning models.
   - Academic CGPA: **8.20 / 10** (Up to 6th semester).
   - Languages: **English** (Professional), **Tamil** (Native), **Arabic** (Reading).

3. **Section 3 – Technical Skills**:
   - **Programming**: Python, SQL, JavaScript, TypeScript, HTML5, CSS3.
   - **Databases**: MySQL, MongoDB, SQLite, Oracle Database.
   - **Frameworks & Tools**: React.js, Node.js, Express.js, Tailwind CSS, Monaco Editor, Git, GitHub, VS Code, Jupyter Notebook.
   - **Data Science & ML**: Pandas, NumPy, Scikit-learn, Matplotlib, Power BI, Tableau, Supervised/Unsupervised Learning, Feature Engineering, Model Evaluation, EDA, Regression, Classification.
   - **Cloud & DevOps**: AWS (EC2, S3), Docker, Terraform (IaC), ETL pipelines.
   - Interactive skill filtering and live search.

4. **Section 4 – Featured Projects**:
   - **PrescientIQ**: AI-Powered Predictive Management System (MERN Stack + Python ML models for demand forecasting, anomaly detection, automated reporting).
   - **C2X**: AI-Powered Desktop IDE & Developer Platform (React.js, TypeScript, Monaco Editor, multi-tab code editor inspired by VS Code).
   - Interactive Architecture Modal with comprehensive feature breakdowns.

5. **Section 5 – Education**:
   - **B.Tech in Artificial Intelligence & Data Science** (2023–2027) – *Aalim Muhammed Salegh College of Engineering (Affiliated to Anna University)* | CGPA: **8.20**.
   - **Higher Secondary Certificate (Class XII)** (2022) – *The National Matriculation Higher Secondary School* | Tamil Nadu State Board: **77.5%**.

6. **Section 6 – Internships & Certifications**:
   - **HTGE Technologies Pvt. Ltd.** – DevOps Intern (AWS Cloud monitoring, Docker containerization, Terraform IaC automation).
   - **AdroIT Technologies** – Virtual Internship (Role-Based Project Management Tool with MERN stack & Tailwind CSS).
   - **IBM SkillsBuild**: AI Fundamentals Certification (October 2026).
   - **Google Cloud**: Generation AI Certification (January 2026).

7. **Section 7 – Contact & Socials**:
   - Email: `abdulmalikbj06@gmail.com` (with 1-click clipboard copy + direct client mailto).
   - Phone: `+917550365320` (with 1-click clipboard copy).
   - Location: Chennai, India.
   - LinkedIn & GitHub integrations.

---

## 🛠️ Technology Stack

- **Frontend**: React 18 (Functional Components, Hooks)
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3 (Custom dark theme, glassmorphism, glowing gradient accents)
- **Animations & Icons**: Framer Motion & Lucide React
- **Typography**: Plus Jakarta Sans, Inter & JetBrains Mono

---

## 📂 Project Structure

```
portfolio/
├── dist/                      # Production build output
├── public/
│   ├── Abdul_Malik_Resume.pdf # Real uploaded resume PDF
│   ├── profile.jpg            # Professional portrait photo
│   └── favicon.svg            # Custom AM brand icon
├── src/
│   ├── components/
│   │   ├── About.jsx          # Professional summary & bio
│   │   ├── BackgroundGlow.jsx # Ambient animated gradient mesh
│   │   ├── Contact.jsx        # Contact cards, form & 1-click copy
│   │   ├── Education.jsx      # Academic qualifications timeline
│   │   ├── Experience.jsx     # Internships & certifications
│   │   ├── Footer.jsx         # Footer with quick links & credits
│   │   ├── Hero.jsx           # Main hero section & CTAs
│   │   ├── Navbar.jsx         # Sticky glassmorphism navigation
│   │   ├── ProjectModal.jsx   # Interactive project architecture modal
│   │   ├── Projects.jsx       # Featured project showcases
│   │   └── Skills.jsx         # Categorized skills with filter & search
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for resume data
│   ├── App.jsx                # Main application wrapper
│   ├── index.css              # Custom utility classes & scrollbar styling
│   └── main.jsx               # React entry point
├── index.html                 # SEO-optimized HTML with meta tags
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind theme customizations
├── vercel.json                # Vercel SPA routing and cache config
├── vite.config.js             # Vite configuration
└── README.md                  # Comprehensive project documentation
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm or yarn

### 2. Installation
Clone or navigate to the project directory:
```bash
cd c:\Users\abdul\OneDrive\Desktop\portfolio
```

Install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🐙 Step-by-Step GitHub Setup Instructions

Follow these exact steps to push this project to your GitHub account:

### Step 1: Create a New GitHub Repository
1. Go to [GitHub](https://github.com) and sign in.
2. Click the **+** (plus icon) in the top right corner and select **New repository**.
3. Set the repository name (e.g. `abdul-malik-portfolio` or `portfolio`).
4. Leave it as **Public**.
5. Do **not** initialize with a README, .gitignore, or license (these already exist locally).
6. Click **Create repository**.

### Step 2: Push Local Code to GitHub
In your terminal, run the following commands:

```bash
# 1. Add all files to git tracking
git add .

# 2. Create the initial commit
git commit -m "feat: Initial commit of Abdul Malik B J developer portfolio"

# 3. Rename default branch to main (if not already main)
git branch -M main

# 4. Add your GitHub remote URL (replace with your actual GitHub repo URL)
git remote add origin https://github.com/abdulmalikbj/portfolio.git

# 5. Push to GitHub
git push -u origin main
```

---

## ⚡ Step-by-Step Vercel Deployment Instructions

Deploying on Vercel is free, takes under 2 minutes, and automatically configures SSL, CDN caching, and custom domains.

### Method 1: Deploy via Vercel Web Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. On your Vercel Dashboard, click **Add New...** &rarr; **Project**.
3. Under **Import Git Repository**, find your `portfolio` or `abdul-malik-portfolio` repository and click **Import**.
4. Configure your project:
   - **Framework Preset**: Vite (detected automatically).
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (detected automatically).
   - **Output Directory**: `dist` (detected automatically).
   - **Install Command**: `npm install` (detected automatically).
5. Click **Deploy**.
6. Within 30–60 seconds, Vercel will complete the build and assign you a live production URL:
   `https://abdul-malik-portfolio.vercel.app` (or custom subdomain).

### Method 2: Deploy via Vercel CLI

If you prefer deploying directly from your terminal:

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod
```

### Custom Domain (Optional)
In your Vercel project settings:
1. Go to **Settings** &rarr; **Domains**.
2. Add your custom domain (e.g., `abdulmalik.dev` or `abdulmalikbj.me`).
3. Update your DNS records as prompted by Vercel.

---

## 📄 License & Attribution

Designed and engineered for **Abdul Malik B J**. Content derived from verified academic and professional credentials.
