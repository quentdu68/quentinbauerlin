import React from 'react';

function Projects() {
    return (
        <div className="mt-8 px-4">
            <h3 className="text-3xl font-bold text-red-600">Mes Projets</h3>
            <p className="max-w-3xl text-lg text-justify leading-relaxed mt-4">
                Voici quelques projets intéressants que j'ai réalisés durant mon doctorat...
            </p>
            {/* Exemple de projet */}
            <div className="mt-6">
                <h4 className="text-xl font-semibold">Projet 1 : Développement de nouveaux matériaux</h4>
                <p className="text-lg mt-2">Ce projet consistait à développer des matériaux innovants pour des applications de stockage d'énergie...</p>
            </div>
        </div>
    );
}

export default Projects;
