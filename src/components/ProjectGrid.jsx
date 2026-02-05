import React from 'react';
import { Play, ThumbsUp } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack solution with real-time inventory & payments.",
    tech: ["React", "Node.js", "MongoDB"],
    likes: "92%",
    visits: "1.2M",
    image: "/img/projects/stanley-dai-73OZYNjVoNI-unsplash.jpg"
  },
  {
    title: "Task Management App",
    desc: "Productivity tool for teams to organize tasks efficiently.",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    likes: "88%",
    visits: "850K",
    image: "/img/projects/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg"
  },
  {
    title: "Modern Portfolio",
    desc: "High-performance personal portfolio website.",
    tech: ["HTML5", "Bootstrap 5", "CSS Grid"],
    likes: "95%",
    visits: "500K",
    image: "/img/projects/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg"
  }
];

const ProjectGrid = () => {
  return (
    <section>
      <div className="section-title">
        <span>Experiences</span>
        <span style={{ fontSize: '14px', color: '#888', fontWeight: 'normal' }}>See All &gt;</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '8px',
              position: 'relative'
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.style.backgroundColor = '#333';
                }}
              />
              {/* Tech Badge Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                display: 'flex',
                gap: '4px',
                flexWrap: 'wrap'
              }}>
                {project.tech.slice(0, 2).map(t => (
                    <span key={t} style={{
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        fontSize: '10px',
                        padding: '2px 6px',
                        borderRadius: '4px'
                    }}>{t}</span>
                ))}
              </div>
            </div>

            <h3 style={{
              fontSize: '16px',
              margin: '0 0 4px 0',
              color: 'white',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{project.title}</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#888', fontSize: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ThumbsUp size={12} /> {project.likes}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Play size={12} /> {project.visits}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
