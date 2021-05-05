import React, { useState } from "react";
import logo from "./logo.svg";
import { SpinButton, ISpinButtonStyles } from "@fluentui/react/lib/SpinButton";
import { Stack, IStackTokens } from "@fluentui/react";
import "./App.css";

const containerStackTokens: IStackTokens = { childrenGap: 0 };
const wrapStackTokens: IStackTokens = { childrenGap: 10 };
const counterStackTokens: IStackTokens = {
  childrenGap: 25,
};

const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };

interface ICounter {
  firstCounter?: string | undefined;
  secondCounter?: string | undefined;
  thirdCounter?: string | undefined;
}

const App: React.FC = () => {
  const [value, setValue] = useState<ICounter>({
    firstCounter: "0",
    secondCounter: "0",
    thirdCounter: "0",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <Stack tokens={containerStackTokens}>
          <Stack
            horizontal
            horizontalAlign="center"
            disableShrink
            className="display-counter"
            tokens={counterStackTokens}
          >
            <span>
              {" "}
              <h1>{value?.firstCounter}</h1>
            </span>
            <span>
              <h1>{value?.secondCounter}</h1>
            </span>
            <span>
              {" "}
              <h1>{value?.thirdCounter}</h1>
            </span>
          </Stack>

          <Stack
            horizontal
            wrap
            horizontalAlign="center"
            tokens={wrapStackTokens}
          >
            <Stack.Item>
              <SpinButton
                value={value.firstCounter}
                min={0}
                max={9}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined) {
                    setValue({ ...value, firstCounter: newValue });
                  }
                }}
                styles={styles}
              />
            </Stack.Item>
            <Stack.Item>
              <SpinButton
                value={value?.secondCounter}
                min={0}
                max={9}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined) {
                    setValue({ ...value, secondCounter: newValue });
                  }
                }}
                styles={styles}
              />
            </Stack.Item>
            <Stack.Item>
              <SpinButton
                value={value?.thirdCounter}
                min={0}
                max={9}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined) {
                    setValue({ ...value, thirdCounter: newValue });
                  }
                }}
                styles={styles}
              />
            </Stack.Item>
          </Stack>
        </Stack>
      </body>
    </div>
  );
};

export default App;
