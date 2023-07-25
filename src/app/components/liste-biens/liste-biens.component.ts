import { Component, Input, OnInit } from '@angular/core';
import { Bien } from '../../models/bien';
import { BienService } from '../../services/bien.service';

@Component({
  selector: 'app-liste-biens',
  templateUrl: './liste-biens.component.html',
  styleUrls: ['./liste-biens.component.css']
})
export class ListeBiensComponent implements OnInit {
 @Input()  biens: Bien[] = [];

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.getBienList();
  }

  getBienList(): void {
    this.bienService.getBiens()
      .subscribe(biens => this.biens = biens);
  }
}
