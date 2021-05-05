import React, { useState } from "react";
import logo from "./logo.svg";
import { SpinButton, ISpinButtonStyles } from "@fluentui/react/lib/SpinButton";
import { ThemeProvider, createTheme, PartialTheme } from '@fluentui/react/lib/Theme';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Stack, IStackTokens } from "@fluentui/react";
import "./App.css";


const lightTheme: PartialTheme = createTheme({
  palette: {
    themePrimary: '#0756f2',
    themeLighterAlt: '#f5f8fe',
    themeLighter: '#d6e3fd',
    themeLight: '#b2cafb',
    themeTertiary: '#6797f7',
    themeSecondary: '#2469f4',
    themeDarkAlt: '#074dda',
    themeDark: '#0641b8',
    themeDarker: '#043088',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  }});


  const darkTheme: PartialTheme = createTheme({
    palette: {
      themePrimary: '#16cfd9',
      themeLighterAlt: '#010809',
      themeLighter: '#032123',
      themeLight: '#073e41',
      themeTertiary: '#0d7c82',
      themeSecondary: '#13b6bf',
      themeDarkAlt: '#2ad4dd',
      themeDark: '#47dae2',
      themeDarker: '#74e4ea',
      neutralLighterAlt: '#201f1e',
      neutralLighter: '#201f1e',
      neutralLight: '#1e1e1d',
      neutralQuaternaryAlt: '#1c1b1b',
      neutralQuaternary: '#1b1a19',
      neutralTertiaryAlt: '#1a1918',
      neutralTertiary: '#f5f9fd',
      neutralSecondary: '#f6fafe',
      neutralPrimaryAlt: '#f8fbfe',
      neutralPrimary: '#eff6fc',
      neutralDark: '#fbfdfe',
      black: '#fdfeff',
      white: '#201f1e',
    }});
  
  

  
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

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const [value, setValue] = useState<ICounter>({
    firstCounter: "0",
    secondCounter: "0",
    thirdCounter: "0",
  });


function onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    if (checked) {
      setIsDarkTheme(!isDarkTheme)
    } else {
      setIsDarkTheme(!isDarkTheme)
    }
}


  return (
    <ThemeProvider applyTo={"body"} theme={isDarkTheme? darkTheme: lightTheme}>
    <div className="App">
      
      <div className="App-body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Toggle className="toggle-btn" label="Dark mode" inlineLabel onText="On" offText="Off" onChange={onChange} />
      </header>
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
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
