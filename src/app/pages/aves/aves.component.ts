import { AvesService } from './../../services/aves/aves.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aves',
  templateUrl: './aves.component.html',
  styleUrls: ['./aves.component.scss']
})
export class AvesComponent implements OnInit {

  public aves;

  constructor(private _avesService: AvesService) { }

  ngOnInit() {
    this._avesService.getAves()
      .subscribe(response => this.aves = response);

  }

}
