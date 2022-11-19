import { Header } from '../components';

const PageTemplate = ({ title, category, children }) => {
	return (
		<div
			id={`template-${title}`}
			className='my-10 mx-3 sm:mx-10 p-5 sm:p-10 pt-10 bg-white rounded-3xl'>
			<Header title={title} category={category} />
			<div id={`page-${title}`} className='mt-10'>
				{children}
			</div>
		</div>
	);
};

export default PageTemplate;
