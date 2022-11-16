import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, Footer, ThemeSettings } from './components';
import {
	Ecommerce,
	Calendar,
	ColorPicker,
	Customers,
	Editor,
	Employees,
	Kanban,
	Orders,
	AreaChart,
	BarChart,
	ColorMappingChart,
	FinancialChart,
	LineChart,
	PieChart,
	PyramidChart,
	StackedChart,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
	const { activeMenu } = useStateContext();

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
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}

					<div
						className={
							activeMenu
								? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
								: 'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'
						}>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>
					</div>

					<div>
						<Routes>
							<Route path='/' element={<Ecommerce />} />
							<Route path='/ecommerce' element={<Ecommerce />} />

							<Route path='/orders' element={<Orders />} />
							<Route path='/employees' element={<Employees />} />
							<Route path='/customers' element={<Customers />} />

							<Route path='/kanban' element={<Kanban />} />
							<Route path='/editor' element={<Editor />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/color-picker' element={<ColorPicker />} />

							<Route path='/line' element={<LineChart />} />
							<Route path='/area' element={<AreaChart />} />
							<Route path='/bar' element={<BarChart />} />
							<Route path='/pie' element={<PieChart />} />
							<Route path='/financial' element={<FinancialChart />} />
							<Route
								path='/color-mapping'
								element={<ColorMappingChart />}
							/>
							<Route path='/pyramid' element={<PyramidChart />} />
							<Route path='/stacked' element={<StackedChart />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
