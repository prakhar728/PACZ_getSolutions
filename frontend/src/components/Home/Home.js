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
            {(data == null) ? (console.log('No data recieved')) : data.map((post, index) => (
                <div key={index} className={styles.problemCard}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Tags:{post.flair}</p>
                    <p>{post.comments}</p>
                    <p>{post.userid}</p>
                </div>
            ))
    }
        </div>
        </div>
        </>
    )
}
export default Home
