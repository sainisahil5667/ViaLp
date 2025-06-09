import AboutLp from "./AboutLp";
import HeroImage from "./Backimage";
import FaqAccordion from "./FaqAccordion";
import FixedButton from "./FixedButton";
import Lptestimonials from "./Lptestimonials";
import Tabclick from "./Tabclick";
import WhyChooseUs from "./Wcu";
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
