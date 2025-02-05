
const Navbar = () => {


    return(
        <nav className=" border-b-2 border-slate-400 flex h-16 justify-between bg-opacity-20 backdrop-blur-md fixed w-full text-slate-200 font-lora z-10"> 
            <p className='my-auto ml-5'>EASY APPS</p>
            <ul className="my-auto mr-5 flex">
                <a className={`px-5 hover:cursor-pointer hover:text-echo hover:underline`} href="https://www.linkedin.com/in/juan-pablo-joven-urbano-05202129a/" target="_blank" rel="noopener noreferrer" >
                    Linkedin
                </a>
                <a className={`px-5 hover:cursor-pointer hover:text-echo hover:underline`} href="https://github.com/JuanJoven01" target="_blank" rel="noopener noreferrer" >
                    Github
                </a>
            </ul>
        </nav>
    )
    
}

export default Navbar