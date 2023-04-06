import styleButton from './button.module.css'

function Button({nomeButton, cadastro, click}) {
    

    return (
        <>
        <button  className={`${styleButton.button} ${styleButton[cadastro]}`} type="submit" onClick={click}>{nomeButton}</button>
        </>
    )
}
export default Button; 