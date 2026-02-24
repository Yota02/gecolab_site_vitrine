import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      partners: 'Partenaires',
      press: 'Presse',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'Génétique & Conservation',
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
      specialty: {
        sectionLabel: 'Notre spécialité',
        title: 'Les analyses non invasives',
        text: 'L\'étude et le suivi d\'espèces discrètes et/ou protégées peuvent se faire à partir d\'échantillons collectés de façon non invasive — poils, crottes, mucus, eau. GeCoLAB est spécialisé dans cette approche et vous propose de nombreuses solutions pour étudier une large gamme d\'espèces animales et végétales, qu\'elles soient menacées ou au contraire invasives.',
        aquaticTitle: 'Milieux aquatiques',
        aquaticText: 'Prélèvements d\'eau via capsules filtrantes et pompes péristaltiques',
        terrestrialTitle: 'Milieux terrestres',
        terrestrialText: 'Collecte de sol, poils, frottis, fèces, urine et salive',
        degradedTitle: 'ADN dégradé',
        degradedText: 'Laboratoires dédiés à l\'étude de l\'ADN rare et dégradé'
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
      language: 'Langue'
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
        terrestrialText: 'Collecte d\'échantillons de sol, poils, frottis, fèces, urine et salive grâce à des dispositifs non invasifs développés en collaboration avec le GREGE.',
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
        note: 'D\'autres espèces seront ajoutées prochainement. N\'hésitez pas à nous contacter pour toute espèce d\'intérêt.'
      },
      service3: {
        title: 'Régime alimentaire',
        description: 'Analyses de régime alimentaire précises à partir de fèces collectées de manière non invasive, via les techniques de séquençage nouvelle génération et de métabarcoding.',
        examplesLabel: 'Espèces étudiées :',
        examples: 'Loutre européenne, loup européen, sanglier, vison d\'Europe, vison d\'Amérique, mangouste de Java, nombreuses espèces de chauves-souris (oreillards, murins, pipistrelles)…'
      },
      service4: {
        title: 'Étude des problèmes d\'hybridation',
        description: 'Étude précise des phénomènes d\'hybridation existant entre espèces menacées et espèces domestiques ou invasives.',
        case1: 'Chat forestier européen × Chat domestique',
        case2: 'Sanglier européen × Cochon domestique',
        case3: 'Vison d\'Europe × Putois européen'
      },
      service5: {
        title: 'Détermination d\'effectifs et génétique des populations',
        description: 'Évaluation de la taille des effectifs de populations, analyse de connectivité entre populations isolées, estimation du risque de consanguinité et de la diversité génétique.',
        examplesLabel: 'Espèces étudiées :',
        examples: 'Loutre européenne, loup européen, desman des Pyrénées, vison d\'Europe, cuivré de la bistorte, hibou Grand Duc, lion d\'Afrique, ours polaire…'
      },
      service6: {
        title: 'Identification de pathogènes et microbiomes bactériens',
        description: 'Estimation précise des microbiomes bactériens et détection de la présence potentielle d\'agents pathogènes avec une précision supérieure aux technologies classiques.',
        pathogensLabel: 'Pathogènes détectés :',
        pathogens: 'Borrelia (maladie de Lyme), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Développé avec l\'Institut Pasteur et l\'Hôpital Universitaire de l\'Université de Liège.'
      },
      cta: {
        title: 'Besoin d\'un devis personnalisé ?',
        text: 'Contactez-nous avec votre thématique, le nombre et type d\'échantillons.',
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
        intro: '3 docteurs en biologie, 2 biologistes de niveau master, 1 technicienne de laboratoire et 1 chercheuse postdoctorale'
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
        text: 'Au-delà de ses recherches, le GeCoLab consacre une partie de son activité à la vulgarisation scientifique. Le Dr Johan Michaux intervient notamment pour la télévision nationale belge (RTBF), rendant accessibles les enjeux de la conservation génétique au grand public.'
      }
    },
    contact: {
      info: {
        address: 'Adresse',
        addressText: 'GeCoLAB<br>Laboratoire de génétique de la conservation<br>Institut de Botanique (Bât. B22)<br>Quartier Vallée 1<br>Chemin de la vallée 4<br><strong>4000 Liège (Sart Tilman)</strong><br>Belgique',
        phone: 'Téléphone',
        email: 'Email',
        mapPopup: '<strong>GeCoLAB</strong><br>Laboratoire de génétique de la conservation<br>Institut de Botanique (Bât. B22)<br>Quartier Vallée 1, Chemin de la Vallée 4<br>4000 Liège (Sart Tilman), Belgique'
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
        subjectOptions: {
          quote: 'Demande de devis',
          info: 'Demande d\'informations',
          collaboration: 'Proposition de collaboration',
          other: 'Autre'
        },
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet ou votre question...',
        submit: 'Envoyer le message',
        successTitle: 'Message envoyé !',
        successText: 'Merci pour votre message. Notre équipe reviendra vers vous dans les meilleurs délais.',
        sendAnother: 'Envoyer un autre message'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      partners: 'Partners',
      press: 'Press',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'Genetics & Conservation',
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
      language: 'Language'
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
        note: 'More species will be added soon. Please contact us for any species of interest.'
      },
      service3: {
        title: 'Diet analysis',
        description: 'Precise diet analysis from feces collected non-invasively, using next-generation sequencing and metabarcoding techniques.',
        examplesLabel: 'Species studied:',
        examples: 'European otter, European wolf, wild boar, European mink, American mink, Java mongoose, numerous bat species (long-eared bats, Myotis, pipistrelles)…'
      },
      service4: {
        title: 'Study of hybridization issues',
        description: 'Precise study of hybridization phenomena existing between threatened species and domestic or invasive species.',
        case1: 'European wildcat × Domestic cat',
        case2: 'European wild boar × Domestic pig',
        case3: 'European mink × European polecat'
      },
      service5: {
        title: 'Population size determination and population genetics',
        description: 'Assessment of population size, connectivity analysis between isolated populations, estimation of inbreeding risk and genetic diversity.',
        examplesLabel: 'Species studied:',
        examples: 'European otter, European wolf, Pyrenean desman, European mink, scarce copper butterfly, Eurasian eagle-owl, African lion, polar bear…'
      },
      service6: {
        title: 'Identification of pathogens and bacterial microbiomes',
        description: 'Precise estimation of bacterial microbiomes and detection of potential presence of pathogenic agents with greater accuracy than conventional technologies.',
        pathogensLabel: 'Detected pathogens:',
        pathogens: 'Borrelia (Lyme disease), Bartonella, Yersinia, Bacillus, Leptospira…',
        partners: 'Developed with the Pasteur Institute and the University Hospital of the University of Liège.'
      },
      cta: {
        title: 'Need a personalized quote?',
        text: 'Contact us with your theme, number and type of samples.',
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
        addressText: 'GeCoLAB<br>Conservation Genetics Laboratory<br>Institute of Botany (Building B22)<br>Quartier Vallée 1<br>Chemin de la vallée 4<br><strong>4000 Liège (Sart Tilman)</strong><br>Belgium',
        phone: 'Phone',
        email: 'Email',
        mapPopup: '<strong>GeCoLAB</strong><br>Conservation Genetics Laboratory<br>Institute of Botany (Building B22)<br>Quartier Vallée 1, Chemin de la Vallée 4<br>4000 Liège (Sart Tilman), Belgium'
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
        subjectOptions: {
          quote: 'Quote request',
          info: 'Information request',
          collaboration: 'Collaboration proposal',
          other: 'Other'
        },
        message: 'Message',
        messagePlaceholder: 'Describe your project or question...',
        submit: 'Send message',
        successTitle: 'Message sent!',
        successText: 'Thank you for your message. Our team will get back to you as soon as possible.',
        sendAnother: 'Send another message'
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'fr', // default locale
  fallbackLocale: 'fr',
  messages
})

export default i18n