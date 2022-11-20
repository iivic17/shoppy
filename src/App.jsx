import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, Footer, ThemeSettings } from './components';
import Router from './Router';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
	const {
		activeMenu,
		setActiveMenu,
		themeSettings,
		setThemeSettings,
		currentColor,
		currentMode,
	} = useStateContext();

	return (
		<div className={currentMode === 'dark' ? 'dark' : ''}>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div className='fixed right-5 bottom-5 z-[1000]'>
						<TooltipComponent content='Settings' position='TopCenter'>
							<button
								type='button'
								onClick={() => setThemeSettings(true)}
								className={`text-3xl p-3 hover:drop-shadow-xl text-white bg-[${currentColor}] rounded-full`}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}

					<div className='dark:bg-main-dark-bg bg-main-bg min-h-screen flex-2 w-full'>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>

						<div className='xl:max-w-7xl mx-auto my-[5rem] sm:my-[7rem] md:my-10 px-6 sm:px-8'>
							{themeSettings && <ThemeSettings />}

							<Router />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
