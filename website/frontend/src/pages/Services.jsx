import { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/services')
            .then(res => {
                setServices(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                // Fallback data if backend is down
                setServices([
                    { id: "1", title: "Web Development", description: "Modern websites (Simulated)" },
                    { id: "2", title: "App Design", description: "Mobile first designs (Simulated)" }
                ]);
            });
    }, []);

    return (
        <div className="page-content">
            <h1>Our Services</h1>
            {loading ? <p>Loading...</p> : (
                <div className="card-grid">
                    {services.map(s => (
                        <div key={s.id} className="card">
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Services;
