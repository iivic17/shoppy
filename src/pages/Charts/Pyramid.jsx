import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	AccumulationDataLabel,
	AccumulationTooltip,
	PyramidSeries,
	AccumulationSelection,
} from '@syncfusion/ej2-react-charts';
import PageTemplate from '../PageTemplate';
import { useStateContext } from '../../contexts/ContextProvider';

import { PyramidData } from '../../data/dummy';

const Pyramid = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate
			category='Chart'
			title='Pyramid'
			chartHeader='Food Comparison Chart'>
			<div className='w-full'>
				<AccumulationChartComponent
					id='pyramid-page-chart'
					height='500px'
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
					<Inject
						services={[
							AccumulationDataLabel,
							AccumulationTooltip,
							PyramidSeries,
							AccumulationLegend,
							AccumulationSelection,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							name='Food'
							dataSource={PyramidData}
							xName='x'
							yName='y'
							type='Pyramid'
							width='45%'
							height='80%'
							neckWidth='15%'
							gapRatio={0.03}
							explode
							emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
							dataLabel={{
								visible: true,
								position: 'Inside',
								name: 'text',
								textStyle: {
									color: colorReversed,
									fontFamily: 'Open Sans, sans-serif',
								},
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Pyramid;
