import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Edit,
	Inject,
	Search,
	Toolbar,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
	return (
		<div className='my-10 mx-3 sm:mx-10 p-5 sm:p-10 pt-10 bg-white rounded-3xl'>
			<Header title='Employees' category='Page' />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				pageSettings={{
					pageSize: 20,
				}}
				toolbar={['Search']}
				width='auto'>
				<ColumnsDirective>
					{employeesGrid.map(item => (
						<ColumnDirective key={item.headerText} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Edit, Search, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Employees;
