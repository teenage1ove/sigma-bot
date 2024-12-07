import {init, viewport, themeParams, mainButton} from '@telegram-apps/sdk'
import { useState } from 'react'

init()

viewport.mount()
themeParams.mount()
mainButton.mount()

viewport.expand()
themeParams.bindCssVars()
mainButton.setParams({
  hasShineEffect: true,
  isEnabled: true,
  isVisible: true,
  text: 'Hello'
})



function App() {

  const [message, setMessage] = useState('')

  mainButton.onClick(() => {
    mainButton.setParams({
      isVisible: false
    })

    setMessage('Button clicked!')
  })

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black'>
      <h1 className='text-4xl text-white'>Hello</h1>
      {message && <p className='text-2xl text-white'>{message}</p>}
    </div>
  )
}

export default App
