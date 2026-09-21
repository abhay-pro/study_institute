import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";
import { appConfig } from "./appConfig";

export default function Modals({
	reviewOpen,
	enquiryCourse,
	review,
	enquiry,
	onCloseReview,
	onCloseEnquiry,
	onReviewChange,
	onEnquiryChange,
	onReviewSubmit,
	onEnquirySubmit,
}) {
	return (
		<>
			<AnimatePresence>
				{reviewOpen && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
						>
							<button
								onClick={onCloseReview}
								className="absolute top-4 right-4 text-slate-400 hover:text-slate-100"
							>
								<X className="w-5 h-5" />
							</button>
							<h3 className="text-xl font-bold text-slate-100 mb-1">
								Share Your Student Experience
							</h3>
							<p className="text-xs text-slate-400 mb-6">
								Your feedback helps future students in Barrackpore choose the
								right tech course.
							</p>
							<form onSubmit={onReviewSubmit} className="space-y-4">
								<label className="block text-xs font-semibold text-slate-300">
									Your Name *
									<input
										required
										value={review.name}
										onChange={(e) => onReviewChange({ name: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<label className="block text-xs font-semibold text-slate-300">
									Course Attended
									<select
										value={review.course}
										onChange={(e) => onReviewChange({ course: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									>
										{appConfig.skills.map((skill) => (
											<option key={skill.id} value={skill.name}>
												{skill.name}
											</option>
										))}
									</select>
								</label>
								<div>
									<p className="text-xs font-semibold text-slate-300 mb-1">
										Rating
									</p>
									<div className="flex items-center gap-2">
										{[1, 2, 3, 4, 5].map((star) => (
											<button
												type="button"
												key={star}
												onClick={() => onReviewChange({ rating: star })}
											>
												<Star
													className={`w-6 h-6 ${star <= review.rating ? "text-amber-400 fill-amber-400" : "text-slate-700"}`}
												/>
											</button>
										))}
									</div>
								</div>
								<label className="block text-xs font-semibold text-slate-300">
									Review Details *
									<textarea
										required
										rows="3"
										value={review.comment}
										onChange={(e) =>
											onReviewChange({ comment: e.target.value })
										}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<button
									type="submit"
									className="w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
								>
									Post Review
								</button>
							</form>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{enquiryCourse && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
						>
							<button
								onClick={onCloseEnquiry}
								className="absolute top-4 right-4 text-slate-400 hover:text-slate-100"
							>
								<X className="w-5 h-5" />
							</button>
							<h3 className="text-lg font-bold text-slate-100 mb-1">
								Quick Enquiry
							</h3>
							<p className="text-xs text-cyan-400 font-semibold mb-6">
								Course: {enquiryCourse}
							</p>
							<form onSubmit={onEnquirySubmit} className="space-y-4">
								<label className="block text-xs font-semibold text-slate-300">
									Your Name *
									<input
										required
										value={enquiry.name}
										onChange={(e) => onEnquiryChange({ name: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<label className="block text-xs font-semibold text-slate-300">
									Phone Number *
									<input
										required
										type="tel"
										value={enquiry.phone}
										onChange={(e) => onEnquiryChange({ phone: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<button
									type="submit"
									className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs"
								>
									Request Callback
								</button>
							</form>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
