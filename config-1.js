/* ============================================================
   FICHIER DE CONFIGURATION — NOVARISE BUSINESS ACADEMY
   ============================================================
   C'EST LE SEUL FICHIER QUE TU AS BESOIN DE MODIFIER.
   Ne touche jamais à index.html.

   RÈGLES SIMPLES :
   - Ne modifie que ce qui est ENTRE GUILLEMETS " "
   - Ne touche jamais aux virgules ( , ), aux accolades { }
     ou aux crochets [ ] — c'est la structure du fichier.
   - Après modification : enregistre le fichier, puis
     actualise la page (F5) pour voir le résultat.
   ============================================================ */


/* ---------- 1. TES COORDONNÉES DE PAIEMENT ET CONTACT ---------- */

const SETTINGS = {

  // Ton numéro WhatsApp Business, AVEC l'indicatif pays,
  // SANS le "+" et SANS espaces.
  // Exemple Cameroun : 237 6XX XXX XXX  →  "2376XXXXXXXX"
  whatsappNumber: "237686565494",

  // Numéro MTN Mobile Money qui reçoit les paiements
  momoNumber: "+237 650 152 105",
  momoName: "FONKOU Chanceline",

  // Numéro Orange Money qui reçoit les paiements
  omNumber: "+237 686 565 494",
  omName: "LAMBO Franky",

  // Email de contact affiché en bas du site
  contactEmail: "contact@novarise-academy.com",

  // ---- PAIEMENT PAR CARTE (Visa / Mastercard / carte virtuelle, international) ----
  // 1. Crée un compte gratuit sur https://flutterwave.com (business + pièce d'identité)
  // 2. Dans leur dashboard : Settings > API > copie ta "Public Key"
  // 3. Colle-la ci-dessous entre les guillemets.
  // Tant que ce n'est pas fait, le bouton "Payer par carte" affiche un message
  // au lieu d'un formulaire cassé — aucun faux formulaire n'est jamais montré à tes clients.
  flutterwavePublicKey: "REMPLACE_PAR_TA_CLE_PUBLIQUE_FLUTTERWAVE"
};


/* ---------- 2. TON CATALOGUE DE PRODUITS ---------- */
/*
   Pour AJOUTER un produit : copie un bloc entier (de { à },
   virgule comprise) et colle-le juste avant le crochet ] final.
   Puis change juste les textes entre guillemets.

   Pour RETIRER un produit : supprime son bloc entier
   (de { à }, avec sa virgule).

   "id"    → un nom court sans espace, unique pour chaque produit
   "seal"  → 2 à 4 lettres affichées dans le petit cachet doré
   "price" → un nombre, sans espace ni "FCFA" (ex: 5000)
   "image" → LIGNE OPTIONNELLE. Lien vers une photo de couverture.

   COMMENT AJOUTER UNE IMAGE (aucune image = pas grave, le cachet doré
   s'affiche seul comme avant) :
   1. Sur la page principale de ton dépôt GitHub, crée un dossier "images"
      (Add file > Create new file, puis tape "images/nom-de-ta-photo.jpg"
      dans le nom — GitHub crée le dossier automatiquement).
      En fait, plus simple : "Add file" > "Upload files" et dépose ta
      photo, elle ira dans le dossier que tu auras choisi.
   2. Une fois l'image envoyée, ouvre-la sur GitHub, appuie sur les
      trois points ou "Download" pour voir son lien, ou plus simple :
      utilise le format ci-dessous qui marche toujours si l'image
      s'appelle "produit1.jpg" et est à la racine du dépôt :
      image: "produit1.jpg"
      Si elle est dans un dossier "images" :
      image: "images/produit1.jpg"
*/

const PRODUCTS = [
  {
    id: "novarise-produits-digitaux",
    seal: "PDF",
    tag: { fr: "Guide · 35 pages", en: "Guide · 35 pages" },
    title: {
      fr: "Créer et vendre des produits digitaux en Afrique francophone",
      en: "Create & Sell Digital Products in Francophone Africa"
    },
    desc: {
      fr: "Le guide complet pour concevoir, publier et vendre vos propres produits digitaux — ebooks, formations, templates — sur le marché francophone africain.",
      en: "The complete guide to designing, publishing and selling your own digital products for the francophone African market."
    },
    price: 5000
    // image: "images/novarise-produits-digitaux.jpg"
  },
  {
    id: "nexus-elec-liberte-financiere",
    seal: "PDF",
    tag: { fr: "Guide financier", en: "Finance guide" },
    title: {
      fr: "Liberté financière — Nexus Elec Intelligence",
      en: "Financial Freedom — Nexus Elec Intelligence"
    },
    desc: {
      fr: "Une méthode claire pour reprendre le contrôle de vos finances personnelles et construire des revenus durables, pensée pour le contexte africain.",
      en: "A clear method to take control of your personal finances and build lasting income, built for the African context."
    },
    price: 5000
    // image: "images/nexus-elec-liberte-financiere.jpg"
  }

  /* 👉 Exemple pour ajouter un 3e produit, décommente et modifie ce bloc :

  ,{
    id: "mon-nouveau-produit",
    seal: "NEW",
    tag: { fr: "Guide", en: "Guide" },
    title: { fr: "Titre en français", en: "Title in English" },
    desc: { fr: "Description en français.", en: "Description in English." },
    price: 5000,
    image: "images/mon-nouveau-produit.jpg"
  }

  */
];
