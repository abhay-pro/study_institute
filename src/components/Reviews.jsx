import { Plus, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Reviews({ reviews, googleReviewUrl }) {
	return (
		<section id="reviews" className="py-24 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
						<div>
							<div className="inline-flex px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
								TESTIMONIALS
							</div>
							<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
								What Our <span className="text-cyan-400">Students Say</span>
							</h2>
							<p className="text-slate-400 text-xs sm:text-sm mt-1">
								Real feedback from alumni currently working in tech and finance
								roles.
							</p>
						</div>
						<a
							href={googleReviewUrl}
							target="_blank"
							rel="noreferrer"
							className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2 shrink-0 self-start md:self-auto"
						>
							<Plus className="w-4 h-4" />
							Write a Student Review
						</a>
					</div>
				</ScrollReveal>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{reviews.map((review, index) => (
						<ScrollReveal key={review.id} delay={index * 0.1}>
							<div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between h-full hover:border-slate-700 transition-colors">
								<div>
									<div className="flex items-center gap-1 mb-4">
										{[...Array(5)].map((_, starIndex) => (
											<Star
												key={starIndex}
												className={`w-4 h-4 ${starIndex < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-700"}`}
											/>
										))}
									</div>
									<p className="text-xs text-slate-300 italic mb-6 leading-relaxed">
										&quot;{review.comment}&quot;
									</p>
								</div>
								<div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
									<div>
										<h4 className="font-bold text-sm text-slate-100">
											{review.name}
										</h4>
										<p className="text-[11px] text-cyan-400 font-medium">
											{review.course}
										</p>
									</div>
									<span className="text-[10px] text-slate-500">
										{review.date}
									</span>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
