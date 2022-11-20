import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	Tooltip,
	LineSeries,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';

const LineChart = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<ChartComponent
			id='line-chart'
			height='500px'
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			fontFamily='Open Sans, sans-serif'
			legendSettings={{
				textStyle: {
					color: colorReversed,
					fontFamily: 'Open Sans, sans-serif',
					size: '14px',
				},
				background: color,
			}}
			background={color}
			chartArea={{
				border: {
					width: 0,
				},
				background: color,
			}}
			tooltip={{
				fontFamily: 'Open Sans, sans-serif',
				enable: true,
			}}>
			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map(item => (
					<SeriesDirective key={item.name} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default LineChart;
