import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="min-h-[60vh] rounded-3xl border border-emerald-100 bg-white px-8 py-16 shadow-sm">
      <div class="max-w-2xl space-y-6">
        <h2 class="text-3xl font-semibold text-emerald-900">Sobre este taller</h2>
        <p class="text-base text-emerald-600">
          Exploraremos formularios reactivos, rutas y componentes standalone con un enfoque guiado.
        </p>
        <ul class="grid gap-4 text-sm text-emerald-700">
          <li class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <span class="font-medium text-emerald-800">Formularios Reactivos:</span> Validaciones, agrupaciones y controles personalizados.
          </li>
          <li class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <span class="font-medium text-emerald-800">Rutas:</span> Navegación clara entre secciones y componentes.
          </li>
          <li class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <span class="font-medium text-emerald-800">Minimalismo:</span> Estética limpia con acentos verdes que guían la atención.
          </li>
        </ul>
      </div>
    </section>
  `
})
export class AboutComponent {}

