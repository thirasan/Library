import React, { Component } from 'react'
import axios from 'axios'
import $ from 'JQuery'

class DigitalMedia extends Component {
    constructor() {
        super();

        this.state = {
            ID: "",
            MediaName: "",
            Director: "",
            RunTime: "",
            Year: ""
        };
    }
    componentWillMount() {
        axios.get(`http://localhost:3943/digitalMedia/${this.props.params.id}`).then(res => res.data).then((data) => {
            this.state.ID = data[0].Media_ID;
            this.state.MediaName = data[0].MediaName;
            this.state.Director = data[0].Director;
            this.state.RunTime = data[0].RunTime;
            this.state.Year = data[0].Year;
            
            document.getElementById('ID').innerHTML = 'Media ID: '+this.state.ID;
            document.getElementById('MediaName').innerHTML = 'Media name: ' +this.state.MediaName;
            document.getElementById('Director').innerHTML = 'Director: '+this.state.Director;
            document.getElementById('RunTime').innerHTML = 'RunTime: '+ this.state.RunTime + " minutes";
            document.getElementById('Year').innerHTML = 'Aired: '+this.state.Year;
        })
    }

    onBorrow() {
        axios.post('http://localhost:3943/borrowDigitalMedia',{
            user: this.props.params.user,
            mediaID: this.state.ID
        }).then(res => res.data).then((data) => {

        })
    }

    render() {
        return (
            <div>
                <div id="ID">
                    Loading
                </div>
                <div id="MediaName">
                    Loading
                </div>
                <div id="Director">
                    Loading
                </div>
                <div id="RunTime">
                    Loading
                </div>
                <div id="Year">
                    Loading
                </div>
                <div>{"User : " + this.props.params.user}</div>
                <button onClick={(e) => this.onBorrow(e)}>Search</button>
                <img src={require(`./digitalmediaimages/${this.props.params.id}.jpg`)}/>
            </div>
        )
    }
}

export default DigitalMedia