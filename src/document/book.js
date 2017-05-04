import React, { Component } from 'react'
import axios from 'axios'

class Book extends Component {
    constructor() {
        super();

        this.state = {
            Name: 'kk'
        };
    }
    componentWillMount() {
        axios.get(`http://localhost:3943/book/${this.props.params.id}`).then(res => res.data).then((data) => {
            this.state.Name = data[0].Author_Name;
            document.getElementById('body').innerHTML = this.state.Name;
        })
    }

    render() {
        return (
            <div>
                <div id="body">
                    Loading
                </div>
                <div>{this.props.params.user}</div>
            </div>
        )
    }
}

export default Book