

export const HeroMessage = () => {
    return (
        <>
            <section id="heroMessage_head">
                <div id="intoMssg" className="h-[40rem] w-screen flex justify-center items-center px-32 mx-auto">
                    <div className="max-w-7xl w-full flex gap-5">
                        <div id="leftMssg" className="w-1/2 h-full text-white flex">
                        <h1 className="text-[3rem] font-black z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-14">Who said maintaining a website has to be hassle?</h1>
                        </div>
                        <div id="rightMssg" className="w-1/2 h-full text-white flex
                        justify-end ">
                            <div className="text-[1.1rem] leading-7 w-19/20" > 
                            <span className="text-gray-500" > At cleven.studio, we do bug fixing and maintenance effortless, reliable, and stress-free.
                                Our proactive approach ensures your website stays fast, secure, and up-todate.
                                </span > <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                                    Say goodbye to downtime and technical trouble-experience seamless support
                                that keeps your digital presence running smoothly.</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}