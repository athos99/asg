# ASG Arbres Services Genève - Site Web

Site web vitrine statique moderne et haut de gamme pour **ASG Arbres Services Genève**, entreprise arboricole basée à Satigny (GE) et active sur l'ensemble des cantons de Genève et de Vaud.

> **Slogan** : *« L'art de prendre soin de vos arbres, par des professionnels. »*

---

## Structure du Site

- **`index.html`** : Page d'accueil avec hero immersif, slogan, chiffres clés, présentation des services phares, sections dédiées aux cibles (*Particuliers*, *Régies & Architectes*, *Entreprises & Communes*), présentation de l'équipe et appel d'urgence.
- **`services.html`** : Détail complet des 5 domaines de prestations :
  1. Entretien et élagage par grimpe ou nacelle
  2. Taille fruitière et entretien d'arbustes
  3. Abattages spéciaux par démontage au câble et dessouchage mécanique
  4. Travaux de paysagisme, terrasses en bois et aménagements naturels
  5. Transport et évacuation jusqu'à 4,5 tonnes
  + Guide sur les autorisations d'abattage à Genève (DGE / LPrA) et Vaud.
- **`equipe.html`** : Page équipe & trombinoscope avec Bendik Häuserman (Fondateur), Marc Vuilleumier (Grimpeur), Sophie Girard (Paysagiste bois), Lucas Favre (Nacelle & Transport), certifications SUVA et garanties.
- **`realisations.html`** : Galerie de chantiers avec filtres interactifs par catégorie.
- **`contact.html`** : Coordonnées complètes à Satigny (GE), téléphone direct (+41 79 921 77 23), email direct (`bendik.hauserman@bluewin.ch`), signalétique trilingue (FR / EN / DE), formulaire interactif de devis et FAQ.
- **`css/style.css`** : Design system aux teintes suisses et naturelles (vert forêt, sauge, bois chaleureux, blanc cassé), responsive mobile & desktop.
- **`js/main.js`** : Interactivité (menu mobile, filtres galerie, accordéons FAQ, validation du formulaire).
- **`images/`** : Photographies haute résolution des interventions sur le terrain.

---

## Déploiement

Ce site est 100% statique (HTML5 / CSS3 / Vanilla JavaScript). Aucun serveur d'application, base de données ou configuration complexe n'est requis.

### Option 1 : Hébergeur Suisse (ex. Infomaniak, Hostpoint, Swisscom)
1. Décompressez le fichier zip.
2. Déposez tous les fichiers dans le répertoire `web/` ou `public_html/` via FTP (FileZilla) ou le gestionnaire de fichiers.
3. Le site est immédiatement en ligne et sécurisé en HTTPS.

### Option 2 : Test local
Ouvrez simplement `index.html` dans n'importe quel navigateur ou lancez :
```bash
python3 -m http.server 8080
```
Puis accédez à `http://localhost:8080`.

---

## Contact ASG
- **Direction** : Bendik Häuserman
- **Téléphone** : +41 79 921 77 23
- **Email** : bendik.hauserman@bluewin.ch
- **Localité** : Satigny (GE), Suisse (Région Genève & Vaud)
