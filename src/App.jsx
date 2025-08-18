import './App.css'
import analyticsImg from './assets/analytics-3.jpg'
import dashboardImg from './assets/analytics-2.jpg'
import unlockImg from './assets/unlock-growth.jpg'
import profileImg from './assets/profile-image.jpeg'
import pageGraphics from './assets/pie.png';
import { InView, useInView  } from "react-intersection-observer";
import { useState, useEffect } from 'react';

const GlitchTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const monitoringText = [
    "$ monitoring system_status --live",
    "✓ DATABASE_UPTIME: 99.99%",
    "✓ API_RESPONSE_TIME: 23ms",
    "✓ MEMORY_USAGE: 67% optimal",
    "✓ ERROR_RATE: 0.01%",
    "⚡ COST_SAVINGS: $200,000/year",
    "🔍 ANALYZING_PATTERNS...",
    "📊 GENERATING_INSIGHTS...",
    "✅ SYSTEM_HEALTH: OPTIMAL"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % monitoringText.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-container">
      <div className="space-y-2">
        {monitoringText.slice(0, currentLine + 1).map((line, index) => (
          <div 
            key={index}
            className={`glitch-text ${index === currentLine ? 'animate-pulse' : ''}`}
            data-text={line}
          >
            {line}
          </div>
        ))}
        <div className="glitch-text opacity-50" data-text="█">█</div>
      </div>
    </div>
  );
};

