import React, { useState } from 'react';
import logo from './logo.svg';
import { SpinButton } from "@fluentui/react/lib/SpinButton";
import './App.css';

const App: React.FC = () => {

  const [cmb, setCmb] = useState<number[] | null>([0, 0, 0]);


// Null checking on cmb state and accessing cmb state 
  const getCmb = (index: number) => {
    if (cmb != null) {
      return cmb[index];
    }
  };


  const _IncrementCmb = (value: string, index: number) => {
    const newCmb = cmb?.slice();
    if (newCmb !== undefined) {
      if (newCmb[index] < 9) {
        newCmb[index] = +value + 1;
        setCmb(newCmb);
      } else {
        newCmb[index] = 0;
        setCmb(newCmb);
      }
    }
  };

  const _DecrementCmb = (value: string, index: number) => {
    const newCmb = cmb?.slice();
    if (newCmb !== undefined) {
      if (newCmb[index] > 0) {
        newCmb[index] = +value - 1;
        setCmb(newCmb);
      } else {
        newCmb[index] = 9;
        setCmb(newCmb);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {
            cmb?.map((value) => (
              <h1>{value}</h1>
            ))
          }
        <SpinButton
                value={String(getCmb(0))}
                min={0}
                max={100}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onIncrement={(value) => {
                  _IncrementCmb(value, 0);
                }}
                onDecrement={(value) => {
                  _DecrementCmb(value, 0);
                }}
              />
              <SpinButton
                value={String(getCmb(1))}
                min={0}
                max={100}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onIncrement={(value) => {
                  _IncrementCmb(value, 1);
                }}
                onDecrement={(value) => {
                  _DecrementCmb(value, 1);
                }}
              />
              <SpinButton
                value={String(getCmb(2))}
                min={0}
                max={100}
                step={1}
                incrementButtonAriaLabel="Increase value by 1"
                decrementButtonAriaLabel="Decrease value by 1"
                onIncrement={(value) => {
                  _IncrementCmb(value, 2);
                }}
                onDecrement={(value) => {
                  _DecrementCmb(value, 2);
                }}
              />
      </header>
    </div>
  );
}

export default App;
