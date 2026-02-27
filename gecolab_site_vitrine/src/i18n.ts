import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      publications: 'Publications',
      vulgarisation: 'Vulgarisation',
      partners: 'Partenaires',
      press: 'Presse',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'Génétique & Conservation',
        affiliation: 'Laboratoire Universitaire de Liège',
        lead: "De l'ADN environnemental à la conservation des espèces",
        discoverServices: 'Découvrir nos services',
        contactUs: 'Nous contacter'
      },
      intro: {
        sectionLabel: 'Qui sommes-nous',
        title: 'Un laboratoire reconnu internationalement, spécialisé dans l\'ADN environnemental',
        paragraph1: 'Le <strong>GeCoLAB</strong> est un laboratoire de génétique de l\'Université de Liège, reconnu internationalement et spécialisé dans l\'analyse d\'ADN environnemental et les espèces menacées. Fort d\'une vingtaine d\'années d\'expérience, il propose divers services d\'analyses de l\'ADN environnemental — poils, fèces, eau, sol — pour répondre à des problématiques environnementales variées.',
        paragraph2: 'GeCoLAB possède un large panel de marqueurs génétiques spécifiques à de nombreux groupes d\'organismes animaux et végétaux, et est équipé d\'un laboratoire de biologie moléculaire donnant accès aux dernières technologies de séquençage (Next Generation Sequencing), de PCR digitales et quantitatives.',
        highlightTitle: 'Laboratoire de référence wallon',
        highlightText: 'Depuis 2019, GeCoLAB est le <strong>laboratoire de référence</strong> pour le ministère de l\'environnement wallon concernant le <strong>suivi génétique du loup</strong> en Wallonie.'
      },
      reference: {
        sectionLabel: 'Laboratoire de référence',
        title: 'GeCoLAB est le laboratoire de référence :',
        items: [
          { text: 'Pour le ministère de l\'environnement wallon concernant le suivi génétique du loup en Wallonie (depuis 2019).' },
          { text: 'Pour le ministère de l\'environnement luxembourgeois concernant le suivi génétique des populations de chats forestiers (depuis 2012).' },
          { text: 'Pour le ministère de l\'environnement wallon concernant le suivi génétique du castor en Wallonie (depuis 2010).' },
          { text: 'Pour l\'Office français de la biodiversité concernant le suivi génétique du castor en France (depuis 2020).' },
          { text: 'Pour le Plan National d\'Action français pour la conservation de la loutre, concernant le suivi génétique de la loutre en France (depuis 2010).' },
          { text: 'Pour le Plan National d\'Action français pour la conservation du vison d\'Europe, concernant le suivi génétique du vison d\'Europe en France (depuis 2010).' },
          { text: 'Pour le Plan National d\'Action français pour la conservation du desman des Pyrénées, concernant le suivi génétique du desman des Pyrénées en France (depuis 2011).' }
        ]
      },
      specialty: {
        sectionLabel: 'Notre spécialité',
        title: 'Les analyses non invasives',
        text: 'L\'étude et le suivi d\'espèces discrètes et/ou protégées peuvent se faire à partir d\'échantillons collectés de façon non invasive — poils, crottes, mucus, eau. GeCoLAB est spécialisé dans cette approche et vous propose de nombreuses solutions pour étudier une large gamme d\'espèces animales et végétales, qu\'elles soient menacées ou au contraire invasives.',
        aquaticTitle: 'Milieux aquatiques',
        aquaticText: 'Prélèvements d\'eau via capsules filtrantes et pompes péristaltiques',
        terrestrialTitle: 'Milieux terrestres',
        terrestrialText: 'Analyse de sol, frottis sur feuilles, analyse à partir d\'invertébrés (mouches nécrophages…), poils, fèces, urine, salive…',
        degradedTitle: 'ADN dégradé',
        degradedText: 'Laboratoires dédiés à l\'étude de l\'ADN rare et dégradé (échantillons de poils, fèces, matériel de Musée, matériel biologique de petite taille);',
      },
      stats: {
        publications: 'Publications scientifiques',
        experience: "Années d'expérience",
        researchers: 'Chercheurs',
        species: "Espèces suivies par PCR digitale"
      },
      cta: {
        title: 'Un projet en tête ?',
        text: 'Contactez-nous pour toute demande de devis personnalisé — thématique, nombre et type d\'échantillons.',
        quoteButton: 'Demander un devis'
      }
    },
    common: {
      language: 'Langue',
      readMore: 'Découvrir'
    },
    footer: {
      tagline: 'Génétique et Conservation',
      affiliation: 'Université de Liège',
      navigation: 'Navigation',
      expertises: 'Expertises',
      expertisesList: {
        edna: 'ADN environnemental',
        inventory: 'Inventaire de biodiversité',
        digitalPCR: 'PCR digitale',
        diet: 'Régime alimentaire',
        genetics: 'Génétique des populations'
      },
      contact: 'Contact',
      copyright: 'Tous droits réservés.'
    },
    services: {
      hero: {
        sectionLabel: 'Nos expertises',
        title: 'Services',
        lead: 'Des outils génétiques de pointe pour répondre à vos problématiques environnementales'
      },
      quality: {
        title: 'Notre engagement qualité',
        text: 'Tous nos échantillons sont séquencés sur le <strong>NovaSeq d\'Illumina</strong> ou l\'<strong>Aviti d\'Element Biosciences</strong>, permettant d\'obtenir des millions de séquences par échantillon et de détecter l\'ADN des espèces rares avec la sensibilité la plus fine.'
      },
      service1: {
        title: 'Inventaire de biodiversité et identification d\'espèces',
        description: 'Effectuez des inventaires faunistiques précis ou identifiez la présence d\'espèces menacées ou invasives sur un site donné grâce à nos outils génétiques.',
        aquatic: 'Milieux aquatiques',
        aquaticText: 'Recherche de poissons, amphibiens, mammifères aquatiques et macro invertébrés à partir de prélèvements d\'eau via capsules filtrantes et pompes péristaltiques.',
        terrestrial: 'Milieux terrestres',
        terrestrialText: 'Analyse de sol, frottis sur feuilles, analyse à partir d\'invertébrés (mouches nécrophages…), poils, fèces, urine, salive…',
        markersTitle: 'Marqueurs génétiques par groupe',
        fish: 'Poissons',
        mammals: 'Mammifères',
        amphibians: 'Batraciens',
        bivalves: 'Mollusques bivalves',
        gastropods: 'Gastéropodes',
        decapods: 'Décapodes',
        plants: 'Plantes',
        invertebrates: 'Invertébrés',
        diatoms: 'Diatomées',
        markers: 'marqueurs',
        marker: 'marqueur',
        reads: 'reads'
      },
      service2: {
        title: 'Détection ultra sensible via PCR Digitale',
        description: 'Depuis 2024, nous développons des méthodes de détection ultra sensibles de certaines espèces via l\'utilisation de la PCR digitale.',
        intro: 'A l\'heure actuelle voici les espèces pour lesquelles ces analyses sont disponibles',
        note: 'Nous travaillons activement au développement de ces méthodes, si bien que d\'autres espèces viendront s\'ajouter à cette liste dans les prochains mois. Une espèce vous intéresse mais n\'est pas listée ici ? n\'hésitez pas à nous contacter, peut-être l\'avons-nous déjà ajoutée à la liste entre temps.'
      },
      service3: {
        title: 'Régime alimentaire',
        description: 'Analyses de régime alimentaire précises à partir de fèces collectées de manière non invasive, via les techniques de séquençage nouvelle génération et de métabarcoding.',
        examplesLabel: 'Espèces étudiées :',
        examples: 'Loutre européenne, loup européen, sanglier, vison d\'Europe, vison d\'Amérique, mangouste de Java, nombreuses espèces de chauves-souris (oreillards, murins, pipistrelles)…',
        feature1: 'Identification précise des proies au niveau de l\'espèce.',
        feature2: 'Analyse non invasive à partir de fèces ou de contenus stomacaux.',
        feature3: 'Protocoles NGS optimisés pour les échantillons dégradés.'
      },
      service4: {
        title: 'Étude des problèmes d\'hybridation',
        description: 'Étude précise des phénomènes d\'hybridation existant entre espèces menacées et espèces domestiques ou invasives.',
        case1: 'Chat forestier européen × Chat domestique',
        case2: 'Sanglier européen × Cochon domestique',
        case3: 'Vison d\'Europe × Putois européen',
        imageBadge: 'Espèce parapluie',
        studyCases: 'Cas d\'étude',
        infoNote: 'Le Deep Ecology Lab utilise des marqueurs génétiques de haute résolution pour distinguer les individus purs des hybrides avec une précision inégalée.'
      },
      service5: {
        title: 'Détermination d\'effectifs et génétique des populations',
        description: 'Évaluation de la taille des effectifs de populations, analyse de connectivité entre populations isolées, estimation du risque de consanguinité et de la diversité génétique.',
        examplesLabel: 'Espèces étudiées :',
        examples: 'Loutre européenne, loup européen, desman des Pyrénées, vison d\'Europe, cuivré de la bistorte, hibou Grand-Duc, lion d\'Afrique, ours polaire, chat forestier, Lynx boréal…',
        speciesStudied: 'Espèces étudiées'
      },
      service6: {
        title: 'Identification de pathogènes et étude de microbiomes bactériens',
        lead: 'Estimation précise des microbiomes et détection ciblée d\'agents pathogènes grâce à des marqueurs génétiques et du séquençage de dernière génération.',
        description: `L'expertise de notre équipe permet d'estimer de manière précise les microbiomes bactériens présents dans un environnement particulier ou encore au sein d'animaux appartenant à des espèces d'intérêt (ex. tiques, moustiques, rongeurs, chauves-souris…). Ces approches permettent de mettre en place de véritables screening des communautés bactériennes au sein des organismes ou environnements analysés.

Ces analyses permettent également de détecter la présence potentielle d'agents pathogènes, avec une précision supérieure aux technologies classiques, grâce au développement de nouveaux marqueurs génétiques et l'utilisation systématique de technologies de séquençage de dernière génération.

Ces approches, développées notamment avec l'Institut Pasteur ou encore l'Hôpital Universitaire de l'Université de Liège (Belgique) permettent l'identification de pathogènes tels que les bactéries Borrelia, responsables de la maladie de Lyme ou encore d'autres groupes de bactéries particulièrement dangereux pour l'homme (ex. genres Bartonella, Yersinia, Bacillus, Leptospira…).

Notre laboratoire identifie également les champignons pathogènes pour les amphibiens : Batrachochytrium dendrobatidis (Bd) et B. salamandrivorans (Bsal) ainsi que les macro et micro parasites sanguins et intestinaux, grâce à des marqueurs génétiques spécifiques et les technologies de séquençage de dernière génération ou de PCR digitales.`,
        pathogensLabel: 'Pathogènes détectés :',
        pathogens: 'Bactéries (Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...), Champignons (Bd, Bsal), parasites sanguins et intestinaux.',
        partners: 'Développé avec l\'Institut Pasteur et l\'Hôpital Universitaire de l\'Université de Liège.',
        scientificLabel: 'Séquençage NGS & PCR Digitale',
        sectionHeading: 'Expertise Microbiome & Pathogènes',
        methodologyTitle: 'Spectre de détection',
        methodology: [
          {
            title: 'Collecte & Extraction',
            text: 'Prélèvement sur le terrain ou réception d\'échantillons (tiques, fèces, tissus) et extraction de l\'ADN de haute pureté.'
          },
          {
            title: 'Analyse & Séquençage',
            text: 'Utilisation du séquençage NGS pour le microbiome ou de la PCR digitale pour une détection ultra-sensible de cibles spécifiques.'
          },
          {
            title: 'Expertise & Rapport',
            text: 'Interprétation des données par nos experts biologistes et remise d\'un rapport détaillé incluant le screening complet.'
          }
        ],
        scopeBacteria: 'Bactéries',
        scopeBacteriaText: 'Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...',
        scopeFungi: 'Champignons',
        scopeFungiText: 'Batrachochytrium dendrobatidis (Bd) & B. salamandrivorans (Bsal)',
        scopeParasites: 'Parasites',
        scopeParasitesText: 'Macro et micro parasites sanguins et intestinaux',
        partnershipTitle: 'Une collaboration d\'excellence',
        insightBadge: 'Impact Sanitaire',
        whyChooseTitle: 'Pourquoi choisir GeCoLAB ?',
        whyChoose: [
          { title: 'Technologie de pointe', text: 'NGS & PCR digitale exclusive.' },
          { title: 'Rigueur académique', text: 'Protocoles validés par l\'ULiège.' },
          { title: 'Screening complet', text: 'Du microbiome aux pathogènes ciblés.' }
        ],
        sensitivity: 'Sensibilité',
        sensitivityValue: 'Ultra-haute',
        technology: 'Technologie',
        technologyValue: 'NGS / PCRd'
      },
      cta: {
        title: 'Besoin d\'un devis personnalisé ?',
        text: '',
        button: 'Nous contacter'
      }
    },
    about: {
      hero: {
        sectionLabel: 'Le laboratoire',
        title: 'À propos',
        lead: 'Un laboratoire de l\'Université de Liège au service de la biodiversité depuis plus de 25 ans'
      },
      whoWeAre: {
        sectionLabel: 'Notre histoire',
        title: 'Qui sommes-nous ?',
        paragraph1: 'GeCoLAB est un laboratoire de l\'Université de Liège créé par le <strong>Dr Johan Michaux</strong> qui développe des recherches sur la biodiversité à partir d\'outils génétiques depuis plus de 25 ans.',
        paragraph2: 'Ses recherches ont eu comme objectif fondamental de mieux comprendre l\'histoire évolutive et la taxonomie d\'une série d\'espèces de vertébrés. Elles ont également des objectifs appliqués tels que mieux comprendre la résistance des espèces face aux changements climatiques, étudier l\'impact de la fragmentation des habitats sur la survie à long terme d\'espèces menacées, ou mettre en place de nouvelles méthodes pour effectuer des inventaires faunistiques en milieu aquatique et terrestre.',
        paragraph3: 'Ces recherches ont été développées sur un large spectre d\'espèces, reprenant notamment de nombreux mammifères aquatiques ou semi-aquatiques (ours polaire, marsouin commun, vison d\'Europe, castor européen, loutre européenne, desman des Pyrénées, musaraigne aquatique…) mais également des amphibiens ou des poissons.',
        differenceTitle: 'Notre différence',
        differenceText: 'Par notre expertise en génétique <em>et</em> en tant que naturalistes et écologues, nous ne proposons pas uniquement un travail de prestataire rendant une liste d\'espèces — nous vous aidons dans <strong>l\'interprétation des données</strong>, la mise en place des <strong>protocoles de collecte</strong> et le développement de <strong>projets concrets</strong>.',
        differenceHighlight: 'Base de données génétique de références <strong>privée et unique</strong>, développée avec Biotope et Aquascop'
      },
      team: {
        sectionLabel: 'Les personnes',
        title: 'L\'équipe',
        intro: '3 docteurs en biologie, 2 biologistes de niveau master 2, 1 technicienne de laboratoire et 1 chercheuse postdoctorale'
      }
    },
    partners: {
      hero: {
        sectionLabel: 'Collaborations',
        title: 'Nos partenaires de confiance',
        subtitle: 'Gecolab collabore avec des institutions publiques, associations et entreprises de premier plan pour développer des solutions innovantes en génétique environnementale.',
        partnersLabel: 'Partenaires',
        institutionsLabel: 'Institutions',
        associationsLabel: 'Associations'
      },
      filters: {
        all: 'Tous',
        institutions: 'Institutions publiques',
        bureaux: 'Bureaux d\'études & Associations',
        private: 'Sociétés privées'
      },
      tooltip: {
        visitWebsite: 'Visiter le site web'
      },
      cta: {
        title: 'Intéressé par une collaboration ?',
        text: 'Rejoignez notre réseau de partenaires et participez à l\'innovation en génétique environnementale.',
        button: 'Nous contacter'
      }
    },
    press: {
      hero: {
        sectionLabel: 'Médias',
        title: 'Revue de presse',
        lead: 'GeCoLab dans les médias — découvertes, expertises et impact scientifique'
      },
      articles: {
        article1: {
          date: '2023',
          category: 'Découverte',
          title: 'Découverte du Chat forestier dans la Montagne noire',
          description: 'Contribution de GeCoLab à la confirmation de la présence du chat sauvage dans la Montagne noire (Tarn), grâce aux analyses génétiques réalisées par notre laboratoire.',
          source: 'France 3 Occitanie',
          tag: 'Chat forestier'
        },
        article2: {
          date: '2019',
          category: 'Référence',
          title: 'GeCoLab, laboratoire de référence wallon pour le loup',
          description: 'Depuis l\'été 2018, GeCoLab est le laboratoire de référence wallon pour toute question génétique relative à la présence du loup. Des résultats inédits sur la présence du loup ont été mis en évidence par notre laboratoire, repris par la RTBF et le journal La Libre Belgique.',
          source: 'RTBF / La Libre Belgique',
          tag: 'Loup'
        },
        article3: {
          date: '2018',
          category: 'Publication',
          title: 'Renard et maladie de Lyme',
          description: 'Un article écrit par le GeCoLab traitant de la maladie de Lyme et du surprenant rôle du renard dans la régulation de celle-ci, publié dans le magazine Natagora n°87.',
          source: 'Natagora Magazine',
          tag: 'Pathogènes'
        }
      },
      highlight: {
        title: 'Vulgarisation scientifique',
        text: 'Au-delà de ses recherches, le GeCoLab consacre une partie de son activity à la vulgarisation scientifique. Le Dr Johan Michaux intervient notamment pour la télévision nationale belge (RTBF), rendant accessibles les enjeux de la conservation génétique au grand public.'
      }
    },
    contact: {
      info: {
        address: 'Adresse',
        addressText: 'GeCoLAB\nLaboratoire de génétique de la conservation\nInstitut de Botanique (Bât. B22)\nQuartier Vallée 1\nChemin de la vallée 4\n4000 Liège (Sart Tilman)\nBelgie',
        phone: 'Téléphone',
        email: 'Email',
        mapPopup: 'GeCoLAB\nLaboratoire de génétique de la conservation\nInstitut de Botanique (Bât. B22)\nQuartier Vallée 1, Chemin de la Vallée 4\n4000 Liège (Sart Tilman), Belgique'
      },
      form: {
        title: 'Envoyez-nous un message',
        subtitle: 'Nous reviendrons vers vous dans les meilleurs délais.',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        organization: 'Organisation',
        organizationPlaceholder: 'Votre organisation',
        subject: 'Sujet',
        subjectPlaceholder: 'Choisir un sujet',
        subjects: {
          general: 'Informations générales',
          quote: 'Demande de devis',
          collaboration: 'Collaboration scientifique',
          other: 'Autre'
        },
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet ou votre question...',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: {
          title: 'Message envoyé !',
          message: 'Merci pour votre message. Notre équipe reviendra vers vous dans les meilleurs délais.',
          reset: 'Envoyer un autre message'
        },
      }
    },
    publications: {
      hero: {
        title: 'Publications Scientifiques',
        lead: 'Découvrez nos travaux de recherche et publications dans le domaine de la génétique de la conservation'
      },
      stats: {
        totalPublications: 'publications',
        citations: 'citations',
        years: 'années',
        resultsFound: '{n} résultats trouvés'
      },
      search: {
        placeholder: 'Rechercher par titre, auteur ou journal...',
        noResults: 'Aucune publication trouvée'
      },
      filters: {
        sortOptions: {
          yearDesc: 'Année (récent → ancien)',
          yearAsc: 'Année (ancien → récent)',
          titleAsc: 'Titre (A → Z)',
          titleDesc: 'Titre (Z → A)'
        },
        allYears: 'Toutes les années',
        clearFilters: 'Effacer les filtres'
      },
      card: {
        readMore: 'Lire le résumé',
        readLess: 'Voir moins',
        copyCitation: 'Copier la citation',
        copied: 'Copié !',
        citation: 'Citation'
      }
    },
    vulgarisation: {
      hero: {
        sectionLabel: 'Médiation Scientifique',
        title: 'Comprendre le vivant',
        lead: 'Plongez au cœur de la génétique de la conservation et de l\'écologie moléculaire à travers nos capsules vidéos et articles.'
      },
      featured: {
        badge: 'Article RTBF',
        author: 'Par Johan Michaux',
        title: 'Le raton laveur : une espèce encombrante pour la biodiversité européenne',
        excerpt: 'Johan Michaux évoque au travers du cas du raton laveur, les problématiques liées à l\'introduction d\'espèces exotiques dans la préservation de la biodiversité locale.',
        button: 'Lire l\'article complet'
      },
      videos: {
        title: 'Vidéothèque',
        subtitle: 'Découvrez nos dernières observations et capsules éducatives.',
        clickToLoad: 'Cliquez pour charger la vidéo',
        viewOnFacebook: 'Voir sur Facebook',
        moreContent: {
          title: 'Plus de contenus ?',
          text: 'Retrouvez l\'intégralité de nos capsules vidéos et suivez notre actualité en direct sur notre page Facebook.',
          button: 'Rejoignez-nous'
        }
      },
      cta: {
        title: 'Une question scientifique ?',
        text: 'Notre équipe est disponible pour échanger sur nos travaux de recherche.',
        button: 'Contactez-nous'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      publications: 'Publications',
      vulgarisation: 'Outreach',
      partners: 'Partners',
      press: 'Press',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'Genetics & Conservation',
        affiliation: 'University Laboratory of Liège',
        lead: 'From environmental DNA to species conservation',
        discoverServices: 'Discover our services',
        contactUs: 'Contact us'
      },
      intro: {
        sectionLabel: 'Who we are',
        title: 'An internationally recognized laboratory, specialized in environmental DNA',
        paragraph1: 'The <strong>GeCoLAB</strong> is a genetics laboratory at the University of Liège, internationally recognized and specialized in environmental DNA analysis and threatened species. With over twenty years of experience, it offers various environmental DNA analysis services — hair, feces, water, soil — to address various environmental issues.',
        paragraph2: 'GeCoLAB has a wide range of genetic markers specific to many groups of animal and plant organisms, and is equipped with a molecular biology laboratory providing access to the latest sequencing technologies (Next Generation Sequencing), digital PCR and quantitative PCR.',
        highlightTitle: 'Reference laboratory in Wallonia',
        highlightText: 'Since 2019, GeCoLAB has been the <strong>reference laboratory</strong> for the Walloon Ministry of the Environment concerning the <strong>genetic monitoring of wolves</strong> in Wallonia.'
      },
      reference: {
        sectionLabel: 'Reference laboratory',
        title: 'GeCoLAB is the reference laboratory:',
        items: [
          { text: 'For the Walloon Ministry of the Environment concerning genetic monitoring of wolves in Wallonia (since 2019).' },
          { text: 'For the Luxembourg Ministry of the Environment concerning genetic monitoring of wildcat populations (since 2012).' },
          { text: 'For the Walloon Ministry of the Environment concerning genetic monitoring of beavers in Wallonia (since 2010).' },
          { text: 'For the French Office for Biodiversity concerning genetic monitoring of beavers in France (since 2020).' },
          { text: 'For the French National Action Plan for the conservation of the otter, concerning genetic monitoring of otters in France (since 2010).' },
          { text: 'For the French National Action Plan for the conservation of the European mink, concerning genetic monitoring of the European mink in France (since 2010).' },
          { text: 'For the French National Action Plan for the conservation of the Pyrenean desman, concerning genetic monitoring of the Pyrenean desman in France (since 2011).' }
        ]
      },
      specialty: {
        sectionLabel: 'Our specialty',
        title: 'Non-invasive analyses',
        text: 'The study and monitoring of discreet and/or protected species can be done from samples collected in a non-invasive way — hairs, droppings, mucus, water. GeCoLAB specializes in this approach and offers you many solutions to study a wide range of animal and plant species, whether they are threatened or on the contrary invasive.',
        aquaticTitle: 'Aquatic environments',
        aquaticText: 'Water sampling via filter capsules and peristaltic pumps',
        terrestrialTitle: 'Terrestrial environments',
        terrestrialText: 'Collection of soil, hairs, swabs, feces, urine and saliva',
        degradedTitle: 'Degraded DNA',
        degradedText: 'Laboratories dedicated to the study of rare and degraded DNA'
      },
      stats: {
        publications: 'Scientific publications',
        experience: 'Years of experience',
        researchers: 'Researchers',
        species: 'Species monitored by digital PCR'
      },
      cta: {
        title: 'A project in mind?',
        text: 'Contact us for any personalized quote request — theme, number and type of samples.',
        quoteButton: 'Request a quote'
      }
    },
    common: {
      language: 'Language',
      readMore: 'Discover'
    },
    footer: {
      tagline: 'Genetics & Conservation',
      affiliation: 'University of Liège',
      navigation: 'Navigation',
      expertises: 'Expertise',
      expertisesList: {
        edna: 'Environmental DNA',
        inventory: 'Biodiversity inventory',
        digitalPCR: 'Digital PCR',
        diet: 'Diet analysis',
        genetics: 'Population genetics'
      },
      contact: 'Contact',
      copyright: 'All rights reserved.'
    },
    services: {
      hero: {
        sectionLabel: 'Our expertise',
        title: 'Services',
        lead: 'Cutting-edge genetic tools to address your environmental challenges'
      },
      quality: {
        title: 'Our quality commitment',
        text: 'All our samples are sequenced on <strong>Illumina\'s NovaSeq</strong> or <strong>Element Biosciences\' Aviti</strong>, allowing us to obtain millions of sequences per sample and detect DNA from rare species with the finest sensitivity.'
      },
      service1: {
        title: 'Biodiversity inventory and species identification',
        description: 'Conduct precise faunal inventories or identify the presence of threatened or invasive species on a given site using our genetic tools.',
        aquatic: 'Aquatic environments',
        aquaticText: 'Search for fish, amphibians, aquatic mammals and macro invertebrates from water samples via filter capsules and peristaltic pumps.',
        terrestrial: 'Terrestrial environments',
        terrestrialText: 'Collection of soil samples, hair, swabs, feces, urine and saliva using non-invasive devices developed in collaboration with GREGE.',
        markersTitle: 'Genetic markers by group',
        fish: 'Fish',
        mammals: 'Mammals',
        amphibians: 'Amphibians',
        bivalves: 'Bivalve molluscs',
        gastropods: 'Gastropods',
        decapods: 'Decapods',
        plants: 'Plants',
        invertebrates: 'Invertebrates',
        diatoms: 'Diatoms',
        markers: 'markers',
        marker: 'marker',
        reads: 'reads'
      },
      service2: {
        title: 'Ultra-sensitive detection via Digital PCR',
        description: 'Since 2024, we have been developing ultra-sensitive detection methods for certain species using digital PCR.',
        intro: 'Currently, here are the species for which these analyses are available:',
        note: 'We are actively working on developing these methods, so other species will be added to this list in the coming months. Is there a species you are interested in but it is not listed here? Do not hesitate to contact us, perhaps we have already added it to the list in the meantime.'
      },
      service3: {
        title: 'Diet analysis',
        description: 'Precise diet analysis from feces collected non-invasively, using next-generation sequencing and metabarcoding techniques.',
        examplesLabel: 'Species studied:',
        examples: 'European otter, European wolf, wild boar, European mink, American mink, Java mongoose, numerous bat species (long-eared bats, Myotis, pipistrelles)…',
        feature1: 'Precise prey identification at species level.',
        feature2: 'Non-invasive analysis from feces or stomach contents.',
        feature3: 'Optimized NGS protocols for degraded samples.'
      },
      service4: {
        title: 'Study of hybridization issues',
        description: 'Precise study of hybridization phenomena existing between threatened species and domestic or invasive species.',
        case1: 'European wildcat × Domestic cat',
        case2: 'European wild boar × Domestic pig',
        case3: 'European mink × European polecat',
        imageBadge: 'Umbrella species',
        studyCases: 'Case studies',
        infoNote: 'The Deep Ecology Lab uses high-resolution genetic markers to distinguish pure individuals from hybrids with unparalleled precision.'
      },
      service5: {
        title: 'Population size determination and population genetics',
        description: 'Assessment of population size, connectivity analysis between isolated populations, estimation of inbreeding risk and genetic diversity.',
        examplesLabel: 'Species studied:',
        examples: 'European otter, European wolf, Pyrenean desman, European mink, scarce copper butterfly, Eurasian eagle-owl, African lion, polar bear, wildcat, Eurasian lynx…',
        speciesStudied: 'Species studied'
      },
      service6: {
        title: 'Identification of pathogens and bacterial microbiomes',
        description: 'Precise estimation of bacterial microbiomes and detection of potential presence of pathogenic agents with greater accuracy than conventional technologies.',
        pathogensLabel: 'Detected pathogens:',
        pathogens: 'Borrelia (Lyme disease), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Developed with the Pasteur Institute and the University Hospital of the University of Liège.',
        scientificLabel: 'NGS Sequencing & Digital PCR',
        sectionHeading: 'Microbiome & Pathogens Expertise',
        methodologyTitle: 'Detection Scope',
        methodology: [
          {
            title: 'Collection & Extraction',
            text: 'Field collection or reception of samples (ticks, feces, tissues) and high-purity DNA extraction.'
          },
          {
            title: 'Analysis & Sequencing',
            text: 'Use of NGS sequencing for microbiome or digital PCR for ultra-sensitive detection of specific targets.'
          },
          {
            title: 'Expertise & Report',
            text: 'Data interpretation by our expert biologists and delivery of a detailed report including complete screening.'
          }
        ],
        scopeBacteria: 'Bacteria',
        scopeBacteriaText: 'Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...',
        scopeFungi: 'Fungi',
        scopeFungiText: 'Batrachochytrium dendrobatidis (Bd) & B. salamandrivorans (Bsal)',
        scopeParasites: 'Parasites',
        scopeParasitesText: 'Macro and micro blood and intestinal parasites',
        partnershipTitle: 'A Collaboration of Excellence',
        insightBadge: 'Health Impact',
        whyChooseTitle: 'Why choose GeCoLAB?',
        whyChoose: [
          { title: 'Cutting-edge technology', text: 'Exclusive NGS & Digital PCR.' },
          { title: 'Academic rigor', text: 'Protocols validated by ULiège.' },
          { title: 'Complete screening', text: 'From microbiome to targeted pathogens.' }
        ],
        sensitivity: 'Sensitivity',
        sensitivityValue: 'Ultra-high',
        technology: 'Technology',
        technologyValue: 'NGS / dPCR'
      },
      cta: {
        title: 'Need a personalized quote?',
        text: '',
        button: 'Contact us'
      }
    },
    about: {
      hero: {
        sectionLabel: 'The laboratory',
        title: 'About',
        lead: 'A University of Liège laboratory serving biodiversity for over 25 years'
      },
      whoWeAre: {
        sectionLabel: 'Our story',
        title: 'Who we are?',
        paragraph1: 'GeCoLAB is a laboratory at the University of Liège created by <strong>Dr Johan Michaux</strong> who has been conducting biodiversity research using genetic tools for over 25 years.',
        paragraph2: 'His research has had the fundamental objective of better understanding the evolutionary history and taxonomy of a series of vertebrate species. They also have applied objectives such as better understanding species resistance to climate change, studying the impact of habitat fragmentation on the long-term survival of threatened species, or implementing new methods to conduct faunal inventories in aquatic and terrestrial environments.',
        paragraph3: 'This research has been developed on a wide spectrum of species, notably including many aquatic or semi-aquatic mammals (polar bear, harbor porpoise, European mink, European beaver, European otter, Pyrenean desman, water shrew…) but also amphibians and fish.',
        differenceTitle: 'Our difference',
        differenceText: 'Through our expertise in genetics <em>and</em> as naturalists and ecologists, we do not only offer the work of a service provider returning a list of species — we help you with <strong>data interpretation</strong>, the implementation of <strong>collection protocols</strong> and the development of <strong>concrete projects</strong>.',
        differenceHighlight: '<strong>Private and unique</strong> genetic reference database, developed with Biotope and Aquascop'
      },
      team: {
        sectionLabel: 'The people',
        title: 'The team',
        intro: '3 PhDs in biology, 2 master-level biologists, 1 laboratory technician and 1 postdoctoral researcher'
      }
    },
    partners: {
      hero: {
        sectionLabel: 'Collaborations',
        title: 'Our trusted partners',
        subtitle: 'Gecolab collaborates with leading public institutions, associations and companies to develop innovative solutions in environmental genetics.',
        partnersLabel: 'Partners',
        institutionsLabel: 'Institutions',
        associationsLabel: 'Associations'
      },
      filters: {
        all: 'All',
        institutions: 'Public institutions',
        bureaux: 'Consulting firms & Associations',
        private: 'Private companies'
      },
      tooltip: {
        visitWebsite: 'Visit website'
      },
      cta: {
        title: 'Interested in a collaboration?',
        text: 'Join our partner network and participate in innovation in environmental genetics.',
        button: 'Contact us'
      }
    },
    press: {
      hero: {
        sectionLabel: 'Media',
        title: 'Press review',
        lead: 'GeCoLab in the media — discoveries, expertise and scientific impact'
      },
      articles: {
        article1: {
          date: '2023',
          category: 'Discovery',
          title: 'Discovery of the European wildcat in the Montagne Noire',
          description: 'GeCoLab\'s contribution to confirming the presence of the wildcat in the Montagne Noire (Tarn), thanks to genetic analyses carried out by our laboratory.',
          source: 'France 3 Occitanie',
          tag: 'Wildcat'
        },
        article2: {
          date: '2019',
          category: 'Reference',
          title: 'GeCoLab, Walloon reference laboratory for wolves',
          description: 'Since summer 2018, GeCoLab has been the Walloon reference laboratory for all genetic questions relating to the presence of wolves. Unprecedented results on wolf presence have been demonstrated by our laboratory, covered by RTBF and La Libre Belgique newspaper.',
          source: 'RTBF / La Libre Belgique',
          tag: 'Wolf'
        },
        article3: {
          date: '2018',
          category: 'Publication',
          title: 'Fox and Lyme disease',
          description: 'An article written by GeCoLab dealing with Lyme disease and the surprising role of foxes in its regulation, published in Natagora magazine n°87.',
          source: 'Natagora Magazine',
          tag: 'Pathogens'
        }
      },
      highlight: {
        title: 'Science outreach',
        text: 'Beyond its research, GeCoLab devotes part of its activity to science outreach. Dr Johan Michaux notably participates in Belgian national television (RTBF), making genetic conservation issues accessible to the general public.'
      }
    },
    contact: {
      info: {
        address: 'Address',
        addressText: 'GeCoLAB\nConservation Genetics Laboratory\nInstitute of Botany (Building B22)\nQuartier Vallée 1\nChemin de la vallée 4\n4000 Liège (Sart Tilman)\nBelgium',
        phone: 'Phone',
        email: 'Email',
        mapPopup: 'GeCoLAB\nConservation Genetics Laboratory\nInstitute of Botany (Building B22)\nQuartier Vallée 1, Chemin de la Vallée 4\n4000 Liège (Sart Tilman), Belgium'
      },
      form: {
        title: 'Send us a message',
        subtitle: 'We will get back to you as soon as possible.',
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        organization: 'Organization',
        organizationPlaceholder: 'Your organization',
        subject: 'Subject',
        subjectPlaceholder: 'Choose a subject',
        subjects: {
          general: 'General information',
          quote: 'Quote request',
          collaboration: 'Scientific collaboration',
          other: 'Other'
        },
        message: 'Message',
        messagePlaceholder: 'Describe your project or question...',
        submit: 'Send message',
        sending: 'Sending...',
        success: {
          title: 'Message sent!',
          message: 'Thank you for your message. Our team will get back to you as soon as possible.',
          reset: 'Send another message'
        }
      }
    },
    publications: {
      hero: {
        title: 'Scientific Publications',
        lead: 'Discover our research work and publications in the field of conservation genetics'
      },
      stats: {
        totalPublications: 'publications',
        citations: 'citations',
        years: 'years',
        resultsFound: '{n} results found'
      },
      search: {
        placeholder: 'Search by title, author or journal...',
        noResults: 'No publications found'
      },
      filters: {
        sortOptions: {
          yearDesc: 'Year (recent → old)',
          yearAsc: 'Year (old → recent)',
          titleAsc: 'Title (A → Z)',
          titleDesc: 'Title (Z → A)'
        },
        allYears: 'All years',
        clearFilters: 'Clear filters'
      },
      card: {
        readMore: 'Read abstract',
        readLess: 'Read less',
        copyCitation: 'Copy citation',
        copied: 'Copied!',
        citation: 'Citation'
      }
    },
    vulgarisation: {
      hero: {
        sectionLabel: 'Scientific Outreach',
        title: 'Understanding the living world',
        lead: 'Dive into the heart of conservation genetics and molecular ecology through our video capsules and articles.'
      },
      featured: {
        badge: 'RTBF Article',
        author: 'By Johan Michaux',
        title: 'The raccoon: a troublesome species for European biodiversity',
        excerpt: 'Johan Michaux discusses the issues related to the introduction of exotic species in the preservation of local biodiversity through the case of the raccoon.',
        button: 'Read the full article'
      },
      videos: {
        title: 'Video Library',
        subtitle: 'Discover our latest observations and educational capsules.',
        clickToLoad: 'Click to load video',
        viewOnFacebook: 'View on Facebook',
        moreContent: {
          title: 'More content?',
          text: 'Find all our video capsules and follow our latest news live on our Facebook page.',
          button: 'Join us'
        }
      },
      cta: {
        title: 'A scientific question?',
        text: 'Our team is available to discuss our research work.',
        button: 'Contact us'
      }
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      publications: 'Veröffentlichungen',
      vulgarisation: 'Vermittlung',
      partners: 'Partner',
      press: 'Presse',
      contact: 'Kontakt'
    },
    home: {
      hero: {
        subtitle: 'Genetik & Naturschutz',
        affiliation: 'Universitätslabor Lüttich',
        lead: 'Von Umwelt-DNA zur Arterhaltung',
        discoverServices: 'Unsere Dienstleistungen entdecken',
        contactUs: 'Kontaktieren Sie uns'
      },
      intro: {
        sectionLabel: 'Wer wir sind',
        title: 'Ein international anerkanntes Labor, spezialisiert auf Umwelt-DNA',
        paragraph1: 'Das <strong>GeCoLAB</strong> ist ein Genetik-Labor der Universität Lüttich, international anerkannt und spezialisiert auf Umwelt-DNA-Analyse und bedrohte Arten. Mit über zwanzig Jahren Erfahrung bietet es diverse Umwelt-DNA-Analysedienstleistungen — Haare, Kot, Wasser, Boden — zur Beantwortung verschiedener Umweltfragen.',
        paragraph2: 'GeCoLAB verfügt über eine breite Palette genetischer Marker, die spezifisch für viele Gruppen von Tier- und Pflanzenorganismen sind, und ist mit einem molekularbiologischen Labor ausgestattet, das Zugang zu den neuesten Sequenzierungstechnologien (Next Generation Sequencing), digitaler PCR und quantitativer PCR bietet.',
        highlightTitle: 'Referenzlabor in Wallonien',
        highlightText: 'Seit 2019 ist GeCoLAB das <strong>Referenzlabor</strong> des wallonischen Umweltministeriums bezüglich der <strong>genetischen Überwachung des Wolfs</strong> in Wallonien.'
      },
      reference: {
        sectionLabel: 'Referenzlabor',
        title: 'GeCoLAB ist das Referenzlabor:',
        items: [
          { text: 'Für das wallonische Umweltministerium bezüglich der genetischen Überwachung des Wolfs in Wallonien (seit 2019).' },
          { text: 'Für das luxemburgische Umweltministerium bezüglich der genetischen Überwachung der Wildkatzenpopulationen (seit 2012).' },
          { text: 'Für das wallonische Umweltministerium bezüglich der genetischen Überwachung des Bibers in Wallonien (seit 2010).' },
          { text: 'Für das französische Amt für Biodiversität bezüglich der genetischen Überwachung des Bibers in Frankreich (seit 2020).' },
          { text: 'Für den französischen Nationalen Aktionsplan zum Schutz des Fischotters, bezüglich der genetischen Überwachung des Fischotters in Frankreich (seit 2010).' },
          { text: 'Für den französischen Nationalen Aktionsplan zum Schutz des Europäischen Nerzes, bezüglich der genetischen Überwachung des Europäischen Nerzes in Frankreich (seit 2010).' },
          { text: 'Für den französischen Nationalen Aktionsplan zum Schutz des Pyrenäen-Desmans, bezüglich der genetischen Überwachung des Pyrenäen-Desmans in Frankreich (seit 2011).' }
        ]
      },
      specialty: {
        sectionLabel: 'Unsere Spezialität',
        title: 'Nicht-invasive Analysen',
        text: 'Die Untersuchung und Überwachung diskreter und/oder geschützter Arten kann mit nicht-invasiv gesammelten Proben durchgeführt werden — Haare, Kot, Schleim, Wasser. GeCoLAB spezialisiert sich in diesem Ansatz und bietet Ihnen viele Lösungen zur Untersuchung einer breiten Palette von Tier- und Pflanzenarten, die bedroht sind oder im Gegenteil invasiv.',
        aquaticTitle: 'Aquatische Lebensräume',
        aquaticText: 'Wasserprobenahme über Filterkapseln und peristaltische Pumpen',
        terrestrialTitle: 'Terrestrische Lebensräume',
        terrestrialText: 'Sammeln von Boden, Haaren, Abstrichen, Kot, Urin und Speichel',
        degradedTitle: 'Degradierte DNA',
        degradedText: 'Labore für die Untersuchung seltener und degradierter DNA'
      },
      stats: {
        publications: 'Wissenschaftliche Veröffentlichungen',
        experience: 'Jahre Erfahrung',
        researchers: 'Forscher',
        species: 'Arten überwacht durch digitale PCR'
      },
      cta: {
        title: 'Ein Projekt im Kopf?',
        text: 'Kontaktieren Sie uns für jede personalisierte Angebotsanfrage — Thema, Anzahl und Art der Proben.',
        quoteButton: 'Ein Angebot anfordern'
      }
    },
    common: {
      language: 'Sprache',
      readMore: 'Entdecken'
    },
    footer: {
      tagline: 'Genetik und Naturschutz',
      affiliation: 'Universität Lüttich',
      navigation: 'Navigation',
      expertises: 'Expertise',
      expertisesList: {
        edna: 'Umwelt-DNA',
        inventory: 'Biodiversitätsinventar',
        digitalPCR: 'Digitale PCR',
        diet: 'Ernährung',
        genetics: 'Populationsgenetik'
      },
      contact: 'Kontakt',
      copyright: 'Alle Rechte vorbehalten.'
    },
    services: {
      hero: {
        sectionLabel: 'Unsere Expertise',
        title: 'Dienstleistungen',
        lead: 'Hochmoderne genetische Werkzeuge zur Beantwortung Ihrer Umweltfragen'
      },
      quality: {
        title: 'Unser Qualitätsengagement',
        text: 'Alle unsere proben werden auf dem <strong>Illumina NovaSeq</strong> oder dem <strong>Element Biosciences Aviti</strong> sequenziert, wodurch Millionen von Sequenzen pro Probe erhalten werden können und DNA seltener Arten mit der feinsten Empfindlichkeit detektiert werden kann.'
      },
      service1: {
        title: 'Biodiversitätsinventar und Artenidentifikation',
        description: 'Führen Sie präzise faunistische Inventare durch oder identifizieren Sie das Vorhandensein bedrohter oder invasiver Arten an einem bestimmten Standort mit unseren genetischen Werkzeugen.',
        aquatic: 'Aquatische Lebensräume',
        aquaticText: 'Suche nach Fischen, Amphibien, aquatischen Säugetieren und Makroinvertebraten aus Wasserproben über Filterkapseln und peristaltische Pumpen.',
        terrestrial: 'Terrestrische Lebensräume',
        terrestrialText: 'Sammeln von Bodenproben, Haaren, Abstrichen, Kot, Urin und Speichel mit nicht-invasiven Vorrichtungen, entwickelt in Zusammenarbeit mit GREGE.',
        markersTitle: 'Genetische Marker nach Gruppe',
        fish: 'Fische',
        mammals: 'Säugetiere',
        amphibians: 'Amphibien',
        bivalves: 'Muscheln',
        gastropods: 'Schnecken',
        decapods: 'Krebstiere',
        plants: 'Pflanzen',
        invertebrates: 'Wirbellose',
        diatoms: 'Kieselalgen',
        markers: 'Marker',
        marker: 'Marker',
        reads: 'Reads'
      },
      service2: {
        title: 'Ultrasensitive Detektion via digitale PCR',
        description: 'Seit 2024 entwickeln wir ultrasensitive Detektionsmethoden für bestimmte Arten durch die Verwendung digitaler PCR.',
        intro: 'Derzeit sind hier die Arten aufgeführt, für die diese Analysen verfügbar sind:',
        note: 'Wir arbeiten aktiv an der Entwicklung dieser Methoden, sodass in den kommenden Monaten weitere Arten zu dieser Liste hinzukommen werden. Interessiert Sie eine Art, die hier nicht aufgeführt ist? Zögern Sie nicht, uns zu kontaktieren – vielleicht haben wir sie bereits zwischenzeitlich zur Liste hinzugefügt.'
      },
      service3: {
        title: 'Ernährung',
        description: 'Präzise Ernährungsanalysen aus nicht-invasiv gesammelten Fäkalien, durch Next-Generation-Sequencing- und Metabarcoding-Techniken.',
        examplesLabel: 'Untersuchte Arten:',
        examples: 'Europäischer Fischotter, Europäischer Wolf, Wildschwein, Europäischer Nerz, Amerikanischer Nerz, Javanische Manguste, zahlreiche Fledermausarten (Langoohren, Zwergfledermäuse, Zwergfledermäuse)…',
        feature1: 'Präzise Beuteidentifikation auf Artebene.',
        feature2: 'Nicht-invasive Analyse aus Kot oder Mageninhalt.',
        feature3: 'Optimierte NGS-Protokolle für degradierte Proben.'
      },
      service4: {
        title: 'Untersuchung von Hybridisierungsproblemen',
        description: 'Präzise Untersuchung von Hybridisierungsphänomenen zwischen bedrohten Arten und domestizierten oder invasiven Arten.',
        case1: 'Europäische Wildkatze × Hauskatze',
        case2: 'Europäisches Wildschwein × Hausschwein',
        case3: 'Europäischer Nerz × Europäischer Iltis',
        imageBadge: 'Schirmart',
        studyCases: 'Fallstudien',
        infoNote: 'Das Deep Ecology Lab verwendet hochauflösende genetische Marker, um reine Individuen von Hybriden mit beispielloser Präzision zu unterscheiden.'
      },
      service5: {
        title: 'Bestimmung von Populationsgrößen und Populationsgenetik',
        description: 'Bewertung der Populationsgröße, Konnektivitätsanalyse zwischen isolierten Populationen, Schätzung des Inzuchtrisikos und der genetischen Vielfalt.',
        examplesLabel: 'Untersuchte Arten:',
        examples: 'Europäischer Fischotter, Europäischer Wolf, Pyrenäen-Desman, Europäischer Nerz, Schachbrettfalter, Uhu, Afrikanischer Löwe, Eisbär, Wildkatze, Nordluchs…',
        speciesStudied: 'Untersuchte Arten'
      },
      service6: {
        title: 'Identifizierung von Pathogenen und bakteriellen Mikrobiomen',
        description: 'Präzise Schätzung bakterieller Mikrobiome und Detektion potentieller Anwesenheit von Pathogenen mit höherer Genauigkeit als herkömmliche Technologien.',
        pathogensLabel: 'Detektierte Pathogene:',
        pathogens: 'Borrelia (Lyme-Krankheit), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Entwickelt mit dem Pasteur-Institut und dem Universitätsklinikum der Universität Lüttich.',
        scientificLabel: 'NGS-Sequenzierung & Digitale PCR',
        sectionHeading: 'Mikrobiom & Pathogene Expertise',
        methodologyTitle: 'Nachweisspektrum',
        methodology: [
          {
            title: 'Sammlung & Extraktion',
            text: 'Feldprobenahme oder Empfang von Proben (Zecken, Kot, Gewebe) und Extraktion hochreiner DNA.'
          },
          {
            title: 'Analyse & Sequenzierung',
            text: 'Einsatz von NGS-Sequenzierung für das Mikrobiom oder digitale PCR für ultrasensitive Erkennung spezifischer Ziele.'
          },
          {
            title: 'Expertise & Bericht',
            text: 'Dateninterpretation durch unsere Expertenbiologen und Lieferung eines detaillierten Berichts einschließlich vollständiger Screening.'
          }
        ],
        scopeBacteria: 'Bakterien',
        scopeBacteriaText: 'Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...',
        scopeFungi: 'Pilze',
        scopeFungiText: 'Batrachochytrium dendrobatidis (Bd) & B. salamandrivorans (Bsal)',
        scopeParasites: 'Parasiten',
        scopeParasitesText: 'Makro- und Mikro-Blut- und Darmparasiten',
        partnershipTitle: 'Eine Exzellente Zusammenarbeit',
        insightBadge: 'Gesundheitliche Auswirkungen',
        whyChooseTitle: 'Warum GeCoLAB wählen?',
        whyChoose: [
          { title: 'Spitzentechnologie', text: 'Exklusives NGS & Digitale PCR.' },
          { title: 'Akademische Strenge', text: 'Von ULiège validierte Protokolle.' },
          { title: 'Vollständiges Screening', text: 'Vom Mikrobiom zu gezielten Pathogenen.' }
        ],
        sensitivity: 'Empfindlichkeit',
        sensitivityValue: 'Ultra-hoch',
        technology: 'Technologie',
        technologyValue: 'NGS / dPCR'
      },
      cta: {
        title: 'Brauchen Sie ein personalisiertes Angebot?',
        text: '',
        button: 'Kontaktieren Sie uns'
      }
    },
    about: {
      hero: {
        sectionLabel: 'Das Labor',
        title: 'Über uns',
        lead: 'Ein Labor der Universität Lüttich im Dienst der Biodiversität seit über 25 Jahren'
      },
      whoWeAre: {
        sectionLabel: 'Unsere Geschichte',
        title: 'Wer sind wir?',
        paragraph1: 'GeCoLAB ist ein Labor der Universität Lüttich, gegründet von <strong>Dr. Johan Michaux</strong>, der seit über 25 Jahren Biodiversitätsforschung mit genetischen Werkzeugen betreibt.',
        paragraph2: 'Seine Forschungen hatten das grundlegende Ziel, die evolutionäre Geschichte und Taxonomie einer Reihe von Wirbeltierarten besser zu verstehen. Sie haben auch angewandte Ziele, wie ein besseres Verständnis der Widerstandsfähigkeit von Arten gegenüber Klimawandel, die Untersuchung der Auswirkungen von Lebensraumfragmentierung auf das langfristige Überleben bedrohter Arten oder die Implementierung neuer Methoden zur Durchführung faunistischer Inventare in aquatischen und terrestrischen Umgebungen.',
        paragraph3: 'Diese Forschungen wurden über ein breites Spektrum von Arten entwickelt, einschließlich vieler aquatischer oder semi-aquatischer Säugetiere (Eisbär, Schweinswal, Europäischer Nerz, Europäischer Biber, Europäischer Fischotter, Pyrenäen-Desman, Wasserspitzmaus…) aber auch Amphibien und Fische.',
        differenceTitle: 'Unser Unterschied',
        differenceText: 'Durch unsere Expertise in Genetik <em>und</em> als Naturforscher und Ökologen bieten wir nicht nur das Werk eines Dienstleisters, der eine Artenliste zurückgibt — wir helfen Ihnen bei der <strong>Dateninterpretation</strong>, der Implementierung von <strong>Sammlungsprotokollen</strong> und der Entwicklung <strong>konkreter Projekte</strong>.',
        differenceHighlight: '<strong>Private und einzigartige</strong> genetische Referenzdatenbank, entwickelt mit Biotope und Aquascop'
      },
      team: {
        sectionLabel: 'Die Personen',
        title: 'Das Team',
        intro: '3 Doktoren in Biologie, 2 Master-Level-Biologen, 1 Laborassistentin und 1 Postdoktorandin'
      }
    },
    partners: {
      hero: {
        sectionLabel: 'Zusammenarbeit',
        title: 'Unsere vertrauenswürdigen Partner',
        subtitle: 'Gecolab arbeitet mit führenden öffentlichen Institutionen, Vereinen und Unternehmen zusammen, um innovative Lösungen in der Umweltgenetik zu entwickeln.',
        partnersLabel: 'Partner',
        institutionsLabel: 'Institutionen',
        associationsLabel: 'Vereine'
      },
      filters: {
        all: 'Alle',
        institutions: 'Öffentliche Institutionen',
        bureaux: 'Beratungsfirmen & Vereine',
        private: 'Private Unternehmen'
      },
      tooltip: {
        visitWebsite: 'Website besuchen'
      },
      cta: {
        title: 'Interessiert an einer Zusammenarbeit?',
        text: 'Treten Sie unserem Partnernetzwerk bei und beteiligen Sie sich an der Innovation in der Umweltgenetik.',
        button: 'Kontaktieren Sie uns'
      }
    },
    press: {
      hero: {
        sectionLabel: 'Medien',
        title: 'Presseschau',
        lead: 'GeCoLab in den Medien — Entdeckungen, Expertise und wissenschaftlicher Impact'
      },
      articles: {
        article1: {
          date: '2023',
          category: 'Entdeckung',
          title: 'Entdeckung der Europäischen Wildkatze im Montagne Noire',
          description: 'GeCoLAB\'s Beitrag zur Bestätigung der Anwesenheit der Wildkatze im Montagne Noire (Tarn), dank der genetischen Analysen, die in unserem Labor durchgeführt wurden.',
          source: 'France 3 Occitanie',
          tag: 'Wildkatze'
        },
        article2: {
          date: '2019',
          category: 'Referenz',
          title: 'GeCoLAB, wallonisches Referenzlabor für Wölfe',
          description: 'Seit Sommer 2018 ist GeCoLAB das wallonische Referenzlabor für alle genetischen Fragen bezüglich der Anwesenheit von Wölfen. Einzigartige Ergebnisse zur Anwesenheit von Wölfen wurden von unserem Labor aufgezeigt, übernommen von RTBF und der Zeitung La Libre Belgique.',
          source: 'RTBF / La Libre Belgique',
          tag: 'Wolf'
        },
        article3: {
          date: '2018',
          category: 'Veröffentlichung',
          title: 'Fuchs und Lyme-Krankheit',
          description: 'Ein Artikel von GeCoLAB über Lyme-Krankheit und die überraschende Rolle des Fuchses bei deren Regulation, veröffentlicht im Natagora-Magazin Nr. 87.',
          source: 'Natagora Magazin',
          tag: 'Pathogene'
        }
      },
      highlight: {
        title: 'Wissenschaftskommunikation',
        text: 'Über seine Forschungen hinaus widmet GeCoLAB einen Teil seiner Aktivität der Wissenschaftskommunikation. Dr. Johan Michaux tritt insbesondere im belgischen nationalen Fernsehen (RTBF) auf, um die Herausforderungen der genetischen Erhaltung einem breiten Publikum zugänglich zu machen.'
      }
    },
    contact: {
      info: {
        address: 'Adresse',
        addressText: 'GeCoLAB\nLabor für Erhaltungsgenetik\nBotanisches Institut (Gebäude B22)\nQuartier Vallée 1\nChemin de la vallée 4\n4000 Lüttich (Sart Tilman)\nBelgien',
        phone: 'Telefon',
        email: 'E-Mail',
        mapPopup: 'GeCoLAB\nLabor für Erhaltungsgenetik\nBotanisches Institut (Gebäude B22)\nQuartier Vallée 1, Chemin de la Vallée 4\n4000 Lüttich (Sart Tilman), Belgien'
      },
      form: {
        title: 'Senden Sie uns eine Nachricht',
        subtitle: 'Wir werden uns so schnell wie möglich bei Ihnen melden.',
        name: 'Vollständiger Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.com',
        organization: 'Organisation',
        organizationPlaceholder: 'Ihre Organisation',
        subject: 'Betreff',
        subjectPlaceholder: 'Betreff wählen',
        subjects: {
          general: 'Allgemeine Informationen',
          quote: 'Angebotsanfrage',
          collaboration: 'Wissenschaftliche Zusammenarbeit',
          other: 'Sonstiges'
        },
        message: 'Nachricht',
        messagePlaceholder: 'Beschreiben Sie Ihr Projekt oder Ihre Frage...',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: {
          title: 'Nachricht gesendet!',
          message: 'Vielen Dank für Ihre Nachricht. Unser Team wird sich so schnell wie möglich bei Ihnen melden.',
          reset: 'Eine weitere Nachricht senden'
        }
      }
    },
    publications: {
      hero: {
        title: 'Wissenschaftliche Veröffentlichungen',
        lead: 'Entdecken Sie unsere Forschungsarbeiten und Veröffentlichungen im Bereich der Erhaltungsgenetik'
      },
      stats: {
        totalPublications: 'Veröffentlichungen',
        citations: 'Zitate',
        years: 'Jahre',
        resultsFound: '{n} Ergebnisse gefunden'
      },
      search: {
        placeholder: 'Nach Titel, Autor oder Zeitschrift suchen...',
        noResults: 'Keine Veröffentlichungen gefunden'
      },
      filters: {
        sortOptions: {
          yearDesc: 'Jahr (neuest → ältest)',
          yearAsc: 'Jahr (ältest → neuest)',
          titleAsc: 'Titel (A → Z)',
          titleDesc: 'Titel (Z → A)'
        },
        allYears: 'Alle Jahre',
        clearFilters: 'Filter löschen'
      },
      card: {
        readMore: 'Zusammenfassung lesen',
        readLess: 'Weniger anzeigen',
        copyCitation: 'Zitat kopieren',
        copied: 'Kopiert!',
        citation: 'Zitat'
      }
    },
    vulgarisation: {
      hero: {
        sectionLabel: 'Wissenschaftliche Vermittlung',
        title: 'Das Lebendige verstehen',
        lead: 'Tauchen Sie ein in das Herz der Erhaltungsgenetik und molekularen Ökologie durch unsere Video-Kapseln und Artikel.'
      },
      featured: {
        badge: 'RTBF-Artikel',
        author: 'Von Johan Michaux',
        title: 'Der Waschbär: eine lästige Art für die europäische Biodiversität',
        excerpt: 'Johan Michaux spricht am Beispiel des Waschbären über die Problematik der Einführung exotischer Arten für den Erhalt der lokalen Biodiversität.',
        button: 'Vollständigen Artikel lesen'
      },
      videos: {
        title: 'Videothek',
        subtitle: 'Entdecken Sie unsere neuesten Beobachtungen und Bildungskapseln.',
        clickToLoad: 'Klicken, um das Video zu laden',
        viewOnFacebook: 'Auf Facebook ansehen',
        moreContent: {
          title: 'Mehr Inhalte?',
          text: 'Finden Sie alle unsere Videokapseln und verfolgen Sie unsere aktuellen Nachrichten live auf unserer Facebook-Seite.',
          button: 'Begleiten Sie uns'
        }
      },
      cta: {
        title: 'Eine wissenschaftliche Frage?',
        text: 'Unser Team steht Ihnen für den Austausch über unsere Forschungsarbeiten zur Verfügung.',
        button: 'Kontaktieren Sie uns'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Sobre nosotros',
      publications: 'Publicaciones',
      vulgarisation: 'Divulgación',
      partners: 'Socios',
      press: 'Prensa',
      contact: 'Contacto'
    },
    home: {
      hero: {
        subtitle: 'Genética & Conservación',
        affiliation: 'Laboratorio Universitario de Lieja',
        lead: 'Del ADN ambiental a la conservación de especies',
        discoverServices: 'Descubra nuestros servicios',
        contactUs: 'Contáctenos'
      },
      intro: {
        sectionLabel: 'Quiénes somos',
        title: 'Un laboratorio reconocido internacionalmente, especializado en ADN ambiental',
        paragraph1: 'El <strong>GeCoLAB</strong> es un laboratorio de genética de la Universidad de Lieja, reconocido internacionalmente y especializado en análisis de ADN ambiental y especies amenazadas. Con más de veinte años de experiencia, ofrece diversos servicios de análisis de ADN ambiental — pelos, heces, agua, suelo — para responder a diversas problemáticas ambientales.',
        paragraph2: 'GeCoLAB dispone de una amplia gama de marcadores genéticos específicos para muchos grupos de organismos animales y vegetales, y está equipado con un laboratorio de biología molecular que proporciona acceso a las últimas tecnologías de secuenciación (Next Generation Sequencing), PCR digital y cuantitativa.',
        highlightTitle: 'Laboratorio de referencia en Valonia',
        highlightText: 'Desde 2019, GeCoLAB es el <strong>laboratorio de referencia</strong> del Ministerio de Medio Ambiente valón respecto al <strong>seguimiento genético del lobo</strong> en Valonia.'
      },
      reference: {
        sectionLabel: 'Laboratorio de referencia',
        title: 'GeCoLAB es el laboratorio de referencia:',
        items: [
          { text: 'Para el Ministerio de Medio Ambiente valón respecto al seguimiento genético del lobo en Valonia (desde 2019).' },
          { text: 'Para el Ministerio de Medio Ambiente luxemburgués respecto al seguimiento genético de las poblaciones de gatos salvajes (desde 2012).' },
          { text: 'Para el Ministerio de Medio Ambiente valón respecto al seguimiento genético del castor en Valonia (desde 2010).' },
          { text: 'Para la Oficina Francesa de Biodiversidad respecto al seguimiento genético del castor en Francia (desde 2020).' },
          { text: 'Para el Plan Nacional de Acción francés para la conservación de la nutria, respecto al seguimiento genético de la nutria en Francia (desde 2010).' },
          { text: 'Para el Plan Nacional de Acción francés para la conservación del visón europeo, respecto al seguimiento genético del visón europeo en Francia (desde 2010).' },
          { text: 'Para el Plan Nacional de Acción francés para la conservación del desmán de los Pirineos, respecto al seguimiento genético del desmán de los Pirineos en Francia (desde 2011).' }
        ]
      },
      specialty: {
        sectionLabel: 'Nuestra especialidad',
        title: 'Análisis no invasivos',
        text: 'El estudio y seguimiento de especies discretas y/o protegidas pueden realizarse a partir de muestras recolectadas de manera no invasiva — pelos, excrementos, mucosidad, agua. GeCoLAB se especializa en este enfoque y le ofrece muchas soluciones para estudiar una amplia gama de especies animales y vegetales, que estén amenazadas o por el contrario invasoras.',
        aquaticTitle: 'Medios acuáticos',
        aquaticText: 'Muestreo de agua a través de cápsulas filtrantes y bombas peristálticas',
        terrestrialTitle: 'Medios terrestres',
        terrestrialText: 'Recolección de suelo, pelos, frotis, heces, orina y saliva',
        degradedTitle: 'ADN degradado',
        degradedText: 'Laboratorios dedicados al estudio del ADN raro y degradado'
      },
      stats: {
        publications: 'Publicaciones científicas',
        experience: 'Años de experiencia',
        researchers: 'Investigadores',
        species: 'Especies monitoreadas por PCR digital'
      },
      cta: {
        title: '¿Un proyecto en mente?',
        text: 'Contáctenos para cualquier solicitud de presupuesto personalizado — tema, número y tipo de muestras.',
        quoteButton: 'Solicitar presupuesto'
      }
    },
    common: {
      language: 'Idioma',
      readMore: 'Descubrir'
    },
    footer: {
      tagline: 'Genética y Conservación',
      affiliation: 'Universidad de Lieja',
      navigation: 'Navegación',
      expertises: 'Expertise',
      expertisesList: {
        edna: 'ADN ambiental',
        inventory: 'Inventario de biodiversidad',
        digitalPCR: 'PCR digital',
        diet: 'Dieta',
        genetics: 'Genética de poblaciones'
      },
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.'
    },
    services: {
      hero: {
        sectionLabel: 'Nuestras competencias',
        title: 'Servicios',
        lead: 'Herramientas genéticas de vanguardia para responder a sus problemáticas ambientales'
      },
      quality: {
        title: 'Nuestro compromiso de calidad',
        text: 'Todas nuestras muestras son secuenciadas en el <strong>NovaSeq de Illumina</strong> o el <strong>Aviti de Element Biosciences</strong>, permitiendo obtener millones de secuencias por muestra y detectar el ADN de especies raras con la sensibilidad más fina.'
      },
      service1: {
        title: 'Inventario de biodiversité e identificación de especies',
        description: 'Realice inventarios faunísticos precisos o identifique la presencia de especies amenazadas o invasoras en un sitio determinado gracias a nuestras herramientas genéticas.',
        aquatic: 'Medios acuáticos',
        aquaticText: 'Búsqueda de peces, anfibios, mamíferos acuáticos e invertebrados macro a partir de muestreos de agua a través de cápsulas filtrantes y bombas peristálticas.',
        terrestrial: 'Medios terrestres',
        terrestrialText: 'Recolección de muestras de suelo, pelos, frotis, heces, orina y saliva gracias a dispositivos no invasivos desarrollados en colaboración con GREGE.',
        markersTitle: 'Marcadores genéticos por grupo',
        fish: 'Peces',
        mammals: 'Mamíferos',
        amphibians: 'Anfibios',
        bivalves: 'Moluscos bivalvos',
        gastropods: 'Gasterópodos',
        decapods: 'Decápodos',
        plants: 'Plantas',
        invertebrates: 'Invertebrados',
        diatoms: 'Diatomeas',
        markers: 'marcadores',
        marker: 'marcador',
        reads: 'lecturas'
      },
      service2: {
        title: 'Detección ultrasensible vía PCR Digital',
        description: 'Desde 2024, desarrollamos métodos de detección ultrasensibles de ciertas especies mediante el uso de PCR digital.',
        intro: 'Actualmente, aquí están las especies para las cuales estos análisis están disponibles:',
        note: 'Trabajamos activamente en el desarrollo de estos métodos, por lo que otras especies se añadirán a esta lista en los próximos meses. ¿Le interesa una especie pero no está listada aquí? No dude en contactarnos, tal vez ya la hayamos añadido a la lista entretanto.'
      },
      service3: {
        title: 'Dieta',
        description: 'Análisis de dieta precisos a partir de heces recolectadas de manera no invasiva, mediante técnicas de secuenciación de nueva generación y metabarcoding.',
        examplesLabel: 'Especies estudiadas:',
        examples: 'Nutria europea, lobo europeo, jabalí, visón europeo, visón americano, mangosta de Java, numerosas especies de murciélagos (orejudos, murinos, pipistrellos)…',
        feature1: 'Identificación precisa de presas a nivel de especie.',
        feature2: 'Análisis no invasivo a partir de heces o contenidos estomacales.',
        feature3: 'Protocolos NGS optimizados para muestras degradadas.'
      },
      service4: {
        title: 'Estudio de problemas de hibridación',
        description: 'Estudio preciso de los fenómenos de hibridación existentes entre especies amenazadas y especies domésticas o invasoras.',
        case1: 'Gato montés europeo × Gato doméstico',
        case2: 'Jabalí europeo × Cerdo doméstico',
        case3: 'Visón europeo × Turón europeo',
        imageBadge: 'Especie paraguas',
        studyCases: 'Casos de estudio',
        infoNote: 'Deep Ecology Lab utiliza marcadores genéticos de alta resolución para distinguir individuos puros de híbridos con una precisión sin igual.'
      },
      service5: {
        title: 'Determinación de efectivos y genética de poblaciones',
        description: 'Evaluación del tamaño de efectivos de poblaciones, análisis de conectividad entre poblaciones aisladas, estimación del riesgo de consanguinidad y de la diversidad genética.',
        examplesLabel: 'Especies estudiadas:',
        examples: 'Nutria europea, lobo europeo, desmán de los Pirineos, visón europeo, macaón, búho real, león africano, oso polar, gato montés, lince boreal…',
        speciesStudied: 'Especies estudiadas'
      },
      service6: {
        title: 'Identificación de patógenos y microbiomas bacterianos',
        description: 'Estimación precisa de microbiomas bacterianos y detección de la presencia potencial de agentes patógenos con una precisión superior a las tecnologías convencionales.',
        pathogensLabel: 'Patógenos detectados:',
        pathogens: 'Borrelia (enfermedad de Lyme), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Desarrollado con el Instituto Pasteur y el Hospital Universitario de la Universidad de Lieja.',
        scientificLabel: 'Secuenciación NGS & PCR Digital',
        sectionHeading: 'Experiencia en Microbioma y Patógenos',
        methodologyTitle: 'Alcance de detección',
        methodology: [
          {
            title: 'Recolección & Extracción',
            text: 'Recolección en campo o recepción de muestras (garrapatas, heces, tejidos) y extracción de ADN de alta pureza.'
          },
          {
            title: 'Análisis & Secuenciación',
            text: 'Uso de secuenciación NGS para el microbioma o PCR digital para detección ultrasensible de objetivos específicos.'
          },
          {
            title: 'Experiencia & Informe',
            text: 'Interpretación de datos por nuestros expertos biólogos y entrega de un informe detallado incluyendo el cribado completo.'
          }
        ],
        scopeBacteria: 'Bacterias',
        scopeBacteriaText: 'Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...',
        scopeFungi: 'Hongos',
        scopeFungiText: 'Batrachochytrium dendrobatidis (Bd) & B. salamandrivorans (Bsal)',
        scopeParasites: 'Parásitos',
        scopeParasitesText: 'Macro y microparásitos sanguíneos e intestinales',
        partnershipTitle: 'Una Colaboración de Excelencia',
        insightBadge: 'Impacto Sanitario',
        whyChooseTitle: '¿Por qué elegir GeCoLAB?',
        whyChoose: [
          { title: 'Tecnología de vanguardia', text: 'NGS & PCR Digital exclusiva.' },
          { title: 'Rigor académico', text: 'Protocolos validados por ULiège.' },
          { title: 'Cribado completo', text: 'Del microbioma a patógenos específicos.' }
        ],
        sensitivity: 'Sensibilidad',
        sensitivityValue: 'Ultra-alta',
        technology: 'Tecnología',
        technologyValue: 'NGS / dPCR'
      },
      cta: {
        title: '¿Necesita un presupuesto personalizado?',
        text: '',
        button: 'Contáctenos'
      }
    },
    about: {
      hero: {
        sectionLabel: 'El laboratorio',
        title: 'Sobre nosotros',
        lead: 'Un laboratorio de la Universidad de Lieja al servicio de la biodiversidad desde hace más de 25 años'
      },
      whoWeAre: {
        sectionLabel: 'Nuestra historia',
        title: '¿Quiénes somos?',
        paragraph1: 'GeCoLAB es un laboratorio de la Universidad de Lieja creado por el <strong>Dr. Johan Michaux</strong> que desarrolla investigaciones sobre biodiversidad a partir de herramientas genéticas desde hace más de 25 años.',
        paragraph2: 'Sus investigaciones han tenido como objetivo fundamental comprender mejor la historia evolutiva y taxonomía de una serie de especies de vertebrados. También tienen objetivos aplicados tales como comprender mejor la resistencia de las especies frente a los cambios climáticos, estudiar el impacto de la fragmentación de hábitats en la supervivencia a largo plazo de especies amenazadas, o implementar nuevos métodos para realizar inventarios faunísticos en medio acuático y terrestre.',
        paragraph3: 'Estas investigaciones se han desarrollado sobre un amplio espectro de especies, incluyendo numerosos mamíferos acuáticos o semi-acuáticos (oso polar, marsopa común, visón europeo, castor europeo, nutria europea, desmán de los Pirineos, musaraña acuática…) pero también anfibios o peces.',
        differenceTitle: 'Our diferencia',
        differenceText: 'Por nuestra experiencia en genética <em>y</em> en tanto que naturalistas y ecólogos, no proponemos únicamente el trabajo de un prestador de servicios devolviendo una lista de especies — le ayudamos en la <strong>interpretación de los datos</strong>, la implementación de <strong>protocolos de recolección</strong> y el desarrollo de <strong>proyectos concretos</strong>.',
        differenceHighlight: 'Base de datos genética de referencias <strong>privada y única</strong>, desarrollada con Biotope y Aquascop'
      },
      team: {
        sectionLabel: 'Las personas',
        title: 'El equipo',
        intro: '3 doctores en biología, 2 biólogos de nivel máster, 1 técnica de laboratorio y 1 investigadora postdoctoral'
      }
    },
    partners: {
      hero: {
        sectionLabel: 'Colaboraciones',
        title: 'Nuestros socios de confianza',
        subtitle: 'Gecolab colabora con instituciones públicas, asociaciones y empresas de primer nivel para desarrollar soluciones innovadoras en genética ambiental.',
        partnersLabel: 'Socios',
        institutionsLabel: 'Instituciones',
        associationsLabel: 'Asociaciones'
      },
      filters: {
        all: 'Todos',
        institutions: 'Instituciones públicas',
        bureaux: 'Empresas de consultoría & Asociaciones',
        private: 'Empresas privadas'
      },
      tooltip: {
        visitWebsite: 'Visitar sitio web'
      },
      cta: {
        title: '¿Interesado en una colaboración?',
        text: 'Únase a nuestra red de socios y participe en la innovación en genética ambiental.',
        button: 'Contáctenos'
      }
    },
    press: {
      hero: {
        sectionLabel: 'Medios',
        title: 'Revista de prensa',
        lead: 'GeCoLab en los medios — descubrimientos, experiencia e impacto científico'
      },
      articles: {
        article1: {
          date: '2023',
          category: 'Descubrimiento',
          title: 'Descubrimiento del gato montés en la Montagne Noire',
          description: 'Contribución de GeCoLab a la confirmación de la presencia del gato salvaje en la Montagne Noire (Tarn), gracias a los análisis genéticos realizados por nuestro laboratorio.',
          source: 'France 3 Occitanie',
          tag: 'Gato montés'
        },
        article2: {
          date: '2019',
          category: 'Referencia',
          title: 'GeCoLab, laboratorio de referencia valón para el lobo',
          description: 'Desde el verano de 2018, GeCoLab es el laboratorio de referencia valón para toda cuestión genética relativa a la presencia del lobo. Resultados inéditos sobre la presencia del lobo han sido puestos en evidencia por nuestro laboratorio, retomados por RTBF y el periódico La Libre Belgique.',
          source: 'RTBF / La Libre Belgique',
          tag: 'Lobo'
        },
        article3: {
          date: '2018',
          category: 'Publicación',
          title: 'Zorro y enfermedad de Lyme',
          description: 'Un artículo escrito por GeCoLAB tratando de la enfermedad de Lyme y del sorprendente rol del zorro en su regulación, publicado en la revista Natagora n°87.',
          source: 'Natagora Magazine',
          tag: 'Patógenos'
        }
      },
      highlight: {
        title: 'Divulgación científica',
        text: 'Más allá de sus investigaciones, GeCoLAB consagra una parte de su actividad a la divulgación científica. El Dr. Johan Michaux interviene particularmente en la televisión nacional delga (RTBF), haciendo accesibles los desafíos de la conservación genética al gran público.'
      }
    },
    contact: {
      info: {
        address: 'Dirección',
        addressText: 'GeCoLAB\nLaboratorio de genética de la conservación\nInstituto de Botánica (Edificio B22)\nQuartier Vallée 1\nChemin de la vallée 4\n4000 Lieja (Sart Tilman)\nBélgica',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        mapPopup: 'GeCoLAB\nLaboratorio de genética de la conservación\nInstituto de Botánica (Edificio B22)\nQuartier Vallée 1, Chemin de la Vallée 4\n4000 Lieja (Sart Tilman), Bélgica'
      },
      form: {
        title: 'Envíenos un mensaje',
        subtitle: 'Le responderemos lo antes posible.',
        name: 'Nombre completo',
        namePlaceholder: 'Su nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'su@email.com',
        organization: 'Organización',
        organizationPlaceholder: 'Su organización',
        subject: 'Asunto',
        subjectPlaceholder: 'Elegir asunto',
        subjects: {
          general: 'Información general',
          quote: 'Solicitud de presupuesto',
          collaboration: 'Colaboración científica',
          other: 'Otro'
        },
        message: 'Mensaje',
        messagePlaceholder: 'Describa su proyecto o pregunta...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: {
          title: '¡Mensaje enviado!',
          message: 'Gracias por su mensaje. Nuestro equipo le responderá lo antes posible.',
          reset: 'Enviar otro mensaje'
        }
      }
    },
    publications: {
      hero: {
        title: 'Publicaciones Científicas',
        lead: 'Descubra nuestros trabajos de investigación y publicaciones en el campo de la genética de la conservación'
      },
      stats: {
        totalPublications: 'publicaciones',
        citations: 'citaciones',
        years: 'años',
        resultsFound: '{n} resultados encontrados'
      },
      search: {
        placeholder: 'Buscar por título, autor o revista...',
        noResults: 'No se encontraron publicaciones'
      },
      filters: {
        sortOptions: {
          yearDesc: 'Año (reciente → antiguo)',
          yearAsc: 'Año (antiguo → reciente)',
          titleAsc: 'Título (A → Z)',
          titleDesc: 'Título (Z → A)'
        },
        allYears: 'Todos los años',
        clearFilters: 'Borrar filtros'
      },
      card: {
        readMore: 'Leer el resumen',
        readLess: 'Ver menos',
        copyCitation: 'Copiar cita',
        copied: '¡Copiado!',
        citation: 'Cita'
      }
    },
    vulgarisation: {
      hero: {
        sectionLabel: 'Divulgación Científica',
        title: 'Comprender lo vivo',
        lead: 'Sumérjase en el corazón de la genética de la conservación y la ecología molecular a través de nuestras cápsulas de video y artículos.'
      },
      featured: {
        badge: 'Artículo RTBF',
        author: 'Por Johan Michaux',
        title: 'El mapache: una especie molesta para la biodiversidad europea',
        excerpt: 'Johan Michaux analiza los problemas relacionados con la introducción de especies exóticas en la preservación de la biodiversidad local a través del caso del mapache.',
        button: 'Leer el artículo completo'
      },
      videos: {
        title: 'Videoteca',
        subtitle: 'Descubra nuestras últimas observaciones y cápsulas educativas.',
        clickToLoad: 'Haga clic para cargar el video',
        viewOnFacebook: 'Ver en Facebook',
        moreContent: {
          title: '¿Más contenido?',
          text: 'Encuentre todas nuestras cápsulas de video y siga nuestras noticias en directo en nuestra página de Facebook.',
          button: 'Únase a nosotros'
        }
      },
      cta: {
        title: '¿Una pregunta científica?',
        text: 'Nuestro equipo es disponible para hablar sobre nuestros trabajos de investigación.',
        button: 'Contáctenos'
      }
    }
  },
  nl: {
    nav: {
      home: 'Startpagina',
      services: 'Diensten',
      about: 'Over ons',
      publications: 'Publicaties',
      vulgarisation: 'Voorlichting',
      partners: 'Partners',
      press: 'Pers',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'Genetica & Natuurbehoud',
        affiliation: 'Universitair Laboratorium Luik',
        lead: 'Van milieudna naar soortenbehoud',
        discoverServices: 'Ontdek onze diensten',
        contactUs: 'Neem contact op'
      },
      intro: {
        sectionLabel: 'Wie we zijn',
        title: 'Een internationaal erkend laboratorium, gespecialiseerd in milieudna',
        paragraph1: 'Het <strong>GeCoLAB</strong> is een genetisch laboratorium van de Universiteit van Luik, internationaal erkend en gespecialiseerd in milieudna-analyse en bedreigde soorten. Met meer dan twintig year ervaring biedt het diverse milieudna-analysediensten — haren, uitwerpselen, water, bodem — om verschillende milieuvraagstukken te beantwoorden.',
        paragraph2: 'GeCoLAB beschikt over een breed scala aan genetische markers die specifiek zijn voor veel groepen dier- en plantenorganismen, en is uitgerust met een moleculair biologisch laboratorium dat toegang biedt tot de nieuwste sequencingtechnologieën (Next Generation Sequencing), digitale PCR en kwantitatieve PCR.',
        highlightTitle: 'Referentielaboratorium in Wallonië',
        highlightText: 'Sinds 2019 is GeCoLAB het <strong>referentielaboratorium</strong> van het Waals ministerie van Milieu betreffende de <strong>genetische monitoring van de wolf</strong> in Wallonië.'
      },
      specialty: {
        sectionLabel: 'Onze specialiteit',
        title: 'Niet-invasieve analyses',
        text: 'De studie en monitoring van discrete en/of beschermde soorten kan worden uitgevoerd met monsters die op niet-invasieve wijze worden verzameld — haren, uitwerpselen, slijm, water. GeCoLAB specialiseert zich in deze aanpak en biedt u veel oplossingen om een breed scala aan dier- en plantensoorten te bestuderen, die bedreigd zijn of integendeel invasief.',
        aquaticTitle: 'Aquatische milieus',
        aquaticText: 'Watermonsters via filtercapsules en peristaltische pompen',
        terrestrialTitle: 'Terrestrische milieus',
        terrestrialText: 'Verzameling van bodem, haren, uitstrijkjes, uitwerpselen, urine en speeksel',
        degradedTitle: 'Gedegradeerde DNA',
        degradedText: 'Laboratoria gewijd aan de studie van zeldzame en gedegradeerde DNA'
      },
      stats: {
        publications: 'Wetenschappelijke publicaties',
        experience: 'Jaren ervaring',
        researchers: 'Onderzoekers',
        species: 'Soorten gecontroleerd door digitale PCR'
      },
      cta: {
        title: 'Een project in gedachten?',
        text: 'Neem contact met ons op voor elke gepersonaliseerde offerteaanvraag — thema, aantal en type monsters.',
        quoteButton: 'Offerte aanvragen'
      }
    },
    common: {
      language: 'Taal',
      readMore: 'Ontdek'
    },
    footer: {
      tagline: 'Genetica en Natuurbehoud',
      affiliation: 'Universiteit van Luik',
      navigation: 'Navigatie',
      expertises: 'Expertise',
      expertisesList: {
        edna: 'Milieudna',
        inventory: 'Biodiversiteitsinventaris',
        digitalPCR: 'Digitale PCR',
        diet: 'Dieet',
        genetics: 'Populatiegenetica'
      },
      contact: 'Contact',
      copyright: 'Alle rechten voorbehouden.'
    },
    services: {
      hero: {
        sectionLabel: 'Onze expertise',
        title: 'Diensten',
        lead: 'Geavanceerde genetische tools om uw milieuvraagstukken te beantwoorden'
      },
      quality: {
        title: 'Onze kwaliteitsverbintenis',
        text: 'Al onze monsters worden gesequenced op de <strong>Illumina NovaSeq</strong> of de <strong>Element Biosciences Aviti</strong>, waardoor miljoenen sequenties per monster kunnen worden verkregen en DNA van zeldzame soorten met de fijnste gevoeligheid kan worden gedetecteerd.'
      },
      service1: {
        title: 'Biodiversiteitsinventaris en soortenidentificatie',
        description: 'Voer nauwkeurige faunistische inventarissen uit of identificeer de aanwezigheid van bedreigde of invasieve soorten op een bepaalde locatie dankzij onze genetische tools.',
        aquatic: 'Aquatische milieus',
        aquaticText: 'Zoeken naar vissen, amfibieën, aquatische zoogdieren en macro-invertebraten uit watermonsters via filtercapsules en peristaltische pompen.',
        terrestrial: 'Terrestrische milieus',
        terrestrialText: 'Verzameling van bodemmonsters, haren, uitstrijkjes, uitwerpselen, urine en speeksel dankzij niet-invasieve apparaten ontwikkeld in samenwerking met GREGE.',
        markersTitle: 'Genetische markers per groep',
        fish: 'Vissen',
        mammals: 'Zoogdieren',
        amphibians: 'Amfibieën',
        bivalves: 'Tweekleppige weekdieren',
        gastropods: 'Buikpotigen',
        decapods: 'Tienpotigen',
        plants: 'Planten',
        invertebrates: 'Ongewervelden',
        diatoms: 'Kieselalgen',
        markers: 'markers',
        marker: 'marker',
        reads: 'reads'
      },
      service2: {
        title: 'Ultrasensitive detectie via digitale PCR',
        description: 'Sinds 2024 ontwikkelen we ultrasensitive detectiemethoden voor bepaalde soorten door het gebruik van digitale PCR.',
        intro: 'Momenteel zijn dit de soorten waarvoor deze analyses beschikbaar zijn:',
        note: 'Wij werken actief aan de ontwikkeling van deze methoden, zodat de komende maanden andere soorten aan deze lijst zullen worden toegevoegd. Interesse in een soort die niet in deze lijst staat? Aarzel niet om contact met ons op te nemen, misschien hebben wij deze inmiddels al aan de lijst toegevoegd.'
      },
      service3: {
        title: 'Dieet',
        description: 'Nauwkeurige dieetanalyses uit niet-invasief verzamelde feces, via next-generation-sequencing- en metabarcodingtechnieken.',
        examplesLabel: 'Bestudeerde soorten:',
        examples: 'Europese otter, Europese wolf, wild zwijn, Europese nerts, Amerikaanse nerts, Javanese mangoeste, talrijke vleermuissoorten (langoorvleermuizen, dwergvleermuizen, dwergvleermuizen)…',
        feature1: 'Nauwkeurige prooidentificatie op soortniveau.',
        feature2: 'Niet-invasieve analyse uit feces of maaginhoud.',
        feature3: 'Geoptimaliseerde NGS-protocollen voor gedegradeerde monsters.'
      },
      service4: {
        title: 'Studie van hybridisatieproblemen',
        description: 'Nauwkeurige studie van hybridisatieverschijnselen tussen bedreigde soorten en gedomesticeerde of invasieve soorten.',
        case1: 'Europese wilde kat × Huiskat',
        case2: 'Europees wild zwijn × Huiskat',
        case3: 'Europese nerts × Europese bunzing',
        imageBadge: 'Schermsoort',
        studyCases: 'Gevalstudies',
        infoNote: 'Deep Ecology Lab gebruikt high-resolution genetische markers om pure individuen van hybriden te onderscheiden met ongekende precisie.'
      },
      service5: {
        title: 'Bepaling van populatiegrootte en populatiegenetica',
        description: 'Evaluatie van populatiegrootte, connectiviteitsanalyse tussen geïsoleerde populaties, schatting van inteelt risico en genetische diversiteit.',
        examplesLabel: 'Bestudeerde soorten:',
        examples: 'Europese otter, Europese wolf, Pyreneese desman, Europese nerts, grote vuurvlinder, oehoe, Afrikaanse leeuw, ijsbeer, wilde kat, Euraziatische lynx…',
        speciesStudied: 'Bestudeerde soorten'
      },
      service6: {
        title: 'Identificatie van pathogenen en bacteriële microbiomen',
        description: 'Nauwkeurige schatting van bacteriële microbiomen en detectie van potentiële aanwezigheid van pathogenen mit hogere nauwkeurigheid dan conventionele technologieën.',
        pathogensLabel: 'Gedetecteerde pathogenen:',
        pathogens: 'Borrelia (ziekte van Lyme), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Ontwikkeld met het Pasteur Instituut en het Universitair Ziekenhuis van de Universiteit van Luik.',
        scientificLabel: 'NGS Sequencering & Digitale PCR',
        sectionHeading: 'Microbioom & Pathogenen Expertise',
        methodologyTitle: 'Detectiebereik',
        methodology: [
          {
            title: 'Verzameling & Extractie',
            text: 'Veldverzameling of ontvangst van monsters (teken, feces, weefsel) en extractie van hoogzuivere DNA.'
          },
          {
            title: 'Analyse & Sequencering',
            text: 'Gebruik van NGS-sequencing voor het microbioom of digitale PCR voor ultrasensitieve detectie van specifieke doelen.'
          },
          {
            title: 'Expertise & Rapport',
            text: 'Data-interpretatie door onze expert-biologen en levering van een gedetailleerd rapport inclusief volledige screening.'
          }
        ],
        scopeBacteria: 'Bacteriën',
        scopeBacteriaText: 'Borrelia, Bartonella, Yersinia, Bacillus, Leptospira...',
        scopeFungi: 'Schimmels',
        scopeFungiText: 'Batrachochytrium dendrobatidis (Bd) & B. salamandrivorans (Bsal)',
        scopeParasites: 'Parasieten',
        scopeParasitesText: 'Macro- en microbloed- en darmparasieten',
        partnershipTitle: 'Een Uitstekende Samenwerking',
        insightBadge: 'Gezondheidsimpact',
        whyChooseTitle: 'Waarom kiezen voor GeCoLAB?',
        whyChoose: [
          { title: 'Spits technologie', text: 'Exclusief NGS & Digitale PCR.' },
          { title: 'Academische strengheid', text: 'Door ULiège gevalideerde protocollen.' },
          { title: 'Volledige screening', text: 'Van microbioom tot gerichte pathogenen.' }
        ],
        sensitivity: 'Gevoeligheid',
        sensitivityValue: 'Ultra-hoog',
        technology: 'Technologie',
        technologyValue: 'NGS / dPCR'
      },
      cta: {
        title: 'Heeft u een gepersonaliseerde offerte nodig?',
        text: '',
        button: 'Neem contact op'
      }
    },
    about: {
      hero: {
        sectionLabel: 'Het laboratorium',
        title: 'Over ons',
        lead: 'Een laboratorium van de Universiteit van Luik in dienst van biodiversiteit sinds meer dan 25 jaar'
      },
      whoWeAre: {
        sectionLabel: 'Onze geschiedenis',
        title: 'Wie zijn we?',
        paragraph1: 'GeCoLAB is een laboratorium van de Universiteit van Luik opgericht door <strong>Dr. Johan Michaux</strong> die onderzoek naar biodiversiteit ontwikkelt met behulp van genetische tools sinds meer dan 25 jaar.',
        paragraph2: 'Zijn onderzoeken hadden als fundamenteel doel om de evolutionaire geschiedenis en taxonomie van een reeks gewervelde soorten beter te begrijpen. Ze hebben ook toegepaste doelstellingen zoals het beter begrijpen van de weerstand van soorten tegenover klimaatverandering, het bestuderen van de impact van habitatfragmentatie op het langetermijn overleven van bedreigde soorten, of het implementeren van nieuwe methoden om faunistische inventarissen uit te voeren in aquatische en terrestrische omgevingen.',
        paragraph3: 'Deze onderzoeken werden ontwikkeld over een breed spectrum van soorten, waaronder vele aquatische of semi-aquatische zoogdieren (ijsbeer, bruinvis, Europese nerts, Europese bever, Europese otter, Pyreneese desman, waterspitsmuis…) maar ook amfibieën of vissen.',
        differenceTitle: 'Ons verschil',
        differenceText: 'Door onze expertise in genetica <em>en</em> als naturalisten en ecologen, bieden we niet enkel het werk van een dienstverlener die een soortenlijst teruggeeft — we helpen u bij de <strong>gegevensinterpretatie</strong>, de implementatie van <strong>verzamelingsprotocollen</strong> en de ontwikkeling von <strong>concrete projecten</strong>.',
        differenceHighlight: '<strong>Private en unieke</strong> genetische referentiedatabase, ontwikkeld met Biotope en Aquascop'
      },
      team: {
        sectionLabel: 'De personen',
        title: 'Het team',
        intro: '3 doctoren in biologie, 2 biologen op masterniveau, 1 laboratoriumtechnicus en 1 postdoctoraal onderzoekster'
      }
    },
    partners: {
      hero: {
        sectionLabel: 'Samenwerkingen',
        title: 'Onze vertrouwde partners',
        subtitle: 'Gecolab werkt samen met toonaangevende publieke instellingen, verenigingen en bedrijven om innovatieve oplossingen in milieugenetica te ontwikkelen.',
        partnersLabel: 'Partners',
        institutionsLabel: 'Instellingen',
        associationsLabel: 'Verenigingen'
      },
      filters: {
        all: 'Alle',
        institutions: 'Publieke instellingen',
        bureaux: 'Adviesbureaus & Verenigingen',
        private: 'Private bedrijven'
      },
      tooltip: {
        visitWebsite: 'Website bezoeken'
      },
      cta: {
        title: 'Geïnteresseerd in een samenwerking?',
        text: 'Sluit u aan bij ons partnernetwerk en neem deel aan innovatie in milieugenetica.',
        button: 'Neem contact op'
      }
    },
    press: {
      hero: {
        sectionLabel: 'Media',
        title: 'Persoverzicht',
        lead: 'GeCoLab in de media — ontdekkingen, expertise en wetenschappelijke impact'
      },
      articles: {
        article1: {
          date: '2023',
          category: 'Ontdekking',
          title: 'Ontdekking van de Europese wilde kat in de Montagne Noire',
          description: 'Bijdrage van GeCoLAB aan de bevestiging van de aanwezigheid van de wilde kat in de Montagne Noire (Tarn), dankzij de genetische analyses uitgevoerd door ons laboratorium.',
          source: 'France 3 Occitanie',
          tag: 'Wilde kat'
        },
        article2: {
          date: '2019',
          category: 'Referentie',
          title: 'GeCoLAB, Waals referentielaboratorium voor de wolf',
          description: 'Sinds de zomer van 2018 is GeCoLAB het Waals referentielaboratorium voor alle genetische vragen betreffende de aanwezigheid van de wolf. Unieke resultaten over de aanwezigheid van de wolf werden aangetoond door ons laboratorium, overgenomen door RTBF en de krant La Libre Belgique.',
          source: 'RTBF / La Libre Belgique',
          tag: 'Wolf'
        },
        article3: {
          date: '2018',
          category: 'Publicatie',
          title: 'Vos en ziekte van Lyme',
          description: 'Een artikel geschreven door GeCoLAB over de ziekte van Lyme en de verrassende rol van de vos in de regulering ervan, gepubliceerd in het tijdschrift Natagora nr. 87.',
          source: 'Natagora Magazine',
          tag: 'Pathogenen'
        }
      },
      highlight: {
        title: 'Wetenschappelijke vulgarisering',
        text: 'Bovenop zijn onderzoeken wijdt GeCoLAB een deel van zijn activiteit aan wetenschappelijke vulgarisering. Dr. Johan Michaux treedt in het bijzonder op in de Belgische nationale televisie (RTBF), waardoor de uitdagingen von genetische conservatie toegankelijk worden gemaakt voor het grote publiek.'
      }
    },
    contact: {
      info: {
        address: 'Adres',
        addressText: 'GeCoLAB\nLaboratorium voor conservatiegenetica\nInstituut voor Plantkunde (Gebouw B22)\nQuartier Vallée 1\nChemin de la valley 4\n4000 Luik (Sart Tilman)\nBelgië',
        phone: 'Telefoon',
        email: 'E-mail',
        mapPopup: 'GeCoLAB\nLaboratorium voor conservatiegenetica\nInstituut voor Plantkunde (Gebouw B22)\nQuartier Vallée 1, Chemin de la Vallée 4\n4000 Luik (Sart Tilman), België'
      },
      form: {
        title: 'Stuur ons een bericht',
        subtitle: 'We nemen zo snel mogelijk contact met u op.',
        name: 'Volledige naam',
        namePlaceholder: 'Uw naam',
        email: 'E-Mail',
        emailPlaceholder: 'uw@email.com',
        organization: 'Organisatie',
        organizationPlaceholder: 'Uw organisatie',
        subject: 'Onderwerp',
        subjectPlaceholder: 'Onderwerp kiezen',
        subjects: {
          general: 'Algemene informatie',
          quote: 'Offerteaanvraag',
          collaboration: 'Wetenschappelijke samenwerking',
          other: 'Andere'
        },
        message: 'Bericht',
        messagePlaceholder: 'Beschrijf uw project of vraag...',
        submit: 'Bericht verzenden',
        sending: 'Verzenden...',
        success: {
          title: 'Bericht verzonden!',
          message: 'Bedankt voor uw bericht. Ons team neemt zo snel mogelijk contact met u op.',
          reset: 'Een ander bericht verzenden'
        }
      }
    },
    publications: {
      hero: {
        title: 'Wetenschappelijke Publicaties',
        lead: 'Ontdek ons onderzoekswerk en publicaties op het gebied van conservatiegenetica'
      },
      stats: {
        totalPublications: 'publicaties',
        citations: 'citaties',
        years: 'jaren',
        resultsFound: '{n} resultaten gevonden'
      },
      search: {
        placeholder: 'Zoeken op titel, auteur of tijdschrift...',
        noResults: 'Geen publicaties gevonden'
      },
      filters: {
        sortOptions: {
          yearDesc: 'Jaar (recent → oud)',
          yearAsc: 'Jaar (oud → recent)',
          titleAsc: 'Titel (A → Z)',
          titleDesc: 'Titel (Z → A)'
        },
        allYears: 'Alle jaren',
        clearFilters: 'Filters wissen'
      },
      card: {
        readMore: 'Samenvatting lezen',
        readLess: 'Minder weergeven',
        copyCitation: 'Citaat kopiëren',
        copied: 'Gekopieerd!',
        citation: 'Citaat'
      }
    },
    vulgarisation: {
      hero: {
        sectionLabel: 'Wetenschappelijke voorlichting',
        title: 'Begrijp de levende wereld',
        lead: 'Duik in het hart van de conservatiegenetica en moleculaire ecologie via onze videocapsules en artikelen.'
      },
      featured: {
        badge: 'RTBF-artikel',
        author: 'Door Johan Michaux',
        title: 'De wasbeer: een hinderlijke soort voor de Europese biodiversiteit',
        excerpt: 'Johan Michaux bespreekt de problematiek van de introductie van exotische soorten in het behoud van lokale biodiversiteit aan de hand van het geval van de wasbeer.',
        button: 'Lees het volledige artikel'
      },
      videos: {
        title: 'Videotheek',
        subtitle: 'Ontdek onze laatste waarnemingen en educatieve capsules.',
        clickToLoad: 'Klik om de video te laden',
        viewOnFacebook: 'Bekijk op Facebook',
        moreContent: {
          title: 'Meer inhoud?',
          text: 'Vind al onze videocapsules en volg ons laatste nieuws live op onze Facebookpagina.',
          button: 'Doe mee'
        }
      },
      cta: {
        title: 'Een wetenschappelijke vraag?',
        text: 'Ons team is beschikbaar om te discussiëren over onze onderzoekswerken.',
        button: 'Neem contact op'
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'fr', // default locale
  fallbackLocale: 'fr',
  messages,
  globalInjection: true,
  escapeParameter: false,
  missingWarn: false,
  fallbackWarn: false
})

export default i18n
