import '../../styles/components/reusable/ToolsSection.css'

type ToolsSectionProps = {
    type: string;
    tools: string[];
}

export default function ToolsSection({ type, tools}: ToolsSectionProps) {
    return (
        <div className="tools-section">
            <h2 className="category-title">{ type }</h2>
            <div className="tools-grid">
                {tools.map((tool, index) =>(
                    <div key={index} className="tool">
                        {tool}
                    </div>
                ))}
            </div>
        </div>
    )
}