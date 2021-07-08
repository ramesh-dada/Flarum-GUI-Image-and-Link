<?php

namespace rameshdada\flarumguiimageandlink;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
    ->content(function (Document $document) {
        $document->head[] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.18/sweetalert2.all.min.js"></script>';
        $document->head[] = '<script type="text/javascript" src="/assets/extensions/ramesh-dada-flarum-gui-image-and-link/image-and-link-gui.js"></script>';
    })
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
];
