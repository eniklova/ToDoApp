//Komponenta TaskForm slúži na zobrazenie formulára pre pridanie novej úlohy do zoznamu úloh
import React from 'react';
import './TaskForm.css'; 
import useTask from '../hooks/useTask';

const TaskForm = ({ onTaskSubmit, onClose }) => {
    const {
        taskName,
        taskDetail,
        priority,
        handleTaskNameChange,
        handleTaskDetailChange, 
        handlePriorityChange,
        resetTask,
    } = useTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        onTaskSubmit({ taskName, taskDetail, priority });
        resetTask();
        onClose();  
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
                <label htmlFor="taskName">Nová úloha</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="taskName" 
                    placeholder="Napíš názov úlohy" 
                    value={taskName}
                    onChange={(e) => handleTaskNameChange(e.target.value)}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="taskDetail">Detail úlohy</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="taskDetail" 
                    placeholder="Napíš detail úlohy (nepovinné)" 
                    value={taskDetail}
                    onChange={(e) => handleTaskDetailChange(e.target.value)} 
                />
            </div>
            <div className="form-group form-group-priority">
                <label>Priorita</label>
                <div>
                    <button 
                        type="button" 
                        className={`btn ${priority === 'low' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handlePriorityChange('low')}
                    >    Nízka
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${priority === 'medium' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handlePriorityChange('medium')}                    >
                        Stredná
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${priority === 'high' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handlePriorityChange('high')}                    >
                        Vysoká
                    </button>
                </div>
            </div>
            <div className="task-form-footer">
                <button type="button" className="btn btn-secondary" onClick={resetTask}>Vymaž formulár</button>
                <button type="submit" className="btn btn-success">Pridať úlohu</button>
            </div>
        </form>
    );
};

export default TaskForm;
