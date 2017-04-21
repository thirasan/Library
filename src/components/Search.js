import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import axios from 'axios'
import $ from 'jquery';
import styles from './Search.scss'

class Search extends Component{
  state = {
    data: []
  }
  componentWillMount() {
    axios.post('http://localhost:3943/', {
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
  
              row$.append($('<td/>').html(cellValue));
          }
          $("#excelDataTable").append(row$);
      }
    })
  }
  render() {
      return (
      <div>
        <table id="excelDataTable" className={styles['table']}>
        </table>
      </div>
      )
  }
}

export default Search