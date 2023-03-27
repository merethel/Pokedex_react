import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import { RouterProvider, createHashRouter } from "react-router-dom"
import InformationPage from "./routes/InformationPage"
import PokemonPage from "./routes/PokemonPage"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <PokemonPage />,
            },
            {
                path: "/information",
                element: <InformationPage />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)