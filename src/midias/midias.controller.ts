import { Controller, Get, Post, Delete, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MidiasService } from './midias.service';
import { Midia } from './midia';

@Controller('midia')
export class MidiasController {
    midias: any[];

    constructor(private readonly midiasService: MidiasService) { 
        this.midias = this.midiasService.listarMidias();
    }

    @Get('/')
    listarMidias() {
        return this.midias;
    }

    @Post('/')
    @UseInterceptors(FilesInterceptor('anexos[]'))
    inserirMidias(@UploadedFiles() midias) {
        midias.forEach(midia =>
            this.midiasService.adicionarMidia(midia, this.midias)
        );

        return this.midias;
    }

    @Delete('/')
    removerMidias(@Body() {midiaID}: Midia) {
        this.midias = this.midias.filter(midia => midia.id !== midiaID);
        return this.midias;
    }
}
