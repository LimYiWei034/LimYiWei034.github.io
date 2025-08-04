// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold mb-6">Get in touch</h2>
        <p className="mb-8 text-xl">
          I’m open to opportunities and collaboration. Reach out via email or connect on GitHub and LinkedIn.
        </p>

        <div className="flex justify-center gap-10">
          {/* Email */}
          <IconButton
            href="mailto:limyiwei034@gmail.com"
            ariaLabel="Email"
            title="Email"
          >
            <EmailIcon />
          </IconButton>

          {/* GitHub */}
          <IconButton
            href="https://github.com/LimYiWei034"
            ariaLabel="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            href="https://www.linkedin.com/in/lim-yi-wei034"
            ariaLabel="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

function IconButton({ href, ariaLabel, title, children }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={title}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-black dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
    >
      <div className="w-10 h-10">{children}</div>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405 
      c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.77.84 1.23 1.91 
      1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.825 1.096.825 2.21 0 1.595-.015 2.88-.015 3.27 
      0 .315.21.694.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.119 1.11 1 2.5 1s2.48 1.119 2.48 2.5zM.24 
      8.9h4.5v12H.24zM8.34 8.9h4.314v1.711h.061c.602-1.14 2.072-2.343 4.266-2.343 4.558 
      0 5.402 3.002 5.402 6.905v7.727h-4.5v-6.84c0-1.631-.03-3.732-2.27-3.732-2.27 
      0-2.62 1.775-2.62 3.605v6.967h-4.5V8.9z" />
    </svg>
  );
}
