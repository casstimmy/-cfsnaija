# FORGE GitHub Setup Guide

## 📋 Prerequisites
- GitHub account (create one at https://github.com if needed)
- Git installed on your computer
- SSH key (optional) or personal access token for HTTPS

## 🚀 Push to GitHub

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it: `forge-construction` (or your preferred name)
5. Add description: "Modern cold-formed steel construction website built with Next.js"
6. Choose **Public** or **Private**
7. **Do NOT** initialize with README (we already have one)
8. Click **Create repository**

### Step 2: Add Remote Repository

Copy the repository URL from GitHub (either HTTPS or SSH), then run:

```bash
# Replace <YOUR_GITHUB_USERNAME> with your actual GitHub username
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/forge-construction.git

# Or if using SSH:
git remote add origin git@github.com:<YOUR_GITHUB_USERNAME>/forge-construction.git
```

Verify the remote was added:
```bash
git remote -v
```

### Step 3: Push to GitHub

```bash
# Push the main branch to GitHub
git branch -M main
git push -u origin main
```

If you're using a personal access token for HTTPS, GitHub will prompt you for credentials.

## 🔄 Update Branch Name (if needed)

The repository currently uses `master` as the default branch. To align with GitHub's modern conventions, rename it to `main`:

```bash
git branch -M master main
git push -u origin main
```

## 📝 Making Future Changes

After making changes locally:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

## 🌐 Enable GitHub Pages (Optional)

To deploy the built site via GitHub Pages:

1. Go to your repository Settings
2. Scroll to "GitHub Pages"
3. Select `main` branch as source
4. Choose `/docs` or `/root` folder
5. Save

Alternatively, use Vercel for automatic deployments (recommended for Next.js).

## 🚀 Deploy with Vercel

The easiest way to deploy a Next.js app:

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Connect your GitHub repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"

Your site will be live at: `forge-construction.vercel.app`

## 📊 Repository Structure on GitHub

Once pushed, visitors will see:
- **Code** - Your source files
- **README** - Project documentation
- **Commits** - Change history
- **Pull Requests** - Collaboration space
- **Releases** - Version tags

## 🔐 GitHub Best Practices

- Keep sensitive data out of the repository
- Use `.gitignore` to exclude `node_modules` and `.env` files (already configured)
- Write clear commit messages
- Use meaningful branch names for features
- Keep the main/master branch stable

## ❓ Troubleshooting

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin <new-url>
```

### "Permission denied (publickey)"
You need to set up SSH keys. Use HTTPS with personal access token instead, or set up SSH.

### "branch 'master' does not have upstream tracking information"
```bash
git push -u origin main
```

---

**You're all set!** Your FORGE website is now on GitHub and ready for collaboration and deployment. 🎉
