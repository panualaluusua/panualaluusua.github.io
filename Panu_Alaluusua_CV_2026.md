<link rel="stylesheet" href="cv-style.css">

# Panu Alaluusua
**Data Engineer | Transitioning to AI Data Engineering | M.Sc. (Finance)**
Oulu | panu.alaluusua@gmail.com | [linkedin.com/in/panu-alaluusua](https://www.linkedin.com/in/panu-alaluusua) | [panualaluusua.fi](https://panualaluusua.fi)

---

## **Profiili**

**Data Engineer** (5 vuotta) vahvalla finanssialan data-alusta-osaamisella, siirtymässä **AI Data Engineering** -rooliin. Yhdistän teknisen osaamisen (Azure, Databricks) syvälliseen ymmärrykseen rahoitustoimialasta (M.Sc. Finance), mikä mahdollistaa kriittisten datatuotteiden rakentamisen liiketoiminnan ja regulaation vaatimuksiin.

**Databricks Certified Generative AI Engineer** (2026), erikoistumassa RAG-sovelluksiin, Vector Search -teknologioihin ja LLM-pohjaisiin ratkaisuihin. Rakennan luotettavia datatuotteita – riskienhallinnan putkista likviditeetin ja taseen hallintaan – yhdistäen data-alusta-arkkitehtuurin (Data Mesh) tekoälyavusteisiin kehitysmenetelmiin.

Toimintatapani perustuu tiiviiseen kumppanuuteen liiketoiminnan kanssa, datan laadun ja jäljitettävyyden varmistamiseen sekä alustojen kehittämiseen kohti domain-lähtöisiä (domain-oriented) arkkitehtuureja.

---

## **Tekninen ydinosaaminen**

| Alue | Teknologiat & Konseptit |
| :--- | :--- |
| **AI & GenAI (Emerging)** | **RAG Applications**, **Vector Search**, **MLflow**, **Model Serving**, Unity Catalog, LLM Chains, **Agentic Workflows** |
| **Data-alusta-arkkitehtuuri** | **Data Mesh**, **Azure Databricks**, **Apache Spark**, Delta Lake, ETL/ELT, PySpark, Python (Advanced), SQL |
| **Finanssitoimiala** | **Työeläkevakuuttaminen**, **Riskienhallinnan data**, Sijoitustoiminta, Middle Office, Vastuuvelkalaskenta, Regulaatio (Solvency II, IFRS) |
| **Cloud & DevOps** | **DataOps**, **Azure Data Factory**, **Terraform (IaC)**, Azure DevOps, CI/CD, Git |
| **Laatu & Governance** | **Legacy-migraatiot**, Rinnakkaisajotestaus, Automaattinen täsmäytys, Data Governance, Audit Trail |

---

## **Työkokemus**

### **Solita** | Data Engineer
*Maaliskuu 2021 – Nykyhetki | Oulu*

Toimin datakehittäjänä suuren suomalaisen työeläkeyhtiön kriittisissä dataprojekteissa, vastaten teknisestä toteutuksesta. Rakennan ja modernisoin data-alustaa, joka palvelee sijoitustoimintaa, riskienhallintaa, aktuaarilaskentaa ja regulatorista raportointia.

**Strateginen vaikuttavuus & Data-alustan kehitys:**

*   **Alusta-arkkitehtuurin modernisointi (Data Mesh):**
    *   Johdin siirtymää legacy-monoliitista kohti **domain-lähtöistä** data-alustaa.
    *   Mahdollistin taloushallinnon ja Middle Office -tiimeille **itsepalvelukyvykkyyden** (Self-Serve), vähentäen riippuvuuksia IT:stä.
    *   Suunnittelin arkkitehtuurin **arkaluontoisen finanssidatan** eriyttämiseksi omiin domaineihinsa (data governance).

*   **Legacy-migraatiot & Laadunvarmistus:**
    *   Johdin useita kriittisiä järjestelmäuudistuksia (esim. Riskidata, Vastuuvelkadata).
    *   Toteutin **rinnakkaisajotestauksen (parallel run)** automaattisine täsmäytyksineen → todistin **100% yhteneväisyyden** ja saavutin liiketoiminnan luottamuksen tuotantoonvientiä varten.
    *   Varmistin **datan eheyden ja jäljitettävyyden** (audit trail), mikä on kriittistä viranomaisraportoinnissa.

**Keskeiset projektit:**

*   **Vastuuvelka- & Riskidataputket:**
    *   Rakensin skaalautuvat dataputket, jotka laskevat ja aggregoivat dataa **vastuuvelka- ja vakavaraisuuslaskentaa** varten.
    *   *Teknologia:* Databricks, PySpark, Azure Data Lake, Delta Lake.

*   **Finanssidatan aggregointijärjestelmä:**
    *   Rakensin kriittisen aggregointimoottorin **monivaluuttaisille kassasaldoille** ja rahoitusinstrumenteille.
    *   Toteutin **vikasietoiset mekanismit** (fallback), jotka varmistavat validin datan jatkojärjestelmille vaikka lähdeaineistoissa olisi viiveitä.
    *   *Tulos:* Turvasin päivittäisten finanssioperaatioiden jatkuvuuden.

*   **Riskidataputki salkunhallinnalle:**
    *   Kehitin dataputket, jotka noutavat **riskimittareita ja skenaariolaskelmia** riskienhallintajärjestelmistä Middle Officen ja salkunhoitajien käyttöön.
    *   Optimoin järjestelmäarkkitehtuurin täyttämään johdonmukaisesti kriittisen **klo 10:00 SLA-takarajan** salkunhallinnan päätöksenteolle.
    *   *Palautesykli:* Nopeat iteraatiosyklit suoraan Middle Officen palautteen perusteella.

*   **Sijoitusdatan integraatioalusta:**
    *   Rakensin reaaliaikaisten **markkinadata-API:en** ja salkunhallintajärjestelmien integraatiot.
    *   Mahdollistin ajantasaisen datan virtauksen sijoituspäätöksentekoa varten.

*   **EUDR-sääntelyintegraatio (EU Deforestation Regulation):**
    *   Kehitin modulaarisen Python-sovelluksen metsäkatoasetuksen vaatimustenmukaisuuden hallintaan.
    *   *Arkkitehtuuri:* Suunnittelin **erillisen, tietoturvallisen** ratkaisun Azure Web Apps -alustalle (Docker, Terraform), varmistaen tiukan eriytymisen auditoitavuutta varten.
    *   *Automatisointi:* Korvasi manuaalisen prosessin automatisoidulla `GET → MODIFY → POST` -integraatiolla.

**AI-avusteiset kehitysmenetelmät:**
*   Hyödynnän aktiivisesti **LLM-avusteista koodausta** (Cursor, Claude Code) tuottavuuden ja laadun parantamiseksi.
*   Sovellan **Spec-Driven Development** ja **Context Modeling** -työtapoja AI-avusteisessa kehityksessä.

---

### **Oulun yliopisto** | Tohtorikoulutettava & Tutkimusavustaja
*Kesäkuu 2019 – Joulukuu 2020 | Oulu*

Datatieteen ja edistyneen analytiikan tutkija keskittyen korkeakoulutuksen metriikoihin.

*   **Koneoppiminen & Analytiikka:** Koulutin XGBoost-ennustemalleja ja tein piirretekniikkaa (feature engineering) oppimisanalytiikkaa varten.
*   **Dataputket:** Hallinnoin datan siivousta, tutkivaa data-analyysia (EDA) ja visualisointityönkulkuja R:llä ja Pythonilla.
*   **Vaikuttavuus:** Tuotin räätälöityjä ad-hoc -analyyseja vakiomuotoisten BI-työkalujen ulkopuolelta päätöksenteon tueksi.

---

## **Koulutus**

**Kauppatieteiden maisteri (Rahoitus)** | *Oulun yliopisto (2013 – 2020)*
*   **Pääaine:** Rahoitus | **Sivuaine:** Tilastotiede/Ekonometria
*   **Painopisteet:** Rahoituksen ekonometria, riskienhallinta, kvantitatiivinen analyysi, finanssimatematiikka.
*   **Relevanssi:** Syvä ymmärrys finanssi-instrumenteista, riskimalleista ja aikasarja-analyysistä. Puhun "aktuaaria" ja kommunikoin sujuvasti finanssiasiantuntijoiden ja datatieteilijöiden kanssa. Tilastotieteellinen pohja mahdollistaa datan laatuvaatimusten ymmärtämisen (jakaumien validointi, muutosten seuranta).

---

## **Sertifikaatit**

*   **Databricks Certified Generative AI Engineer Associate** (Helmikuu 2026)
    *   *Osaaminen:* Generative AI Solutions, RAG Applications, Vector Search, Model Serving, MLflow, Unity Catalog, LLM Chains.
*   **Databricks Certified Data Engineer Associate** (Lokakuu 2022, vanhentunut 2024)

---

## **Projektit & Portfolio**

*   **Engineering Portfolio:** Yksityiskohtaisia case-esimerkkejä työstäni, GenAI-projekteista ja arkkitehtuureista.
    → [panualaluusua.fi](https://panualaluusua.fi/)

---

## **Kielet**

*   **Suomi:** Äidinkieli
*   **Englanti:** Sujuva (työskentely, dokumentaatio, sertifioinnit)

---

## **Harrasteet & Mielenkiinnon kohteet**

*   **Generative AI & RAG:** Rakennan vapaa-ajalla RAG-sovelluksia ja tutkin LLM-pohjaisia agentteja.
*   **Sijoittaminen:** Aktiivinen osakesijoittaja ja markkinoiden seuraaja – ymmärrän rahoitusmarkkinoita myös käytännön tasolla.
*   **Pyöräily:** E-cycling kilpailija ja harrastaja (näkyy passion projects -osiossa portfoliossa).
