import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';
import TextEditor from 'flarum/common/components/TextEditor';

app.initializers.add('therealsujitk/flarum-ext-gifs', () => {
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add(
            'ramesh-dada-premium-imagegui',
            m(
                'button',
                {
                    type: 'buton',
                    class: 'Button Button--icon Button--link hasIcon GuiImage',
                    title: app.translator.trans('rameshimageGUI'),
                    onclick: 'imageGUI()',
                },
                [
                    
                    m('i', { class: 'fas fa-image' }),
                ],
                [
                    
                    m('span', { class: 'Button-label' }, app.translator.trans('rameshimageGUI')),
                ]
            ),

            10
        );
    });
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add(
            'ramesh-dada-premium-linkgui',
            m(
                'button',
                {
                    type: 'buton',
                    class: 'Button Button--icon Button--link hasIcon GuiLink',
                    title: app.translator.trans('rameshlinkGUI'),
                    onclick: "linkGUI()",
                },
                [
                  
                  m('i', { class: 'fas fa-image' }),
              ],
              [
                  
                  m('span', { class: 'Button-label' }, app.translator.trans('rameshlinkGUI')),
              ]
            ),
            
            11
        );
    });
});