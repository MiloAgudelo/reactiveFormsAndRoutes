import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="grid min-h-[70vh] place-items-center rounded-3xl border border-emerald-100 bg-white px-6 py-16 shadow-sm">
      <div class="max-w-2xl space-y-6 text-center">
        <p class="text-xs uppercase tracking-[0.4em] text-emerald-500">Taller de Angular</p>
        <h2 class="text-4xl font-semibold text-emerald-900">
          Formularios Reactivos, Rutas y Componentes
        </h2>
        <p class="text-base text-emerald-600">
          Bienvenido. Avanza paso a paso con el enfoque minimalista de este taller y construye una base sólida.
        </p>
        <div class="flex items-center justify-center gap-3 text-sm">
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-600">Reactivo</span>
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-600">Modular</span>
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-600">Accesible</span>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}

