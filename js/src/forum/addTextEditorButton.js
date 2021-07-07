import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from './components/TextEditorButton';
import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';

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