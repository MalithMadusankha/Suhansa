import React from 'react';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


// const { Formik } = formik;

const schema = yup.object().shape({
  empID: yup.string().required(),
  type: yup.string().required(),
  preferedName: yup.string().required(),
  nicNo: yup.string().required(),
  fullName: yup.string().required(),
  gender: yup.string().required().oneOf(['Male','Female'], 'You must Select Your Gender'),
  maritalStatus: yup.string(),
  birthday: yup.date().required(),
  address: yup.string().required(),
  telephone: yup.number(),
  mobile: yup.number(),
  email: yup.string().email(),
  status: yup.string(),
  file: yup.mixed(),
  startDate: yup.date().required(),
  designation: yup.string(),
});

export default function NewEmployee() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={
        (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      }
      initialValues={{
        empID: '',
        type: '',
        preferedName: '',
        nicNo: '',
        fullName: '',
        gender: '',
        maritalStatus: '',
        birthday: null,
        address: '',
        telephone: null,
        mobile: null,
        email: '',
        status: '',
        file: null,
        startDate: '',
        designation:'',
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
            <Form.Group as={Col} md="2" controlId="validationFormikempID">
              <Form.Label> Employee ID </Form.Label>
              <Form.Control 
                type="text"
                name="empID"
                placeholder="ex :- SPE0001"
                value={values.empID}
                onChange={handleChange}
                isValid={touched.empID && !errors.empID}
                isInvalid={!!errors.empID}
                />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.empID}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormikSelect">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="type"
                value={values.type}
                onChange={handleChange}
                isValid={touched.type && !errors.type}
                isInvalid={!!errors.type}
              >
                <option value="0">Choose...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Probation">Probation</option>
                <option value="Shiftworkers">Shiftworkers</option>
              </Form.Control>
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.type}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik102">
              <Form.Label>Prefered name</Form.Label>
              <Form.Control
                type="text"
                name="preferedName"
                placeholder="Nuwan Madushan"
                value={values.preferedName}
                onChange={handleChange}
                isValid={touched.preferedName && !errors.preferedName}
                isInvalid={!!errors.preferedName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.preferedName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationFormikNicNo2">
              <Form.Label>NIC No</Form.Label>
              <InputGroup hasValidation >
                <InputGroup.Prepend >
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="NIC No"
                  aria-describedby="inputGroupPrepend"
                  name="nicNo"
                  value={values.nicNo}
                  onChange={handleChange}
                  isInvalid={!!errors.nicNo}
                  isValid={touched.nicNo && !errors.nicNo}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.nicNo}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>


          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik101">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Arachchlage Nuwan Madushan Gamage"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.fullName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationFormikGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="gender"
                value={values.gender}
                onChange={handleChange}
                isValid={touched.gender && !errors.gender}
                isInvalid={!!errors.gender}
              >
                <option value="0">Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormikSelect">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="maritalStatus"
                value={values.maritalStatus}
                onChange={handleChange}
                isValid={touched.maritalStatus && !errors.maritalStatus}
                isInvalid={!!errors.maritalStatus}
              >
                <option value="0">Choose...</option>
                <option value="single">single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Registered ">Registered </option>
                <option value="Partnership">Partnership</option>
              </Form.Control>
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.maritalStatus}
              </Form.Control.Feedback>
            </Form.Group>

          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik103">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                placeholder="birthday"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
                isInvalid={!!errors.birthday}
                isValid={touched.birthday && !errors.birthday}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.birthday}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik104">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                isValid={touched.address && !errors.address}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="2" controlId="validationFormik101">
              <Form.Label>Telephone No</Form.Label>
              <Form.Control
                type="number"
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
                isValid={touched.telephone && !errors.telephone}
                // isInvalid={!!errors.telephone}
              />
              {/* <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik102">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                isValid={touched.mobile && !errors.mobile}
                isInvalid={!!errors.mobile}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.mobile}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormiknicNo2">
              <Form.Label>Email Address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik102">
              <Form.Label> Working Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={values.status}
                onChange={handleChange}
                isValid={touched.status && !errors.status}
                isInvalid={!!errors.status}
              >
                <option value="0">Choose..</option>
                <option value="Current">Current</option>
                <option value="Pending ">Pending </option>
                <option value="Partnership">Vacation</option>
              </Form.Control>
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.preferedName}
                </Form.Control.Feedback>
            </Form.Group>

          </Form.Row>
          
          <Form.Row>
            <Form.Group as={Col} md="3">
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              onChange={handleChange}
              isInvalid={!!errors.file}
              feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationFormik103">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="startDate"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                isInvalid={!!errors.startDate}
                isValid={touched.startDate && !errors.startDate}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.startDate}
              </Form.Control.Feedback>
            </Form.Group> 

            <Form.Group as={Col} md="3" controlId="validationFormik103">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="designation"
                name="designation"
                value={values.designation}
                onChange={handleChange}
                isInvalid={!!errors.designation}
                isValid={touched.designation && !errors.designation}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.designation}
              </Form.Control.Feedback>
            </Form.Group>          
          
            </Form.Row>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
