// Prüft per öffentlichem DNS-over-HTTPS (Google, kein API-Key nötig), ob eine
// E-Mail-Domain überhaupt Mailserver (MX-Records) hat — also ob der Anbieter
// real ist. Das bestätigt nicht die konkrete Adresse (dafür bräuchte es echten
// Mailversand), nur dass die Domain grundsätzlich Mails empfangen kann.
export async function domainAcceptsMail(domain) {
  try {
    const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`);
    if (!res.ok) return 'unknown';
    const data = await res.json();
    if (data.Status !== 0) return 'invalid';
    const records = Array.isArray(data.Answer) ? data.Answer : [];
    if (records.length === 0) return 'invalid';
    // RFC 7505: eine einzelne MX-Antwort auf "." ist ein expliziter Null-MX-Record
    // ("diese Domain nimmt bewusst keine Mails an") und zählt daher als ungültig.
    const isNullMx = records.length === 1 && /(^|\s)\.\s*$/.test(records[0].data ?? '');
    return isNullMx ? 'invalid' : 'valid';
  } catch {
    return 'unknown';
  }
}
