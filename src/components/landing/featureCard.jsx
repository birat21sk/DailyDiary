import React from "react";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import AlarmOutlinedIcon from "@material-ui/icons/AlarmOutlined";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import PolicyOutlinedIcon from "@material-ui/icons/PolicyOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
	card: {
		width: "270px",
		height: "270px",
		position: "relative",
	},
	cardBtn: {
		position: "absolute",
		right: 0,
		bottom: 0,
		borderRadius: "4px 0 0 0",
		boxShadow: "none",
		textTransform: "capitalize",
	},
	cardPro: {
		position: "absolute",
		right: 0,
		top: 0,
		borderRadius: "0 0 0 4px",
		boxShadow: "none",
		textTransform: "capitalize",
	},
});

const FeatureCard = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid
				container
				className="feature__card space"
				spacing={6}
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<LockOutlinedIcon color="primary" className="card-icon" />
							<br />
							<Typography variant="h6" className="text-dark">
								100% Private
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Designed to focus on privacy, your entries are totally private
								by default!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<PhoneAndroidOutlinedIcon color="primary" className="card-icon" />
							<br />
							<Typography variant="h6" className="text-dark">
								Available Everywhere
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Enjoy Penzu on the move. Available for iOS and Android and
								totally free!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<AlarmOutlinedIcon color="primary" className="card-icon" />
							<br />
							<Typography variant="h6" className="text-dark">
								Never Forget to Write
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Custom email reminders help you make sure you never forget to
								write.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={6}
				justify="center"
				alignItems="center"
				style={{ flexGrow: 1 }}
			>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<Badge badgeContent={"PRO"} color="secondary">
								<WidgetsOutlinedIcon color="primary" className="card-icon" />
							</Badge>

							<br />
							<Typography variant="h6" className="text-dark">
								Fully Customizable Diary
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Make each journal your own with custom covers, backgrounds, and
								fonts.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="contained"
								color="secondary"
								className={classes.cardBtn}
								size="small"
							>
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<Badge badgeContent={"PRO"} color="secondary">
								<PolicyOutlinedIcon color="primary" className="card-icon" />
							</Badge>
							<br />
							<Typography variant="h6" className="text-dark">
								Smart Journal Search
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Quickly and easily search through your journals, entries, and
								tags.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="contained"
								color="secondary"
								className={classes.cardBtn}
								size="small"
							>
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardContent className="card-head">
							<Badge badgeContent={"PRO"} color="secondary">
								<SecurityOutlinedIcon color="primary" className="card-icon" />
							</Badge>
							<br />
							<Typography variant="h6" className="text-dark">
								High Security
							</Typography>
							<Typography paragraph align="center" className="text-gray">
								Further protect your diary with military-grade 256-bit AES
								encryption.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="contained"
								color="secondary"
								className={classes.cardBtn}
								size="small"
							>
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default FeatureCard;
