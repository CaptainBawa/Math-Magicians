import React, { useState } from 'react';
import Buttons from './buttonsComponents';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [count, setCount] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    setCount(calculate(count, value));
  };

  return (
    <div className="content-container">
      <input className="display-screen" type="text" value={count.next || count.operation || count.total || '0'} readOnly />
      <div className="btn-container">
        <Buttons type="button" value="AC" handleClick={handleClick} />
        <Buttons type="button" value="+/-" handleClick={handleClick} />
        <Buttons type="button" value="%" handleClick={handleClick} />
        <Buttons className="orange-btn" type="button" value="÷" handleClick={handleClick} />
      </div>

      <div className="btn-container">
        <Buttons type="button" value="7" handleClick={handleClick} />
        <Buttons type="button" value="8" handleClick={handleClick} />
        <Buttons type="button" value="9" handleClick={handleClick} />
        <Buttons className="orange-btn" type="button" value="x" handleClick={handleClick} />
      </div>

      <div className="btn-container">
        <Buttons type="button" value="4" handleClick={handleClick} />
        <Buttons type="button" value="5" handleClick={handleClick} />
        <Buttons type="button" value="6" handleClick={handleClick} />
        <Buttons className="orange-btn" type="button" value="-" handleClick={handleClick} />
      </div>

      <div className="btn-container">
        <Buttons type="button" value="1" handleClick={handleClick} />
        <Buttons type="button" value="2" handleClick={handleClick} />
        <Buttons type="button" value="3" handleClick={handleClick} />
        <Buttons className="orange-btn" type="button" value="+" handleClick={handleClick} />
      </div>

      <div className="btn-container">
        <Buttons className="wide-btn" type="button" value="0" handleClick={handleClick} />
        <Buttons type="button" value="." handleClick={handleClick} />
        <Buttons className="orange-btn" type="button" value="=" handleClick={handleClick} />
      </div>

    </div>
  );
};

export default Calculator;
