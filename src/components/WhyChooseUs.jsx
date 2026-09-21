import { Briefcase, Laptop, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
	[
		"100% Practical Lab Focus",
		"Every student gets dedicated computer access during lab hours. Perform real coding, DB queries, or Tally voucher entries under faculty supervision.",
		Laptop,
		"text-cyan-400",
		"bg-cyan-500/10",
	],
	[
		"Placement Assistance",
		"We assist students with resume creation, mock interviews, and connect top performers with companies across Kolkata & IT Parks.",
		Briefcase,
		"text-teal-400",
		"bg-teal-500/10",
	],
	[
		"Experienced Faculties",
		"Learn directly from IT professionals with years of development and domain experience in software engineering and accounting.",
		ShieldCheck,
		"text-blue-400",
		"bg-blue-500/10",
	],
];

export default function WhyChooseUs() {
	return (
		<section
			id="why-us"
			className="py-20 bg-slate-900/40 border-t border-slate-800/60 relative"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="inline-flex px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
							OUR ADVANTAGE
						</div>
						<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
							Why Students in Barrackpore{" "}
							<span className="text-cyan-400">Trust BAIT</span>
						</h2>
					</div>
				</ScrollReveal>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{reasons.map(
						([title, description, Icon, color, background], index) => (
							<ScrollReveal key={title} delay={(index + 1) * 0.1}>
								<div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-colors">
									<div
										className={`p-3 w-fit rounded-xl ${background} ${color}`}
									>
										<Icon className="w-7 h-7" />
									</div>
									<h3 className="text-lg font-bold text-slate-100">{title}</h3>
									<p className="text-xs text-slate-400 leading-relaxed">
										{description}
									</p>
								</div>
							</ScrollReveal>
						),
					)}
				</div>
			</div>
		</section>
	);
}
