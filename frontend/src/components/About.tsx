import SecondaryButton from "../components/reusable/SecondaryButton";


export default function About() {
    return (
        <section className="container">
            <h1 className="title-1">About<span className='dot'>.</span></h1>
            <p className="text">
                Born in a small town in Asturias, northern Spain,
                I grew up like any other child, without any apparent skill that stood out, 
                <strong> none but an inmense curiosity</strong>.</p>
            <p className="text">
                This particular skill, alongside the drive and discipline that I have been developing for years,
                have helped me find my passion, which is to build meaningful and robust software,
                able to affect people's lives for the better.
            </p>
            <p className="text mb">
                Would you like to know more?
            </p>
            <SecondaryButton text="About me"></SecondaryButton>
        </section>
    )
}