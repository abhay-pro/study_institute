import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, MessageCircle, Phone, X } from "lucide-react";
import { appConfig } from "./appConfig";

export default function Header({
	isScrolled,
	mobileMenuOpen,
	onToggleMenu,
	onNavigate,
}) {
	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 py-4 transition-colors duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-slate-950/50" : "bg-slate-950/20"}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<a href="#" className="flex items-center gap-3 group">
					<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
						<GraduationCap className="w-6 h-6 text-slate-950" />
					</div>
					<div>
						<span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
											{appConfig.brandName}{" "}
							<span className="text-cyan-400 text-xs px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
												{appConfig.brandLabel}
							</span>
						</span>
						<p className="text-[10px] text-slate-400 font-medium tracking-wide">
							{appConfig.location} • Estd. {appConfig.established}
						</p>
					</div>
				</a>
				<nav className="hidden md:flex items-center gap-8">
					{appConfig.navigation.map(([href, label]) => (
						<a
							key={href}
							href={href}
							className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
						>
							{label}
						</a>
					))}
				</nav>
				<div className="hidden lg:flex items-center gap-3">
					<a
						href={`tel:${appConfig.phone}`}
						className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 text-xs font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
					>
						<Phone className="w-3.5 h-3.5 text-cyan-400" />
						Call Now
					</a>
					<a
						href={`https://wa.me/${appConfig.whatsappNumber}?text=${encodeURIComponent(appConfig.whatsappMessages.header)}`}
						target="_blank"
						rel="noreferrer"
						className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center gap-2"
					>
						<MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
						WhatsApp
					</a>
				</div>
				<button
					onClick={onToggleMenu}
					className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none"
				>
					{mobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl"
					>
						{appConfig.navigation.map(([href, label]) => (
							<a
								key={href}
								href={href}
								onClick={onNavigate}
								className="block text-slate-300 py-2 border-b border-slate-800/60 font-medium hover:text-cyan-400"
							>
								{label}
							</a>
						))}
						<div className="pt-3 grid grid-cols-2 gap-3">
							<a
								href={`tel:${appConfig.phone}`}
								className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
							>
								<Phone className="w-4 h-4 text-cyan-400" />
								Call
							</a>
							<a
								href={`https://wa.me/${appConfig.whatsappNumber}`}
								target="_blank"
								rel="noreferrer"
								className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
							>
								<MessageCircle className="w-4 h-4" />
								WhatsApp
							</a>
						</div>
					</motion.div>
				)}
		    </AnimatePresence>
		</header>
	);
}
