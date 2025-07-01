import Header from '../components/reusable/Header.tsx'

export default function About() {
  return (
    <>
      <Header />
      <section>
        <div className="about-body">
          <h2 className="text-lg">Sobre mí</h2>
          <p className="text">
            Soy desarrollador de software con pasión por crear soluciones útiles, simples y bien estructuradas. Me especializo en <span class="font-semibold text-indigo-600">desarrollo fullstack</span> con tecnologías modernas.
          </p>
          <p className="text">
            Mi motivación principal es resolver problemas reales mediante código limpio y bien pensado. Me interesa trabajar con equipos que valoren la colaboración, el aprendizaje constante y la mejora continua.
          </p>
          <p className="text">
            En mi tiempo libre, disfruto de <span className="italic">leer sobre tecnología, tocar la guitarra y explorar nuevas herramientas de desarrollo</span>. Siempre estoy en busca de proyectos donde pueda crecer y aportar valor.
          </p>
        </div>
      </section>
    </>
  );
}