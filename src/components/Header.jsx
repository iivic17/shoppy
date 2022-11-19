const Header = ({ category, title }) => {
	return (
		<div id={`header-${title}`}>
			<p className='text-gray-400'>{category}</p>
			<p className='text-3xl font-extrabold tracking-tight text-slate-900'>
				{title}
			</p>
		</div>
	);
};

export default Header;
