import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import FintechAnalytics from "./pages/FintechAnalytics"; // Our new page

// This component holds your "Single Page" portfolio content
const Home = () => (
    <>
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Contact />
    </>
);

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background font-sans text-navy-900 selection:bg-primary selection:text-white">
                <Navbar />

                <Routes>
                    {/* Main Portfolio Page */}
                    <Route path="/" element={<Home />} />

                    {/* Deep Dive Page */}
                    <Route path="/fintech-analytics" element={<FintechAnalytics />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;