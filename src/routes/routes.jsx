// stardenbordenhardenbath
import LandingPage from "../components/landing/landingPage";
import NotFound from "../components/notFound";
import Journals from "../components/journals";
import EntryInput from "../components/entryInput";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import Loading from "../components/common/loading";

export const routes = [
	{
		path: "/",
		// component: LandingPage,
		component: (props) => <LandingPage {...props} />,
	},
	{
		path: "/login",
		// component: LoginForm,
		component: (props) => <LoginForm {...props} />,
	},
	{
		path: "/signup",
		// component: LoginForm,
		component: (props) => <RegisterForm {...props} />,
	},
	{
		path: "/not-found",
		// component: NotFound,
		component: (props) => <NotFound {...props} />,
	},
	{
		path: "/journals",
		// component: Journals,
		component: (props) => <Journals {...props} />,
		requireAuth: true,
	},
	{
		path: "/journals/:j_id/:e_id",
		// component: EntryInput,
		component: (props) => <EntryInput {...props} />,
		requireAuth: true,
	},
];
