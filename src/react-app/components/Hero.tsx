import { ArrowRight } from 'lucide-react';
import InstagramFeed from './InstagramFeed';
import { Link } from 'react-router-dom';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-section">
      <div className="container mx-auto px-3 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 900, color: '#6B4423'  }} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-neutral-800 leading-tight">
                CROCHÊ FEITO
                <span style={{ color:'#6B4423',fontWeight: 200 }} className="block text-amber-700 font-normal">À MÃO</span>
              </h1>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#b88860ff' }} className="text-sm sm:text-base md:text-lg leading-relaxed">
                Na <span className="font-semibold">tropkshop</span>, cada peça é feita com <span className="font-semibold">carinho, cuidado</span> e <span className="font-semibold">tempo</span>. Por isso, o processo é todo <span className="font-semibold">personalizado</span>, desde a escolha do <span className="font-semibold">modelo</span> até os <span className="font-semibold">ajustes finais</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Link to="/colecoes" className="backdrop-blur-md bg-amber-800/90 hover:bg-amber-900/90 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full border border-amber-700/50 shadow-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2 group text-xs sm:text-sm md:text-base">
                <span>Ver Coleção</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => openWhatsApp (whatsappMessages.default)} className="backdrop-blur-md bg-white/20 border border-white/30 text-neutral-700 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/30 hover:border-amber-800/50 hover:text-amber-800 transition-all duration-300 font-medium shadow-lg">
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#b88860ff' }} className="text-xs sm:text-sm md:text-lg leading-relaxed">
                 <span className="font-semibold">Fale Conosco</span></p>
              </button>
            </div>

            {/* Social Proof with glassmorphism */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 pt-3 sm:pt-4">
              <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg flex-1 sm:flex-none min-w-[90px]">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-amber-800">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-neutral-600 font-light whitespace-nowrap">Peças criadas</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg flex-1 sm:flex-none min-w-[90px]">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-amber-800">100%</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-neutral-600 font-light whitespace-nowrap">Artesanal</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg flex-1 sm:flex-none min-w-[90px]">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-amber-800">🇧🇷</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-neutral-600 font-light whitespace-nowrap">Todo o Brasil</div>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="relative mt-6 sm:mt-8 lg:mt-0">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
