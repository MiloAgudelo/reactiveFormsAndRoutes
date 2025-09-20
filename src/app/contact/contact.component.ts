import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <main class="min-h-screen bg-emerald-950 text-emerald-100 flex items-center justify-center">
      <section class="max-w-xl px-6 text-center space-y-6">
        <h2 class="text-2xl font-semibold text-emerald-200">Contacto</h2>
        <p class="text-base text-emerald-300">
          Este espacio mostrará el formulario de contacto en actividades posteriores.
        </p>
      </section>
    </main>
  `
})
export class ContactComponent {}

