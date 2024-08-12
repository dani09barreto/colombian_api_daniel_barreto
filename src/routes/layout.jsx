import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return <div>
        <nav>
            <h1>Mi prueba tecnica</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/colombia-dash">Ir a prueba</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>;
}

export default Layout;