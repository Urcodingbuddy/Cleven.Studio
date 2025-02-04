import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { EssentialSection } from "@repo/components/EssentialSection";
import { SmoothScrollProvider } from "../components/src/SmoothScrollProvider";

export default function Home() {

  return (
    <>
    <SmoothScrollProvider/>
    <AppBar/>
    <ContainerScroll titleComponent={"Unleashing the Power of Performance to Make Your Website Invincible."} children={undefined}>
    </ContainerScroll>
    <HeroMessage/>
    <EssentialSection/>
    </>
  );
}
