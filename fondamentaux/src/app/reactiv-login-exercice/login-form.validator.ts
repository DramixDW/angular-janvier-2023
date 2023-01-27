import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
export class EmailValidator {
  static shouldExists(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'romain@triptyk.eu') {
          resolve(null)
        }
        resolve({
          shouldExists: true,
        })
      }, 5000)
    })
  }
}

export function checkSqlInjection(control: AbstractControl) {
  return (control.value as string).indexOf('1+1') !== -1 ?  {danger: true} : null;
}
