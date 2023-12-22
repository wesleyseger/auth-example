import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Public } from "./pages/Public";

export const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/public",
            element: <Public />,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <PrivateRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <Home />,
                }
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login />,
        }
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!isAuthenticated ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
        {
            path: "*",
            element: <NotFound />,
        }
    ]);

    // Provide the router configuration using RouterProvider
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )

};