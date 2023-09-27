export type GalleryEntry = {
    id: string;
    label: string;
    animal: string;
    category: string;
    color: string;
    canFly: boolean;
    imageUrl: string;
}

const ALL_ENTRIES = [
    {
        "id": "97165c1f-46c7-4191-9c7e-adfc4b589eaa",
        "label": "Good Dog",
        "animal": "dog",
        "category": "canine",
        "color": "brown",
        "canFly": false,
        "imageUrl": "/images/brown-dog.jpg"
    },
    {
        "id": "debf2dc7-62f7-4f23-a505-3a9ebd27ca5c",
        "label": "Sneaking Bear",
        "animal": "bear",
        "category": "ursidae",
        "color": "black",
        "canFly": false,
        "imageUrl": "/images/black-bear.jpg"
    },
    {
        "id": "9dd51735-72a5-4e97-84cb-818fc877b7aa",
        "label": "Shy Bear",
        "animal": "bear",
        "category": "ursidae",
        "color": "brown",
        "canFly": false,
        "imageUrl": "/images/brown-bear.jpg"
    },
    {
        "id": "f5778eb0-b675-4133-a46c-c41bc81ce2ca",
        "label": "Glorious Duck",
        "animal": "duck",
        "category": "bird",
        "color": "brown",
        "canFly": true,
        "imageUrl": "/images/brown-duck.jpg"
    },
    {
        "id": "c408f2b9-4dda-43f7-935a-8cb3ea09e51e",
        "label": "Focused Wolf",
        "animal": "wolf",
        "category": "canine",
        "color": "brown",
        "canFly": false,
        "imageUrl": "/images/brown-wolf.jpg"
    },
    {
        "id": "21aa7bab-50a0-42d6-aeec-2d74bdef6977",
        "label": "Derpy Dog",
        "animal": "dog",
        "category": "canine",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/derpy-dog.jpg"
    },
    {
        "id": "6edc5217-496d-455a-94e0-60a480218e43",
        "label": "Exasperated Curlew",
        "animal": "curlew",
        "category": "bird",
        "color": "brown",
        "canFly": true,
        "imageUrl": "/images/exasperated-curlew.jpg"
    },
    {
        "id": "e820eb5b-b96b-47a8-b84e-96ba8d4e502b",
        "label": "Excited Curlew",
        "animal": "curlew",
        "category": "bird",
        "color": "brown",
        "canFly": true,
        "imageUrl": "/images/excited-curlew.jpg"
    },
    {
        "id": "fb9f8726-de72-48cc-93a5-350e36e984e1",
        "label": "Apologetic Bear",
        "animal": "bear",
        "category": "ursidae",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/polar-bear.jpg"
    },
    {
        "id": "57fd69b7-3f35-4c83-9911-bd4d87856faf",
        "label": "Sad Curlew",
        "animal": "curlew",
        "category": "bird",
        "color": "brown",
        "canFly": true,
        "imageUrl": "/images/sad-curlew.jpg"
    },
    {
        "id": "e7c9be24-578a-465e-a5c8-83d50981d369",
        "label": "Shocked Emu",
        "animal": "emu",
        "category": "bird",
        "color": "brown",
        "canFly": false,
        "imageUrl": "/images/shocked-emu.jpg"
    },
    {
        "id": "78398284-4c3b-45ce-85fe-7a5e4d91d77a",
        "label": "Active Dove",
        "animal": "dove",
        "category": "bird",
        "color": "white",
        "canFly": true,
        "imageUrl": "/images/white-dove.jpg"
    },
    {
        "id": "a2e5313a-1a68-4ccc-839d-d62bbfb3518b",
        "label": "Curious Duck",
        "animal": "duck",
        "category": "bird",
        "color": "white",
        "canFly": true,
        "imageUrl": "/images/white-duck.jpg"
    },
    {
        "id": "61b0d0ae-efca-4c78-8bf5-e7bafc80ca2d",
        "label": "Introspective Wolf",
        "animal": "wolf",
        "category": "canine",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/white-wolf.jpg"
    },
    {
        "id": "a6df5bc8-afa3-448a-9bb6-0e134ab01715",
        "label": "Cute Duck",
        "animal": "duck",
        "category": "bird",
        "color": "yellow",
        "canFly": true,
        "imageUrl": "/images/yellow-duck.jpg"
    },
    // End of first page
    {
        "id": "a20b6f14-6484-4862-afa2-14d241588b7a",
        "label": "Sleepy Fox",
        "animal": "fox",
        "category": "canine",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/sleepy-fox.jpg"
    },
    {
        "id": "18e4264b-a94c-4201-8686-e125b01fadb6",
        "label": "Stunned Lorikeet",
        "animal": "lorikeet",
        "category": "bird",
        "color": "rainbow",
        "canFly": true,
        "imageUrl": "/images/stunned-lorikeet.jpg"
    },
    {
        "id": "baa306ea-7379-4663-952b-7d5d4cdddf7e",
        "label": "Aggressive Swan",
        "animal": "swan",
        "category": "bird",
        "color": "white",
        "canFly": true,
        "imageUrl": "/images/aggressive-lorikeet.jpg"
    },
    {
        "id": "f390f533-802a-4797-8557-8070e76eb2b9",
        "label": "Curious Cat",
        "animal": "cat",
        "category": "feline",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/curious-cat.jpg"
    },
    {
        "id": "943460d2-5462-4792-87e1-b69a31c5718d",
        "label": "Hungry Cat",
        "animal": "cat",
        "category": "feline",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/hungry-cat.jpg"
    },
    {
        "id": "3853b563-d28c-4d0f-98a5-d5208cfdfb50",
        "label": "Stretching Cat",
        "animal": "cat",
        "category": "feline",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/stretching-cat.jpg"
    },
    {
        "id": "1145f081-1876-45d6-9401-34dfc4be5b7b",
        "label": "Chilling Dove",
        "animal": "dove",
        "category": "bird",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/chilling-dove.jpg"
    },
    {
        "id": "a04961a9-7c79-44d6-8488-2d54979e736c",
        "label": "Surprised Tiger",
        "animal": "tiger",
        "category": "feline",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/surprised-tiger.jpg"
    },
    {
        "id": "1a64c768-e17a-47f7-b8f6-10065ee278c4",
        "label": "Powerful Tiger",
        "animal": "tiger",
        "category": "feline",
        "color": "white",
        "canFly": false,
        "imageUrl": "/images/powerful-tiger.jpg"
    },
    {
        "id": "0965f633-e687-40c6-b4dd-5ffea1b5c548",
        "label": "Stalking Lion",
        "animal": "lion",
        "category": "feline",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/stalking-lion.jpg"
    },
    {
        "id": "460d6da1-45b0-42ba-9cb8-814aa8050c51",
        "label": "Late Tang",
        "animal": "yellow tang",
        "category": "fish",
        "color": "yellow",
        "canFly": false,
        "imageUrl": "/images/late-tang.jpg"
    },
    {
        "id": "960cdf6a-2747-48e4-aa74-5b333eb6e803",
        "label": "Resting Bee",
        "animal": "bee",
        "category": "insect",
        "color": "yellow",
        "canFly": true,
        "imageUrl": "/images/resting-bee.jpg"
    },
    {
        "id": "d7747fbc-d32b-4426-be79-7de311a31d14",
        "label": "Disgusted Clownfish",
        "animal": "clownfish",
        "category": "fish",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/disgusted-clownfish.jpg"
    },
    {
        "id": "9657ec1b-6a67-439f-bffc-38a9eb6077e5",
        "label": "Awestruck Firebug",
        "animal": "firebug",
        "category": "insect",
        "color": "orange",
        "canFly": false,
        "imageUrl": "/images/awestruck-firebug.jpg"
    },
    {
        "id": "d265d1fc-52e9-40b4-bb7f-658f07470bcc",
        "label": "Disappointed Swan",
        "animal": "swan",
        "category": "bird",
        "color": "black",
        "canFly": false,
        "imageUrl": "/images/disappointed-swan.jpg"
    },
    {
        "id": "d87feb26-95c3-4995-a1a7-70602bbd4d85",
        "label": "Unphased Capybara",
        "animal": "capybara",
        "category": "rodent",
        "color": "brown",
        "canFly": false,
        "imageUrl": "/images/unphased-capybara.jpg"
    },
];

const ITEMS_PER_PAGE = 15;

const sleep = (delay: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), delay);
    });
}

export const fetchEntriesV1 = async () => {
    await sleep(150);
    const entries = ALL_ENTRIES.slice(0, ITEMS_PER_PAGE);
    return { entries };
}

export const fetchEntriesV2 = async ({ page = 0 } : { page?: number }) => {
    await sleep(150);
    const offset = page * ITEMS_PER_PAGE;
    const entries = ALL_ENTRIES.slice(offset, offset + ITEMS_PER_PAGE);
    const count = ALL_ENTRIES.length;
    const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
    return { entries, count , pageCount };
}
