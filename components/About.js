import React from 'react';

function About() {
    return (
        <div className="mt-8 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Photo */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-red-600 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                    <img className="w-full h-full object-cover" src="https://github.com/quentdu68/quentinbauerlin/raw/ad919f38e6b8c7c5cd072c15e061754f34653e00/Images/Image1.jpg" alt="Quentin's photo" />
                </div>

                {/* About text */}
                <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-red-600">À propos de moi</h3>
                    <p className="max-w-3xl text-lg text-justify leading-relaxed">
                        Je suis passionné par la science et la recherche. Mon parcours m'a permis de m'immerger profondément dans le domaine de la chimie des matériaux...
                    </p>
                </div>
            </div>

            {/* Methods of characterization */}
            <div className="mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                <div className="w-full md:w-1/2">
                    <h4 className="text-2xl font-bold text-red-600">Méthodes de caractérisation</h4>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Fourier transform IR spectroscopy</li>
                        <li>UV-visible spectroscopy</li>
                        <li>Raman spectroscopy</li>
                        <li>TEM</li>
                        <li>SEM / EDX</li>
                        <li>DSC / TGA</li>
                        <li>DLS / Zeta potential</li>
                        <li>Rheometer (viscosity/photo-rheology)</li>
                        <li>Mechanical traction / compression</li>
                        <li>Thermal camera</li>
                        <li>XRD</li>
                        <li>AFM</li>
                        <li>HPLC</li>
                        <li>H-NMR</li>
                        <li>Electrochemistry: CV/GCPL</li>
                    </ul>
                </div>

                {/* Computer skills */}
                <div className="w-full md:w-1/2">
                    <h4 className="text-2xl font-bold text-red-600">Compétences informatiques</h4>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Pack office</li>
                        <li>Origin</li>
                        <li>Blender</li>
                        <li>ChemDraw / ChemSketch</li>
                        <li>ImageJ</li>
                        <li>COMSOL Multiphysics</li>
                        <li>Gwyddion</li>
                        <li>Zotero</li>
                        <li>Matlab</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
