# 🎮 ChainBoy Advance

A modern GameBoy Advance emulator built with React, TypeScript, and Tailwind CSS. Play GBA games in your browser and save your progress to the blockchain!

## ✨ Features

- 🎮 **GameBoy Advance Emulator**: Play GBA ROM files in your browser
- 💾 **Blockchain Save System**: Save your game progress to the blockchain
- 🎨 **Modern UI**: Beautiful design with Tailwind CSS and glassmorphism effects
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🚀 **Fast & Lightweight**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for modern styling
- **react-gbajs** for GameBoy Advance emulation
- **Bun** as package manager and runtime

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AzrielTheHellrazor/ChainBoy-Advance.git
   cd ChainBoy-Advance
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎮 How to Use

1. **Select ROM**: Click "📁 Select GBA ROM File" to choose a GBA game
2. **Start Game**: Click "🚀 Start Game" to launch the emulator
3. **Play**: Use your keyboard or gamepad to play
4. **Save Progress**: Click "💾 Save to Blockchain" to save your game state

## 📦 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun preview` - Preview production build
- `bun lint` - Run ESLint

## 🔧 Configuration

The app uses environment variables for blockchain configuration:

```env
REACT_APP_PRIVATE_KEY=your-arweave-private-key
REACT_APP_DB_PATH=./data
REACT_APP_IRYS_URL=https://node1.irys.xyz
REACT_APP_GATEWAY_URL=https://gateway.irys.xyz
REACT_APP_CURRENCY=arweave
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- [react-gbajs](https://github.com/macabeus/react-gbajs) for the GBA emulator
- [DataVault](https://github.com/AzrielTheHellrazor/DataVault) for blockchain integration
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful UI

---

Made with ❤️ by [AzrielTheHellrazor](https://github.com/AzrielTheHellrazor)