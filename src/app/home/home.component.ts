import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <section class="max-w-xl px-6 text-center space-y-6">
        <p class="text-xs uppercase tracking-[0.25em] text-emerald-400">
          Taller de Angular
        </p>
        <h1 class="text-3xl font-semibold">
          Formularios Reactivos, Rutas y Componentes
        </h1>
        <p class="text-base text-emerald-200">
          Bienvenido. Aquí iniciaremos cada actividad con un enfoque minimalista y ordenado.
        </p>
      </section>
    </main>
  `
})
export class HomeComponent {}

