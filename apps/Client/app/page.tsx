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
import Image from "next/image";
export default function Home() {

  return (
    <>
    <SmoothScrollProvider/>
    <AppBar/>
    <ContainerScroll>
    <Image src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75" alt="" />
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
