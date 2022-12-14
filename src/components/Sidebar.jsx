import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

import { links } from '../data/dummy';

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-[${currentColor}]`;
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

	return (
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
			{activeMenu && (
				<>
					<div className='flex justify-between items-center p-4'>
						<Link
							to='/'
							onClick={handleCloseSidebar}
							className='items-center gap-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
							<SiShopware />
							<span
								className={`relative after:absolute after:w-full after:bottom-0 after:left-0 after:h-1 after:bg-[${currentColor}] rounded-sm`}>
								Shoppy
							</span>
						</Link>
						<TooltipComponent content='Menu' position='BottomCenter'>
							<button
								type='button'
								onClick={() => setActiveMenu(false)}
								style={{ color: 'rgb(153, 171, 180)' }}
								className='rounded-full text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray flex items-center justify-center'>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10'>
						{links.map(item => (
							<div key={item.title}>
								<p className='text-gray-400 m-3 mt-4 uppercase'>
									{item.title}
								</p>
								{item.links.map(link => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={handleCloseSidebar}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}>
										{link.icon}
										<span className='capitalize'>{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
