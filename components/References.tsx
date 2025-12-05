import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Visiosoft",
    username: "Özcan Durak (CEO)",
    body: "Contact: +90 535 065 05 52",
    img: "https://avatar.vercel.sh/visiosoft",
  },
  {
    name: "TGC Bilişim",
    username: "Tunc Tuğcu (CEO)",
    body: "Former Chief Engineer of Presidency. Contact: +90 541 367 01 89",
    img: "https://avatar.vercel.sh/tgc",
  },
  {
    name: "Detsa & Sinarge",
    username: "Faruk Özyurt (ARGE Lead)",
    body: "Contact: +90 553 742 43 31",
    img: "https://avatar.vercel.sh/detsa",
  },
  {
    name: "Visiosoft",
    username: "Fatih Alp (CFO)",
    body: "Contact: +90 536 933 46 46",
    img: "https://avatar.vercel.sh/visiosoft-cfo",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image 
          className="rounded-full" 
          width={32} 
          height={32} 
          alt={name} 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function References() {
  return (
    <section className="py-20 w-full overflow-hidden">
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary/80">References</h2>
      </div>
      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}