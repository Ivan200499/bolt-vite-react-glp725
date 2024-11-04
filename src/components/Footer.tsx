import React from 'react';
import { Layers, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Layers className="h-8 w-8 text-indigo-400" strokeWidth={1.5} />
              <span className="font-bold text-xl">Santix</span>
            </div>
            <p className="mt-4 text-gray-400">
              Innovazione e sviluppo web per il tuo business
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@santix.it</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+39 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Milano, Italia</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Orari</h3>
            <div className="text-gray-400">
              <p>Lun - Ven: 9:00 - 18:00</p>
              <p>Sab - Dom: Chiuso</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Santix. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}