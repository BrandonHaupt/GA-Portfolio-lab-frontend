import { Link } from "react-router-dom";

export default function Header(props){

    return(
        <header>
            <img src="./img/Profile-img.png" alt="profile" className="profile-img"/>
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
        </header>
    )

}

