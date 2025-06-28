import '../../styles/components/reusable/BigButton.css'
import { Link } from "react-router-dom";

interface BigButtonProps {
    text: string;
}

export default function BigButton({ text }: BigButtonProps) {

    return (
        <nav>
            <Link to="/about">
                <div className="button big-button">
                    <a className="big-button-text">{text}</a>
                </div>
            </Link>

        </nav>

    )
}