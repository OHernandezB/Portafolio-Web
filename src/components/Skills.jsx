import React from 'react';

const Skills = () => {
    const languages = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ];

    const ides = [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Google Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Cursor', icon: 'https://www.google.com/s2/favicons?domain=cursor.com&sz=256' },
        { name: 'Google Antigravity', icon: 'https://www.google.com/s2/favicons?domain=antigravity.google&sz=256' },
    ];

    const SkillSection = ({ title, items }) => (
        <div className="mb-5">
            <h3 className="text-center mb-4 text-secondary">{title}</h3>
            <div className="row g-4 justify-content-center">
                {items.map((skill, index) => (
                    <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="p-3 text-center border rounded border-secondary bg-transparent glass h-100 skill-card d-flex flex-column align-items-center justify-content-center">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="mb-3"
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                            />
                            <h5 className="mb-0 text-white" style={{ fontSize: '0.9rem' }}>{skill.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-5">
            <div className="container">
                <h2 className="mb-5 text-center">Habilidades Técnicas</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <SkillSection title="Lenguajes y Tecnologías" items={languages} />
                        <SkillSection title="IDEs y Herramientas" items={ides} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
