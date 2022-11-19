const ChartsHeader = ({ chartHeader }) => {
	return (
		<div className='flex items-center justify-center mb-4'>
			<h4 className='text-xl font-thin dark:text-white uppercase tracking-wider'>
				{chartHeader}
			</h4>
		</div>
	);
};

export default ChartsHeader;
