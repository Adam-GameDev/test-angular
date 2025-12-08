import { Injectable, signal, WriteableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Common {
  public ready: WritableSignal<boolean> = signal(false);
}
