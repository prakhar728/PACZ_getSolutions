import React, { useState,useEffect} from 'react';
import axios from 'axios';
import styles from './Form.module.css'; 
function Form() {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [tags, settags] = useState('');
    const [anonymous, setanonymous] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            title:title,
            description:body,
            flair:tags
        }
        axios.post('http://localhost:5000/problem/newProblem',data)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    };
    useEffect(() => {
        axios.get('http://localhost:5000/problem/')
            .then(resp => console.log(resp))
            .catch(err =>
                console.log(err));        
    }, []);

    return (
        <div className={styles.Form}>
            <form onSubmit={handleSubmit} >
            <h1>Post your problems here!</h1>
                <input
                    name="title"
                    placeholder="Title of Problem"
                    value={title}
                    className={styles.form__input}
                    onChange={e => settitle(e.target.value)}
                />
                <br />
                <input
                    name="body"
                    placeholder="Describe your problem"
                    className={styles.form__input}
                    value={body}
                    onChange={e => setbody(e.target.value)}
                />
                <br />
                <input
                    name="tag"
                    placeholder="Add relevant Tags"
                    className={styles.form__input}
                    value={tags}
                    onChange={e => settags(e.target.value)}
                />
                <br />
                <input
                    type="checkbox"
                    id="Post Anonymously?"
                    onChange={e => setanonymous(!anonymous)}
                />
                <label for="Post Anonymously">Post Anonymously</label>
                <br />
                <button type="submit" className={styles.form__button}>Submit</button>
            </form>
        </div>
    )
}

export default Form
