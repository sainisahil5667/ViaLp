import AboutLp from "@/components/AboutLp";
import HeroImage from "@/components/Backimage";
import FaqAccordion from "@/components/FaqAccordion";
import FixedButton from "@/components/FixedButton";
import Lptestimonials from "@/components/Lptestimonials";
import Tabclick from "@/components/Tabclick";
import WhyChooseUs from "@/components/Wcu";
export default function Home() {
  return (
    <>
<HeroImage src={'/bali-tour-packages-Web-banner.jpg'}/>
<Tabclick/>
<AboutLp/>
<WhyChooseUs/>
<Lptestimonials/>
<FaqAccordion/>
<FixedButton/>
    </>
  );
}
