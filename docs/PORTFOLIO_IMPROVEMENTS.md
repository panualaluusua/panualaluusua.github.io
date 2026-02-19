# Portfolio Parannuslista - Priorisoitu

Viimeksi päivitetty: 2026-02-19

## ✅ TEHTY

- [x] SEO-metatagit lisätty (title, description, keywords, Open Graph, Twitter Cards)
- [x] AI Data Engineer -pivotointi (hero, skills, SEO)
- [x] Databricks Certified GenAI Engineer Associate -sertifikaatti lisätty
- [x] Data Engineer -sertifikaatti merkitty vanhentuneeksi
- [x] Skills-osio päivitetty: GenAI, RAG, Vector Search, MLflow prioriteettina
- [x] Oikeat Databricks badge-kuvat käytössä
- [x] Hero-teksti: rehellinen "transitioning into AI Data Engineer"

---

## 🎯 PRIORITEETTI 1: KRIITTISET (Tehdään seuraavaksi)

### 1.1 Hero-kuva / Kasvokuva
**Tavoite:** Lisää ammattimainen headshot hero-osioon
**Miksi:** +40% muistijälki rekrytoijilla, tekee sivusta henkilökohtaisemman
**Toteutus:**
```html
<!-- Lisää hero-osioon -->
<div class="hero-image">
  <img src="assets/images/panu-profile.jpg" alt="Panu Alaluusua">
</div>
```
**Huom:** Käytä ammattikuvaajan ottamaa tai laadukasta kuvaa

---

### 1.2 Contact Form: Formspree-integraatio
**Tavoite:** Korvaa nykyinen lomake toimivalla ratkaisulla
**Miksi:** Nykyinen ei välttämättä toimi luotettavasti
**Toteutus:**
1. Rekisteröidy: https://formspree.io/
2. Päivitä form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
**Status:** Pakollinen ennen kuin sivusto voidaan jakaa aktiivisesti

---

### 1.3 GenAI-projekti + Arkkitehtuurikaavio
**Tavoite:** Lisää yksi GenAI-projekti projekti-osioon
**Miksi:** Todistaa GenAI-osaamista käytännössä, ei vain sertifikaattia
**Toteutus:**
- Lisää projekti GenAI/RAG-teemalla
- **TÄRKEÄ:** Piirrä arkkitehtuurikaavio (Excalidraw, draw.io, tai Mermaid)
- Lisää kaavio projektikortille tai erilliselle case study -sivulle
- Käytä oikeita numeroita/faktoja (ei keksittyjä!)

**Esimerkkikaavion sisältö:**
- Data sources → Vector DB → LLM → RAG pipeline
- Databricks components: Vector Search, Model Serving, MLflow
- Unity Catalog data governance

---

## 🚀 PRIORITEETTI 2: KORKEA VAIKUTUS (Seuraava sprintti)

### 2.1 "Proof of Work" / "By the Numbers" -osio
**Tavoite:** Näytä mitattavia tuloksia hero-osion alapuolella
**Miksi:** Datainsinöörit arvostetaan mittareista
**Toteutus:**
```html
<section id="proof-of-work">
  <h2>By the Numbers</h2>
  <div class="metrics-grid">
    <div class="metric-card">
      <h3>[Numero]</h3>
      <p>Data Pipelines Built</p>
    </div>
    <!-- Lisää oikeita numeroita projektseistasi -->
  </div>
</section>
```
**Huom:** Käytä VAIN oikeita numeroita - kysy asiakkaalta/projektilta jos tarpeen

---

### 2.2 Projekteihin Mitattavat Tulokset
**Tavoite:** Lisää numeroita ja mittareita projekteille
**Miksi:** "Built a platform" vs "Built a platform processing 2M rows/day" - jälkimmäinen on paljon vahvempi

**Prosessi:**
1. Käy läpi jokainen projekti
2. Mieti/selvitä:
   - Datamäärät (rows/day, GB/month, transactions)
   - Suorituskyky (latenssi, throughput, uptime %)
   - Käyttäjämäärät (teams served, users)
   - Liiketoimintavaikutus (aika säästöt, tehokkuus %)
3. Lisää VAIN todennetut numerot

**Formaatti:**
```
"Built an isolated platform segment serving 8+ data teams,
processing 1.5M+ transactions/day with 99.8% reliability"
```

---

### 2.3 Case Study -sivu Parhaasta Projektista
**Tavoite:** Tee 1 projektista syvällinen case study
**Miksi:** Näyttää ajatteluprosessia ja teknistä syvyyttä

**Rakenne:**
```
/case-studies/finance-data-platform.html

1. Executive Summary (2-3 lausetta)
2. Business Context
3. Technical Challenge
4. Solution Architecture (KAAVIO!)
5. Implementation Details
6. Results & Impact (numerot!)
7. Tech Stack Deep-Dive
8. Learnings & Trade-offs
```

---

