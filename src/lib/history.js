const HISTORY_KEY = 'esmeralda-history';

function loadAll() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addHistoryEntry(email, card) {
  const all = loadAll();
  all.push({
    email,
    cardId: card.id,
    roman: card.roman,
    title: card.title,
    keywords: card.keywords,
    accent: card.accent,
    drawnAt: new Date().toISOString(),
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
}

export function getHistoryFor(email) {
  return loadAll().filter((entry) => entry.email === email);
}
