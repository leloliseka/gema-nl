"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Hammer, ShieldCheck, Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Asymmetric & Industrial */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/20 to-transparent skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl" />
          {/* Hexagon Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-wider mb-6 uppercase">
              <Hexagon size={14} className="fill-accent" />
              Sinds 1976
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-foreground dark:text-white pr-4">
              MEESTERS IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary dark:to-primary-foreground pb-2 inline-block">
                LEGERINGEN&nbsp;
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 border-l-4 border-accent pl-6">
              Gema Fast B.V. is uw specialist in bevestigingsmaterialen en draaiwerk op maat.
              Wij leveren precisie in exotische werkstoffen voor de meest veeleisende industrieën.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-accent text-accent-foreground font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  OFFERTE AANVRAGEN <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/werkstoffen-en-legeringen"
                className="px-8 py-4 border border-border dark:border-white/10 hover:bg-accent/10 dark:hover:bg-white/5 text-foreground dark:text-white font-semibold text-lg transition-all backdrop-blur-sm"
              >
                ONTDEK WERKSTOFFEN
              </Link>
            </div>
          </motion.div>

          {/* Abstract Visual - Right Side */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-20 rotate-6 blur-xl" />
              <div className="absolute inset-4 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/precision-cnc.png')] bg-cover bg-center opacity-60 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent">
                  <div className="text-accent font-mono text-sm mb-1">PRECISIE TECHNIEK</div>
                  <div className="text-white font-bold text-2xl">Maatwerk Oplossingen</div>
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-accent rounded-xl flex items-center justify-center shadow-lg z-20"
              >
                <Hexagon size={48} className="text-accent-foreground fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee / Clients Strip (Placeholder) */}
      <div className="w-full bg-accent/5 border-y border-border dark:border-white/5 py-8 overflow-hidden">
        <div className="container px-4 flex justify-between items-center opacity-50">
          {/* Placeholder logos */}
          <span className="text-xl font-black text-foreground/40 dark:text-white/40">INDUSTRIE LEIDER</span>
          <span className="text-xl font-black text-foreground/40 dark:text-white/40">LUCHTVAART</span>
          <span className="text-xl font-black text-foreground/40 dark:text-white/40">OFFSHORE</span>
          <span className="text-xl font-black text-foreground/40 dark:text-white/40">PETROCHEMIE</span>
          <span className="text-xl font-black text-foreground/40 dark:text-white/40">AUTOMOTIVE</span>
        </div>
      </div>

      {/* Services / Expertise - Overlapping Cards */}
      <section className="py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              ONTWORPEN VOOR <br />
              <span className="text-accent">PRESTATIES</span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Van standaard bevestigingsmaterialen tot complexe maatwerk onderdelen.
              Wij hebben de expertise en de voorraad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "WERKSTOFFEN",
                subtitle: "Exotische Materialen",
                desc: "Titanium, Hastelloy, Inconel, Duplex en meer.",
                href: "/werkstoffen-en-legeringen#werkstoffen",
                color: "bg-blue-500" // Just for internal ref, using CSS vars
              },
              {
                title: "LEGERINGEN",
                subtitle: "Speciale Eigenschappen",
                desc: "Corrosiebestendig, hittebestendig en hoge treksterkte.",
                href: "/werkstoffen-en-legeringen#legeringen",
                color: "bg-purple-500"
              },
              {
                title: "MAATWERK",
                subtitle: "Volgens Tekening",
                desc: "Draaiwerk en speciale bevestigingen op specificatie.",
                href: "/contact",
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <Link href={item.href} key={index} className="group relative h-[400px] block">
                <div className="absolute inset-0 bg-card border border-border dark:border-white/5 transition-all duration-500 group-hover:-translate-y-4 group-hover:border-accent/50 z-10 flex flex-col justify-between p-8">
                  <div>
                    <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{item.subtitle}</div>
                    <h3 className="text-3xl font-black mb-4 text-foreground dark:text-white group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                {/* Shadow/Depth Element */}
                <div className="absolute inset-0 bg-accent/20 translate-x-2 translate-y-2 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gema - Dark Section */}
      <section className="py-32 bg-muted/50 dark:bg-black/40 border-t border-border dark:border-white/5">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground dark:text-white">
              Kwaliteit zonder <span className="text-accent">Compromis</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Snelle Levering", desc: "Grote voorraad en efficiënte logistiek." },
                { title: "Technische Expertise", desc: "Jarenlange ervaring in metallurgie." },
                { title: "Gecertificeerd", desc: "Voldoet aan de hoogste industrienormen." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10 bg-card border border-white/10 p-12 h-full flex flex-col justify-center items-center text-center">
              <ShieldCheck size={80} className="text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Klaar voor uw project?</h3>
              <p className="text-muted-foreground mb-8">
                Neem contact op met onze specialisten voor advies op maat.
              </p>
              <Link href="/contact" className="px-8 py-3 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors">
                CONTACT OPNEMEN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

