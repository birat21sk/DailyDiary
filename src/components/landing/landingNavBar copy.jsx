import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const LandingNavBar = ({ user }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});
	const handleScroll = () => {
		if (window.pageYOffset > 500) setVisible(true);
		else setVisible(false);
	};

	const getClassName = () => {
		let classes =
			"landing__navbar navbar-expand-lg sticky-top ftco_navbar ftco-navbar-light";
		return visible ? classes + " active" : classes;
	};

	return (
		<nav className={getClassName()} id="ftco-navbar" style={{ height: "50px" }}>
			<div className="container d-flex align-items-center">
				<Link className="navbar-brand" to="/">
					Daily Diary
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#ftco-nav"
					aria-controls="ftco-nav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="fa fa-bars"></span> Menu
				</button>
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto mr-md-3">
						<li className="nav-item">
							<NavLink to="#" className="nav-link">
								Sign up
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to="#" className="nav-link">
								Sign in
							</NavLink>
						</li>
						{user && 0 && (
							<li className="dropdown nav-item d-md-flex align-items-center">
								<NavLink
									to="#"
									className="dropdown-toggle nav-link d-flex align-items-center justify-content-center icon-cart p-0"
									id="dropdown04"
									data-toggle="dropdown"
									aria-expanded="false"
								>
									<i className="fa fa-shopping-cart"></i>
									<b className="caret"></b>
								</NavLink>
								<div
									className="dropdown-menu dropdown-menu-right"
									aria-labelledby="dropdown04"
								>
									<NavLink to="#" className="dropdown-item">
										Action
									</NavLink>
									<div className="dropdown-divider"></div>
									<NavLink to="#" className="dropdown-item">
										Separated link
									</NavLink>
									<div className="dropdown-divider"></div>
									<NavLink to="#" className="dropdown-item">
										One more separated link
									</NavLink>
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default LandingNavBar;
