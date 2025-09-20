import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <section class="max-w-xl px-6 text-center space-y-6">
        <h2 class="text-2xl font-semibold text-emerald-200">Sobre este taller</h2>
        <p class="text-base text-emerald-300">
          Exploraremos formularios reactivos y rutas esenciales para construir aplicaciones enfocadas y claras.
        </p>
      </section>
    </main>
  `
})
export class AboutComponent {}

