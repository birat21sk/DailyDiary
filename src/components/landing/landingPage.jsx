import React, { Fragment } from "react"; 
import LandingNavBar from "./landingNavBar";
import LandingBody from "./landingBody";
import LandingFooter from "./landingFooter";

const LandingPage = () => {
	return (
		<Fragment>
			<LandingNavBar />
			<LandingBody />
			<LandingFooter />
		</Fragment>
	);
};

export default LandingPage;
