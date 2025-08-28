import React from "react";
import "../css/style.css";

export default function Contact() {
    return (
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
                            <a href="https://github.com/sunsh0345"
                                target="_blank"
                                rel="noreferrer">github.com/sunsh0345</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
