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
import RBPagination from "../pages/react-bootstrap/RBPagination";
import RBPrgressBars from "../pages/react-bootstrap/RBPrgressBars";
import RBTables from "../pages/react-bootstrap/RBTables";
import RBSpinners from "../pages/react-bootstrap/RBSpinners";
import RBAccordion from "../pages/react-bootstrap/RBAccordion";
import RBCarousel from "../pages/react-bootstrap/RBCarousel";

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
                {path:"/rb-cards", element:<RBCards/>},
                {path:"/rb-images", element:<RBImages/>},
                {path:"/rb-listgroup", element:<RBListGroup/>},
                {path:"/rb-figure", element:<RBFigure/>},
                {path:"/rb-pagination", element:<RBPagination/>},
                {path:"/rb-progressbar", element:<RBPrgressBars/>},
                {path:"/rb-spinners", element:<RBSpinners/>},
                {path:"/rb-table", element:<RBTables/>},
                {path:"/rb-accordion", element:<RBAccordion/>},
                {path:"/rb-carousel", element:<RBCarousel/>},

            ]
        },
        
    ]
)