import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Modal } from 'react-bootstrap';
import './Main.css';

const Main = ({ showModal, handleCloseModal }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTask = { ...task, status: 'To do', id: Date.now() }; 
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const moveTask = (id, newStatus) => {
        console.log('Moving task with ID:', id, 'to status:', newStatus);  // Logovanie pri presune úlohy
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const repeatTask = (task) => {
        const newTask = { ...task, id: Date.now(), status: 'To do' };
        setTasks(prevTasks => {
            return prevTasks.filter(t => t.id !== task.id).concat(newTask);
        });
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
                    <TaskList tasks={tasks} status="To do" MoveTask={moveTask} DeleteTask={deleteTask} RepeatTask={repeatTask} />
                </div>
                <div className="col border p-3">
                    <TaskList tasks={tasks} status="In progress" MoveTask={moveTask} DeleteTask={deleteTask} RepeatTask={repeatTask} />
                </div>
                <div className="col border p-3">
                    <TaskList tasks={tasks} status="Done" MoveTask={moveTask} DeleteTask={deleteTask} RepeatTask={repeatTask} />
                </div>
            </div>
        </main>
    );
};

export default Main;
