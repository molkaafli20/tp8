import { Component, inject, OnInit } from '@angular/core';
import { ParkService } from '../../services/park-service';
import { ParkItem } from '../park-item/park-item';

@Component({
  imports: [ParkItem],
  selector: 'app-park-list',
  styleUrl: './park-list.css',
  templateUrl: './park-list.html',
})
export class ParkList implements OnInit {
  private readonly parkService = inject(ParkService);
  parks = this.parkService.parks;

  ngOnInit(): void {
    this.parkService.getParks().subscribe();
  }
}
