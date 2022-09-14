import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * Add Song Transaction
 * 
 * 
 * 
 * @author Jake Papaspiridakos
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex,title,artist,youTubeId) {
        super();
        this.model = initModel;
        this.initIndex = initIndex;
        this.title = title;
        this.artist = artist;
        this.youTubeId = youTubeId;
    }

    doTransaction() {
        this.model.addSong(this.title,this.artist,this.youTubeId);
    }
    
    undoTransaction() {
        this.model.removeSong(this.initIndex);
    }
}