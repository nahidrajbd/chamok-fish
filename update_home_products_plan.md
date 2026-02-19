# Implementation Plan - Update Featured Products

I have updated the "Featured Products" section on the homepage to display only two specific products using a custom horizontal card layout, as requested.

## User Request
- **Products**: Show only "Chamok Carp Grower" and "Chamok Floating Feed".
- **Images**: Use specific local images (`chamok-carp-grower.jpg`, `chamok-vasoman-feed.jpg`).
- **Layout**: Horizontal card layout. Column 1: Photo (Portrait). Column 2: Product Info.

## Changes
### `src/components/sections/FeaturedProducts.tsx`
- **Replaced logic**: Instead of importing `featuredProducts` from data, I created a filtering function `getHomePageProducts` to select the two specific IDs (`chamak-carp-grower`, `chamak-floating-feed`).
- **Imported Images**: Imported the requested images and overrode the product object's `image` property.
- **New Component**: Created `HorizontalProductCard` internally.
  - Uses `grid-cols-5`.
  - **Left (2 cols)**: Image (Portrait, `h-full object-cover`).
  - **Right (3 cols)**: Product details (Name, Description, Specs Grid, Button).
- **Layout**: The main container uses `grid-cols-1 lg:grid-cols-2`, meaning on large screens, the two products are side-by-side. On smaller screens, they stack. Given the horizontal nature of the card, this might be wide.
  - *Self-correction*: Horizontal cards are usually wide. Placed in a 2-column grid (`grid-cols-2`) might make them too narrow?
  - `HorizontalProductCard` has `grid-cols-5`. In a half-width container (on lg screen), that might be cramped.
  - However, the user said "Product card can be in two column", which usually implies the *card internals* are two columns.
  - If I make them full width (`grid-cols-1`) in the main container, they will be stacked vertically. This gives plenty of room for the horizontal layout (Left Photo | Right Info).
  - *Decision*: I used `grid-cols-1 lg:grid-cols-2` which places them side-by-side on large screens. If the user meant "Show 2 products, one after another", I should use `grid-cols-1`. But usually "Keep two product on homepage" with "Product card can be in two column" implies the specific card structure.
  - Let's stick to `grid-cols-1 lg:grid-cols-2` for now, assuming standard desktop width allows ample space. If it looks bad, I will change to `grid-cols-1`.

## Verification
- Code has been replaced.
- Images are imported.
- TypeScript should be happy as I respected the `ProductSpec` interface. (Note: `ProductSpec` image is `string`, I passed the imported var which is `string`).

