import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

// From: https://www.robinwieruch.de/react-hooks/

// tutoial about side-ffect hook: useEffect()
export const StopWatch = () => {
  const [isOn, setIsOn] = useState(false);
  const [timer, setStimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => setStimer(timer + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOn, timer]);

  const onReset = () => {
    setIsOn(false);
    setStimer(0);
  };

  return (
    <div>
      {timer}
      <br />
      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}
      <Button
        variant="contained"
        color="primary"
        disabled={timer === 0}
        onClick={onReset}
      >
        Reset
      </Button>
    </div>
  );
};
