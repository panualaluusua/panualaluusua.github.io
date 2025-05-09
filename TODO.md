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



3.  **Päivitä Projektien Linkit:**
    *   **Tiedosto:** `index.html`
    *   **Kohdat:** Kaikki `project-links` -osioiden `href="#"` -linkit (esim. "View Details", "View Research", "View Project", "Read Thesis").
    *   **Tehtävä:** Korvaa `href="#"` oikeilla URL-osoitteilla, jotka johtavat GitHub-repositorioihin, live-demoihin, julkaisuihin tai muihin relevantteihin materiaaleihin.

4.  **Päätä ja Toteuta Yhteydenottolomakkeen Ratkaisu:**
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

8.  **Projektikuvaukset anonymisoitu ja geneeristetty:**
    *   **Tiedosto:** `index.html`, `Panu_Alaluusua_CV.md`
    *   **Kohta:** `projects-grid`-osion `project-card`-elementit ja CV:n projektiosio.
    *   **Tehtävä:** Projektikuvaukset on nyt täysin anonymisoitu ja geneerisiä, eivätkä paljasta asiakasta tai tunnistettavia yksityiskohtia. Tarkista, haluatko vielä muokata kuvauksia tai lisätä muita projekteja.


## Prioriteetti 3: Keskitaso (Viimeistely)

9.  **Skills-osion teknologiat ja työkalut päivitetty:**
    *   **Tiedosto:** `index.html`
    *   **Kohta:** `skills`-osion `Programming & Tools` -kategoriat.
    *   **Tehtävä:** Kaikki tärkeät teknologiat ja työkalut (Jira, Confluence, Alation, Application Insights, Risk & Performance Data Products, SQL Servers) lisätty skills-osiolle.


10. **Skills-osion ulkoasu ja kontrasti parannettu:**
    *   **Tiedosto:** `styles.css`
    *   **Kohta:** .skills-grid, .skill-item, .skill-icon, .skill-item h4
    *   **Tehtävä:** Skills-osion korteille lisätty selkeä tummansininen tausta, border, varjo ja hover-efekti. Testaa ulkoasu eri selaimilla ja laitteilla.

11. **Testaa Sivusto Huolellisesti Eri Laitteilla ja Selaimilla:**
    *   **Tehtävä:** Kun kaikki muutokset on tehty, testaa portfolion toimivuus ja ulkoasu yleisimmillä selaimilla (Chrome, Firefox, Safari, Edge) ja eri näyttökooilla (tietokone, tabletti, puhelin).

Muista päivittää tämä TODO-lista sitä mukaa kun saat tehtäviä valmiiksi!

