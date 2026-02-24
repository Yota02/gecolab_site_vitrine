<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Helper pour obtenir les chemins d'images avec la base URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`

// Helper pour construire l'URL DOI
const getDoiUrl = (doi: string) => {
  if (doi.startsWith('http')) {
    return doi
  }
  return `https://doi.org/${doi}`
}

// État réactif pour la recherche et le tri
const searchQuery = ref('')
const sortBy = ref('yearDesc')
const selectedYear = ref('all')

// Publications avec données enrichies
const publications = [
  {
    authors: 'Visser F., Drouilly M., -Moodley Y, Michaux J.R., Somers M.',
    year: '2023',
    title: 'Mismatch between conservation needs and actual representation of lions from West and Central Africa in in situ and ex situ conservation',
    journal: 'Conservation Letters',
    volume: '23 (2)',
    doi: 'e12949'
  },
  {
    authors: 'Beez T., JLeyhausen J., Muelle S., Michaux J.R , Verbeylen G., Nowak K. Cocchiararo B.',
    year: '2023',
    title: 'Development of a microfluidic SNP assay for lineage discrimination in the endangered hazel dormouse',
    journal: 'PREPRINT (Version 1) available at Research Square',
    volume: '',
    doi: 'https://doi.org/10.21203/rs.3.rs-3024782/v1'
  },
  {
    authors: 'Houngbégnon F., Gillet J.F., Michaux, J.R. Brostaux Y., Zébazé D., Lhoest S., Vermeulen C., Sonké B., Doucet J.L.',
    year: '2023',
    title: 'Seed dispersal by duikers in selectively logged rainforests: Overlooked dispersal of an important animal community',
    journal: 'Forest Ecology and Management',
    volume: '529',
    doi: '120650'
  },
  {
    authors: 'Wilkinson T., Talenti A., Cook E. A., Hemmink J D., Paxton E., Mutinda M., Ngulu S D., Jayaraman S, Bishop R P, Obara I, Hourlier T, Giron C.G., Labuschagne M., Atimnedi P., Keyyu J. D., Mramba F., Caron A., Cornelis D., Fyumagwa R., Auty H.R., Michaux J., Smitz N. Toye P., Robert C., Prendergast J.G.D, Morrison L.J.',
    year: '2023',
    title: 'Population genomic analysis of African buffalo (Syncerus caffer) reveals infectious disease as a significant selective influence',
    journal: 'Communications Biology',
    volume: 'In Press',
    doi: ''
  },
  {
    authors: 'Carol Esson, Gustaf Samelius, Tanja M Strand, Åke Lundkvist, Johan R Michaux, Therese Råsbäck, Tara Wahab, Tserennadmid Nadia Mijiddorj, Lee Berger, Lee F Skerratt, Matthew Low',
    year: '2023',
    title: 'The prevalence of rodent-borne zoonotic pathogens in the South Gobi desert region of Mongolia',
    journal: 'Infection Ecology & Epidemiology',
    volume: '13, 1',
    doi: '2270258'
  },
  {
    authors: 'Bronne L., Pigneur L.-M. & Michaux J.',
    year: '2023',
    title: 'Découverte de populations permanentes de Xerotricha conspurcata (Draparnaud, 1801) en Belgique et commentaires sur l\'utilisation des banques de données de séquences génétiques pour l\'identification de gastéropodes (Gastropoda : Stylommatophora : Geomitridae)',
    journal: 'MalaCo',
    volume: 'In press',
    doi: ''
  },
  {
    authors: 'Van Leeuwen P. & Michaux J.R.',
    year: '2023',
    title: 'Using eDNA for mammal inventories still needs naturalist expertise, a meta-analysis',
    journal: 'Ecology and Evolution',
    volume: '2023;13:e10788',
    doi: ''
  },
  {
    authors: 'Vescera C., van Vyve C., Smits Q., Michaux J.R.',
    year: '2023',
    title: 'All-you-can-eat buffet: a spider-specialized bat species (Myotis emarginatus) turns into a pest flies\' eater in cowsheds',
    journal: 'Plos One',
    volume: 'In press',
    doi: ''
  },
  {
    authors: 'Pauline M. L. van Leeuwen, Albrecht I. Schulte-Hostedde, Christine Fournier-Chambrillon, Pascal Fournier, Lise-Marie Pigneur, Carmen M. Aranda, Fermín Urra-Maya & Johan R. Michaux',
    year: '2023',
    title: 'A microbial tale of farming, invasion and conservation: on the gut bacteria of European and American mink in Western Europe',
    journal: 'Biol Invasions',
    volume: '25',
    doi: '1693–1709'
  },
  {
    authors: 'Leyhausen J., Cocchiararo B., Nowak C., Ansorge H., Bertolino S., Buchner S., Foppen R., Juskaitis R., La Haye M., Lang J., Michaux J.R., Verbeylen G., Von Thaden A. & Muller S.',
    year: '2022',
    title: 'Genotyping-by-sequencing based SNP discovery in a non-model rodent, the endangered hazel dormouse',
    journal: 'Conservation Genetics Resources',
    volume: '14',
    doi: '195–201'
  },
  {
    authors: 'Michaux J.R, Dyck M., Boag P., Loughed S. & Van coeverden de Groot',
    year: '2022',
    title: 'New insights on polar bear (Ursus maritimus) diet from faeces based on next Generation Sequencing technologies',
    journal: 'Artic Journal',
    volume: '74 (1)',
    doi: 'https://doi.org/10.14430/arctic72239'
  },
  {
    authors: 'Subrata S., Siregar S., André A. & Michaux J.R.',
    year: '2021',
    title: 'Identifying prey of the Javan mongoose (Urva javanica) in Java from fecal samples using next-generation sequencing',
    journal: 'Mammalian Biology',
    volume: '101:63-70',
    doi: 'DOI 10.1007/s42991-020-00086-y'
  },
  {
    authors: 'Fagbemi M., Pigneur L.M, Andre A., Smitz N., Gennotte V, Michaux  J.R., Melard C., Laleye  P., Rougeot C.',
    year: '2021',
    title: 'Genetic structure of wild and farmed Nile tilapia (Oreochromis niloticus) populations in Benin based on genome wide SNP technology',
    journal: 'Aquaculture',
    volume: '535 (2021) 736432',
    doi: ''
  },
  {
    authors: 'André A., Michaux J.R., Gaitan J. & Millien V.',
    year: '2021',
    title: 'Long-term stress level in a small mammal species undergoing range expansion',
    journal: 'Mammalia',
    volume: '',
    doi: 'https://doi.org/10.1515/ mammalia-2020-0041'
  },
  {
    authors: 'Welter D., Ruaud A., Henseler Z., De Jong H., Van Hooft W.F., Michaux J.R., Gormezano L., Waters J., Youngblut N. & Ley R.',
    year: '2021',
    title: '"Free-living, psychrotrophic bacteria of the genus Psychrobacter are descendents of pathobionts"',
    journal: '3;6(2):e00258-21',
    volume: '',
    doi: 'doi: 10.1128/mSystems.00258-21'
  },
  {
    authors: 'Latinne A., Chen H.W, Kuo C.C., Singleton G., Stuart A., Malbas F., Demanche C., Chabe M., Michaux J.R. & Morand S.',
    year: '2021',
    title: 'Revisiting the Pneumocystis host specificity paradigm and transmission ecology in wild Southeast Asian rodents',
    journal: 'Infection, Genetics and Evolution',
    volume: '93',
    doi: 'https://doi.org/10.1016/j.meegid.2021.104978'
  },
  {
    authors: 'Andriollo T., Michaux J.R. & Ruedi M.',
    year: '2021',
    title: 'Food for everyone: differential feeding habits of cryptic bat species inferred from DNA metabarcoding',
    journal: 'Molecular Ecology',
    volume: '30(18):4584-4600',
    doi: 'doi: 10.1111/mec.16073'
  },
  {
    authors: 'Maciej Szewczyk, Carsten Nowak, Pavel Hulva, Joachim Mergeay, Astrid V. Stronen, Barbora Černá Bolfíková, Sylwia D. Czarnomska, Tom A. Diserens, Viktar Fenchuk, Michał Figura, Arjen de Groot, Andżelika Haidt, Michael M. Hansen, Hugh Jansman, Gesa Kluth, Iga Kwiatkowska, Karolina Lubińska, Johan R. Michaux, Natalia Niedźwiecka, Sabina Nowak, Kent Olsen, Ilka Reinhardt, Maciej Romański, Laurent Schley, Steve Smith, Renata Špinkytė-Bačkaitienė, Przemysław Stachyra, Kinga M. Stępniak, Peter Sunde, Philip F. Thomsen, Tomasz Zwijacz-Kozica, Robert W. Mysłajek',
    year: '2021',
    title: 'Genetic support for the current discrete conservation unit of the Central European wolf population',
    journal: 'Wildlife Biology',
    volume: '(2):wlb.00809',
    doi: 'https://doi.org/10.2981/wlb.00809'
  },
  {
    authors: 'Skorupski J., Michaux J.R. & Śmietana P.',
    year: '2021',
    title: 'A meta-analytical investigation of the gap between measured and predicted inter-population genetic diversity in species of high conservation concern - the case of the critically endangered European mink Mustela lutreola L., 1761 Genes',
    journal: 'Genes',
    volume: '12(10):1555',
    doi: 'DOI:10.3390/genes12101555'
  },
  {
    authors: 'LIM M., BLANC F., MICHAUX J., PIGNEUR L.-M., GILLET F., MARC D., PONCET É. & NÉMOZ M.',
    year: '2021',
    title: 'Étude comparative de la densité et du déplacement des Desmans des Pyrénées Galemys pyrenaicus (É. Geoffroy Saint-Hilaire, 1811) par une méthode non invasive',
    journal: 'Naturae',
    volume: '(17): 233-242',
    doi: 'https://doi.org/10.5852/naturae2021a17'
  },
  {
    authors: 'Mohammed Nambyl A. Fagbémi, Lise-Marie Pigneur, Adrien André, Nathalie Smitz, Vincent Gennotte, Johan R. Michaux, Charles Mélard, Philippe A. Lalèyè, Carole Rougeot',
    year: '2021',
    title: 'Genetic structure of wild and farmed Nile tilapia (Oreochromis niloticus) populations in Benin based on genome wide SNP technology',
    journal: 'Aquaculture',
    volume: '535',
    doi: 'https://doi.org/10.1016/j.aquaculture.2021.736432'
  },
  {
    authors: 'Latinne A., Navascués M., Pavlenko M., Kartavtseva I., Ulrich R.G., Tiouchichine M.L., Catteau G., Sakka H., Quéré J.P., Chelomina G., Bogdanov A., Stanko M., Hang L, Neumann K., Henttonen H. & Michaux J.R.',
    year: '2020',
    title: 'Phylogeography of the Striped Field Mouse, Apodemus agrarius (Rodentia: Muridae), throughout its distribution range in the Palearctic region',
    journal: 'Mammalian Biology',
    volume: '100 (1)',
    doi: '19-31 https://doi.org/10.1007/s42991-019-00001-0'
  },
  {
    authors: 'Chevret P., Renaud S., Helvaci Z., Ulrich R., Quéré, J.P. & Michaux J.R.',
    year: '2020',
    title: 'Genetic structure, ecological versatility, and skull shape differentiation in Arvicola water voles (Rodentia, Cricetidae)',
    journal: 'Journal of Zoological Systematics and Evolutionary Research',
    volume: 'Wiley, In press',
    doi: '⟨10.1111/jzs.12384⟩. ⟨hal-02624896⟩'
  },
  {
    authors: 'Bourgarel, M.; Noël, V.; Pfukenyi, D.; Michaux, J.R, André, A.; Becquart, P.; Cerqueira, F.; Barrachina, C.; Boué, V.; Talignani, L.; Matope, G.; Missé, D.; Morand, S.; Liégeois, F.',
    year: '2019',
    title: 'Next-Generation Sequencing on Insectivorous Bat Guano: An Accurate Tool to Identify Arthropod Viruses of Potential Agricultural Concern',
    journal: 'Viruses',
    volume: '11',
    doi: '1102'
  },
  {
    authors: 'Esson, C., Skerratt, L. F., Berger, L., Malmsten, J., Strand, T., Lundkvist, Å., Järhult, J. D., Michaux, J.R, Mijiddorj, T. N., Bayrakçısmith, R., Mishra, C., & Johansson, Ö.',
    year: '2019',
    title: 'Health and zoonotic Infections of snow leopards Panthera unica in the South Gobi desert of Mongolia',
    journal: 'Infection ecology & epidemiology',
    volume: '9(1)',
    doi: '1604063 https://doi.org/10.1080/ 20008686.2019.1604063'
  },
  {
    authors: 'Michaux J.R, Hurner H., Krystufek B., Sara M., Ribas A., Ruch T., Vekhnik V. & Renaud S.',
    year: '2019',
    title: 'Consequence of past anthropogenic forest fragmentation on the genetic structure of European mammals: the example of the edible dormouse (Glis glis)',
    journal: 'Biological Journal of the Linnean Society',
    volume: '126 (4) :836-851',
    doi: ''
  },
  {
    authors: 'Andriollo T, Gillet F, Michaux JR & Ruedi M.',
    year: '2019',
    title: 'The menu varies with metabarcoding practices: A case study with the bat Plecotus auritus',
    journal: 'PLoS ONE',
    volume: '14(7): e0219135',
    doi: 'https://doi. org/10.1371/journal.pone.0219135'
  },
  {
    authors: 'Pigneur L-M, Caublot G, Fournier-Chambrillon C, Fournier P, Girralda-Carrera G, Grémillet X, Le Roux B., Marc D, Simonnet F, Smitz N., Sourp E., Steinmetz J., Urra-Maya F. & Michaux JR',
    year: '2019',
    title: 'Current genetic admixture between relictual populations might enhance the recovery of an elusive carnivore, the European otter (Lutra lutra)',
    journal: 'Conservation genetics',
    volume: '',
    doi: 'https://doi.org/10.1007/s10592-019-01199-9'
  },
  {
    authors: 'Pigneur L-M, Michaux J, Jacob G',
    year: '2018',
    title: 'Apport de la génétique pour l\'étude de la dynamique des populations de Loutre d\'Europe Lutra lutra (L., 1758) en France',
    journal: 'Naturae',
    volume: '(in press)',
    doi: ''
  },
  {
    authors: 'Mike Heddergott, Sandra Steeb, Natalia Osten-Sacken, Peter Steinbach, Simone Schneider, Jacques P. Pir, Franz Müller, Lise-Marie Pigneur, Alain C. Frantz ;',
    year: '2018',
    title: 'Serological survey of feline viral pathogens in free-living European wildcats (Felis s. silvestris) from Luxembourg',
    journal: 'Archives of Virology',
    volume: 'ISSN 1432-8798',
    doi: ''
  },
  {
    authors: 'Christine Fournier-Chambrillon, Jordi Torres, Jordi Miquel, Adrien André, Johan Michaux, Karin Lemberger, Gloria Giralda Carrera, Pascal Fournier ;',
    year: '2018',
    title: 'Severe parasitism by Versteria mustelae (Gmelin, 1790) in the critically endangered European mink Mustela lutreola (Linnaeus, 1761) in Spain',
    journal: 'Parasitology Research',
    volume: '; ISSN :1432-1955',
    doi: ''
  },
  {
    authors: 'Biffi M., Lafaille P., Jabiol J., André A., Gillet F., Lamothe S., Michaux J.R., Buisson L.',
    year: '2017',
    title: 'Comparison of diet and prey selectivity of the Pyrenean desman and the Eurasian water shrew using next-generation sequencing methods',
    journal: 'Mammalian Biology',
    volume: '87 (2017) 176–184',
    doi: ''
  },
  {
    authors: 'Neumann K., Yiğit N., Fritzsche P., Çolak E., Feoktistova N., Surov N. & Michaux J.R.',
    year: '2017',
    title: 'Genetic Structure of the Turkish hamster (Mesocricetus brandti)',
    journal: 'Mammalian Biology',
    volume: '86',
    doi: '84-91'
  },
  {
    authors: 'Biffi M., Gillet F., Laffaille P., Aulagnier S., Blanc F., Colas F., Galan M., Némoz M., Tiouchichine M.-L, Buisson L. & Michaux J.R.',
    year: '2017',
    title: 'Novel insights into the diet of the Pyrenean desman Galemys pyrenaicus using next generation sequencing molecular analyses',
    journal: 'Journal of Mammalogy',
    volume: '87 176–184',
    doi: ''
  },
  {
    authors: 'André A., Millien V., Galan M., Ribas A. & Michaux J. R.',
    year: '2017',
    title: 'Effects of parasite and historic driven selection on the diversity and structure of a MHC-II gene in a small mammal species (Peromyscus leucopus) undergoing range expansion',
    journal: 'Evolutionary Ecology',
    volume: '',
    doi: 'DOI 10.1007/s10682-017-9898-z'
  },
  {
    authors: 'André A., Mouton A., Millien V. & Michaux J.R.',
    year: '2017',
    title: 'Livermicrobiome of Peromyscus leucopus, a key reservoir host species for emerging infectious diseases in North America',
    journal: 'Infection, Genetics and Evolution',
    volume: '52',
    doi: '10–18'
  },
  {
    authors: 'Mouton A., Grill A., Mortelliti A., Sara M., Krystufek B., Buchner S., Lang J., Adamik P., Randi E., Amori G., Elmeros M., Verbeylen G., Dorenbosch M., Schulz B., Aloise G., Matur F, Michaux J.R.',
    year: '2017',
    title: 'Evolutionary history and species delimitations: a case study of the hazel dormouse, Muscardinus avellanarius',
    journal: 'Conservation Genetics',
    volume: '18',
    doi: '181-197'
  },
  {
    authors: 'Gillet F., Cabria Garrido  M.T., Blanc  F., Fournier-Chambrillon  C., Némoz  M., Sourp  E., Vial-Novella  C, Zardoya  R., Aulagnier  S. & Michaux J.R.',
    year: '2017',
    title: 'Evidence of a fine-scale genetic structure for the endangered Pyrenean desman (Galemys pyrenaicus) in the French Pyrenees',
    journal: 'Journal of Mammalogy',
    volume: '98 (2):523–532',
    doi: ''
  },
  {
    authors: 'Oromi N., Michaux J.R. & Denoël M.',
    year: '2016',
    title: 'High gene flow between alternative morphs and the persistence of facultative paedomorphosis',
    journal: 'Scientific Reports',
    volume: '',
    doi: 'DOI: 10.1038/srep32046'
  },
  {
    authors: 'Alfano N., Michaux J.R., Fabre P.H., Morand S., Alpin K., Tsangaras K, Löber U, Fitriana Y, Semiadi G., Ishida Y, Helgen K., Roca A.L., EidenM.V., Greenwood A.D.',
    year: '2016',
    title: 'An endogenous gibbon ape leukemia virus (GALV) identified in a rodent (Melomys sp.) from Indonesia',
    journal: 'Journal of Virology',
    volume: '26;90(18):8169-80',
    doi: ''
  },
  {
    authors: 'Torres, J., Miquel, J., Fournier-Chambrillon, C., André, A., Maya, F. U., Carrera, G. G., & Fournier, P.',
    year: '2016',
    title: 'First report of Filaria martis Gmelin, 1790 in the European mink, Mustela lutreola (Linnaeus, 1761)',
    journal: 'Parasitology research',
    volume: '115(6)',
    doi: '2499-2503'
  },
  {
    authors: 'Ovidio, M., Hanzen, C., Gennotte, V., Michaux, J.R., Benitez, J.-P., & Dierckx, A.',
    year: '2016',
    title: 'Is adult translocation a credible way to accelerate the recolonization process of Chondrostoma nasus in a rehabilitated river?',
    journal: 'Cybium',
    volume: '40(1)',
    doi: '43-49'
  },
  {
    authors: 'Smitz N., Van Hooft W.F., Heller R., Cornélis D., Chardonnet P., Kraus R. & Michaux J.R.',
    year: '2016',
    title: 'Genome-wide single nucleotide polymorphism (SNPs) identification and characterization on a non-model organism, the African buffalo (Syncerus caffer), using next generation sequencing',
    journal: 'Mammalian Biology',
    volume: '81',
    doi: '595–60'
  },
  {
    authors: 'Pages M., Fabre P.-H., Musser G., Fitriana Y. Fjeldsaa J., Jennings A., Kennedy J., Michaux J.R., Semiadi G., Supriatna N., Helgen K.',
    year: '2016',
    title: 'Molecular phylogeny of Southeast Asian arboreal murine rodents',
    journal: 'Zoologica Scripta',
    volume: '45',
    doi: '349–364'
  },
  {
    authors: 'Goffard A., Demanche C., Arthur L., Pinçon C., Michaux J.R. & Dubuisson J.',
    year: '2015',
    title: 'Alphacoronaviruses Detected in French Bats are Phylogeographically Linked to Coronaviruses of European Bats',
    journal: 'Viruses',
    volume: '7',
    doi: '6279–6290; doi:10.3390/v7122937'
  },
  {
    authors: 'Renaud S., Quéré J.P. & Michaux J.R.',
    year: '2015',
    title: 'Biogeographic variations in woodmice : testing for the rôle of morphological variation as a line of least résistance to evolution',
    journal: 'Cambrigue Studies in Morphology and Molecules : New paradigms in Evolutionary Biology. Evolution of the Rodents : advance in Phylogeny, Paleontology and Fonctional Morphology',
    volume: '300-322',
    doi: 'DOI: https://doi.org/10.1017/CBO9781107360150.012'
  },
  {
    authors: 'Gillet F., Tiouchichine ML., Galan M., Blanc F., Némoz M., Aulagnier S.,  &Michaux JR.',
    year: '2015',
    title: 'A new method to identify the endangered Pyrenean desman and to study its diet, using next generation sequencing from faeces',
    journal: 'Mammalian Biology',
    volume: '80',
    doi: '505–509'
  },
  {
    authors: 'Colak R. , Karacan GO, Kandemir I, Colak E., Kankilic T., Yigit N, & Michaux JR.',
    year: '2015',
    title: 'Genetic variations of Turkish bank vole, Myodes glareolus (Mammalia:Rodentia), in northern Anatolia, inferred from mtDNA',
    journal: 'Mitochondrial DNA',
    volume: '',
    doi: 'DOI: 10.3109/19401736.2015.1089537'
  },
  {
    authors: 'Cabria M.T., Gonzalez E.G., Gomez-Moliner B. J., Michaux J.R. & Zardoya R.',
    year: '2015',
    title: 'Patterns of genetic variation of the endangered European mink (Mustela lutreola L., 1761)',
    journal: 'BMC Evol. Biol.',
    volume: '',
    doi: 'DOI 10.1186/s12862-015-0427-9'
  },
  {
    authors: 'Morand S., Bordes F., Hsuan‐Wien C, Claude J., Cosson J.F., Galan M., Czirják G., Greenwood A.D., Latinne A., Michaux J.R., Ribas A.',
    year: '2015',
    title: 'Global parasite and Rattus rodent invasions: The consequences for rodent‐borne diseases',
    journal: 'Integrative zoology',
    volume: '',
    doi: 'doi: 10.1111/1749-4877.12143'
  },
  {
    authors: 'Lalis A, Leblois R., Liefried S., Ouarour A., Beeravolu C., Michaux J.R., Hamani A., Denys C. Nicolas V.',
    year: '2015',
    title: 'Geographic and demographic history of the wood mouse (Apodemus sylvaticus) in North Africa: a comparison of fossil and genetic data',
    journal: 'Journal of Zoological Systematics and Evolutionary Research',
    volume: '',
    doi: 'DOI: 10.1111/jzs.12111'
  },
  {
    authors: 'Demanche C.&Deville M., Barriel V., Pottier M.,  Viscogliosi E., Dei Cas E., Morand S., Michaux J.R, Guillot J.',
    year: '2015',
    title: 'What do Pneumocystisorganisms tell us about the phylogeography of their hosts? The case of the woodmouse Apodemus sylvaticus in continental Europe and western mediterranean islands',
    journal: 'Plos One',
    volume: '10 (4)',
    doi: ', e0120839'
  },
  {
    authors: 'Blasdell, K., Bordes, F., Chaisiri, K., Chaval, Y., Claude, J., Cosson, J.-F., Latinne, A., Michaux, J.R., Morand, S., Pagès, M., & Tran, A.',
    year: '2015',
    title: 'Progress on research on rodents and rodent-borne zoonoses in Southeast Asia',
    journal: 'Wildlife Research',
    volume: '42 (2) ; 98-107',
    doi: ''
  },
  {
    authors: 'Charbonnel A., Buisson L. Biffi M., D’Amico F., Besnard A., Aulagnier S., Blanc F., Gillet F., Lacaze V., Michaux J.R., Némoz M., Pagé C., Sanchez‐Perez J-M, Sauvage S., Laffaille P.',
    year: '2015',
    title: 'Integrating hydrological features and  genetically validated occurrence data in occupancy modeling of an endemic and endangered semi‐aquatic mammal species, Galemys pyrenaicus',
    journal: 'Biological Conservation',
    volume: '184',
    doi: '182-192'
  },
  {
    authors: 'Gillet F., Tiouchichine M.L., Galan M.,  Blanc F., Némoz M., Aulagnier S., Michaux J.R.',
    year: '2015',
    title: 'A new method to identify the endangered Pyrenean desman (Galemys pyrenaicus) and to study its diet, using next generation sequencing from faeces',
    journal: 'Mammalian Biology',
    volume: '80',
    doi: '505–509'
  },
  {
    authors: 'Latinne A., Meynard C., Herbreteau V., Waengsothorn S., Morand S. & Michaux J.R.',
    year: '2015',
    title: 'Influence of past and future climate changes on the distribution of three Southeast Asian murine rodents',
    journal: 'Journal of Biogeography',
    volume: '42 (9)',
    doi: 'DOI:10.1111/jbi.12528'
  },
  {
    authors: 'Pisano J., Condamine F.L., Lebedev V., Bannikova A., Quéré J.P., Shenbrot G., Pagès M.  & Michaux J.R.',
    year: '2015',
    title: 'Out-of-Himalaya: The impact of past Asian environmental changes on the evolutionary and biogeographical history of Dipodoidea (Rodentia)',
    journal: 'Journal of Biogeography',
    volume: '42 (5)',
    doi: '856-870'
  },
  {
    authors: 'Smitz N., Berthouly C., Cornelis D., Heller R., Van Hooft W.F., Chardonnet P., Prins H.H.T., De Iongh H.H., Caron A. & Michaux J.R.',
    year: '2015',
    title: 'Impact of ancient and recent habitat fragmentation on the genetic structure of southern populations of buffalo (Syncerus caffer)',
    journal: 'BMC Evol. Biol',
    volume: '14 (1)',
    doi: '203'
  },
  {
    authors: 'Hartmann S., Hasenkamp N., Mayer J., Michaux J.R., Morand S., Mazzoni C.J. , Roca A.L. & Alex D. Greenwood.',
    year: '2015',
    title: 'Endogenous murine leukemia rétroviral variation across wild European and inbred strains of house mouse',
    journal: 'BMC Genomics',
    volume: '16:613',
    doi: ''
  },
  {
    authors: 'Gillet F., Cabria M.T., Némoz M., Blanc F., Fournier-Chambrillon C., Sourp E., Vial-Novella C., Aulagnier S. & Michaux J.R.',
    year: '2014',
    title: 'PCR-RFLP identification of the endangered Pyrenean desman, Galemys pyrenaicus (Soricomorpha, Talpidae), based on faecal DNA',
    journal: 'Mammalia',
    volume: '(Online)',
    doi: '1864-1547'
  },
  {
    authors: 'Sakka H., Henttonen H., Olsson G. & Michaux J.R.',
    year: '2015',
    title: 'Co-phylogeography between the Bank Vole (Myodes glareolus) and one of its nematode specific parasites Heligmosomum mixtum',
    journal: 'Acta Parasitologica',
    volume: '60 (1)',
    doi: '85-98'
  },
  {
    authors: 'Tsangaras K., Wales N., Sicheritz-Pontén T., Ishida Y., Rasmussen S., Raghavan M., Michaux J.R., Morand S., Roca A., M. Gilbert T.P., Greenwood A.D.',
    year: '2014',
    title: 'COCHAP: COnCatenation Hybridization cAPture enriches small genomes using short PCR products',
    journal: 'Plos One',
    volume: '9 (10)',
    doi: 'DOI: 10.1371/journal.pone.0109101'
  },
  {
    authors: 'Tsangaras K., Kolokotronis S.O., Ulrich R.G., Morand S., Michaux J.R. & Greenwood A.D.',
    year: '2014',
    title: 'Negative purifying selection drives prion and doppel protein evolution in primates, bovids and rodents',
    journal: 'Molecular Biology & Evolution',
    volume: '79, 12',
    doi: '20-20'
  },
  {
    authors: 'Frosch C, Kraus R., Angst C., Allgöwer R., Michaux J.R., Teubner J. & Nowak C.',
    year: '2014',
    title: 'The genetic legacy 1 of multiple beaver reintroductions in Central Europe',
    journal: 'Plos One',
    volume: '9, 10',
    doi: '10.1371/journal.pone.0097619'
  },
  {
    authors: 'Fontaine M., Roland K., Calves I., Austerlitz F., Tolley K.A., Birkun A., Ferreira M., Jauniaux T., Llavona A., Oztürk B., Öztürk A., Ridoux V., Rogan E., Sequeira M., Siebert U., Vikingsson G.A., Borrell A., Michaux J.R. & Aguilar A.',
    year: '2014',
    title: 'Postglacial climate changes and rise of three ecotypes of harbour porpoises in western Palearctic waters',
    journal: 'Molecular Ecology',
    volume: '23',
    doi: '3306-3321'
  },
  {
    authors: 'Llirós, M., Inceoğlu, Ö., García-Armisen, T., Anzil, A., Leporcq, B., Pigneur, L. M., ... & Servais, P.',
    year: '2014',
    title: 'Bacterial community composition in three freshwater reservoirs of different alkalinity and trophic status',
    journal: 'PloS one',
    volume: '9(12)',
    doi: 'e116145'
  },
  {
    authors: 'Smitz, N., Cornélis, D., Chardonnet, P., Caron, A., de Garine-Wichatitsky, M., Jori, F., Pigneur, L. M,... & Kanapeckas, K. L.',
    year: '2014',
    title: 'Genetic structure of fragmented southern populations of African Cape buffalo (Syncerus caffer caffer)',
    journal: 'BMC evolutionary biology',
    volume: '14(1)',
    doi: '203'
  },
  {
    authors: 'Pigneur, L. M., Marescaux, J., Roland, K., Etoundi, E., Descy, J. P., & Van Doninck, K.',
    year: '2014',
    title: 'Phylogeny and androgenesis in the invasive Corbicula clams (Bivalvia, Corbiculidae) in Western Europe',
    journal: 'BMC Evolutionary Biology',
    volume: '11(1)',
    doi: '147'
  },
  {
    authors: 'Pigneur L.-M., Caublot G., Fournier-Chambrillon C., Fournier P., Michaux J.',
    year: '2014',
    title: 'Sur les traces de la Loutre dans le Limousin...',
    journal: 'Echo du PNA Loutre',
    volume: '7',
    doi: '5-7'
  },
  {
    authors: 'Pigneur L.-M., Caublot G., Fournier-Chambrillon C., Fournier P., Girralda- Carrera G., Marc D., Simonnet F., Sourp E., Steinmetz J., Urra-Maya F.,Michaux J.',
    year: '2014',
    title: 'Génétique de la conservation de la Loutre d’Europe en France',
    journal: 'Actes des 11èmes rencontres Bourgogne-Nature et 37e colloque francophone de Mammalogie (SFEPM)',
    volume: '',
    doi: '35-39'
  },
  {
    authors: 'Senn H., Ogden R., Frosch C., Munclinger P., Campbell-Palmer R., Durka W., Kraus R., Saveljev A., Nowak C., Stubbe A., Stubbe M., MichauxJ.R., Samjaa M., Ulevivius A. & Rosell F.',
    year: '2014',
    title: 'Nuclear and mitochondrial genetic structure in the Eurasian beaver (Castor fiber) – implications for future réintroductions',
    journal: 'Evolutionary Applications Journal',
    volume: '7',
    doi: '645-662'
  },
  {
    authors: 'Fabre PH, Pages M., Musser G., Fitriana Y. Fjeldsaa J., Jennings A., Kennedy J., Helgen K.',
    year: '2013',
    title: 'A new genus of rodent from Wallacea (Rodentia: Muridae: Murinae: Rattini) and its implication for biogeography and Indo- Pacific Rattini systematics',
    journal: 'Zoological Journal of the Linnean Society',
    volume: '169',
    doi: '408-447'
  },
  {
    authors: 'Latinne A., Waengsothorn S. & Michaux J.R.',
    year: '2013',
    title: 'Murinae rodent diversity in Thai limestone karsts: a phylogenetic approach',
    journal: 'Systematics and Biodiversity',
    volume: '3',
    doi: '323-344'
  },
  {
    authors: 'Navia D. N., Mendoça R.S., Ferragut F., Miranda L. C., Trincado R.C., Michaux J.R., Navajas M.',
    year: '2013',
    title: 'Integration of DNA-based delimitation of species and morphology reveals cryptic diversity in Brevipalpus mites (Acari: Tenuipalpidae)',
    journal: 'Zoologica Scripta',
    volume: '42',
    doi: '406-426'
  },
  {
    authors: 'Latinne A., Galan M., Waengsothorn S., Michaux J.R.',
    year: '2013',
    title: 'Diet analysis of three Leopoldamys species using next-generation sequencing from faeces.Cave and Karst Studies',
    journal: 'Cave and Karst Studies',
    volume: ', 76',
    doi: '139-145'
  },
  {
    authors: 'Latinne A., Chaval Y., Waengsothorn S., Rojanadilok P., Eiamampa K., Sribuarod K., Herbreteau V., Morand S. & Michaux J.R.',
    year: '2013',
    title: 'IsLeopoldamys neilli (Rodentia, Muridae) a synonym of Leopoldamys herberti? A reply to Balakirev et al.',
    journal: 'Zootaxa',
    volume: '3731 (4): 589–598',
    doi: ''
  },
  {
    authors: 'Smitz N., Berthouly C., Cornelis D., Heller R., Van Hooft W.F., Chardonnet P., Prins H.H.T., De Iongh H.H., Caron A. & Michaux J.R.',
    year: '2013',
    title: 'A Pan-African phylogeographical study of the African buffalo: investigating subspecies divergence',
    journal: 'Plos One',
    volume: '8',
    doi: '1-17'
  },
  {
    authors: 'Lebedev, V., Bannikova, A., Pagès, M., Pisano, J., Michaux, J.R, and Shenbrot, G.',
    year: '2013',
    title: 'Molecular phylogeny and systematics of Dipodoidea: a test of morphological hypotheses',
    journal: 'Zoologica Scripta',
    volume: ': n/a-n/a',
    doi: ''
  },
  {
    authors: 'Pigneur L.-M., Marc D., Fournier P., Fournier-Chambrillon C., Steinmetz J., Rieu L., Giralda-Carrera G., Urra F., Van Doninck K., Michaux J.R.',
    year: '2013',
    title: 'Etude génétique préliminaire de quelques populations de Loutres en France et Navarre',
    journal: 'Actes du 36e',
    volume: '',
    doi: ''
  },
  {
    authors: 'Pinel‐Alloul, B., André, A., Legendre, P., Cardille, J. A., Patalas, K., & Salki, A.',
    year: '2011',
    title: 'Large‐scale geographic patterns of diversity and community structure of pelagic crustacean zooplankton in Canadian lakes',
    journal: 'Global Ecology and Biogeography',
    volume: '22(7)',
    doi: '784-795'
  },
  {
    authors: 'Pigneur, L. M., Marescaux, J., Roland, K., Etoundi, E., Descy, J. P., & Van Doninck, K.',
    year: '2011',
    title: 'Phylogeny and androgenesis in the invasive Corbicula clams (Bivalvia, Corbiculidae) in Western Europe',
    journal: 'BMC Evolutionary Biology',
    volume: '11(1)',
    doi: '147'
  }
]

