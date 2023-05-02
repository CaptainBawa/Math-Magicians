import Buttons from './buttonsComponents';

const Calculator = () => (
  <div className="content-container">
    <input className="display-screen" type="text" value="0" readOnly />
    <div className="btn-container">
      <Buttons type="button" value="AC" />
      <Buttons type="button" value="+/-" />
      <Buttons type="button" value="%" />
      <Buttons className="orange-btn" type="button" value="÷" />
    </div>

    <div className="btn-container">
      <Buttons type="button" value="7" />
      <Buttons type="button" value="8" />
      <Buttons type="button" value="9" />
      <Buttons className="orange-btn" type="button" value="x" />
    </div>

    <div className="btn-container">
      <Buttons type="button" value="4" />
      <Buttons type="button" value="5" />
      <Buttons type="button" value="6" />
      <Buttons className="orange-btn" type="button" value="-" />
    </div>

    <div className="btn-container">
      <Buttons type="button" value="1" />
      <Buttons type="button" value="2" />
      <Buttons type="button" value="3" />
      <Buttons className="orange-btn" type="button" value="+" />
    </div>

    <div className="btn-container">
      <Buttons className="wide-btn" type="button" value="0" />
      <Buttons type="button" value="." />
      <Buttons className="orange-btn" type="button" value="=" />
    </div>

  </div>
);

export default Calculator;
