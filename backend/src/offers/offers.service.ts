import { Injectable, NotFoundException } from '@nestjs/common';
import { Offer } from './offer.model';
import { data } from '../../data';

const scratchData = data.map(item => ({
    id: item.id,
    publishedAt: item.published_at,
    lon: item.longitude,
    lat: item.latitude,
    title: item.title
}) )

const filteredData = searchBy => scratchData.filter(item => item.title.toLowerCase().includes(searchBy?.toLowerCase()))

@Injectable()
export class OffersService {
    
    offers: Offer[] = [...scratchData];
    getOffers(): Array<Offer> {
        return [...this.offers];
    }

    filterOffers(title: string): Array<Offer> {
        const filteredOffers = filteredData(title)
        if (!filteredOffers) {
            throw new NotFoundException('Could not find data for a given title')
        }

        if(!title) {
            return [...this.offers];
        }
        return [...filteredOffers]
    }
}
