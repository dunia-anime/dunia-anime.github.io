var player = videojs('my_video_1');
player.playlist([{
    textTracks: [{
        src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/N/Naruto%20Movie/Naruto%20Movie%202%20Dai%20Gekitotsu!%20Maboroshi%20no%20Chiteiiseki%20Dattebayo!.vtt',
        kind: 'captions',
        srclang: 'id',
        label: 'Indonesia',
        'default': true
    }],
    sources: [{
            src: 'https://lh3.googleusercontent.com/DFaqV905hnOcAJj0CHijdiR9oqI-qi1goZCTOJTq84vqOdbLuYDyBx6ugPc0FYVTuzC2C7grCIDZuocGSxjjr1k9RFsi5GpMzQC_-6oqYw-BDzm2YKlkqUrFQe7uo1wZ-UDuhr3Yx4M=m37',
            type: 'video/mp4',
            label: '1080p',
        },
        {
            src: 'https://lh3.googleusercontent.com/DFaqV905hnOcAJj0CHijdiR9oqI-qi1goZCTOJTq84vqOdbLuYDyBx6ugPc0FYVTuzC2C7grCIDZuocGSxjjr1k9RFsi5GpMzQC_-6oqYw-BDzm2YKlkqUrFQe7uo1wZ-UDuhr3Yx4M=m22',
            type: 'video/mp4',
            label: '720p',
        },
        {
            src: 'https://lh3.googleusercontent.com/DFaqV905hnOcAJj0CHijdiR9oqI-qi1goZCTOJTq84vqOdbLuYDyBx6ugPc0FYVTuzC2C7grCIDZuocGSxjjr1k9RFsi5GpMzQC_-6oqYw-BDzm2YKlkqUrFQe7uo1wZ-UDuhr3Yx4M=m18',
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