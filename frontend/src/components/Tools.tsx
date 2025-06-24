import ToolsSection from "./reusable/ToolsSection";
import '../styles/components/Tools.css'

function Tools() {
    return (
        <section className="container">
            <h1 className="title-1">Tools<span className='dot'>.</span></h1>
            <p className='text'>
                As a developer, I belive in <strong>strong fundamentals</strong>, the correct understanding of software engeneering and how everything works
                over sticking to any specific stack. In my opinion, one can adapt pretty quickly, but the bases are what truly matters.
            </p>
            <p className='text mb'>
                Although, this are the main weapons I have used, sharpened through years of learnig and used in battle
                against any kind of bug.
            </p>
            <ul>
                <li className="tool-column">
                    <ToolsSection
                        type="Languages"
                        tools={["C#", "Java", "TypeScript", "C++", "SQL", "CSS"]}>
                    </ToolsSection>
                </li>
                <li className="tool-column">
                    <ToolsSection
                        type="Software"
                        tools={["AWS", "Docker", "SQLServer", "Postman", ".net"]}>
                    </ToolsSection>
                </li>
                <li className="tool-column">
                    <ToolsSection
                        type="Others"
                        tools={["APIs Rest", "UML", "Visual studio", "VS Code"]}>
                    </ToolsSection>
                </li>
            </ul>
        </section>
    )
}

export default Tools;