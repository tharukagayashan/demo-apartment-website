import { MapPin, Train, TreePine, Plane, Building } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    { icon: Train, name: "Paddington Station", distance: "5 min walk", description: "Heathrow Express & Elizabeth Line" },
    { icon: TreePine, name: "Kensington Gardens", distance: "13 min walk", description: "Beautiful royal park" },
    { icon: TreePine, name: "Hyde Park", distance: "2 km", description: "London's iconic green space" },
    { icon: Building, name: "Kensington Palace", distance: "15 min walk", description: "Historic royal residence" },
    { icon: Plane, name: "Heathrow Airport", distance: "15 min", description: "Direct Heathrow Express" },
    { icon: MapPin, name: "Queensway", distance: "5 min walk", description: "Restaurants & shopping" },
  ];

  return (
    <section id="location" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Location
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            The Best of <span className="text-accent italic">Bayswater</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ideally positioned in one of London's most desirable neighborhoods, 
            with excellent transport links and attractions at your doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1258341.7718594023!2d-2.2733252!3d51.9759163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760555bc239915%3A0xcd0e91bef17474d3!2sHyde%20Park%20Apartments!5e0!3m2!1sen!2slk!4v1768323679531!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hyde Park Apartments Location"
            />
          </div>

          {/* Location Info */}
          <div>
            {/* Address Card */}
            <div className="bg-secondary rounded-sm p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    Hyde Park Apartments
                  </h3>
                  <p className="text-muted-foreground mb-1">8 Craven Hill</p>
                  <p className="text-muted-foreground mb-1">London W2 3DS</p>
                  <p className="text-muted-foreground">United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <h4 className="font-serif text-lg font-medium text-foreground mb-4">
              What's Nearby
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place) => (
                <div
                  key={place.name}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-sm hover:bg-secondary transition-colors"
                >
                  <place.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-foreground text-sm">{place.name}</h5>
                    <p className="text-xs text-accent font-medium">{place.distance}</p>
                    <p className="text-xs text-muted-foreground mt-1">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Neighborhood Rating */}
            <div className="mt-8 p-6 bg-accent/10 rounded-sm border border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-serif font-medium text-accent">4.7</span>
                <span className="text-sm font-medium text-foreground">Excellent for visitors</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Busy area with Kensington Gardens & Kensington Palace, plus global dining 
                options around Queensway road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
