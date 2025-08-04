export default function About() {
  return (
    <section id="about" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main heading: made bigger */}
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
          About Me
        </h2>

        {/* Intro paragraph: larger body text */}
        <p className="mb-6 text-center text-xl sm:text-2xl">
          I’m Lim Yi Wei, a fresh Computer Science graduate who builds data informed software and interactive systems. 
          I turn ambiguous real world problems into reliable solutions by combining full stack engineering with analytical insight, 
          preparing and interpreting data, applying appropriate logic, and surfacing trends in user facing tools. 
          I focus on maintainability and iteration,
          embedding actionable intelligence into applications so they are not just functional but are trustworthy and useful.
        </p>

        {/* Two-column content with enlarged labels and body */}
        <div className="text-lg sm:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-2xl">What I do</h3>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary">
              <li>
                <span className="font-semibold">Data Preparation & Analysis:</span> Clean, structure, and explore data to extract trends and support decisions.
              </li>
              <li>
                <span className="font-semibold">Embedded Insight:</span> Surface analytics in tools and workflows so decisions are informed in context.
              </li>
              <li>
                <span className="font-semibold">Applied Machine Learning:</span> Use both traditional and modern models to derive patterns and make predictions.
              </li>
              <li>
                <span className="font-semibold">Interactive Systems:</span> Design software that responds to user input or environmental signals to create engaging experiences.
              </li>
              <li>
                <span className="font-semibold">Full-Stack Development:</span> Build responsive, user-centric applications with modern frontend and backend tooling.
              </li>
              <li>
                <span className="font-semibold">Reliability & Iteration:</span> Validate systems with metrics, refine based on feedback, and ensure maintainability.
              </li>
              <li>
                <span className="font-semibold">End-to-End Delivery:</span> Take ideas from concept through implementation, testing, and deployment with clarity and purpose.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg sm:text-2xl">
            I’m actively looking for software, data, or analyst roles where I can contribute, learn, and ship
            impactful products.
          </p>
        </div>
      </div>
    </section>
  );
}