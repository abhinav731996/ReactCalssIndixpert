import { createBrowserRouter } from "react-router-dom";
import RBLayout from "../layouts/RBLayout";
import RBHome from "../pages/react-bootstrap/RBHome";
import RBBadges from "../pages/react-bootstrap/RBBadges";

export const routes = createBrowserRouter(
    [
        {
            element:<RBLayout/>,
            children:[
                {path:"/", element:<RBHome/>},
                {path:"/rb-badges", element:<RBBadges/>},

            ]
        },
        
    ]
)