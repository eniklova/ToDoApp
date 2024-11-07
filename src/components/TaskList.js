//komponenta TaskList zobrazuje zoznam úloh podľa ich stavu
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, status, MoveTask, DeleteTask, RepeatTask }) => (
    <div>
        <h3>{status}</h3>
        {tasks
            .filter(task => task.status === status)
            .map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onMoveTask={(newStatus) => MoveTask(task.id, newStatus)}
                    onDelete={() => DeleteTask(task.id)} 
                    onRepeatTask={() => RepeatTask(task)}  
                />
            ))}
    </div>
);

export default TaskList;



