import { useEffect } from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts';
import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const StackedChart = ({ width, heigth }) => {
	const { currentMode } = useStateContext();

	useEffect(() => {
		document.querySelector('#stack-chart').style.overflow = 'auto';
	}, []);

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<ChartComponent
			width={width}
			height={heigth}
			id='stack-chart'
			background={color}
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			fontFamily='Open Sans, sans-serif'
			chartArea={{
				border: {
					width: 0,
				},
				background: color,
			}}
			tooltip={{
				enable: true,
			}}
			legendSettings={{
				textStyle: {
					color: colorReversed,
					fontFamily: 'Open Sans, sans-serif',
				},
				background: color,
			}}>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map(item => (
					<SeriesDirective key={item.name} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default StackedChart;
