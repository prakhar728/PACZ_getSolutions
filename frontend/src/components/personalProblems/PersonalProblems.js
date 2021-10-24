import React,{useState,useEffect} from 'react';
import axios from 'axios';


function PersonalProblems() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        const x = localStorage.getItem('userId');
        axios.get('http://localhost:5000/problem/ownProblems',{
            headers:{
                'userid':x
            }
        })
        .then(resp=>{console.log(resp);
            setdata(resp["data"]);
            console.log(data);        
        })
        .catch(err=>console.log(err))
        
    }, [])
    return (
        <div>
            These are the problems that you have Posted!
            {(data == null) ? (<h1>No Problems Yet!</h1>) : data.map((post, index) => (
                <div key={index} >
                    <h3><a href={`http://localhost:3000/problem/${post._id}`} >{post.title}</a></h3>
                    <p>Description:{post.description}</p>
                    <p>Category:{post.flair}</p>
                    <p>Visibility:{post.visibility?'anonymous':'not anonymous'}</p>
                </div>
            ))
    }
        </div>
    )
}

export default PersonalProblems
