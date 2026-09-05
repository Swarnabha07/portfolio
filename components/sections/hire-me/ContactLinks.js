import { contactLinks } from "@/constants/socials";

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.download && { download: true })}
          target={link.download ? undefined : "_blank"}
          rel={link.download ? undefined : "noopener noreferrer"}
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-text-muted hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-muted focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
