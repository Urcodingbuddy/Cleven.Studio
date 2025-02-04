import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { SmoothScrollProvider } from "../components/src/SmoothScrollProvider";

export default function Home() {

  return (
    <>
      <SmoothScrollProvider /> {/* Only this part is client-side */}
      <AppBar />
      <ContainerScroll titleComponent={"Unleashing the Power of Performance to Make Your Website Invincible."} children={undefined}>
      </ContainerScroll>
      <HeroMessage />
    </>
  );
}
