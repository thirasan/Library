import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import $ from 'JQuery'
import { browserHistory } from 'react-router';

class Book extends Component {
    constructor() {
        super();

        this.state = {
            ID: "",
            BookName: "",
            PageCount: "",
            FirstPublished: "",
            Award: "",
            Genre: "",
            AuthorID: "",
            AuthorName: ""
        };
    }
    componentWillMount() {
        axios.get(`http://localhost:3943/book/${this.props.params.id}`).then(res => res.data).then((data) => {
            this.state.ID = data[0].Book_ID;
            this.state.BookName = data[0].BookName;
            this.state.PageCount = data[0].PageCount;
            this.state.FirstPublished = data[0].FirstPublished;
            for(var i=0;i<data.length;i++){
                this.state.Genre += data[i].Genre;
                if (i<data.length-1) this.state.Genre += ', ';
            }
            this.state.AuthorID = data[0].author_ID;
            this.state.AuthorName = data[0].authorName;
            
            document.getElementById('ID').innerHTML = 'Book ID: '+this.state.ID;
            document.getElementById('BookName').innerHTML = 'Book name: ' +this.state.BookName;
            document.getElementById('PageCount').innerHTML = 'Number of pages: '+this.state.PageCount;
            document.getElementById('FirstPublished').innerHTML = 'First published: '+ this.state.FirstPublished;
            // document.getElementById('Award').innerHTML = 'Award: '+this.state.Award;
            document.getElementById('Genre').innerHTML = 'Genre(s): ' + this.state.Genre;
            document.getElementById('AuthorName').innerHTML = 'Author: ' + this.state.AuthorName;
            axios.get(`http://localhost:3943/bookAward/${this.props.params.id}`).then(res => res.data).then((data) => {
                if (data[0].AwardName != null){
                    for(var i=0;i<data.length;i++){
                        this.state.Award += data[i].AwardName + " " + data[i].Year;
                        if (i<data.length-1) this.state.Award += ', ';
                    }
                }
                    
                document.getElementById('Award').innerHTML = 'Award: '+this.state.Award;
            })
        })
    }
    linkToAuthor() {
        browserHistory.push(`/${this.props.params.user}/author/${this.state.AuthorID}`);
    }
    borrowBook() {
        axios.post('http://localhost:3943/borrowBook',{
            user: this.props.params.user,
            bookID: this.state.ID
        }).then(res => res.data).then((data) => {

        })
    }

    render() {
        return (
            <div>
                <div id="ID">
                    Loading
                </div>
                <div id="BookName">
                    Loading
                </div>
                <div id="Genre">
                    Loading
                </div>
                <button id = "AuthorName" onClick={(e) => this.linkToAuthor(e)}>Loading</button>
                <div id="PageCount">
                    Loading
                </div>
                <div id="FirstPublished">
                    Loading
                </div>
                <div id="Award">
                    Loading
                </div>
                <button onClick={(e) => this.borrowBook(e)}>Borrow</button>
                <div>{"User : " + this.props.params.user}</div>
                <img src={require(`./bookimages/${this.props.params.id}.jpg`)}/>
            </div>
        )
    }
}

export default Book