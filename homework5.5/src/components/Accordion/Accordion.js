import React, {useState, useEffect} from "react";
import Users from "../Users/Users";

const Accordion = () => {
    const [users, setUsers] = useState('users')
    const [userApi, setUserApi] = useState([])
    const url = `https://jsonplaceholder.typicode.com/${users}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setUserApi(json))
    }, [userApi])

    return (        
        <div className="accordion__container">            
                {userApi.map((item, idx) => {                                    
                    return <Users
                        index={idx}
                        key={item.id}
                        name={item.name}
                        data-index={idx}                   
                        username={item.username}
                        email={item.email}
                        phone={item.phone}
                        website={item.website}
                    />
                })}                
        </div>
    )
}

export default Accordion