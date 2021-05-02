import {Formik, Form, Field} from "formik";
import {Switch, TextField} from "formik-material-ui";
import {Box, Button, FormControlLabel, LinearProgress} from "@material-ui/core";

export const App = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({submitForm, isSubmitting}) => (
                <Form>
                    <Box margin={1}>
                        <Field
                            component={TextField}
                            name={"email"}
                            type={"email"}
                            label={"Email"}
                            helperText={"email"}
                        />
                    </Box>
                    <Box margin={1}>
                        <Field
                            component={TextField}
                            type="password"
                            label="Password"
                            name="password"
                        />
                    </Box>
                    <Box margin={1}>
                        <FormControlLabel
                            control={
                                <Field component={Switch} type="checkbox" name="rememberMe" />
                            }
                            label="Remember Me"
                        />
                    </Box>
                    {isSubmitting && <LinearProgress />}
                    <Box margin={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};