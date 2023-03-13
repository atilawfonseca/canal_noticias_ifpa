import styleButton from './button.module.css'

function Button({nomeButton, cadastro}) {
    

    return (
        <>
        <button  className={`${styleButton.button} ${styleButton[cadastro]}`} type="submit">{nomeButton}</button>
        </>
    )
}
export default Button; 