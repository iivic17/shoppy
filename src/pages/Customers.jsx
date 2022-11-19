import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
} from '@syncfusion/ej2-react-grids';
import PageTemplate from './PageTemplate';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
	return (
		<PageTemplate category='Page' title='Customers'>
			{/* <GridComponent
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
			</GridComponent> */}
		</PageTemplate>
	);
};

export default Customers;
