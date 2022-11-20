import { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
		if (isClicked[clicked] === true) {
			setIsClicked({
				...initialState,
				[clicked]: false,
			});

			return;
		}

		setIsClicked({
			...initialState,
			[clicked]: true,
		});
	};

	useEffect(() => {
		setIsClicked(initialState);
	}, [activeMenu]);

	useEffect(() => {
		const mode = localStorage.getItem('[shoppy]:theme-mode');
		const color = localStorage.getItem('[shoppy]:color-mode');

		if (mode) setCurrentMode(mode);
		if (color) setCurrentColor(color);
	}, []);

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
