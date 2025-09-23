import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <section class="min-h-[60vh] flex items-center justify-center">
      <form
        [formGroup]="form"
        (ngSubmit)="submit()"
        class="w-full max-w-xl space-y-8 rounded-3xl border border-emerald-100 bg-white px-8 py-10 shadow-sm"
      >
        <header class="space-y-2 text-center">
          <h2 class="text-3xl font-semibold text-emerald-900">Contacto</h2>
          <p class="text-sm text-emerald-500">Escríbenos y responderemos pronto.</p>
        </header>

        <div class="space-y-4">
          <label class="space-y-2 block">
            <span class="text-sm text-emerald-600">Nombre</span>
            <input
              formControlName="name"
              type="text"
              placeholder="Nombre completo"
              [ngClass]="controlClasses(form.controls.name)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
            <span class="text-sm text-emerald-600">Email</span>
            <input
              formControlName="email"
              type="email"
              placeholder="correo@ejemplo.com"
              [ngClass]="controlClasses(form.controls.email)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
            <span class="text-sm text-emerald-600">Mensaje</span>
            <textarea
              formControlName="message"
              rows="4"
              placeholder="Cuéntanos en qué podemos ayudarte"
              [ngClass]="controlClasses(form.controls.message)"
              class="w-full rounded-xl border px-4 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
          class="w-full rounded-xl bg-emerald-500 py-2 text-sm uppercase tracking-wide text-white shadow-sm"
        >
          Enviar
        </button>
      </form>
    </section>
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

