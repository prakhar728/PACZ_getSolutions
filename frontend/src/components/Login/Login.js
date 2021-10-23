import React, { useEffect } from 'react'
import sawo from 'sawo';
import dotenv from 'dotenv';
import styles from './Login.module.css';
import {useHistory} from 'react-router-dom';

dotenv.config({path:'/home/prakharojha/Desktop/ME/PACZ_getSolutions/frontend/.env'});
function Login() {
    const history = useHistory();
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
                localStorage.setItem('userId',payload.user_id);
                history.push('/home')
            },
        };
        let Sawo = new sawo(config)
        Sawo.showForm()
    }, [])
   
    return (
        <div className={styles.sawoContainer}>
            <div className={styles.header} >PASSWORD-LESS AUTH</div>
            <div id="sawo-container" style={{height:"300px", width:"400px"}}></div> 
       </div>
    )
}

export default Login
