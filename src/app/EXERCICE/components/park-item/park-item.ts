import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../models/park';

@Component({
  imports: [RouterLink],
  selector: 'app-park-item',
  styleUrl: './park-item.css',
  templateUrl: './park-item.html',
})
export class ParkItem {
  private readonly parkService = inject(ParkService);

  // Objet Park transmis par le composant parent park-list
  park = input.required<Park>();

  onLike() {
    let p = { ...this.park(), nbLikes: this.park().nbLikes + 1 };
    this.parkService.updatePark(p).subscribe();
  }

  onDelete() {
    this.parkService.deletePark(this.park().id).subscribe();
  }
}
