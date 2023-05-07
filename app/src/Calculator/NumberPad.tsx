import { MouseEventHandler } from "react";
import "./style.css";
const NumberPad = ({
  handlePress,
}: {
  handlePress: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div className="grid w-full bg-calculator-app-secondary grid-cols-4 grid-rows-5 p-6 pb-8 mt-6 gap-5 rounded-md">
      <button onClick={handlePress} className="btn-orange">
        7
      </button>
      <button onClick={handlePress} className="btn-orange">
        8
      </button>
      <button onClick={handlePress} className="btn-orange">
        9
      </button>
      <button onClick={handlePress} className="btn-blue">
        del
      </button>
      <button onClick={handlePress} className="btn-orange">
        4
      </button>
      <button onClick={handlePress} className="btn-orange">
        5
      </button>
      <button onClick={handlePress} className="btn-orange">
        6
      </button>
      <button onClick={handlePress} className="btn-orange">
        +
      </button>
      <button onClick={handlePress} className="btn-orange">
        1
      </button>
      <button onClick={handlePress} className="btn-orange">
        2
      </button>
      <button onClick={handlePress} className="btn-orange">
        3
      </button>
      <button onClick={handlePress} className="btn-orange">
        -
      </button>
      <button onClick={handlePress} className="btn-orange">
        .
      </button>
      <button onClick={handlePress} className="btn-orange">
        0
      </button>
      <button onClick={handlePress} className="btn-orange">
        /
      </button>
      <button onClick={handlePress} className="btn-orange">
        x
      </button>
      <button onClick={handlePress} className="btn-blue col-span-2">
        Reset
      </button>
      <button onClick={handlePress} className="btn-red col-span-2">
        =
      </button>
    </div>
  );
};
export default NumberPad;
