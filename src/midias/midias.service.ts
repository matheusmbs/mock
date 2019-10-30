import { Injectable } from '@nestjs/common';
import {midias} from "../data/midias";

@Injectable()
export class MidiasService {
    listarMidias(){
        return midias;
    }

    adicionarMidia(midia, listaMidias){
        listaMidias.push({
            nome: midia.originalname,
            id: listaMidias[listaMidias.length-1].id+1,
            tempo: `0:${this.tempoAleatorio()}${this.tempoAleatorio()}`,
            file: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        })
    }

    tempoAleatorio(){
        return Math.floor(Math.random()*10);
    }
}
