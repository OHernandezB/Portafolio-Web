import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center min-vh-100 position-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h5 className="text-uppercase mb-3" style={{ color: 'var(--accent-color)', letterSpacing: '3px' }}>
                            Hola, mi nombre es
                        </h5>
                        <h1 className="display-1 fw-bold mb-4">
                            Omar Hernández
                        </h1>
                        <h2 className="display-5 text-secondary mb-4 opacity-75">
                            Desarrollador Web FullStack / Analista Programador
                        </h2>
                        <p className="lead mb-5" style={{ maxWidth: '600px' }}>
                            Especializado en crear experiencias digitales excepcionales.
                            Actualmente busco oportunidades para aplicar mis habilidades en un entorno profesional.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#projects" className="btn btn-primary btn-lg">
                                Ver Proyectos
                            </a>
                            <a href="#contact" className="btn btn-outline-light btn-lg">
                                Contacto
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center mt-5 mt-lg-0">
                        <div className="mx-auto" style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1' }}>
                            <img
                                src="/profile.jpg"
                                alt="Omar Hernández"
                                className="img-fluid rounded-circle shadow-lg"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    border: '2px solid var(--accent-color)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
