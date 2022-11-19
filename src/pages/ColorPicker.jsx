import { useState } from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import PageTemplate from './PageTemplate';

const ColorPicker = () => {
	const [color, setColor] = useState('#008000');

	const onColorChange = args => {
		document.querySelector('#preview').style.backgroundColor = args.currentValue.hex;
		setColor(args.currentValue.hex);
	};

	const invertHex = hex => {
		return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
	};

	return (
		<PageTemplate category='App' title='Color Picker'>
			<div className='text-center'>
				<div id='preview' />

				<div className='flex justify-center items-start gap-10 xl:gap-20 flex-wrap mt-6 xl:mt-0 pb-10'>
					<div>
						<p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
						<ColorPickerComponent
							id='inline-palette'
							mode='Palette'
							modeSwitcher={false}
							inline
							showButtons={false}
							change={onColorChange}
						/>
					</div>
					<div>
						<p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
						<ColorPickerComponent
							id='inline-palette'
							mode='Picker'
							modeSwitcher={false}
							inline
							showButtons={false}
							change={onColorChange}
						/>
					</div>
				</div>

				<div className='flex items-center justify-center xl:my-4 my-6'>
					<h3
						style={{
							color: `#${invertHex(color.substring(1))}`,
							backgroundColor: color,
						}}
						className='text-2xl py-4 rounded-3xl shadow-sm w-60 font-extrabold'>
						{color}
					</h3>
				</div>
			</div>
		</PageTemplate>
	);
};

export default ColorPicker;
