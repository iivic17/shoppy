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

import { editorData } from '../data/dummy';

const Editor = () => {
	return <PageTemplate category='App' title='Editor'></PageTemplate>;
};

export default Editor;
