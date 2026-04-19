import { motion } from 'motion/react';
import { Camera, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-surface-high/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/artist/800/1000" 
                alt="Behind the lens" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-ink p-8 rounded-full flex items-center justify-center text-center hidden md:flex">
                <span className="font-serif italic text-brand-bg text-lg leading-tight">Founded on Love, Framed in Art.</span>
            </div>
          </motion.div>

          <div>
            <span className="font-sans text-brand-secondary uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block font-semibold">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-ink mb-8 font-light leading-tight">We Capture What It <span className="italic">Feels</span> Like, Not Just What It Looks Like</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-none w-10 h-10 rounded-full bg-brand-surface-highest flex items-center justify-center">
                  <Camera className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Cinematic Storytelling</h4>
                  <p className="font-sans text-brand-ink/60 text-sm leading-relaxed">
                    We approach every wedding as a feature film, where the light, the composition, and the sound tell the story of your legacy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-none w-10 h-10 rounded-full bg-brand-surface-highest flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Artisanal Curation</h4>
                  <p className="font-sans text-brand-ink/60 text-sm leading-relaxed">
                    Your moments aren't delivered as files; they are curated as heirlooms. We handpick and refine every frame to ensure timeless perfection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-none w-10 h-10 rounded-full bg-brand-surface-highest flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Ethereal Quality</h4>
                  <p className="font-sans text-brand-ink/60 text-sm leading-relaxed">
                    Based in Ahmedabad but traveling the globe, we bring a distinctive high-end editorial gaze to every culture and ceremony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
