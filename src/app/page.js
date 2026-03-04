import About from "./components/About";
import Academy from "./components/Academy";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mega from "./components/Mega";
import Welcome from "./components/popup-massege";
import Services from "./components/Services";
import Skin from "./components/Skin";



export default function Home() {
  return (
  <div>
    <Header />
    <Hero />
    <Skin/>
    <About />
    <Services />
    <Academy />
    <Blog />  
    <Footer />
    <Welcome />
    <Mega />
      </div>
  );
}
