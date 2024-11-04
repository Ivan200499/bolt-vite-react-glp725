import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Laptop, Rocket } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trasformiamo le tue idee in realtà digitale
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Sviluppo web innovativo per far crescere il tuo business
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              Prenota una consulenza gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">I nostri servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sviluppo Web</h3>
              <p className="text-gray-600">
                Creiamo siti web e applicazioni moderne, veloci e responsive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design UX/UI</h3>
              <p className="text-gray-600">
                Progettiamo interfacce intuitive e coinvolgenti per i tuoi utenti.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
              <p className="text-gray-600">
                Ti aiutiamo a definire la migliore strategia digitale per il tuo business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto a far crescere il tuo business?
          </h2>
          <button
            onClick={() => navigate('/booking')}
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
          >
            Prenota una video call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}