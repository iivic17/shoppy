import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	HiloSeries,
	Tooltip,
	DateTime,
	Zoom,
	Logarithmic,
	Crosshair,
} from '@syncfusion/ej2-react-charts';
import PageTemplate from '../PageTemplate';
import { useStateContext } from '../../contexts/ContextProvider';

import {
	financialChartData,
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
} from '../../data/dummy';

const Financial = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate category='Chart' title='Financial' chartHeader='AAPLE Historical'>
			<div className='w-full'>
				<ChartComponent
					id='financial-page-chart'
					height='900px'
					primaryXAxis={FinancialPrimaryXAxis}
					primaryYAxis={FinancialPrimaryYAxis}
					fontFamily='Open Sans, sans-serif'
					tooltip={{
						enable: true,
						shared: true,
						fontFamily: 'Open Sans, sans-serif',
					}}
					crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
					legendSettings={{
						textStyle: {
							color: colorReversed,
							fontFamily: 'Open Sans, sans-serif',
							size: '20px',
						},
						background: color,
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
							HiloSeries,
							Tooltip,
							DateTime,
							Logarithmic,
							Crosshair,
							Zoom,
						]}
					/>
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={financialChartData}
							xName='x'
							yName='low'
							name='Apple Inc'
							type='Hilo'
							low='low'
							high='high'
						/>
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</PageTemplate>
	);
};

export default Financial;
