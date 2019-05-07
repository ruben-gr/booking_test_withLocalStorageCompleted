// import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import @material-ui/core
// import @material-ui/icons

// export default class Login extends Component {
//     state={}

//     render() {
//         return (
//             <div> Login page
// <Link to="/booking"> 
//     <button> Booking</button> 
// </Link> 
//             </div>
//         );
//     }
// } 

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});



function SignIn(props) {
  const { classes } = props;
  let loginInput;
  let passInput;
  let loginInputted = '';
  let passInputted = '';

  function checkLoginDetails(loginInputted, passInputted) {
    const realLogin = 'Mike@nowhere.net'
    const realPass = '1111'
    if (loginInputted === realLogin && passInputted === realPass) {
      console.log('the login details are right')
      loginInput.value = ''
      passInput.value = ''
      props.history.push('/booking')
    } else {
      console.log('the login details are WRONG')
    }
  }


  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={
              (e) => {
                loginInput = e.target
                loginInputted = e.target.value;
              }
            } />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={
              (e) => {
                passInput = e.target
                passInputted = e.target.value;
              }
            } />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              e.preventDefault()
              console.log('login button clicked')
              checkLoginDetails(loginInputted, passInputted)

            }}
          >
            Sign in
          </Button>
        </form>
        <Link to="/">
          <p style={{ marginTop: "1.5em", color: 'darkblue', textDecoration: 'underline' }}>Return to Home page</p>
        </Link>
      </Paper>
    </main>
  );

}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);


// class SignIn extends Component {
//   state = {
//     main: this.props.main,
//     paper: this.props.paper,
//     avatar: this.props.avatar,
//     form: this.props.form,
//     submit: this.props.submit,
//   }

//   render() {
//     return (
//       <main className={this.state.main}>
//         <CssBaseline />
//         <Paper className={this.state.paper}>
//           <Avatar className={this.state.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//         </Typography>
//           <form className={this.state.form}>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="email">Email Address</InputLabel>
//               <Input id="email" name="email" autoComplete="email" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <Input name="password" type="password" id="password" autoComplete="current-password" />
//             </FormControl>
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={this.state.submit}
//             >
//               Sign in
//           </Button>
//           </form>
//           <Link to="/">
//             <p style={{ marginTop: "1.5em", color: 'darkblue', textDecoration: 'underline' }}>Return to Home page</p>
//           </Link>
//         </Paper>

//         <Link to="/booking">
//           <button> Booking</button>
//         </Link>
//       </main>
//     );
//   }
// }