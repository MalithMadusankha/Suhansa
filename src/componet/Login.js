import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Logoh from "./Logoh.png";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});
export default function Login() {
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
					window.location = "/home";
				}, 400);
			}}
			initialValues={{
				email: "",
				password: "",
			}}
		>
			{({
				handleSubmit,
				handleChange,
				handleBlur,
				values,
				touched,
				isValid,
				errors,
			}) => (
				<div className="App-header">
					<div className="row">
						<div className="col col-4"></div>
						<div className="col col">
							<img
								className="w-50 border border-primary rounded-lg"
								src={Logoh}
								alt="logo"
							/>
						</div>
					</div>

					<Form noValidate onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								value={values.email}
								onChange={handleChange}
								isValid={touched.email && !errors.email}
								isInvalid={!!errors.email}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.email}
							</Form.Control.Feedback>
							<Form.Text className="text-muted h6">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								value={values.password}
								onChange={handleChange}
								isValid={touched.password && !errors.password}
								isInvalid={!!errors.password}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.password}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="m-3 h6" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary px-5" type="submit">
							Submit
						</Button>
					</Form>
					<div className="">
						<Link className="h6" href="#">
							New User here? Sign up
						</Link>
						<br />
						<Link className="h6" href="#">
							Forgot password?
						</Link>
					</div>
				</div>
			)}
		</Formik>
	);
}
