import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Park } from '../models/park';

const URL = 'http://localhost:3001/parks';

@Service()
export class ParkService {
  private readonly _http = inject(HttpClient);
  private readonly _parks = signal<Park[]>([]);
  parks = this._parks.asReadonly();

  getParks(): Observable<Park[]> {
    return this._http.get<Park[]>(URL)
      .pipe(
        tap(allParks => this._parks.set(allParks))
      );
  }

  getParkById(id: string): Observable<Park> {
    return this._http.get<Park>(`${URL}/${id}`);
  }

  deletePark(id: string): Observable<void> {
    return this._http.delete<void>(`${URL}/${id}`)
      .pipe(
        tap(() => this._parks.update(allParks =>
          allParks.filter(p => p.id != id)))
      );
  }

  updatePark(newPark: Park): Observable<Park> {
    return this._http.put<Park>(`${URL}/${newPark.id}`, newPark)
      .pipe(
        tap(updatedPark => this._parks.update(allParks =>
          allParks.map(p => (p.id == newPark.id) ? updatedPark : p)))
      );
  }
}
