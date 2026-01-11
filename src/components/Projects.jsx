import React from 'react';

const Projects = () => {
    const projects = [1, 2, 3]; // Placeholder data

    return (
        <section id="projects" className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="mb-5 text-center">Mis Proyectos</h2>
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project} className="col-md-4">
                            <div className="card h-100 border-0 glass" style={{ backgroundColor: 'var(--bg-card)' }}>
                                <div
                                    className="card-img-top"
                                    style={{
                                        height: '200px',
                                        backgroundColor: '#2d2d2d',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    <span>Vista Previa del Proyecto</span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-white">Título del Proyecto {project}</h5>
                                    <p className="card-text small">
                                        Descripción breve del proyecto. Explica qué problema resuelve y qué tecnologías se utilizaron.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-dark border border-secondary text-secondary">React</span>
                                        <span className="badge bg-dark border border-secondary text-secondary">Bootstrap</span>
                                    </div>
                                    <a href="#" className="btn btn-sm btn-outline-primary">Ver Código</a>
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
