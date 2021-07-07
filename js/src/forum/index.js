import { extend } from 'flarum/common/extend';
import app from 'flarum/common/app';
import addTextEditorButton from './addTextEditorButton';

app.initializers.add('ramesh-dada-premium-extender', () => {
  let whenLoaded = {};
  let hasLoaded = false;
  let isLoading = false;

  const load = () => {
    isLoading = true;

    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.18/sweetalert2.all.min.js', () => {
      $.getScript('/assets/extensions/ramesh-dada-flarum-gui-image-and-link/image-and-link-gui.js', () => {
        for (const id in whenLoaded) {
          whenLoaded[id]();
        }

        whenLoaded = {};
        isLoading = false;
        hasLoaded = true;
      });
    });
  };

  // Add Text Editor button
  addTextEditorButton();
});
