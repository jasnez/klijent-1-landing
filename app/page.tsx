export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-purple-400">Webora</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            AI-Powered Web Development Agency
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We create stunning, high-performance websites and landing pages
            powered by cutting-edge AI technology. Transform your digital
            presence with Webora.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="mailto:hello@webora.ba"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>

        <div id="services" className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Landing Pages
            </h3>
            <p className="text-gray-300">
              High-converting landing pages designed to capture leads and drive
              sales.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-3">Web Design</h3>
            <p className="text-gray-300">
              Beautiful, modern designs that make your brand stand out.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              AI Integration
            </h3>
            <p className="text-gray-300">
              Leverage AI to create smarter, more engaging user experiences.
            </p>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with us today
          </p>
          <a
            href="mailto:hello@webora.ba"
            className="text-purple-400 hover:text-purple-300 text-lg font-semibold"
          >
            hello@webora.ba
          </a>
        </div>
      </div>
    </main>
  );
}
