// stardenbordenhardenbath
import LandingPage from "../components/landing/landingPage";
import NotFound from "../components/notFound";
import Journals from "../components/journals";
import EntryInput from "../components/entryInput";

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
		path: "/journals/:j_id/:e_id",
		component: EntryInput,
		requireAuth: true,
	},
];
