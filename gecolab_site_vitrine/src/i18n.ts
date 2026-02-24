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
        paragraph2: 'GeCoLAB has a wide range of genetic markers specific to many groups of animal and plant organisms, and is equipped with a molecular biology laboratory providing access to the latest sequencing technologies (Next Generation Sequencing), digital PCR and quantitative PCR.'
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