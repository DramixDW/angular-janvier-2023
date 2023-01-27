import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
export function confirmShouldBeEqualToPassword(group: FormGroup): ValidationErrors | null {
  if (group.controls['desiredPassword']?.value === group.controls['confirmPassword']?.value) {
    return null
  }
  return {
    shouldBeEqual: true
  }
}
