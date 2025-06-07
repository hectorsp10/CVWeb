import '../styles/components/Header.css'

export default function Header(){
    return (
        <nav className="nav">
            <div className="nav-content">
                <ul>
                    <li><a>about me</a></li>
                    <li><a>contact</a></li>
                    <li><a>projects</a></li>
                    <li><a>blog</a></li>
                    <li><a>leave a comment</a></li>
                </ul>
            </div>
        </nav>
    );
}