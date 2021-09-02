import React from "react";
import { Button, Form, Col, InputGroup } from "react-bootstrap";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

// const { Formik } = formik;

const schema = yup.object().shape({
	meterialID: yup.string().required(),
	name: yup.string().required(),
	quantity: yup.number().required(),
	mesurementType: yup.string().required(),
	rate: yup.number().required(),
	totalPrice: yup.string(),
	telephone: yup.number(),
	// file: yup.mixed(),
});

export default function NewEmployee() {
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
			initialValues={{
				meterialID: "",
				name: "",
				quantity: "",
				mesurementType: "",
				maritalStatus: "",
				rate: null,
				totalPrice: "",
				employees: [{ employeeId: "", payment: "" }],

				telephone: null,
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
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Row>
						<Form.Group as={Col} md="2" controlId="validationFormikmeterialID">
							<Form.Label> Meterial ID </Form.Label>
							<Form.Control
								type="text"
								name="meterialID"
								placeholder="ex :- SPE0001"
								value={values.meterialID}
								onChange={handleChange}
								isValid={touched.meterialID && !errors.meterialID}
								isInvalid={!!errors.meterialID}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.meterialID}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="3" controlId="validationFormik102">
							<Form.Label>Meterial Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								placeholder="Nuwan Madushan"
								value={values.name}
								onChange={handleChange}
								isValid={touched.name && !errors.name}
								isInvalid={!!errors.name}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.name}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group
							as={Col}
							md="2"
							controlId="validationFormikMesurementType"
						>
							<Form.Label>MesurementType</Form.Label>
							<Form.Control
								as="select"
								className="mr-sm-2"
								id="inlineFormCustomSelect"
								custom
								name="mesurementType"
								value={values.mesurementType}
								onChange={handleChange}
								isValid={touched.mesurementType && !errors.mesurementType}
								isInvalid={!!errors.mesurementType}
							>
								<option value="0">Choose...</option>
								<option value="Kg">Kg</option>
								<option value="cube">cube</option>
								<option value="50Kg">50Kg</option>
								<option value="OneUnit">One Unit</option>
							</Form.Control>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.mesurementType}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="2" controlId="validationFormik101">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="number"
								name="telephone"
								value={values.telephone}
								onChange={handleChange}
								isValid={touched.telephone && !errors.telephone}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row className="my-3">
						<Form.Group as={Col} md="2" controlId="validationFormikquantity2">
							<Form.Label>Quantity</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="number"
									placeholder="ex : 5"
									aria-describedby="inputGroupPrepend"
									name="quantity"
									value={values.quantity}
									onChange={handleChange}
									isInvalid={!!errors.quantity}
									isValid={touched.quantity && !errors.quantity}
								/>
								<Form.Control.Feedback tooltip>
									Looks good!
								</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid" tooltip>
									{errors.quantity}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>

						<Form.Group as={Col} md="2" controlId="validationFormik103">
							<Form.Label>Rate</Form.Label>
							<Form.Control
								type="number"
								placeholder="rate"
								name="rate"
								value={values.rate || values.totalPrice / values.quantity}
								onChange={handleChange}
								isInvalid={!!errors.rate}
								isValid={touched.rate && !errors.rate}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.rate}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="3" controlId="validationFormik104">
							<Form.Label>Total Price</Form.Label>
							<Form.Control
								type="text"
								placeholder="totalPrice"
								name="totalPrice"
								value={values.totalPrice || values.quantity * values.rate}
								onChange={handleChange}
								isInvalid={!!errors.totalPrice}
								isValid={touched.totalPrice && !errors.totalPrice}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.totalPrice}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
					{/* Add Employee */}

					<Form.Row className="mt-5">
						<FieldArray
							name="employees"
							render={(arrayHelpers) => (
								<Form.Group as={Col} md="10">
									{values.employees && values.employees.length > 0 ? (
										values.employees.map((employee, index) => (
											<Form.Row key={index}>
												<Form.Group as={Col} md="3">
													<Form.Label> Employee ID</Form.Label>
													<Field
														className="form-control"
														name={`employees.${index}.employeeId`}
													/>
												</Form.Group>
												<Form.Group as={Col} md="3">
													<Form.Label> Payment</Form.Label>
													<Field
														className="form-control"
														name={`employees.${index}.payment`}
													/>
												</Form.Group>
												<Form.Group as={Col} md="1">
													<Form.Label> </Form.Label>
													<div className="mt-2 ">
														<Button
															className="btn-danger px-4"
															type="button"
															onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
														>
															-
														</Button>
													</div>
												</Form.Group>
												<Form.Group as={Col} md="1">
													<Form.Label> </Form.Label>
													<div className="mt-2 ">
														<Button
															className="btn-success px-4"
															type="button"
															onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
														>
															+
														</Button>
													</div>
												</Form.Group>
											</Form.Row>
										))
									) : (
										<Form.Group as={Col} md="3">
											<button
												className="btn btn-info"
												type="button"
												onClick={() => arrayHelpers.push("")}
											>
												{/* show this when user has removed all employees from the list */}
												Add a Employee
											</button>
										</Form.Group>
									)}
								</Form.Group>
							)}
						/>
					</Form.Row>
					{/* End of add employee */}
					<Form.Group as={Col} md="5" controlId="validationFormik104">
						<Button className="btn form-control" type="submit">
							Add Raw Meterial
						</Button>
					</Form.Group>
				</Form>
			)}
		</Formik>
	);
}
