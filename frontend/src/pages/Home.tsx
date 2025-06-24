import Header from '../components/reusable/Header.tsx'
import Hero from '../components/Hero.tsx'
import Tools from '../components/Tools.tsx';
import About from '../components/About.tsx';
import Skills from '../components/Skills.tsx';
import Footer from '../components/reusable/Footer.tsx'

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Tools/>
            <Skills/>
            <Footer/>
        </>
    );
}