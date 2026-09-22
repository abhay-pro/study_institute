import { CheckCircle2, ChevronRight, Clock, Search } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { appConfig, getSkillName } from "./appConfig";

export default function Courses({
	skills,
	categories,
	selectedCategory,
	searchQuery,
	onCategoryChange,
	onSearchChange,
	onEnquire,
}) {
	return (
		<section id="skills" className="py-24 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="text-center max-w-3xl mx-auto mb-12">
						<div className="inline-flex px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
							EXPLORE COURSES
						</div>
						<h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight mb-4">
							Interactive{" "}
							<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								Skills Showcase
							</span>
						</h2>
						<p className="text-slate-400 text-sm sm:text-base">
							All technologies & tools listed on the {appConfig.shortName} {appConfig.location} banner.
							Search or filter by topic.
						</p>
					</div>
				</ScrollReveal>
				<ScrollReveal delay={0.1}>
					<div className="mb-10 space-y-6">
						<div className="max-w-md mx-auto relative">
							<Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
							<input
								type="text"
								placeholder={`Search course e.g. ${appConfig.courseSearchExamples.map(getSkillName).join(", ")}...`}
								value={searchQuery}
								onChange={(e) => onSearchChange(e.target.value)}
								className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl pl-11 pr-16 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
							/>
							{searchQuery && (
								<button
									onClick={() => onSearchChange("")}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
								>
									Clear
								</button>
							)}
						</div>
						<div className="flex items-center justify-center flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => onCategoryChange(category)}
									className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedCategory === category ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20" : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</ScrollReveal>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<ScrollReveal key={skill.id} delay={index * 0.05} yOffset={25}>
								<div className="h-full bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group">
									<div>
										<div className="flex items-center justify-between mb-4">
											<div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
												<Icon className="w-6 h-6" />
											</div>
											<span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
												{skill.badge}
											</span>
										</div>
										<h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
											{skill.name}
										</h3>
										<p className="text-xs text-slate-400 mb-4 leading-relaxed">
											{skill.description}
										</p>
										<div className="space-y-2 mb-6">
											{skill.highlights.map((item) => (
												<div
													key={item}
													className="flex items-center gap-2 text-xs text-slate-300"
												>
													<CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
													{item}
												</div>
											))}
										</div>
									</div>
									<div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
										<span className="text-xs text-slate-400 font-medium flex items-center gap-1">
											<Clock className="w-3.5 h-3.5 text-slate-500" />
											{skill.duration}
										</span>
										<button
											onClick={() => onEnquire(skill.name)}
											className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
										>
											Enquire Now
											<ChevronRight className="w-4 h-4" />
										</button>
									</div>
								</div>
							</ScrollReveal>
						);
					})}
				</div>
				{skills.length === 0 && (
					<div className="text-center py-12 text-slate-400">
						No course found matching "{searchQuery}". Try searching for another
						course.
					</div>
				)}
			</div>
		</section>
	);
}
