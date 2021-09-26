import {Controller, Get, Query } from '@nestjs/common';
import {OffersService} from "src/offers/offers.service";
import { Offer } from './offer.model';

@Controller('offers')
export class OffersController {
    constructor(private readonly offersService: OffersService) {}

    @Get() 
    async filterOffers(@Query('title') title: string): Promise<Offer[]> {
        return this.offersService.filterOffers(title);
    }

    @Get()
    async getOffers(): Promise<Offer[]> {
        return this.offersService.getOffers();
    }

    
}
