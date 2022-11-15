import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
	const activeMenu = true;

	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div className='fixed right-5 bottom-5 z-[1000]'>
						<TooltipComponent content='Settings' position='TopCenter'>
							<button
								type='button'
								className={`text-3xl p-3 hover:drop-shadow-xl text-white bg-[blue] rounded-full`}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							Sidebar
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>Sidebar</div>
					)}

					<div
						className={
							activeMenu
								? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
								: 'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'
						}>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							Navbar
						</div>
					</div>

					<div>
						<Routes>
							<Route path='/' element='ECommerce' />
							<Route path='/ecommerce' element='ECommerce' />

							<Route path='/orders' element='Orders' />
							<Route path='/employees' element='Employees' />
							<Route path='/customers' element='Customers' />

							<Route path='/kanban' element='Kanban' />
							<Route path='/editor' element='Editor' />
							<Route path='/calendar' element='Calendar' />
							<Route path='/color-picker' element='ColorPicker' />

							<Route path='/line' element='Line' />
							<Route path='/area' element='Area' />
							<Route path='/bar' element='Bar' />
							<Route path='/pie' element='Pie' />
							<Route path='/color-mapping' element='ColorMapping' />
							<Route path='/pyramid' element='Pyramid' />
							<Route path='/stacked' element='Stacked' />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
