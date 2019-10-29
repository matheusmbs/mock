import { Injectable } from '@nestjs/common';
import {midias} from "../data/midias";

@Injectable()
export class MidiasService {
    listarMidias(){
        return midias;
    }
}
