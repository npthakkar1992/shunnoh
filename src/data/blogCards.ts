// Shared blog-card definitions used by the homepage and the /blogs listing.
export interface BlogCardData {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export const blogCards: BlogCardData[] = [
  {
    title: "Varanasi",
    subtitle: "Here, you either find Him, or you lose faith in Him",
    href: "/blogs/varanasi",
    imageSrc: "/images/blog/varanasi/hero.jpg",
    imageAlt: "The ghats of Varanasi",
  },
  {
    title: "Banarasi Saree",
    subtitle: "A Journey from the Gods, through the Royals, to the Masses",
    href: "/blogs/banarasi-saree",
    imageSrc: "/images/blog/banarasi-saree/card.svg",
    imageAlt: "Banarasi saree weaving",
  },
  {
    title: "Best Foods in Varanasi",
    subtitle: "Your Guide to Iconic Local Flavors",
    href: "/blogs/varanasi-food",
    imageSrc: "/images/blog/varanasi-food/card.png",
    imageAlt: "Iconic foods of Varanasi",
  },
  {
    title: "Sarnath",
    subtitle: "Where the Wheel of Dharma was Turned",
    href: "/blogs/sarnath",
    imageSrc: "/images/blog/sarnath/card.png",
    imageAlt: "Sarnath, the cradle of Buddhism",
  },
  {
    title: "Goa's Glowing Forest",
    subtitle: "The Monsoon Treat",
    href: "/blogs/goa",
    imageSrc: "/images/blog/goa/card.png",
    imageAlt: "Goa's bioluminescent monsoon forest",
  },
];
