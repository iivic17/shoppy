import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

import { themeColors } from '../data/dummy';

const ThemeSettings = () => {
	const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
		useStateContext();

	return (
		<div className='bg-half-transparent w-screen fixed nav-item top-0 right-0 z-[9999999]'>
			<div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-full md:w-400 p-8'>
				<div className='flex justify-between items-center'>
					<p className='font-semibold text-lg'>Settings</p>
					<button
						type='button'
						onClick={() => setThemeSettings(false)}
						style={{ color: 'rgb(153, 171, 180)' }}
						className='rounded-full text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray flex items-center justify-center'>
						<MdOutlineCancel />
					</button>
				</div>

				<div className='flex flex-col border-t-1 border-color mt-6'>
					<p className='font-semibold text-xl mt-6'>Theme Options</p>

					<div className='mt-4 flex justify-start items-center'>
						<input
							type='radio'
							id='light'
							name='theme'
							value='light'
							className='cursor-pointer'
							onChange={setMode}
							checked={currentMode === 'light'}
						/>
						<label htmlFor='light' className='ml-2 text-md cursor-pointer'>
							Light
						</label>
					</div>

					<div className='mt-4 flex justify-start items-center'>
						<input
							type='radio'
							id='dark'
							name='theme'
							value='dark'
							className='cursor-pointer'
							onChange={setMode}
							checked={currentMode === 'dark'}
						/>
						<label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
							Dark
						</label>
					</div>
				</div>

				<div className='flex flex-col border-t-1 border-color mt-6'>
					<p className='font-semibold text-xl mt-6'>Theme Colors</p>

					<div className='flex gap-3 justify-start items-center'>
						{themeColors.map(color => (
							<TooltipComponent
								key={color.name}
								content={color.tooltip}
								position='TopCenter'>
								<div className='relative mt-2 cursor-pointer flex gap-5 items-center justify-center'>
									<button
										type='button'
										onClick={() => setColor(color.color)}
										className='h-10 w-10 rounded-full cursor-pointer'
										style={{
											backgroundColor: color.color,
										}}>
										<BsCheck
											className={`ml-2 text-2xl text-white ${
												color.color === currentColor
													? 'block'
													: 'hidden'
											}`}
										/>
									</button>
								</div>
							</TooltipComponent>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeSettings;
