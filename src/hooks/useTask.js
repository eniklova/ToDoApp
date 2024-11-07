//hook spravuje tri hlavné hodnoty: názov tasku, detail tasku a prioritu tasku, ich zmenu a reset stavu
import { useState } from 'react';


const useTask = () => {
  const [taskName, setTaskName] = useState('');  
  const [taskDetail, setTaskDetail] = useState(''); 
  const [priority, setPriority] = useState(''); 

  const handleTaskNameChange = (name) => setTaskName(name);
  const handleTaskDetailChange = (detail) => setTaskDetail(detail);
  const handlePriorityChange = (priority) => setPriority(priority);
  const resetTask = () => {
      setTaskName('');
      setTaskDetail('');
      setPriority('');
  };

  return {
      taskName,
      taskDetail,
      priority,
      handleTaskNameChange,
      handleTaskDetailChange,
      handlePriorityChange,
      resetTask,
  };
};

export default useTask;