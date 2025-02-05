import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import MainPage from './pages/mainPage';
import SignUpPage from "./pages/signUp";
import useGlobalContext from "./context/GlobalContext/useGlobalContext";
import Modal from "./Components/modal";



function App() {
  const {modal} = useGlobalContext()
  return (
    <>
      {modal['isOpen'] ? <Modal/> : null}
      <Navbar />
      <div className='total flex bg-slate-900'>
            <div className='semi-total w-full max-w-6xl mx-auto'>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/*" element={<MainPage />} />
                </Routes>
              </BrowserRouter>
              </div>
          </div>
      <Footer />
    </>
  )
}

export default App
