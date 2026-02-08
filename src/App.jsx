import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResumeAnalyzer from './components/ResumeAnalyzer'
import StudyPlanner from './components/StudyPlanner'
import MarketTrends from './components/MarketTrends'
import ScrollReveal from './components/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLaunchDashboard = () => {
    setShowDashboard(true);
    // Smooth scroll to first feature
    setTimeout(() => {
      const element = document.getElementById('resume');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
          >
            <div className="relative">
              <div className="w-24 h-24 border-t-2 border-primary rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-xl">TT</span>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-slate-400 font-bold uppercase tracking-[0.3em] text-xs"
            >
              Initializing Titan System
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar onDashboardClick={handleLaunchDashboard} />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <main className="relative z-10">
              <ScrollReveal>
                <Hero onLaunch={handleLaunchDashboard} />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <ResumeAnalyzer />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <StudyPlanner />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <MarketTrends />
              </ScrollReveal>
            </main>

            <footer className="relative z-10 py-20 border-t border-white/5 text-center text-slate-500 text-sm">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-black text-xs">TT</span>
                  </div>
                  <span className="text-lg font-black text-white tracking-widest uppercase">TECH TITANS</span>
                </div>
                <p className="text-slate-600 font-medium">&copy; {new Date().getFullYear()} TECH TITANS. Neural-powered career acceleration.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
