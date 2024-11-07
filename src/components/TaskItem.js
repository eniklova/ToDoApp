// Komponenta TaskItem zobrazuje informácie o tasku a umožnuje jeho presun v ramci
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdOutlineRepeatOn } from 'react-icons/md';  

const TaskItem = ({ task, onMoveTask, onDelete, onRepeatTask }) => (
    <div className="task">
        <strong>{task.taskName}</strong>
        <p>{task.taskDetail}</p>
        <p>Priorita: {task.priority}</p>

        {task.status === 'To do' && (
            <button onClick={() => onMoveTask('In progress')}>Presunúť do In progress</button>
        )}
        {task.status === 'In progress' && (
            <button onClick={() => onMoveTask('Done')}>Presunúť do Done</button>
        )}

         <button onClick={onDelete} className="btn btn-danger delete-button">
            <FaTrash />
        </button>

        {task.status === 'Done' && (
            <button onClick={() => onRepeatTask(task)} className="btn btn-secondary repeat-button">
                <MdOutlineRepeatOn />
            </button>
        )}
    </div>
);

export default TaskItem;




