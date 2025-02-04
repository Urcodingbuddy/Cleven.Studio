import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import useLenis  from "../lib/hooks/useLenis";
import { EssentialSection } from "@repo/components/EssentialSection";

export default function Home() {

  return (
    <>
      <SmoothScrollProvider /> {/* Only this part is client-side */}
      <AppBar />
      <ContainerScroll titleComponent={"Unleashing the Power of Performance to Make Your Website Invincible."} children={undefined}>
      </ContainerScroll>
      <HeroMessage />
    <AppBar/>
    <ContainerScroll titleComponent={"Unleashing the Power of Performance to Make Your Website Invincible."} children={undefined}>
    </ContainerScroll>
    <HeroMessage/>
    <EssentialSection/>
    </>
  );
}
