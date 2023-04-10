import Input from "../../components/input/Input";
import {ImUserPlus, ImMail3, ImPhone, ImLock, ImHome} from "react-icons/im"
import Button from "../../components/button/Button"
import styles from "./NovoCadastro.module.css"
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Axios from "axios";

function NovoCadastro() {
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPass, setUserPass] = useState("");

    const user = {
        name:userName,
        mail:userMail,
        phone: userPhone,
        password: userPass
    }

    useEffect(()=> {})

    const cadastrarUser = async (e) => {
        //e.preventDefault();
        //console.log(userName, userMail, userPhone, userPass, userPassRep);
        Axios.post("http://localhost:5000/api/insert", {
            contaName:user.name, 
            contaMail:user.mail,
            contaPhone:user.phone, 
            contaPass:user.password
        }).then(() => {
            alert("Sucessful Insert")
        });
        

        
    }

    return (
        <div className={styles.container}>
            <h2>Cadastrar conta de administrador </h2>
            <form>
                <div>
                    <ImUserPlus />
                    <Input texto="Nome completo" tipo="text" dado={(e) => {setUserName(e.target.value)}} />
                </div>
                <div>
                    <ImMail3 />
                    <Input texto="Digite seu email" tipo="email"  dado={(e) => {setUserMail(e.target.value)}} />
                </div>

                <div>
                    <ImPhone />
                    <Input texto="Digite seu telefone" tipo="tel" dado={(e) => {setUserPhone(e.target.value)}} />
                </div>

                <div>
                    <ImLock />
                    <Input texto="Digite sua senha" tipo="password" dado={(e) => {setUserPass(e.target.value)}} />
                </div>
                
                <Button nomeButton="Cadastrar" click={cadastrarUser}/>
            </form>

            <Link to='/'>
                <ImHome /> <p>Página inicial</p></Link>
        </div>
    )
}
export default NovoCadastro; 