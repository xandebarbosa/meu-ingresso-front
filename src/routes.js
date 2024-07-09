// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Events from "views/Dashboard/Events";
import EventForm from "views/Dashboard/Events/Form";
import Tickets from "views/Dashboard/Tickets";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Eventos",
    icon: <HomeIcon color="inherit" />,
    component: Events,
    layout: "/admin",
  },
  {
    path: "/events/form",
    name: "Novo Evento",
    icon: <HomeIcon color="inherit" />,
    component: EventForm,
    layout: "/admin",
    redirect: true,
  },
  {
    path: "/events/form/:id",
    name: "Editar Evento",
    icon: <HomeIcon color="inherit" />,
    component: EventForm,
    layout: "/admin",
    redirect: true,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/tickets",
    name: "Ingressos",
    icon: <CreditIcon color="inherit" />,
    component: Tickets,
    layout: "/admin",
  },

  {
    name: "ACCOUNT PAGES",
    category: "account",

    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
