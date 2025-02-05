import { FaExternalLinkAlt } from "react-icons/fa";

const AppsList = () => {

    const appsList = [
        {
            'title': 'Easy Expenses',
            'description': 'This application allows for easy recording of expenses and records of them, and additionally provides a chatbot for recording intelligent expenses with AI.',
            'image': 'QAP', // Pending add the icon of the app
            'link_1': 'https://www.juanjoven.dev',
        },
    ]


    return (
        <section className=" bg-radial-gradient from-gradient_alpha via-gradient_bravo to-transparent to-70% backdrop-blur-sm ">
            
            <h1 className="text-center p-5 pt-20 text-5xl font-bold text-slate-300" >
                Our Apps List
            </h1>

            <div className="flex flex-wrap p-10 justify-center">
                {
                appsList.map((item,index)=>(
                    <div key={index} className=" mb-10 mx-5 group relative w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[2px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-slate-200 hover:to-charlie">
                        <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div className="relative rounded-[15px] bg-slate-800 p-6">
                            <div className="space-y-4">
                                <h3 className=" text-center font-satoshi-bolditalic text-2xl bg-gradient-to-r from-blue-500 to-delta text-transparent bg-clip-text">{item['title']}</h3>
                                <p className=" text-center p-3 text-slate-300 font-satoshi-italic text-lg">{item['description']}</p>
                                <img src={item['image']} alt="" className=""/>
                                
                                <div className=" flex justify-center text-slate-300 ">  
                                    <div className='flex p-2 mx-1 hover:cursor-pointer  hover:text-teal-200' >
                                        <a className='text-sm mr-2'  href={item.link_1} target="_blank" rel="noopener noreferrer">
                                            Go to the app page
                                        </a>
                                        <FaExternalLinkAlt  />
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ))
                }
            </div>  
        </section>
    )
}

export default AppsList