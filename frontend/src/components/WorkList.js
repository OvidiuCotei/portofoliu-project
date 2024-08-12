// src/components/WorkList.js
import React from 'react';
import WorkItem from './WorkItem';

const WorkList = ({ works, onEdit, onDelete }) => {
    return (
        <div id="works-list">
            {works.map((work, index) => (
                <WorkItem
                    key={index}
                    index={index}
                    work={work}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default WorkList;
