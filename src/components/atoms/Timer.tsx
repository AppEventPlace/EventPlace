import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";

interface TimerProp {
  SetIndisponibleRetry: (estado: boolean) => void;
}

const Timer: React.FC<TimerProp> = ({ SetIndisponibleRetry }) => {
  const [minute, setMinute] = useState<number>(3);
  const [second, setSecond] = useState<number>(0);
  const startTimer = () => {};
  useEffect(() => {
    const interval = setInterval(() => {
      if (minute >= 0) {
        if (second > 0) {
          setSecond(second - 1);
        } else if (second == 0 && minute > 0) {
          setSecond(59);
          setMinute(minute - 1);
        }
      }
      if (minute == 0 && second == 0) {
        SetIndisponibleRetry(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minute, second]);

  return (
    <View>
      <Text style={CommonTextStyles.Subtitle_16}>
        {minute.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

export default Timer;
