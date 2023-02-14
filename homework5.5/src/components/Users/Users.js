import React, {useEffect, useState} from "react"
import style from './style.css'

const Users = (props) => {
    const [open, setOpen] = useState(false)

    return (        
        <div className="accordion__item" data-index={props.index} onClick={() => setOpen(!open)}>
            {props.name}
            {open && 
                <div className="accordion__content">
                    <p className="accordion__username">Name: {props.username}</p> 
                    <p className="accordion__email">E-mail: {props.email}</p> 
                    <p className="accordion__phone">Phone: {props.phone}</p> 
                    <p className="accordion__website">Website: {props.website}</p> 
                </div>} 
        </div>
    )
}

export default Users