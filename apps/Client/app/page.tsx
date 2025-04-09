import { AppBar } from "@repo/landing/AppBar";
import { HeroMessage } from "@repo/landing/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { EssentialSection } from "@repo/landing/EssentialSection";
import  SmoothScrollProvider  from "../landing/src/SmoothScrollProvider";
import { FAQ } from "@repo/landing/FAQ";
import { Footer } from "@repo/landing/Footer";
import { Services } from "@repo/landing/Services";
import { Testimonials } from "@repo/landing/Testimonials";
import { TextHoverEffect } from "../@/components/ui/text-hover-effect";
import { InitialLoader } from "@repo/landing/InitialLoader";

export default function Home() {

  return (
    <>
    <InitialLoader />
    <AppBar/>
    <SmoothScrollProvider/>
    <ContainerScroll>
    <img src="./dashboard-ex.jpg" alt="" />
    </ContainerScroll>
    <HeroMessage/>
    <EssentialSection/>
    <Services/>
    <Testimonials/>
    <FAQ/>
    <TextHoverEffect text="CLEVEN" />
    <Footer/>
    </>
  );
}
