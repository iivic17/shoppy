import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(null);
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('dark');
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = event => {
		setCurrentMode(event.target.value);

		localStorage.setItem('[shoppy]:theme-mode', event.target.value);
	};

	const setColor = value => {
		setCurrentColor(value);

		localStorage.setItem('[shoppy]:color-mode', value);
	};

	const handleClick = clicked => {
		setIsClicked({
			...initialState,
			[clicked]: true,
		});
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
