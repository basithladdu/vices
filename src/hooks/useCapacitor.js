import { useEffect } from 'react'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'

export const useCapacitor = () => {
  useEffect(() => {
    const initCapacitor = async () => {
      try {
        // Hide splash screen after 2 seconds
        await SplashScreen.hide()
      } catch (err) {
        console.log('SplashScreen not available:', err)
      }

      try {
        // Set status bar style to light
        await StatusBar.setStyle({ style: Style.Dark })
      } catch (err) {
        console.log('StatusBar not available:', err)
      }
    }

    initCapacitor()
  }, [])
}
