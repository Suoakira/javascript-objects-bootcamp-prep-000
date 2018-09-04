var playlist = new Object({name: "songs"})

function updatePlaylist(object, name, song) {
  object[name] = song;
} 

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}

