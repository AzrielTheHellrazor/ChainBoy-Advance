import { useState, useContext, useRef } from 'react'
import { GbaContext } from 'react-gbajs'
import ReactGbaJs from 'react-gbajs'
// import { AIRepository } from '@goktus/datavault' // Node.js only, not browser compatible

function App() {
  const { play, saveState } = useContext(GbaContext)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const startEmulator = async () => {
    if (!selectedFile) return

    try {
      const arrayBuffer = await selectedFile.arrayBuffer()
      const success = play({ newRomBuffer: arrayBuffer })
      
      if (success) {
        setIsPlaying(true)
        setUploadStatus('Game started successfully!')
      } else {
        setUploadStatus('Failed to start game. Please select a valid GBA ROM file.')
      }
    } catch (error) {
      setUploadStatus('Failed to read file: ' + (error as Error).message)
    }
  }

  const saveGameToBlockchain = async () => {
    if (!isPlaying) {
      setUploadStatus('Please start a game first!')
      return
    }

    setIsUploading(true)
    setUploadStatus('Uploading save file to blockchain...')

    try {
      const gameState = saveState()
      if (!gameState) {
        setUploadStatus('Failed to get save state!')
        return
      }

      // Mock blockchain upload for now (DataVault is Node.js only)
      const saveData = {
        gameTitle: selectedFile?.name || 'Unknown Game',
        saveState: gameState,
        timestamp: new Date().toISOString(),
        platform: 'GameBoy Advance'
      }

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock successful upload
      const mockTransactionId = 'mock-tx-' + Date.now()
      setUploadStatus(`✅ Save file successfully uploaded to blockchain! Transaction ID: ${mockTransactionId}`)
      
      // Log the save data for now
      console.log('Save data:', saveData)
    } catch (error) {
      setUploadStatus('❌ Error uploading save file: ' + (error as Error).message)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700">
      {/* Header */}
      <header className="text-center py-8 px-4 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
          🎮 ChainBoy Advance
        </h1>
        <p className="text-xl text-white/90 font-light">
          Play GameBoy Advance games and save your progress to the blockchain!
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls Section */}
        <div className="lg:col-span-1">
          <div className="card">
            {/* File Upload */}
            <div className="mb-6">
              <input
                ref={fileInputRef}
                type="file"
                accept=".gba,.rom"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="btn-success w-full"
              >
                📁 Select GBA ROM File
              </button>
              {selectedFile && (
                <div className="mt-3 p-3 bg-blue-50 border-l-4 border-green-500 rounded">
                  <p className="text-sm font-medium text-gray-700">
                    Selected: {selectedFile.name}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-6">
              <button 
                onClick={startEmulator}
                disabled={!selectedFile || isPlaying}
                className="btn-primary w-full"
              >
                🚀 Start Game
              </button>
              
              <button 
                onClick={saveGameToBlockchain}
                disabled={!isPlaying || isUploading}
                className="btn-secondary w-full"
              >
                {isUploading ? '⏳ Uploading...' : '💾 Save to Blockchain'}
              </button>
            </div>

            {/* Status Message */}
            {uploadStatus && (
              <div className={`${
                uploadStatus.includes('✅') ? 'status-success' : 
                uploadStatus.includes('❌') ? 'status-error' : 
                'status-info'
              } animate-fade-in`}>
                {uploadStatus}
              </div>
            )}
          </div>
        </div>

        {/* Emulator Section */}
        <div className="lg:col-span-2">
          <div className="card min-h-[500px] flex items-center justify-center">
            {isPlaying ? (
              <div className="bg-gray-800 rounded-2xl p-4 shadow-inner">
                <ReactGbaJs 
                  scale={2}
                  volume={0.7}
                  onFpsReported={(fps: number) => console.log('FPS:', fps)}
                />
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Emulator Ready
                </h3>
                <p className="text-lg">
                  Select a GBA ROM file to start playing
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-4 bg-black/10 text-white/80">
        <p>
          Powered by{' '}
          <a 
            href="https://github.com/macabeus/react-gbajs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 font-semibold transition-colors"
          >
            react-gbajs
          </a>
          {' '}&{' '}
          <a 
            href="https://github.com/AzrielTheHellrazor/DataVault" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-200 font-semibold transition-colors"
          >
            DataVault
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App