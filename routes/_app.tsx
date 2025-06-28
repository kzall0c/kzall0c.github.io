import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        ${credentials.name} - Linux Kernel Developer | Full Portfolio
      </title>
      <meta
        name="title"
        content={`${credentials.name} - Linux Kernel Developer | Full Portfolio`}
      />
      <meta
        name="description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of linux opensource projects. Specializing in linux kernel security and debugging.`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} - Linux Kernel Developer | Full Portfolio`}
      />
      <meta
        property="og:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of linux opensource projects. Specializing in linux kernel security and debugging.`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.png`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${url}`} />
      <meta
        property="twitter:title"
        content={`${credentials.name} - Linux Kernel Developer | Full Portfolio`}
      />
      <meta
        property="twitter:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of linux opensource projects. Specializing in linux kernel security and debugging.`}
      />
      <meta
        property="twitter:image"
        content={`${url}meta-image.png`}
      />

      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}

export default function App({ Component }: PageProps) {
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
      url: "https://www.youtube.com/@linux-kernel-contributor",
      icon: "fa-brands:youtube",
    },
    {
      name: "E-Mail",
      url: "mailto:ysk@kzalloc.com",
      icon: "line-md:email-arrow-right-filled",
    },
  ];

  const credentials = {
    name: "Yunseong Kim",
  };

  const url = "https://opensource-portfolio.deno.dev/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>Developer Portfolio | {credentials.name}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <header>
          <AppBar />
        </header>
        <main>
          <Component />
        </main>
        <footer class="mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <aside>
            <span>MIT licensed with ❤️ by Michael</span>
            <span>
              3D Art by{" "}
              <a
                class="underline"
                href="https://sketchfab.com/andycuccaro"
                target="_blank"
              >
                Andy Cuccaro
              </a>
            </span>
          </aside>
          <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="24" height="24" />
              </a>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
