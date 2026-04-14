import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Database,
  BarChart3,
  FileSpreadsheet,
  Sparkles,
  ExternalLink,
  Calendar,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  Users,
  Target
} from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="dark min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-48 h-48 mx-auto mb-8 relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d4ff] via-[#b624ff] to-[#00ffff] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full rounded-full border-4 border-[#00d4ff] overflow-hidden bg-[#1a1a24] flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#b624ff]/20 flex items-center justify-center">
                <Users className="w-16 h-16 text-[#00d4ff]" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-8xl mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#b624ff] to-[#00ffff] bg-clip-text text-transparent">
              Jitendra Singh Rawal
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Turning Data into Decision-Ready Insights
          </motion.p>

          <motion.div
            className="bg-[#1a1a24] border border-[#00d4ff]/30 rounded-2xl p-8 inline-block shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-6 items-center justify-center mb-6">
              <a href="mailto:jitendrasingh070903@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#00d4ff] transition-colors">
                <Mail className="w-5 h-5" />
                <span>jitendrasingh070903@gmail.com</span>
              </a>
              <a href="tel:+919587145687" className="flex items-center gap-2 text-gray-300 hover:text-[#00d4ff] transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91-9587145687</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Udaipur</span>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center flex-wrap">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 border border-[#00d4ff] text-[#00d4ff] px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#b624ff]/10 hover:bg-[#b624ff]/20 border border-[#b624ff] text-[#b624ff] px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(182,36,255,0.5)]">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <button className="bg-gradient-to-r from-[#00d4ff] to-[#b624ff] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-6xl mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#00d4ff]">Profile</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="md:col-span-2 bg-[#1a1a24] border border-[#00d4ff]/20 rounded-2xl p-8 hover:border-[#00d4ff]/50 transition-all duration-300"
              variants={fadeInUp}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Detail-oriented BCA student with strong interest in Data Analytics and hands-on experience in Excel, SQL, and Power BI. Skilled at converting complex datasets into clear insights, with a reputation for adaptability, precision, and a solution-focused mindset.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#00d4ff]/10 to-[#b624ff]/10 border border-[#00d4ff]/30 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-2xl mb-4 text-[#00ffff]" style={{ fontFamily: 'var(--font-display)' }}>
                Key Traits
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#00d4ff]" />
                  <span>Adaptability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff]" />
                  <span>Precision</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00d4ff]" />
                  <span>Solution-Focused</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-6xl mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#00d4ff]">Technical</span>{' '}
            <span className="text-[#b624ff]">Arsenal</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#1a1a24] border-2 border-[#00d4ff]/40 rounded-2xl p-8 hover:border-[#00d4ff] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00d4ff]/30 transition-colors">
                  <Code2 className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl text-[#00d4ff]" style={{ fontFamily: 'var(--font-display)' }}>
                  Languages & Databases
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['SQL', 'MySQL', 'MS Excel', 'Power BI'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff] rounded-full text-sm hover:bg-[#00d4ff]/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1a1a24] border-2 border-[#b624ff]/40 rounded-2xl p-8 hover:border-[#b624ff] hover:shadow-[0_0_40px_rgba(182,36,255,0.4)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#b624ff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#b624ff]/30 transition-colors">
                  <BarChart3 className="w-6 h-6 text-[#b624ff]" />
                </div>
                <h3 className="text-2xl text-[#b624ff]" style={{ fontFamily: 'var(--font-display)' }}>
                  Tools & Visualization
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Power BI', 'MS Excel', 'MS Word', 'MS PowerPoint'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#b624ff]/10 border border-[#b624ff] text-[#b624ff] rounded-full text-sm hover:bg-[#b624ff]/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1a1a24] border-2 border-[#00ffff]/40 rounded-2xl p-8 hover:border-[#00ffff] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00ffff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00ffff]/30 transition-colors">
                  <Sparkles className="w-6 h-6 text-[#00ffff]" />
                </div>
                <h3 className="text-2xl text-[#00ffff]" style={{ fontFamily: 'var(--font-display)' }}>
                  AI & Innovation
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Generative AI', 'Data Analytics', 'Machine Learning'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#00ffff]/10 border border-[#00ffff] text-[#00ffff] rounded-full text-sm hover:bg-[#00ffff]/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1a1a24] border-2 border-[#00d4ff]/40 rounded-2xl p-8 hover:border-[#00d4ff] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00d4ff]/30 transition-colors">
                  <Users className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl text-[#00d4ff]" style={{ fontFamily: 'var(--font-display)' }}>
                  Professional Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Problem-Solving', 'Team Collaboration', 'Adaptability', 'Communication'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff] rounded-full text-sm hover:bg-[#00d4ff]/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-6xl mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#b624ff]">Featured</span>{' '}
            <span className="text-[#00d4ff]">Projects</span>
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Supply Chain Project */}
            <motion.div
              className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24]/50 border border-[#00d4ff]/30 rounded-2xl overflow-hidden hover:border-[#00d4ff] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8">
                <div className="bg-gradient-to-br from-[#00d4ff]/20 to-[#b624ff]/20 rounded-xl h-48 flex items-center justify-center border border-[#00d4ff]/30 group-hover:scale-105 transition-transform">
                  <Database className="w-20 h-20 text-[#00d4ff]" />
                </div>

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl text-[#00d4ff]" style={{ fontFamily: 'var(--font-display)' }}>
                      Supply Chain Analytics & Performance Dashboard
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>01/2026 – 02/2026</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {['MS Excel', 'Power BI', 'SQL'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#00d4ff]/20 border border-[#00d4ff]/50 text-[#00d4ff] rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6 text-gray-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Cleaned and integrated 14K+ supply chain records to build a structured dataset for analyzing warehouse operations, supplier performance, and order fulfillment.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Developed key business KPIs and a data model to deliver an interactive dashboard for tracking revenue, delivery efficiency, and operational performance.</span>
                    </li>
                  </ul>

                  <button className="bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 border border-[#00d4ff] text-[#00d4ff] px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Medical Data Project */}
            <motion.div
              className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24]/50 border border-[#b624ff]/30 rounded-2xl overflow-hidden hover:border-[#b624ff] hover:shadow-[0_0_40px_rgba(182,36,255,0.3)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8">
                <div className="bg-gradient-to-br from-[#b624ff]/20 to-[#00ffff]/20 rounded-xl h-48 flex items-center justify-center border border-[#b624ff]/30 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-20 h-20 text-[#b624ff]" />
                </div>

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl text-[#b624ff]" style={{ fontFamily: 'var(--font-display)' }}>
                      Medical Data Analysis
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>12/2025 – 01/2026</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {['SQL', 'MySQL'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#b624ff]/20 border border-[#b624ff]/50 text-[#b624ff] rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6 text-gray-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#b624ff] flex-shrink-0 mt-0.5" />
                      <span>Solved client-based and scenario-driven analytical queries to generate insights on patient billing and departmental performance.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#b624ff] flex-shrink-0 mt-0.5" />
                      <span>Applied advanced SQL functions such as RANK, DENSE_RANK, ROW_NUMBER, LEAD, and LAG for ranking, trend analysis, and comparative reporting.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#b624ff] flex-shrink-0 mt-0.5" />
                      <span>Performed data cleaning and preprocessing to ensure data accuracy before analysis.</span>
                    </li>
                  </ul>

                  <button className="bg-[#b624ff]/10 hover:bg-[#b624ff]/20 border border-[#b624ff] text-[#b624ff] px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Wildora Project */}
            <motion.div
              className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24]/50 border border-[#00ffff]/30 rounded-2xl overflow-hidden hover:border-[#00ffff] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8">
                <div className="bg-gradient-to-br from-[#00ffff]/20 to-[#00d4ff]/20 rounded-xl h-48 flex items-center justify-center border border-[#00ffff]/30 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-20 h-20 text-[#00ffff]" />
                </div>

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl text-[#00ffff]" style={{ fontFamily: 'var(--font-display)' }}>
                      Wildora: Wildlife Data Visualization Dashboard
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>06/2025 – 08/2025</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {['MS Excel', 'Power BI'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#00ffff]/20 border border-[#00ffff]/50 text-[#00ffff] rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6 text-gray-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00ffff] flex-shrink-0 mt-0.5" />
                      <span>Analyzed 10,000+ rows of data and built an interactive Power BI dashboard with 15+ KPIs, converting raw datasets into actionable insights and boosting data clarity and decision-making efficiency by 15%+.</span>
                    </li>
                  </ul>

                  <button className="bg-[#00ffff]/10 hover:bg-[#00ffff]/20 border border-[#00ffff] text-[#00ffff] px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-6xl mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#00d4ff]">Education</span>{' '}
            <span className="text-gray-400">&</span>{' '}
            <span className="text-[#b624ff]">Certifications</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-3xl mb-8 text-[#00d4ff] flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                <GraduationCap className="w-8 h-8" />
                Education
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="bg-[#1a1a24] border border-[#00d4ff]/30 rounded-xl p-6 hover:border-[#00d4ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl text-[#00d4ff]">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-gray-400 text-sm">Informatics & Computational Science Programme</p>
                    </div>
                    <span className="text-2xl text-[#00d4ff]">8.51</span>
                  </div>
                  <p className="text-gray-300">MLSU</p>
                  <p className="text-gray-400 text-sm">2022 - 2025</p>
                </motion.div>

                <motion.div
                  className="bg-[#1a1a24] border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl text-gray-300">XII - Science</h4>
                      <p className="text-gray-400 text-sm">Alok Senior Secondary School, Udaipur</p>
                    </div>
                    <span className="text-xl text-gray-400">75.60%</span>
                  </div>
                  <p className="text-gray-400 text-sm">2021 - 2022 | RBSE</p>
                </motion.div>

                <motion.div
                  className="bg-[#1a1a24] border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl text-gray-300">X - General Studies</h4>
                      <p className="text-gray-400 text-sm">Alok Senior Secondary School, Udaipur</p>
                    </div>
                    <span className="text-xl text-gray-400">81.17%</span>
                  </div>
                  <p className="text-gray-400 text-sm">2019 - 2020 | RBSE</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-3xl mb-8 text-[#b624ff] flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                <Award className="w-8 h-8" />
                Certifications
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Associate Data Analytics', org: 'Zinc Kaushal Udaipur', color: '#00d4ff' },
                  { name: 'Data Analyst Internship', org: 'MATE', color: '#b624ff' },
                  { name: 'Generative AI Mastermind', org: 'Outskill', color: '#00ffff' },
                  { name: 'Data Analytics Simulation', org: 'Deloitte Australia', color: '#00d4ff' }
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#1a1a24] border rounded-xl p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
                    style={{
                      borderColor: `${cert.color}40`,
                      boxShadow: `0 0 0 ${cert.color}00`
                    }}
                    whileHover={{
                      borderColor: cert.color,
                      boxShadow: `0 0 20px ${cert.color}40`
                    }}
                    variants={fadeInUp}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <Award className="w-8 h-8" style={{ color: cert.color }} />
                    </div>
                    <h4 className="text-lg mb-2" style={{ color: cert.color, fontFamily: 'var(--font-display)' }}>
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">{cert.org}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience/Internship */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-6xl mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#00ffff]">Experience</span>
          </motion.h2>

          <motion.div
            className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24]/80 border border-[#00d4ff]/30 rounded-2xl p-8 hover:border-[#00d4ff] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00d4ff]/20 to-[#b624ff]/20 rounded-xl flex items-center justify-center border border-[#00d4ff]/30 flex-shrink-0">
                <Briefcase className="w-10 h-10 text-[#00d4ff]" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-[#00d4ff] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      Data Analyst Intern
                    </h3>
                    <p className="text-xl text-gray-300">MATE - Marvik Academy for Technical Education</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>06/2025 – 08/2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Udaipur, Rajasthan</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Gained real-world experience during a Data Analytics internship, applying Excel, SQL, and Power BI for preparing, analyzing, and visualizing data to deliver meaningful insights.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[#00d4ff]/20 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#b624ff] bg-clip-text text-transparent">
                  Jitendra Singh Rawal
                </span>
              </h3>
              <p className="text-gray-400">Data Analyst | Turning Data into Insights</p>
            </div>

            <div className="flex gap-4">
              <a href="mailto:jitendrasingh070903@gmail.com" className="w-12 h-12 bg-[#1a1a24] border border-[#00d4ff]/30 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
                <Mail className="w-5 h-5 text-[#00d4ff]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1a1a24] border border-[#00d4ff]/30 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
                <Linkedin className="w-5 h-5 text-[#00d4ff]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1a1a24] border border-[#00d4ff]/30 rounded-lg flex items-center justify-center hover:border-[#b624ff] hover:shadow-[0_0_20px_rgba(182,36,255,0.3)] transition-all">
                <Github className="w-5 h-5 text-[#b624ff]" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#00d4ff]/10 text-center text-gray-500 text-sm">
            <p>© 2026 Jitendra Singh Rawal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}