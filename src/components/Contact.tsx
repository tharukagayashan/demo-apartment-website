import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+44 20 7727 8916",
      href: "tel:+442077278916",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@hydeparkapts.com",
      href: "mailto:info@hydeparkapts.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "8 Craven Hill, London W2 3DS",
      href: "#location",
    },
    {
      icon: Clock,
      label: "Reception Hours",
      value: "24/7 Support Available",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
              We'd Love to <span className="text-accent italic">Hear from You</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have questions about your upcoming stay or need assistance with your 
              booking? Our friendly team is here to help.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  className={`flex items-start gap-4 p-5 bg-secondary rounded-sm ${
                    item.href ? "hover:bg-secondary/80 cursor-pointer" : ""
                  } transition-colors`}
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Booking Partners */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Book directly or through our partners:</p>
              <div className="flex flex-wrap gap-4">
                {["Booking.com", "Expedia", "Hotels.com", "Agoda"].map((partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 bg-secondary rounded-sm text-sm text-muted-foreground"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary rounded-sm p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
              Send us a Message
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Smith"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+44 123 456 7890"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your inquiry..."
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
