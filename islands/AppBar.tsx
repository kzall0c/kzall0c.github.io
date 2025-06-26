import { Icon, loadIcon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

// preload icons
loadIcon("fa6-brands:dev");
loadIcon("ri:dice-line");

function toggleTheme(themes: string[]) {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  // assign a random theme except the current one
  const filteredThemes = themes.filter((t) => t !== theme);
  const randomTheme = filteredThemes[Math.floor(Math.random() * themes.length)];

  html?.setAttribute("data-theme", randomTheme);
  localStorage.setItem("theme", randomTheme);
}
export default function AppBar() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    axios.get("/api/themes").then((res) => {
      setThemes(res.data);
    });
  }, []);

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/kzall0c",
      icon: "fa-brands:github",
    },
    {
      name: "Linux Kernel Mailing List",
      url: "https://lore.kernel.org/all/?q=Yunseong",
      icon: "fa-brands:linux",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yunseong-kim-linux-kernel",
      icon: "fa-brands:linkedin",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@linux-kernel-contribute",
      icon: "fa-brands:youtube",
    },
    {
      name: "E-Mail",
      url: "mailto:ysk@kzalloc.com",
      icon: "line-md:email-arrow-right-filled",
    },
  ];

  return (
    <nav class="flex justify-between items-center p-2">
      <a href="/" class="text-xl font-bold flex items-center">
        <Icon
          icon="fa6-brands:dev"
          width="none"
          height="none"
        />
        Portfolio
      </a>

      <ul class="flex gap-2">
        <li>
          <a
            class="btn btn-primary text-base-100"
            href="/cv.pdf"
            download
          >
            Download CV
          </a>
        </li>

        <li>
          <button
            class="btn"
            aria-label="change Theme"
            onClick={() => toggleTheme(themes)}
          >
            <Icon
              class="active:animate-spin"
              icon="ri:dice-line"
              width="none"
              height="none"
            />
          </button>
        </li>

        <li>
          {socials.map((social) => (
            <a
              class="btn btn-outline-primary"
              href={social.url}
              target="_blank"
              aria-label={social.name}
            >
              <Icon icon={social.icon} width="none" height="none" />
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
