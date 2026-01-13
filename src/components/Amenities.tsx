import {
  Wifi,
  Utensils,
  Tv,
  Shirt,
  Wind,
  Coffee,
  Snowflake,
  ShowerHead,
  Lock,
  Sparkles,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Wifi, name: "Free High-Speed Wi-Fi", description: "Stay connected throughout your stay" },
    { icon: Utensils, name: "Fully Equipped Kitchenette", description: "Prepare meals at your convenience" },
    { icon: Tv, name: "Flat-Screen TV", description: "Entertainment in every room" },
    { icon: Coffee, name: "Tea & Coffee Facilities", description: "Complimentary beverages provided" },
    { icon: Wind, name: "Hair Dryer", description: "Available in every bathroom" },
    { icon: Shirt, name: "Laundry Facilities", description: "On-site washing and drying" },
    { icon: Snowflake, name: "Climate Control", description: "Heating and cooling options" },
    { icon: ShowerHead, name: "Powerful Showers", description: "Modern bathroom amenities" },
    { icon: Lock, name: "Secure Access", description: "Digital entry system" },
    { icon: Sparkles, name: "Daily Housekeeping", description: "Fresh linens and tidy rooms" },
  ];

  return (
    <section id="amenities" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Amenities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4 mb-6">
            Everything You <span className="text-accent italic">Need</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our apartments are thoughtfully equipped with modern conveniences 
            to ensure a comfortable and memorable stay.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="text-center p-6 rounded-sm bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <amenity.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-medium text-sm mb-1">{amenity.name}</h4>
              <p className="text-xs text-primary-foreground/60">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-serif text-xl mb-2">Check-in</h4>
              <p className="text-primary-foreground/70">From 14:00</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Check-out</h4>
              <p className="text-primary-foreground/70">By 11:00</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Reception</h4>
              <p className="text-primary-foreground/70">24/7 Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
