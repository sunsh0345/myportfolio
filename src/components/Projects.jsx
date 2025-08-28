import React, { useState } from "react";
import "../css/style.css";
import bookstoreImg from "../img/bookstore.jpg";
import deliveryMoaImg from "../img/deliverymoa.png";
import deliveryMoaRenewalImg from "../img/deliverymoa_renewal.png";
import rocketVideo from "../video/rocketbookstore.mp4";

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCardHover = (e, isEnter) => {
        e.currentTarget.style.transform = isEnter
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)";
    };

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    
                    {/* RocketBookstore 카드 */}
                    <div
                        className="project-card"
                        onMouseEnter={(e) => handleCardHover(e, true)}
                        onMouseLeave={(e) => handleCardHover(e, false)}
                    >
                        <div className="project-image"
                        onClick={handleCardClick}>
                            <img src={bookstoreImg} alt="bookstore" />
                        </div>
                        <div className="project-content">
                            <h3>RocketBookstore</h3>
                            <p>
                                빠르고 효율적인 도서 배송 서비스를 지향하는 온라인 서점 플랫폼입니다. 
                                쿠* 로켓 배송의 속도감과 배*의민족의 1:1 전담 배송 시스템을 융합하여 사용자에게 최적의
                                도서 구매 및 배송 경험을 제공합니다.
                            </p>
                            <div className="project-tech">
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">JSP</span>
                                <span className="tech-tag">Oracle</span>
                            </div>
                            <div className="project-links">
                                <a 
                                    href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk2Nzk4ODM3MTA3Mjg4fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2FRocket%20Bookstore.pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    PDF →
                                </a>
                                <a 
                                    href="https://github.com/sunsh0345/RocketBookstore" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 배달모아(리액트) */}
                    <div
                        className="project-card"
                        onMouseEnter={(e) => handleCardHover(e, true)}
                        onMouseLeave={(e) => handleCardHover(e, false)}
                    >
                        <div className="project-image">
                            <img src={deliveryMoaImg} alt="deliverymoa" />
                        </div>
                        <div className="project-content">
                            <h3>배달모아(리액트)</h3>
                            <p>
                                사용자들이 근처 사람들과 손쉽게 배달 음식을 공동 주문할 수 있도록 도와주는 웹사이트 입니다. 
                                사용자 간의 원활한 소통과 안전한 거래를 위해 실시간 채팅, 위치 기반 매칭, 참여 현황 표시 등 다양한 기능을 제공합니다.
                            </p>
                            <div className="project-tech">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">Supabase</span>
                            </div>
                            <div className="project-links">
                                <a 
                                    href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk3NjU5NTEyNTY3Mzg0fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2FDelivery-moA%20(Copy).pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    PDF →
                                </a>
                                <a 
                                    href="https://github.com/delivery-moa/delivery-moa" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub →
                                </a>
                                <a 
                                    href="https://delivery-moa.github.io/delivery-moa/" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Site →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 배달모아(스프링) */}
                    <div
                        className="project-card"
                        onMouseEnter={(e) => handleCardHover(e, true)}
                        onMouseLeave={(e) => handleCardHover(e, false)}
                    >
                        <div className="project-image">
                            <img src={deliveryMoaRenewalImg} alt="deliverymoa_renewal" />
                        </div>
                        <div className="project-content">
                            <h3>배달모아(스프링)</h3>
                            <p>
                                기존 배달모아 서비스의 개선 및 확장<br/>
                                관리자 페이지 및 사장님 페이지 신규 추가<br/>
                                가게 리뷰 페이지 추가<br/>
                                Flutter 기반 모바일 앱 동시 개발 및 AWS 클라우드 인프라 구축
                            </p>
                            <div className="project-tech">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Spring Boot</span>
                                <span className="tech-tag">Oracle</span>
                            </div>
                            <div className="project-links">
                                <a 
                                    href="https://mybox.naver.com/#/my/doc-viewer/c3Vuc2g0NXwzNDcyNTk3NjUwOTM1MTgyNDI0fEZ8MA/https%3A%2F%2Ffiles.mybox.naver.com%2F%EB%82%B4%20%EB%AC%B8%EC%84%9C%2F%EB%B0%B0%EB%8B%AC%EB%AA%A8%EC%95%84%20%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C.pdf%3Fuserid%3Dsunsh45%26useridx%3D51957812%26attachment%3D2%26NDriveSvcType%3DNHN%2FND-WEB%20Ver/ndrive?resourceKey=c3Vuc2g0NXwzNDcyNTMyODQwMjE1ODk3Njg5fER8MA&downloadable=true&editable=true" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    PDF →
                                </a>
                                <a 
                                    href="https://github.com/goonmaandoo/FinalProjectReact" 
                                    className="project-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✖</button>
                        <h2>RocketBookstore 프로젝트 영상</h2>
                        <div className="video-wrapper">
                            <video
                                src={rocketVideo}
                                controls
                                autoPlay
                                muted
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
