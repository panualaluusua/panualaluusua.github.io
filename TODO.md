# Tehtävälista Portfolion Viimeistelyyn

Nämä tehtävät vaativat sinun panostasi portfolion viimeistelemiseksi. Ne on järjestetty prioriteetin mukaan.

## Prioriteetti 1: Kriittiset Tehtävät

1.  **Lisää Kasvokuva Hero-osioon:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** `<div class="placeholder-image">Professional Headshot</div>` (rivi ~50)
    *   **Tehtävä:** Korvaa placeholder ammattimaisella, korkealaatuisella kasvokuvallasi. Esimerkiksi: `<img src="assets/images/panu-alaluusua-profile.jpg" alt="Panu Alaluusua">` (muista luoda `assets/images` kansio ja sijoittaa kuva sinne).

2.  **Lisää Projektikuvat:**
    *   **Tiedosto:** `index.html`
    *   **Kohdat:** Projektikorttien placeholder-kuvat (esim. `<div class="placeholder-image">Data Pipeline Image</div>` rivi ~93, `Analytics Image` rivi ~113, `Simulation Image` rivi ~130).
    *   **Tehtävä:** Korvaa placeholderit relevanteilla kuvilla tai grafiikoilla, jotka edustavat kutakin projektia. Esimerkiksi: `<img src="assets/images/project-data-platform.jpg" alt="Enterprise Data Platform">`.

3.  **Päivitä Ansioluettelon Latauslinkki:**
    *   **Tiedosto:** `index.html`
    *   **Kohdat:** `<a href="#" class="btn secondary-btn"><i class="fas fa-file-download"></i> Download Resume</a>` (rivi ~46) ja `<a href="#" class="resume-badge">...Resume...</a>` (rivi ~55).
    *   **Tehtävä:** Korvaa `href="#"` oikealla polulla CV-tiedostoosi (esim. `href="assets/panu_alaluusua_cv.pdf"`). Tallenna CV-tiedosto projektiin, esimerkiksi `assets`-kansioon.

4.  **Päivitä Projektien Linkit:**
    *   **Tiedosto:** `index.html`
    *   **Kohdat:** Kaikki `project-links` -osioiden `href="#"` -linkit (esim. "View Details", "View Research", "View Project", "Read Thesis").
    *   **Tehtävä:** Korvaa `href="#"` oikeilla URL-osoitteilla, jotka johtavat GitHub-repositorioihin, live-demoihin, julkaisuihin tai muihin relevantteihin materiaaleihin.

5.  **Päätä ja Toteuta Yhteydenottolomakkeen Ratkaisu:**
    *   **Tiedosto:** `script.js` (nykyinen `mailto:`), `index.html` (lomakkeen rakenne `#contactForm`)
    *   **Tehtävä:** Nykyinen `mailto:`-linkki on epäluotettava. Valitse ja integroi luotettavampi ratkaisu:
        *   **Vaihtoehto A (Suositeltu staattisille sivuille):** Käytä kolmannen osapuolen palvelua kuten [Formspree](https://formspree.io/) (ilmainen perustasolla) tai Netlify Forms (jos hostaat Netlifyssä). Nämä vaativat yleensä pienen muutoksen lomakkeen `action`-attribuuttiin ja mahdollisesti nimeämiskäytäntöihin input-kentille.
        *   **Vaihtoehto B:** Jos sinulla on backend-osaamista ja haluat enemmän kontrollia, voit luoda pienen backend-palvelun (esim. Node.js/Express, Python/Flask) käsittelemään lomakkeen lähetyksiä.
    *   Päivitä `index.html` ja tarvittaessa `script.js` valitsemasi ratkaisun mukaisesti.

## Prioriteetti 2: Korkea Vaikutus

6.  **Kirjoita Sisältö "Tietoa Minusta" -osioon:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** Etsi kommentti tai luo `#about`-osion sisältö (`<section id="about" class="about">...</section>`, rivi ~60, jonka rakenne puuttuu vielä HTML:stä).
    *   **Tehtävä:** Kirjoita vakuuttava ja persoonallinen teksti, joka kertoo tarinasi, osaamisestasi datainsinöörinä ja ohjelmistokehittäjänä, sekä motivaatiostasi ja intohimostasi alaa kohtaan.

7.  **Lisää Sisältö ja Tiedot "Sertifikaatit"-osioon:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** Etsi kommentti tai luo `#certifications`-osion sisältö (`<section id="certifications" class="certifications">...</section>`, rivi ~23, jonka rakenne puuttuu vielä HTML:stä).
    *   **Tehtävä:** Listaa sertifikaattisi selkeästi. Harkitse logojen tai linkkien lisäämistä sertifikaatteihin, jos mahdollista. Varmista, että osio on visuaalisesti linjassa muun sivun kanssa.

8.  **Tarkista ja Täydennä Projektikuvaukset:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** `projects-grid`-osion `project-card`-elementit.
    *   **Tehtävä:** Varmista, että "Challenge, Solution, Results" -kuvaukset ovat ytimekkäitä, vakuuttavia ja tuovat esiin konkreettiset saavutuksesi. Tarkista kieliasu.

## Prioriteetti 3: Keskitaso (Viimeistely)

9.  **Harkitse Osaamispalkkien Tekstimuotoista Täydennystä:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** `skills`-osion `skill-item`-elementit.
    *   **Tehtävä:** Vaikka CSS-palkit lisätään, harkitse lyhyiden (1-2 lauseen) kuvausten lisäämistä kunkin taidon alle, selittäen *miten* tai missä yhteydessä olet taitoa käyttänyt. Esim. "Data Modeling" alle: "Designed relational and dimensional data models for large-scale financial data warehouses."

10. **Testaa Sivusto Huolellisesti Eri Laitteilla ja Selaimilla:**
    *   **Tehtävä:** Kun kaikki muutokset on tehty, testaa portfolion toimivuus ja ulkoasu yleisimmillä selaimilla (Chrome, Firefox, Safari, Edge) ja eri näyttökooilla (tietokone, tabletti, puhelin).

Muista päivittää tämä TODO-lista sitä mukaa kun saat tehtäviä valmiiksi!
