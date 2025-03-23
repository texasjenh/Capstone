import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AppRoutes from './routes/AppRoutes'
import LoginSignup from './components/LoginSignup/LoginSignup'


function App() {
  return ( 
    <div className="App">
        <Header />
        <Navbar />
          <AppRoutes />
        <Footer />
     


    </div>
  )
}

export default App

