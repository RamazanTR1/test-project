import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import ShimmerButton from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Experience } from "@/components/Experience";
import { References } from "@/components/References";
import { Skills } from "@/components/Skills";

export default function Home() {
	return (
		<main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-background">
			{/* HERO SECTION */}
			<section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
				<AnimatedGridPattern
					numSquares={50}
					maxOpacity={0.1}
					duration={3}
					repeatDelay={1}
					className={cn(
						"mask-[radial-gradient(700px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
					)}
				/>

				<div className="z-10 flex flex-col items-center text-center gap-8 px-4 max-w-4xl mt-[-50px]">
					<div className="space-y-4">
						<h2 className="text-lg md:text-xl font-medium text-primary tracking-widest uppercase animate-pulse">
							Hello, I&apos;m
						</h2>
						<h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground bg-clip-text  bg-linear-to-b from-white to-white/50 drop-shadow-2xl">
							Yusuf İhsan Gül
						</h1>
						<div className="flex flex-col md:flex-row items-center justify-center gap-2 text-2xl md:text-4xl font-light text-muted-foreground">
							<span>I am a</span>
							<WordRotate
								className="font-semibold text-primary"
								words={[
									"Co-Founder & CTO",
									"Software Developer",
									"Game Developer",
									"Computer Engineer",
									"Tech Leader",
								]}
							/>
						</div>
					</div>

					<p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						I simplify complex problems and focus on solutions. Turning ideas
						into reality through code is my passion. Leading innovation at{" "}
						<span className="text-foreground font-medium">
							Plan B Animation
						</span>{" "}
						and{" "}
						<span className="text-foreground font-medium">Gedik Hydra AI</span>.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mt-4">
						<ShimmerButton className="shadow-2xl">
							<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
								Download CV
							</span>
							<Download className="w-4 h-4 ml-2" />
						</ShimmerButton>

						<a href="mailto:contact@yusufihsangul.com" className="group">
							<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
								Contact Me
								<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
							</button>
						</a>
					</div>

					{/* Social Links */}
					<div className="flex gap-6 mt-8 text-muted-foreground">
						<a href="#" className="hover:text-primary transition-colors">
							<Github className="w-6 h-6" />
						</a>
						<a href="#" className="hover:text-primary transition-colors">
							<Linkedin className="w-6 h-6" />
						</a>
						<a href="#" className="hover:text-primary transition-colors">
							<Mail className="w-6 h-6" />
						</a>
					</div>
				</div>
			</section>

			{/* SECTIONS */}
			<div className="w-full bg-background z-20 space-y-24 pb-24">
				<Experience />
				<Skills />
				<References />
			</div>

			{/* FOOTER */}
			<footer className="w-full py-8 text-center text-muted-foreground border-t border-white/10">
				<p>© 2025 Yusuf İhsan Gül. Built with Next.js & Magic UI.</p>
			</footer>
		</main>
	);
}
