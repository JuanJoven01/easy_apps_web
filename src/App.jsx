import Navbar from './Components/navbar'
import Footer from './Components/footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='total flex bg-slate-900'>
        <div className='semi-total w-full max-w-6xl mx-auto'> </div>
      </div>
      <Footer />
    </>
  )
}

export default App
