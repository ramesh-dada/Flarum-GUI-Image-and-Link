import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';
import TextEditor from 'flarum/common/components/TextEditor';
import Tooltip from 'flarum/common/components/Tooltip';


app.initializers.add('ramesh-dada/flarum-gui-image-and-link', () => {
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add(
            'ramesh-dada-premium-imagegui',
            
            <Tooltip text={app.translator.trans('ramesh.linkGUI')}>
                {Button.component({
                    className: 'Button Button--icon Button--link hasIcon GuiImage',
                    onclick: 'rameshimageGUI()',
                    icon: 'fas fa-image',
                })}
            </Tooltip>

        );
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add(
            'ramesh-dada-premium-linkgui',
            m(
                'Tooltip',
                {
                text: app.translator.trans('ramesh.linkGUI'),
                },
                [
                m('button',
                {
                    type: 'buton',
                    class: 'Button Button--icon Button--link hasIcon GuiLink',
                    title: app.translator.trans('ramesh.linkGUI'),
                    onclick: 'rameshlinkGUI()'
                }),
                ],
                [ m('i', { class: 'fas fa-link' }),],
                [ m('span', { class: 'Button-label' }, app.translator.trans('ramesh.linkGUI')), ]
            ),
            
            5
        );
    });
});