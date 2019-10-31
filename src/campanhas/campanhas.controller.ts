import { Controller, Get, Post, Body } from '@nestjs/common';
import { CampanhasService } from './campanhas.service';

@Controller('campanhas')
export class CampanhasController {
    constructor(private readonly campanhasService: CampanhasService) { }

    @Get("ativas")
    listarCampanhasAtivas() {
        return this.campanhasService.listarCampanhasAtivas();
    }

    @Post("ativas")
    inserirCampanhaAtiva(@Body() campanha){
        // tslint:disable-next-line: no-console
        console.log(campanha);
    }

    @Post("receptivas")
    inserirCampanhaReceptiva(@Body() campanha){
        // tslint:disable-next-line: no-console
        console.log(campanha);
    }

}
