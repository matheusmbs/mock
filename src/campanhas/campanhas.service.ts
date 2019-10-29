import { Injectable } from '@nestjs/common';
import {campanhasAtivas} from "../data/campanhasAtivas";
@Injectable()
export class CampanhasService {

    listarCampanhasAtivas(){
        return campanhasAtivas;
    }
}
