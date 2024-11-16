const { contextBridge } = require('electron')

// Expose protected methods that allow the renderer process to use
// specific electron APIs safely through a controller
contextBridge.exposeInMainWorld(
    'api', {
        // Add any required API methods here
        getVersion: () => process.versions.electron
    }
)
