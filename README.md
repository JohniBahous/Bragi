
## __THE BRAGI INITIATIVE__

<img width="800" alt="Readme" src="https://github.com/user-attachments/assets/46a14b63-3868-4cf3-b5e0-7e0fca0e39b5" />

An interactive music curation and discovery experience.

Art and artists over algorithms.

# About

Bragi began to take shape as a curated music discovery experience. Not as a response to the way music is presented and consumed today, but simply as a space for artists
to be heard, explored, with the focus placed on the artists and their work.
Bragi's presention is bold and deliberate. The experience is guided and directed, while keeping the music and the people behind it at its center.

Listening, not consuming. Art, not noise.

# Experience

Transmission-

The brains of the operation. 
Artist and track information is brought into view while the full song plays through Bragi's central audio system.

<img width="640" alt="Transmission1" src="https://github.com/user-attachments/assets/72d389d6-083c-47a5-8947-9db32947c30f" />

<img  width="640" alt="Transmission2" src="https://github.com/user-attachments/assets/5255dd35-b1c2-4d67-8e56-2d78b20c5834" />


Strings-

Nine artists. Nine tracks. One shared space. 
Songs are showcased equally in space and mystery, invinting users to roam between the columns, hear snippets, and uncover the flyers containing the artist's story and track information.

<img width="640" alt="Strings1" src="https://github.com/user-attachments/assets/08ef1dd6-49fe-40f6-a423-a75c71e90fa0" />
<img width="640" alt="Strings2" src="https://github.com/user-attachments/assets/a2336318-8ba2-47a8-9b1b-09c3560dbd5e" />


Context-

The Bragi Initative. A slight peek behind the curtains. Why Bragi came to exist and what guides its design and curation.

<img width="640" alt="Villain1" src="https://github.com/user-attachments/assets/f1d53d99-40f6-4da5-a6ed-0693008d5d73" />

# Key Features

Public Experience

Snippet-based music discovery.
Section-based experience.
Distinct interactive presentation for each section.
Curated library of select songs.
Full-song playback and centralized audio control.
Fully realized roster of artists.

Administration

Admin panel for behind the scenes control.
Authentication and lightweight RBAC
Supports copying, updating, replacing and archival/soft deletion for each artist/song.
Song and snippet upload and management.
Archival functionality for out of rotation artists and songs.
Audit log for administrative actions.

# Architecture

<img width="402" height="957" alt="BRAGI" src="https://github.com/user-attachments/assets/ec7b7994-12bd-4db3-a8a3-11be2a8f2fe9" />

# Tech-stack

| Layer | Technologies |
| --- | --- | 
| **Build** | Webpack · Babel |
| **Frontend** | React · Wouter · TanStack Query · Zustand |
| **Audio** | Howler.js | 
| **Backend** | Node.js · Express |
| **Data** | PostgreSQL · Prisma |
| **Storage** | AWS SDK · AWS S3 | 
| **Security** | JWT · bcrypt · Helmet · express-rate-limit · express-slow-down|

# Frontend

Build & Application Structure-

TBI is built as a React SPA. Rather than using a preconfigured application scaffold, it uses a custom Webpack and Babel configuration built with performance and bundle size in mind.
The build pipeline handles JavaScript, CSS and application assets, while further optimizations such as code splitting and lazy loading are employed, particularly across the application's different views.
The application is divided into two views: the public curated music experience and a protected admin panel, with Wouter used as a light weight routing solution.

State & Data-

Artist and song data is fetched and cached through TanStack Query, while Zustand manages global application state, such as the currently selected artist, song and playback state. 
This allows for data sourced from the database to be separate from state shared between Bragi's individual sections and audio system.

Audio-

Howler.js powers a centralized audio system responsible for both snippet and full-song playback, switching cleanly between the two based on user interaction. 
Because playback is centralized, Bragi's individual sections interact with the same audio system rather than managing independent players.

Interface-

Bragi's public facing view is divided into three distinct sections (Transmission, Strings and Context) each with its own visual and interactive language while 
operating on the same underlying artist and song data.
The interface is built primarily from custom reusable React components, CSS and extensive use of SVG assets, without relying on a component library.
This allows each section to develop a distinct visual identity while retaining shared navigation, state and audio behavior.
# Backend

Runtime & API

Bragi's backend is a Node.js and Express REST API responsible for artist and song data, admin operations, authentication and access to externally stored media. 
Security middleware including Helmet, CORS configuration and rate limiting.
Helmet, CORS configuration, rate limiting and request slowdowns are used to restrict and protect API access, with stricter controls applied to sensitive or resource-heavy operations such as media uploads.
Data Layer

Bragi uses PostgreSQL to persist structured application data, including artists, songs, administrators and audit records. 
Prisma provides the data layer between the Express API and the database.
Artist and song records maintain active and archived states as Bragi's featured roster changes, allowing retired content to remain preserved without appearing in the public experience.

Admin panel

The admin panel manages Bragi’s rotating artist and song roster without requiring direct database changes. Existing content can be updated, artist/song pairs replaced, 
new media uploaded, and retired content archived rather than permanently deleted. An overview component allows administrators to keep track of the currently featured artists and songs 
while providing additional internal information.

Administrative routes are protected using JWT-based authentication with HTTP-only cookies and bcrypt password verification. 

Administrative actions are recorded in an audit log accessible to authorized administrators.

<img width="640" alt="Admin3" src="https://github.com/user-attachments/assets/891ffbd7-5645-474b-8d63-e1313e4cefc0" />
<img width="640" alt="Admin1" src="https://github.com/user-attachments/assets/7836e60a-45b9-44e7-9ace-69a6748b22a6" />
<img width="640" alt="Admin2" src="https://github.com/user-attachments/assets/8bf76d50-6ad3-47f0-930b-32e27948ab57" />



