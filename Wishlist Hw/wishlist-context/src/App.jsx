import './App.css'
import ShopSection from './assets/ShopSection'
import { WishlistProvider } from './context/WishlistContext'

function App() {

  return (
    <WishlistProvider>
      <ShopSection/>
    </WishlistProvider>
  )
}

export default App
