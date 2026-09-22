import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { appConfig } from "./appConfig";

export default function Contact({ form, onChange, onSubmit, isSubmitting }) {
	return (
		<section
			id="contact"
			className="py-20 bg-slate-900/60 border-t border-slate-800 relative"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ScrollReveal>
						<div className="space-y-8">
							<div>
								<div className="inline-flex px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
									GET IN TOUCH
								</div>
								<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
									Visit {appConfig.shortName}{" "}
									<span className="text-cyan-400">{appConfig.location} Campus</span>
								</h2>
								<p className="text-slate-400 text-xs sm:text-sm mt-2">
									Have questions regarding admission, course fee structure, or
									batch timings? Talk to our counselor today.
								</p>
							</div>
							<div className="space-y-4">
								{[
									[MapPin, "Address", appConfig.address],
									[Phone, "Phone Hotline", appConfig.phone],
									[Mail, "Email Address", appConfig.email],
								].map(([Icon, title, value]) => (
									<div
										key={title}
										className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4"
									>
										<Icon className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
										<div>
											<h4 className="font-bold text-sm text-slate-200">
												{title}
											</h4>
											<p className="text-xs text-slate-400 mt-1">{value}</p>
										</div>
									</div>
								))}
							</div>
							<div className="flex gap-4 pt-2">
								<a
									href={`https://wa.me/${appConfig.whatsappNumber}?text=${encodeURIComponent(appConfig.whatsappMessages.contact)}`}
									target="_blank"
									rel="noreferrer"
									className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
								>
									<MessageCircle className="w-4 h-4" />
									WhatsApp Enquiry
								</a>
								<a
									href={`tel:${appConfig.phone}`}
									className="flex-1 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
								>
									<Phone className="w-4 h-4 text-cyan-400" />
									Call Academy
								</a>
							</div>
						</div>
					</ScrollReveal>
					<ScrollReveal delay={0.2}>
						<div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
							<h3 className="text-xl font-bold text-slate-100 mb-2">
								Send an Admission Enquiry
							</h3>
							<p className="text-xs text-slate-400 mb-6">
								Fill out the form and our counselor will get back to you within
								24 hours.
							</p>
							<form onSubmit={onSubmit} className="space-y-4">
								<label className="block text-xs font-semibold text-slate-300">
									Full Name *
									<input
										type="text"
										required
										placeholder="e.g. Sourav Das"
										value={form.name}
										onChange={(e) => onChange({ name: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<label className="block text-xs font-semibold text-slate-300">
										Phone Number *
										<input
											type="tel"
											required
											placeholder="e.g. 98300XXXXX"
											value={form.phone}
											onChange={(e) => onChange({ phone: e.target.value })}
											className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
										/>
									</label>
									<label className="block text-xs font-semibold text-slate-300">
										Email Address
										<input
											type="email"
											placeholder="e.g. name@example.com"
											value={form.email}
											onChange={(e) => onChange({ email: e.target.value })}
											className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
										/>
									</label>
									<label className="block text-xs font-semibold text-slate-300">
										Interested Skill/Course
										<select
											value={form.course}
											onChange={(e) => onChange({ course: e.target.value })}
											className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
										>
											<option value="">Select a Course</option>
											{appConfig.skills.map((skill) => (
												<option key={skill.id} value={skill.name}>
													{skill.name}
												</option>
											))}
										</select>
									</label>
								</div>
								<label className="block text-xs font-semibold text-slate-300">
									Message or Query
									<textarea
										rows="3"
										placeholder="Ask about batch timings, fee installments, etc."
										value={form.message}
										onChange={(e) => onChange({ message: e.target.value })}
										className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
									/>
								</label>
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
								>
									<Send className="w-4 h-4" />
									{isSubmitting ? "Sending..." : "Submit Enquiry"}
								</button>
							</form>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
