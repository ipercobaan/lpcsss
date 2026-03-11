
import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Instagram, Youtube, Github, Mail, MapPin, Phone, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-8 group">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl shadow-xl shadow-white/5 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-black font-black text-xl italic">B</span>
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase font-display">
                  Blackframe <span className="text-blue-500">Studio</span>
                </span>
            </div>
            <p className="text-white/40 max-w-sm text-lg font-medium italic leading-relaxed mb-10">
                "Redefining the digital cinematic workflow with intelligent tools for the next generation of storytellers."
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-500 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-white/30 italic">Product</h4>
            <ul className="space-y-5 text-sm font-bold text-white/40 uppercase tracking-widest italic">
              <li><a href="#features" className="hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#bonus" className="hover:text-blue-500 transition-colors">Bonus</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Showcase</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-white/30 italic">Support</h4>
            <ul className="space-y-5 text-sm font-bold text-white/40 uppercase tracking-widest italic">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-white/30 italic">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-white/30 tracking-widest mb-1 italic">Email Us</p>
                  <p className="text-sm font-bold text-white/80 italic">hello@blackframe.studio</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-white/30 tracking-widest mb-1 italic">WhatsApp</p>
                  <p className="text-sm font-bold text-white/80 italic">+62 821 2433 5700</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic">© 2024 Blackframe Studio. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest italic">Powered by Mass Engine v1.0</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-white/20" />
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest italic">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
