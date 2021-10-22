import React from 'react';
import axios from 'axios';
export default class Form extends React.Component {
    state = {
        username: '',
        subject: '',
        body: '',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

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
                <input 
                    name="username"
                    placeholder="username"
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                    //onChange={e => this.setState({ username: e.target.value })}
                />
                <br />
                <input 
                    name="subject"
                    placeholder="subject"
                    value={this.state.subject} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="body"
                    placeholder="body"
                    value={this.state.body} 
                    onChange={e => this.change(e)}
                />
                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}