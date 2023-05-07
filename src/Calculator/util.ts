export const OpertionType = {
  OPERATION: "operation",
  RESET: "reset",
  DELETE: "del",
  VALUE: "value",
  CALCULATE: "calculate",
} as const;
export function detemineType(value: string) {
  if (["+", "/", "x", "-"].includes(value.toLowerCase())) {
    return { type: OpertionType.OPERATION, key: value };
  } else if (value === "=") {
    return { type: OpertionType.CALCULATE, key: value };
  } else if (value == "reset") return { type: OpertionType.RESET };
  else if (value == "del") return { type: OpertionType.DELETE };
  return { type: OpertionType.VALUE, key: value };
}
export const evaluateString = (
  current: ReturnType<typeof detemineType>,
  str: string,
  original: number
) => {
  switch (current.type) {
    case "operation":
      return original;
    case "reset":
      return 0;
    case "del":
      return eval(str);
    case "value":
      if (
        current.key == "." &&
        ["+", "/", "x", "-"].includes(str[str.length - 1])
      ) {
        return original;
      }
      return eval(str);
    case "calculate":
      return eval(str);
  }
};

export const concatString = (
  current: ReturnType<typeof detemineType>,
  str: string
) => {
  const newStr = str;
  switch (current.type) {
    case "operation":
      if (current.key == "x") return newStr + "*";
      return newStr + current.key;
    case "reset":
      return "";
    case "del":
      return newStr.substring(0, newStr.length - 1);
    case "value":
      if (
        current.key == "." &&
        ["+", "/", "x", "-"].includes(newStr[newStr.length - 1])
      ) {
        return newStr;
      }
      return newStr + current.key;
    case "calculate":
      return newStr;
  }
};
