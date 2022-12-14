import { useEffect, useLayoutEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar4.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={customFunc}
			className='flex items-center justify-center relative text-xl rounded-full p-3 hover:bg-light-gray w-10 h-10 sm:w-16 sm:h-16'
			style={{ color: color }}>
			<span
				className='absolute flex align-center justify-center rounded-full h-2 w-2 right-2 top-2'
				style={{ backgroundColor: dotColor }}
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		handleClick,
		screenSize,
		setScreenSize,
		currentColor,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useLayoutEffect(() => {
		if (screenSize) {
			if (screenSize <= 900) {
				setActiveMenu(false);
			}
		}
	}, [screenSize]);

	return (
		<div className='flex justify-between p-2 md:mx-6 relative items-center'>
			<NavButton
				title='Menu'
				customFunc={() => setActiveMenu(prev => !prev)}
				color={currentColor}
				icon={<AiOutlineMenu className='w-4 sm:w-6 h-4 sm:h-6' />}
			/>
			<div className='flex flex-row justify-between items-center gap-2'>
				<NavButton
					title='Cart'
					customFunc={() => handleClick('cart')}
					color={currentColor}
					icon={<FiShoppingCart className='w-4 sm:w-6 h-4 sm:h-6' />}
				/>
				<NavButton
					title='Chat'
					dotColor='#03C9D7'
					customFunc={() => handleClick('chat')}
					color={currentColor}
					icon={<BsChatLeft className='w-4 sm:w-6 h-4 sm:h-6' />}
				/>
				<NavButton
					title='Notifications'
					dotColor='#03C9D7'
					customFunc={() => handleClick('notification')}
					color={currentColor}
					icon={<RiNotification3Line className='w-4 sm:w-6 h-4 sm:h-6' />}
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-4 cursor-pointer ml-3 sm:ml-6 p-1 hover:bg-light-gray rounded-lg mr-4 sm:mr-0'
						onClick={() => handleClick('userProfile')}>
						<img
							src={avatar}
							className='rounded-full w-10 h-10 object-contain'
						/>
						<p className='hidden sm:block'>
							<span className='text-gray-400 text-lg font-extralight'>
								Hi,
							</span>{' '}
							<span className='text-gray-400 ml-1 text-lg tracking-wider'>
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-16' />
					</div>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
