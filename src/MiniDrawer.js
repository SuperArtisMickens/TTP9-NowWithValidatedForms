import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import SimpleSnackbar from './components/Snackbar';
import SimpleDialogDemo from './components/Login';
import Button from '@material-ui/core/Button';
import FriendCont from './components/FriendCont';
import Submissions from './components/Submissions';
import ContactUs from './components/ContactUs';
import { Switch, Route, Link, } from "react-router-dom";
import Info from './Info';
import Marathon from './Marathon';

// sidebar icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateIcon from '@material-ui/icons/Create';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (

		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Grid container>
						<Grid item xs={11}>
							<Typography variant="h6" noWrap>
								HeYau DeKredit
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<SimpleDialogDemo />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />

				{/* These are the links to the pages that connect them to components */}
				<List>
					<ListItem>
						{/* This link leads to the home page */}
						<Link to="/">
							<Button>
								<HomeIcon />Home
							</Button>
						</Link>
					</ListItem>
					<Divider />
					<ListItem>
						{/* This link leads to the AboutUs component */}
						<Link to="/Info">
							<Button>
								<InfoIcon />About Us
							</Button>
						</Link>
					</ListItem>
					<Divider />
					<ListItem>
						{/* This link leads to the Day Challenge component */}
						<Link to="/Marathon">
							<Button>
								<EventAvailableIcon />52 Week Marathon
							</Button>
						</Link>
					</ListItem>
					<Divider />
					<ListItem>
						{/* This link leads to the Friend Cont */}
						<Link to="/FriendCont">
							<Button>
								<PersonAddIcon />Refer A Friend!
							</Button>
						</Link>
					</ListItem>
					<Divider />
					<ListItem>
						{/*This link leads to Submissions*/}
						<Link to="/Submissions">
							<Button>
								<CreateIcon />Submissions
							</Button>
						</Link>
					</ListItem>
					<Divider />
					<ListItem>
						{/* This link leads to the Contact Us component */}
						<Link to="/ContactUs">
							<Button>
								<MailIcon />Contact Us
							</Button>
						</Link>
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={3}>
					<Grid item xs={12}>
						{/* Switch to your pages here! */}
						<Switch>
							{/* This switches to the About page with the AboutUs component */}
							<Route path="/Info">
								<Info />
							</Route>

							{/* This switches to the Marathon page with the Day Challenge component */}
							<Route path="/Marathon">
								<Marathon />
							</Route>

							{/* This switches to Friend Referral page*/}
							<Route path="/FriendCont">
								<FriendCont />
							</Route>

							{/* This switches to Submissions page*/}
							<Route path="/Submissions">
								<Submissions />
							</Route>

							{/* This switches to Contact Us page*/}
							<Route path="/ContactUs">
								<ContactUs />
							</Route>

							{/* This switches to Home page*/}
							<Route path="/">
								<img src="https://i.imgur.com/zHOv7ih.jpeg" alt="rich cat" height="800"></img>
								<SimpleSnackbar />
							</Route>

						</Switch>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}