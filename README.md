# 🎙️ Palagent Notes - Desktop Application

Modern desktop application for voice recording and AI-powered note enhancement using Google Gemini AI.

## ✨ Features

- 🎤 **Voice Recording** - Record audio with microphone
- 🤖 **AI Enhancement** - Improve raw transcripts with Gemini AI
- 🖥️ **Desktop App** - Standalone application (no browser needed)
- ⌨️ **Global Shortcuts** - Control from anywhere (Ctrl+G, F6)
- 🎨 **Customizable Themes** - Dark themes with color options
- 💾 **Note Management** - Save and organize notes

## 🚀 Quick Start

**Prerequisites:** Node.js

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up API key:**

   ```bash
   cp .env.example .env
   # Edit .env and add your Gemini API key
   ```

3. **Run the desktop app:**
   ```bash
   npm run electron
   ```

## 📦 Build Distribution

Create installable packages:

```bash
npm run dist
```

## ⌨️ Shortcuts

- **Ctrl+G** or **F6** - Toggle recording
- **Ctrl+Shift+N** - New note
- **Ctrl+Shift+P** - Show/hide window

## 📖 Full Documentation

See [README-ELECTRON.md](README-ELECTRON.md) for detailed instructions.

## 🔑 API Key

Get your key from: https://makersuite.google.com/app/apikey
