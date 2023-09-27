import galleryEntries from "./galleryEntries.json";

const ITEMS_PER_PAGE = 15;

export type GalleryEntry = {
  id: string;
  label: string;
  animal: string;
  category: string;
  color: string;
  canFly: boolean;
  imageUrl: string;
}

export const fetchEntriesV1 = async () => {
  await sleep(150);
  const entries = galleryEntries.slice(0, ITEMS_PER_PAGE);
  return { entries };
}

export const fetchEntriesV2 = async ({ page = 0 } : { page?: number }) => {
  await sleep(150);
  const offset = page * ITEMS_PER_PAGE;
  const entries = galleryEntries.slice(offset, offset + ITEMS_PER_PAGE);
  const count = galleryEntries.length;
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
  return { entries, count , pageCount };
}

const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => {
      setTimeout(() => resolve(), delay);
  });
}
