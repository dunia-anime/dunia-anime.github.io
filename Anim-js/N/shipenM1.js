videojs('player1', {
    controls: true,
    nativeControlsForTouch: false,
    width: 640,
    height: 360,
    fluid: true,
    plugins: {
        ass: {
            'src': ["https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/zTest/jiraiya0.ass"],
            'delay': -0.1,
        }
    },
    techOrder: ["html5"],
    sources: [{
            src: 'https://lh3.googleusercontent.com/hClKwg0oYofI3uR6rjV-8Abkov14E6vwOpsvzAJ-xauRfla5gxv3IDMeAX23U4EIrk-mdP2ecnW2CP2LOviTtYPqteuUGdzr3JiB-ik-Ph6a3qcOGfQeyCrGtQ2F31wWVsMi76yAwD8=m37',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/hClKwg0oYofI3uR6rjV-8Abkov14E6vwOpsvzAJ-xauRfla5gxv3IDMeAX23U4EIrk-mdP2ecnW2CP2LOviTtYPqteuUGdzr3JiB-ik-Ph6a3qcOGfQeyCrGtQ2F31wWVsMi76yAwD8=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/hClKwg0oYofI3uR6rjV-8Abkov14E6vwOpsvzAJ-xauRfla5gxv3IDMeAX23U4EIrk-mdP2ecnW2CP2LOviTtYPqteuUGdzr3JiB-ik-Ph6a3qcOGfQeyCrGtQ2F31wWVsMi76yAwD8=m18',
            type: 'video/mp4',
            label: '480p',
            selected: 'true'
        }
    ]
}, );

videojs("player1", {}, function () {
    var player = this;
    player.controlBar.addChild('QualitySelector');
    player.landscapeFullscreen();
});

videojs('player1').ready(function () {
    this.hotkeys({

    });
});