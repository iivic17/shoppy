import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
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
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
