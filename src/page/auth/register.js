import React from 'react'
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

import * as auth from "../../firebase/auth"
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
    title: {
        textAlign:'center',
        width:'100%'
    },
    formControl:{
        margin:'20vh 0px'
    },
    TextField:{
        margin:'10px 0px'
    }
}))

const RegisterPage = () => {
    const classes = useStyles()
    // const history = useHistory()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(data) => {
            auth.register(data)
        },
      })

    return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Register Page</Typography>
            </Toolbar>
        </AppBar>
        <Container>
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
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    </div>
    )
}
export default RegisterPage