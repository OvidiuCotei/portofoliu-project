// src/App.js
import React, { useState } from 'react';
import WorkList from './components/WorkList';
import WorkForm from './components/WorkForm';
import './styles.css';

function App() {
    const [works, setWorks] = useState([]);
    const [currentWork, setCurrentWork] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const addWork = (work) => {
        setWorks([...works, work]);
    };

    const updateWork = (index, updatedWork) => {
        const updatedWorks = works.map((work, i) => (i === index ? updatedWork : work));
        setWorks(updatedWorks);
    };

    const deleteWork = (index) => {
        setWorks(works.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setCurrentWork({ ...works[index], index });
        setShowForm(true);
    };

    const handleSave = (work) => {
        if (currentWork) {
            updateWork(currentWork.index, work);
        } else {
            addWork(work);
        }
        setShowForm(false);
        setCurrentWork(null);
    };

    const handleCancel = () => {
        setShowForm(false);
        setCurrentWork(null);
    };

    return (
        <div className="App">
            <header>
                <h1>Portofoliu Artist Digital</h1>
            </header>
            <main>
                <section id="portfolio">
                    <h2>Lucrări</h2>
                    <WorkList works={works} onEdit={handleEdit} onDelete={deleteWork} />
                    <button onClick={() => setShowForm(true)}>Adaugă Lucrare</button>
                </section>
                {showForm && (
                    <WorkForm
                        currentWork={currentWork}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
