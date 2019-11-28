var player = videojs('my_video_1');
player.playlist([{
    textTracks: [{
        src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Movie/Naruto%20Movie%201%20Dai%20Katsugeki!!%20Yuki%20Hime%20Shinobu%20Houjou%20Dattebayo!.vtt',
        kind: 'captions',
        srclang: 'id',
        label: 'Indonesia',
        'default': true
    }],
    sources: [{
            src: 'https://lh3.googleusercontent.com/X4O-ONq-NStl9zPeICLh69pQ6PxS2Omyk6m_coltBiH-dhrqKEBAQay4VNiD_Rl_l8K8-52IpRBL3OThr5iUyPIOlpNNxtjVlpTpkZY6Sh4SsRKeHAzCchiLKQpjR1OnsulvJuf13Lc=m37',
            type: 'video/mp4',
            label: '1080p',
        },
        {
            src: 'https://lh3.googleusercontent.com/X4O-ONq-NStl9zPeICLh69pQ6PxS2Omyk6m_coltBiH-dhrqKEBAQay4VNiD_Rl_l8K8-52IpRBL3OThr5iUyPIOlpNNxtjVlpTpkZY6Sh4SsRKeHAzCchiLKQpjR1OnsulvJuf13Lc=m22',
            type: 'video/mp4',
            label: '720p',
        },
        {
            src: 'https://lh3.googleusercontent.com/X4O-ONq-NStl9zPeICLh69pQ6PxS2Omyk6m_coltBiH-dhrqKEBAQay4VNiD_Rl_l8K8-52IpRBL3OThr5iUyPIOlpNNxtjVlpTpkZY6Sh4SsRKeHAzCchiLKQpjR1OnsulvJuf13Lc=m18',
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