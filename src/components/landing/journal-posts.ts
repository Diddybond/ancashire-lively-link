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
 * When at least one post exists, the grid appears automatically.
 */
export const journalPosts: JournalPost[] = [];
