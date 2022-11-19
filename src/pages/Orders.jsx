import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from '@syncfusion/ej2-react-grids';
import PageTemplate from './PageTemplate';

import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
	return (
		<PageTemplate category='Page' title='Orders'>
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				allowResizing>
				<ColumnsDirective>
					{ordersGrid.map(item => (
						<ColumnDirective {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</PageTemplate>
	);
};

export default Orders;
