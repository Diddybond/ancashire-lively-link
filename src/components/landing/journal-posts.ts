import tearoom from "@/assets/journal/tearoom.jpg";
import flowers from "@/assets/journal/flowers.jpg";
import parkWalk from "@/assets/journal/park-walk.jpg";

export type JournalPost = {
  /** ISO date — used for sorting and the displayed date label. */
  date: string;
  /** A short location or category tag, e.g. "Clitheroe" or "Out & About". */
  tag: string;
  /** Short caption — keep to a sentence or two. */
  caption: string;
  /** Image src (imported asset) OR a vertical video src. */
  image?: string;
  /** Optional vertical video (mp4). Plays muted, looped, autoplay. */
  video?: string;
  /** Optional poster for the video. */
  poster?: string;
  /** Tile aspect ratio. Defaults to "portrait". */
  ratio?: "portrait" | "square" | "landscape";
};

/**
 * Sabrina's Journal — newest first.
 * To add a new post, drop the image into `src/assets/journal/`,
 * import it above, and prepend an object to this array.
 */
export const journalPosts: JournalPost[] = [
  {
    date: "2026-04-29",
    tag: "Ribble Valley",
    caption:
      "A gentle drive out to a favourite tearoom in Whalley — proper scones, a warm pot of tea, and a long chat about Margaret's garden.",
    image: tearoom,
    ratio: "portrait",
  },
  {
    date: "2026-04-13",
    tag: "At Home",
    caption:
      "Spring is here. We arranged a small posy from the garden for the kitchen window — sweet peas, daisies, and a few sprigs of sage.",
    image: flowers,
    ratio: "square",
  },
  {
    date: "2026-03-30",
    tag: "Out & About",
    caption:
      "A bright spring afternoon in the park. Slow loops around the bandstand, blossom underfoot, and a 99 from the kiosk.",
    image: parkWalk,
    ratio: "portrait",
  },
];
