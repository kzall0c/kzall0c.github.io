import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "skill-icons:linux-light",
  "noto-v1:unlocked",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              `"Hello! I'm Yunseong."`,
              `"I'm passionate about contributing to open source."`,
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I am a contributor to the{" "}
          <a href="https://lore.kernel.org/all/?q=Yunseong+Kim">Linux kernel</a>
          {" "}
          and{" "}
          <a href="https://github.com/namhyung/uftrace/pulls?q=author%3Ayskelg">
            uftrace
          </a>{" "}
          open-source project.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "System Software Developer",
      company: "Ericsson",
      timePeriod: "07/2023 - Present",
      location: "Seoul, South Korea",
    },
    {
      title: "System Software Developer",
      company: "AhnLab",
      timePeriod: "01/2022 - 06/2023",
      location: "Seoul, South Korea",
    },
    {
      title: "Software Developer",
      company: "Innowireless",
      timePeriod: "8/2018 - 12/2021",
      location: "Bundang-gu, South Korea",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Linux Kernel",
      description: "Linux Kernel contributor & vulnerability researcher.",
      link:
        "https://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git/log/?qt=grep&q=Yunseong+Kim",
      type: "Open Source",
      icon: "skill-icons:linux-light",
    },
    {
      title: "Perf tools wiki.",
      description:
        "Maintaining the Linux Perf tools Wikipedia based on Markdown.",
      link: "https://perf.wiki.kernel.org/",
      type: "Open Source",
      icon: "arcticons:prtg-tools",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "skill-icons:linux-light",
    "hugeicons:c-programming",
    "solar:programming-bold",
    "arcticons:prtg-tools",
    "devicon:debian",
    "skill-icons:docker",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Publication() {
  const publications: Publication[] = [
    {
      title: "SOSS Japan 2024",
      description:
        "Presented Linux kernel CVE discovery using syzkaller: KSMBD and s390x",
      link: "https://youtu.be/nGxzzORZm1o?si=CIYCXHTadS9KSSgZ",
      type: "Open Source",
      icon: "skill-icons:linux-light",
    },
    {
      title: "DebConf24",
      description:
        "Shared practical use cases and techniques for Linux perf tools.",
      link: "https://youtu.be/RRJN8JS5xAE",
      type: "Open Source",
      icon: "skill-icons:debian-light",
    },
    {
      title: "Hackster.io",
      description:
        "Demonstrated webcam driver integration on Xilinx PetaLinux using ZYBO Z7-20 board.",
      link:
        "https://www.hackster.io/p4ranlee/zybo-z7-20-webcam-on-the-petalinux-c28709",
      type: "Open Source",
      icon: "simple-icons:hackclub",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Talks & Publications
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {publications.map((publication) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={publication.icon}
                  width="none"
                  height="none"
                />
                {publication.title}
                <span class="badge badge-ghost ml-auto">
                  {publication.type}
                </span>
              </h2>
              <p>{publication.description}</p>
              <a
                href={publication.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Publication
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const values: Value[] = [
    {
      title: "Comprehensive Debugging for Kernel Development",
      description:
        "Linux Kernel Security Module Development using QEMU, LSM, crash tools, ftrace, perf tools and Wireshark.",
      image: "/img/linux_observability_tools.png",
    },
    {
      title: "System-Level Programming with C/C++",
      description: "Strong C/C++ programming and debugging skills.",
      image: "/img/cpp_logo.png",
    },
    {
      title: "Security-Focused Fuzzing",
      description:
        "Fuzzing with syzkaller and AFL++; source control with Git; CI/CD with Jenkins; scripting with Erlang/OTP, Python, and shell scripts.",
      image: "/img/tux-cve.jpeg",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Technologies />
      <Publication />
      <Values />
    </>
  );
}
