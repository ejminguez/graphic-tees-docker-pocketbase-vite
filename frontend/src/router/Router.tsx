import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import ErrorPage from "@/pages/ErrorPage";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";
import App from "@/App";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,   // Wrap everything in ScrollToTop
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: 'product/:id',
                element: <Product />
            },
            {
                path: 'about',
                element: <About />
            }
        ],
    }
]);

export default routes;
