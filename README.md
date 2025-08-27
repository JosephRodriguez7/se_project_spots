# 🖼️ Spots - Social Media Image Gallery

"Spots gallery" is a visually appealing social media platform specialized in showcasing the User's curated media gallery. Users are able to post new images to the platform, with captions, and have
the capability to receive likes for each post.

### 👨‍🎨 Developer's notes:

I started this project during the 3rd Sprint of my TripleTen SE Bootcamp. This project has evolved dramatically, starting from a static website with responsive design, developing into a functional
and dynamic website thanks to JavaScript implementation.

Many challenges were overcome, making sure APIs were functioning correctly, data was sent to the server and fetched. Verified that all objects rendered correctly after fetching data. New cards and likes can now be saved,
cards can be deleted, etc.

#### Skills used:

1. Semantic HTML5
2. CSS3: Responsive design with Flexbox and Grid
3. JavaScript
4. Git
5. Form Validation
6. Webpack
7. Asynchronous Programming
8. APIs

- Media queries.
- Multi-line text truncation with -webkit-line-clamp.
- Custom buttons, hover effects, and adaptive spacing.
- Consistent UI/UX design with clean visual hierarchy and button styling.
- Modals for interacting with user information, posting new cards or deleting cards, and expanding card images.

3. Version control with Git and GitHub Repository Management:

- Committing snapshots and demo video.
- Maintining Git History.
- Structured README.md

4. Project Organization:

- Consistent use of flat BEM file structure.
- Avoided nesting of selectors in CSS.
- Applied BEM naming convention.

### Link to my project:

https://josephrodriguez7.github.io/se_project_spots/

## 📸 Check my project's Demo:

[![Watch the demo](demo/demo-screenshots1.jpg)(demo/demo-screenshots2.jpg)(demo/demo-screenshots3.jpg)(demo/demo-screenshots4.jpg)](demo/demo-video.mp4)

## 🚀 Functions and Specifications:

1. Modals for modifying user info, adding new cards, deleting cards, changing user avatar.
2. Buttons have loading state when interfacing with the APIs
3. The Profile dashboard is composed of a Card containing the user's avatar, profile name, profile description, and a edit profile button (with corresponding icon) with animations when hovered. Next to the card, a "new post" button was added.
4. Additionally, all buttons in this website have hover (with transition) effects and respective icons.
5. The "cards" section of the site contains a responsive grid. Starts as a three column and two row grid with responsive design. It maintains the 1:1 aspect ratio for the images throughout.
6. As the screen size narrows, the grid reduces to two columns in Tablet mode, then reduces to a single column in Mobile mode. The "justify-items" declaration was used to ensure elements placed within a grid cell remained centered.
7. Changes such as likes, new cards added or deleted, user information and avatar updates are all saved when the website reloads.
