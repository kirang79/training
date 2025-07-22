"use client";
import styles from "./page.module.css";

export default function Home() {
  // Scroll to form section
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById("register-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>
            Full-stack .NET Core + Azure + AI
          </h1>
          <h2 style={{ fontSize: 22, fontWeight: 400, marginBottom: 20 }}>
            Cohort-based, 24 Weeks, Live-Online<br />
            Build Modern Cloud & AI-Powered Applications
          </h2>
          <a
            href="#register-form-section"
            className={styles.primary}
            style={{ fontSize: 20, padding: "14px 36px", marginTop: 16, display: "inline-block" }}
            onClick={scrollToForm}
          >
            Register Now
          </a>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Course Highlights</h3>
          <ul style={{ fontSize: 18, lineHeight: 1.7, listStyle: "disc inside", textAlign: "left", maxWidth: 700, margin: "0 auto" }}>
            <li>Master .NET Core for scalable backend development</li>
            <li>Deploy and manage apps on Microsoft Azure</li>
            <li>Integrate AI features using Azure Cognitive Services & OpenAI</li>
            <li>Hands-on projects, real-world scenarios, and capstone</li>
            <li>Live, interactive sessions with expert instructors</li>
            <li>Career support and peer networking</li>
          </ul>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Curriculum Overview</h3>
          <ol style={{ fontSize: 17, lineHeight: 1.6, textAlign: "left", maxWidth: 700, margin: "0 auto", paddingLeft: 20 }}>
            <li>Introduction to .NET Core & C#</li>
            <li>Building REST APIs & Microservices</li>
            <li>Frontend with React (or Blazor)</li>
            <li>Azure Cloud Fundamentals</li>
            <li>Databases: SQL & NoSQL on Azure</li>
            <li>DevOps & CI/CD with Azure Pipelines</li>
            <li>Integrating AI: Azure Cognitive Services, OpenAI</li>
            <li>Security, Monitoring, and Scaling</li>
            <li>Capstone Project & Demo Day</li>
          </ol>
        </section>

        <section style={{ marginBottom: 32, textAlign: "center" }}>
          <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Meet Your Instructor</h3>
          <div style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
            <strong>Dr. Kiran Kumar</strong> – Microsoft Certified Trainer, 15+ years in enterprise software, cloud, and AI. Passionate about mentoring and building future-ready engineers.
          </div>
        </section>

        <section style={{ marginBottom: 32, textAlign: "center" }}>
          <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>Cohort Details</h3>
          <div style={{ fontSize: 18 }}>
            <strong>Duration:</strong> 24 Weeks<br />
            <strong>Format:</strong> Live-Online, Interactive<br />
            <strong>Start Date:</strong> September 1st 2025<br />
            <strong>Seats:</strong> Limited (Apply Early!)
          </div>
        </section>

        <section id="register-form-section" style={{ textAlign: "center", marginTop: 32 }}>
          <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 18 }}>Register Your Interest</h3>
          <div style={{  margin: "0 auto" }}>
            {/* Replace the src URL below with your actual Google Form embed link */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScQjUeXBeAND9m9zXIZl1m1F2hUfHdmSkYuZQWScbHu-XkvZw/viewform?usp=header&embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Registration Form"
            >
              Loading…
            </iframe>
          </div>
        </section>

        <section style={{ textAlign: "center", marginTop: 24 }}>
          <a
            href="#register-form-section"
            className={styles.primary}
            style={{ fontSize: 22, padding: "18px 48px", marginTop: 12, display: "inline-block" }}
            onClick={scrollToForm}
          >
            Register Your Interest
          </a>
          <div style={{ fontSize: 15, marginTop: 10, color: "#888" }}>
            We’ll notify you as soon as enrollment opens.
          </div>
        </section>
      </main>
    </div>
  );
}
