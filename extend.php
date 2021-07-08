<?php

namespace rameshdada\flarumguiimageandlink;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
    ->content(function (Document $document) {
        $document->head[] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.18/sweetalert2.all.min.js"></script>';
        $document->head[] = '<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ramesh-dada/Flarum-GUI-Image-and-Link/assets/image-and-link-gui.js"></script>';
    })
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
];
