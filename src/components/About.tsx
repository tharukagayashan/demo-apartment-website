import { Clock, Wifi, Coffee, Building2 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Check-in",
      description: "Check-in from 14:00, Check-out by 11:00",
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout",
    },
    {
      icon: Coffee,
      title: "Fully Equipped",
      description: "Kitchenettes with tea & coffee facilities",
    },
    {
      icon: Building2,
      title: "Historic Building",
      description: "Beautiful Victorian stucco-fronted architecture",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              Welcome to
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6 leading-tight">
              Your Home in the
              <span className="text-accent italic"> Heart of London</span>
            </h2>
            <div className="w-20 h-0.5 bg-accent mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              On a charming residential street just 5 minutes' walk from Paddington Station, 
              Hyde Park Apartments offers relaxed apartment living in a beautifully restored 
              Victorian stucco-fronted building.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're perfectly positioned for exploring London—a 13-minute walk to Kensington 
              Gardens and just 2 km from the magnificent Hyde Park. The vibrant Bayswater 
              neighborhood offers global dining options along Queensway road.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-sm flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
                  alt="Apartment interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
                  alt="Kitchen area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                  alt="Comfortable bedroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Victorian architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
