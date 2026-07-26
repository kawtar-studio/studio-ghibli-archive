import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";

import Films from "./pages/Films/Films";

import History from "./pages/History/History";


export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/films"
                        element={<Films />}
                    />

                    <Route
                        path="/history"
                        element={<History />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}