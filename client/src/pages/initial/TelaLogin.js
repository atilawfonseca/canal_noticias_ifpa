import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import logoIf from "../../img/Logo_IFPA_ananindeua_menos_larga_monocromatica_negativa.png";
import styleLogo from "./telaLogin.module.css";
import { useState } from "react";
import { ImMail3, ImLock } from "react-icons/im";
import axios from "axios";
import PageAdmin from "../admin/PageAdmin";
import Message from "../../components/message/Message";

function TelaLogin() {
  let link = "";
  const linkconta = "/novocadastro";
  const [eemail, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [error, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [acesso, setAcesso] = useState(false);
  const [user, setUser] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = eemail.target.value;
    const password = senha.target.value;

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      setUser(response.data);
      setSucesso("Acesso permitido!");
      setAcesso(true);
    } catch (error) {
      if (!error?.response) {
        setErro("Erro ao acessar o servidor");
        setAcesso(false);
      } else if (error.response.status === 401) {
        setErro("Usuário ou senha invalidos.");
        setAcesso(false);
      }
    }
    
  };

  const handleLogout = async (e) => {
    setUser(null);
    setErro("");

  };

  return (
    <div className={styleLogo.layaut} onSubmit={handleLogin}>
      {user == null ? (
        <div>
          <img
            className={styleLogo.logoIfAnan}
            src={logoIf}
            alt="imagem da logo da instituição"
          />
          <div className={styleLogo.messagem}>
            {acesso === false && <Message text={error} type={"erro"} />}
            
          </div>
          <form className={styleLogo.formLogin}>
            <div>
              <ImMail3 />
              <Input tipo="email" texto="Insira seu email" dado={setEmail} />
            </div>
            <div>
              <ImLock />
              <Input tipo="password" texto="Insira sua senha" dado={setSenha} />
            </div>
            <Button nomeButton="Enviar"></Button>
          </form>

          <nav className={styleLogo.links}>
            <a href={link}>Esqueceu a senha?</a>
            <a href={linkconta}>Criar Conta</a>
          </nav>
        </div>
      ) : (
        <div>
          {acesso === true && (
            <>
              <Message text={sucesso} type={"sucesso"} />
              <PageAdmin />
            </>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default TelaLogin;

/** Nesta página devemos verificar como a mensagem pode aparecer de forma suave, sem colocar as tags para baixo e ve pq a mensagem de erro deixa de aparecer
 * depois que se envia a primeira vez.
 */

//solução: Para que a tag mensagem sempre esteja presente deve existir um espaço na pagina destinado para mensagem ela estando ou não.
