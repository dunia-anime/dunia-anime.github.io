var player = videojs('player1')
player.playlist([{
    judul: '* Naruto: Shippuuden Movie 8',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 7.39',
    sources: [{
            src: 'https://undangan-menikah.online/wp-content/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%202Danimation101%20-%20Speed%20Rigging%20Mastery%20in%20Cartoon%20Animator%205%202023-9%20-%20%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%20%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86%20%D9%86%D8%B1%D9%85%20%D8%A7%D9%81%D8%B2%D8%A7%D8%B1.mp4',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        },
        {
            src: 'https://undangan-menikah.online/wp-content/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%202Danimation101%20-%20Speed%20Rigging%20Mastery%20in%20Cartoon%20Animator%205%202023-9%20-%20%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%20%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86%20%D9%86%D8%B1%D9%85%20%D8%A7%D9%81%D8%B2%D8%A7%D8%B1.mp4',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://undangan-menikah.online/wp-content/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%202Danimation101%20-%20Speed%20Rigging%20Mastery%20in%20Cartoon%20Animator%205%202023-9%20-%20%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%20%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86%20%D9%86%D8%B1%D9%85%20%D8%A7%D9%81%D8%B2%D8%A7%D8%B1.mp4',
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
    'src': ["https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Shippuuden%20Movie/%5Bdunia-anime%5D%20Naruto%20Shippuuden%20-%2008.ass"],
    label: "indo",
    videoWidth: 640,
    videoHeight: 360,
    enableSvg: false
});