// Publications filtrées et triées
const filteredPublications = computed(() => {
  let filtered = publications.filter(pub => {
    const matchesSearch = searchQuery.value === '' ||
      pub.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesYear = selectedYear.value === 'all' || pub.year === selectedYear.value

    return matchesSearch && matchesYear
  })

  // Tri
  filtered.sort((a, b) => {
    if (sortBy.value === 'yearDesc') {
      return parseInt(b.year) - parseInt(a.year)
    } else if (sortBy.value === 'yearAsc') {
      return parseInt(a.year) - parseInt(b.year)
    } else if (sortBy.value === 'titleAsc') {
      return a.title.localeCompare(b.title)
    } else if (sortBy.value === 'titleDesc') {
      return b.title.localeCompare(a.title)
    }
    return 0
  })

  return filtered
})

// Liste des années disponibles
const availableYears = computed(() => {
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => parseInt(b) - parseInt(a))
  return years
})

// Fonction pour effacer les filtres
const clearFilters = () => {
  searchQuery.value = ''
  selectedYear.value = 'all'
  sortBy.value = 'yearDesc'
}

// Options de tri
const sortOptions = [
  { value: 'yearDesc', key: 'yearDesc' },
  { value: 'yearAsc', key: 'yearAsc' },
  { value: 'titleAsc', key: 'titleAsc' },
  { value: 'titleDesc', key: 'titleDesc' }
]
</script>

