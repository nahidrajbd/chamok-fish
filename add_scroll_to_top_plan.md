# Implementation Plan - Force Scroll To Top

I have implemented a "Scroll to Top" feature that forces the browser to scroll to the top of the page whenever the user navigates to a new route.

## User Request
- **Objective**: Force visitor to go on top of the page when landing on new page.

## Changes
### `src/components/layout/ScrollToTop.tsx`
- **New Component**: Created a `ScrollToTop` component.
  - Uses `useLocation` from `react-router-dom` to listen for path changes.
  - Uses `useEffect` to call `window.scrollTo(0, 0)` whenever `pathname` changes.
  - Returns `null` as it doesn't render anything visually.

### `src/App.tsx`
- **Integration**: Imported and placed `<ScrollToTop />` inside the `<BrowserRouter>` in `App.tsx`.
  - It needs to be inside `BrowserRouter` to use the `useLocation` hook.

## Verification
- Code created and integrated.
- This is a standard React Router pattern for handling scroll position restoration.

