import React, { useCallback, useState } from 'react';

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevTasks) => {
      return [...prevTasks, 'Some Tasks'];
    });
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button onClick={addTask} className='btn btn-primary'>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
