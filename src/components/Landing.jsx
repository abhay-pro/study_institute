import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  Star,
  Send,
  MapPin,
  Mail,
  Clock,
  Search,
  ChevronRight,
  Menu,
  X,
  Code,
  Smartphone,
  Calculator,
  Database,
  Laptop,
  Sparkles,
  Plus,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Building2,
  ThumbsUp,
  Filter
} from 'lucide-react';

// Easily customizable site configuration
export const BAIT_CONFIG = {
  instituteName: "Barrackpore Academy of Information Technology",
  shortName: "BAIT Academy",
  tagline: "Empowering Minds with Practical IT & Professional Skills",
  phone: "+91 98301 23456",
  whatsappNumber: "919830123456",
  email: "info@baitacademy.in",
  address: "45/1 Station Road, Opposite Railway Gate No. 2, Barrackpore, Kolkata - 700120",
  established: "2012",
  stats: {
    studentsTrained: "15,000+",
    placementRate: "95%",
    expertTrainers: "25+",
    labComputers: "120+"
  },
  // All Banner Skills & Core Courses
  skills: [
    {
      id: "python",
      name: "Python Programming",
      category: "Software & Web",
      icon: Code,
      duration: "3 Months",
      badge: "Popular",
      description: "Master Data Structures, OOPs, Automation scripts, and Web Development basics using Python.",
      highlights: ["Core & Advanced Python", "Django / Flask Intro", "Data Analytics Basics", "Live Project"]
    },
    {
      id: "cpp",
      name: "C & C++ Programming",
      category: "Software & Web",
      icon: Code,
      duration: "3 Months",
      badge: "Foundation",
      description: "Build robust programming fundamentals, memory management, and algorithm development.",
      highlights: ["Logic Building", "Pointers & Arrays", "OOP Concepts", "Problem Solving"]
    },
    {
      id: "java",
      name: "Java Enterprise Dev",
      category: "Software & Web",
      icon: Code,
      duration: "4 Months",
      badge: "In Demand",
      description: "Comprehensive Java training from basic syntax to enterprise OOPs and Database Connectivity.",
      highlights: ["Core Java & Threads", "JDBC & Hibernate", "Spring Boot Intro", "Project Work"]
    },
    {
      id: "react",
      name: "ReactJS Web Frontend",
      category: "Software & Web",
      icon: Laptop,
      duration: "2.5 Months",
      badge: "Trending",
      description: "Build dynamic, fast single-page modern web applications with React Hooks & Redux.",
      highlights: ["JSX & Components", "State & Context API", "Tailwind Integration", "Real-World Apps"]
    },
    {
      id: "angular",
      name: "Angular Framework",
      category: "Software & Web",
      icon: Laptop,
      duration: "3 Months",
      badge: "Corporate",
      description: "TypeScript based modern web application architecture for scalable frontends.",
      highlights: ["TypeScript Mastery", "RxJS & Services", "Routing & Forms", "Enterprise Apps"]
    },
    {
      id: "android",
      name: "Android App Development",
      category: "Mobile Apps",
      icon: Smartphone,
      duration: "4 Months",
      badge: "Mobile",
      description: "Create native Android applications with Kotlin, Material Design, and Firebase backend.",
      highlights: ["Kotlin Fundamentals", "UI Components", "REST API Sync", "Play Store Deploy"]
    },
    {
      id: "ios",
      name: "iOS App Development",
      category: "Mobile Apps",
      icon: Smartphone,
      duration: "4 Months",
      badge: "Specialized",
      description: "Build sleek iOS apps with Swift and SwiftUI framework for Apple ecosystem.",
      highlights: ["Swift & SwiftUI", "iOS Navigation", "CoreData Basics", "App Store Guidelines"]
    },
    {
      id: "tally",
      name: "Tally Prime with GST",
      category: "Finance & ERP",
      icon: Calculator,
      duration: "2 Months",
      badge: "Job Ready",
      description: "Complete computerized accounting software training with e-Filing & GST compliance.",
      highlights: ["Voucher Entries", "GST Calculation & Returns", "Inventory Management", "Payroll"]
    },
    {
      id: "sap",
      name: "SAP (FICO & MM Modules)",
      category: "Finance & ERP",
      icon: Calculator,
      duration: "4 Months",
      badge: "High Pay",
      description: "Enterprise resource planning mastery for Financial Accounting and Materials Management.",
      highlights: ["General Ledger", "Accounts Payable/Receivable", "Procurement Cycle", "SAP System Hands-on"]
    },
    {
      id: "oracle",
      name: "Oracle Database & PL/SQL",
      category: "Databases",
      icon: Database,
      duration: "3 Months",
      badge: "Essential",
      description: "Master enterprise database architecture, complex querying, triggers, and stored procedures.",
      highlights: ["RDBMS Concepts", "PL/SQL Programming", "Performance Tuning", "Backup & Recovery"]
    },
    {
      id: "mysql",
      name: "MySQL & Relational DBs",
      category: "Databases",
      icon: Database,
      duration: "2 Months",
      badge: "Core",
      description: "Learn web database design, SQL querying, indexing, and normalized database architecture.",
      highlights: ["SQL Queries & Joins", "Normalization", "Stored Procedures", "Integration with Web Apps"]
    },
    {
      id: "msoffice",
      name: "MS Office & Advanced Excel",
      category: "Office Tools",
      icon: Laptop,
      duration: "2 Months",
      badge: "Beginner Friendly",
      description: "Master Word, PowerPoint, and Advanced Excel formulas, Pivot tables, and VBA Macros.",
      highlights: ["VLOOKUP / XLOOKUP", "Pivot Tables & Charts", "PowerPoint Deck Creation", "Office Automation"]
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Ayan Mukhopadhyay",
      course: "Python & ReactJS",
      rating: 5,
      date: "2 weeks ago",
      comment: "BAIT Barrackpore transformed my career! The practical hands-on coding sessions and lab guidance helped me crack my first tech interview within a month of completion."
    },
    {
      id: 2,
      name: "Priya Banerjee",
      course: "Tally Prime & SAP FICO",
      rating: 5,
      date: "1 month ago",
      comment: "Best accounting institute in Barrackpore. Faculty explained GST filing step-by-step with live company bills. Got placed in a local CA firm quickly!"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      course: "Android & Java",
      rating: 5,
      date: "2 months ago",
      comment: "Faculty members are super patient. The lab facility is top-class with high speed internet. Special thanks to the placement coordinator!"
    }
  ]
};

