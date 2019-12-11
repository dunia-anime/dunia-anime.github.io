var player = videojs('player1')
player.playlist([{
    judul: '* Naruto: Shippuuden Movie 8',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 7.39',
    sources: [{
            src: 'https://lh3.googleusercontent.com/AjEoTpCieD1n9WsUfICmUoWGuaP8zQ9WQHSysKJ2KsLOPfvfkAsiM5zfomWgNV0dpro4ShnP6hQo00n5PjROTcSmzquqK9GOd4erHb3X0eICdz-3_JPalVD_vXUN6aHs_nLqvu3j-Rs=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/AjEoTpCieD1n9WsUfICmUoWGuaP8zQ9WQHSysKJ2KsLOPfvfkAsiM5zfomWgNV0dpro4ShnP6hQo00n5PjROTcSmzquqK9GOd4erHb3X0eICdz-3_JPalVD_vXUN6aHs_nLqvu3j-Rs=m18',
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