import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from './components/TextEditorButton';

export default function addTextEditorButton() {
  extend(TextEditor.prototype, 'toolbarItems', function (items) {
    if (app.forum.attribute('flarumguiimageandlinkEnableTextEditorButtons') === true) {
      items.add('ramesh-dada-gui', <TextEditorButton textEditor={this.attrs.composer.editor} />);
    }
  });
}