import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const MOCKED_TAKEN_EMAILS = ['admin@demo.com', 'someone@example.com'];

export function emailTakenValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(400).pipe(
      switchMap(() => of(control.value as string)),
      map((value) => {
        if (!value) {
          return null;
        }

        const exists = MOCKED_TAKEN_EMAILS.includes(value.toLowerCase());
        return exists ? { emailTaken: true } : null;
      })
    );
  };
}

