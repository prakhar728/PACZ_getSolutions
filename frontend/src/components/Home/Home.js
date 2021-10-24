import React, { useState,useEffect } from 'react'
import styles from './Home.module.css';
import axios from 'axios';
function Home() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5000/problem/')
            .then((response) => {
                const dataRecieved = response.data;
                setdata(dataRecieved);
                console.log(dataRecieved);
                console.log('Data has been received!!');
            })
            .catch(() => {
                alert('Data has not been received!!'); //change to error catch
            });

    }, [])
    return (
        <>
        <div className={styles.homeContainer}>
        <div className={styles.home}>
            {(data == null) ? (<h1>No Problems Yet!</h1>) : data.map((post, index) => (
                <div key={index} className={styles.problemCard}>
                    <h3><a href={`http://localhost:3000/problem/${post._id}`} >{post.title}</a></h3>
                    <p>Description:{post.description}</p>
                    <p>Category:{post.flair}</p>
                    <p>By:{!post.visibility?post.userid:'Anonymous'}</p>
                </div>
            ))
    }
        </div>
        </div>
        </>
    )
}
export default Home
