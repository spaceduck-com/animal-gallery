# Animal Gallery

## Designs

Available on [figma](https://www.figma.com/file/4fEU4EHfVNcxP6q3m2gbuY/Whiteboard?type=design&node-id=9-3&mode=design&t=z7m3QXkSBT1bKBWj-0).

## Priorities

Highest priority first:

- Basic listing of entries, grouped by the `animal` key
- Being able to change the grouping key (`animal`, `category`, `color`, `canFly`)
- Being able to use the links at the top to jump to a specific group
- Styling tweaks to approach the design
   - Page elements are in the right locations,
   - Images are the shown as the same size,
   - Images are not stretched
- Adding the "back to top" button to scroll to the top of the page
- Further styling tweaks, working towards the given design.


## Notes

- You are free to use any additional dependencies, E.g.,
   - `npm install ...`.

- You are free to refactor, restructure or otherwise change the given code as you see fit
   - Except for content in the `api/`, directory which should not be modified.

- You are free to lookup / research anything as required, E.g,
   - Using google,
   - Using documentation,
   - Using chatgpt.

- Some restrictions:
   - You cannot modify any files in the `api/` directory
   - You must fetch data using the `fetchEntriesV1` function exported from `api/listing.ts`.
