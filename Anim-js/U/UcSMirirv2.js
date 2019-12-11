var player = videojs('player1')
player.playlist([{
    judul: '* Uchiage Hanabi, Shita k....',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 6.46',
    sources: [{
            src: 'https://lh3.googleusercontent.com/OoFiX7RILL1H-nlfFK1KJQ1E3rfDAXuDBNGpF5DQgha2v_oQ-n6taCtyAFxsYHWwf5WjBmnaJbWjqJHTprjTimVh8I7PEwbe_3Lbt2UF2xNf6BuoZZisRK7GU20u721qj0liE4KKt1o=m37',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/OoFiX7RILL1H-nlfFK1KJQ1E3rfDAXuDBNGpF5DQgha2v_oQ-n6taCtyAFxsYHWwf5WjBmnaJbWjqJHTprjTimVh8I7PEwbe_3Lbt2UF2xNf6BuoZZisRK7GU20u721qj0liE4KKt1o=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/OoFiX7RILL1H-nlfFK1KJQ1E3rfDAXuDBNGpF5DQgha2v_oQ-n6taCtyAFxsYHWwf5WjBmnaJbWjqJHTprjTimVh8I7PEwbe_3Lbt2UF2xNf6BuoZZisRK7GU20u721qj0liE4KKt1o=m18',
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

videojs("player1", {}, function () {
    var player = this;
    player.controlBar.addChild('QualitySelector');
    player.landscapeFullscreen();
});

videojs('player1').ready(function () {
    this.hotkeys({

    });
});

var player = videojs('player1');
player.landscapeFullscreen();
var vjs = videojs('player1');
var vjs_ass = vjs.ass({
    'src': ["https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/U/Uchiage%20Hanabi,%20Shita%20kara%20Miru%20ka%20Yoko%20kara%20Miru%20ka/[dunia-anime.id]%20Uchiage%20Hanabi,%20Shita%20kara%20Miru%20ka%20Yoko%20kara%20Miru%20ka.ass"],
    label: "indo",
    videoWidth: 640,
    videoHeight: 360,
    enableSvg: false
});