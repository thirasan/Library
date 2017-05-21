import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import $ from 'JQuery'
import { browserHistory } from 'react-router';

class Book extends Component {
    constructor() {
        super();

        this.state = {
            authorName: '',
            authorID: ''
        };
    }
    componentWillMount() {
        axios.get(`http://localhost:3943/book/${this.props.params.id}`).then(res => res.data).then((data) => {
            this.state.authorName = data[0].Author_ID;
            this.state.authorID = data[0].Author_ID;
            console.log(data[0].Author_ID)
            document.getElementById('author').innerHTML = this.state.authorName;
        })
    }
    linkToAuthor() {
        browserHistory.push(`/${this.props.user}/author/${this.state.authorID}`);
    }


    render() {
        return (
            <div>
                <button id = "author" onClick={(e) => this.linkToAuthor(e)}>Loading</button>
                <div>{this.props.params.user}</div>
                <img src={require(`./bookimages/${this.props.params.id}.jpg`)}/>
            </div>
        )
    }
}

export default Book