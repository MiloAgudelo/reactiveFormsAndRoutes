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
          Explora actividades guiadas para dominar formularios reactivos, validaciones personalizadas y navegación con rutas básicas en Angular.
        </p>
        <div class="grid gap-3 text-sm text-emerald-700 md:grid-cols-3">
          <div class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p class="font-semibold text-emerald-800">Formularios</p>
            <p>FormGroup, validaciones síncronas y asincrónicas.</p>
          </div>
          <div class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p class="font-semibold text-emerald-800">Rutas</p>
            <p>Standalone components, routerLink y navegación.</p>
          </div>
          <div class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p class="font-semibold text-emerald-800">Proyecto</p>
            <p>Aplicación completa con retroalimentación visual.</p>
          </div>
        </div>
        <p class="text-xs uppercase tracking-[0.35em] text-emerald-400">
          Objetivo general: competencias prácticas en Angular
        </p>
      </div>
    </section>
  `
})
export class HomeComponent {}

