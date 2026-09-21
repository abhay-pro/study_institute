import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Modals from "./Modals";
import Reviews from "./Reviews";
import WhyChooseUs from "./WhyChooseUs";
import { appConfig, categories } from "./appConfig";
import emailjs from "@emailjs/browser";
import { serviceConfig } from "./serviceConfig";

const EMPTY_REVIEW = {
	name: "",
	course: "Python Programming",
	rating: 5,
	comment: "",
};
const EMPTY_ENQUIRY = {
	name: "",
	phone: "",
	email: "",
	course: "",
	message: "",
};

export default function Landing() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [enquiryModalCourse, setEnquiryModalCourse] = useState(null);
	const [reviewModalOpen, setReviewModalOpen] = useState(false);
	const [userReviews, setUserReviews] = useState(appConfig.reviews);
	const [newReview, setNewReview] = useState(EMPTY_REVIEW);
	const [enquiryForm, setEnquiryForm] = useState(EMPTY_ENQUIRY);
	const [toastMessage, setToastMessage] = useState("");
	const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const showToast = (message) => {
		setToastMessage(message);
		setTimeout(() => setToastMessage(""), 4000);
	};

	const filteredSkills = appConfig.skills.filter((skill) => {
		const matchesCategory =
			selectedCategory === "All" || skill.category === selectedCategory;
		const query = searchQuery.toLowerCase();
		return (
			matchesCategory &&
			(skill.name.toLowerCase().includes(query) ||
				skill.description.toLowerCase().includes(query))
		);
	});

	const handleReviewSubmit = (event) => {
		event.preventDefault();
		if (!newReview.name || !newReview.comment) {
			showToast("Please fill in your name and review message!");
			return;
		}
		setUserReviews([
			{
				...newReview,
				id: Date.now(),
				rating: Number(newReview.rating),
				date: "Just now",
			},
			...userReviews,
		]);
		setNewReview(EMPTY_REVIEW);
		setReviewModalOpen(false);
		showToast("Thank you! Your review has been added successfully.");
	};

	const handleEnquirySubmit = async (event) => {
		event.preventDefault();
		if (isSubmittingEnquiry) return;
		if (!enquiryForm.name || !enquiryForm.phone) {
			showToast("Please provide your name and phone number!");
			return;
		}
		if (
			!serviceConfig.email.serviceId ||
			!serviceConfig.email.templateId ||
			!serviceConfig.email.publicKey
		) {
			showToast("Email service is not configured yet. Please contact the administrator.");
			return;
		}

		setIsSubmittingEnquiry(true);
		try {
			await emailjs.send(
				serviceConfig.email.serviceId,
				serviceConfig.email.templateId,
				{
					subject: serviceConfig.email.subject,
					to_email: serviceConfig.adminEmail,
					from_name: enquiryForm.name,
					reply_to: enquiryForm.email || serviceConfig.adminEmail,
					from_email: enquiryForm.email || serviceConfig.adminEmail,
					phone: enquiryForm.phone,
					course: enquiryForm.course || "Not specified",
					message: enquiryForm.message || "No message provided",
					submitted_at: new Date().toLocaleString(),
				},
				serviceConfig.email.publicKey,
			);
		} catch {
			setIsSubmittingEnquiry(false);
			showToast("Unable to send enquiry. Please try again or call the academy.");
			return;
		}
		setIsSubmittingEnquiry(false);
		setEnquiryModalCourse(null);
		setEnquiryForm(EMPTY_ENQUIRY);
		showToast(
			"Enquiry Sent! Our Barrackpore representative will call you shortly.",
		);
	};

	const updateReview = (changes) =>
		setNewReview((current) => ({ ...current, ...changes }));
	const updateEnquiry = (changes) =>
		setEnquiryForm((current) => ({ ...current, ...changes }));

	return (
		<div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
			<AnimatePresence>
				{toastMessage && (
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						className="fixed top-20 right-4 z-50 bg-cyan-500 text-slate-950 font-semibold px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-cyan-300"
					>
						<CheckCircle2 className="w-5 h-5" />
						<span>{toastMessage}</span>
					</motion.div>
				)}
			</AnimatePresence>
			<Header
				isScrolled={isScrolled}
				mobileMenuOpen={mobileMenuOpen}
				onToggleMenu={() => setMobileMenuOpen((open) => !open)}
				onNavigate={() => setMobileMenuOpen(false)}
			/>
			<Hero />
			<About />
			<Courses
				skills={filteredSkills}
				categories={categories}
				selectedCategory={selectedCategory}
				searchQuery={searchQuery}
				onCategoryChange={setSelectedCategory}
				onSearchChange={setSearchQuery}
				onEnquire={(course) => {
					setEnquiryModalCourse(course);
					updateEnquiry({ course });
				}}
			/>
			<WhyChooseUs />
			<Reviews
				reviews={userReviews}
				googleReviewUrl={serviceConfig.googleReviewUrl}
			/>
			<Contact
				form={enquiryForm}
				onChange={updateEnquiry}
				onSubmit={handleEnquirySubmit}
				isSubmitting={isSubmittingEnquiry}
			/>
			<Modals
				reviewOpen={reviewModalOpen}
				enquiryCourse={enquiryModalCourse}
				review={newReview}
				enquiry={enquiryForm}
				onCloseReview={() => setReviewModalOpen(false)}
				onCloseEnquiry={() => setEnquiryModalCourse(null)}
				onReviewChange={updateReview}
				onEnquiryChange={updateEnquiry}
				onReviewSubmit={handleReviewSubmit}
				onEnquirySubmit={handleEnquirySubmit}
			/>
			<Footer />
		</div>
	);
}
