

export const HeroMessage = () => {
    return(
        <>
        <section id="heroMessage_head">
            <div id="intoMssg" className="h-[50vh] w-screen flex justify-center items-center px-44 bg-sky-500 ">
                <div id="leftMssg" className="w-1/2 h-full  text-white flex items-center">
                <h1 className="text-5xl font-bold bg-orange-500 " >Who said maintaining a <br/>
                website has to be a hassle?</h1>
                </div>
                <div id="rightMssg" className="w-1/2 h-full text-white bg-green-600  flex items-center">
                <p className="text-[1.3rem] leading-7 " > <span className="text-gray-500" > At cleven.studio, we do bug fixing and maintenance effortless, reliable, and stress-free.
                Our proactive approach ensures your website stays fast, secure, and up-todate. </span> Say goodbye to downtime and technical headaches—experience seamless support
                that keeps your digital presence running smoothly.</p>
                </div>
            </div>
        </section>
        </>
    )
}