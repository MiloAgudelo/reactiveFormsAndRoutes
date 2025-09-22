import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="w-full max-w-lg space-y-8 bg-emerald-900/40 border border-emerald-800 px-8 py-10 rounded-2xl"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-3xl font-semibold text-emerald-200">Contacto</h2>
          <p class="text-sm text-emerald-300">Escríbenos y responderemos pronto.</p>
        </header>

        <div class="space-y-4">
          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Nombre</span>
            <input
              formControlName="name"
              type="text"
              placeholder="Nombre completo"
              [ngClass]="controlClasses(form.controls.name)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.name)"
              *ngIf="form.controls.name.touched"
            >
              {{ form.controls.name.invalid ? 'El nombre es obligatorio.' : 'Nombre válido.' }}
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Email</span>
            <input
              formControlName="email"
              type="email"
              placeholder="correo@ejemplo.com"
              [ngClass]="controlClasses(form.controls.email)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            />
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.email)"
              *ngIf="form.controls.email.touched"
            >
              {{ form.controls.email.invalid ? 'Introduce un email válido.' : 'Email válido.' }}
            </p>
          </label>

          <label class="space-y-2 block">
            <span class="text-sm text-emerald-300">Mensaje</span>
            <textarea
              formControlName="message"
              rows="4"
              placeholder="Cuéntanos en qué podemos ayudarte"
              [ngClass]="controlClasses(form.controls.message)"
              class="w-full bg-emerald-950/80 px-4 py-2 rounded-lg text-emerald-100 focus:outline-none"
            ></textarea>
            <p
              class="text-xs"
              [ngClass]="messageClasses(form.controls.message)"
              *ngIf="form.controls.message.touched"
            >
              {{ form.controls.message.invalid ? 'El mensaje es obligatorio.' : 'Mensaje válido.' }}
            </p>
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-emerald-800 text-emerald-100 py-2 rounded-lg uppercase tracking-wide text-sm"
        >
          Enviar
        </button>
      </form>
    </main>
  `
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  protected submit(): void {
    this.form.markAllAsTouched();
  }

  protected controlClasses(control: AbstractControl): string {
    if (!control.touched) {
      return 'border border-emerald-700 text-emerald-100';
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

