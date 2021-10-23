import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import styles from './problem.module.css';

function Problem() {
    const history = useHistory();
    const [data, setdata] = useState(null);
    const [comments, setcomments] = useState([]);
    const [currentComment, setcurrentComment] = useState('')
    useEffect(() => {
        console.log(history.location.pathname.split('/')[2]);
        axios.get(`http://localhost:5000/problem/${history.location.pathname.split("/")[2]}`)
        .then(resp=>{console.log(resp["data"]);
                    setdata(resp["data"]);
                    console.log(data);
                    if(data!=null)
                    setcomments(data.comments);
                    console.log(comments);
    })
        .catch(err=>console.log(err))
        
    }, [])
    const handleSubmit = (e) => {
        const x = localStorage.getItem('userId');
        e.preventDefault();
        const data ={
            content:currentComment
        }
        axios.post(`http://localhost:5000/problem/${history.location.pathname.split("/")[2]}/comment`,data,{
            headers:{
            'userid':x
        }})
        .then(resp=>{console.log(resp["data"]);
                    if(resp["data"]=='Submitted!')
                    {alert('Congrats! Comment Submitted')
                    }
                    else
                    alert('Failed!')
    })
        .catch(err=>console.log(err))
    };
    return (
        <div>
            {(data===null  )?<h2>No such problem exists</h2>:
            (
                <div className={styles.problemHeading}> 
                <h3>{data.description}</h3>
                <h3>{data.flair}</h3>
                <h3>{data.title}</h3>
                </div>
                
            )
            }
            <h1>Comments</h1>
            {(data===null||data.comments===[] || data.comments.length===0 )?<h2>No comments to show</h2>:
            (data.comments.map((comment,index)=>(
                    <div key={index}>
                        <h3>{comment}</h3>
                            </div>
                ))
            )
            }
            <form onSubmit={handleSubmit} >
                <input
                    name="Comment"
                    placeholder="Add a comment"
                    value={currentComment}
                    className={styles.form__input}
                    onChange={e => setcurrentComment(e.target.value)}
                />
                <br />
                <button type="submit" className={styles.form__button}>Submit</button>
            </form>
        </div>
    )
}

export default Problem
