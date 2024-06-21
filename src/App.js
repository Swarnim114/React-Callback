import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Child Component
const ChildComponent = React.memo(({ count, onClick }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <h3>This is the child component</h3>
      <button onClick={onClick}>Increment</button>
      <h3>Count: {count}</h3>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(''); // Initialize input state

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className='App'>
      <input 
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment</button>
      <h3>Input Text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr/>
      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}

export default App;
