// apps/web/app/page.tsx
import { ProjectCard, Banner, SectionHeader } from "@repo/ui";

export default function HomePage() {
  return (
    <main className="space-y-24 pb-20">
      {/* 1. HERO BANNER */}
      <Banner
        title="Hi, I'm [Your Name]"
        subtitle="Full Stack Developer building apps with impact."
      />

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="container mx-auto px-6">
        <SectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title="Yueying" description="A monorepo dashboard..." tags={["Next.js", "Tailwind"]} />
          {/* More cards... */}
        </div>
      </section>

      {/* 3. APPS/TECH STACK SECTION */}
      <section id="apps" className="bg-zinc-50 py-20 dark:bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader title="My App Ecosystem" />
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Map through your icons here */}
          </div>
        </div>
      </section>

      {/* 4. ABOUT ME / EXPERIENCE */}
      <section id="about" className="container mx-auto px-6">
        {/* Bio and Timeline components go here */}
      </section>
    </main>
  );
}