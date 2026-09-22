import { useMemo, useState } from "react";
import {
	BarChart3,
	BookOpen,
	CheckCircle2,
	GraduationCap,
	LayoutDashboard,
	LogOut,
	Mail,
	MessageSquare,
	ShieldCheck,
	Star,
	Users,
} from "lucide-react";
import { appConfig } from "./appConfig";
import { readStoredList, storageKeys } from "./storage";

const ADMIN_SESSION_KEY = "demo-academy-admin-session";

const formatDate = (value) => {
	if (!value) return "-";
	const date = new Date(value);
	return Number.isNaN(date.getTime())
		? value
		: date.toLocaleDateString(undefined, {
				day: "2-digit",
				month: "short",
				year: "numeric",
			});
};

function Login({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const submit = async (event) => {
		event.preventDefault();
		const encodedPassword = new TextEncoder().encode(password);
		const digest = await crypto.subtle.digest("SHA-256", encodedPassword);
		const passwordHash = Array.from(new Uint8Array(digest))
			.map((byte) => byte.toString(16).padStart(2, "0"))
			.join("");
		if (username !== appConfig.admin.username || passwordHash !== appConfig.admin.passwordHash) {
			setError("Invalid demo admin credentials.");
			return;
		}
		window.localStorage.setItem(ADMIN_SESSION_KEY, "active");
		onLogin();
	};

	return (
		<main className="admin-login min-h-screen flex items-center justify-center px-4 py-12">
			<div className="admin-login-card w-full max-w-md p-8 sm:p-10">
				<div className="admin-mark mb-8">
					<GraduationCap className="w-7 h-7" />
				</div>
				<p className="eyebrow">Private workspace</p>
				<h1 className="mt-3 text-3xl font-black text-white">Welcome back</h1>
				<p className="mt-3 text-sm leading-6 text-slate-400">
					Manage course activity, student enquiries, and reviews from one calm view.
				</p>
				<form onSubmit={submit} className="mt-8 space-y-4">
					<label className="admin-label">
						Username
						<input
							required
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							className="admin-input"
							autoComplete="username"
						/>
					</label>
					<label className="admin-label">
						Password
						<input
							required
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							className="admin-input"
						autoComplete="current-password"
						/>
					</label>
					{error && <p className="text-sm text-rose-300">{error}</p>}
					<button type="submit" className="admin-primary-button w-full">
						<ShieldCheck className="w-4 h-4" />
						Enter dashboard
					</button>
				</form>
				<p className="mt-6 text-[11px] leading-5 text-slate-500">
					Demo-only authentication. Use a server-side identity provider before deploying
					this dashboard with real student data.
				</p>
			</div>
		</main>
	);
}

function StatCard({ icon: Icon, label, value, detail }) {
	return (
		<div className="admin-stat-card">
			<div className="admin-stat-icon"><Icon className="w-4 h-4" /></div>
			<p className="mt-5 text-xs font-medium text-slate-500">{label}</p>
			<p className="mt-1 text-3xl font-black tracking-tight text-white">{value}</p>
			<p className="mt-2 text-xs text-slate-500">{detail}</p>
		</div>
	);
}

function Overview({ enquiries, reviews }) {
	const categoryData = useMemo(
		() =>
			appConfig.skills.reduce((result, skill) => {
				result[skill.category] = (result[skill.category] || 0) + 1;
				return result;
			}, {}),
		[],
	);
	const maxCategoryCount = Math.max(...Object.values(categoryData));
	const averageRating = reviews.length
		? (reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / reviews.length).toFixed(1)
		: "0.0";

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				<StatCard icon={BookOpen} label="Active courses" value={appConfig.skills.length} detail="Across five learning tracks" />
				<StatCard icon={Users} label="Student reviews" value={reviews.length} detail="Seeded and submitted locally" />
				<StatCard icon={Mail} label="New enquiries" value={enquiries.length} detail="Stored in this browser" />
				<StatCard icon={Star} label="Average rating" value={averageRating} detail="From submitted reviews" />
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">
				<section className="admin-panel">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="eyebrow">Learning catalogue</p>
							<h2 className="admin-section-title">Course mix</h2>
						</div>
						<BarChart3 className="w-5 h-5 text-cyan-300" />
					</div>
					<div className="mt-8 space-y-5">
						{Object.entries(categoryData).map(([category, count]) => (
							<div key={category}>
								<div className="mb-2 flex justify-between text-xs">
									<span className="text-slate-300">{category}</span>
									<span className="text-slate-500">{count} courses</span>
								</div>
								<div className="h-2 overflow-hidden rounded-full bg-slate-800">
									<div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300" style={{ width: `${(count / maxCategoryCount) * 100}%` }} />
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="admin-panel">
					<p className="eyebrow">Quick pulse</p>
					<h2 className="admin-section-title">What needs attention</h2>
					<div className="mt-6 space-y-3">
						<div className="admin-insight"><Mail className="w-4 h-4 text-amber-300" /><span>{enquiries.length ? `${enquiries.length} enquiry records are ready to follow up.` : "No enquiries have been captured yet."}</span></div>
						<div className="admin-insight"><MessageSquare className="w-4 h-4 text-cyan-300" /><span>{reviews.length > appConfig.reviews.length ? "New student feedback has arrived." : "Your seeded review set is ready for launch."}</span></div>
						<div className="admin-insight"><CheckCircle2 className="w-4 h-4 text-emerald-300" /><span>All course descriptions are configured in one place.</span></div>
					</div>
				</section>
			</div>
		</div>
	);
}

function Enquiries({ enquiries }) {
	return (
		<section className="admin-panel">
			<div className="flex items-end justify-between gap-4">
				<div><p className="eyebrow">Lead inbox</p><h2 className="admin-section-title">Admission enquiries</h2></div>
				<span className="admin-count">{enquiries.length} total</span>
			</div>
			{enquiries.length === 0 ? (
				<div className="admin-empty"><Mail className="w-7 h-7 text-slate-600" /><p>No enquiries yet. New submissions will appear here.</p></div>
			) : (
				<div className="mt-6 overflow-x-auto"><table className="admin-table"><thead><tr><th>Name</th><th>Course</th><th>Contact</th><th>Status</th><th>Received</th></tr></thead><tbody>{enquiries.map((enquiry) => <tr key={enquiry.id}><td><strong>{enquiry.name}</strong><small>{enquiry.message || "No message"}</small></td><td>{enquiry.course || "Not specified"}</td><td><strong>{enquiry.phone}</strong><small>{enquiry.email || "No email"}</small></td><td><span className="status-pill">{enquiry.status || "New"}</span></td><td>{formatDate(enquiry.createdAt)}</td></tr>)}</tbody></table></div>
			)}
		</section>
	);
}

function Reviews({ reviews }) {
	return (
		<section className="admin-panel">
			<div><p className="eyebrow">Social proof</p><h2 className="admin-section-title">Student reviews</h2></div>
			<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">{reviews.map((review) => <article className="review-row" key={review.id}><div className="flex items-center justify-between gap-3"><div><strong>{review.name}</strong><p>{review.course}</p></div><span className="review-rating"><Star className="w-3 h-3 fill-current" /> {review.rating}/5</span></div><blockquote>{review.comment}</blockquote><time>{review.date}</time></article>)}</div>
		</section>
	);
}

export default function Admin() {
	const [authenticated, setAuthenticated] = useState(() => window.localStorage.getItem(ADMIN_SESSION_KEY) === "active");
	const [section, setSection] = useState("overview");
	const [enquiries] = useState(() => readStoredList(storageKeys.enquiries));
	const [reviews] = useState(() => readStoredList(storageKeys.reviews, appConfig.reviews));

	if (!authenticated) return <Login onLogin={() => setAuthenticated(true)} />;

	const logout = () => {
		window.localStorage.removeItem(ADMIN_SESSION_KEY);
		setAuthenticated(false);
	};

	return (
		<div className="admin-shell min-h-screen text-slate-100">
			<header className="admin-topbar">
				<a href="/" className="flex items-center gap-3"><div className="admin-mark small"><GraduationCap className="w-5 h-5" /></div><div><strong className="text-sm text-white">{appConfig.shortName}</strong><span className="block text-[10px] text-slate-500">Admin workspace</span></div></a>
				<button className="admin-ghost-button" onClick={logout}><LogOut className="w-4 h-4" /> Sign out</button>
			</header>
			<div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[230px_1fr] gap-6 px-4 py-6 sm:px-6 lg:px-8">
				<aside className="admin-sidebar"><p className="eyebrow px-3">Workspace</p>{[["overview", LayoutDashboard, "Overview"], ["enquiries", Mail, "Enquiries"], ["reviews", MessageSquare, "Reviews"]].map(([id, Icon, label]) => <button key={id} className={`admin-nav-item ${section === id ? "active" : ""}`} onClick={() => setSection(id)}><Icon className="w-4 h-4" />{label}</button>)}</aside>
				<main className="min-w-0"><div className="mb-8"><p className="eyebrow">{appConfig.location} / control room</p><h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Good morning, admin.</h1><p className="mt-2 text-sm text-slate-500">A clear view of your academy activity, ready when you are.</p></div>{section === "overview" && <Overview enquiries={enquiries} reviews={reviews} />}{section === "enquiries" && <Enquiries enquiries={enquiries} />}{section === "reviews" && <Reviews reviews={reviews} />}</main>
			</div>
		</div>
	);
}
