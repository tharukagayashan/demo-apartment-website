import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hyde Park Apartments exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <Star className="w-4 h-4 text-accent/50" />
            </div>
            <span className="text-primary-foreground text-sm font-medium">
              4-Star Apartment Hotel
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Hyde Park
            <span className="block italic font-light text-accent">Apartments</span>
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/90 mb-8 animate-fade-in-delay">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">8 Craven Hill, Bayswater, London W2 3DS</span>
          </div>

          {/* Description */}
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up-delay leading-relaxed">
            Experience London in style. Elegant apartment living steps from Hyde Park, 
            Kensington Gardens, and Paddington Station.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide px-8 py-6 text-base"
            >
              Check Availability
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-medium tracking-wide px-8 py-6 text-base"
            >
              Explore Rooms
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-delay">
            <div className="text-center">
              <p className="text-accent font-serif text-2xl md:text-3xl font-medium">5</p>
              <p className="text-primary-foreground/70 text-sm mt-1">min to station</p>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <p className="text-accent font-serif text-2xl md:text-3xl font-medium">13</p>
              <p className="text-primary-foreground/70 text-sm mt-1">min to gardens</p>
            </div>
            <div className="text-center">
              <p className="text-accent font-serif text-2xl md:text-3xl font-medium">340+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">guest reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
