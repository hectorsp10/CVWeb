import '../../styles/components/reusable/SecondaryButton.css'
import { Link } from "react-router-dom";

interface SecondaryButtonProps {
  text: string;
  route: string;
}

export default function SecondaryButton({ route, text }: SecondaryButtonProps) {
  return (
    <nav>
      <Link to={route}>
        <div className="button secondary-button">
          <a className="secondary-button-text">{text}</a>
          <div className="arrow-circle">
            <span className="arrow">→</span>
          </div>
        </div>
      </Link>
    </nav>
  )
}