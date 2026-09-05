"use client";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Send } from "lucide-react";
import { toast } from "react-toastify";

const initialErrors = {
  name: "",
  email: "",
  message: "",
};

export default function HireMeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [captchaToken, setCaptchaToken] = useState("");

  const captchaRef = useRef(null);

  function validateForm(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Your name must be at least 2 characters.";
    } else if (name.length > 50) {
      newErrors.name = "Your name must be 50 characters or less.";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Message validation
    if (!message) {
      newErrors.message = "Please enter a message.";
    } else if (message.length < 20) {
      newErrors.message = "Your message must be at least 20 characters.";
    } else if (message.length > 2000) {
      newErrors.message = "Your message must be 2000 characters or less.";
    }

    setErrors(newErrors);

    // CAPTCHA validation
    if (!captchaToken) {
      toast.warn("Please complete the CAPTCHA verification.");
    }

    return !Object.values(newErrors).some(Boolean) && Boolean(captchaToken);
  }

  function handleFieldChange(field) {
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }
  }

  function handleCaptchaVerify(token) {
    setCaptchaToken(token);
  }

  function handleCaptchaExpire() {
    setCaptchaToken("");
    toast.warn("Please complete the CAPTCHA verification.");
  }

  function handleCaptchaError() {
    setCaptchaToken("");
    toast.warn("Please complete the CAPTCHA verification.");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;

    if (!validateForm(form)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(form);

      formData.set("name", form.name.value.trim());
      formData.set("email", form.email.value.trim());
      formData.set("message", form.message.value.trim());

      formData.set("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

      formData.set("subject", "New Portfolio Inquiry");

      // Ensure Web3Forms receives the current hCaptcha token.
      formData.set("h-captcha-response", captchaToken);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong while sending your message.",
        );
      }

      // Reset form fields.
      form.reset();

      // Clear CAPTCHA token.
      setCaptchaToken("");

      // hCaptcha tokens are single-use.
      captchaRef.current?.resetCaptcha();

      // Clear inline field errors.
      setErrors(initialErrors);

      // Success notification.
      toast.success("Message sent successfully. I'll get back to you soon.");
    } catch (error) {
      console.error("Submission error:", error);

      // Submission/API failure notification.
      toast.error(
        "Something went wrong while sending your message. Please try again.",
      );

      // Reset CAPTCHA after failed submission.
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit} noValidate>
        {/* =====================================================
            NAME + EMAIL
            ===================================================== */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-text-primary"
            >
              Your name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              maxLength={50}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              onChange={() => handleFieldChange("name")}
              className={`mt-2 h-12 w-full rounded-md border bg-transparent px-4 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200 focus:ring-1 ${
                errors.name
                  ? "border-red-500/70 focus:border-red-500/70 focus:ring-red-500/30"
                  : "border-border focus:border-text-muted focus:ring-text-muted"
              }`}
            />

            {/* Reserved error space */}
            <div className="mt-2 min-h-5">
              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  className="text-xs leading-5 text-red-500"
                >
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-primary"
            >
              Your email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              onChange={() => handleFieldChange("email")}
              className={`mt-2 h-12 w-full rounded-md border bg-transparent px-4 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200 focus:ring-1 ${
                errors.email
                  ? "border-red-500/70 focus:border-red-500/70 focus:ring-red-500/30"
                  : "border-border focus:border-text-muted focus:ring-text-muted"
              }`}
            />

            {/* Reserved error space */}
            <div className="mt-2 min-h-5">
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="text-xs leading-5 text-red-500"
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            MESSAGE
            ===================================================== */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-medium text-text-primary"
          >
            Your message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your project..."
            rows={7}
            maxLength={2000}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={() => handleFieldChange("message")}
            className={`mt-2 min-h-[200px] w-full resize-y rounded-md border bg-transparent px-4 py-3.5 text-sm leading-7 text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200 focus:ring-1 ${
              errors.message
                ? "border-red-500/70 focus:border-red-500/70 focus:ring-red-500/30"
                : "border-border focus:border-text-muted focus:ring-text-muted"
            }`}
          />

          {/* Reserved error space */}
          <div className="mt-2 min-h-5">
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="text-xs leading-5 text-red-500"
              >
                {errors.message}
              </p>
            )}
          </div>
        </div>

        {/* =====================================================
            CAPTCHA + SUBMIT
            ===================================================== */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* CAPTCHA */}
          <div className="min-w-0">
            <div className="flex min-h-12 w-full items-center justify-center overflow-hidden sm:min-h-11">
              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={handleCaptchaVerify}
                onExpire={handleCaptchaExpire}
                onError={handleCaptchaError}
                theme="dark"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-text-primary px-7 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:w-auto sm:min-w-[302px] sm:justify-self-start"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <span>Send Message</span>
                <Send aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </>
            )}
          </button>
        </div>

        {/* =====================================================
            PRIVACY NOTICE
            ===================================================== */}
        <p className="mt-5 text-xs leading-6 text-text-muted">
          By submitting this form, you agree that the information provided may
          be processed to respond to your inquiry.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 transition-colors duration-200 hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </>
  );
}
