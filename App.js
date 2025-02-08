import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';

function App() {
    const [section, setSection] = useState('home');

    const handleSectionChange = (newSection) => {
        setSection(newSection);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl font-bold uppercase font-mono tracking-widest">Quentin Bauerlin</h1>
            <h2 className="text-xl font-mono text-gray-400">Docteur en Chimie des Matériaux</h2>

            <div className="flex flex-col space-y-4">
                <button onClick={() => handleSectionChange('about')} className="bg-red-600 hover:bg-red-800 px-6 py-2 text-lg uppercase font-bold border-2 border-white rounded">
                    À propos
                </button>
                <button onClick={() => handleSectionChange('projects')} className="bg-red-600 hover:bg-red-800 px-6 py-2 text-lg uppercase font-bold border-2 border-white rounded">
                    Projets
                </button>
            </div>

            <p className="text-lg font-mono mt-6">Bienvenue sur mon portfolio !</p>

            {section === 'about' && <About />}
            {section === 'projects' && <Projects />}
        </div>
    );
}

export default App;
