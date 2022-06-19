import { useEffect, useRef, useState } from 'react';

function ToDo() {
  const [loading, setLoading] = useState(true);
  const [toDo, setToDo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setToDo(data);
            setLoading(false);
          }
        }, 1000);
      });

    // run when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  console.log(toDo);

  return <div>{toDo.title}</div>;
}

export default ToDo;
