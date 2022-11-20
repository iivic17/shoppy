import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDown = ({ currentMode, data }) => (
	<div className='w-28 px-2 py-1 rounded-md absolute top-5 sm:top-[-4px] left-[-7px] sm:left-auto sm:right-0'>
		<DropDownListComponent
			id='time'
			fields={{ text: 'Time', value: 'Id' }}
			style={{ color: currentMode === 'dark' && 'white', border: 'none' }}
			value='1'
			dataSource={data}
			popupHeight='220px'
			popupWidth='120px'
		/>
	</div>
);

export default DropDown;
