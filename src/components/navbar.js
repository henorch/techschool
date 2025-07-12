import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar({ user, onbtnclick }){
    
    return(
        <div className="main">
            <div className="profile">
                <b>username</b>
                <span>Graphic designer</span>
            </div>
            <div className="navLink">
                <Link to='/curriculum'>curriculum</Link>
                <Link to='/modules'>Modules</Link>
                <Link to='/test'>Test</Link>
                <Link to='/grading'>Grading</Link>
                <Link to='/profile'>Profile</Link>
            </div>
            <span className='btn' onClick={onbtnclick}>menu</span>
        </div>
    )
}
export default Navbar