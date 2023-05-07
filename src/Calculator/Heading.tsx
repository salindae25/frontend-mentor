const Heading = () => {
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-calculator-app-whit-text">calc</h1>
      <div className="flex gap-8 items-center">
        <span className="text-sm uppercase text-calculator-app-whit-text">
          Theme
        </span>
      </div>
    </div>
  );
};

export default Heading;
