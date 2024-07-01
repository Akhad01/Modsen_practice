import { useRef } from 'react';

const Form = () => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ref', inputRef);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='inputField'>form</label>
      <input type='text' id='inputField' ref={inputRef} />
      <button type='submit'>button</button>
    </form>
  );
};

export default Form;
