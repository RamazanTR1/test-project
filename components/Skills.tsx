import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "blender",
  "unity",
  "springboot",
  "php",
  "laravel",
  "bootstrap",
  "tailwindcss",
  "swift",
  "kotlin",
  "sass"
];

export function Skills() {
  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-4 flex flex-col items-center overflow-hidden">
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary/80">Skills & Technologies</h2>
        <p className="mt-4 text-muted-foreground">
          A vast array of tools and technologies I use to bring ideas to life.
        </p>
      </div>
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
