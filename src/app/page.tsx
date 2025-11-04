// app/page.tsx

import Header from "@/app/components/common/Header";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-screen  from-gray-50 to-white flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Scroll Down</h2>
          <p className="text-xl text-gray-600">Box sẽ to dần lên 100%</p>
        </div>
      </div>

      {/* <VideoPinSection expandPx={1200} textRevealPx={800} releasePx={600} /> */}

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
