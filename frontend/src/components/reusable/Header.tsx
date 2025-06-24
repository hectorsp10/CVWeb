import '../../styles/components/reusable/Header.css'

export default function Header(){
    return (
        <nav className="nav">
            <div className="nav-content">
                <ul>
                    <li><a className='navButton'>Home</a></li>
                    <li><a className='navButton'>About me</a></li>
                    <li><a className='navButton'>Contact</a></li>
                    <li><a className='navButton'>Projects</a></li>
                    <li><a className='navButton'>Blog</a></li>
                    <li><a className='navButton'>Leave a comment</a></li>
                </ul>
            </div>
        </nav>
    );
}