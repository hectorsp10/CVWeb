import { Link } from 'react-router-dom';
import '../../styles/components/reusable/Footer.css'
import SecondaryButton from '../reusable/SecondaryButton'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='row container'>
        <div className="button-list">
          <a className='button-list-title'>About</a>
          <button className="footer-button">Home</button>
          <button className="footer-button">About</button>
          <button className="footer-button">Projects</button>
          <button className="footer-button">blog</button>
          <button className="footer-button">Leave a comment</button>
        </div>
        <div className="button-list">
          <a className='button-list-title'>Media</a>
          <Link to='https://www.linkedin.com/in/h%C3%A9ctors%C3%A1nchezpend%C3%A1s/'>
            <button className="footer-button">Linkedin</button>
          </Link>
          <Link to='https://github.com/hectorsp10'>
            <button className="footer-button">Github</button>
          </Link>
          
        </div>
        <div className='footer-contact'>
          <a className='text-lg'>Seen enough?</a>
          <div className='contact'>
            <SecondaryButton route='/' text='Contact'></SecondaryButton>
          </div>
        </div>
      </div>
    </footer>
  );
}