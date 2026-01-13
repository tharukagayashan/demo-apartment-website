import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Emílio Abreu",
      location: "Brazil",
      rating: 5,
      text: "I had an amazing experience staying at Hyde Park Apartments with my wife for a month. The service was excellent, with the room being kept clean and tidy throughout our stay. The location was sensational!",
      date: "2 years ago",
    },
    {
      name: "Nancy Lambrianides",
      location: "Greece",
      rating: 5,
      text: "I have been staying at Hyde Park Apartments twice a year when I travel to London with my family. Fantastic service, rooms always clean and tidy and the facilities are perfect. I cannot recommend them enough!",
      date: "2 years ago",
    },
    {
      name: "Simon Baldwin",
      location: "United Kingdom",
      rating: 4,
      text: "Second time of staying and room yet again spotless, shower fantastic, service cannot be better and location for the price you have to pay I don't think can be beaten in the whole of London!",
      date: "A year ago",
    },
    {
      name: "Ian Paul",
      location: "United Kingdom",
      rating: 4,
      text: "Brilliantly appointed rooms. Comfortable bed with sofa bed too. Lots of linen and pillows. Small kitchen with enough utensils and crockery to make all your meals if needed.",
      date: "A year ago",
    },
    {
      name: "Nora Salem",
      location: "Egypt",
      rating: 5,
      text: "Perfect stay in the heart of Paddington. 10 minutes walk to Paddington station and Lancaster Gate station. Lots of restaurants nearby. Highly recommend!",
      date: "A year ago",
    },
    {
      name: "Helen Watson",
      location: "United Kingdom",
      rating: 5,
      text: "Greeted by lovely lady and made very welcome. Clean apartment with comfy beds. Good kitchen area with kettle fridge and microwave. I would definitely recommend these apartments.",
      date: "7 years ago",
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Guest Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            What Our Guests <span className="text-accent italic">Say</span>
          </h2>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-background rounded-sm px-6 py-4 shadow-sm">
            <div className="text-center">
              <p className="font-serif text-4xl font-medium text-foreground">3.8</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <Star className="w-4 h-4 text-accent/30" />
              </div>
            </div>
            <div className="text-left border-l border-border pl-4">
              <p className="font-medium text-foreground">340+ Reviews</p>
              <p className="text-sm text-muted-foreground">on Google</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-sm p-6 shadow-sm hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? "fill-accent text-accent"
                            : "text-accent/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tripadvisor Mention */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Also reviewed on{" "}
            <span className="font-medium text-foreground">Tripadvisor</span>,{" "}
            <span className="font-medium text-foreground">Booking.com</span>, and{" "}
            <span className="font-medium text-foreground">Expedia</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
