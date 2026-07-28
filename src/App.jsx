import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import FilmDetails from "./pages/FilmDetails/FilmDetails";
import History from "./pages/History/History";
import Themes from "./pages/Themes/Themes";
import ArtGallery from "./pages/ArtGallery/ArtGallery";
import Legacy from "./pages/Legacy/Legacy";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

    return (

        <BrowserRouter>

            <ScrollToTop />

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
                        path="/films/:id"
                        element={<FilmDetails />}
                    />

                    <Route
                        path="/history"
                        element={<History />}
                    />

                    <Route
                        path="/themes"
                        element={<Themes />}
                    />

                    <Route
                        path="/art-style"
                        element={<ArtGallery />}
                    />

                    <Route
                        path="/legacy"
                        element={<Legacy />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}