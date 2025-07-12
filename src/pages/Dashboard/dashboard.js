import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import './dashboard.css'
import { useState } from "react";
import { GeneConsuner, useGeneConsuner } from "../../context/generalcontext";
import Curricular from "../../components/curriculum";


function DashBoard(){
    const {isOpen, setIsOpen } = useGeneConsuner()

    function toggle(){
        setIsOpen(!isOpen);
        
    }
    return(
    <div>
      
       <Navbar onbtnclick={toggle}/>
        {isOpen && <div className="mobile">
                <Link to='/curriculum'>curriculum</Link>
                <Link to='/modules'>Modules</Link>
                <Link to='/test'>Test</Link>
                <Link to='/grading'>Grading</Link>
                <Link to='/profile'>Profile</Link>
           
         </div>}
           <Curricular/>
    </div>
       
    )
}
export default DashBoard;