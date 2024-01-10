import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './Context/userContext.jsx'
import { ProductProvider } from './Context/productContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </UserProvider>
)
