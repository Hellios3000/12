'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Layers, Phone, Send, MessageSquare, ChevronRight, CheckCircle2, FileText, UserX, Banknote, MapPin, Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export const Hero = ({ title, subtitle, cta }: any) => (
  <section className="relative bg-brand-500 py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src="https://picsum.photos/seed/kyiv-legal-hero/1200/800" alt="background" className="w-full h-full object-cover" />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
        <p className="text-brand-100 text-xl mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary bg-gold-500 hover:bg-gold-600">{cta}</button>
          <button className="btn-outline border-white text-white hover:bg-white/10">Наша команда</button>
        </div>
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="hidden lg:block bg-white p-8 rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-bold mb-6">Отримайте швидку відповідь</h3>
        <div className="space-y-4 text-slate-900">
          <input type="text" placeholder="Ваше ім'я" className="w-full p-4 bg-slate-50 rounded-lg outline-none border focus:border-gold-500 transition-all" />
          <input type="tel" placeholder="Номер телефону" className="w-full p-4 bg-slate-50 rounded-lg outline-none border focus:border-gold-500 transition-all" />
          <textarea placeholder="Опишіть коротко проблему" className="w-full p-4 bg-slate-50 rounded-lg h-32 outline-none border focus:border-gold-500 transition-all"></textarea>
          <button className="w-full btn-primary">Відправити запит</button>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Stats = ({ items }: any) => (
  <section className="bg-white py-12 border-b">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item: any, i: number) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-black text-gold-500 mb-2">{item.value}</div>
            <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Emergency = ({ text }: any) => (
  <section className="bg-slate-900 py-6 text-white">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
      <span className="font-bold flex items-center gap-2"><Phone className="text-gold-500 animate-pulse" /> {text}</span>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-[#27A7E7] px-4 py-2 rounded-full text-sm font-bold"><Send size={16} /> Telegram</button>
        <button className="flex items-center gap-2 bg-[#7360F2] px-4 py-2 rounded-full text-sm font-bold"><MessageSquare size={16} /> Viber</button>
      </div>
    </div>
  </section>
);

export const ServicesTabs = ({ title, tabs }: any) => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        {tabs.map((tab: any) => (
          <div key={tab.id} className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-500 flex items-center gap-2">
              <CheckCircle2 className="text-gold-500" /> {tab.label}
            </h3>
            <div className="grid gap-4">
              {tab.services.map((s: any, i: number) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer">
                  <h4 className="font-bold text-lg mb-2 flex items-center justify-between">
                    {s.title} <ChevronRight className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </h4>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IconMap: any = { ShieldCheck, Lock, Layers, FileText, UserX, Banknote };

export const Features = ({ title, items }: any) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {items.map((item: any, i: number) => {
          const Icon = IconMap[item.icon] || ShieldCheck;
          return (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const Testimonials = ({ title, items }: any) => (
  <section className="py-24 bg-brand-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item: any, i: number) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
            <div className="flex gap-1 text-gold-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <Quote className="text-gold-500/20 mb-4" size={40} />
            <p className="text-slate-700 italic mb-6">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <img src={`https://picsum.photos/seed/p-${i}/100/100`} alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <div className="font-bold text-brand-500">{item.name}</div>
                <div className="text-xs text-slate-500 uppercase">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Process = ({ title, steps }: any) => (
  <section className="py-24 bg-brand-500 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s: any, i: number) => (
          <div key={i} className="relative">
            <div className="text-6xl font-black text-white/10 mb-4">{s.step}</div>
            <h4 className="text-xl font-bold mb-2">{s.title}</h4>
            <p className="text-brand-100">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactForm = ({ title }: any) => (
  <section className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl text-slate-900">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Прізвище та ім'я</label>
              <input type="text" className="w-full p-4 bg-white rounded-lg border outline-none focus:border-gold-500" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Телефон</label>
              <input type="tel" className="w-full p-4 bg-white rounded-lg border outline-none focus:border-gold-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Суть питання</label>
            <textarea className="w-full p-4 bg-white rounded-lg border h-32 outline-none focus:border-gold-500"></textarea>
          </div>
          <button className="btn-primary w-full">Отримати правову допомогу</button>
        </div>
      </div>
    </div>
  </section>
);

export const Pricing = ({ title, prices }: any) => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="border rounded-2xl overflow-hidden shadow-xl">
        {prices.map((p: any, i: number) => (
          <div key={i} className={cn("flex justify-between items-center p-6 border-b last:border-0", i % 2 === 0 ? "bg-white" : "bg-slate-50")}>
            <span className="font-medium">{p.name}</span>
            <span className="font-bold text-brand-500">{p.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm mb-6">* Остаточна вартість визначається після вивчення складності справи</p>
        <button className="btn-primary mx-auto">Замовити розрахунок</button>
      </div>
    </div>
  </section>
);

export const FAQ = ({ title, items }: any) => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="space-y-4">
        {items.map((item: any, i: number) => (
          <details key={i} className="group bg-white p-6 rounded-xl shadow-sm cursor-pointer">
            <summary className="font-bold text-lg flex justify-between items-center list-none text-slate-900">
              {item.q}
              <ChevronRight className="group-open:rotate-90 transition-transform text-gold-500" />
            </summary>
            <p className="mt-4 text-slate-500 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const ContactMap = ({ title, address }: any) => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-12 text-slate-900">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500"><MapPin /></div>
              <div>
                <div className="font-bold">Офіс</div>
                <div className="text-slate-500">{address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500"><Phone /></div>
              <div>
                <div className="font-bold">Телефон</div>
                <div className="text-slate-500">+38 (044) 123-45-67</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 lg:h-auto bg-slate-200 relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6472099351057!2d30.5212503!3d50.4501335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50fd4d56e3%3A0x2774577f80f135b5!2z0KXRgNC10YnQsNGC0LjQuiwgMSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);