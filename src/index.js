import { createRoot } from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

import './index.css';

const root = createRoot(document.querySelector('#root'));
root.render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
