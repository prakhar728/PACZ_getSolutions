import React, { useEffect } from 'react'
import sawo from 'sawo';
import dotenv from 'dotenv';
import styles from './Login.module.css';
dotenv.config({path:'/home/prakharojha/Desktop/ME/PACZ_getSolutions/frontend/.env'});
function Login() {
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            // Add the API key copied from 2nd step
            apiKey: process.env.REACT_APP_SAWO_URI,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
                console.log(payload);
            },
        };
        let Sawo = new sawo(config)
        Sawo.showForm()
    }, [])
   
    return (
        <div className={styles.sawoContainer}>
            <div id="sawo-container"  style={{height:"300px", width:"400px"}}></div> 
       </div>
    )
}

export default Login
