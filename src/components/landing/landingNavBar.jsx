import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Hidden, ClickAwayListener } from "@material-ui/core";
import logo from "../../image/logo_svg.svg";

const LandingNavBar = ({ user }) => {
	const [navBarVisible, setNavBarVisible] = useState(false);
	const [navToggle, setNavToggle] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});
	const handleScroll = () => {
		if (window.pageYOffset > 500) setNavBarVisible(true);
		else setNavBarVisible(false);
	};

	const getClassName = () => {
		let classes =
			"landing__navbar navbar-expand-lg align-ic justify-cc ftco_navbar ftco-navbar-light";
		return navBarVisible ? classes + " active" : classes;
	};

	const getNavToggleClassName = () => {
		let classes = "collapse navbar-collapse";
		return navToggle ? classes + " show" : classes;
	};

	const handleClickAway = () => {
		setNavToggle(false);
	};

	return (
		<nav className={getClassName()} id="ftco-navbar" style={{ height: "50px" }}>
			<div className="navbar-container d-flex justify-content-between">
				<div className="d-flex align-ic">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="Daily Diary Logo" height="30px" />
						Daily Diary
					</Link>
					<Hidden xsDown>
						<span className="text-gray" style={{ marginTop: "9px" }}>
							Your Private Online Journal
						</span>
					</Hidden>
				</div>
				<ClickAwayListener onClickAway={handleClickAway}>
					<Button
						className="navbar-toggler"
						disableElevation
						disableRipple
						onClick={() => setNavToggle(!navToggle)}
					>
						<i class="fa fa-bars nav-toggle-icon" aria-hidden="true"></i>
					</Button>
				</ClickAwayListener>
				<div className={getNavToggleClassName()} id="ftco-nav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="#" className="nav-link">
								Daily Diary PRO
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#" className="nav-link">
								Log in
							</NavLink>
						</li>
						<li className="nav-item">
							<Button
								variant="contained"
								color="primary"
								className="btn"
								disableElevation
								disableRipple
							>
								Create Your Journal
							</Button>
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
