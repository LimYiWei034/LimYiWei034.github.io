import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Pneumonia Detection with Chest X-Rays',
    subtitle: 'Data-informed model evaluation',
    description:
      'Evaluated and analyse traditional and modern machine learning models for classification tasks, building end-to-end pipelines for preprocessing, training, and performance comparison.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Data Analysis', 'Machine Learning', 'Matplotlib'],
    linkName: 'Kaggle',
    link: 'https://www.kaggle.com/code/yiwei2378/architecture-exploration-cnn-dnn-lstm-svm', // replace with actual link if available
    imgSrc: '/placeholder-ml.png', // swap for real screenshot
  },
  {
    title: 'SmortMoney: Budget Tracking Web App',
    subtitle: 'Full-stack application',
    description:
      'Built a responsive web application to track expenses and budgets using modern frontend and backend tooling, with real-time data synchronization and user flows.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Agile Workflow'],
    linkName: 'Github',
    link: 'https://github.com/LimYiWei034/SmortMoney-Budget-Tracking-Web-App.git',
    imgSrc: '/placeholder-budget.png',
  },
  {
    title: 'City Invader: Augmented-Reality Game',
    subtitle: 'Immersive interaction',
    description:
      'Designed an experience where players use body movement to affect a virtual environment, emphasizing real-time feedback and engagement mechanics.',
    tech: ['AR Concepts', 'Game Design & Development', 'Intel RealSense' , 'Unity Game Engine'],
    link: '',
    demo: 'https://youtu.be/3Vtw6RjUuZ8',
    imgSrc: '/placeholder-ar.png',
  },
  {
    title: 'Relab Escape',
    subtitle: 'User engagement & release',
    description:
      'Developed and published an interactive music rhythm game for mobile, focusing on timing mechanics, feedback loops, and the end-to-end release process.',
    tech: ['Game Design & Development', 'Mobile Deployment', 'Unity Game Engine'],
    linkName: 'Github',
    link: '',
    demo: 'https://youtu.be/YWhvtkqMjU8',
    imgSrc: 'public/relab_escape_picture1.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-6xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projectData.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
