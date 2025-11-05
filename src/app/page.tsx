import HeroSection from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            You Made It! 🎉
          </h2>
        </div>
      </div>
    </main>
  );
}
