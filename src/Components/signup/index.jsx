const SignUpComponent = () => {
    return(
        <section className="flex justify-center">
            <div className=" jus mb-10 mx-5 group relative w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[2px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-slate-200 hover:to-charlie">
                <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                    <div className="relative rounded-[15px] bg-slate-800 p-6">
                        <div className="space-y-4">
                            <h3 className=" text-center font-satoshi-bolditalic text-2xl bg-gradient-to-r from-blue-500 to-delta text-transparent bg-clip-text"> qap </h3>
                            <p className=" text-center p-3 text-slate-300 font-satoshi-italic text-lg"> qap </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpComponent