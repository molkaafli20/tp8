import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../models/park';

@Component({
  imports: [DatePipe, UpperCasePipe],
  selector: 'app-park-selected',
  styleUrl: './park-selected.css',
  templateUrl: './park-selected.html',
})
export class ParkSelected implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly parkService = inject(ParkService);
  private readonly router = inject(Router);

  park = signal<Park | undefined>(undefined);

  ngOnInit(): void {
    let idPark = this.activatedRoute.snapshot.paramMap.get('id');
    if (idPark) {
      this.parkService.getParkById(idPark).subscribe(
        {
          next: foundPark => this.park.set(foundPark),
          error: () => this.router.navigate(['/error'])
        }
      );
    }
  }

  onBack() {
    this.router.navigate(['/parks']);
  }
}
