import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
 
function Problem() {
    const history = useHistory();
    const [data, setdata] = useState(null);
    useEffect(() => {
        console.log(history.location.pathname.split('/')[2]);
        axios.get(`http://localhost:5000/problem/${history.location.pathname.split("/")[2]}`)
        .then(resp=>{console.log(resp["data"]);
                    setdata(resp["data"]);
    })
        .catch(err=>console.log(err))
        
    }, [])
    return (
        <div>
            Problem Data
        </div>
    )
}

export default Problem
