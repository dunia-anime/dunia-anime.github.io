// Definisikan data playlist dalam array
const playlistData = [
  {
    textTracks: [{
      src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/Y/Yuri!!!%20on%20Ice/%5Bdunia-anime.id%5D Yuri!!! on Ice - 01.vtt',
      kind: 'captions',
      srclang: 'id',
      label: 'Indonesia',
      'default': true
    }],
    judul: '* Yuri!!! on Ice',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 8.08',
    iframeSrc: 'https://drive.google.com/file/d/13WLurfWKcWQ90zvhSf7lwIZWBJLPnovJ/preview', // URL iframe Google Drive
    thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&webp=true&resize=1167,778'
  },
  {
    textTracks: [{
      src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/Y/Yuri!!!%20on%20Ice/%5Bdunia-anime.id%5D Yuri!!! on Ice - 01.vtt',
      kind: 'captions',
      srclang: 'id',
      label: 'Indonesia',
      'default': true
    }],
    judul: '* Yuri!!! on Ice',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 8.08',
    iframeSrc: 'https://drive.google.com/file/d/13WLurfWKcWQ90zvhSf7lwIZWBJLPnovJ/preview', // URL iframe Google Drive
    thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&webp=true&resize=1167,778'
  },
  {
    textTracks: [{
      src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/Y/Yuri!!!%20on%20Ice/%5Bdunia-anime.id%5D Yuri!!! on Ice - 01.vtt',
      kind: 'captions',
      srclang: 'id',
      label: 'Indonesia',
      'default': true
    }],
    judul: '* Yuri!!! on Ice',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 8.08',
    iframeSrc: 'https://drive.google.com/file/d/13WLurfWKcWQ90zvhSf7lwIZWBJLPnovJ/preview', // URL iframe Google Drive
    thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&webp=true&resize=1167,778'
  },
  {
    textTracks: [{
      src: 'https://raw.githubusercontent.com/dunia-anime/Sub-Anim/master/Y/Yuri!!!%20on%20Ice/%5Bdunia-anime.id%5D Yuri!!! on Ice - 01.vtt',
      kind: 'captions',
      srclang: 'id',
      label: 'Indonesia',
      'default': true
    }],
    judul: '* Yuri!!! on Ice',
    episode: '* Episode 01',
    name: 'Episode 01',
    deskrip1: '* Rating : 8.08',
    iframeSrc: 'https://drive.google.com/file/d/13WLurfWKcWQ90zvhSf7lwIZWBJLPnovJ/preview', // URL iframe Google Drive
    thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&webp=true&resize=1167,778'
  },
  // Tambahkan objek data video lainnya dengan format yang sama
];

// Inisialisasi `iframe` video pertama
document.getElementById('current-video').src = playlistData[0].iframeSrc;

// Generate playlist items
const playlistContainer = document.getElementById('playlist');

playlistData.forEach((video, index) => {
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.dataset.src = video.iframeSrc;
  
  const img = document.createElement('img');
  img.src = video.thumbnail;
  img.alt = video.name;

  const textOverlay = document.createElement('div');
  textOverlay.classList.add('thumbnail-text');
  textOverlay.textContent = video.name;

  thumbnail.appendChild(img);
  thumbnail.appendChild(textOverlay);

  // Tambahkan event listener untuk thumbnail
  thumbnail.addEventListener('click', function() {
    document.getElementById('current-video').src = this.dataset.src;
    // Remove "playing" class from all thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('playing'));
    // Add "playing" class to the current thumbnail
    this.classList.add('playing');
  });

  // Tambahkan kelas 'playing' ke thumbnail pertama secara default
  if (index === 0) {
    thumbnail.classList.add('playing');
  }

  playlistContainer.appendChild(thumbnail);
});
