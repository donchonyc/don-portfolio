import Link from "next/link";

export default function Breathe() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Fixed, semi-transparent header */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm shadow-md z-20">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-semibold hover:text-blue-600 transition-colors duration-300"
          >
            Don Cho
          </Link>
          <div className="hover:text-cloud/70 hover:opacity-70">
            <Link href="/resume.pdf">
              Resume{" "}
              <img
                src="/diagonal-arrow.svg"
                alt="Diagonal Arrow"
                className="w-6 h-6 inline"
              />
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title & Project Details */}
          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Mindfulness / Breathe
            </h1>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column: Project Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Agency
                  </p>
                  <p className="text-xl">Personal Project</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Role
                  </p>
                  <p className="text-xl">Product Designer</p>
                </div>
              </div>
              {/* Right Column: Description */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I don’t always wear an Apple Watch, and many people don’t own
                  one, but I always have my iPhone with me. That’s why I propose
                  creating a mindfulness app with quick breathing exercises,
                  mindful check-ins, and reflective prompts—letting iPhone users
                  experience mindfulness anytime without needing an Apple Watch.
                </p>
                <p>
                  As soon as users complete onboarding, they can dive into the
                  full experience right away—breathing exercises, settings, and
                  history are easily accessible through a one-touch interface.
                </p>
                <p>
                  The key is balancing the watch’s “glance and go” simplicity
                  with the phone’s capacity for more robust features—allowing
                  users to stay mindful quickly, intuitively, and flexibly from
                  anywhere.
                </p>
              </div>
            </div>
          </section>

          {/* Hero Section with a dynamic gradient background */}
          <section className="relative mb-16">
            <div
              className="h-96 md:h-[600px] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                         rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </section>
        </div>
      </main>

      {/* Animated gradient overlay with subtle vertical lines */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 animate-gradient-slow" />
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-white/10"
              style={{ left: `${(i + 1) * (100 / 8)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
