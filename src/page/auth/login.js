import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    TextField,
    Container,
    Button
} from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'

import * as auth from "@src/firebase/auth"
// import { useHistory } from 'react-router-dom'

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

const useStyles = makeStyles((theme) => ({
    formControl:{
        margin:'20vh 0px'
    },
    TextField:{
        margin:'10px 0px'
    }
}))

export default function ButtonAppBar() {
    const classes = useStyles()
    // let history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(data) => {
           auth.login(data)
        },
    })
    useEffect(()=>{
        // console.log(auth.currentUser)
        
    })
    return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Login Page</Typography>
            </Toolbar>
        </AppBar>
        <Container maxWidth={'sm'} >
            <form className={classes.formControl} onSubmit={formik.handleSubmit}>
                <TextField  className={classes.TextField}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    size={'small'}
                />
                <TextField className={classes.TextField}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    variant="outlined"
                    size={'small'}
                />
                <Button color="primary" size={'large'} variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    </div>
    )
}