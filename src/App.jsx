import React, { useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  QrCode, 
  Check, 
  Award, 
  Sparkles, 
  ChevronRight, 
  Utensils, 
  Heart, 
  DollarSign, 
  TrendingUp, 
  Gift, 
  Calendar,
  Flame,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Custom inline SVG for Instagram because brand icons are deprecated in newer Lucide versions
const Instagram = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Menu data with categories, descriptions, price, popular status, and veg status
const menuData = {
  coffee: [
    { name: 'Cappuccino', price: 120, desc: 'Espresso topped with thick layer of silky microfoam and cocoa dust.', popular: true, veg: true },
    { name: 'Espresso', price: 90, desc: 'Rich, intense, full-bodied single shot of our house premium roast.', popular: false, veg: true },
    { name: 'Latte', price: 130, desc: 'Smooth double shot espresso with velvety steamed milk and subtle art.', popular: false, veg: true },
    { name: 'Mocha', price: 150, desc: 'Espresso fused with luxurious dark chocolate and steamed milk foam.', popular: true, veg: true },
  ],
  coldBeverages: [
    { name: 'Cold Coffee', price: 140, desc: 'Creamy, blended chilled espresso with pure vanilla bean gelato.', popular: true, veg: true },
    { name: 'Iced Latte', price: 150, desc: 'Double espresso poured over ice and silky milk, lightly sweetened.', popular: false, veg: true },
    { name: 'Chocolate Shake', price: 160, desc: 'Decadent rich dark chocolate blended with whole milk and cream.', popular: false, veg: true },
    { name: 'Lemon Iced Tea', price: 110, desc: 'Chilled hand-brewed black tea infused with fresh citrus juice and mint.', popular: false, veg: true },
  ],
  snacks: [
    { name: 'Cheese Sandwich', price: 110, desc: 'Artisanal sourdough loaded with sharp cheddar, mozzarella and fresh basil.', popular: false, veg: true },
    { name: 'Veg Burger', price: 130, desc: 'Crispy spiced potato & herb patty with fresh gourmet greens and house sauce.', popular: true, veg: true },
    { name: 'French Fries', price: 100, desc: 'Golden, crispy, skin-on premium potatoes tossed in sea salt and rosemary.', popular: false, veg: true },
    { name: 'Garlic Bread', price: 120, desc: 'Toasted baguette slathered in rich garlic herb butter and melted mozzarella.', popular: false, veg: true },
  ],
  desserts: [
    { name: 'Chocolate Brownie', price: 90, desc: 'Warm fudge brownie packed with roasted walnuts, served with chocolate drizzle.', popular: false, veg: true },
    { name: 'Cheesecake Slice', price: 180, desc: 'New York style velvety baked cheesecake with a wild raspberry compote.', popular: true, veg: false },
    { name: 'Choco Lava Cake', price: 130, desc: 'Soft chocolate cake with a molten, warm premium chocolate core.', popular: false, veg: true },
  ],
  combos: [
    { name: 'Student Combo', price: 199, desc: 'Classic Veg Burger served with a chilled Lemon Iced Tea or Cold Coffee.', popular: true, veg: true },
    { name: 'Couple Combo', price: 349, desc: 'Two Lattes of choice served with a Cheese Sandwich and two warm Brownies.', popular: false, veg: true },
    { name: 'Coffee + Brownie', price: 189, desc: 'Your favorite hot Cappuccino paired with a warm, fudgy Chocolate Brownie.', popular: true, veg: true },
  ],
};

function App() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [monthlyMenuCost, setMonthlyMenuCost] = useState(1500); // B2B ROI calculator state
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  // pre-filled WhatsApp message
  const whatsappNumber = '919876543210';
  const waBaseUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%20Cafe%2C%20I%20want%20to%20check%20your%20menu%20and%20place%20an%20order.`;

  // Format category names for display
  const categoryLabels = {
    coffee: 'Coffee',
    coldBeverages: 'Cold Beverages',
    snacks: 'Snacks',
    desserts: 'Desserts',
    combos: 'Combos'
  };

  const copyDemoLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="relative min-h-screen selection:bg-gold/30 selection:text-gold">
      
      {/* PROFESSIONAL DEMO BADGE */}
      <div className="bg-gradient-to-r from-coffee-dark via-gold/20 to-coffee-dark border-b border-gold/20 text-center py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-gold/90 text-coffee-darkest font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Demo Template</span>
            <span className="text-cream-light font-medium">Digital QR Menu concept for modern cafés & bistros.</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={copyDemoLink} 
              className="text-gold font-semibold hover:text-gold-light transition-colors flex items-center gap-1 active:scale-95"
            >
              {copiedLink ? '✓ Copied!' : 'Copy Demo Link'}
            </button>
            <span className="text-coffee-light">|</span>
            <a href="#business-pitch" className="text-cream-light underline hover:text-gold transition-colors font-medium">Why Go Digital?</a>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="w-full py-4 px-6 md:px-12 glass-card border-t-0 border-x-0 border-b border-coffee-light/10 sticky top-[37px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative p-2 bg-gradient-to-br from-coffee to-coffee-dark rounded-xl border border-gold/30 shadow-md shadow-gold/5 group-hover:border-gold/60 transition-all duration-300">
              <Coffee className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold rounded-full animate-ping"></div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold tracking-wider bg-gradient-to-r from-cream-light via-gold-light to-gold bg-clip-text text-transparent">VELVET BREW</span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-coffee-light font-bold">Cafe & Roastery</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="text-cream-light hover:text-gold transition-colors duration-300">Home</a>
            <a href="#about" className="text-cream-dark hover:text-gold transition-colors duration-300">About</a>
            <a href="#menu" className="text-cream-dark hover:text-gold transition-colors duration-300">Menu</a>
            <a href="#qr-code" className="text-cream-dark hover:text-gold transition-colors duration-300">QR Experience</a>
            <a href="#offers" className="text-cream-dark hover:text-gold transition-colors duration-300">Offers</a>
            <a href="#location" className="text-cream-dark hover:text-gold transition-colors duration-300">Hours</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={waBaseUrl} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2 text-xs md:text-sm py-2 px-5">
              <MessageSquare className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-cream-light hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[85px] z-30 bg-coffee-darkest/95 backdrop-blur-lg md:hidden animate-fade-in">
          <nav className="flex flex-col items-center gap-6 pt-16 text-lg font-semibold">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-light hover:text-gold transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-dark hover:text-gold transition-colors"
            >
              About
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-dark hover:text-gold transition-colors"
            >
              Digital Menu
            </a>
            <a 
              href="#qr-code" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-dark hover:text-gold transition-colors"
            >
              QR Code Menu
            </a>
            <a 
              href="#offers" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-dark hover:text-gold transition-colors"
            >
              Specials & Offers
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-cream-dark hover:text-gold transition-colors"
            >
              Timings & Map
            </a>
            
            <div className="w-full px-8 pt-8 border-t border-coffee-light/10 mt-4 flex flex-col gap-4">
              <a href={waBaseUrl} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="btn-espresso flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                Get Directions
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Soft Radial Glow behind hero */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full cozy-light-glow-large -z-10 pointer-events-none"></div>

        {/* Floating Coffee Beans Simulation */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-coffee-light/20 rounded-full animate-float blur-[1px] hidden sm:block"></div>
        <div className="absolute bottom-16 left-12 w-6 h-6 bg-coffee/10 rounded-full animate-float-slow blur-[2px] hidden sm:block"></div>

        {/* Hero Text */}
        <div className="flex-1 text-center lg:text-left animate-slide-up z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Modern Luxury Café Experience
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Fresh Coffee. <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">Cozy Corners.</span> <br />
            Unforgettable Moments.
          </h1>
          <p className="text-cream-dark text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            A modern café experience crafted for coffee lovers, conversations, and comfort. Step in for handcrafted brews, fresh signature bites, and your favorite workspace spot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#menu" className="btn-gold w-full sm:w-auto text-center flex items-center justify-center gap-2 group">
              View Digital Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={waBaseUrl} target="_blank" rel="noopener noreferrer" className="btn-espresso w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 text-gold" />
              Order on WhatsApp
            </a>
            <a href="#location" className="btn-espresso w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Cinematic Glowing Hero Visual Card */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-lg animate-fade-in">
          
          {/* Main Visual Cozy Card */}
          <div className="relative glass-card border border-gold/20 p-8 rounded-3xl overflow-hidden shadow-gold/5 flex flex-col items-center text-center">
            
            {/* Soft Warm Lighting Glow overlay inside */}
            <div className="absolute inset-0 cozy-light-glow pointer-events-none"></div>

            {/* Premium Gold Accent Rings */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border border-gold/10 pointer-events-none"></div>
            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full border border-gold/10 pointer-events-none animate-pulse-glow"></div>

            {/* Steaming Coffee Cup Illustration */}
            <div className="relative mt-8 mb-12 flex flex-col items-center">
              
              {/* Hot Steam Animation */}
              <div className="steam-container mb-4">
                <span className="steam-line"></span>
                <span className="steam-line"></span>
                <span className="steam-line"></span>
              </div>

              {/* Glowing Coffee Cup Wrapper */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-coffee-light/30 to-coffee-darkest/90 border-2 border-gold/40 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.15)] group hover:border-gold transition-all duration-500">
                <Coffee className="w-16 h-16 md:w-20 md:h-20 text-gold-light group-hover:scale-105 transition-transform duration-500" />
                
                {/* Coffee Aromas Orbit Effect */}
                <div className="absolute inset-2 border border-dashed border-gold/25 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coffee-dark/80 text-gold-light text-xs font-semibold mb-4 border border-coffee-light/20 shadow-md">
                <Award className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                Velvet Brew House Blend
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-cream-light">100% Specialty Arabica</h3>
              <p className="text-cream-dark text-xs md:text-sm max-w-xs mx-auto leading-relaxed mb-4">
                Sustainably sourced single-origin coffee beans, medium-dark roasted to bring out chocolate, caramel, and berry undertones.
              </p>
              
              {/* Dynamic Customer Rating Tag */}
              <div className="flex items-center justify-center gap-1.5 text-gold text-xs font-bold pt-2 border-t border-coffee-light/10">
                <div className="flex text-gold font-bold">★★★★★</div>
                <span className="text-cream-light font-medium ml-1">4.9/5 Rating (600+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-gradient-to-b from-coffee-darkest via-coffee-dark/50 to-coffee-darkest border-t border-b border-coffee-light/5 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-coffee-light/10 border border-coffee-light/20 mb-6">
            <Utensils className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">Our Crafted Philosophy</h2>
          <p className="text-cream-dark text-lg md:text-xl font-normal leading-relaxed italic mb-8">
            “Velvet Brew Cafe brings together handcrafted coffee, fresh bites, warm ambience, and a peaceful space for friends, students, families, and creators.”
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-cream-dark/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Every cup we brew is a labor of love. We partner directly with organic coffee farmers in Southern India, ensuring ethical trading while bringing you the absolute peak of aromatic notes. Coupled with our cozy corners, study tables, and artisanal bakes, we serve as your perfect third home.
          </p>
        </div>
      </section>

      {/* DIGITAL MENU SECTION */}
      <section id="menu" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase block mb-3">Freshly Prepared</span>
          <h2 className="text-3xl md:text-5xl font-bold">Explore Our Digital Menu</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-cream-dark text-sm md:text-base mt-4 max-w-lg mx-auto">
            Select a category to view gourmet beverages and bites. Scan on site or click to order instantly on WhatsApp.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 justify-start md:justify-center gap-3 scrollbar-hide px-2">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-coffee-darkest shadow-lg shadow-gold/20 scale-[1.02]'
                  : 'bg-coffee-dark/80 text-cream-dark hover:text-cream-light border border-coffee-light/10 hover:border-gold/30'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {menuData[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Popular Tag Overlay */}
              {item.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-gold to-gold-light text-coffee-darkest text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-md z-10">
                  <Flame className="w-3 h-3 fill-coffee-darkest" />
                  Popular
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    {/* Veg Symbol styling */}
                    <div className={`w-4 h-4 border-2 flex items-center justify-center p-0.5 rounded ${item.veg ? 'border-green-600' : 'border-red-800'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-800'}`}></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-cream-light">{item.name}</h3>
                  </div>
                  <span className="text-gold font-bold text-lg md:text-xl shrink-0">₹{item.price}</span>
                </div>
                <p className="text-cream-dark/70 text-xs md:text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
              </div>

              {/* Order Button Inside Card */}
              <div className="flex items-center justify-between pt-4 border-t border-coffee-light/10 mt-auto">
                <span className="text-[10px] uppercase text-coffee-light font-semibold tracking-wider">Fast Service</span>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%20Cafe%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(item.name)}%20for%20%E2%82%B9${item.price}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gold font-bold hover:text-gold-light transition-colors group/order"
                >
                  Order on WhatsApp 
                  <ArrowRight className="w-3.5 h-3.5 group-hover/order:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR DIGITAL MENU SECTION */}
      <section id="qr-code" className="py-20 bg-gradient-to-b from-coffee-darkest to-coffee-dark/30 border-t border-b border-coffee-light/5 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Pitch Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-3">Modern Dine-In Pitch</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Scan. Explore. Order.</h2>
            <p className="text-cream-dark text-base md:text-lg mb-8 leading-relaxed">
              Customers can scan one stylish QR code at their table to instantly view the full premium menu, explore daily offers, find locations, and place direct orders via WhatsApp. No apps, no installations, fully browser-based!
            </p>

            {/* Key Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto lg:mx-0 mb-8">
              {[
                'Zero printed menus needed (saves lakhs in printing)',
                'Instantly update prices, items & daily specials',
                'Works instantly on every smartphone browser',
                'Perfect for table stands, counters & Instagram stories'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-xs md:text-sm">
                  <div className="p-1 rounded-full bg-gold/10 border border-gold/30 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-cream-dark/90 font-light">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setShowQRModal(true)} 
                className="btn-gold flex items-center justify-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                Scan QR Menu Demo
              </button>
              <a href="#business-pitch" className="btn-espresso flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold" />
                View Business ROI
              </a>
            </div>
          </div>

          {/* QR Code Graphic Right */}
          <div className="flex-1 flex justify-center w-full">
            <div className="relative glass-card border border-gold/30 p-8 rounded-3xl shadow-gold/5 max-w-sm w-full text-center group hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-4 right-4 bg-gold/15 text-gold border border-gold/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                Customer View
              </div>

              <div className="bg-cream-light p-6 rounded-2xl inline-block shadow-inner mb-6 relative group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-shadow duration-500">
                {/* Simulated Stylized QR Code using beautiful SVG paths */}
                <svg className="w-48 h-48 text-coffee-darkest" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer corner squares */}
                  <rect x="0" y="0" width="25" height="25" rx="3" />
                  <rect x="5" y="5" width="15" height="15" fill="white" />
                  <rect x="8" y="8" width="9" height="9" />
                  
                  <rect x="75" y="0" width="25" height="25" rx="3" />
                  <rect x="80" y="5" width="15" height="15" fill="white" />
                  <rect x="83" y="8" width="9" height="9" />

                  <rect x="0" y="75" width="25" height="25" rx="3" />
                  <rect x="5" y="80" width="15" height="15" fill="white" />
                  <rect x="8" y="83" width="9" height="9" />

                  {/* Randomized pixel layout representing a luxury coffee cup in QR grid */}
                  <rect x="35" y="0" width="5" height="5" />
                  <rect x="45" y="0" width="10" height="5" />
                  <rect x="60" y="0" width="5" height="10" />
                  <rect x="40" y="10" width="5" height="5" />
                  <rect x="50" y="10" width="10" height="5" />
                  <rect x="35" y="20" width="15" height="5" />
                  <rect x="55" y="20" width="5" height="10" />
                  
                  <rect x="0" y="35" width="5" height="15" />
                  <rect x="10" y="35" width="5" height="5" />
                  <rect x="20" y="35" width="10" height="5" />
                  <rect x="15" y="45" width="15" height="5" />
                  <rect x="0" y="55" width="10" height="5" />
                  <rect x="15" y="55" width="5" height="10" />
                  <rect x="25" y="50" width="5" height="10" />

                  {/* Coffee center icon simulation */}
                  <circle cx="50" cy="50" r="12" fill="white" />
                  <circle cx="50" cy="50" r="9" className="text-gold" />
                  
                  {/* Right side pixel cluster */}
                  <rect x="75" y="35" width="10" height="5" />
                  <rect x="90" y="35" width="10" height="5" />
                  <rect x="80" y="45" width="5" height="15" />
                  <rect x="95" y="45" width="5" height="10" />
                  <rect x="75" y="60" width="5" height="5" />
                  <rect x="85" y="60" width="15" height="5" />
                  
                  {/* Bottom center pixel cluster */}
                  <rect x="35" y="75" width="5" height="15" />
                  <rect x="45" y="75" width="15" height="5" />
                  <rect x="65" y="75" width="5" height="10" />
                  <rect x="40" y="85" width="15" height="5" />
                  <rect x="60" y="85" width="5" height="15" />
                  <rect x="35" y="95" width="10" height="5" />
                  <rect x="50" y="90" width="5" height="10" />
                </svg>

                {/* Micro branding in QR */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-coffee border-2 border-gold flex items-center justify-center">
                  <Coffee className="w-4.5 h-4.5 text-gold" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-cream-light mb-1">QR Menu Demo</h4>
              <p className="text-coffee-light text-xs font-bold uppercase tracking-wider mb-4">Table No. 04</p>
              
              <div className="w-full h-px bg-coffee-light/10 mb-4"></div>
              
              <div className="text-left text-xs text-cream-dark/80 bg-coffee-darkest/50 p-3.5 rounded-xl border border-coffee-light/10">
                <span className="font-semibold text-gold-light block mb-1">How it works:</span>
                Scan QR → Browse premium photo menu → Tap favorite drinks → Instantly populates WhatsApp order checkout.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section id="offers" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase block mb-3">Fresh Savings</span>
          <h2 className="text-3xl md:text-5xl font-bold">Exclusive Daily Specials</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-cream-dark text-sm md:text-base mt-4 max-w-lg mx-auto">
            Indulge in our beautifully priced combo offers and table reservations. Click to order or lock your slot!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Offer 1 */}
          <div className="glass-card border border-gold/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">Today's Special</h3>
              <p className="text-cream-dark text-xs mb-4">Indulge in a perfect hot Cappuccino paired with our classic walnut fudge brownie.</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gold">₹189</span>
                <span className="text-xs text-coffee-light line-through font-light">₹210</span>
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%2C%20I%20want%2520to%2520order%2520Today's%2520Special%2520Cappuccino%2B%2520Brownie%2520for%2520%E2%82%B9189.`} className="btn-gold text-center py-2 text-xs w-full block">Order Special</a>
          </div>

          {/* Offer 2 */}
          <div className="glass-card border border-coffee-light/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-coffee-light/10 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">Student Combo</h3>
              <p className="text-cream-dark text-xs mb-4">Refuel with our crispy Veg Burger and a refreshing, ice-cold blended Cold Coffee.</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gold">₹199</span>
                <span className="text-xs text-coffee-light line-through font-light">₹270</span>
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%2C%20I%20want%2520to%2520order%2520the%2520Student%2520Combo%2520for%2520%E2%82%B9199.`} className="btn-espresso text-center py-2 text-xs w-full block hover:border-gold/30">Order Combo</a>
          </div>

          {/* Offer 3 */}
          <div className="glass-card border border-coffee-light/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-coffee-light/10 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">Weekend Treat</h3>
              <p className="text-cream-dark text-xs mb-4">Order any 2 Specialty Coffees during weekends & get a 50% discount on any slice of Cake.</p>
              <div className="bg-coffee-darkest/50 py-1.5 px-3 rounded-lg border border-coffee-light/10 text-[10px] text-gold font-bold uppercase tracking-wider mb-4 inline-block">
                Sat & Sun Active
              </div>
            </div>
            <a href={waBaseUrl} target="_blank" rel="noopener noreferrer" className="btn-espresso text-center py-2 text-xs w-full block hover:border-gold/30">Claim Weekend Deal</a>
          </div>

          {/* Offer 4 */}
          <div className="glass-card border border-coffee-light/20 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-coffee-light/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">Birthday Booking</h3>
              <p className="text-cream-dark text-xs mb-4">Celebrate your special moments in our beautifully decorated premium private lounge.</p>
              <div className="bg-coffee-darkest/50 py-1.5 px-3 rounded-lg border border-coffee-light/10 text-[10px] text-cream-light font-bold mb-4 inline-block">
                Free Dessert included
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%20Cafe%2C%20I'd%20like%20to%20inquire%20about%20booking%20a%20table%20for%20my%20birthday.`} target="_blank" rel="noopener noreferrer" className="btn-espresso text-center py-2 text-xs w-full block hover:border-gold/30">Reserve Table</a>
          </div>

        </div>
      </section>

      {/* INTERACTIVE BUSINESS PITCH FOR CAFÉ OWNERS */}
      <section id="business-pitch" className="py-20 bg-gradient-to-b from-coffee-dark/20 via-coffee-darkest to-coffee-darkest border-t border-b border-coffee-light/5 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-3">For Café Owners</span>
            <h2 className="text-3xl md:text-5xl font-bold">Why Your Business Needs This</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-cream-dark text-sm md:text-base mt-4 max-w-lg mx-auto">
              Upgrade your physical business to a digital standard, delight customers, and drive online sales.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* ROI Interactive Calculator Card */}
            <div className="flex-1 w-full glass-card border border-gold/30 p-8 rounded-3xl shadow-gold/5 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-cream-light">Digital ROI Calculator</h3>
              </div>
              
              <p className="text-cream-dark text-xs mb-6 leading-relaxed">
                Physical menu prints tear, gets dirty, and cost high amounts to reprint every time prices or items change. See what going digital saves you:
              </p>

              {/* Slider Input */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-cream-light mb-2">
                  <span>Monthly Menu Printing Cost:</span>
                  <span className="text-gold">₹{monthlyMenuCost}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="100"
                  value={monthlyMenuCost} 
                  onChange={(e) => setMonthlyMenuCost(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-dark border border-coffee-light/10 rounded-lg h-2"
                />
                <div className="flex justify-between text-[10px] text-coffee-light mt-1 font-medium">
                  <span>₹500</span>
                  <span>₹5,000</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-coffee-light/10 text-center">
                <div className="bg-coffee-darkest/50 p-3 rounded-xl border border-coffee-light/5">
                  <span className="text-[10px] text-coffee-light uppercase block font-semibold">Yearly Print Waste</span>
                  <span className="text-lg font-bold text-red-500">₹{monthlyMenuCost * 12}</span>
                </div>
                <div className="bg-gold/10 p-3 rounded-xl border border-gold/20">
                  <span className="text-[10px] text-gold uppercase block font-bold">Estimated Savings</span>
                  <span className="text-lg font-bold text-green-500">₹{(monthlyMenuCost * 12) - 3999}*</span>
                </div>
              </div>

              <div className="text-[10px] text-coffee-light mt-4 italic text-center">
                *Calculated after setup and host hosting costs. Instant updates are 100% free forever.
              </div>
            </div>

            {/* B2B Persuasive Selling Points */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                { 
                  title: 'Instant WhatsApp Orders', 
                  desc: 'Skip third-party aggregator commissions. Direct customer checkout messages straight to your counter mobile phone.', 
                  icon: MessageSquare 
                },
                { 
                  title: 'Dramatically Cleaner Tables', 
                  desc: 'No greasy, stained menus. Elegant table tents with a premium brass frame and a simple QR code elevates table aesthetics.', 
                  icon: Coffee 
                },
                { 
                  title: '100% Autopilot Marketing', 
                  desc: 'Add your digital menu link to your Google Maps listing and Instagram bio. Convert active browsers into orders directly.', 
                  icon: Instagram 
                },
                { 
                  title: 'Boost Upsell & Combos', 
                  desc: 'Instantly promote high-margin items like combos, cheesecakes, and birthday party slot bookings directly to all visitors.', 
                  icon: Gift 
                }
              ].map((benefit, index) => (
                <div key={index} className="glass-card glass-card-hover p-6 rounded-2xl border border-coffee-light/10">
                  <div className="w-10 h-10 rounded-xl bg-coffee-light/10 border border-coffee-light/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-lg font-bold text-cream-light mb-2">{benefit.title}</h4>
                  <p className="text-cream-dark/80 text-xs leading-relaxed font-light">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Pitch Action Call */}
          <div className="mt-12 glass-card border border-gold/30 p-6 md:p-8 rounded-3xl text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Want a premium website like this for your cafe?</h3>
            <p className="text-cream-dark text-xs md:text-sm mb-6 max-w-xl mx-auto">
              We specialize in custom web solutions for local bistros, cafes, and fine dining. Drive direct orders, save printing fees, and establish a digital brand today.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Velvet%20Brew%20Cafe%2C%2520I%2520am%2520a%2520cafe%2520owner%2520interested%2520in%2520getting%2520a%2520premium%2520digital%2520QR%252520menu%2520website.`}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-gold inline-flex items-center gap-2"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase block mb-3">Visual Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold">Follow the Velvet Aroma</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-cream-dark text-sm md:text-base mt-4 max-w-lg mx-auto">
            Take a visual tour inside our cozy spaces, signature handcrafted lattes, and premium dessert treats.
          </p>
        </div>

        {/* Premium Grid Placeholder Layout with beautiful vector designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="glass-card glass-card-hover min-h-[280px] rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/35 to-coffee-darkest/95 flex flex-col items-center justify-center p-6 text-center z-10">
              <Coffee className="w-12 h-12 text-gold mb-3 animate-float" />
              <h4 className="text-lg font-bold text-cream-light">Handcrafted Premium Latte</h4>
              <p className="text-cream-dark/80 text-xs mt-2 leading-relaxed">Perfect espresso milk art, crafted with passion by expert house baristas.</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-coffee-dark/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-coffee-light/20 z-20">Brewing Art</div>
          </div>

          {/* Card 2 */}
          <div className="glass-card glass-card-hover min-h-[280px] rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-coffee/20 via-coffee-darkest/90 to-coffee-darkest flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="flex gap-2 mb-3">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/40 animate-ping"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-gold"></div>
              </div>
              <h4 className="text-lg font-bold text-cream-light">Ambient Study Corners</h4>
              <p className="text-cream-dark/80 text-xs mt-2 leading-relaxed">High-speed Wi-Fi, cozy reading lights, quiet corners, and rich charging points.</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-coffee-dark/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-coffee-light/20 z-20">Cozy Lighting</div>
          </div>

          {/* Card 3 */}
          <div className="glass-card glass-card-hover min-h-[280px] rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/35 to-coffee-darkest/95 flex flex-col items-center justify-center p-6 text-center z-10">
              <Utensils className="w-12 h-12 text-gold mb-3 animate-float-slow" />
              <h4 className="text-lg font-bold text-cream-light">Signature Bakeries</h4>
              <p className="text-cream-dark/80 text-xs mt-2 leading-relaxed">Freshly baked croissants, molten choco lava cups, and rich berry cheesecakes.</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-coffee-dark/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-coffee-light/20 z-20">Artisanal Bakery</div>
          </div>

          {/* Card 4 */}
          <div className="glass-card glass-card-hover min-h-[280px] rounded-3xl overflow-hidden relative group sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-coffee/20 via-coffee-darkest/90 to-coffee-darkest flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="flex gap-1.5 mb-3 text-gold">★★★★★</div>
              <h4 className="text-lg font-bold text-cream-light">Premium Bites & Burgers</h4>
              <p className="text-cream-dark/80 text-xs mt-2 leading-relaxed">Loaded paneer sandwiches, gourmet herb potatoes and garlic buttery toasts.</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-coffee-dark/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-coffee-light/20 z-20">Hot Kitchen</div>
          </div>

          {/* Card 5 */}
          <div className="glass-card glass-card-hover min-h-[280px] rounded-3xl overflow-hidden relative group sm:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/35 to-coffee-darkest/95 flex flex-col items-center justify-center p-6 text-center z-10">
              <Heart className="w-12 h-12 text-gold mb-3 animate-[pulse_2s_infinite]" />
              <h4 className="text-lg font-bold text-cream-light">Cozy Community Moments</h4>
              <p className="text-cream-dark/80 text-xs mt-2 leading-relaxed">Brimming with laughter, productive group discussions, acoustic open-mic weekends, and relaxing book dates.</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-coffee-dark/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded border border-coffee-light/20 z-20">Velvet Community</div>
          </div>

        </div>
      </section>

      {/* LOCATION, HOUR, AND TIMINGS SECTION */}
      <section id="location" className="py-20 bg-gradient-to-b from-coffee-darkest to-coffee-dark/20 border-t border-coffee-light/5 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Details Left */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-3">Visit Us Today</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Location & Timings</h2>

            <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0 mb-8">
              
              {/* Address */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 border border-gold/30">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cream-light uppercase tracking-wider mb-1">Our Address</h4>
                  <p className="text-cream-dark text-xs md:text-sm">Main Street, Gourmet Sector 4, Your City, India</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 border border-gold/30">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cream-light uppercase tracking-wider mb-1">Opening Hours</h4>
                  <p className="text-cream-dark text-xs md:text-sm">Monday – Sunday: 9:00 AM – 11:00 PM</p>
                  <span className="inline-block mt-1 text-[10px] text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Open Daily</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 border border-gold/30">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cream-light uppercase tracking-wider mb-1">Call Booking / Queries</h4>
                  <p className="text-cream-dark text-xs md:text-sm">+91 98765 43210</p>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://maps.google.com/?q=Velvet+Brew+Cafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Open Google Maps
              </a>
              <a href="tel:+919876543210" className="btn-espresso flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-gold" />
                Call Now
              </a>
              <a href={waBaseUrl} target="_blank" rel="noopener noreferrer" className="btn-espresso flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5 text-gold" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map Graphic / Mock Screen Right */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="glass-card border border-gold/20 p-4 rounded-3xl relative overflow-hidden shadow-gold/5 flex flex-col items-center">
              
              {/* Map Placeholder Graphic */}
              <div className="w-full h-64 md:h-72 rounded-2xl bg-coffee-darkest border border-coffee-light/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Simulated Street Grid */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-15">
                  <div className="w-full h-0.5 bg-gold"></div>
                  <div className="w-full h-0.5 bg-gold"></div>
                  <div className="w-full h-0.5 bg-gold"></div>
                </div>
                <div className="absolute inset-0 flex justify-around opacity-15">
                  <div className="w-0.5 h-full bg-gold"></div>
                  <div className="w-0.5 h-full bg-gold"></div>
                  <div className="w-0.5 h-full bg-gold"></div>
                </div>

                {/* Glowing Center Pin for Cafe */}
                <div className="relative flex flex-col items-center z-10 animate-float">
                  <div className="absolute -top-3 w-10 h-10 bg-gold/20 rounded-full animate-ping"></div>
                  <div className="w-12 h-12 rounded-full bg-coffee border-2 border-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    <Coffee className="w-6 h-6 text-gold" />
                  </div>
                  <div className="mt-2 bg-coffee-dark/95 border border-gold/30 text-cream-light font-bold text-[10px] px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                    Velvet Brew Cafe
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INSTAGRAM / SOCIAL SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center border-t border-coffee-light/5">
        <div className="inline-flex items-center justify-center p-2.5 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6 animate-[bounce_3s_infinite]">
          <Instagram className="w-6 h-6" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Follow the Aroma</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
        
        <p className="text-cream-dark text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
          Stay updated with daily specials, secret menu items, quiet afternoon study discounts, and cozy café moments. Join our online community today!
        </p>

        <a 
          href="https://instagram.com/velvetbrewcafe" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-gold inline-flex items-center gap-2"
        >
          <Instagram className="w-5 h-5" />
          Follow on Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer className="glass-card border-x-0 border-b-0 border-t border-coffee-light/10 w-full py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-gradient-to-br from-coffee to-coffee-dark rounded-lg border border-gold/40">
                <Coffee className="w-5 h-5 text-gold" />
              </div>
              <span className="text-lg font-bold tracking-wider text-cream-light">VELVET BREW CAFE</span>
            </div>
            <p className="text-cream-dark/70 text-xs leading-relaxed max-w-sm font-light">
              A premium, modern café experience crafted for comfort and conversations. Join us for specialty organic roasts and fresh artisanal bakery.
            </p>
            <div className="mt-4 text-[10px] text-coffee-light font-medium uppercase tracking-wider">
              Digital café website demo created for modern local businesses.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-cream-light uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-cream-dark">
              <a href="#" className="hover:text-gold transition-colors font-light">Home</a>
              <a href="#about" className="hover:text-gold transition-colors font-light">Our Story</a>
              <a href="#menu" className="hover:text-gold transition-colors font-light">Digital Menu</a>
              <a href="#offers" className="hover:text-gold transition-colors font-light">Special Combos</a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-cream-light uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2.5 text-xs text-cream-dark">
              <span className="font-light">Main Street, Sector 4, India</span>
              <span className="font-light">Phone: +91 98765 43210</span>
              <span className="font-light">Email: hello@velvetbrewcafe.com</span>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-coffee-light/10 mb-6"></div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-coffee-light">
          <span>&copy; {new Date().getFullYear()} Velvet Brew Cafe. All Rights Reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-red-700 fill-red-700" /> for modern cafes.
          </span>
        </div>
      </footer>

      {/* STICKY WHATSAPP FLOATING BUTTON */}
      <a 
        href={waBaseUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-[#25d366]/30 group"
        title="Order on WhatsApp"
        id="whatsapp-sticky"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Hover Label */}
        <span className="absolute right-14 bg-coffee-dark border border-gold/30 text-gold text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg">
          Order Instantly
        </span>
        
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
        </span>
      </a>

      {/* QR SCAN CODE MODAL DEMO */}
      {showQRModal && (
        <div className="fixed inset-0 bg-coffee-darkest/90 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="glass-card border border-gold/30 max-w-sm w-full p-8 rounded-3xl relative text-center">
            
            <button 
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 p-1.5 text-cream-dark hover:text-gold transition-colors bg-coffee-dark/80 rounded-full border border-coffee-light/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-cream-light p-5 rounded-2xl inline-block shadow-inner mb-6">
              {/* Simulated QR Code inside modal */}
              <svg className="w-44 h-44 text-coffee-darkest" viewBox="0 0 100 100" fill="currentColor">
                <rect x="0" y="0" width="25" height="25" rx="3" />
                <rect x="5" y="5" width="15" height="15" fill="white" />
                <rect x="8" y="8" width="9" height="9" />
                <rect x="75" y="0" width="25" height="25" rx="3" />
                <rect x="80" y="5" width="15" height="15" fill="white" />
                <rect x="83" y="8" width="9" height="9" />
                <rect x="0" y="75" width="25" height="25" rx="3" />
                <rect x="5" y="80" width="15" height="15" fill="white" />
                <rect x="8" y="83" width="9" height="9" />
                <rect x="35" y="0" width="5" height="5" />
                <rect x="45" y="0" width="10" height="5" />
                <rect x="60" y="0" width="5" height="10" />
                <rect x="40" y="10" width="5" height="5" />
                <rect x="50" y="10" width="10" height="5" />
                <rect x="35" y="20" width="15" height="5" />
                <circle cx="50" cy="50" r="12" fill="white" />
                <circle cx="50" cy="50" r="9" className="text-gold" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-cream-light mb-2">Simulated QR Code</h3>
            <p className="text-cream-dark text-xs mb-6 max-w-xs mx-auto leading-relaxed">
              Scan this mockup with your phone camera or click the copy button to test the digital experience on another device!
            </p>

            <button 
              onClick={copyDemoLink} 
              className="btn-gold w-full text-sm mb-4"
            >
              {copiedLink ? '✓ Link Copied!' : 'Copy Website Link to Share'}
            </button>

            <button 
              onClick={() => setShowQRModal(false)} 
              className="btn-espresso w-full text-xs hover:border-gold/30"
            >
              Close Simulator
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