// Reusable Framer Motion Wrapper for Hidden -> Visible Scroll Animation
const ScrollReveal = ({ children, className = "", delay = 0, yOffset = 30 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  // Navigation & UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryModalCourse, setEnquiryModalCourse] = useState(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState(BAIT_CONFIG.reviews);

  // Form States
  const [newReview, setNewReview] = useState({ name: "", course: "Python Programming", rating: 5, comment: "" });
  const [enquiryForm, setEnquiryForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
  };

  // Filter skills based on Category & Search query
  const filteredSkills = BAIT_CONFIG.skills.filter(skill => {
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "Software & Web", "Mobile Apps", "Finance & ERP", "Databases", "Office Tools"];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      showToast("Please fill in your name and review message!");
      return;
    }
    const createdReview = {
      id: Date.now(),
      name: newReview.name,
      course: newReview.course,
      rating: Number(newReview.rating),
      date: "Just now",
      comment: newReview.comment
    };
    setUserReviews([createdReview, ...userReviews]);
    setNewReview({ name: "", course: "Python Programming", rating: 5, comment: "" });
    setReviewModalOpen(false);
    showToast("Thank you! Your review has been added successfully.");
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) {
      showToast("Please provide your name and phone number!");
      return;
    }
    setEnquiryModalCourse(null);
    setEnquiryForm({ name: "", phone: "", email: "", course: "", message: "" });
    showToast("Enquiry Sent! Our Barrackpore representative will call you shortly.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 bg-cyan-500 text-slate-950 font-semibold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-cyan-300"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GLASSMORPHISM STICKY NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-slate-950/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                BAIT <span className="text-cyan-400 text-xs px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">ACADEMY</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Barrackpore • Estd. 2012</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">About BAIT</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Skills & Courses</a>
            <a href="#why-us" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Why Choose Us</a>
            <a href="#reviews" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Student Reviews</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Contact Us</a>
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BAIT_CONFIG.phone}`}
              className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 text-xs font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BAIT_CONFIG.whatsappNumber}?text=Hi%20BAIT%20Academy,%20I%20want%20to%20know%20more%20about%20courses.`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 py-2 border-b border-slate-800/60 font-medium hover:text-cyan-400"
              >
                About BAIT
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 py-2 border-b border-slate-800/60 font-medium hover:text-cyan-400"
              >
                Skills & Banner Courses
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 py-2 border-b border-slate-800/60 font-medium hover:text-cyan-400"
              >
                Why Choose Us
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 py-2 border-b border-slate-800/60 font-medium hover:text-cyan-400"
              >
                Student Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 py-2 font-medium hover:text-cyan-400"
              >
                Contact Us
              </a>

              <div className="pt-3 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BAIT_CONFIG.phone}`}
                  className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${BAIT_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Admission Open Badge */}
            <ScrollReveal yOffset={20}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/50">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Admissions Open for New Batches in Barrackpore</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-slate-100 mb-6">
                Barrackpore Academy of <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                  Information Technology
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Master job-ready IT skills with 100% practical lab practice. From <strong className="text-cyan-400 font-semibold">Python, React, Android</strong> to <strong className="text-teal-300 font-semibold">Tally Prime & SAP</strong>.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#skills"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Courses</span>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 font-semibold text-base hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Free Demo Class</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>

            {/* Key Highlight Metrics */}
            <ScrollReveal delay={0.4} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{BAIT_CONFIG.stats.studentsTrained}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Students Trained</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">{BAIT_CONFIG.stats.placementRate}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Placement Assistance</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">{BAIT_CONFIG.stats.expertTrainers}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Expert Faculty</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">12+ Years</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Excellence in Barrackpore</div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ABOUT BAIT SECTION */}
      <section id="about" className="py-20 bg-slate-900/40 relative border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <ScrollReveal yOffset={40}>
              <div className="relative">
                <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-8 border border-slate-700/60 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Barrackpore's Premier Tech Hub</h3>
                      <p className="text-xs text-slate-400">Located near Station for easy commuting</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Barrackpore Academy of Information Technology (BAIT) was established to bridge the gap between academic education and industry standards. We specialize in software programming, web development, mobile app development, computerized finance, and database engineering.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>ISO Certified Institute</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>1-on-1 PC Practice</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Flexible Batch Timing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Affordable Course Fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={40}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold">
                  <span>OVERVIEW</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                  Empowering Students with <span className="text-cyan-400">Real Practical Experience</span>
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Unlike traditional theory-heavy classes, BAIT focuses on project-based learning. Whether you are learning Python, Java, Tally Prime, or SAP, you get live hands-on exercise files, assignment reviews, and mock interview guidance.
                </p>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm">Industry Standard Certificate</h4>
                    <p className="text-xs text-slate-400 mt-1">Receive recognized certifications upon course completion to boost your resume and LinkedIn profile.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SKILLS & COURSES SHOWCASE (FROM BANNER) */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
                <span>EXPLORE COURSES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight mb-4">
                Interactive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills Showcase</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                All technologies & tools listed on the BAIT Barrackpore banner. Search or filter by topic.
              </p>
            </div>
          </ScrollReveal>

          {/* Search Bar & Category Filters */}
          <ScrollReveal delay={0.1}>
            <div className="mb-10 space-y-6">
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search course e.g. Python, Tally, Java, React..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center justify-center flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <ScrollReveal key={skill.id} delay={idx * 0.05} yOffset={25}>
                  <div className="h-full bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group">
                    <div>
                      {/* Top Bar inside Card */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                          {skill.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Key Syllabus Bullet Points */}
                      <div className="space-y-2 mb-6">
                        {skill.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA & Duration */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {skill.duration}
                      </span>
                      <button
                        onClick={() => {
                          setEnquiryModalCourse(skill.name);
                          setEnquiryForm({ ...enquiryForm, course: skill.name });
                        }}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Enquire Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <p>No course found matching "{searchQuery}". Try searching for another course.</p>
            </div>
          )}

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-20 bg-slate-900/40 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
                <span>OUR ADVANTAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Why Students in Barrackpore <span className="text-cyan-400">Trust BAIT</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">100% Practical Lab Focus</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every student gets dedicated computer access during lab hours. Perform real coding, DB queries, or Tally voucher entries under faculty supervision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 w-fit rounded-xl bg-teal-500/10 text-teal-400">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Placement Assistance</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We assist students with resume creation, mock interviews, and connect top performers with companies across Kolkata & IT Parks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-colors">
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Experienced Faculties</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Learn directly from IT professionals with years of development and domain experience in software engineering and accounting.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* STUDENT REVIEWS SECTION */}
      <section id="reviews" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
                  <span>TESTIMONIALS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                  What Our <span className="text-cyan-400">Students Say</span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Real feedback from alumni currently working in tech and finance roles.
                </p>
              </div>

              <button
                onClick={() => setReviewModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2 shrink-0 self-start md:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Write a Student Review</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userReviews.map((rev, i) => (
              <ScrollReveal key={rev.id} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between h-full hover:border-slate-700 transition-colors">
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${
                            starIdx < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-xs text-slate-300 italic mb-6 leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">{rev.name}</h4>
                      <p className="text-[11px] text-cyan-400 font-medium">{rev.course}</p>
                    </div>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
                    <span>GET IN TOUCH</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                    Visit BAIT <span className="text-cyan-400">Barrackpore Campus</span>
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2">
                    Have questions regarding admission, course fee structure, or batch timings? Talk to our counselor today.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">Address</h4>
                      <p className="text-xs text-slate-400 mt-1">{BAIT_CONFIG.address}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                    <Phone className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">Phone Hotline</h4>
                      <p className="text-xs text-slate-400 mt-1">{BAIT_CONFIG.phone}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">Email Address</h4>
                      <p className="text-xs text-slate-400 mt-1">{BAIT_CONFIG.email}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Triggers */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={`https://wa.me/${BAIT_CONFIG.whatsappNumber}?text=Hi%20BAIT%20Barrackpore,%20I%20want%20to%20enquire%20about%20admissions.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                  <a
                    href={`tel:${BAIT_CONFIG.phone}`}
                    className="flex-1 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call Academy</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Send an Admission Enquiry</h3>
                <p className="text-xs text-slate-400 mb-6">Fill out the form and our counselor will get back to you within 24 hours.</p>

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Das"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98300XXXXX"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Interested Skill/Course</label>
                      <select
                        value={enquiryForm.course}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, course: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">Select a Course</option>
                        {BAIT_CONFIG.skills.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message or Query</label>
                    <textarea
                      rows="3"
                      placeholder="Ask about batch timings, fee installments, etc."
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ADD REVIEW MODAL */}
      <AnimatePresence>
        {reviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setReviewModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-slate-100 mb-1">Share Your Student Experience</h3>
              <p className="text-xs text-slate-400 mb-6">Your feedback helps future students in Barrackpore choose the right tech course.</p>

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anish Roy"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Course Attended</label>
                  <select
                    value={newReview.course}
                    onChange={(e) => setNewReview({ ...newReview, course: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {BAIT_CONFIG.skills.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Review Details *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="How was the lab infrastructure, faculty teaching, and guidance?"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                >
                  Post Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* QUICK COURSE ENQUIRY MODAL */}
      <AnimatePresence>
        {enquiryModalCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setEnquiryModalCourse(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-slate-100 mb-1">Quick Enquiry</h3>
              <p className="text-xs text-cyan-400 font-semibold mb-6">Course: {enquiryModalCourse}</p>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Mobile Number"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:scale-[1.01] transition-transform"
                >
                  Request Callback
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FLOATING QUICK ACTIONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${BAIT_CONFIG.whatsappNumber}?text=Hi%20BAIT%20Academy,%20I%20want%20to%20know%20about%20courses.`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950" />
        </a>
        <a
          href={`tel:${BAIT_CONFIG.phone}`}
          className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/30 hover:scale-110 transition-transform"
          title="Direct Call"
        >
          <Phone className="w-5 h-5 fill-slate-950" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <span className="font-extrabold text-slate-100 text-base">BAIT Barrackpore</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Barrackpore Academy of Information Technology - Premier Computer Training Institute since 2012.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-3">Popular Courses</h4>
              <ul className="space-y-2">
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Python & Data Analytics</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">ReactJS Web Development</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Tally Prime with GST</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">SAP FICO / MM Training</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-3">Quick Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Academy</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Banner Skills</a></li>
                <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Student Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-3">Barrackpore Address</h4>
              <p className="leading-relaxed mb-2">{BAIT_CONFIG.address}</p>
              <p className="font-medium text-slate-300">Phone: {BAIT_CONFIG.phone}</p>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {BAIT_CONFIG.instituteName}. All rights reserved.</p>
            <p className="text-slate-500">Designed for Barrackpore Tech Aspirants</p>
          </div>
        </div>
      </footer>

    </div>
  );
}