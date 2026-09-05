"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  privacyPolicyMeta,
  privacyPolicySections,
} from "@/constants/privacypolicy";

export default function PrivacyPageClient() {
  return (
    <main className="min-h-screen py-16 sm:py-20 lg:py-12">
      {/* Back to Portfolio */}
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Wide page content */}
      <div className="mx-auto mt-14 w-full px-6 sm:mt-16 sm:px-8 lg:mt-20 lg:px-12 xl:px-16">
        {/* Header */}
        <header className="border-b border-border pb-10 sm:pb-12 lg:pb-14">
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {privacyPolicyMeta.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
            {privacyPolicyMeta.description}
          </p>

          <p className="mt-6 text-sm text-text-muted">
            Effective date: {privacyPolicyMeta.effectiveDate}
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20 lg:pt-16 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-24">
          {/* Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                Contents
              </p>

              <nav className="mt-5">
                <ul className="space-y-3 border-l border-border pl-4">
                  {privacyPolicySections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-xs leading-5 text-text-muted transition-colors duration-200 hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-none"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <article className="min-w-0">
            <div className="space-y-12 sm:space-y-14 lg:space-y-16">
              {privacyPolicySections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-10"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 max-w-5xl space-y-5 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                    {section.paragraphs?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {section.list && (
                      <ul>
                        {section.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.additionalParagraphs?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact */}
            <section className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:pt-14">
              <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                Contact
              </h2>

              <p className="mt-5 max-w-5xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                If you have any questions about this Privacy Policy or how
                information submitted through this portfolio is handled, you can
                contact me through the{" "}
                <Link
                  href="/#hire-me"
                  className="text-text-primary underline underline-offset-4 transition-colors duration-200 hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Hire Me
                </Link>{" "}
                section.
              </p>
            </section>
          </article>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 border-t border-border pt-8 sm:mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
