import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="w-full max-w-xl space-y-8 bg-emerald-900/40 border border-emerald-800 px-8 py-10 rounded-2xl"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-3xl font-semibold text-emerald-200">Registro</h2>
          <p class="text-sm text-emerald-300">Completa la información esencial para continuar.</p>
        </header>

        <section formGroupName="personal" class="space-y-4">
          <h3 class="text-lg font-medium text-emerald-200">Datos personales</h3>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Nombre</span>
            <input
              formControlName="name"
              type="text"
              placeholder="Nombre completo"
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.personal.controls.name.touched && form.controls.personal.controls.name.invalid">
              El nombre es obligatorio y debe tener al menos 2 caracteres.
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Edad</span>
            <input
              formControlName="age"
              type="number"
              min="1"
              placeholder="Edad"
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.personal.controls.age.touched && form.controls.personal.controls.age.invalid">
              Indica una edad válida (mayor o igual a 1).
            </p>
          </label>
        </section>

        <section formGroupName="access" class="space-y-4">
          <h3 class="text-lg font-medium text-emerald-200">Datos de acceso</h3>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Email</span>
            <input
              formControlName="email"
              type="email"
              placeholder="correo@ejemplo.com"
              class="w-full bg-emerald-950/80 border border-emerald-700 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p class="text-xs text-emerald-400" *ngIf="form.controls.access.controls.email.touched && form.controls.access.controls.email.invalid">
              Introduce un email válido.
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
            <p class="text-xs text-emerald-400" *ngIf="form.controls.access.controls.password.touched && form.controls.access.controls.password.invalid">
              La contraseña debe tener al menos 6 caracteres.
            </p>
          </label>
        </section>

        <button
          type="submit"
          class="w-full bg-emerald-800 text-emerald-100 py-2 rounded-lg uppercase tracking-wide text-sm"
        >
          Registrar
        </button>
      </form>
    </main>
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  });

  protected submit(): void {
    this.form.markAllAsTouched();
  }
}

