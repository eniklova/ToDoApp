import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, status, onMoveTask, onDeleteTask }) => {
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <div className="col task-column">
            <h3>{status}</h3>
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                    <TaskItem
                        key={task.index}
                        task={task}
                        onMoveTask={(newStatus) => onMoveTask(index, newStatus)}
                        onDelete={() => onDeleteTask(index)}
                    />
                ))
            ) : (
                <div className="task-row empty">Žiadne úlohy</div> // Zobrazí text, ak sú úlohy prázdne
            )}
        </div>
    );
};

export default TaskList;









