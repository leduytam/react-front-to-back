import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);

    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.innerText = 'Goodbye';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
