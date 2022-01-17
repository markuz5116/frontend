import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    const routes = [
        {
            route: "/",
            name: "Home"
        },
        {
            route: "todo-list",
            name: "To Do List"
        }
    ]

    return (
        <ul className="navbar">
            {routes.map(route => {
                return (
                    <li className="nav" key={route.name}>
                        <Link to={route.route}>{route.name}</Link>
                    </li>
                ); 
            })}
        </ul>
    )
}

export default NavBar;