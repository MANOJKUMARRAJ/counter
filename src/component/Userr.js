import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Userr(){
    const [details,setDetails]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            setDetails(response.data)

        })
        .catch(error=>{
            console.log(error)
        })
    })
    return (
        <div>
            <h3>Users Names</h3>
            {details.map(detail=>
                <div key={detail.id}>
                    <p>{detail.name}</p>
                </div>)}
        </div>
    )
}