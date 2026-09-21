import { GraduationCap, MessageCircle, Phone } from "lucide-react";
import { appConfig } from "./appConfig";

export default function Footer() {
	return (
		<>
			<div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
				<a
					href={`https://wa.me/${appConfig.whatsappNumber}?text=Hi%20BAIT%20Academy,%20I%20want%20to%20know%20about%20courses.`}
					target="_blank"
					rel="noreferrer"
					className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform"
					title="Chat on WhatsApp"
				>
					<MessageCircle className="w-6 h-6 fill-slate-950" />
				</a>
				<a
					href={`tel:${appConfig.phone}`}
					className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/30 hover:scale-110 transition-transform"
					title="Direct Call"
				>
					<Phone className="w-5 h-5 fill-slate-950" />
				</a>
			</div>
			<footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
						<div className="space-y-3">
							<div className="flex items-center gap-2">
								<GraduationCap className="w-6 h-6 text-cyan-400" />
								<span className="font-extrabold text-slate-100 text-base">
									BAIT Barrackpore
								</span>
							</div>
							<p className="leading-relaxed">
								Barrackpore Academy of Information Technology - Premier Computer
								Training Institute since 2012.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-slate-200 text-sm mb-3">
								Popular Courses
							</h4>
							<ul className="space-y-2">
								{[
									"Python & Data Analytics",
									"ReactJS Web Development",
									"Tally Prime with GST",
									"SAP FICO / MM Training",
								].map((item) => (
									<li key={item}>
										<a
											href="#skills"
											className="hover:text-cyan-400 transition-colors"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-slate-200 text-sm mb-3">
								Quick Navigation
							</h4>
							<ul className="space-y-2">
								{[
									["#about", "About Academy"],
									["#skills", "Banner Skills"],
									["#why-us", "Why Choose Us"],
									["#reviews", "Student Testimonials"],
								].map(([href, label]) => (
									<li key={href}>
										<a
											href={href}
											className="hover:text-cyan-400 transition-colors"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-slate-200 text-sm mb-3">
								Barrackpore Address
							</h4>
							<p className="leading-relaxed mb-2">{appConfig.address}</p>
							<p className="font-medium text-slate-300">
								Phone: {appConfig.phone}
							</p>
						</div>
					</div>
					<div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
						<p>
							© {new Date().getFullYear()} {appConfig.instituteName}. All rights
							reserved.
						</p>
						<p className="text-slate-500">
							Designed for Barrackpore Tech Aspirants
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
