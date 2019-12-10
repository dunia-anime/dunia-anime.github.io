var player = videojs('player1')
player.playlist([{
    judul: '* Naruto: Shippuuden Movie 5',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 7.39',
    sources: [{
            src: 'https://lh3.googleusercontent.com/SO4EBkMERSh538nY96K9d2nq0dMLTkVIg4wBP6tpmaYxPBIFWaDqux9wQ_ahI8sys_E0leYBQpzvI8_h1beqLm3XYNOta70fqCSQC0iNELOhUqfL-0HhANWuAzYZbPoDaEXrRVefPh0=m37',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/SO4EBkMERSh538nY96K9d2nq0dMLTkVIg4wBP6tpmaYxPBIFWaDqux9wQ_ahI8sys_E0leYBQpzvI8_h1beqLm3XYNOta70fqCSQC0iNELOhUqfL-0HhANWuAzYZbPoDaEXrRVefPh0=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/SO4EBkMERSh538nY96K9d2nq0dMLTkVIg4wBP6tpmaYxPBIFWaDqux9wQ_ahI8sys_E0leYBQpzvI8_h1beqLm3XYNOta70fqCSQC0iNELOhUqfL-0HhANWuAzYZbPoDaEXrRVefPh0=m18',
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
    'src': ["https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Shippuuden%20Movie/%5Bdunia-anime%5D%20Naruto%20Shippuuden%20-%2005.ass"],
    label: "indo",
    videoWidth: 640,
    videoHeight: 360,
    enableSvg: false
});