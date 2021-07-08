import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';
import TextEditor from 'flarum/common/components/TextEditor';

app.initializers.add('therealsujitk/flarum-ext-gifs', () => {
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
      items.add(
        'imagegui',
        <Tooltip text= {app.translator.trans('rameshimageGUI')}>
          <Button icon="fas fa-image" className="Button Button--icon Button--link GUIimage" onclick="imageGUI()" />
        </Tooltip>
      );

      items.add(
        'linkgui',
        <Tooltip text= {app.translator.trans('rameshlinkGUI')}>
          <Button icon="fas fa-link" className="Button Button--icon Button--link GUIlink" onclick="linkGUI()" />
        </Tooltip>
      );
    });
});