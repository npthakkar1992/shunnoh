// Shared blog-card definitions used by the homepage and the /blogs listing.
export interface BlogCardData {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  numeral: string;
  kicker: string;
  readTime: string;
  date: string;
  location: string;
  coords: string;
  nextSlug: string;
}

export const blogCards: BlogCardData[] = [
  {
    title: "Varanasi",
    subtitle: "Here, you either find Him, or you lose faith in Him",
    href: "/blogs/varanasi",
    imageSrc: "/images/blog/varanasi/hero.jpg",
    imageAlt: "The ghats of Varanasi",
    numeral: "I",
    kicker: "City Diary · Varanasi",
    readTime: "9 min",
    date: "June 2025",
    location: "Varanasi, Uttar Pradesh",
    coords: "25.3176° N, 82.9739° E",
    nextSlug: "banarasi-saree",
  },
  {
    title: "Banarasi Saree",
    subtitle: "A Journey from the Gods, through the Royals, to the Masses",
    href: "/blogs/banarasi-saree",
    imageSrc: "/images/blog/banarasi-saree/card.svg",
    imageAlt: "Banarasi saree weaving",
    numeral: "II",
    kicker: "Craft · Lallapura",
    readTime: "10 min",
    date: "June 2025",
    location: "Lallapura, Varanasi",
    coords: "25.3347° N, 82.9734° E",
    nextSlug: "sarnath",
  },
  {
    title: "Sarnath",
    subtitle: "Where the Wheel of Dharma was Turned",
    href: "/blogs/sarnath",
    imageSrc: "/images/blog/sarnath/card.png",
    imageAlt: "Sarnath, the cradle of Buddhism",
    numeral: "III",
    kicker: "Pilgrimage · 8 km from Banaras",
    readTime: "12 min",
    date: "July 2025",
    location: "Sarnath, Uttar Pradesh",
    coords: "25.3810° N, 83.0225° E",
    nextSlug: "varanasi-food",
  },
  {
    title: "Best Foods in Varanasi",
    subtitle: "Your Guide to Iconic Local Flavors",
    href: "/blogs/varanasi-food",
    imageSrc: "/images/blog/varanasi-food/card.png",
    imageAlt: "Iconic foods of Varanasi",
    numeral: "IV",
    kicker: "Food · Varanasi",
    readTime: "8 min",
    date: "July 2025",
    location: "Varanasi, Uttar Pradesh",
    coords: "25.3176° N, 82.9739° E",
    nextSlug: "goa",
  },
  {
    title: "Goa's Glowing Forest",
    subtitle: "The Monsoon Treat",
    href: "/blogs/goa",
    imageSrc: "/images/blog/goa/card.png",
    imageAlt: "Goa's bioluminescent monsoon forest",
    numeral: "V",
    kicker: "Wild · Mollem, Goa",
    readTime: "8 min",
    date: "September 2025",
    location: "Mollem, Goa",
    coords: "15.4037° N, 74.3200° E",
    nextSlug: "varanasi",
  },
];
