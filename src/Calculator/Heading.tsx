import ThemeSelector from "./ThemeSelector";
import { ThemeType } from "./type";

const Heading = ({
  onThemeChange,
}: {
  onThemeChange: (v: ThemeType) => void;
}) => {
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-[var(--calculator-app-keypad-key)]">calc</h1>
      <div className="flex gap-4 items-center">
        <span className="text-sm uppercase text-[var(--calculator-app-keypad-key)]">
          Theme
        </span>
        <ThemeSelector onThemeChange={onThemeChange} />
      </div>
    </div>
  );
};

export default Heading;
