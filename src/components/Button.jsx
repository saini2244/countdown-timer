import '../assets/css/button.scss'


export const Button = ({ name, customClass, clickhandler }) => {

    return (
        <button className={`custom-button ${customClass}`}
            type="button" onClick={clickhandler}>{name}</button>
    )
}