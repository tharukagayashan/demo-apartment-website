import { Users, Maximize, Bath, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accommodations = () => {
  const rooms = [
    {
      name: "Classic Studio",
      description:
        "Bright studio with hardwood floors, kitchenette, and dining area. Perfect for solo travelers or couples.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Users, label: "2 Guests" },
        { icon: Maximize, label: "25 m²" },
        { icon: Utensils, label: "Kitchenette" },
        { icon: Bath, label: "En-suite" },
      ],
      price: "From £120",
    },
    {
      name: "One Bedroom Apartment",
      description:
        "Spacious apartment with separate living area, full kitchen, and comfortable bedroom. Some feature charming balconies.",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ez633a2c?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Users, label: "3 Guests" },
        { icon: Maximize, label: "40 m²" },
        { icon: Utensils, label: "Full Kitchen" },
        { icon: Bath, label: "En-suite" },
      ],
      price: "From £180",
    },
    {
      name: "Two Bedroom Apartment",
      description:
        "Generously sized apartment ideal for families or groups. Features two bedrooms, living area, and street views.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Users, label: "5 Guests" },
        { icon: Maximize, label: "55 m²" },
        { icon: Utensils, label: "Full Kitchen" },
        { icon: Bath, label: "2 Bathrooms" },
      ],
      price: "From £250",
    },
  ];

  return (
    <section id="accommodations" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Accommodations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            Your Perfect <span className="text-accent italic">London Retreat</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our carefully designed studios and apartments, each offering 
            modern comfort within a beautifully historic setting.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-background rounded-sm overflow-hidden shadow-sm hover-lift group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feature.icon className="w-4 h-4 text-accent" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Nightly rate
                    </p>
                    <p className="font-serif text-lg text-foreground">{room.price}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
