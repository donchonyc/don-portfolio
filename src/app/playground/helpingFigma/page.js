import Link from "next/link";

export default function HelpingFigma() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Fixed header */}
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

      <main className="pt-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              Helping Figma's New UI
            </h1>
            <div className="pt-32 grid md:grid-cols-2 gap-12">
              {/* Left Column: Project Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Project Type
                  </p>
                  <p className="text-xl">Personal Project</p>
                </div>
                <div>
                  <p className="pt-16 text-sm text-gray-500 uppercase tracking-wide">
                    Role
                  </p>
                  <p className="text-xl">UI Designer</p>
                </div>
              </div>
              {/* Right Column: Description */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I referred to Figma's help doc when transitioning to UI3 and
                  felt the visual layouts were inconvenient for me to look at
                  from my phone. Its current structure lacks mobile-friendly
                  layouts to clearly differentiate between old and redesigned
                  features. That's why I redesigned the layout for a mobile
                  setup.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Challenge
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl">
                  How can we make Figma's help docs more mobile-friendly, so
                  Figma users can easily spot what's new and transition to the
                  redesign, UI3, from UI2?
                </p>
              </div>
            </div>
          </section>

          {/* Image Placeholder Section */}
          <section className="mb-16">
            <div
              className="h-96 md:h-[600px] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                         rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xl">Image Placeholder</span>
              </div>
            </div>
          </section>

          {/* Prototypes Section */}
          <section className="space-y-12 mb-16 max-w-dvw/2 justify-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Prototype 1:</h3>
              <p className="text-lg text-gray-700 r w-64 p-4 whitespace-normal">
                Place old and redesigned images side by side for direct
                comparison. While using an arrow icon to indicate changes or
                adding a bounding box around the images is an option, displaying
                both UI components together might overwhelm users with too much
                information at once.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Prototype 2:</h3>
              <p className="text-lg text-gray-700 text-center">
                Use consistent display like the image shown below (bounding box
                within a grey background), and place the old and redesigned UI
                panels top and bottom. Have a caption that clearly marks the
                upper image as UI2 and the lower image as UI3 to avoid any
                confusion. Write the title of the UI panel feature on the top
                and the change below the images.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Final Prototype:
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Respect the aspect ratio of vertical and horizontal UI panels.
                Since there are two different aspect ratios, I have presented
                three display options as shown below. In addition, I included
                the "old/ redesign" text within the grey bounding box to save
                space.
              </p>
            </div>
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
