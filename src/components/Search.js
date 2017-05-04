import React, { Component } from 'react';
import styles from './Search.scss'
import axios from 'axios'
import $ from 'JQuery';

export default class Search extends Component{
    createTable (){

    document.getElementById('body').innerHTML = '';
    document.getElementById('head').innerHTML = '';

    axios.get('http://localhost:3943/app', {
        firstName: this.props.value,
        lastName: 'Flintstone'
    }).then(res => res.data).then((data) => {
        var columns = [];
        var headerTr$ = $('<tr/>');

        for (var i = 0 ; i < data.length ; i++) {
            var rowHash = data[i];
            for (var key in rowHash) {
                if ($.inArray(key, columns) == -1){
                    columns.push(key);
                    headerTr$.append($('<th/>').html(key));
                }
            }
        }
        $("#excelDataTable").append(headerTr$);

        for (var i = 0 ; i < data.length ; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
                var cellValue = data[i][columns[colIndex]];

                if (cellValue == null) { cellValue = ""; }
                
                if (colIndex != 0)
                    row$.append($('<td/>').html(cellValue));
                else{
                    const buc = cellValue;
                    const location = `/${this.props.user}/book/${buc}`;
                    row$.append(`<td><a href=${location}>${buc}</a></td>`);
                }
            }
            $("#excelDataTable").append(row$);
        }
    })
    }
    render() {
        return (
        <div>
        <button onClick={(e) => this.createTable(e)}>Search</button>
        <table id="excelDataTable" className={styles['table']}>
            <thead id="head">
            </thead>
            <tbody id="body">
            </tbody>
        </table>
        </div>
        )
    }
}