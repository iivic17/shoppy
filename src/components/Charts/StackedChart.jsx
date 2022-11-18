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

const StackedChart = ({ width, heigth }) => {
	return (
		<ChartComponent
			width={width}
			height={heigth}
			id='stack-chart'
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			chartArea={{
				border: {
					width: 0,
				},
			}}
			tooltip={{
				enable: true,
			}}
			legendSettings={{
				background: 'white',
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
