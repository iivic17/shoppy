import {
	HtmlEditor,
	Image,
	Inject,
	Link,
	QuickToolbar,
	RichTextEditorComponent,
	Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import PageTemplate from './PageTemplate';

import { EditorData } from '../data/dummy';

const Editor = () => {
	return (
		<PageTemplate category='App' title='Editor'>
			<RichTextEditorComponent>
				<EditorData />
				<Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
			</RichTextEditorComponent>
		</PageTemplate>
	);
};

export default Editor;
