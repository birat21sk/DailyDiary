// stardenbordenhardenbath
import LandingPage from "../components/landing/landingPage";
import NotFound from "../components/notFound";
import Journals from "../components/journals";
import AddEntry from "../components/addEntry";

export const routes = [
	{
		path: "/",
		component: LandingPage,
	},
	{
		path: "/not-found",
		component: NotFound,
	},
	{
		path: "/journals",
		component: Journals,
		requireAuth: true,
	},
	{
		path: "/journals/:id/new",
		component: AddEntry,
		requireAuth: true,
	},
];
