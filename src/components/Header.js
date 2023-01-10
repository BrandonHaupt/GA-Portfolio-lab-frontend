import { Link } from "react-router-dom";

export default function Header(props){

    return(
        <header>
            <nav className="nav">
                <Link to="/">
                     <div>HOME</div>
                </Link>

                <Link to="/about">
                    <div>ABOUT</div>
                </Link>

                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
            <h1>My Portfolio Page</h1>
        </header>
    )

}

