// src/layouts/Main.js
import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Modal } from 'react-bootstrap';
import './Main.css'; 

const Main = ({ showModal, handleCloseModal }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks(prevTasks => [
            ...prevTasks, 
            { ...task, status: 'To do', index: prevTasks.length }
        ]);
    };

    const moveTask = (index, newStatus) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], status: newStatus };
            return updatedTasks;
        });
    };

    const deleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <main className="container mt-4">
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Pridať úlohu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TaskForm onTaskSubmit={addTask} onClose={handleCloseModal} />
                </Modal.Body>        
            </Modal>

            <div className="row">
                <div className="col border p-3">
                    <TaskList tasks={tasks} status="To do" onMoveTask={moveTask} onDeleteTask={deleteTask} />
                </div>
                <div className="col border p-3">
                    <TaskList tasks={tasks} status="In progress" onMoveTask={moveTask} onDeleteTask={deleteTask} />
                </div>
                <div className="col border p-3">
                    <TaskList tasks={tasks} status="Done" onMoveTask={moveTask} onDeleteTask={deleteTask} />
                </div>
            </div>
        </main>
    );
};

export default Main;