import { Controller, Get } from '@nestjs/common';
import { MidiasService } from './midias.service';

@Controller('midia')
export class MidiasController {
    constructor(private readonly midiasService: MidiasService) { }

    @Get('/')
    listarCampanhasAtivas() {
        return this.midiasService.listarMidias();
    }
}
