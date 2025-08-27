import React from "react";
// import "../css/Hero.css";
import "../css/style.css";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="floating-circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="hero-content">
                <h1>안녕하세요!</h1>
                <p>백엔드 개발자를 꿈꾸는 선승희입니다</p>
                <a href="#projects" className="cta-button">프로젝트 보기</a>
            </div>
        </section>
    );
}
