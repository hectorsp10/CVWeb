import ToolsSection from "./reusable/ToolsSection";


function Tools() {
    return (
        <section className="container">
            <h1 className="title-1">Tools<span className='dot'>.</span></h1>
            <p className='text'>
                As a developer, I belive in <strong>strong fundamentals</strong>, the correct understanding of software engeneering and how everything works
                over sticking to any specific stack. In my opinion, one can adapt pretty quickly, but the bases are what truly matters.
            </p>
            <p className='text'>
                Although, this are the main weapons I have used, sharpened through years of learnig and used in battle
                against any kind of bug.
            </p>
            <ToolsSection
                type="Languages"
                tools={["C#", "TypeScript", "Java"]}>
            </ToolsSection>
            <ToolsSection
                type="DevOps tools"
                tools={["AWS", "Docker"]}>
            </ToolsSection>
        </section>
    )
}

export default Tools;