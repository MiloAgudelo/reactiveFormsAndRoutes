import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (!value) {
      return null;
    }

    const trimmed = value.trim();
    const hasWhitespace = /\s/.test(value);

    if (hasWhitespace || trimmed.length < 4) {
      return { username: true };
    }

    return null;
  };
}

