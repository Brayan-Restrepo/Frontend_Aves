import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvesService {

  constructor(
    private apiService: ApiService
  ) { }

  public getAves(): Observable<any> {
    return this.apiService.get<any>('aves');
  }
}
