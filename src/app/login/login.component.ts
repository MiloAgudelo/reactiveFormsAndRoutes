import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { usernameValidator } from './validators/username.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
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
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.email.touched && form.controls.email.invalid">
              Proporciona un email válido.
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Usuario</span>
            <input
              formControlName="username"
              type="text"
              placeholder="Al menos 4 caracteres, sin espacios"
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.username.touched && form.controls.username.invalid">
              Debe tener mínimo 4 caracteres y no incluir espacios.
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Password</span>
            <input
              formControlName="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.password.touched && form.controls.password.invalid">
              La contraseña debe tener al menos 6 caracteres.
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
  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, usernameValidator()]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private readonly fb: FormBuilder) {}
}

