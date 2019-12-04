var player = videojs('video')
player.playlist([{
    judul: '* Date A Live Movie: MJ',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 7.46',
    sources: [{
            src: 'https://lh3.googleusercontent.com/znnhxaI8MDhh1NNIFeX9lGDoPu4trBFaZ2Ae2z99ogFZzE-dla2KWnq2deShrMq8PylmJGUEpMm7CL2m37Zmumuh4PFXW82_iJIPGWKPQcghu32Ajc6DOIrcEsFIkBVftER6eaK36LU=m37',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        }, {
            src: 'https://lh3.googleusercontent.com/znnhxaI8MDhh1NNIFeX9lGDoPu4trBFaZ2Ae2z99ogFZzE-dla2KWnq2deShrMq8PylmJGUEpMm7CL2m37Zmumuh4PFXW82_iJIPGWKPQcghu32Ajc6DOIrcEsFIkBVftER6eaK36LU=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/znnhxaI8MDhh1NNIFeX9lGDoPu4trBFaZ2Ae2z99ogFZzE-dla2KWnq2deShrMq8PylmJGUEpMm7CL2m37Zmumuh4PFXW82_iJIPGWKPQcghu32Ajc6DOIrcEsFIkBVftER6eaK36LU=m18',
            type: 'video/mp4',
            label: '480p',
            selected: 'true'
        }
    ],
    thumbnail: [{
            srcset: 'https://1.bp.blogspot.com/-gxrecw-tn5k/XdEKFIfdc7I/AAAAAAAABk4/yZd7T6-5QDodFismcHENHOfUAlDrfpo_gCLcBGAsYHQ/s10/Background.jpg',
            type: 'image/jpeg',
            media: '(min-width: 400px;)'
        },
        {
            src: 'https://1.bp.blogspot.com/-gxrecw-tn5k/XdEKFIfdc7I/AAAAAAAABk4/yZd7T6-5QDodFismcHENHOfUAlDrfpo_gCLcBGAsYHQ/s10/Background.jpg'
        }
    ]
}]);
// Initialize the playlist-ui plugin with no option (i.e. the defaults).
player.playlistUi();

videojs("video", {}, function () {
    var player = this;
    player.controlBar.addChild('QualitySelector');
    player.landscapeFullscreen();
});

videojs('video').ready(function () {
    this.hotkeys({

    });
});