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
    return Array.isArray(data.Answer) && data.Answer.length > 0 ? 'valid' : 'invalid';
  } catch {
    return 'unknown';
  }
}
