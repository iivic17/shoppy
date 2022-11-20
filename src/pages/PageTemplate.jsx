import { Header, ChartsHeader } from '../components';

const PageTemplate = ({ title, category, chartHeader, children }) => {
	return (
		<div
			id={`template-${title}`}
			className={`p-5 sm:p-10 pt-10 bg-white rounded-3xl overflow-auto ${
				category === 'Chart' ? 'dark:bg-secondary-dark-bg' : ''
			}`}>
			<Header title={title} category={category} />
			<div id={`page-${title}`} className='mt-10'>
				{chartHeader && <ChartsHeader chartHeader={chartHeader} />}
				{children}
			</div>
		</div>
	);
};

export default PageTemplate;
