import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";

function MainLayout() {
    return (
        <>
            <Header />
            <Navigation />
            <Home />
            <Footer />
        </>
    );
}

export default MainLayout;