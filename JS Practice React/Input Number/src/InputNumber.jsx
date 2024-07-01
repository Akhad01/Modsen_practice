import { useState } from 'react';

const Message = ({ number }) => {
  if (number > 0) {
    return <p>Число больше нуля</p>;
  } else if (number < 0) {
    return <p>Число меньше нуля</p>;
  } else {
    return <p>Число равно нулю</p>;
  }
};

const InputNumber = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setNumber(value);
  };

  return (
    <div>
      <label htmlFor='numberInput'>Введите число:</label>
      <input type='number' id='numberInput' onChange={handleChange} />
      <Message number={number} />
    </div>
  );
};

export default InputNumber;
