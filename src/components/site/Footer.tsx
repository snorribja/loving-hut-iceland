import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">♥</span>
            Loving Hut <span className="text-primary">Iceland</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            100% vegan, Asian-inspired comfort food in central Reykjavík.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/70">Visit</h4>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              {restaurant.address.street}
              <br />
              {restaurant.address.postal}
              <br />
              {restaurant.address.country}
            </span>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/70">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{h.day}</span>
                <span className="font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/70">Contact</h4>
          <div className="mt-3 space-y-2 text-sm">
            <a href={restaurant.phoneHref} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> {restaurant.phone}
            </a>
            <a href={`mailto:${restaurant.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> {restaurant.email}
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a href={restaurant.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-background transition hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={restaurant.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-background transition hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Loving Hut Iceland. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/menu" className="hover:text-foreground">Menu</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
