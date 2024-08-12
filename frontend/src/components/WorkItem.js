// src/components/WorkItem.js
import React from 'react';

const WorkItem = ({ work, index, onEdit, onDelete }) => {
    return (
        <div className="work-item">
            <h3>{work.title}</h3>
            <img src={work.image} alt={work.title} />
            <p>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
                Vizitează site-ul clientului
            </a>
            <button onClick={() => onEdit(index)}>Editează</button>
            <button onClick={() => onDelete(index)}>Șterge</button>
        </div>
    );
};

export default WorkItem;
