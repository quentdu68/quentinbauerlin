import Background from "./components/Background";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      {/* Autres composants ici */}
      <h1 className="text-white text-3xl text-center relative z-10">Mon Portfolio</h1>
    </div>
  );
}

export default App;
