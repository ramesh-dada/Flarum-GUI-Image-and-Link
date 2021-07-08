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
                    icon: 'fas fa-image'
                },
                [
                    m('span', { class: 'Button-label' }, app.translator.trans('rameshimageGUI')),
                ]
            ),

              'ramesh-dada-premium-linkgui',
              m(
                  'button',
                  {
                      type: 'buton',
                      class: 'Button Button--icon Button--link hasIcon GuiLink',
                      title: app.translator.trans('rameshlinkGUI'),
                      onclick: 'linkGUI()',
                      icon: 'fas fa-link'
                  },
                  [
                      m('span', { class: 'Button-label' }, app.translator.trans('rameshlinkGUI')),
                  ]
              ),
            10
        );
    });
});