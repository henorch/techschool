import './button.css'

function Button({btnfunc, btnname, type}){
    return(
        <button className={`btn ${type}`} onClick={btnfunc}>{btnname}</button>
    )
}
export default Button