function App() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [inViewState, setInViewState] = useState(false)

  return (
    <>
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-primary-900">Farouk Gbadamosi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-primary-600 hover:text-accent-600 transition-colors">About</a>
              <a href="#work" className="text-primary-600 hover:text-accent-600 transition-colors">Work</a>
              <a href="#contact" className="text-primary-600 hover:text-accent-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-accent-600 font-medium text-lg animate-fade-in">Hello, I&apos;m</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-fade-up-delay-1">
                  Gbadamosi Farouk
                </h1>
                <p className="text-xl text-primary-600 animate-fade-up-delay-2">
                  Senior Full-Stack Developer & Site Reliability Engineer
                </p>
                <p className="text-base text-primary-500 animate-fade-up-delay-2">
                  6+ Years Building Scalable Solutions
                </p>
              </div>
              
              <p className="text-lg text-primary-600 leading-relaxed max-w-lg animate-fade-up-delay-3">
                I architect and build <span className="font-semibold text-accent-600">end-to-end solutions</span> that power critical business operations. 
                From <span className="font-semibold text-accent-600">production grade </span> bespoke monitoring & incident management dashboards to automated anomaly detection engines, I've delivered systems that 
                <span className="font-semibold text-accent-600"> boosted platform reliability to 99.9%</span> and 
                <span className="font-semibold text-accent-600"> accelerated transaction processing speeds 400x faster</span> — 
                all while crafting elegant user experiences that cross-functional teams actually love to use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
                <a href="#work" className="accent-gradient text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center">
                  View My Work
                </a>
                <a href="#contact" className="border-2 border-accent-600 text-accent-600 px-8 py-3 rounded-lg font-medium hover:bg-accent-50 transition-all duration-300 text-center">
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 accent-gradient rounded-full blur-3xl opacity-20 animate-float"></div>
              <img 
                src={profileImg} 
                alt="Gbadamosi Farouk" 
                className="relative z-10 w-80 h-80 rounded-full object-cover mx-auto shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <InView as="div" onChange={(inView) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
                <h2 className={`text-3xl lg:text-4xl font-bold text-primary-900 mb-8 ${
                  inViewState ? 'animate-slide-in-left' : 'opacity-0'
                }`}>
                  Scaling Engineering & Reliability Impact
                </h2>
              </InView>
              
              <div className="space-y-6">
                <InView as="div" onChange={(inView) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
                  <div className={`flex items-start gap-4 ${
                    inViewState ? 'animate-fade-up-delay-1' : 'opacity-0'
                  }`}>
                    <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">Cost Savings & Reliability</h3>
                      <p className="text-primary-600">Replaced third-party solutions with in-house production-grade software solutions that achieved <span className="font-semibold text-accent-600">99.9% uptime</span> and sub-15 second response times across enterprise platforms and saved <span className="font-semibold text-accent-600">$100K annually</span> in the process.</p>
                    </div>
                  </div>
                </InView>
                
                <InView as="div" onChange={(inView) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
                  <div className={`flex items-start gap-4 ${
                    inViewState ? 'animate-fade-up-delay-2' : 'opacity-0'
                  }`}>
                    <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">Rapid Development & Deployment</h3>
                      <p className="text-primary-600">Engineered reusable component libraries and automation tools that accelerated dashboard creation by <span className="font-semibold text-accent-600">10x</span> and enabled seamless deployment across <span className="font-semibold text-accent-600">500+ microservices</span> with zero downtime.</p>
                    </div>
                  </div>
                </InView>
                
                <InView as="div" onChange={(inView) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
                  <div className={`flex items-start gap-4 ${
                    inViewState ? 'animate-fade-up-delay-3' : 'opacity-0'
                  }`}>
                    <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">Innovation & Leadership</h3>
                      <p className="text-primary-600">Led cross-functional teams, <span className="font-semibold text-accent-600"> mentoring developers and data engineers</span> while pioneering observability practices that became company-wide standards.</p>
                    </div>
                  </div>
                </InView>
              </div>
            </div>
            
            <div className="relative">
              <InView as="div" onChange={(inView) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
                <div className={`${
                  inViewState ? 'animate-slide-in-right' : 'opacity-0'
                }`}>
                  <GlitchTerminal />
                </div>
              </InView>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="work" className="py-20 px-6 bg-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Selected Work</h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Showcasing data solutions that drive business growth and operational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
            <div className={`card-hover rounded-2xl overflow-hidden bg-white shadow-lg ${
              inView ? 'animate-fade-up-delay-1' : 'opacity-0'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={unlockImg} 
                  alt="Metrics Tree SaaS" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 accent-gradient opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Metrics Tree SaaS
                </h3>
                <p className="text-primary-600 mb-6">
                  Solving metric overload by compressing data into high-signal insights. Helps companies focus on what matters most.
                </p>
                <a 
                  href="https://github.com/pharouhk/metrics-tree-saas" 
                  className="inline-flex items-center gap-2 accent-gradient text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={`card-hover rounded-2xl overflow-hidden bg-white shadow-lg ${
              inView ? 'animate-fade-up-delay-2' : 'opacity-0'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dashboardImg} 
                  alt="Python Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 accent-gradient opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Python Interactive Dashboard
                </h3>
                <p className="text-primary-600 mb-6">
                  Highly interactive store dashboard built entirely in Python, demonstrating advanced visualization without traditional frontend frameworks.
                </p>
                <a 
                  href="https://github.com/pharouhk/sample-store-app" 
                  className="inline-flex items-center gap-2 accent-gradient text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className={`card-hover rounded-2xl overflow-hidden bg-white shadow-lg md:col-span-2 lg:col-span-1 ${
              inView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={analyticsImg} 
                  alt="Product Analytics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 accent-gradient opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Product Analytics Platform
                </h3>
                <p className="text-primary-600 mb-6">
                  Comprehensive analytics dashboard for tracking key product metrics and driving growth decisions with actionable insights.
                </p>
                <a 
                  href="https://github.com/pharouhk/product-analytics-saas/tree/main" 
                  className="inline-flex items-center gap-2 accent-gradient text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-primary-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your data challenges in monitoring into reliability and growth? 
            Let&apos;s discuss how I can help drive your next project forward.
          </p>
          
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={profileImg} 
                alt="Gbadamosi Farouk" 
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Gbadamosi Farouk</h3>
                <p className="text-primary-600 mb-4">Full-Stack Solutions Developer</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                  <a 
                    href="mailto:fgbadamosi@ymail.com" 
                    className="inline-flex items-center gap-2 accent-gradient text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    Send Email
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/farouk-gbadamosi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-accent-600 text-accent-600 px-6 py-2 rounded-lg font-medium hover:bg-accent-50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-primary-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary-300">
            © 2025 Gbadamosi Farouk.
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App