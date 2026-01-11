import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Bar Pirata App",
            description: "Aplicación web para la gestión y visualización de un bar temático. Permite a los usuarios ver el catálogo de productos y eventos. Desarrollado como parte de un proyecto académico.",
            tags: ["Python", "Django", "HTML/CSS", "Bootstrap"],
            image: "/project-bar-pirata.png",
            link: "https://github.com/OHernandezB/Bar-pirata-appm.git"
        },
        // Add more projects here
    ];

    return (
        <section id="projects" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="mb-5 text-center">Mis Proyectos</h2>
                <div className="row g-4 justify-content-center">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 glass overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
                                <div
                                    className="card-img-top position-relative"
                                    style={{ height: '200px', overflow: 'hidden' }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-white fw-bold">{project.title}</h5>
                                    <p className="card-text small mb-4 flex-grow-1">
                                        {project.description}
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="badge bg-transparent border border-secondary text-secondary" style={{ fontSize: '0.75rem' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary w-100">
                                        <i className="bi bi-github me-2"></i> Ver en GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
