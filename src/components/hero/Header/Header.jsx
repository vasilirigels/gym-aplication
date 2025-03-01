import React, {useState} from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import Bars from "../../../assets/bars.png";
import {Link} from "react-scroll";

export default function Header() {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpende, setManuOpened] = useState(false)
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
        {(menuOpende === false && mobile === true) ? (
            <div onClick={() => setManuOpened(true)} style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}>
                <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }}/></div>
        ) : <ul className="header-menu">
            <li><Link
                onClick={() => setManuOpened(false)}
                activeClass='active'
                to='header'
                span={true}
                smooth={true}
            >
                Home
            </Link>
            </li>
            <li>
                <Link
                    onClick={() => setManuOpened(false)}
                    activeClass='active'
                    to='programs'
                    span={true}
                    smooth={true}
                >
                    Programs
                </Link>
            </li>
            <li
            >
                <Link
                    onClick={() => setManuOpened(false)}
                    activeClass='active'
                    to='reasons'
                    span={true}
                    smooth={true}
                >
                    Why us
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setManuOpened(false)}
                    activeClass='active'
                    to='plans'
                    span={true}
                    smooth={true}>
                    Plans
            </Link>
            </li>
            <li>
                <Link
                    onClick={() => setManuOpened(false)}
                    to='testimonials'
                    span={true}
                    smooth={true}
            >
                    Testimonials
                </Link>
            </li>
        </ul>}

    </div>
  );
}
