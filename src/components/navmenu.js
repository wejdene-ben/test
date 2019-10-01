import React from 'react';
import '../style.css'


const Navmenu = (props) => {
    return (
        <ul className="navbar">
            {props.val.map(el => <li className='menuItem'>{el.title}
            {el.subMenu && <ul className="dropDown">{el.subMenu.map(el => <li className>{el}</li>)}</ul>
                } 
            
            </li>
            )}
            
        </ul>
    )
}

export default Navmenu