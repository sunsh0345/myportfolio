import React, { useEffect, useRef, useState } from "react";
import "./style.css";

export default function Mainpage() {
    const navRef = useRef(null);
    const [typedText, setTypedText] = useState(""); // 타이핑 효과 state

    // 네비게이션 스크롤 효과
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
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href");
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        return () => {
            links.forEach((link) => {
                link.replaceWith(link.cloneNode(true)); // 이벤트 제거
            });
        };
    }, []);

    // 카드 hover/click 이벤트 핸들러
    const handleCardClick = (e) => {
        e.currentTarget.style.transform = "scale(0.98)";
        setTimeout(() => {
            e.currentTarget.style.transform = "scale(1)";
        }, 150);
    };

    const handleCardHover = (e, isEnter) => {
        e.currentTarget.style.transform = isEnter
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)";
    };

    return (
        <>
            {/* 네비게이션 */}
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

            {/* Hero */}
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

            {/* About */}
            <section id="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="profile-image">
                            <img src="src/img/me.jpg" alt="me" />
                        </div>
                        <div className="about-text">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>이름</th>
                                        <th>생년월일</th>
                                        <th>위치</th>
                                    </tr>
                                    <tr>
                                        <td>선승희</td>
                                        <td>03.04.05</td>
                                        <td>서울시 서초구</td>
                                    </tr>
                                    <tr>
                                        <th>연락처</th>
                                        <th>이메일</th>
                                        <th>자격증</th>
                                    </tr>
                                    <tr>
                                        <td>010-9248-6853</td>
                                        <td>sunsh45@naver.com</td>
                                        <td>GTQ1급 <br /> SQLD <br /> 정보처리기사(필기)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="skills">
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="skill-icon">
                                <img src="src/img/frontend.png" alt="frontend" />
                            </div>
                            <h3>Frontend</h3>
                            <p>HTML, CSS, JavaScript<br />React</p>
                        </div>
                        <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="skill-icon">
                                <img src="src/img/backend.png" alt="backend" />
                            </div>
                            <h3>Backend</h3>
                            <p>Node.js, JSP, Spring Boot</p>
                        </div>
                        <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="skill-icon">
                                <img src="src/img/database.png" alt="database" />
                            </div>
                            <h3>Database</h3>
                            <p>oracle, supabase, MySQL</p>
                        </div>
                        <div className="skill-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="skill-icon">
                                <img src="src/img/tools.png" alt="tools" />
                            </div>
                            <h3>Tools</h3>
                            <p>Git, GitHub<br />AWS, Figma</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="project-image">
                                <img src="src/img/bookstore.jpg" alt="bookstore" />
                            </div>
                            <div className="project-content">
                                <h3>RocketBookstore</h3>
                                <p>빠르고 효율적인 도서 배송 서비스를 지향하는 온라인 서점 플랫폼입니다. 쿠* 로켓 배송과 배*의민족 시스템을 융합한 프로젝트입니다.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Java</span>
                                    <span className="tech-tag">JSP</span>
                                    <span className="tech-tag">oracle</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk2Nzk4ODM3MTA3Mjg4fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2FRocket%20Bookstore.pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true"
                                        class="project-link">PDF →</a>
                                    <a href="https://github.com/sunsh0345/RocketBookstore" class="project-link">GitHub →</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="project-image">
                                <img src="src/img/deliverymoa.png" alt="deliverymoa" />
                            </div>
                            <div className="project-content">
                                <h3>배달모아(리액트)</h3>
                                <p>사용자들이 근처 사람들과 손쉽게 배달 음식을 공동 주문할 수 있도록 도와주는 웹사이트입니다.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">Supabase</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk3MzU0NzQ5OTkwNDg4fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2FDelivery-moA. pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true"
                                        class="project-link">PDF →</a>
                                    <a href="https://github.com/delivery-moa/delivery-moa" class="project-link">GitHub →</a>
                                    <a href="https://delivery-moa.github.io/delivery-moa/" class="project-link"> Site →</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onMouseEnter={(e) => handleCardHover(e, true)} onMouseLeave={(e) => handleCardHover(e, false)} onClick={handleCardClick}>
                            <div className="project-image">
                                <img src="src/img/deliverymoa_renewal.png" alt="deliverymoa_renewal" />
                            </div>
                            <div className="project-content">
                                <h3>배달모아(스프링)</h3>
                                <p>기존 배달모아 서비스의 개선 및 확장. 관리자 페이지 및 사장님 페이지 신규 추가.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Spring Boot</span>
                                    <span className="tech-tag">Oracle</span>
                                </div>
                                <div class="project-links">
                                    <a href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk3NjUwOTM1MTgyNDI0fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2F%EB%B0%B0%EB%8B%AC%EB%AA%A8%EC%95%84%20%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C.pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true" class="project-link">PDF →</a>
                                    <a href="https://github.com/goonmaandoo/FinalProjectReact" class="project-link">GitHub →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-content">
                        <p>새로운 기회와 협업에 항상 열려있습니다.<br />언제든 연락해 주세요!</p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-item">mail</div>
                                <p>sunsh45@naver.com</p>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item">phone</div>
                                <p>010-9248-6853</p>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item">GitHub</div>
                                <a href="https://github.com/sunsh0345">github.com/sunsh0345</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container">
                    <p>© 2025 선승희. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
