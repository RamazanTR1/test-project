import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  Smartphone,
  Users 
} from "lucide-react";

const features = [
  {
    Icon: Users,
    name: "Co-Founder & CTO",
    description: "Leading Plan B Animation & Game Studio. Innovation in game dev and animation pipelines.",
    href: "#",
    cta: "Jun 2025 - Present",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-1 lg:col-span-2",
  },
  {
    Icon: Globe,
    name: "Full Stack Developer",
    description: "Developing scalable web solutions at TGC Bilişim ve Yazılım A.Ş.",
    href: "#",
    cta: "Dec 2024 - Present",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-3 lg:col-span-1",
  },
  {
    Icon: Layers,
    name: "Chairman",
    description: "Disciplinary Board Chair at GGOG (Genç Girişimciler Oyun Geliştiriciler Derneği).",
    href: "#",
    cta: "May 2025 - Present",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-1 lg:col-span-1",
  },
  {
    Icon: Cpu,
    name: "Team Leader & Chair",
    description: "IEEE Computer Society Chair & Hydra AI Team Leader at Gedik University.",
    href: "#",
    cta: "Jan 2025 - Present",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-2 lg:col-span-2",
  },
  {
    Icon: Smartphone,
    name: "Full Stack & Mobile Dev",
    description: "Detsa Trafo A.Ş. - Developed Digital Twin, IK systems, and Mobile Apps.",
    href: "#",
    cta: "Jun 2024 - Jan 2025",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:col-start-1 lg:col-span-2",
  },
  {
    Icon: Code,
    name: "Full Stack Developer",
    description: "Visiosoft - Early career development and full stack experience.",
    href: "#",
    cta: "Nov 2020 - Jun 2023",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:col-start-3 lg:col-span-1",
  },
];

export async function Experience() {
  return (
    <section className="py-20 w-full max-w-6xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary/80">Experience</h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          My professional journey through leadership and development.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
