window.onload = function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function() {
            const src = this.getAttribute('data-src');
            document.getElementById('current-video').src = src;
        }
    });
}
