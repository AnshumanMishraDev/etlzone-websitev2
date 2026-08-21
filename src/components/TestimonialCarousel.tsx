"use client";

import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I highly recommend Samim for any complex SAP data migration and enterprise transformation initiatives. Having worked closely with him on multiple large business transformation projects, I have seen firsthand his exceptional ability to manage high-stakes data landscapes and ensure seamless transitions to SAP environments. Data migration is notoriously one of the most critical and high-risk phases of any ERP journey, but Samim navigates it with unmatched technical precision and a strategic mindset. He possesses a deep understanding of legacy data extraction, data profiling, cleansing, and validation rules, alongside expert-level mastery of key SAP migration utilities, including SAP BODS, LTMC/Migration Cockpit, LSMW, or Syniti Advanced Data Migration. Beyond his technical acumen, Samim excels at bridging the gap between functional business requirements and technical deployment. He works effectively across cross-functional teams to map data accurately, mitigate risks early, minimize business disruption, and guarantee data integrity during critical cutover windows.",
    author: "Kamal Aneja",
    role: "Technology Delivery Executive, Accenture",
    initials: "KA",
  },
  {
    quote: "We had the pleasure of partnering with ETLZONE Solutions for our data migration project, and the experience exceeded our expectations. Their team demonstrated exceptional expertise, meticulous planning, and a strong commitment to delivering a seamless migration with minimal business disruption. The project was executed on time, with a high level of accuracy and data integrity. Their proactive communication, attention to detail, and ability to address challenges efficiently gave us complete confidence throughout the process. We were particularly impressed by their structured approach, technical competence, and dedication to ensuring a successful outcome. I highly recommend ETLZONE Solutions to any organization looking for a reliable and highly skilled data migration partner.",
    author: "Naina Patel",
    role: "Manager, Commercial Centre of Excellence, Sony Entertainment Television",
    initials: "NP",
  },
  {
    quote: "We engaged with ETLZone Solutions for SAP Data Migration, and the team consistently delivered clean, reconciled data within agreed timelines. They proactively identified data quality and migration issues before they could impact cutover and worked closely with our functional and business teams throughout the migration lifecycle. Their strong SAP data migration expertise, structured approach, and clear communication made them a reliable delivery partner. We highly recommend ETLZone Solutions for SAP Data Migration engagements.",
    author: "Bhanu Murthy Kota",
    role: "SAP Basis SME, Coty Inc. / Director, ADILABS Consulting Services Pvt. Ltd.",
    initials: "BK",
  },
  {
    quote: "I have known Samim since the early stages of his career and have had the opportunity to work closely with him on several challenging assignments. He is a calm, thoughtful, and highly dependable professional with an exceptional ability to analyse complex problems and find practical solutions. Samim has strong technical expertise in SAP BODS, SQL, and various SAP data migration and load methodologies. He has extensive experience working across both Master and Transaction Data objects and has developed deep expertise across the SD data domain. His technical depth, combined with his strong understanding of data migration processes, makes him a highly reliable resource for complex projects. During our time working together, Samim was always my go-to person, particularly when we were working under challenging timelines or dealing with complex technical issues. He consistently demonstrated professionalism, discipline, ownership, and a strong commitment to delivering quality outcomes. Over the last few years, Samim has successfully stepped into a larger role and has grown tremendously, demonstrating strong leadership, maturity, and the ability to take on greater responsibilities. I would definitely welcome the opportunity to work with Samim again in the future. He is a highly talented, dependable, and dedicated professional, and I am confident that he will continue to achieve great success in his career. I strongly recommend Samim and wish him continued success in his current and future endeavours.",
    author: "Prathamesh Karkhanis",
    role: "Manager, Accenture",
    initials: "PK",
  },
  {
    quote: "Samim is a great person. He's very well aware of the Data Migration Technical and Functional sides. Also co-ordinated the cutover many times smoothly in multiple go-lives. He's a great mentor and I've learnt a lot from him during the tenure together.",
    author: "Akash Das",
    role: "SAP Certified BODS Data Migration Consultant, Ex-Accenture",
    initials: "AD",
  },
  {
    quote: "A massive thank you to Samim for expertly handling the complex data migration for our SAP S/4HANA greenfield project using DMC/LTMC! Greenfield migrations come with immense complexity, and Samim tackled the challenge head-on — delivering flawless staging table loads, seamless LTMOM custom mappings, and reliable cutover execution across all master and transactional data objects.",
    author: "Ajaykumar Patel",
    role: "Consultant, Tata Consultancy Services",
    initials: "AP",
  },
];

const CARD_WIDTH = 440;
const COLLAPSED_MAX_HEIGHT = 520;

export default function TestimonialCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const shouldShowReadMore = (index: number) => {
    return testimonials[index].quote.length > 650;
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -CARD_WIDTH - 28, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: CARD_WIDTH + 28, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 10;
  const canScrollRight = containerRef.current && scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth - 10;

  return (
    <section className="testimonial-carousel-section" aria-label="Client testimonials">
      <div className="container">
        <div className="section-head">
          <ScrollReveal>
            <span className="section-eyebrow">In Their Words</span>
            <h2>Client & Partner Feedback</h2>
            <p>Shared with permission from the SIs, clients, and partners we have delivered data migration workstreams for.</p>
          </ScrollReveal>
        </div>

        <div className="testimonial-carousel-wrapper">
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={scrollLeft}
            aria-label="Previous testimonials"
            disabled={!canScrollLeft}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div
            className="testimonial-carousel-track"
            ref={containerRef}
            onScroll={handleScroll}
            role="region"
            aria-roledescription="carousel"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card ${expandedIndex === i ? "expanded" : ""}`}
                style={{
                  width: CARD_WIDTH,
                  maxHeight: expandedIndex === i ? "none" : COLLAPSED_MAX_HEIGHT,
                  flexShrink: 0,
                }}
              >
                <ScrollReveal>
                  <div className="testimonial-card-inner">
                    <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="testimonial-attribution">
                      <div className="quote-avatar">{t.initials}</div>
                      <div>
                        <h4>{t.author}</h4>
                        <span>{t.role}</span>
                      </div>
                    </div>
                    {shouldShowReadMore(i) && (
                      <button
                        className="read-full-btn"
                        onClick={() => toggleExpand(i)}
                        aria-expanded={expandedIndex === i}
                        aria-controls={`testimonial-${i}`}
                      >
                        {expandedIndex === i ? "Show less" : "Read full"}
                      </button>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn--next"
            onClick={scrollRight}
            aria-label="Next testimonials"
            disabled={!canScrollRight}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}