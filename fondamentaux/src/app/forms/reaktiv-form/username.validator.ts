import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class UserValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') !== -1) {
      return {
        hasSpaces: true
      };
    }
    return null;
  }

  static cannotContain(value: string) {
    return (control: AbstractControl) => {
      if ((control.value as string).indexOf(value) !== -1) {
        return {
          hasForbiddenValue: value
        };
      }
      return null;
    }
  }

  static shouldBeAuthorized(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Romain') {
          resolve({
            isUnauthorized: true,
          })
        }
        resolve(null);
      }, 10000);
    })
  }
}
