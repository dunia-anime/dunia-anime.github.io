var player = videojs('my_video_1');
player.playlist([{
    textTracks: [{
        src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Movie/Naruto%20Movie%203%20Dai%20Koufun!%20Mikazuki%20Jima%20no%20Animaru%20Panikku%20Dattebayo!.vtt',
        kind: 'captions',
        srclang: 'id',
        label: 'Indonesia',
        'default': true
    }],
    sources: [{
            src: 'https://lh3.googleusercontent.com/7s-SQtTxHr3bZEqaSsL6eAA6UnY0KrxiysCVEaKmYcWld5jmN78WNpt0t_zGmI9ryg0QfzRFGv566QH8OpCDCqKmsukuLJFLewcr8cQFR3v_e90QNojxgyh_uy5un-lqtxbK2LE9hqU=m37',
            type: 'video/mp4',
            label: '1080p',
        },
        {
            src: 'https://lh3.googleusercontent.com/7s-SQtTxHr3bZEqaSsL6eAA6UnY0KrxiysCVEaKmYcWld5jmN78WNpt0t_zGmI9ryg0QfzRFGv566QH8OpCDCqKmsukuLJFLewcr8cQFR3v_e90QNojxgyh_uy5un-lqtxbK2LE9hqU=m22',
            type: 'video/mp4',
            label: '720p',
        },
        {
            src: 'https://lh3.googleusercontent.com/7s-SQtTxHr3bZEqaSsL6eAA6UnY0KrxiysCVEaKmYcWld5jmN78WNpt0t_zGmI9ryg0QfzRFGv566QH8OpCDCqKmsukuLJFLewcr8cQFR3v_e90QNojxgyh_uy5un-lqtxbK2LE9hqU=m18',
            type: 'video/mp4',
            label: '480p',
            selected: 'true'
        }
    ],
}]);

videojs("my_video_1", {}, function () {
    var player = this;
    player.controlBar.addChild('QualitySelector');
    player.landscapeFullscreen();
});

videojs('my_video_1').ready(function () {
    this.hotkeys({

    });
});