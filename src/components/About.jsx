import React from "react";
// import "../css/About.css";
import "../css/style.css";
import meImg from "../img/me.jpg";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="profile-image">
                        <img src={meImg} alt="me" />
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
    );
}
