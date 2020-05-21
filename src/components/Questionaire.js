import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
 root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }, 
 container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  const [answers, setAnswers] = useState({});
  const [isScheduling, setIsScheduling] = useState(false)

  const handleChange = (event) => {
    setAnswers({...answers, [event.target.name]: event.target.value});
    console.log(answers)
  };

  const options = ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
  const questions = [
      "Feeling nervous, anxious or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritated",
      "Feeling afraid as if something awful might happen",
    //   "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?"
  ]

  return (
    <Container maxWidth="lg">
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="first-name" label="First Name"/>
        <TextField required id="last-name" label="Last Name"/>
        <TextField required id="email" label="Email"/>
        <TextField
          id="phone-number"
          label="Phone Number"
          type="number"
        //   pattern="/^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}

        <TextField
            id="date"
            label="Birthday"
            type="date"
            // defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <Container maxWidth="sm">
        {questions.map(question => {
            const lastWord = question.split(" ").slice(-1)[0].replace("?", "")
            console.log(lastWord in answers)
            return (
                <FormControl key={lastWord} required className={classes.formControl} fullWidth={true}>
                    <InputLabel id={lastWord}>{question}</InputLabel>
                    <Select
                    labelId={lastWord}
                    id={lastWord}
                    name={lastWord}
                    value={answers[lastWord]}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                    autoWidth
                    >
                    {options.map(option => {
                        return <MenuItem key={option + {lastWord}} value={option}>{option}</MenuItem>
                    })}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            )
        })}
        </Container>

{/* <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17110679" width="100%" height="800" frameBorder="0"></iframe>
<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> */}

      </div>
    </form>
    </Container>
  );
}
