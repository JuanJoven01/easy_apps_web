import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import MainPage from './pages/mainPage';
import SignUpPage from "./pages/signUp";
import ResendCodePage from "./pages/resend_code";
import ActivateUserPage from "./pages/activateUser";
import useGlobalContext from "./context/GlobalContext/useGlobalContext";
import Modal from "./Components/modal";
import Loading from "./Components/loading";



function App() {
  const {modal, isLoading} = useGlobalContext()
  return (
    <>
      {isLoading ? <Loading/> : null}
      {modal['isOpen'] ? <Modal/> : null}
      <Navbar />
      <div className='total flex bg-slate-900'>
            <div className='semi-total w-full max-w-6xl mx-auto'>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/activate" element={<ActivateUserPage />} />
                  <Route path="/resend" element={<ResendCodePage />} />
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
