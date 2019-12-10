var player = videojs('video')
player.playlist([{
    textTracks: [{
        src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Shippuuden%20Movie/%5Bdunia-anime%5D Naruto Shippuuden - 02.vtt',
        kind: 'captions',
        srclang: 'id',
        label: 'Indonesia',
        'default': true
    }],
    judul: '* Naruto: Shippuuden Movie 2',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 7.38',
    sources: [{
            src: 'https://lh3.googleusercontent.com/IL4Sz8_PStWKx5qDivr_z37JysgZ7RvowqkTkznJR6ws3YA6qNVHtxuZuBtqRtK-YRdceRa4TTW4y46ilz8fc5kWfR287Y_cTVvE9oUTeBnID72L9anfH3_2hgSwVDgBpNK08prCr88=m37',
            type: 'video/mp4',
            label: '1080p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/IL4Sz8_PStWKx5qDivr_z37JysgZ7RvowqkTkznJR6ws3YA6qNVHtxuZuBtqRtK-YRdceRa4TTW4y46ilz8fc5kWfR287Y_cTVvE9oUTeBnID72L9anfH3_2hgSwVDgBpNK08prCr88=m22',
            type: 'video/mp4',
            label: '720p',
            selected: 'false'
        },
        {
            src: 'https://lh3.googleusercontent.com/IL4Sz8_PStWKx5qDivr_z37JysgZ7RvowqkTkznJR6ws3YA6qNVHtxuZuBtqRtK-YRdceRa4TTW4y46ilz8fc5kWfR287Y_cTVvE9oUTeBnID72L9anfH3_2hgSwVDgBpNK08prCr88=m18',
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