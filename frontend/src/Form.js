import React from 'react';
import axios from 'axios';
export default class Form extends React.Component {
    state = {
        username: '',
        subject: '',
        body: '',
        anonymous: false,
    }

    /*change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };*/

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        axios.get('http://localhost:5000/problem/')
        .then(resp=>console.log(resp))
        .catch(err=>
            console.log(err))
        this.setState({
            username: '',
            subject: '',
            body: ''
        });
    };

    render() {
        return (
            <form>
                <input class="form__input"
                    name="username"
                    placeholder="username"
                    value={this.state.username} 
                    //onChange={e => this.change(e)}
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <br />
                <input class="form__input"
                    name="subject"
                    placeholder="subject"
                    value={this.state.subject} 
                    onChange={e => this.setState({ subject: e.target.value })}
                />
                <br />
                <input class="form__input"
                    name="body"
                    placeholder="body"
                    value={this.state.body} 
                    onChange={e => this.setState({ body: e.target.value })}

                />
                <br />
                <input 
                type="checkbox" 
                id="Post Anonymously?"
                onChange={e => this.setState({ anonymous: !(this.state.anonymous) })}
                />
                <label for="Post Anonymously">Post Anonymously</label>
                <br />

                <button class="form__button" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}
