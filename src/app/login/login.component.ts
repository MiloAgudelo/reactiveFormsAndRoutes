import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { usernameValidator } from './validators/username.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="form.markAllAsTouched()"
        class="w-full max-w-sm space-y-6 bg-emerald-900/40 border border-emerald-800 px-8 py-10 rounded-2xl"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-2xl font-semibold text-emerald-200">Inicio de sesión</h2>
          <p class="text-sm text-emerald-300">Accede usando credenciales válidas.</p>
        </header>

        <div class="space-y-4">
          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Email</span>
            <input
              formControlName="email"
              type="email"
              placeholder="usuario@correo.com"
              [ngClass]="controlClasses(form.controls.email)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
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
            <span class="text-sm text-emerald-300">Usuario</span>
            <input
              formControlName="username"
              type="text"
              placeholder="Al menos 4 caracteres, sin espacios"
              [ngClass]="controlClasses(form.controls.username)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
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
            <span class="text-sm text-emerald-300">Password</span>
            <input
              formControlName="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              [ngClass]="controlClasses(form.controls.password)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
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
          class="w-full bg-emerald-800 text-emerald-100 py-2 rounded-lg uppercase tracking-wide text-sm"
        >
          Entrar
        </button>
      </form>
    </main>
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
      return 'border border-emerald-700';
    }

    return control.invalid
      ? 'border border-red-500 text-emerald-100'
      : 'border border-emerald-500 text-emerald-100';
  }

  protected messageClasses(control: AbstractControl): string {
    if (!control.touched) {
      return 'text-emerald-400';
    }

    return control.invalid ? 'text-red-400' : 'text-emerald-400';
  }
}

