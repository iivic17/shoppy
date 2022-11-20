import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';
import PageTemplate from '../PageTemplate';
import { useStateContext } from '../../contexts/ContextProvider';

import { pieChartData } from '../../data/dummy';

const Pie = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate category='Chart' title='Pie' chartHeader='Project Cost Breakdown'>
			<div className='w-full'>
				<AccumulationChartComponent
					id='pie-page-chart'
					height='500px'
					fontFamily='Open Sans, sans-serif'
					legendSettings={{
						textStyle: {
							color: colorReversed,
							fontFamily: 'Open Sans, sans-serif',
							size: '20px',
						},
						background: color,
						visible: true,
					}}
					background={color}
					chartArea={{
						border: {
							width: 0,
						},
						background: color,
					}}>
					<Inject
						services={[
							AccumulationLegend,
							PieSeries,
							AccumulationDataLabel,
							AccumulationTooltip,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							name='Sale'
							dataSource={pieChartData}
							xName='x'
							yName='y'
							innerRadius='40%'
							startAngle={0}
							endAngle={360}
							radius='70%'
							explode
							explodeOffset='10%'
							explodeIndex={2}
							dataLabel={{
								visible: true,
								name: 'text',
								position: 'Inside',
								font: {
									fontWeight: '600',
									color: '#fff',
								},
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Pie;
