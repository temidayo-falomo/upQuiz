import React from "react";
import { Text, View } from "react-native";
import { AppContext } from "../global/Context";

function Timer(props) {
  const { timerCount } = React.useContext(AppContext);
  const [delay, setDelay] = React.useState(+timerCount);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
      props.setTpropVal(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  return (
    <Text
      style={{
        color: "#fff",
        fontSize: 20,
      }}
    >
      {seconds}
    </Text>
  );
}

export default Timer;
