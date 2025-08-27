import React from "react";
// import "../css/Skills.css";
import "../css/style.css";
import frontendImg from "../img/frontend.png";
import backendImg from "../img/backend.png";
import databaseImg from "../img/database.png";
import toolsImg from "../img/tools.png";

export default function Skills() {
    const handleCardClick = (e) => {
        e.currentTarget.style.transform = "scale(0.98)";
        setTimeout(() => (e.currentTarget.style.transform = "scale(1)"), 150);
    };

    const handleCardHover = (e, isEnter) => {
        e.currentTarget.style.transform = isEnter
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)";
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                        <div className="skill-icon">
                            <img src={frontendImg} alt="frontend" />
                        </div>
                        <h3>Frontend</h3>
                        <p>HTML, CSS, JavaScript<br />React</p>
                    </div>
                    <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                        <div className="skill-icon">
                            <img src={backendImg} alt="backend" />
                        </div>
                        <h3>Backend</h3>
                        <p>Node.js, JSP, Spring Boot</p>
                    </div>
                    <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                        <div className="skill-icon">
                            <img src={databaseImg} alt="database" />
                        </div>
                        <h3>Database</h3>
                        <p>oracle, supabase, MySQL</p>
                    </div>
                    <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                        <div className="skill-icon">
                            <img src={toolsImg} alt="tools" />
                        </div>
                        <h3>Tools</h3>
                        <p>Git, GitHub<br />AWS, Figma</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
