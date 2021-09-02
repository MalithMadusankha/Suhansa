import React from "react";
import "../App.css";
import Logoh from "./Logoh.png";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Navbar,
	NavDropdown,
	Nav,
	FormControl,
	Tab,
	Col,
	Row,
} from "react-bootstrap";
import Employee from "./employee/Employee";
import RawMeterial from "./rawMeterial/RawMeterial";

export default function Menu() {
	return (
		<div>
			<div className="">
				<div className="row">
					<div className="col col-3 ">
						<Link>
							<img className="center" src={Logoh} alt="logo" width="120px" />
						</Link>
					</div>
					<div className="col">
						<Navbar bg="dark" variant="dark" expand="lg">
							<Navbar.Brand href="#">Scorler Nav</Navbar.Brand>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<Navbar.Collapse id="navbarScroll">
								<Nav
									className="mr-auto my-2 my-lg-0"
									style={{ maxHeight: "100px" }}
									navbarScroll
								>
									<Nav.Link href="#action1">Home</Nav.Link>
									<Nav.Link href="#action2">Link</Nav.Link>
									<NavDropdown title="Link" id="navbarScrollingDropdown">
										<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
										<NavDropdown.Item href="#action4">
											Another action
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action5">
											Something else here
										</NavDropdown.Item>
									</NavDropdown>
									<Nav.Link href="#" disabled>
										Link
									</Nav.Link>
								</Nav>
								<Form className="d-flex">
									<FormControl
										type="search"
										placeholder="Search"
										className="mr-2"
										aria-label="Search"
									/>
									<Button variant="outline-success">Search</Button>
								</Form>
							</Navbar.Collapse>
						</Navbar>
					</div>
				</div>
				<div className="row mt-1">
					<div className="col">
						<Tab.Container
							id="left-tabs-example"
							defaultActiveKey="first"
							expand="lg"
						>
							<Row>
								<Col className="ml-1 col-3">
									<Nav variant="pills" className="flex-column">
										<Nav.Item>
											<Nav.Link eventKey="first">Employee</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second">Raw Material</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="third">Other Material</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="fourth">Stock Blance</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col>
									<Tab.Content>
										<Tab.Pane eventKey="first">
											<h1>Add New Employee </h1>
											<Employee />
										</Tab.Pane>
										<Tab.Pane eventKey="second">
											<RawMeterial />
										</Tab.Pane>
										<Tab.Pane eventKey="third">
											<h1>Content Other Material </h1>
										</Tab.Pane>
										<Tab.Pane eventKey="fourth">
											<h1>Stock Blance </h1>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</div>
				</div>
			</div>
		</div>
	);
}
