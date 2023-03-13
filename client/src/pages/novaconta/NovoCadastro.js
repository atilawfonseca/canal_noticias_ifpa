import Input from "../../components/input/Input";
import {ImUserPlus, ImMail3, ImPhone, ImLock, ImHome} from "react-icons/im"
import Button from "../../components/button/Button"
import styles from "./NovoCadastro.module.css"
import {Link} from 'react-router-dom'

function NovoCadastro() {
    return (
        <div className={styles.container}>
            <h2>Cadastrar conta de administrador </h2>
            <form>
                <div>
                    <ImUserPlus />
                    <Input texto="Nome completo" tipo="text"  />
                </div>
                <div>
                    <ImMail3 />
                    <Input texto="Digite seu email" tipo="email"  />
                </div>

                <div>
                    <ImPhone />
                    <Input texto="Digite seu telefone" tipo="number"  />
                </div>

                <div>
                    <ImLock />
                    <Input texto="Digite sua senha" tipo="password"  />
                </div>
                <div>
                    <ImLock />
                    <Input texto="Repita a senha" tipo="password"  />
                </div>
                <Button nomeButton="Cadastrar"/>
            </form>

            <Link to='/'>
                <ImHome /> <p>Página inicial</p></Link>
        </div>
    )
}
export default NovoCadastro; 