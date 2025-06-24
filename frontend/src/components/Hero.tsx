import '../styles/components/Hero.css'

import profileImage from '../assets/Foto_Perfil.jpg'
import HoverLetters from '../features/HoverLetters'
import BigButton from './reusable/BigButton'

export default function Hero(){
    return (
        <section className='container'>
            <ul>
                <li>
                    <div className='heroText'>
                        <h2 className='title-2 underline slide-in-left-1'>Hello, I'm Héctor</h2>
                        <div className='slide-in-left-2'><HoverLetters text='Software Developer'></HoverLetters><a className='dot'>.</a></div>
                        <p className='text slide-in-left-3'>With strong passion for making valuable products that change people's lives</p>
                        <div className='slide-in-left-3'>
                            <BigButton text='Contact'></BigButton>
                        </div>                        
                    </div>
                </li>
                <li>
                    <div className='imageWrapper'>
                        <img src={profileImage} alt="Imagen de Héctor Sánchez" className='heroImage' />
                    </div>
                </li>
            </ul>
        </section>
    )
}