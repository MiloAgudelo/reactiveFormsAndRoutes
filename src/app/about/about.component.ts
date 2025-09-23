import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="min-h-[60vh] rounded-3xl border border-emerald-100 bg-white px-8 py-16 shadow-sm">
      <div class="max-w-3xl space-y-8">
        <header class="space-y-3">
          <p class="text-xs uppercase tracking-[0.35em] text-emerald-500">Resumen del taller</p>
          <h2 class="text-3xl font-semibold text-emerald-900">Actividades clave</h2>
          <p class="text-base text-emerald-600">
            Esta guía práctica te acompaña en la creación de una aplicación Angular con rutas standalone y formularios reactivos, tal como se describe en el README del proyecto.
          </p>
        </header>

        <div class="grid gap-4 text-sm text-emerald-700 md:grid-cols-2">
          <article class="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">
            <h3 class="text-emerald-800 font-semibold">Formularios Reactivos</h3>
            <p>Implementa login y registro usando FormGroup, validaciones síncronas, personalizadas y asincrónicas.</p>
          </article>

          <article class="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">
            <h3 class="text-emerald-800 font-semibold">Rutas Iniciales</h3>
            <p>Configura Home, About y Contact con navegación funcional mediante routerLink y router-outlet.</p>
          </article>

          <article class="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">
            <h3 class="text-emerald-800 font-semibold">Retroalimentación Visual</h3>
            <p>Aplica estilos para estados válidos/invalidos y demuestra retroalimentación en tiempo real.</p>
          </article>

          <article class="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">
            <h3 class="text-emerald-800 font-semibold">Proyecto Integrador</h3>
            <p>Entrega final con al menos cinco componentes, rutas completas y formularios con validaciones avanzadas.</p>
          </article>
        </div>

        <footer class="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-5 py-4 text-sm text-emerald-600">
          <p>
            Objetivo general: Desarrollar competencias prácticas en la creación, validación y manejo de formularios reactivos junto con navegación entre componentes en Angular.
          </p>
        </footer>
      </div>
    </section>
  `
})
export class AboutComponent {}

