import { Controller, Get } from '@nestjs/common';
import { CampanhasService } from './campanhas.service';

@Controller('campanhas')
export class CampanhasController {
    constructor(private readonly campanhasService: CampanhasService) { }

    @Get("ativas")
    listarCampanhasAtivas() {
        return this.campanhasService.listarCampanhasAtivas();
    }
}
