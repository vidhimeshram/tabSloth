
#  TabSloth

### Less tab chaos. More peace of mind.

TabSloth is a lightweight Chrome extension designed to make browser tab management simpler. It organizes open tabs into categories and identifies duplicate URLs, helping you keep your browsing experience clean and organized.

##  Features

-  **Tab Overview** — View the total number of open browser tabs.
-  **Smart Categorization** — Automatically groups tabs into Coding, Entertainment, Social, Shopping, Education, and Other.
-  **Duplicate Detection** — Identifies tabs with duplicate URLs.
-  **Refresh Tabs** — Refresh the tab list to view the latest browser tabs.
-  **Clean UI** — A minimal, thoughtfully designed interface for distraction-free browsing.
-  **Local Processing** — Tab categorization and duplicate detection run locally in the extension.

##  Tech Stack

- **React** — User interface
- **Vite** — Development server and build tool
- **JavaScript** — Application logic
- **CSS** — Styling
- **Chrome Extensions Manifest V3** — Browser extension platform
- **pnpm** — Package management

##  Features at a Glance

| Feature | Description |
|---|---|
| Tab Overview | Displays the number of open tabs |
| Categories | Groups tabs by website and topic |
| Duplicate Detection | Highlights tabs with matching normalized URLs |
| Refresh | Reloads the current list of tabs |

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- Google Chrome
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/vidhimeshram/tabSloth.git
cd tabSloth
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Build the Extension

```bash
pnpm run build
```

This generates the `dist` folder containing the production-ready extension.

### 4. Load TabSloth into Chrome

1. Open `chrome://extensions` in Google Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `dist` folder inside the TabSloth project.
5. Pin TabSloth from Chrome's Extensions menu for easy access.

##  Project Structure

```text
tabSloth/
├── public/
│   └── manifest.json
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

*The generated `dist/` directory is excluded from Git and recreated by the build command.*

##  Roadmap

- [x] Display open browser tabs
- [x] Categorize tabs automatically
- [x] Detect duplicate URLs
- [x] Build a clean extension interface
- [x] Integrate local AI using Ollama
- [x] Add AI-powered tab grouping
- [ ] Suggest tabs that can be closed

##  Privacy

TabSloth currently categorizes tabs and detects duplicate URLs locally in the extension. It requests Chrome's `tabs` and `storage` permissions.

The extension does not currently require a cloud AI service. Future AI features may use a local model to help keep browsing data on the user's device.

##  Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

##  License

A license has not been selected yet. Add a `LICENSE` file before specifying a license for reuse or distribution.

---


**Built with curiosity and a little sloth energy. 🦥**
