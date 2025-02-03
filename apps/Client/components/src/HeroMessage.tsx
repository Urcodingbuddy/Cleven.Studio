

export const HeroMessage = () => {
    return(
        <>
        <section id="heroMessage_head">
            <div id="intoMssg" className="h-screen w-screen flex justify-center items-center p-20 ">
                <div id="leftMssg" className="w-1/2 h-full  text-white flex items-center  " >
                <h1 className="text-3xl font-bold  " >Who said maintaining a <br/>
                website has to be a hassle?</h1>
                </div>
                <div id="rightMssg" className="w-1/2 h-full text-white  flex items-center ">
                <p className="text-xl" > At cleven.studio, we make bug fixing and maintenance effortless, reliable, and stress-free.
                Our proactive approach ensures your website stays fast, secure, and up-todate.Say goodbye to downtime and technical headaches—experience seamless support
                that keeps your digital presence running smoothly.</p>
                </div>
            </div>
        </section>
        </>
    )
}