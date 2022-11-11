/* eslint-disable jsx-a11y/anchor-is-valid */
import './home.css'
import { Social } from '../../components/Social' 
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Trone Developer</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
            <section className="link-area">
                <a href="#">
                    <p className="link-text">Canal no YouTube</p>
                </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Grupo privado no Telegram</p>
                </a>
            </section>

            <section className="link-area">
                <a href="#">
                    <p className="link-text">Treinamento fábrica de aplicativos</p>
                </a>
            </section>

            <footer>
                <Social url="https://facebook.com/rafael.silvestrone">
                    <FaFacebook size={35} color="#FFF" />
                </Social>

                <Social url="https://www.instagram.com/rafael.silvestrone/">
                    <FaInstagram size={35} color="#FFF" />
                </Social>

                <Social url="https://youtube.com/">
                    <FaYoutube size={35} color="#FFF" />
                </Social>
            </footer>

            </main>
        </div>
    )
}