<template>
  <div class="publications-page">
    <!-- Hero Section -->
    <section class="publications-hero">
      <div class="container">
        <div class="publications-hero__content">
          <h1 class="section-title">{{ t('publications.hero.title') }}</h1>
          <p class="publications-hero__lead">{{ t('publications.hero.lead') }}</p>
          <div class="publications-stats">
            <span class="publications-stats__item">{{ filteredPublications.length }} {{ t('publications.stats.totalPublications') }}</span>
            <span class="publications-stats__item">{{ t('publications.stats.yearsRange') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications -->
    <section class="publications">
      <div class="container">
        <!-- Search and Filters -->
        <div class="publications-controls">
          <div class="search-bar">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('publications.search.placeholder')"
              class="search-input"
            >
          </div>

          <div class="filters">
            <select v-model="sortBy" class="filter-select">
              <option v-for="option in sortOptions" :key="option.value" :value="option.value">
                {{ t(`publications.filters.sortOptions.${option.key}`) }}
              </option>
            </select>

            <select v-model="selectedYear" class="filter-select">
              <option value="all">{{ t('publications.filters.allYears') }}</option>
              <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
            </select>

            <button @click="clearFilters" class="clear-filters-btn">
              {{ t('publications.filters.clearFilters') }}
            </button>
          </div>
        </div>

        <!-- Results Info -->
        <div v-if="searchQuery || selectedYear !== 'all'" class="results-info">
          <p>{{ filteredPublications.length }} publication{{ filteredPublications.length !== 1 ? 's' : '' }} trouvée{{ filteredPublications.length !== 1 ? 's' : '' }}</p>
        </div>

        <!-- Publications List -->
        <div v-if="filteredPublications.length > 0" class="publications__list">
          <div v-for="pub in filteredPublications" :key="pub.title" class="publication-card">
            <div class="publication-card__year">{{ pub.year }}</div>
            <div class="publication-card__content">
              <h3 class="publication-card__title">{{ pub.title }}</h3>
              <p class="publication-card__authors">{{ pub.authors }}</p>
              <p class="publication-card__journal">{{ pub.journal }} {{ pub.volume }}</p>
              <p v-if="pub.doi" class="publication-card__doi">
                <a :href="getDoiUrl(pub.doi)" target="_blank" rel="noopener noreferrer">
                  DOI: {{ pub.doi }}
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="no-results">
          <p>{{ t('publications.search.noResults') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.publications-page {
  margin-top: var(--space-2xl);
}

.publications-hero {
  padding: var(--space-5xl) 0;
  background: linear-gradient(135deg, var(--canopy) 0%, var(--forest) 100%);
  color: var(--white);
}

.publications-hero__content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.publications-hero__lead {
  font-size: 1.25rem;
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

.publications-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.publications-stats__item {
  background: rgba(255, 255, 255, 0.1);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 20px;
  font-weight: 600;
}

/* Controls */
.publications-controls {
  margin-bottom: var(--space-3xl);
  display: grid;
  gap: var(--space-lg);
}

.search-bar {
  position: relative;
}

.search-input {
  width: 100%;
  padding: var(--space-lg);
  border: 2px solid var(--bone);
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s var(--ease-out);
}

.search-input:focus {
  outline: none;
  border-color: var(--canopy);
}

.filters {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
  flex-wrap: wrap;
}

.filter-select {
  padding: var(--space-md) var(--space-lg);
  border: 2px solid var(--bone);
  border-radius: 8px;
  background: var(--white);
  font-size: 0.9rem;
  min-width: 200px;
  cursor: pointer;
  transition: border-color 0.3s var(--ease-out);
}

.filter-select:focus {
  outline: none;
  border-color: var(--canopy);
}

.clear-filters-btn {
  padding: var(--space-md) var(--space-lg);
  background: var(--canopy);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s var(--ease-out);
}

.clear-filters-btn:hover {
  background: var(--forest);
}

/* Results Info */
.results-info {
  margin-bottom: var(--space-xl);
  text-align: center;
  color: var(--slate);
  font-weight: 600;
}

/* No Results */
.no-results {
  text-align: center;
  padding: var(--space-4xl) 0;
  color: var(--slate);
}

/* Publications List */
.publications {
  padding: var(--space-2xl) 0;
  background: var(--mist);
}

.publications__list {
  display: grid;
  gap: var(--space-xl);
}

/* Publication Card */
.publication-card {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--bone);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-out);
}

.publication-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.publication-card__year {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--canopy);
  color: var(--white);
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 12px;
}

.publication-card__content {
  flex: 1;
}

.publication-card__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--ink);
  margin-bottom: var(--space-sm);
  line-height: 1.4;
}

.publication-card__authors {
  color: var(--canopy);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.publication-card__journal {
  color: var(--slate);
  font-size: 0.95rem;
  margin-bottom: var(--space-xs);
}

.publication-card__doi a {
  color: var(--forest);
  font-size: 0.9rem;
  font-style: italic;
  text-decoration: none;
  transition: color 0.3s var(--ease-out);
}

.publication-card__doi a:hover {
  color: var(--canopy);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .publications-hero {
    padding: var(--space-3xl) 0;
  }

  .publications-hero__lead {
    font-size: 1.1rem;
  }

  .publications-stats {
    gap: var(--space-lg);
  }

  .publications-controls {
    margin-bottom: var(--space-2xl);
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-select {
    min-width: auto;
  }

  .publication-card {
    flex-direction: column;
    text-align: center;
  }

  .publication-card__year {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }

  .publication-card__title {
    font-size: 1.1rem;
  }
}
</style>