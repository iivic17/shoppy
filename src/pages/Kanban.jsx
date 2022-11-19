import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import PageTemplate from './PageTemplate';

import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {
	return (
		<PageTemplate category='App' title='Kanban'>
			<div className='min-w-[800px]'>
				<KanbanComponent
					id='kanban'
					dataSource={kanbanData}
					cardSettings={{
						contentField: 'Summary',
						headerField: 'Id',
					}}
					keyField='Status'>
					<ColumnsDirective>
						{kanbanGrid.map(item => (
							<ColumnDirective {...item} />
						))}
					</ColumnsDirective>
				</KanbanComponent>
			</div>
		</PageTemplate>
	);
};

export default Kanban;
