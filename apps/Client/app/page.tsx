import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { EssentialSection } from "@repo/components/EssentialSection";
import { SmoothScrollProvider } from "../components/src/SmoothScrollProvider";
import { FAQ } from "@repo/components/FAQ";
import { Footer } from "@repo/components/Footer";
import { Services } from "@repo/components/Services";
import { Testimonials } from "@repo/components/Testimonials";
import { TextHoverEffect } from "../@/components/ui/text-hover-effect";

export default function Home() {

  return (
    <>
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
