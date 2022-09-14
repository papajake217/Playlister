import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * edit Song Transaction
 * 
 * 
 * 
 * @author Jake Papaspiridakos
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, index,title,artist,youTubeId,titleOld,artistOld,idOld) {
        super();
        this.model = initModel;
        this.index = index;
        this.title = title;
        this.artist = artist;
        this.youTubeId = youTubeId;

        this.titleOld = titleOld;
        this.artistOld = artistOld;
        this.idOld = idOld;

    }

    doTransaction() {
        this.model.editSong(this.index,this.title,this.artist,this.youTubeId);
    }
    
    undoTransaction() {
        this.model.editSong(this.index,this.titleOld,this.artistOld,this.idOld);
    }
}