import { Header } from "../../components/Header";
import './admin.css';
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input"

export default function Admin(){
    return(
        <div className="admin-container">
            <Header/>

            <Logo/>

            <form className="form">

                <label className="label">Nome do link</label>
                <Input 
                    placeholder="Nome do link..."
                />
            </form>

        </div>
    )
}