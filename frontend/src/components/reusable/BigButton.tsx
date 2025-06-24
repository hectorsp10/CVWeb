import '../../styles/components/reusable/BigButton.css'

interface BigButtonProps {
  text: string;
}

export default function BigButton({text}: BigButtonProps){

    return(
        <div className="button big-button">
            <a className="big-button-text">{text}</a>
        </div>
    )
}