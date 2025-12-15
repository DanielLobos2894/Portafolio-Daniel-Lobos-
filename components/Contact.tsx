import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/56942094646?text=Hola%20Daniel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.";

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
        {/* Decoration */}
       <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Conectemos</h2>
          <p className="text-gray-400 text-lg">
            ¿Tienes un proyecto en mente o quieres hablar de tecnología?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gray-800/50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:Daniel.lobos.arriaza@gmail.com" className="text-white text-lg font-medium hover:text-primary transition-colors break-all">Daniel.lobos.arriaza@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gray-800/50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                    <p className="text-white text-lg font-medium">Coquimbo, Chile (Remoto)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-gray-800/50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                    <p className="text-white text-lg font-medium">+56 9 4209 4646</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA (Replaces Form) */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-6 border border-green-500/20 bg-green-900/5 hover:bg-green-900/10 transition-colors">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-pulse">
               <MessageCircle size={40} />
            </div>
            
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-3">Chat Directo</h3>
              <p className="text-gray-400 mb-8">
                La forma más rápida de obtener una respuesta. Envíame un mensaje directamente a mi WhatsApp indicando tu interés.
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full group bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} className="fill-current" />
                <span className="text-lg">Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;