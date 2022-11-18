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
		<div>
			<Header title='Orders' category='Page' />
		</div>
	);
};

export default Orders;
