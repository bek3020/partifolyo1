import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const projects = [
  {
    title: "GREEN SHOP",
    tech: "React · Tailwind CSS",
    desc: "Modern e-commerce landing page for plant shops.",
    img: "/img/card_1.png",
    github: "https://github.com/bek3020/green_shop",
    live: "https://green-shop-mu.vercel.app/",
  },
  {
    title: "Britlex",
    tech: "React · Tailwind CSS",
    desc: "Educational landing page for language learning platforms.",
    img: "/img/card_2.png",
    github: "https://github.com/bek3020/Britlex",
    live: "https://britlex-indol.vercel.app/",
  },
  {
    title: "AKHMAD EARN",
    tech: "HTML · CSS · Node.js",
    desc: "Simple earning platform interface with backend integration.",
    img: "/img/card_3.png",
    github: "https://github.com/bek3020/prayekt",
    live: "https://prayekt-five.vercel.app/",
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js"],
  Styling: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap"],
  Tools: ["Git", "Figma", "VS Code"],
};

export default function Page() {
  return (
    <main className="bg-[#2a2d31] text-[#bfc6cc]">





      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[1fr_420px] items-center">
          <div>
            <p className="font-mono text-sm mb-3">Behruz Esomurodov</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white font-mono mb-4">
              I’m a <span className="text-[#b468e6]">youtuber</span> and{" "}
              <span className="text-[#b468e6]">front-end developer</span>
            </h1>
            <p className="text-white/70 mb-6 max-w-xl">
              I build responsive and modern web interfaces where design meets
              clean code.
            </p>
            <a
              href="#contacts"
              className="inline-block px-6 py-3 border border-[#b468e6] rounded hover:bg-[#b468e6]/10 transition"
            >
              Contact me
            </a>
          </div>

          <div className="relative mx-auto">
            <Image
              src="/img/bacround.png"
              alt="Portfolio hero"
              width={420}
              height={420}
              priority
              className="grayscale rounded-lg"
            />
            <div className="absolute -bottom-3 left-0 border border-white/10 px-3 py-2 text-sm flex gap-2 bg-[#2a2d31]">
              <span className="w-3 h-3 bg-[#b468e6]" />
              Currently working on <b>Portfolio</b>
            </div>
          </div>
        </div>
      </section>





      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-mono text-3xl mb-8">
            <span className="text-[#C778DD]">#</span>projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-[#292b2d] border border-white/5 rounded overflow-hidden"
              >
                {/* BU YERDA WIDTH VA HEIGHT QO'SHILDI */}
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={200}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <p className="text-xs text-gray-400">{p.tech}</p>
                  <h3 className="text-white font-mono text-xl mt-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">{p.desc}</p>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-[#b468e6] px-3 py-1 rounded hover:bg-[#b468e6]/10 transition"
                    >
                      Github
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-[#b468e6] px-3 py-1 rounded hover:bg-[#b468e6]/10 transition"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-mono text-3xl mb-10">
            <span className="text-[#C778DD]">#</span>skills


            

            

            

          </h2>

          <div className="flex flex-wrap gap-4">
            {Object.entries(skills).map(([title, list]) => (
              <div
                key={title}
                className="border border-gray-500 rounded p-4 font-mono text-sm min-w-[240px]"
              >
                <p className="font-semibold mb-2">{title}</p>
                {list.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* About Me Section */}
      <section id="about-me" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-mono text-3xl mb-4">
              <span className="text-[#C778DD]">#</span>about-me
            </h2>
            <p className="text-white/70 mb-4">
              I’m a self-taught front-end developer passionate about clean UI,
              performance, and modern web technologies.
            </p>
            <p className="text-white/60">
              I enjoy building real projects and constantly improving my skills.
            </p>


            

            

            

          </div>

          <Image
            src="/img/bac.png"
            alt="About me"
            width={500}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">
          <div className="border border-gray-600 p-6 rounded max-w-md">
            I’m open to freelance opportunities. Feel free to reach out if you
            want to work together.
          </div>



          <div className="border border-gray-600 p-6 rounded flex flex-col space-y-2">
            <p className="font-semibold text-white">Message me</p>
            <a
              href="mailto:esomurodovbehruz19@gmail.com"
              className="hover:text-[#b468e6]"
            >
              esomurodovbehruz19@gmail.com
            </a>
            <p>
              Tel:{" "}
              <a href="tel:+998998682283" className="hover:text-[#b468e6]">
                +998 99 868 22 83
              </a>
            </p>
            <p>
              Telegram:{" "}
              <a
                href="https://t.me/Esomurodov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b468e6]"
              >
                @Esomurodov
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-600 py-8 text-center text-sm">
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a
            href="https://github.com/bek3020/"
            className="hover:text-[#b468e6] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/behruz-esomurodov-12188531b/"
            className="hover:text-[#b468e6] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/behruz_js/"
            className="hover:text-[#b468e6] transition"
          >
            <FaInstagram />
          </a>
        </div>
        Built by <b>Behruz Esomurodov</b> — 2026
      </footer>
    </main>
  );
}
