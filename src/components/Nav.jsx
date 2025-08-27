import React, { useRef, useEffect } from "react";
// import "../css/Nav.css";
import "../css/style.css";

export default function Nav() {
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY > 50) {
                    navRef.current.style.background = "rgba(255, 255, 255, 0.95)";
                    navRef.current.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
                } else {
                    navRef.current.style.background = "rgba(255, 255, 255, 0.1)";
                    navRef.current.style.boxShadow = "none";
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 부드러운 스크롤
    useEffect(() => {
        const links = navRef.current.querySelectorAll('a[href^="#"]');
        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            const targetEl = document.querySelector(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
        };

        links.forEach(link => link.addEventListener("click", handleClick));
        return () => links.forEach(link => link.removeEventListener("click", handleClick));
    }, []);

    return (
        <nav ref={navRef}>
            <div className="container">
                <div className="nav-content">
                    <div className="logo">SUN</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
