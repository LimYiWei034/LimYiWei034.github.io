import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 bg-[rgba(15,23,42,0.85)] backdrop-blur-sm z-50">
      <div className="w-[75%] max-w-none mx-auto flex items-center justify-between px-0 h-24">
        <div className="font-bold text-3xl md:text-3xl text-primary">LIM YI WEI</div>
        <div className="flex gap-6">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`
                relative px-5 py-3 text-lg md:text-3xl rounded-md transition-all
                ${active === s.id
                  ? 'text-primary font-medium'
                  : 'text-white dark:text-gray-300 hover:text-primary'}
              `}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-primary rounded" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}