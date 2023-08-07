import { memo } from "react";
import "./About.css"
const About = () => {
    return (
        <main className="about">
            <h1>About us</h1>
            <section>
                <h2>What We Do</h2>
                <p>We are a team passionate about technology, striving to provide superior services to our customers by creating beautiful and efficient websites. From designing user interfaces to implementing code, we endeavor to achieve the best results for our users and clients.</p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>Our team consists of experienced and talented individuals. All team members have expertise in web design and development, and through collaboration and support, we excel in delivering projects in the best possible manner.</p>
            </section>
            <section>
                <h2>Our Mission</h2>
                <p>Our mission is to empower businesses and individuals by providing innovative web solutions that enhance their online presence. We believe in utilizing cutting-edge technologies and creativity to deliver exceptional results that exceed our clients' expectations.</p>
            </section>
            <section>
                <h2>Customer Satisfaction</h2>
                <p>Customer satisfaction is at the heart of everything we do. We prioritize understanding our clients' needs and work closely with them throughout the project's lifecycle. Our commitment to excellence and attention to detail ensures that our clients receive the highest level of satisfaction.</p>
            </section>
    
        </main>
    );
}

export default memo(About);