import React, { useState,useEffect} from 'react';
import axios from 'axios';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Title of Problem"
                    value={title}
                    onChange={e => settitle(e.target.value)}
                />
                <br />
                <input
                    name="body"
                    placeholder="Describe your problem"
                    value={body}
                    onChange={e => setbody(e.target.value)}
                />
                <br />
                <input
                    name="tag"
                    placeholder="Add relevant Tags"
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
