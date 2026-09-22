import { appConfig } from "./appConfig";

export const serviceConfig = {
	googleReviewUrl:
		import.meta.env.VITE_GOOGLE_REVIEW_URL ||
		`https://www.google.com/search?q=${encodeURIComponent(`${appConfig.shortName} ${appConfig.location} reviews`)}`,
	adminEmail: import.meta.env.VITE_ADMIN_EMAIL || appConfig.email,
	email: {
		serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
		templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
		publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
		subject: `New ${appConfig.shortName} Admission Enquiry`,
	},
};
