import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange800 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import style from './Login.scss';
import { browserHistory } from 'react-router';
import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';

function formatName(value) {
  return value;
}

const customDialog = {
  width: '40%',
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
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    open: false,
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleClose = () => {
    this.setState({ open: false });
    let log = "User is not found";
    axios.get('http://localhost:3943/member').then(res => res.data).then((data) => {
            for(let i = 0;i<data.length;i++){
              if(this.state.value == data[i].Member_ID){
                  browserHistory.push(`/` + this.state.value);
                  log = "Login as " + this.state.value
              }
            }
            alert(log);
    })
  };

  handleLogin = () => {
    this.setState({ open: true });
  };

  render() {

    const actions = [
      <FlatButton
        label="Okay"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];



    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          <div className={style['title']}>


            <h1>Welcome To Library</h1>


            <TextField
              hintText="Input ID Here"
              name="id"
              fullWidth={true}
              value={this.state.value}
              onChange={this.handleChange} />
            <br />
            <RaisedButton
              label="LOGIN"
              secondary={true}
              onTouchTap={this.handleLogin}
              fullWidth={true}
            />
            <Dialog
              title="Welcome"
              actions={actions}
              modal={false}
              contentStyle={customDialog}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <h1>
                Hello, {formatName(this.state.value)}!
              </h1>
            </Dialog>

          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;