import { createBrowserRouter } from "react-router-dom";
import RBLayout from "../layouts/RBLayout";
import RBHome from "../pages/react-bootstrap/RBHome";
import RBBadges from "../pages/react-bootstrap/RBBadges";
import RBBreadcrumb from "../pages/react-bootstrap/RBBreadcrumb";
import RBButtons from "../pages/react-bootstrap/RBButtons";
import RBButtonGroup from "../pages/react-bootstrap/RBButtonGroup";
import RBCards from "../pages/react-bootstrap/RBCards";
import RBImages from "../pages/react-bootstrap/RBImages";
import RBListGroup from "../pages/react-bootstrap/RBListGroup";
import RBFigure from "../pages/react-bootstrap/RBFigure";

export const routes = createBrowserRouter(
    [
        {
            element:<RBLayout/>,
            children:[
                {path:"/", element:<RBHome/>},
                {path:"/rb-badges", element:<RBBadges/>},
                {path:"/rb-breadcrumb", element:<RBBreadcrumb/>},
                {path:"/rb-buttons", element:<RBButtons/>},
                {path:"/rb-button-group", element:<RBButtonGroup/>},
                {path:"/rb-card", element:<RBCards/>},
                {path:"/rb-images", element:<RBImages/>},
                {path:"/rb-listgroup", element:<RBListGroup/>},
                {path:"/rb-figure", element:<RBFigure/>},

            ]
        },
        
    ]
)