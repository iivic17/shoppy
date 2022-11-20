import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';
import {
	Ecommerce,
	Calendar,
	ColorPicker,
	Customers,
	Editor,
	Employees,
	Kanban,
	Orders,
	Area,
	Bar,
	ColorMapping,
	Financial,
	Line,
	Pie,
	Pyramid,
	Stacked,
} from './pages';

const Router = () => {
	const { activeMenu, setActiveMenu } = useStateContext();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (activeMenu) {
			setActiveMenu(false);
		}

		if (location?.pathname === '/') navigate('/ecommerce');
	}, [location]);

	return (
		<Routes>
			<Route path='/' exact element={<Ecommerce />} />
			<Route path='/ecommerce' element={<Ecommerce />} />

			<Route path='/orders' element={<Orders />} />
			<Route path='/employees' element={<Employees />} />
			<Route path='/customers' element={<Customers />} />

			<Route path='/kanban' element={<Kanban />} />
			<Route path='/editor' element={<Editor />} />
			<Route path='/calendar' element={<Calendar />} />
			<Route path='/color-picker' element={<ColorPicker />} />

			<Route path='/line' element={<Line />} />
			<Route path='/area' element={<Area />} />
			<Route path='/bar' element={<Bar />} />
			<Route path='/pie' element={<Pie />} />
			<Route path='/financial' element={<Financial />} />
			<Route path='/color-mapping' element={<ColorMapping />} />
			<Route path='/pyramid' element={<Pyramid />} />
			<Route path='/stacked' element={<Stacked />} />
			<Route path='*' element={<Ecommerce />} />
		</Routes>
	);
};

export default Router;
