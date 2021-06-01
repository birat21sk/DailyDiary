import React from "react";

const SideBar = () => {
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={toggleDrawer}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.journalTitle}>
				<div className="flex-grow">{journal.title}</div>

				<IconButton className={classes.titleDropdown}>
					<ExpandMoreIcon />
				</IconButton>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="toggle drawer"
						onClick={handleCloseDrawer}
						edge="start"
					>
						<CloseIcon />
					</IconButton>
				</Hidden>
			</div>
			<div className="d-flex align-ic">
				<Search className={"d-flex w-100"} />
				<Button className={classes.setting}>
					<SettingsIcon />
				</Button>
			</div>
			<div className={classes.btnContainer}>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<AddIcon className={classes.iconBtn} />
					<span>Add Entry</span>
				</Button>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<AppsIcon className={classes.iconBtn} />
					View all entries
				</Button>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<StarRoundedIcon className={classes.iconBtn} />
					View starred entries
				</Button>
			</div>
			<JournalSidebarEntries
				entries={journal.entries}
				fallback={"This journal has no entries"}
			/>
		</Drawer>
	);
};

export default SideBar;
