import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative h-[78vh] md:h-[50vh] w-full">

      <Image
  src="/x10-hero.webp"
  alt="X10 After School Lacrosse"
  fill
  sizes="100vw"
  className="object-cover"
  priority
/>
<div className="absolute inset-0 bg-black/65 md:bg-black/50 flex items-center justify-center">

         <div className="text-center text-white px-6 pt-6 md:pt-10 pb-6">

            <Image
  src="/x10-logo.png"
  alt="X10 After-School Sports logo"
  width={320}
  height={320}
  className="mx-auto mb-2"
  priority
/>

            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              X10 After-School Lacrosse
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
  Building confident, active athletes through fun, structured
  after-school programs.
</p>

<div className="mt-8 flex justify-center gap-4">
  <a
    href="#programs"
    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
  >
    View Programs
  </a>
  <a
    href="#contact"
    className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
  >
    Contact Us
  </a>
</div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">What is X10?</h2>
          <p className="text-lg text-gray-700 mb-4">
            X10 After-School Sports provides high-energy, age-appropriate sports
            programs designed to help kids grow physically, mentally, and
            socially.
          </p>
          <p className="text-lg text-gray-700">
            Our focus is skill development, teamwork, confidence, and most
            importantly — fun.
          </p>
        </div>
        <Image
          src="/x10-group-field.WEBP"
          alt="Group training"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </section>

      {/* PROGRAMS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/x10-coaching.JPG"
                alt="Coaching"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Professional Coaching
              </h3>
              <p className="text-gray-700">
                Experienced coaches focused on fundamentals and positive
                development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/x10-girls-action.WEBP"
                alt="Girls sports"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Inclusive Programs
              </h3>
              <p className="text-gray-700">
                Programs for boys and girls of all skill levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/x10-huddle.jpg"
                alt="Team huddle"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Teamwork & Confidence
              </h3>
              <p className="text-gray-700">
                Building leadership, confidence, and a love for the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} X10 After-School Sports. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
