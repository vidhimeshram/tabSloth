
import { useEffect, useState } from "react";
import "./App.css";

function categorizeTab(tab) {
  const text = `${tab.title || ""} ${tab.url || ""}`.toLowerCase();

  if (/github|stackoverflow|react.dev|npmjs|developer.mozilla|codepen/.test(text)) {
    return "Coding";
  }

  if (/youtube|netflix|spotify|twitch/.test(text)) {
    return "Entertainment";
  }

  if (/instagram|facebook|reddit|discord|linkedin|x\.com|twitter/.test(text)) {
    return "Social";
  }

  if (/amazon|flipkart|ebay|shopping|etsy/.test(text)) {
    return "Shopping";
  }

  if (/wikipedia|coursera|udemy|khanacademy|education/.test(text)) {
    return "Education";
  }

  return "Other";
}

function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    if (parsed.pathname.length > 1) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "");
    }
    return parsed.href;
  } catch {
    return url || "";
  }
}

function App() {
  const [tabs, setTabs] = useState([]);
  const [error, setError] = useState("");

  async function loadTabs() {
    setError("");

    try {
      if (!globalThis.chrome?.tabs) {
        setError("Open TabSloth from the Chrome extension menu.");
        return;
      }

      const result = await chrome.tabs.query({});
      setTabs(result);
    } catch {
      setError("Could not read browser tabs. Try reloading TabSloth.");
    }
  }

  useEffect(() => {
    loadTabs();
  }, []);

  const analyzedTabs = tabs.map((tab) => ({
    ...tab,
    category: categorizeTab(tab),
    normalizedUrl: normalizeUrl(tab.url),
  }));

  const urlCounts = {};

  analyzedTabs.forEach((tab) => {
    if (tab.normalizedUrl) {
      urlCounts[tab.normalizedUrl] =
        (urlCounts[tab.normalizedUrl] || 0) + 1;
    }
  });

  const duplicateCount = analyzedTabs.filter(
    (tab) => tab.normalizedUrl && urlCounts[tab.normalizedUrl] > 1
  ).length;

  const categories = [...new Set(analyzedTabs.map((tab) => tab.category))];

  return (
    <main className="app">
      <header>
        <p className="eyebrow">YOUR PERSONAL TAB ASSISTANT</p>
        <h1>TabSloth 🦥</h1>
        <p className="subtitle">Less tab chaos. More peace of mind.</p>
      </header>

      <section className="summary">
        <div>
          <span>Open tabs</span>
          <strong>{tabs.length}</strong>
        </div>
        <div>
          <span>Duplicate tabs</span>
          <strong>{duplicateCount}</strong>
        </div>
      </section>

      <button className="refresh-button" onClick={loadTabs}>
        ↻ Refresh tabs
      </button>

      {error && <p className="error">{error}</p>}

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2>
            {category}{" "}
            <span>
              ({analyzedTabs.filter((tab) => tab.category === category).length})
            </span>
          </h2>

          {analyzedTabs
            .filter((tab) => tab.category === category)
            .map((tab) => (
              <article className="tab-item" key={tab.id}>
                <div className="tab-title">
                  {tab.title || "Untitled tab"}
                </div>
                <div className="tab-url">
                  {tab.url || "URL unavailable"}
                </div>
                {urlCounts[tab.normalizedUrl] > 1 && (
                  <span className="duplicate-label">Duplicate URL</span>
                )}
              </article>
            ))}
        </section>
      ))}
    </main>
  );
}

export default App;
