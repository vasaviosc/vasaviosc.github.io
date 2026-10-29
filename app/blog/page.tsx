import Link from "next/link";

const resourceSections = [
  {
    id: "getting-started",
    title: "Start Contributing",
    description:
      "New to open source? Start here and learn how to make your first contribution.",
    resources: [
      {
        name: "First Contributions",
        description:
          "Practice the complete GitHub workflow by making your first pull request.",
        url: "https://github.com/firstcontributions/first-contributions",
        type: "Beginner",
      },
      {
        name: "GitHub Skills",
        description:
          "Learn GitHub through practical, interactive exercises.",
        url: "https://skills.github.com/",
        type: "Hands-on Learning",
      },
      {
        name: "Open Source Guides",
        description:
          "Understand how open source works and how to participate in projects.",
        url: "https://opensource.guide/",
        type: "Guides",
      },
      {
        name: "Good First Issue",
        description:
          "Discover projects with issues intended to help newcomers get started.",
        url: "https://goodfirstissue.dev/",
        type: "Find Issues",
      },
    ],
  },
  {
    id: "explore-projects",
    title: "Explore Real Projects",
    description:
      "Explore established open-source repositories across different technologies.",
    resources: [
      {
        name: "freeCodeCamp",
        description:
          "Explore a large open-source learning platform built around programming education.",
        url: "https://github.com/freeCodeCamp/freeCodeCamp",
        type: "Web Development",
      },
      {
        name: "React",
        description:
          "Explore the source code and contribution guidelines of the React library.",
        url: "https://github.com/facebook/react",
        type: "Frontend",
      },
      {
        name: "scikit-learn",
        description:
          "Explore machine learning algorithms, examples, tests, and documentation.",
        url: "https://github.com/scikit-learn/scikit-learn",
        type: "AI / ML",
      },
      {
        name: "Hugging Face Transformers",
        description:
          "Explore pretrained models, natural language processing, and machine learning tools.",
        url: "https://github.com/huggingface/transformers",
        type: "AI / NLP",
      },
      {
        name: "OWASP Juice Shop",
        description:
          "Explore an intentionally vulnerable application designed for security education.",
        url: "https://github.com/juice-shop/juice-shop",
        type: "Cybersecurity",
      },
      {
        name: "Kubernetes",
        description:
          "Explore the open-source container orchestration project and its development.",
        url: "https://github.com/kubernetes/kubernetes",
        type: "Cloud / DevOps",
      },
    ],
  },
  {
    id: "developer-toolkit",
    title: "Developer Toolkit",
    description:
      "Essential documentation to help you work with repositories and collaborate effectively.",
    resources: [
      {
        name: "Git Documentation",
        description:
          "Learn Git commands, branching, merging, and version control.",
        url: "https://git-scm.com/doc",
        type: "Version Control",
      },
      {
        name: "GitHub Documentation",
        description:
          "Learn about repositories, branches, issues, pull requests, and collaboration.",
        url: "https://docs.github.com/en",
        type: "GitHub",
      },
      {
        name: "Markdown Guide",
        description:
          "Learn how to write readable README files and format project documentation.",
        url: "https://www.markdownguide.org/",
        type: "Documentation",
      },
      {
        name: "GitHub Explore",
        description:
          "Discover repositories and explore projects across the GitHub ecosystem.",
        url: "https://github.com/explore",
        type: "Discover Projects",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03111f] pt-20 text-[#eafbf2]">
      {/* HERO */}
      <section className="relative border-b border-[#64ff9a]/15 px-4 py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,195,0.09),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(100,255,154,0.05),transparent_40%)]" />

        <div className="vosc-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-[#8abca1] transition-colors hover:text-[#64ff9a]"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </Link>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#64ff9a]">
            VOSC / Developer Resources
          </p>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Learn. Build. Contribute
            <span className="text-[#64ff9a]">.</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[#a4c7b2] sm:text-lg">
            A curated collection of open-source projects, contribution guides,
            and developer tools to help you start building and contributing
            to real-world software.
          </p>

          <a
            href="#getting-started"
            className="vosc-button mt-8 inline-flex items-center gap-2"
          >
            Start your journey
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* RESOURCE SECTIONS */}
      {resourceSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-[#64ff9a]/10 px-4 py-14 sm:py-16 ${
            sectionIndex === 1 ? "bg-[#061727]/50" : ""
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
                Section {String(sectionIndex + 1).padStart(2, "0")}
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {section.title}
                <span className="text-[#64ff9a]">.</span>
              </h2>

              <p className="max-w-2xl leading-7 text-[#a4c7b2]">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.resources.map((resource) => (
                <article
                  key={resource.name}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#64ff9a]/15 bg-gradient-to-br from-[#082039] to-[#03111f] transition-all duration-300 hover:-translate-y-1 hover:border-[#64ff9a]/40 hover:shadow-[0_16px_45px_rgba(100,255,154,0.07)]"
                >
                  <div className="absolute left-0 right-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#64ff9a] to-[#00e5c3] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-5 self-start rounded-full border border-[#64ff9a]/20 bg-[#64ff9a]/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#64ff9a]">
                      {resource.type}
                    </span>

                    <h3 className="mb-3 text-xl font-bold leading-snug text-[#eafbf2] transition-colors group-hover:text-[#64ff9a]">
                      {resource.name}
                    </h3>

                    <p className="mb-6 flex-1 text-sm leading-7 text-[#a4c7b2]">
                      {resource.description}
                    </p>

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-3 border-t border-[#64ff9a]/10 pt-5 font-mono text-xs font-medium uppercase tracking-wider text-[#64ff9a] transition-colors hover:text-[#00e5c3]"
                    >
                      <span>Explore Resource</span>

                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#64ff9a]/20 bg-gradient-to-br from-[#09243a] to-[#03111f] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
            Your Next Step
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Find a project. Make a contribution.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-[#a4c7b2]">
            Explore a repository, read its contribution guidelines, find an
            issue that matches your skills, and take your first step into
            open source.
          </p>

          <a
            href="https://github.com/explore"
            target="_blank"
            rel="noopener noreferrer"
            className="vosc-button inline-flex items-center gap-2"
          >
            Explore GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}