/**
 * Playlist.js
 * 
 * This class represents our playlist.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class Playlist {
    constructor(initId) {
        this.id = initId;
    }

    getName() {
        return this.name;
    }

    setName(initName) {
        this.name = initName;
    }

    getSongAt(index) {
        return this.songs[index];
    }

    setSongAt(index, song,artist,songID) {
        newSong = Song(song,artist,songID);
        this.songs[index] = newSong;
    }

    setSongs(initSongs) {
        this.songs = initSongs;
    }

    moveSong(oldIndex, newIndex) {
        this.songs.splice(newIndex, 0, this.songs.splice(oldIndex, 1)[0]);
    }

    addSong(name,artist,videoID){
        this.songs.push(new Song(name,artist,videoID));
    }

    removeSong(index){
        this.songs.splice(index,1);
    }
}

export class Song{
    constructor(title,artist,youTubeId){
        this.title = title;
        this.artist = artist;
        this.youTubeId = youTubeId;
        
    }
}