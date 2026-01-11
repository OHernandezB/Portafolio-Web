import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-5 text-center" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="mb-4">Contáctame</h2>
                <p className="mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Estoy disponible para prácticas profesionales y nuevos proyectos.
                    ¡No dudes en contactarme si tienes alguna oportunidad!
                </p>
                <div className="d-flex justify-content-center gap-5 mb-4">
                    <a href="https://www.linkedin.com/in/omar-esteban-hern%C3%A1ndez-baro-0095621a4/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-center hover-effect">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            alt="LinkedIn"
                            width="50"
                            height="50"
                            className="mb-2 d-block mx-auto"
                        />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/OHernandezB" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-center hover-effect">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            width="50"
                            height="50"
                            className="mb-2 d-block mx-auto bg-white rounded-circle p-1"
                        />
                        <span>GitHub</span>
                    </a>
                    <a href="mailto: omarehb10@gmail.com " className="text-decoration-none text-white text-center hover-effect">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                            alt="Gmail"
                            width="50"
                            height="50"
                            className="mb-2 d-block mx-auto"
                        />
                        <span>Gmail</span>
                    </a>
                </div>
                <hr className="border-secondary my-4" />
                <p className="small text-secondary m-0">
                    © {new Date().getFullYear()} Portafolio Web. Creado con React y Bootstrap.
                </p>
            </div>
        </section>
    );
};

export default Contact;
