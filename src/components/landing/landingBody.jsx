import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import FeatureCard from "./featureCard";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles({
	media: {
		width: "100%",
	},
	nav: {
		display: "flex",
		justifyContent: "flex-end",
		padding: 10,
	},
	navlink: {
		padding: 10,
		textDecoration: "none",
		color: "#555",
		fontFamily: "Lato",
		fontWeight: 600,
		fontSize: "1em",
	},
	link: {
		textDecoration: "none",
	},
	banner: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
});

const LandingBody = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className="landing__banner">
				<div className="landing__login text-gray">
					<NavLink to="/login" className={classes.navlink}>
						Log in
					</NavLink>
					<NavLink to="/signup" className={classes.navlink}>
						Sign up
					</NavLink>
				</div>
				<Container>
					<Grid container className={classes.banner}>
						<Box
							fontFamily="Lato"
							fontWeight="900"
							textAlign="center"
							className="text-dark banner_title"
						>
							<Typography variant="inherit">Write your day</Typography>
							<Typewriter
								options={{
									strings: ["Anywhere", "Anytime"],
									autoStart: true,
									loop: true,
									wrapperClassName: "text-secondary",
								}}
								className="banner_title"
							/>
							<Typography variant="inherit">Everything in your Palm</Typography>
						</Box>
						<br />
						<Box fontFamily="Lato" fontSize={"1rem"} className="text-gray">
							You're private, 100% customizable online journal.
						</Box>
						<br />
						<Link to="/signup" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								className="btn"
								size="large"
								href="/signup"
							>
								Start Your Free Journal Now!
							</Button>
						</Link>
					</Grid>
				</Container>
			</Box>
			<Container maxWidth="md" className="landing__feature">
				<Grid className="feature__top space">
					<Typography variant={"h4"} className="lato text-dark">
						What are you writing for?
					</Typography>
					<Box fontSize={16} className="lato text-gray">
						<p>
							Whether you’re looking for a tool to record your daily emotions
							and activities in a reflective journal, keep track of milestones
							in a food diary or pregnancy journal, or even record your dreams
							in a dream journal, Penzu has you covered.
						</p>
						<p>
							Daily Diary gives you all the tools you need to focus on the ideas
							you want to preserve, rather than the process of writing itself.
						</p>
						<Link to="/signup" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								className="btn"
								size="large"
							>
								Get Started
							</Button>
						</Link>
					</Box>
				</Grid>
			</Container>
			<Container maxWidth="md">
				<Grid container justify="center" alignItems="center" className="space">
					<Grid item sm={12} md={8}>
						<Typography variant={"h4"}>Privacy is our #1 Concern</Typography>
						<br />
						<Typography paragraph className="text-gray">
							Even when carefully kept, paper journals can be read by anyone who
							happens upon them. Penzu keeps your journals safe with double
							password protection and military strength encryption so you can
							rest easy knowing that your entries are secure in the Penzu Vault.
						</Typography>
						<Link to="/signup" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								className="btn"
							>
								Get Started
							</Button>
						</Link>
					</Grid>
					<Grid item sm={12} md={4}>
						Image here
					</Grid>
				</Grid>
				<Grid
					container
					justify="center"
					alignItems="center"
					className="divide-margin"
				>
					<Grid item sm={12} md={5}>
						Image here
					</Grid>
					<Grid item sm={12} md={7}>
						<Typography variant={"h4"}>Write from Anywhere</Typography>
						<br />
						<Typography paragraph className="text-gray">
							Take your journals wherever you go with the Penzu mobile apps for
							iPhone, iPad, and Android phones and tablets.
						</Typography>
						<Link to="/signup" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								className="btn"
							>
								Get Started
							</Button>
						</Link>
					</Grid>
				</Grid>
				<FeatureCard />
			</Container>
		</React.Fragment>
	);
};

export default LandingBody;
