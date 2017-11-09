import { Injectable } from '@angular/core';
import { Donor } from './Donor';
import { DONORS } from './donors';

@Injectable()
export class DonorService {
    getDonors():Promise<Donor[]>{
        return Promise.resolve(DONORS);
    }
    getFeaturedDonor(){
        return DONORS.find(donor => donor.featured == true);
    }
    getDonor(id:number){
        return DONORS.find(donor => donor.id === id);
    }
  constructor() { }

}
