<kbd><img src="static/img/readme.png" alt="portfolio hero section"/></kbd>

This is an open source developer portfolio made using
[ThreeJS](https://threejs.org/) and [denoland fresh](https://fresh.deno.dev/).
The project has an MIT license which is a permissive software license. You may
use, copy, modify, merge publish, distribute, sublicense and sell copies of this
software without monetary cost.

## Usage

If you’d like to showcase your work and skills using this website as your own
portfolio page, follow these simple steps:

#### 1. Fork the repository

- Start by
  [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
  this repository to your GitHub account. It’s a quick process – just click the
  “Fork” button at the top right of this page.
- This will create a copy of the repository under your account.

#### 2. Deploy with Deno

- Deploying your portfolio (for free) is a breeze with
  [Deno Deploy](https://deno.com/deploy). If you’re new to this, don’t worry!
  Check out the
  [Deployment Guide](https://fresh.deno.dev/docs/getting-started/deploy-to-production)
  in the
  [denoland fresh documentation](https://fresh.deno.dev/docs/introduction) for
  step-by-step instructions.
- Once deployed, your portfolio will be accessible to the world!

## Setting Up Locally

1. Clone this project `git clone https://github.com/kzall0c/kzall0c.github.io`
2. [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation)
   (if you havent already)
3. Navigate to the cloned directory `cd kzall0c.github.io`
4. Start the development server by executing `deno task start`

## Configuration

Your portfolio should reflect your unique style and achievements. Here’s how you
can customize it:

- Most of the displayed content can be found in the `routes` directory,
  specifically in `_app.tsx` and `index.tsx`.
- To update your work experience, skills, or any other information, head to the
  relevant sections in `index.tsx`.
- Information about your social links, credentials and metadata can be
  configured inside of `_app.tsx`.

> Dont forget to replace the sample CV with your own under `static/cv.pdf`.

#### Example

To change your Work expierience simply update the provided array found inside of
the `Experience` function under `routes/index.tsx`. The page section should
generate automatically.

```ts
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
    }
  ];
```
