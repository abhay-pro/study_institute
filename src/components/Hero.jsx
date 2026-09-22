import { BookOpen, ChevronRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { appConfig, getSkillName } from "./appConfig";

export default function Hero() {
	const stats = [
		[appConfig.stats.studentsTrained, "Students Trained", "text-cyan-400"],
		[appConfig.stats.placementRate, "Placement Assistance", "text-teal-300"],
		[appConfig.stats.expertTrainers, "Expert Faculty", "text-blue-400"],
		[`${new Date().getFullYear() - Number(appConfig.established)}+ Years`, `Excellence in ${appConfig.location}`, "text-indigo-400"],
	];
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-4xl mx-auto">
					<ScrollReveal yOffset={20}>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/50">
							<Sparkles className="w-4 h-4 animate-pulse" />
							Admissions Open for New Batches in {appConfig.location}
						</div>
					</ScrollReveal>
					<ScrollReveal delay={0.1}>
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-slate-100 mb-6">
							{appConfig.instituteName.split(" of ")[0]} of <br className="hidden sm:inline" />
							<span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
								{appConfig.instituteName.split(" of ")[1]}
							</span>
						</h1>
					</ScrollReveal>
					<ScrollReveal delay={0.2}>
						<p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
							Master job-ready IT skills with 100% practical lab practice. From{" "}
								<strong className="text-cyan-400">
									{appConfig.featuredCourseIds.slice(0, 2).map(getSkillName).join(", ")}
								</strong>{" "}
								to <strong className="text-teal-300">
									{appConfig.featuredCourseIds.slice(2).map(getSkillName).join(" & ")}
								</strong>.
						</p>
					</ScrollReveal>
					<ScrollReveal delay={0.3}>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<a
								href="#skills"
								className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all flex items-center justify-center gap-3"
							>
								<BookOpen className="w-5 h-5" />
								Explore Courses
							</a>
							<a
								href="#contact"
								className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 font-semibold text-base hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
							>
								Book Free Demo Class
								<ChevronRight className="w-5 h-5" />
							</a>
						</div>
					</ScrollReveal>
					<ScrollReveal
						delay={0.4}
						className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80"
					>
						{stats.map(([value, label, color]) => (
							<div
								key={label}
								className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm"
							>
								<div className={`text-2xl sm:text-3xl font-extrabold ${color}`}>
									{value}
								</div>
								<div className="text-xs text-slate-400 mt-1 font-medium">
									{label}
								</div>
							</div>
						))}
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
