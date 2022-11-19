import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
	Resize,
	DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import PageTemplate from './PageTemplate';

import { scheduleData } from '../data/dummy';

const Calendar = () => {
	return (
		<PageTemplate category='App' title='Calendar'>
			<ScheduleComponent
				height='900px'
				eventSettings={{
					dataSource: scheduleData,
				}}
				selectedDate={new Date(2021, 0, 10)}>
				<Inject
					services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
				/>
			</ScheduleComponent>
		</PageTemplate>
	);
};

export default Calendar;
