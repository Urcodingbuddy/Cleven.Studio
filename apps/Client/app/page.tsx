import { AppBar } from "@repo/components/AppBar";
import { HeroMessage } from "@repo/components/HeroMessage";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <>
    <AppBar/>
    <ContainerScroll titleComponent={"Unleashing the Power of Performance to Make Your Website Invincible."} children={undefined}>
      
    </ContainerScroll>
    <HeroMessage/>
    </>
  );
}
