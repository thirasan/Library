import React, { Component } from 'react'
import axios from 'axios'
import $ from 'JQuery'

class Author extends Component {
    constructor() {
        super();

        this.state = {
            AuthorName: "",
            Name: "",
            Gender: "",
            Birthdate: ""
        };
    }
    componentWillMount() {
        axios.get(`http://localhost:3943/author/${this.props.params.id}`).then(res => res.data).then((data) => {
            this.state.AuthorName = data[0].AuthorName;
            this.state.Name = data[0].Name;
            this.state.Gender = data[0].Gender;
            this.state.Birthdate = data[0].Birthdate;
            
            document.getElementById('AuthorName').innerHTML = 'Pen name: ' +this.state.AuthorName;
            document.getElementById('Name').innerHTML = 'Real Name: '+this.state.Name;
            document.getElementById('Gender').innerHTML = 'Gender: '+ this.state.Gender;
            document.getElementById('Birthdate').innerHTML = 'Birthdate: '+this.state.Birthdate;
        })
    }

    render() {
        return (
            <div>           
                <div id="AuthorName">
                    Loading
                </div>
                <div id="Name">
                    Loading
                </div>
                <div id="Gender">
                    Loading
                </div>
                <div id="Birthdate">
                    Loading
                </div>
                <div>{this.props.params.user}</div>
                <img src={require(`./authorimages/${this.props.params.id}.jpg`)}/>
            </div>
        )
    }
}

export default Author