import About from "../views/About";
import Projects from "../views/Projects";
import Notes from "../views/Notes";
import Memorial from "../views/Memorial";
import ProtectedRoute from "../views/JWT";

export const routes = [
    {
        path: "/",
        exact: true,
        breadcrumb: "About",
        component: About
    },
    {
        path: "/projects",
        exact: true,
        breadcrumb: "Projects",
        component: Projects
    },
    {
        path: "/notes",
        exact: true,
        breadcrumb: "Notes",
        component: Notes
    },
    {
        path: "/memorial",
        exact: true,
        breadcrumb: "Memorial",
        component: Memorial
    },
    {
        path: "/protected",
        exact: true,
        breadcrumb: "Protected",
        component: ProtectedRoute
    }
];