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
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				pageSettings={{
					pageSize: 20,
				}}
				toolbar={['Delete']}
				editSettings={{
					allowDeleting: true,
					allowEditing: true,
				}}
				width='auto'>
				<ColumnsDirective>
					{customersGrid.map(item => (
						<ColumnDirective key={item.headerText} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
			</GridComponent>
		</PageTemplate>
	);
};

export default Customers;
