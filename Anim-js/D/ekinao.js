var player = videojs('video')
player.playlist([{
        judul: '* Denpa-teki na Kanojo',
        episode: '* Episode 01',
        name: 'Episode 01',
        deskrip1: '* Rating : 7.64',
        sources: [{
                src: 'https://lh3.googleusercontent.com/DSqaHVV2IhP7XJfB9KXrbBZCQfnjfhmk3E8qgvIsMMmkHzNLeIVU9rz03MBmJzurDBHMRi2xe7X011HQrNC5HJa-4cOjElRFYGNpjssB9u-mfwHhnD28KdMhbYd8qJK_CigMakZkjUc=m37',
                type: 'video/mp4',
                label: '1080p',
                selected: 'false'
            },
            {
                src: 'https://lh3.googleusercontent.com/DSqaHVV2IhP7XJfB9KXrbBZCQfnjfhmk3E8qgvIsMMmkHzNLeIVU9rz03MBmJzurDBHMRi2xe7X011HQrNC5HJa-4cOjElRFYGNpjssB9u-mfwHhnD28KdMhbYd8qJK_CigMakZkjUc=m22',
                type: 'video/mp4',
                label: '720p',
                selected: 'false'
            },
            {
                src: 'https://lh3.googleusercontent.com/DSqaHVV2IhP7XJfB9KXrbBZCQfnjfhmk3E8qgvIsMMmkHzNLeIVU9rz03MBmJzurDBHMRi2xe7X011HQrNC5HJa-4cOjElRFYGNpjssB9u-mfwHhnD28KdMhbYd8qJK_CigMakZkjUc=m18',
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
    },
    {
        judul: '* Denpa-teki na Kanojo',
        episode: '* Episode 02',
        name: 'Episode 02',
        deskrip1: '* Rating : 7.64',
        sources: [{
                src: 'https://lh3.googleusercontent.com/WNuBllpPJiA2AnAZk4itRMQZLOnnYv87ZS0WUU9QqJz6r_SZ1W2wGCG1mrnpEmmzRfKUYPHk0cY21tDKy08HZGya-vx1NLEVCTLT_IOmDqKFmo851h8eFEDPkQ7Tx92UtKTiBe4ZIYo=m37',
                type: 'video/mp4',
                label: '1080p',
                selected: 'false'
            },
            {
                src: 'https://lh3.googleusercontent.com/WNuBllpPJiA2AnAZk4itRMQZLOnnYv87ZS0WUU9QqJz6r_SZ1W2wGCG1mrnpEmmzRfKUYPHk0cY21tDKy08HZGya-vx1NLEVCTLT_IOmDqKFmo851h8eFEDPkQ7Tx92UtKTiBe4ZIYo=m22',
                type: 'video/mp4',
                label: '720p',
                selected: 'false'
            },
            {
                src: 'https://lh3.googleusercontent.com/WNuBllpPJiA2AnAZk4itRMQZLOnnYv87ZS0WUU9QqJz6r_SZ1W2wGCG1mrnpEmmzRfKUYPHk0cY21tDKy08HZGya-vx1NLEVCTLT_IOmDqKFmo851h8eFEDPkQ7Tx92UtKTiBe4ZIYo=m18',
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
    }
]);
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