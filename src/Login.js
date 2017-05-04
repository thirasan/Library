import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange800} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import style from './Login.scss';
import $ from 'JQuery';
import {browserHistory} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

const customDialog = {
  width: '25%',
  maxWidth: 'none',
};

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange800,
  },
});

class Login extends Component {
    componentWillMount() {
        injectTapEventPlugin();
    }
    constructor(props, context) {
        super(props, context);

        this.state = {
        open: false,
        };
    }

    state = {
        open: false,
        };

        handleLogin = () => {
            browserHistory.push(`/thirasan`);
        };

    render() {

        return (
            <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

            <div className={style['title']}>


            <h1>Welcome To Library</h1>

            
            <TextField
            hintText="Input ID Here"
            name="id"
            fullWidth={true}
            label="Input ID Here"/>
            <br/>
            <RaisedButton
            label="LOGIN"
            secondary={true}
            onTouchTap={this.handleLogin}
            fullWidth={true}
            />

            </div>

        </MuiThemeProvider>
        </div>
        );
    }
}

export default Login;