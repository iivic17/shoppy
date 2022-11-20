import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Category,
	Tooltip,
	Legend,
	RangeColorSettingsDirective,
	RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import PageTemplate from '../PageTemplate';

import {
	colorMappingData,
	ColorMappingPrimaryXAxis,
	ColorMappingPrimaryYAxis,
	rangeColorMapping,
} from '../../data/dummy';

const ColorMapping = () => {
	const { currentMode } = useStateContext();

	const color =
		currentMode === 'light' ? 'white' : 'rgb(51 55 62 / var(--tw-bg-opacity)';

	const colorReversed =
		currentMode === 'light' ? 'rgb(51 55 62 / var(--tw-bg-opacity)' : 'white';

	return (
		<PageTemplate
			category='Chart'
			title='Color Mapping'
			chartHeader='USA CLIMATE - WEATHER BY MONTH'>
			<div className='w-full'>
				<ChartComponent
					id='color-mapping-page-chart'
					height='500px'
					primaryXAxis={ColorMappingPrimaryXAxis}
					primaryYAxis={ColorMappingPrimaryYAxis}
					fontFamily='Open Sans, sans-serif'
					legendSettings={{
						mode: 'Range',
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
					}}
					tooltip={{
						fontFamily: 'Open Sans, sans-serif',
						enable: true,
					}}>
					<Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={colorMappingData[0]}
							name='USA'
							xName='x'
							yName='y'
							type='Column'
							cornerRadius={{
								topLeft: 10,
								topRight: 10,
							}}
						/>
					</SeriesCollectionDirective>
					<RangeColorSettingsDirective>
						{rangeColorMapping.map((item, index) => (
							<RangeColorSettingDirective key={index} {...item} />
						))}
					</RangeColorSettingsDirective>
				</ChartComponent>
			</div>
		</PageTemplate>
	);
};

export default ColorMapping;
