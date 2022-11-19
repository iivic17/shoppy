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
import PageTemplate from './PageTemplate';

import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
	return (
		<PageTemplate category='Page' title='Ecommerce'>
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
		</PageTemplate>
	);
};

export default Employees;
