import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailTakenValidator } from './validators/email-taken.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <section class="min-h-[70vh] flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="w-full max-w-2xl space-y-10 rounded-3xl border border-emerald-100 bg-white px-10 py-12 shadow-sm"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-3xl font-semibold text-emerald-900">Registro</h2>
          <p class="text-sm text-emerald-500">Completa la información esencial para continuar.</p>
        </header>

        <section formGroupName="personal" class="grid gap-6 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 py-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-emerald-800">Datos personales</h3>
            <p class="text-sm text-emerald-600">Validaciones básicas para nombre y edad.</p>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <label class="space-y-2 block">
              <span class="text-sm text-emerald-600">Nombre</span>
              <input
                formControlName="name"
                type="text"
                placeholder="Nombre completo"
                [ngClass]="controlClasses(form.controls.personal.controls.name)"
                class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <p
                class="text-xs"
                [ngClass]="messageClasses(form.controls.personal.controls.name)"
                *ngIf="form.controls.personal.controls.name.touched"
              >
                {{
                  form.controls.personal.controls.name.invalid
                    ? 'El nombre es obligatorio y debe tener al menos 2 caracteres.'
                    : 'Nombre válido.'
                }}
              </p>
            </label>

            <label class="space-y-2 block">
              <span class="text-sm text-emerald-600">Edad</span>
              <input
                formControlName="age"
                type="number"
                min="1"
                placeholder="Edad"
                [ngClass]="controlClasses(form.controls.personal.controls.age)"
                class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <p
                class="text-xs"
                [ngClass]="messageClasses(form.controls.personal.controls.age)"
                *ngIf="form.controls.personal.controls.age.touched"
              >
                {{
                  form.controls.personal.controls.age.invalid
                    ? 'Indica una edad válida (mayor o igual a 1).'
                    : 'Edad válida.'
                }}
              </p>
            </label>
          </div>
        </section>

        <section formGroupName="access" class="grid gap-6 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 py-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-emerald-800">Datos de acceso</h3>
            <p class="text-sm text-emerald-600">Validaciones sincronas y asíncronas.</p>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <label class="space-y-2 block">
              <span class="text-sm text-emerald-600">Email</span>
              <input
                formControlName="email"
                type="email"
                placeholder="correo@ejemplo.com"
                [ngClass]="controlClasses(form.controls.access.controls.email)"
                class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <p
                class="text-xs"
                [ngClass]="messageClasses(form.controls.access.controls.email)"
                *ngIf="form.controls.access.controls.email.touched"
              >
                {{ emailMessage }}
              </p>
            </label>

            <label class="space-y-2 block">
              <span class="text-sm text-emerald-600">Password</span>
              <input
                formControlName="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                [ngClass]="controlClasses(form.controls.access.controls.password)"
                class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <p
                class="text-xs"
                [ngClass]="messageClasses(form.controls.access.controls.password)"
                *ngIf="form.controls.access.controls.password.touched"
              >
                {{
                  form.controls.access.controls.password.invalid
                    ? 'La contraseña debe tener al menos 6 caracteres.'
                    : 'Contraseña válida.'
                }}
              </p>
            </label>
          </div>
        </section>

        <button
          type="submit"
          class="w-full rounded-xl bg-emerald-500 py-2 text-sm uppercase tracking-wide text-white shadow-sm"
        >
          Registrar
        </button>
      </form>
    </section>
  `
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    personal: this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]]
    }),
    access: this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email], [emailTakenValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  });

  protected submit(): void {
    this.form.markAllAsTouched();
  }

  protected get emailMessage(): string {
    const control = this.form.controls.access.controls.email;

    if (!control.touched) {
      return 'Introduce un email válido.';
    }

    if (control.hasError('required')) {
      return 'Introduce un email válido.';
    }

    if (control.hasError('email')) {
      return 'Introduce un email válido.';
    }

    if (control.hasError('emailTaken')) {
      return 'Este email ya está registrado.';
    }

    return 'Email válido.';
  }

  protected controlClasses(control: AbstractControl): string {
    if (!control.touched) {
      return 'border-emerald-200 text-emerald-900';
    }

    return control.invalid
      ? 'border-red-400 text-emerald-900'
      : 'border-emerald-400 text-emerald-900';
  }

  protected messageClasses(control: AbstractControl): string {
    if (!control.touched) {
      return 'text-emerald-400';
    }

    return control.invalid ? 'text-red-500' : 'text-emerald-500';
  }
}

