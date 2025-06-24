import '../../styles/components/reusable/SecondaryButton.css'

interface SecondaryButtonProps {
    text: string;
}

export default function SecondaryButton({ text }: SecondaryButtonProps) {
    return (
        <div className="button secondary-button">
            <a className="secondary-button-text">{text}</a>
            <div className="arrow-circle">
                <span className="arrow">→</span>
            </div>
        </div>
    )
}