import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => {
                console.error(err);
                // Fallback
                setProjects([
                    { id: "1", title: "Project Alpha", category: "Web", image: "" }
                ]);
            });
    }, []);

    return (
        <div className="page-content">
            <h1>Featured Projects</h1>
            <div className="card-grid">
                {projects.map(p => (
                    <div key={p.id} className="card">
                        {p.image && <div style={{ height: '150px', backgroundColor: '#444', marginBottom: '1rem', borderRadius: '4px' }}></div>}
                        <h3>{p.title}</h3>
                        <span>{p.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
