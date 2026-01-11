import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top glass" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    {/* Brand Removed */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ borderColor: 'var(--text-secondary)' }}
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#hero">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
