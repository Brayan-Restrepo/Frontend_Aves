import { AvesService } from './../../services/aves/aves.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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

  public eliminarAve(cdAve: string) {
    swal({
      title: 'Eliminar',
      text: 'Desea eliminar el ave',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._avesService.deleteAves(cdAve).subscribe(response => {
          if (response) {
            swal(
              'Eliminado',
              'La ave fue eliminada',
              'success'
            );
          } else {
            swal(
              'Error',
              'No se pudo eliminar',
              'success'
            );
          }
        });
      }
    });
  }
}
