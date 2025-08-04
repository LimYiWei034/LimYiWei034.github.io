export default function Hero({
  name = 'Yi Wei',
  tagline = 'Software. Data. Quality.',
  subtitle = 'Keen developer ready to enter the industry and build impactful software while growing my technical range. I combine problem solving with a growth mindset and adapt to new challenges while seeking guidance.',
  resumeHref = '/Lim_Yi_Wei_Resume_2025.pdf',
  imageSrc = '/me.jpg', // replace with your actual photo path
}) {
  return (
    <section
      id="hero"
      className="pt-64 pb-20 relative overflow-hidden"
      aria-label="Introduction"
    >
      
      <div className="w-[75%] max-w-none mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        
        {/* Left: Text content */}
        <div className="flex-1">
            <h1 className="font-heading font-bold leading-tight mb-4 text-[3.5rem] sm:text-[4.25rem] md:text-[5rem]">
                Hi, I’m {name}
            </h1>

          <p className="uppercase text-xl md:text-4xl tracking-widest mb-4 text-primary font-medium">
            {tagline}
          </p>

          <p className="text-xl md:text-3xl mb-8 max-w-2lg md:leading-[1.5]">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-6">
            <a
            href={resumeHref}
            download="Lim_Yi_Wei_Resume_2025.pdf"
            className="inline-block px-10 py-5 border-4 bg-primary border-white text-white rounded-full font-semibold shadow-xl transition transform duration-200 ease-out hover:scale-105 hover:brightness-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary text-lg"
            aria-label="Download resume"
            >
              Get my resume
            </a>
            <a
              href="#projects"
              className="inline-block px-10 py-5 border-4 bg-primary border-white text-white rounded-full font-semibold shadow-xl transition transform duration-200 ease-out hover:scale-105 hover:brightness-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary text-lg"
            >
              See my work
            </a>
            <a
            href="#contact"
            className="inline-block px-10 py-5 border-4 bg-primary border-white text-white rounded-full font-semibold shadow-xl transition transform duration-200 ease-out hover:scale-105 hover:brightness-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] relative rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img
              src={imageSrc}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
