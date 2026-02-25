import About from "./components/About";
import Academy from "./components/Academy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mega from "./components/Mega";
import Services from "./components/Services";
import Skin from "./components/Skin";
import State from "./components/State";
import Video from "./components/Video";
import Whatsapp from "./components/Whatsapp";


export default function Home() {
  return (
  <div>
    <Header />
    <Hero />
    <Skin/>
    <About />
    <Services />
    <Academy />
  
    
    <Footer />
    <Mega />
    <Whatsapp />
      </div>
  );
}
