import { Award, Building2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-slate-900/40 relative border-t border-slate-800/60"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<ScrollReveal yOffset={40}>
						<div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-8 border border-slate-700/60 shadow-2xl space-y-6 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
							<div className="flex items-center gap-3">
								<Building2 className="w-8 h-8 text-cyan-400" />
								<div>
									<h3 className="text-xl font-bold text-slate-100">
										Barrackpore's Premier Tech Hub
									</h3>
									<p className="text-xs text-slate-400">
										Located near Station for easy commuting
									</p>
								</div>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed">
								Barrackpore Academy of Information Technology (BAIT) was
								established to bridge the gap between academic education and
								industry standards. We specialize in software programming, web
								development, mobile app development, computerized finance, and
								database engineering.
							</p>
							<div className="grid grid-cols-2 gap-4 pt-2">
								{[
									"ISO Certified Institute",
									"1-on-1 PC Practice",
									"Flexible Batch Timing",
									"Affordable Course Fees",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-2 text-xs font-semibold text-slate-300"
									>
										<CheckCircle2 className="w-4 h-4 text-cyan-400" />
										{item}
									</div>
								))}
							</div>
						</div>
					</ScrollReveal>
					<ScrollReveal delay={0.2} yOffset={40}>
						<div className="space-y-6">
							<div className="inline-flex px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold">
								OVERVIEW
							</div>
							<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
								Empowering Students with{" "}
								<span className="text-cyan-400">Real Practical Experience</span>
							</h2>
							<p className="text-slate-300 leading-relaxed">
								Unlike traditional theory-heavy classes, BAIT focuses on
								project-based learning. Whether you are learning Python, Java,
								Tally Prime, or SAP, you get live hands-on exercise files,
								assignment reviews, and mock interview guidance.
							</p>
							<div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
								<div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
									<Award className="w-6 h-6" />
								</div>
								<div>
									<h4 className="font-bold text-slate-200 text-sm">
										Industry Standard Certificate
									</h4>
									<p className="text-xs text-slate-400 mt-1">
										Receive recognized certifications upon course completion to
										boost your resume and LinkedIn profile.
									</p>
								</div>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
