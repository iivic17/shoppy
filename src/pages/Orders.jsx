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
import { Header } from '../components';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
	return (
		<div className='my-10 mx-3 sm:mx-10 p-5 sm:p-10 pt-10 bg-white rounded-3xl'>
			<Header title='Orders' category='Page' />
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
						<ColumnDirective key={item.field} {...item} />
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
		</div>
	);
};

export default Orders;
