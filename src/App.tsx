import React, { useState } from 'react';
import logo from './logo.svg';
import { SpinButton, ISpinButtonStyles } from "@fluentui/react/lib/SpinButton";
import './App.css';


const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };

interface ICounter  {
  firstCounter?: string | undefined;
  secondCounter?: string | undefined;
  thirdCounter?: string | undefined;
}

const App: React.FC = () => {

  const [value, setValue] = useState<ICounter>({
    firstCounter: "2",
    secondCounter: "0",
    thirdCounter: "0"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <h1>{value?.firstCounter}</h1>
            <h1>{value?.secondCounter}</h1>
            <h1>{value?.thirdCounter}</h1>
           <SpinButton
                value={value.firstCounter}
                min={0}
                max={10}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined ) {
                    setValue( { ...value ,firstCounter: newValue })
                  }
                }}
                styles={styles}
              />
               <SpinButton
                value={value?.secondCounter}
                min={0}
                max={10}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined) {
                    setValue( { ...value,secondCounter: newValue })
                  }
                }}
                styles={styles}
              />
               <SpinButton
                value={value?.thirdCounter}
                min={0}
                max={10}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onChange={(e, newValue) => {
                  if (newValue !== undefined) {
                    setValue( { ...value, thirdCounter: newValue })
                  }
                }}
                styles={styles}
              />

      </header>
    </div>
  );
}

export default App;
