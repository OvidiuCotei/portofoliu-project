// src/components/WorkForm.js
import React, { useState, useEffect } from 'react';

const WorkForm = ({ currentWork, onSave, onCancel }) => {
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        image: '',
        link: '',
        status: 'visible'
    });

    useEffect(() => {
        if (currentWork) {
            setFormValues(currentWork);
        }
    }, [currentWork]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormValues({ ...formValues, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formValues);
    };

    return (
        <section id="work-form-section">
            <h2>{currentWork ? 'Editează Lucrare' : 'Adaugă Lucrare'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titlu:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Descriere:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                ></textarea>

                <label htmlFor="image">Imagine:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                />

                <label htmlFor="link">Link către site-ul clientului:</label>
                <input
                    type="url"
                    id="link"
                    name="link"
                    value={formValues.link}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formValues.status}
                    onChange={handleChange}
                    required
                >
                    <option value="visible">Afișat</option>
                    <option value="hidden">Ascuns</option>
                </select>

                <button type="submit">Salvează</button>
                <button type="button" onClick={onCancel}>Anulează</button>
            </form>
        </section>
    );
};

export default WorkForm;
