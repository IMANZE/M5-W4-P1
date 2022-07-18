import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ search, setSearch }) => {
	const location = useLocation();

	console.log("LOCATION", location);

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			style={{
				background:
					"linear-gradient(179deg, rgb(138 0 243) 10%, rgb(85 67 233) 50%, rgb(174 103 229) 100%)",
			}}
		>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Brand href="#home">
			
			</Navbar.Brand>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link
						as={Link}
						to="/"
						className={location.pathname === "/" ? "active" : ""}
					>
						Home
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/about"
						className={location.pathname === "/about" ? "active" : ""}
					>
						About
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/Browse"
						className={location.pathname === "/Browse" ? "active" : ""}
					>
						Browse
					</Nav.Link>
				</Nav>

				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value.toLowerCase());
						}}
					/>

					<Button as={Link} to="/Login">
						Login
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
