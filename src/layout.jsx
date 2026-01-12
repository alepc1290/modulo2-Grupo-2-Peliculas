import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
