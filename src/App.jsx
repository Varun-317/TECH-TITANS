import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TECH TITANS. Built for the future of learning.</p>
      </footer>
    </div>
  )
}

export default App
