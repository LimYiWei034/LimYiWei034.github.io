export default function Skills() {
  const categories = [
    {
      heading: 'Programming Languages',
      items: ['Python', 'JavaScript', 'SQL', 'C#', 'C++', 'HTML'],
    },
    {
      heading: 'Data & Machine Learning',
      items: [
        'Data Cleaning & Preparation',
        'Exploratory Data Analysis',
        'Natural Language Processing',
        'Data Visualization with pandas and matplotlib',
        'Scikit-learn & TensorFlow / Keras',
        'Model Evaluation (precision, recall, AUC)',
      ],
    },
    {
      heading: 'Full-Stack Development',
      items: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Firebase (Auth / Realtime / Hosting)',
        'REST APIs',
        'Responsive UI',
      ],
    },
    {
      heading: 'Tools & Environment',
      items: [
        'Git / Version Control',
        'VS Code',
        'Jupyter Notebook',
        'Node.js',
        'Low-Code (UIpath)',
        'Unity Game Engine',
      ],
    },
    {
      heading: 'Soft Skills',
      items: [
        'Problem Decomposition',
        'Communication',
        'Adaptability',
        'End-to-End Delivery',
        'Agile Workflow',
      ],
    },
  ];

  return (
    <section id="skills" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-center">
          Skills
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <div key={cat.heading}>
              <h3 className="text-2xl font-semibold mb-3">{cat.heading}</h3>
              <ul className="space-y-2">
                {cat.items.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-lg leading-snug"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}