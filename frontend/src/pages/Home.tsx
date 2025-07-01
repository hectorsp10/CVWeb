import Header from '../components/reusable/Header.tsx'
import Hero from '../components/Hero.tsx'
import Tools from '../components/Tools.tsx';
import About from '../components/AboutSection.tsx';
import Skills from '../components/Skills.tsx';
import Footer from '../components/reusable/Footer.tsx'

export default function Home() {
    return (
        <>
            <div className="up">
                <Header/>
                <Hero/>
                <About/>
                <Tools/>
                <Skills/>
            </div>
            <Footer/>
            
        </>
    );
}