import {Outlet} from "react-router"
import Sidebar from '../components/sidebar'
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayouts() {
  return (
    <div>
        <Header/>
          <Sidebar/>
          <Outlet/>
        <Footer/>
    </div>
  );
}

