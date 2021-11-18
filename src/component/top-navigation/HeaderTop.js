import { IoNavigate, IoCall, IoLogoWhatsapp, IoPaperPlane, IoMailSharp } from "react-icons/io5";
import './header.css'

function HeaderTop() {
    return (
        <div className='top-navigation'>
            <div className='top-navigation-wrapper'>
                <div className='top-navigation-collum'>
                    <div className='icon-menu-container'>
                        <ul className='menu-contacts'>
                            <li className='menu-item'><IoNavigate />
                                <a href='#'></a>
                                <p className='menu-text'>Санкт-Петербург, 8-й верхний</p></li>
                            <li className='menu-item'>
                                <IoCall />
                                <p className='menu-text'>+7(928)858-28-88</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='top-navigation-collum'>
                    <h4>Бесплатная доставка от 10.000 р.</h4>
                    <a href='#'>Читать больше...</a>
                </div>
                <div className='top-navigation-collum'>
                    <ul className='icon-contacts'>
                        <li className='icon-item'><IoLogoWhatsapp /></li>
                        <li className='icon-item'><IoPaperPlane /></li>
                        <li className='icon-item'><IoMailSharp /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
