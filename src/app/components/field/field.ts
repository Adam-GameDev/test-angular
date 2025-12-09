import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Field {
  public label = input('')
  public text = input ('--', {
    transform: (value: string | string [] | undefined) => {
      return (inlist(value, [null, undefined])) ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'string' && inList(value.trim(), [',', ''])) ? '--' : value;
    }
  });

  public skipIfEmpty = Input(false);

  protected get isTextArray() boolean {
    return Array.isArray(this.text());
  }

  protected get skipEmpty() boolean {
    return Array.isArray(this.text());
  }
}