## 🎨 PRIORITEETTI 3: VISUAALISUUS & UX

### 3.1 Projektikuvat
**Tavoite:** Korvaa placeholderit kuvilla/kaavioilla
**Vaihtoehdot:**
- Arkkitehtuurikaaviot
- Screenshot dashboardista (anonymisoitu)
- Geneerinen visualisointi (Unsplash)
- Custom ikoni/illustraatio

---

### 3.2 Skills Proficiency Levelit
**Tavoite:** Näytä osaamistasot
**Toteutus:**
```css
.skill-item::after {
  content: '●●●●○'; /* 4/5 */
  color: var(--primary-color);
}
```

---

### 3.3 Interaktiivinen Timeline
**Tavoite:** Work Experience timeline johon projektit ylläkkäin
**Miksi:** Näyttää mitä projekteja teit missäkin vaiheessa

---

## 📝 PRIORITEETTI 4: SISÄLTÖ & SEO

### 4.1 Tech Deep-Dive Blogit
**Tavoite:** Kirjoita 2-3 teknistä artikkelia Dev.to:oon
**Aihe-ehdotukset:**
- "Lessons from Databricks GenAI Certification"
- "Building My First RAG Application with Databricks"
- "From Data Engineer to AI Data Engineer: My Transition"
- "GenAI-Assisted Code Migration: What Worked, What Didn't"

---

### 4.2 "About Me" -osio
**Tavoite:** Henkilökohtaisempi tarina
**Sisältö:**
- Miksi datainsinööriksi?
- Miksi pivotointi AI:hin?
- Finance-tausta ja miten se hyödyttää
- Harrastukset (pyöräily näkyy passion projects)

---

## 🔧 PRIORITEETTI 5: TEKNISET PARANNUKSET

### 5.1 Performance-optimointi
- [ ] Lazy loading kuville
- [ ] Preload kriittisille fonteille
- [ ] Compress badge-kuvat (WebP?)

---

### 5.2 Analytics
- [ ] Lisää Plausible tai Simple Analytics
- [ ] Seuraa: mistä vierailijat tulevat, mitkä projektit kiinnostavat

---

### 5.3 Schema Markup (Advanced SEO)
**Tavoite:** Structured data Googlelle
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Panu Alaluusua",
  "jobTitle": "AI Data Engineer",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "certificate",
    "name": "Databricks Certified Generative AI Engineer Associate"
  }
}
```

---

## 📊 MITTARIT & TAVOITTEET

**Portfolion tavoitteet:**
- [ ] LinkedIn-profiilissa linkki portfolioon
- [ ] Jaettu 3+ AI/Data-yhteisössä (Discord, Slack)
- [ ] Ensimmäinen yhteydenotto lomakkeen kautta
- [ ] Dev.to-artikkelista linkki portfolioon

**Mittarit (kun Analytics lisätty):**
- Unique visitors / kk
- Avg. time on page
- Most viewed project
- Contact form conversion rate

---

## 💡 LONG-TERM IDEAT

- Video-esittely projektista (YouTube/Loom)
- Interactive demo (Streamlit app embedded)
- Downloadable portfolio PDF
- Dark/Light mode toggle (on jo CSS:ssä, aktivoi?)
- Multi-language support (EN/FI)
- "Currently Learning" -osio (mitä opiskelet nyt)
- "Consulting/Availability" -status

---

## 🎯 EHDOTETTU ROADMAP

### Viikko 1-2 (Quick Wins)
1. Hero-kuva
2. Formspree-integraatio
3. GenAI-projekti + arkkitehtuurikaavio

### Viikko 3-4 (Medium Effort)
1. "Proof of Work" -osio
2. Projekteihin numerot (todennetut!)
3. 1 Case study -sivu

### Kuukausi 2-3 (Long-term)
1. 2-3 Tech blog -artikkelia
2. Analytics + seuranta
3. Interaktiivinen timeline

---

## 📌 MUISTILISTA ENNEN JULKAISUA

- [ ] Tarkista kaikki linkit toimivat
- [ ] Testaa contact form
- [ ] Mobile-responsiivisuus (Chrome DevTools)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Spell check (FI & EN)
- [ ] LinkedIn-jakamisen preview (Open Graph test)
- [ ] Google Search Console submitted
- [ ] CV.md -tiedosto päivitetty vastaamaan portfoliota

---

## 🚨 ÄLÄKÄ KOSKAAN

❌ Lisää keksittyjä numeroita tai väitteitä
❌ Kopioi projektikuvauksia suoraan CV:stä ilman muokkausta
❌ Unohda päivittää sertifikaatteja niiden vanhentuessa
❌ Julkaise ilman toimivaa contact formia
❌ Käytä low-quality kuvia

---

**Seuraava review:** Kun GenAI-projekti lisätty
**Omistaja:** Panu Alaluusua
**Päivitetty:** 2026-02-19 (AI Data Engineer -pivotoinnin jälkeen)
