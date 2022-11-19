const FeatureBoxCard = ({
	title,
	icon,
	iconColor,
	iconBg,
	pcColor,
	amount,
	percentage,
}) => {
	return (
		<div
			id={`feature-box-card-${title}`}
			className='flex-1 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full min-w-[12rem] p-4 pt-9 rounded-2xl flex flex-col items-center'>
			<button
				type='button'
				style={{
					color: iconColor,
					backgroundColor: iconBg,
				}}
				className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
				{icon}
			</button>
			<p className='mt-3'>
				<span className='text-lg font-semibold'>{amount}</span>
				<span className={`text-sm text-${pcColor} ml-2`}>{percentage}</span>
			</p>
			<p className='text-sm text-gray-400 mt-1'>{title}</p>
		</div>
	);
};

export default FeatureBoxCard;
