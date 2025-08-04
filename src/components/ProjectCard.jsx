export default function ProjectCard({ title, description, tech, linkName, link, demo }) {
  return (
    <div className="border rounded-2xl p-8 flex flex-col gap-6 shadow-md hover:shadow-lg transition text-lg">
      
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="flex-1">{description}</p>
      <div className="text-sm mb-2">
        <strong>Tech:</strong> {tech.join(', ')}
      </div>
      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            {linkName}
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
