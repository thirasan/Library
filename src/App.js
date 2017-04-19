import './App.css';
import React, { Component, PropTypes } from 'react';
import shallowEqualArrays from 'shallow-equal/arrays';
import Autowhatever from 'react-autowhatever';
import { defaultTheme, mapToAutowhateverTheme } from './theme';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import axios from 'axios'

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Software',
    year: 2003
  },
  {
    name: 'However',
    year: 2003
  },
  {
    name: 'Libraly',
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => suggestion.name;

const renderSuggestionsContainer = ({ containerProps, children, query }) => (
  <div {...containerProps}>
    {children}
    {
      <div className="footer">
        Press Enter to search <strong>{query}</strong>
      </div>
    }
  </div>
);
let Search = React.createClass({
  handleClick() {
    const ele = document.getElementById("abc")
    axios.post('http://localhost:3943/', {
    firstName: this.props.value,
    lastName: 'Flintstone'
    }).then(res => res.data).then((data) => {
        ele.innerHTML = data[0].Surename;
    }),
    axios.get('http://localhost:3943/');
  },
  render: function() {
      return (
          <button onClick={(e) => this.handleClick(e)}>
              Search
          </button>
      );
  }
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Fill in the blank",
      value,
      onChange: this.onChange,
      
    };

    return (
      <header>
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderSuggestionsContainer={renderSuggestionsContainer}/> 
      <Search value={this.state.value}/>
      <div id = "abc"> </div>
      </header>
    );


  }
}

ReactDOM.render(<App />, document.getElementById('app'));

