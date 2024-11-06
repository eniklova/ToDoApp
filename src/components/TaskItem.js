// src/components/TaskItem.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onMoveTask, onDelete }) => (
    <div className="task">
        <strong>{task.taskName}</strong>
        <p>{task.taskDetail}</p>
        <p>Priorita: {task.priority}</p>

        {task.status === 'To do' && (
            <button onClick={() => onMoveTask('In progress')}>Presunúť do In progress</button>
        )}
        {task.status === 'In progress' && (
            <>
                <button onClick={() => onMoveTask('Done')}>Presunúť do Done</button>
            </>
        )}
        {task.status === 'Done' && (
            <button onClick={onDelete} className="btn btn-danger">
                <FaTrash />
            </button>
        )}
    </div>
);

export default TaskItem;


