

export const HeroMessage = () => {
    return (
        <>
            <section id="heroMessage_head">
                <div id="intoMsg" className="h-[40rem] w-full px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-center items-center mx-auto">
                    <div className="max-w-7xl w-full flex flex-col md:flex-row gap-5 px-4">
                        <div id="leftMssg" className="w-full lg:w-1/2 h-full text-white">
                            <h1 className="text-4xl sm:text-5xl  font-bold flex z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                                Who said maintaining a website has to be a hassle?
                            </h1>
                        </div>
                        <div id="rightMssg" className="w-full lg:w-1/2 h-full text-white lg:justify-end flex">
                            <div className="sm:text-lg md:text-xl font-medium leading-7 w-full lg:w-18/20"> 
                                <span className="text-gray-500">
                                    At cleven.studio, we do bug fixing and maintenance effortless, reliable, and stress-free.
                                    Our proactive approach ensures your website stays fast, secure, and up-todate.
                                </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                                    Say goodbye to downtime and technical trouble-experience seamless support
                                    that keeps your digital presence running smoothly.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroMessage