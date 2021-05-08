import React, { useState } from "react";
import { SpinButton, ISpinButtonStyles } from "@fluentui/react/lib/SpinButton";
import {
  ThemeProvider,
  createTheme,
  PartialTheme,
} from "@fluentui/react/lib/Theme";
import { Toggle } from "@fluentui/react/lib/Toggle";
import { Stack, IStackTokens } from "@fluentui/react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import "./App.css";
import Lock from "./Lock";
import heart from "./heart.svg";
import { motion } from "framer-motion";

const lightTheme: PartialTheme = createTheme({
  palette: {
    themePrimary: "#0756f2",
    themeLighterAlt: "#f5f8fe",
    themeLighter: "#d6e3fd",
    themeLight: "#b2cafb",
    themeTertiary: "#6797f7",
    themeSecondary: "#2469f4",
    themeDarkAlt: "#074dda",
    themeDark: "#0641b8",
    themeDarker: "#043088",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#595959",
    neutralSecondary: "#373737",
    neutralPrimaryAlt: "#2f2f2f",
    neutralPrimary: "#000000",
    neutralDark: "#151515",
    black: "#0b0b0b",
    white: "#ffffff",
  },
});

const darkTheme: PartialTheme = createTheme({
  palette: {
    themePrimary: "#16cfd9",
    themeLighterAlt: "#010809",
    themeLighter: "#032123",
    themeLight: "#073e41",
    themeTertiary: "#0d7c82",
    themeSecondary: "#13b6bf",
    themeDarkAlt: "#2ad4dd",
    themeDark: "#47dae2",
    themeDarker: "#74e4ea",
    neutralLighterAlt: "#201f1e",
    neutralLighter: "#201f1e",
    neutralLight: "#1e1e1d",
    neutralQuaternaryAlt: "#1c1b1b",
    neutralQuaternary: "#1b1a19",
    neutralTertiaryAlt: "#1a1918",
    neutralTertiary: "#f5f9fd",
    neutralSecondary: "#f6fafe",
    neutralPrimaryAlt: "#f8fbfe",
    neutralPrimary: "#eff6fc",
    neutralDark: "#fbfdfe",
    black: "#fdfeff",
    white: "#201f1e",
  },
});

const containerStackTokens: IStackTokens = { childrenGap: 0 };
const wrapStackTokens: IStackTokens = { childrenGap: 10 };
const counterStackTokens: IStackTokens = {
  childrenGap: 25,
};
const lockStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 20,
};

const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };

interface IPLayConfig {
  play: number;
}

interface ICounter {
  firstCounter?: string | undefined;
  secondCounter?: string | undefined;
  thirdCounter?: string | undefined;
}

interface ICombination {
  combinationIsSet: boolean;
  cmb: string | undefined | null;
}

interface IUnlocked {
  unlocked: boolean;
  unlk: number;
}

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [combination, setCombinationIsSet] = useState<ICombination>({
    combinationIsSet: false,
    cmb: null,
  });
  const [value, setValue] = useState<ICounter>({
    firstCounter: "0",
    secondCounter: "0",
    thirdCounter: "0",
  });

  const [playConfig, setPlayConfig] = useState<IPLayConfig>({
    play: 0,
  });

  const [unlockConfig, setUnlockConfig] = useState<IUnlocked>({
    unlocked: false,
    unlk: 0,
  });

  function onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    if (checked) {
      setIsDarkTheme(!isDarkTheme);
    } else {
      setIsDarkTheme(!isDarkTheme);
    }
  }

  const setCombination = () => {
    if (
      value.firstCounter &&
      value.secondCounter &&
      value.thirdCounter !== undefined
    ) {
      if (combination.combinationIsSet) {
        throw new Error("Combination already set");
      } else {
        const currentCombination: string =
          value.firstCounter + value.secondCounter + value.thirdCounter;
        if (currentCombination === "000") {
          alert("can't set 000 as combination");
        } else {
          setCombinationIsSet({
            combinationIsSet: !combination.combinationIsSet,
            cmb: currentCombination,
          });
          setValue({
            firstCounter: "0",
            secondCounter: "0",
            thirdCounter: "0",
          });
        }
      }
    }
  };

  const unlock = () => {
    if (combination.cmb !== null && combination.cmb !== undefined) {
      if (
        value.firstCounter &&
        value.secondCounter &&
        value.thirdCounter !== undefined
      ) {
        const currentCombination: string =
          value.firstCounter + value.secondCounter + value.thirdCounter;
        if (currentCombination === combination.cmb) {
          if (unlockConfig.unlocked) {
            alert("App Already unlocked");
          } else {
            let newUnlk = unlockConfig.unlk + 1;
            setUnlockConfig({
              unlocked: true,
              unlk: newUnlk,
            });
          }
        } else {
          let newPlay = playConfig.play + 1;
          setPlayConfig({ play: newPlay });
        }
      }
    }
  };

  return (
    <ThemeProvider
      applyTo={"body"}
      theme={isDarkTheme ? darkTheme : lightTheme}
    >
      <div className="App">
        <div className="App-body">
          <header className="App-header">
            {unlockConfig.unlocked ? (
              <Lock
                key={unlockConfig.unlk}
                play={playConfig.play}
                unlocked={unlockConfig.unlocked}
                unlk={unlockConfig.unlk}
              />
            ) : (
              <Lock
                key={playConfig.play}
                play={playConfig.play}
                unlocked={unlockConfig.unlocked}
                unlk={unlockConfig.unlk}
              />
            )}
            <Toggle
              className="toggle-btn"
              label="Dark mode"
              inlineLabel
              onText="On"
              offText="Off"
              onChange={onChange}
            />
          </header>
          {unlockConfig.unlocked ? (
            <Stack
              horizontal
              horizontalAlign="center"
              disableShrink
              className="display-counter"
              tokens={counterStackTokens}
            >
              <motion.div
                className="unlock-message-wrapper"
                initial={{
                  opacity: 0,
                  y: 40
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: 0.2
                }}>
                <h1>:)</h1>
              </motion.div>
            </Stack>
          ) : (
            <motion.div className="mid-content-wrapper" initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.2
            }}>
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
              <Stack
                horizontal
                horizontalAlign="center"
                disableShrink
                className="display-counter"
                tokens={lockStackTokens}
              >
                <PrimaryButton
                  text="Set"
                  allowDisabledFocus
                  disabled={combination.combinationIsSet}
                  onClick={setCombination}
                />
                <DefaultButton
                  text="Unlock"
                  allowDisabledFocus
                  onClick={unlock}
                />
              </Stack>
            </Stack>
            </motion.div>
          )}
          <div className="name-signature">
            <p>Made with</p>
            <motion.div
              className="heart-icn-wrapper"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.3}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
              }}
            >
              <motion.div className="dragable-div"></motion.div>
              <img className="heart-icon" src={heart} alt="heart" />
            </motion.div>
            <p>by Paranshu Makwana</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
