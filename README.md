# Greenfield College — AI Inquiry Chatbot Website

A modern, fully responsive college website with a floating AI chatbot assistant. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no backend, no API keys.

## What's Included

- **Navbar** with logo, college name, and mobile hamburger menu
- **Hero section** with admission banner, stats, and call-to-action buttons
- **About section** with accreditation highlights
- **Courses section** — cards for B.Tech, B.Sc, B.Com, B.A, MBA, MCA with fees and durations
- **Facilities section** — library, labs, hostel, sports, transport, and more
- **Placements section** — stats and recruiter badges
- **Inquiry form** — Name, Email, Phone, Course, Message with validation
- **FAQ section** — accordion with common questions
- **Floating AI chatbot** — bottom-right, with quick buttons, typing indicator, follow-up suggestions
- **Light/dark mode** via system preference
- **Responsive** — works on mobile and desktop

## File Structure

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | All styling — colours, fonts, responsive rules, animations |
| `script.js` | Chatbot logic, form validation, dynamic section rendering |

## How to Customise

### Change college name, phone, email

- Update the navbar brand text and footer in `index.html`
- Update contact links (phone, email, address) in `index.html`
- Update the chatbot's contact answer in `script.js` (search for `contact` topic)

### Change colours and fonts

Open `style.css` and edit the CSS variables under `:root`:

```css
:root {
  --blue: #16284a;       /* primary brand colour */
  --blue-bright: #1d6fe0; /* accent blue */
  --gold: #d9a21b;        /* gold accent */
  --font-heading: "Source Serif 4", serif;
  --font-body: "Public Sans", sans-serif;
}
```

### Edit courses, facilities, recruiters

All displayed in `script.js` — find the `courses`, `facilities`, and `recruiters` arrays near the top and edit values directly.

### Edit chatbot answers

In `script.js`, find the `topics` array. Each topic has:
- `id` — unique identifier
- `label` — display name (used on quick buttons and cards)
- `keywords` — words the chatbot matches against (longer = higher score)
- `answer` — reply text. Supports `**bold**` and `* ` for bullet points
- `followUps` — 2–3 suggested follow-up labels

### Edit FAQ

In `script.js`, find the `faqs` array and edit question/answer pairs.

### Replace the SVG logo with an image

In `index.html`, find the `<svg class="nav-logo" ...>` elements and replace with:

```html
<img src="your-logo.png" alt="Greenfield College" class="nav-logo" />
```

## Running

Open `index.html` directly in a browser, or use any static server:

```bash
npx serve .
python3 -m http.server 8000
```

## Note

All chatbot answers are sample information. The footer reminds visitors to confirm with the admission office.
