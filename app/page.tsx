import { Guitar, Music, Zap, ArrowRight, Volume2, Mic2 } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Zap className="w-16 h-16 text-red-800" strokeWidth={2} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-100 uppercase tracking-tight">
              Unleash Your Sound
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Premium guitars and equipment forged for those who live and breathe music. Built to last, designed to dominate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="metal-button-primary group">
                Shop Now
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="metal-button">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gear Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4 uppercase tracking-tight">
              Featured Gear
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Handpicked instruments for the discerning musician. Each piece crafted with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product Card 1: The Shredder */}
            <div className="metal-card group cursor-pointer">
              <div className="bg-neutral-800 rounded-lg aspect-square mb-6 flex items-center justify-center overflow-hidden">
                <Guitar className="w-24 h-24 text-red-800 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-3 uppercase tracking-wide">
                The Shredder
              </h3>
              <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                High-performance electric guitar with custom pickups and precision engineering. Built for speed and aggression.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-800">$1,299</span>
                <button className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm uppercase font-semibold">
                  View Details →
                </button>
              </div>
            </div>

            {/* Product Card 2: Doom Bass */}
            <div className="metal-card group cursor-pointer">
              <div className="bg-neutral-800 rounded-lg aspect-square mb-6 flex items-center justify-center overflow-hidden">
                <Volume2 className="w-24 h-24 text-red-800 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-3 uppercase tracking-wide">
                Doom Bass
              </h3>
              <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                Heavy-duty 5-string bass with earth-shattering tone. Deep, rumbling low-end that commands attention.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-800">$1,599</span>
                <button className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm uppercase font-semibold">
                  View Details →
                </button>
              </div>
            </div>

            {/* Product Card 3: Acoustic Soul */}
            <div className="metal-card group cursor-pointer">
              <div className="bg-neutral-800 rounded-lg aspect-square mb-6 flex items-center justify-center overflow-hidden">
                <Music className="w-24 h-24 text-red-800 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-3 uppercase tracking-wide">
                Acoustic Soul
              </h3>
              <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                Handcrafted acoustic with rich, warm tones. Perfect for intimate performances or studio sessions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-800">$899</span>
                <button className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm uppercase font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center metal-card">
            <Mic2 className="w-16 h-16 text-red-800 mx-auto mb-6" strokeWidth={2} />
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 uppercase tracking-tight">
              Ready to Rock?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Join thousands of musicians who trust Guitar Pasal for their sound.
            </p>
            <button className="metal-button-primary">
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
