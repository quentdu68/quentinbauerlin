import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 text-center text-3xl font-bold">Mon Portfolio</header>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >Bienvenue sur mon Portfolio</motion.h1>
        <motion.p 
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >Développeur Web | Créatif | Passionné</motion.p>
      </section>
      
      {/* About Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">À propos de moi</h2>
        <p className="mt-4">Je suis un développeur passionné par la création d'expériences web interactives.</p>
      </section>

      {/* Projects Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-lg">Projet 1</div>
          <div className="bg-gray-800 p-6 rounded-lg">Projet 2</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Email: monemail@example.com</p>
      </section>
    </div>
  );
}
