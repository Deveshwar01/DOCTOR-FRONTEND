import React from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Routes />
        <Toaster />
      </Provider>
    </>
  )
}

export default App;