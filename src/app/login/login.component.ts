import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { usernameValidator } from './validators/username.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <section class="min-h-[60vh] flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="form.markAllAsTouched()"
        class="w-full max-w-md space-y-6 rounded-3xl border border-emerald-100 bg-white px-8 py-10 shadow-sm"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-3xl font-semibold text-emerald-900">Inicio de sesión</h2>
          <p class="text-sm text-emerald-500">Accede usando credenciales válidas.</p>
        </header>

        <div class="space-y-4">
          <label class="space-y-2 block">
            <span class="text-sm text-emerald-600">Email</span>
            <input
              formControlName="email"
              type="email"
              placeholder="usuario@correo.com"
              [ngClass]="controlClasses(form.controls.email)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.email)"
              *ngIf="form.controls.email.touched"
            >
              {{ form.controls.email.invalid ? 'Proporciona un email válido.' : 'Email válido.' }}
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-600">Usuario</span>
            <input
              formControlName="username"
              type="text"
              placeholder="Al menos 4 caracteres, sin espacios"
              [ngClass]="controlClasses(form.controls.username)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.username)"
              *ngIf="form.controls.username.touched"
            >
              {{ form.controls.username.invalid ? 'Debe tener mínimo 4 caracteres y no incluir espacios.' : 'Usuario válido.' }}
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-600">Password</span>
            <input
              formControlName="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              [ngClass]="controlClasses(form.controls.password)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.password)"
              *ngIf="form.controls.password.touched"
            >
              {{ form.controls.password.invalid ? 'La contraseña debe tener al menos 6 caracteres.' : 'Contraseña válida.' }}
            </p>
          </label>
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-emerald-500 py-2 text-sm uppercase tracking-wide text-white shadow-sm"
        >
          Entrar
        </button>
      </form>
    </section>
  `
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, usernameValidator()]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

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

