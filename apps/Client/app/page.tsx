import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { EssentialSection } from "@repo/components/EssentialSection";
import { SmoothScrollProvider } from "../components/src/SmoothScrollProvider";
import { PunchLine } from "@repo/components/PunchLine";
export default function Home() {

  return (
    <>
    <SmoothScrollProvider/>
    <AppBar/>
    <PunchLine/>
    <ContainerScroll children={undefined}>
    </ContainerScroll>
    <HeroMessage/>
    <EssentialSection/>
    </>
  );
}
