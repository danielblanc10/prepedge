export const QUESTIONS = [
  {
    id: "val_001", cat: "Valuation", difficulty: "fondamental",
    q: "Quelles sont les trois grandes méthodes de valorisation ? Dans quel contexte privilégier chacune ?",
    a: "1. Comparables boursiers (trading comps) : multiples EV/CA, EV/EBITDA, EV/EBIT, PER de sociétés cotées similaires. Rapide, basé sur le marché en temps réel. Valeur minoritaire sans prime de contrôle.\n\n2. Comparables de transactions (deal comps) : mêmes multiples issus de deals passés. Intègre la prime de contrôle (+20-30% vs. boursiers). Données plus rares et moins récentes.\n\n3. DCF : valeur intrinsèque basée sur l'actualisation des flux futurs. Très sensible aux hypothèses (WACC, taux de croissance terminal).\n\nOrdre par valeur décroissante : deal comps > DCF > trading comps.\nMéthode patrimoniale : peu utilisée, sert de plancher, adaptée aux foncières ou holdings."
  },
  {
    id: "val_002", cat: "Valuation", difficulty: "fondamental",
    q: "Quelle est la différence entre Enterprise Value et Equity Value ? Donnez la formule de passage.",
    a: "L'EV est la valeur de l'actif économique total, indépendamment de la structure financière.\nL'Equity Value est la part revenant aux seuls actionnaires.\n\nFormule :\nEV = Capitalisation boursière + Dette nette + Intérêts minoritaires - SME\nDette nette = Dette LT + Dette CT + IFRS 16 + Découvert - Trésorerie\n\nRègle des multiples :\nCA, EBITDA, EBIT -> multiples d'EV.\nRésultat net -> PER, multiple d'Equity Value."
  },
  {
    id: "val_003", cat: "Valuation", difficulty: "intermédiaire",
    q: "Pourquoi les multiples de transaction sont-ils toujours supérieurs aux multiples boursiers ?",
    a: "Deux raisons principales :\n\n1. Prime de contrôle : l'acquéreur paie un supplément pour obtenir le contrôle de la société. Généralement 20-30% au-dessus du cours de bourse.\n\n2. Synergies anticipées : les deal comps intègrent les synergies que l'acquéreur espère réaliser. Les trading comps valorisent la société en standalone.\n\nVocabulaire : les multiples boursiers sont des valeurs minoritaires. Les multiples de transaction sont des valeurs majoritaires."
  },
  {
    id: "val_004", cat: "Valuation", difficulty: "fondamental",
    q: "Quels sont les multiples les plus courants en M&A et leurs ordres de grandeur ?",
    a: "EV/CA : 0.5x - 2x. Utilisé quand la société est déficitaire ou early-stage.\n\nEV/EBITDA : 6x - 8x en général. Le plus utilisé en M&A. Peut monter à 15-20x pour les SaaS ou la santé.\n\nEV/EBIT : 8x - 10x. Plus précis car intègre la D&A.\n\nPER : 10x - 30x. Très variable. Peu utilisé en M&A advisory.\n\nEV/ARR : utilisé pour les SaaS. Peut atteindre 5x - 15x selon le profil de croissance."
  },
  {
    id: "val_005", cat: "Valuation", difficulty: "intermédiaire",
    q: "Comment valoriser une société non cotée à partir de comparables boursiers ?",
    a: "On applique les multiples sectoriels des comparables cotés aux soldes comptables de la société cible.\n\nMais une société non cotée est décotée pour deux raisons :\n\n1. Illiquidité : les titres ne peuvent pas être vendus sur un marché liquide. Décote de 15-30%.\n\n2. Taille : les PME sont souvent plus petites, plus concentrées. Décote de 10-20% supplémentaire.\n\nEn pratique : on applique d'abord les multiples boursiers, puis une décote globale de 20-30%. On confronte ensuite avec le DCF et les deal comps pour construire un football field."
  },
  {
    id: "val_006", cat: "Valuation", difficulty: "avancé",
    q: "Pourquoi Walmart, avec 2x le chiffre d'affaires d'Apple, vaut 6x moins en capitalisation boursière ?",
    a: "La réponse tient aux marges, à la qualité des flux et aux perspectives de croissance.\n\nWalmart : retailer à très faibles marges (~2-3% de marge nette), forte intensité capitalistique, croissance lente.\n\nApple : marge nette ~25%, écosystème verrouillant les clients, revenus récurrents en forte croissance, pricing power exceptionnel.\n\nEn valorisation, ce qui compte n'est pas le CA mais la capacité à générer des free cash flows durables. Pour 1 euro de CA, Apple génère beaucoup plus de cash flow qu'un euro de CA Walmart.\n\nLeçon : les multiples EV/CA ne sont pertinents que comparés au sein d'un même secteur."
  },
  {
    id: "val_007", cat: "Valuation", difficulty: "avancé",
    q: "Qu'est-ce qu'un conglomérat discount ? Comment valoriser un conglomérat ?",
    a: "Un conglomérat discount est la décote appliquée à un groupe diversifié par rapport à la somme des valorisations de ses filiales prises séparément.\n\nPourquoi cette décote ?\n- Opacité : les investisseurs ont du mal à évaluer chaque division.\n- Allocation inefficiente du capital.\n- Management éparpillé.\n\nMéthode : somme des parties (SOTP). Pour chaque division, on applique les multiples sectoriels correspondants, puis on additionne les EV, on déduit la dette nette et les coûts de holding.\n\nLa décote de conglomérat est ensuite appliquée, généralement 10-20%."
  },
  {
    id: "val_008", cat: "Valuation", difficulty: "intermédiaire",
    q: "Comment l'évolution des taux d'intérêt impacte-t-elle les multiples de valorisation ?",
    a: "La relation est inverse : quand les taux montent, les multiples baissent.\n\nMécanisme via le DCF : quand les taux montent, le WACC augmente, la valeur actualisée des flux diminue. Pour un même EBITDA, l'EV est plus faible.\n\nImpact historique :\nTaux bas (2015-2021) : multiples EV/EBITDA très élevés (10-14x mid-market).\nTaux hauts (2022-2024) : compression des multiples (8-10x mid-market).\n\nSecteurs les plus sensibles : tech et growth (longue duration des flux).\nSecteurs plus résistants : distribution, services essentiels."
  },
  {
    id: "dcf_001", cat: "DCF", difficulty: "fondamental",
    q: "Expliquez la méthode DCF de A à Z. Étapes, formules et limites.",
    a: "Le DCF repose sur le principe qu'une entreprise vaut la somme actualisée de tous ses flux de trésorerie futurs.\n\nÉtapes :\n1. Projection des FCFF sur 5 à 10 ans\n2. Calcul du WACC\n3. Calcul de la Valeur Terminale (souvent 60-80% de la valeur totale)\n4. Actualisation : EV = somme [FCFF_t / (1+WACC)^t] + VT / (1+WACC)^n\n5. Bridge : EV - dette nette = Equity Value\n\nFormule du FCFF :\nEBIT x (1-t) + D&A - Capex - Variation BFR = FCFF\n\nLimites :\n- Très sensible au WACC et au taux de croissance terminal g\n- La valeur terminale représente souvent 70-80% de la valeur totale\n- Difficile sur les sociétés non rentables ou cycliques"
  },
  {
    id: "dcf_002", cat: "DCF", difficulty: "fondamental",
    q: "Quelle est la différence entre FCFF et FCFE ? Quel taux d'actualisation pour chacun ?",
    a: "FCFF (Free Cash Flow to Firm) : flux disponibles pour TOUS les apporteurs de capitaux, avant impact du financement.\nFormule : EBIT x (1-t) + D&A - Capex - delta BFR\nActualisé au WACC -> donne l'Enterprise Value\n\nFCFE (Free Cash Flow to Equity) : flux disponibles pour les actionnaires uniquement, après remboursement des intérêts et du capital.\nFormule : FCFF - Intérêts x (1-t) - Remboursement dettes + Nouvelles dettes\nActualisé au Cost of Equity (Ke) -> donne directement l'Equity Value\n\nErreur classique : ne jamais actualiser des FCFF au Cost of Equity."
  },
  {
    id: "dcf_003", cat: "DCF", difficulty: "intermédiaire",
    q: "Comment calculer la Valeur Terminale ? Quelles sont les méthodes ?",
    a: "La valeur terminale représente souvent 60-80% de la valeur totale du DCF.\n\n1. Gordon-Shapiro (perpétuité à croissance constante) :\nVT = FCF_n x (1+g) / (WACC - g)\ng = taux de croissance à l'infini (1-2%, proche du PIB nominal)\nAttention : g doit toujours être < WACC.\n\n2. Multiple de sortie :\nVT = EBITDA_n x multiple de sortie\nEn apparence moins arbitraire mais circulaire.\n\n3. Flux normatif extrapolé.\n\nEn pratique : les banques croisent les méthodes 1 et 2 pour valider la cohérence du DCF."
  },
  {
    id: "dcf_004", cat: "DCF", difficulty: "avancé",
    q: "Quels sont les principaux retraitements à effectuer dans un DCF ?",
    a: "L'objectif est d'obtenir des flux normalisés et représentatifs de la performance récurrente.\n\nCharges non récurrentes : restructurations, litiges, plus-values de cession. On les ajoute à l'EBITDA pour obtenir l'EBITDA ajusté.\n\nCapex de maintenance vs. de croissance : en DCF, on ne projette souvent que le Capex de maintenance.\n\nStock-based compensation (SBC) : charge non-cash à réintégrer si on part du résultat net.\n\nVariation du BFR normalisée : on utilise le BFR en % du CA historique normalisé.\n\nImpôt normatif : on applique le taux légal sur l'EBIT, pas l'impôt réel."
  },
  {
    id: "wacc_001", cat: "WACC", difficulty: "fondamental",
    q: "Qu'est-ce que le WACC ? Donnez la formule et expliquez chaque composante.",
    a: "Le WACC est le taux de rendement minimum exigé par l'ensemble des pourvoyeurs de fonds.\n\nFormule :\nWACC = Ke x E/(D+E) + Kd x (1-t) x D/(D+E)\n\nKe = Cost of Equity (CAPM)\nKd = coût de la dette brute\nt = taux d'imposition (la dette est fiscalement déductible)\nE = valeur de marché des capitaux propres\nD = valeur de marché de la dette\n\nPoints clés :\n- Les pondérations sont en valeur de marché, jamais comptable\n- Le coût de la dette est toujours après impôt\n- Pour une société non cotée : on utilise des bêtas de comparables cotés"
  },
  {
    id: "wacc_002", cat: "WACC", difficulty: "fondamental",
    q: "Qu'est-ce que le Bêta ? Comment interpréter beta=1, beta>1, beta<1, beta<0 ?",
    a: "Le bêta mesure la sensibilité d'un actif aux fluctuations du marché (risque systématique).\n\nbeta = 1 : l'actif se comporte exactement comme le marché.\nbeta > 1 : amplifie les mouvements du marché. Typique des cycliques, tech, luxe.\n0 < beta < 1 : atténue les fluctuations. Typique des utilities, alimentation, pharmacie.\nbeta = 0 : décorrélé du marché (dette cotée, or).\nbeta < 0 : évolue en sens inverse du marché. Très rare. Exemples : or, fonds short.\n\nFormule de Hamada :\nbeta_levier = beta_désendetté x [1 + (1-t) x D/E]"
  },
  {
    id: "wacc_003", cat: "WACC", difficulty: "fondamental",
    q: "Comment calculer le Cost of Equity ? Donnez la formule du CAPM.",
    a: "Formule CAPM :\nKe = Rf + beta x (Rm - Rf)\n\nRf = taux sans risque : OAT 10 ans en France (~3-3.5% en 2024-2025)\nbeta = bêta levier de l'entreprise\nRm - Rf = prime de risque du marché actions, généralement 5-6% en Europe\n\nPour une société non cotée :\n1. Identifier des comparables cotés, collecter leurs bêtas leviers\n2. Désendetter : beta_désendetté = beta_levier / [1 + (1-t) x D/E]\n3. Calculer la médiane des bêtas désendettés\n4. Ré-endetter avec la structure financière cible\n5. Appliquer au CAPM"
  },
  {
    id: "wacc_004", cat: "WACC", difficulty: "avancé",
    q: "Entre deux sociétés identiques, l'une sans dette et l'autre avec 50% de dette, laquelle a le WACC le plus élevé ?",
    a: "La société SANS dette a le WACC le plus élevé. C'est une question piège classique.\n\nPourquoi ? La dette a deux effets sur le WACC :\n1. Le coût de la dette (Kd) est structurellement inférieur au coût de l'equity (Ke).\n2. La dette est fiscalement déductible (bouclier fiscal), réduisant encore son coût réel à Kd x (1-t).\n\nEn remplaçant de l'equity cher par de la dette moins chère et déductible, on réduit mécaniquement le WACC.\n\nLimite : au-delà d'un certain niveau d'endettement, le risque de défaut fait remonter le coût de la dette et de l'equity, et le WACC remonte."
  },
  {
    id: "wacc_005", cat: "WACC", difficulty: "avancé",
    q: "Donnez un exemple de secteur ou actif avec un bêta négatif. Pourquoi ?",
    a: "Aucune société cotée n'a structurellement un bêta négatif durable. Certains actifs oui :\n\nL'or : valeur refuge par excellence. En période de stress, les investisseurs achètent de l'or, son prix monte quand les actions baissent. Bêta historique proche de -0.1 à -0.3.\n\nObligations d'État (flight to quality) : quand les actions chutent, les capitaux fuient vers les bons du trésor.\n\nFonds de couverture short-only : structurés pour gagner quand les marchés baissent.\n\nUtilité en gestion de portefeuille : un actif à bêta négatif réduit la volatilité globale et améliore le ratio de Sharpe."
  },
  {
    id: "acc_001", cat: "Accounting", difficulty: "fondamental",
    q: "Quels sont les trois états financiers ? Décrivez leur rôle et leurs liens.",
    a: "1. Compte de résultat (P&L) : mesure la performance sur une période. Du CA au résultat net. Indicateurs clés : EBITDA, EBIT, résultat net.\n\n2. Bilan : photographie du patrimoine à un instant T. Actif = Passif.\n\n3. Cash flow statement : explique la variation de trésorerie. CFO (opérationnel), CFA (investissement), CFF (financement).\n\nLiens :\n- Le résultat net alimente les capitaux propres du bilan.\n- La D&A est une charge non-cash du P&L, réajoutée dans le CFO.\n- La variation du BFR apparaît dans les actifs courants du bilan et dans le CFO.\n- Le Capex réduit la trésorerie (CFA) et augmente les immobilisations au bilan."
  },
  {
    id: "acc_002", cat: "Accounting", difficulty: "fondamental",
    q: "Impact d'une augmentation de 100 euros de D&A sur les trois états financiers (taux IS = 25%).",
    a: "LA question classique. A connaître par coeur.\n\nP&L :\nD&A +100 -> EBIT -100 -> Résultat avant impôt -100 -> IS -25 -> Résultat net -75\n\nBilan :\nImmobilisations nettes : -100 (actif)\nCapitaux propres : -75 (via résultat net)\nImpôt différé actif : +25\n\nCash Flow Statement :\nLa D&A est non-cash -> réajoutée dans le CFO : +100\nImpact IS (économie fiscale) : -25\nVariation nette de trésorerie : +75\n\nConclusion : la D&A n'a aucun impact direct sur la trésorerie. Elle génère uniquement un bouclier fiscal de 25 euros."
  },
  {
    id: "acc_003", cat: "Accounting", difficulty: "intermédiaire",
    q: "Impact sur les 3 états financiers d'un emprunt de 100 euros amortissable sur 10 ans à 5% (année 1, IS = 30%).",
    a: "P&L :\nFrais financiers : -5 (5% x 100)\nEconomie d'IS : +1.5\nRésultat net : -3.5\n\nBilan :\nDette financière : -10 (remboursement capital)\nTrésorerie : -13.5 (-10 capital -5 intérêts +1.5 IS)\nCapitaux propres : -3.5 (résultat net)\n\nCash Flow Statement :\nCFO : -3.5\nCFF : remboursement capital -10, intérêts -5, IS récupéré +1.5\nVariation de trésorerie : -13.5\n\nVérification bilan : actif -13.5 = passif (-10 dette - 3.5 CP) OK\n\nNote : la dette nette ne varie que de -3.5, pas -13.5, car on a remboursé 10 de dette avec 10 de trésorerie."
  },
  {
    id: "acc_004", cat: "Accounting", difficulty: "fondamental",
    q: "Qu'est-ce que le BFR ? Comment se calcule-t-il ?",
    a: "BFR = Créances clients + Stocks - Dettes fournisseurs\n\nC'est le besoin de financement généré par le cycle d'exploitation.\n\nBFR positif (cas le plus fréquent) : l'entreprise finance ses clients et stocks avant de recevoir le cash. Typique de l'industrie, du B2B.\n\nBFR négatif : l'entreprise est payée avant de payer ses fournisseurs. Source de financement gratuite. Typique de la grande distribution, des abonnements prépayés.\n\nImpact cash flow :\nHausse du BFR = consommation de trésorerie\nBaisse du BFR = génération de trésorerie\n\nDans le DCF : une augmentation du BFR réduit le FCFF."
  },
  {
    id: "acc_005", cat: "Accounting", difficulty: "intermédiaire",
    q: "Qu'est-ce que l'EBITDA ? Pourquoi est-il préféré au résultat net en M&A ?",
    a: "EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization\n= CA - Charges d'exploitation hors D&A\n\nPourquoi l'utiliser en M&A ?\n\n1. Neutralité vis-à-vis de la structure financière : exclut les frais financiers.\n2. Neutralité vis-à-vis de la fiscalité : exclut l'IS, comparable entre juridictions.\n3. Neutralité vis-à-vis des politiques comptables : exclut la D&A.\n4. Proxy du cash flow opérationnel.\n\nLimite : l'EBITDA ignore les besoins en investissement (Capex) et la gestion du BFR. Une société avec un fort EBITDA mais un Capex intense peut générer peu de free cash flow réel."
  },
  {
    id: "acc_006", cat: "Accounting", difficulty: "intermédiaire",
    q: "Quelle est la différence entre Deferred Revenue et Accrued Income ?",
    a: "Deferred Revenue (revenu différé) :\nCash reçu AVANT la livraison du service. L'entreprise a une obligation future.\nPassif au bilan (dette envers le client).\nExemple : abonnement annuel SaaS payé d'avance, billet d'avion vendu 6 mois avant.\n\nAccrued Income (produit à recevoir) :\nService rendu AVANT facturation ou encaissement. L'entreprise a une créance.\nActif au bilan.\nExemple : intérêts courus non échus, honoraires de conseil pour mission en cours.\n\nMnémotechnique :\nDeferred = on a le cash mais on n'a pas encore travaillé.\nAccrued = on a travaillé mais on n'a pas encore le cash."
  },
  {
    id: "acc_007", cat: "Accounting", difficulty: "intermédiaire",
    q: "Qu'est-ce que le DuPont analysis ? Comment décompose-t-il le ROE ?",
    a: "L'analyse DuPont décompose le ROE en trois drivers :\n\nROE = (Résultat net / CA) x (CA / Actif total) x (Actif total / Capitaux propres)\n     = Marge nette x Rotation des actifs x Levier financier\n\nInterprétation :\n1. Marge nette : profitabilité par unité de CA.\n2. Rotation des actifs : efficience dans l'utilisation des actifs. Asset-light = rotation élevée.\n3. Levier financier : l'endettement amplifie le ROE mais aussi les pertes.\n\nUtilité : identifier les leviers d'amélioration du rendement. Une société peut avoir un ROE élevé via des marges (luxe), via la rotation (distribution), ou via le levier (banques)."
  },
  {
    id: "acc_008", cat: "Accounting", difficulty: "avancé",
    q: "Quels sont les principaux ratios de levier financier ? Comment les interpréter ?",
    a: "Dette nette / EBITDA : le plus utilisé. Nombre d'années de cash flow opérationnel pour rembourser la dette. Seuil acceptable : <3x. LBO : souvent 4-6x à l'entrée.\n\nDette nette / Capitaux propres (gearing) : poids de la dette par rapport aux fonds propres. Gearing >100% = plus de dette que de fonds propres.\n\nEBITDA / Frais financiers (Interest Coverage) : capacité à payer les intérêts. Doit être >2x minimum. Les covenants bancaires fixent souvent un seuil (ex. >3x).\n\nDSCR : (EBITDA - Capex - Impôts) / Service total de la dette. Mesure la capacité à rembourser le principal. Doit être >1."
  },
  {
    id: "acc_009", cat: "Accounting", difficulty: "avancé",
    q: "Qu'est-ce que le goodwill ? Comment se forme-t-il et comment est-il traité en IFRS ?",
    a: "Goodwill = Prix payé - Juste valeur des actifs nets identifiables acquis.\n\nIl représente les éléments non comptabilisables séparément : marque, clientèle, capital humain, synergies.\n\nTraitement IFRS :\n- Inscrit à l'actif du bilan de l'acquéreur.\n- Non amorti (contrairement aux normes françaises).\n- Soumis à un test de dépréciation annuel (impairment test).\n- Si valeur recouvrable < valeur comptable -> dépréciation comptabilisée.\n- La dépréciation est non-cash et irréversible.\n\nSignal en M&A : un goodwill élevé signale que l'acquéreur a payé une prime significative."
  },
  {
    id: "acc_010", cat: "Accounting", difficulty: "intermédiaire",
    q: "Que se passe-t-il au BPA quand une société rachète ses propres actions ? Et si elle finance ce rachat par dette ?",
    a: "Rachat financé par trésorerie :\nLe nombre d'actions diminue. Le résultat net reste inchangé. BPA augmente. Toujours relutif.\n\nRachat financé par dette :\nLe nombre d'actions diminue (positif sur le BPA). Mais la dette génère des frais financiers qui réduisent le résultat net (négatif).\n\nL'impact net dépend du rendement de l'action vs. le coût de la dette :\nSi coût de la dette après IS < EPS yield (= 1/PER) : opération relutive.\nSi coût de la dette après IS > EPS yield : opération dilutive.\n\nEn 2021-2022 (taux bas), quasi tous les buybacks financés par dette étaient relutifs. En 2024 avec des taux à 4-5%, le calcul est moins favorable."
  },
  {
    id: "lbo_001", cat: "LBO", difficulty: "fondamental",
    q: "Qu'est-ce qu'un LBO ? Principe, structure, leviers de création de valeur.",
    a: "Un LBO (Leveraged Buyout) est l'acquisition d'une entreprise financée majoritairement par de la dette. Un fonds PE crée un holding qui rachète la cible. Les FCF de la cible remontent au holding pour rembourser la dette.\n\nStructure type :\nEquity fonds : 30-40% du prix\nDette senior : 50-60%\nDette mezzanine / high yield : 10-20%\n\nTrois leviers de création de valeur :\n1. Croissance de l'EBITDA : organique ou externe (bolt-ons)\n2. Expansion du multiple de sortie : vendre plus cher en multiple\n3. Désendettement : remboursement progressif de la dette\n\nTRI cible : 20-25% annuel. MoM cible : 3x-5x sur 5 ans."
  },
  {
    id: "lbo_002", cat: "LBO", difficulty: "fondamental",
    q: "Quelles sont les caractéristiques d'un bon candidat LBO ?",
    a: "Cash flows prévisibles et récurrents : faible cyclicité, contrats long terme, rétention clients élevée.\n\nEBITDA margins élevées et stables : idéalement >15-20%. Couverture suffisante des frais financiers.\n\nAsset-light : peu de Capex. Chaque euro d'EBITDA se convertit en FCF.\n\nPosition concurrentielle forte : pricing power, barrières à l'entrée.\n\nManagement solide et aligné via un management package.\n\nPotentiel de build-up : secteur fragmenté, acquisitions bolt-on possibles.\n\nVoie de sortie claire : revente à un industriel, secondary buyout, ou IPO dans 5-7 ans.\n\nSecteurs favoris : services aux entreprises B2B, healthcare, logiciels, distribution spécialisée."
  },
  {
    id: "lbo_003", cat: "LBO", difficulty: "intermédiaire",
    q: "Comment calculer le TRI et le MoM d'un LBO ?",
    a: "MoM (Money-on-Money) :\nMoM = Equity à la sortie / Equity à l'entrée\n\nTRI :\nTRI = (MoM)^(1/n) - 1\nn = nombre d'années de détention\n\nExemple : MoM = 3.5x sur 5 ans\nTRI = (3.5)^(0.2) - 1 = 28.5%\n\nRègle mentale rapide :\n2x en 5 ans = ~15% TRI\n3x en 5 ans = ~25% TRI\n5x en 5 ans = ~38% TRI\n\nTest oral Stifel :\nMoM = Equity sortie / Equity entrée\nIRR = (MoM)^(1/N) - 1\nA connaître pour le faire de tête en 30 secondes."
  },
  {
    id: "lbo_004", cat: "LBO", difficulty: "intermédiaire",
    q: "Quels sont les différents types de dette dans un LBO ? Expliquez leur séniorité.",
    a: "En ordre de séniorité décroissante :\n\n1. Dette senior sécurisée (Term Loan A/B, RCF) :\nPrioritaire, garantie sur les actifs. Taux le plus bas (Euribor + 3-4%).\n\n2. Dette senior non sécurisée (Senior Notes) :\nObligataire, pas de garantie. Taux plus élevé.\n\n3. Dette mezzanine :\nHybride entre dette et equity. Taux élevé (10-15%) + equity kicker.\n\n4. High Yield Bonds :\nObligations à haut rendement. Rendements 7-12%.\n\n5. Equity du fonds :\nDernier recours en cas de liquidation. Potentiellement tout perdu, mais levier de rendement le plus élevé."
  },
  {
    id: "lbo_005", cat: "LBO", difficulty: "avancé",
    q: "Comment fonctionne un build-up en PE ? Pourquoi les fonds y ont-ils recours ?",
    a: "Un build-up consiste à acquérir une plateforme puis des bolt-ons pour consolider un secteur fragmenté.\n\nLogique principale : l'arbitrage de multiple.\nOn achète des petites sociétés à 4-6x EBITDA. Consolidées, elles sont revendues à 8-10x. Exemple : 3 bolt-ons achetés à 5x intégrés dans un groupe vendu à 9x = création de valeur mécanique de 4x par euro d'EBITDA acquis.\n\nAutres avantages :\n- Synergies (fonctions support, achats, cross-selling)\n- Croissance accélérée sans lenteur de l'organique\n- Taille critique améliorant le positionnement\n\nSecteurs propices : services à la personne, distribution spécialisée, cabinets comptables, laboratoires.\n\nRisques : digestion difficile, intégration IT et culturelle."
  },
  {
    id: "ma_001", cat: "M&A", difficulty: "fondamental",
    q: "Décrivez le processus sell-side structuré (enchères) de A à Z.",
    a: "Phase 1 : Préparation (4-6 semaines)\nMandatement de la banque. Préparation du teaser (anonyme), de l'IM (60-100 pages), des modèles financiers. Identification et tiering des acheteurs potentiels.\n\nPhase 2 : Premier tour (4-6 semaines)\nEnvoi du teaser. Signature des NDA. Distribution de l'IM. Réception des Offres Non Engageantes (NBO). Sélection d'une short-list (3-6 acheteurs).\n\nPhase 3 : Deuxième tour (6-8 semaines)\nAccès à la data room. Management presentations. Réception des Offres Fermes (Best and Final Offers). Sélection du preferred bidder.\n\nPhase 4 : Exclusivité et closing\nNégociation finale du SPA. Satisfaction des conditions suspensives. Closing et paiement.\n\nDurée totale : 4-6 mois."
  },
  {
    id: "ma_002", cat: "M&A", difficulty: "intermédiaire",
    q: "Qu'est-ce qu'un teaser et un IM ? Quel contenu dans chacun ?",
    a: "Teaser (2-4 pages, anonyme, avant NDA) :\nObjectif : susciter l'intérêt sans révéler l'identité.\nContenu : description générale du secteur, faits saillants financiers (CA, EBITDA, croissance), investment highlights, processus et calendrier.\n\nInformation Memorandum (60-100 pages, confidentiel, après NDA) :\nObjectif : fournir toutes les informations pour formuler une offre éclairée.\nStructure :\n1. Executive summary\n2. Présentation du secteur\n3. Profil de la société\n4. Avantages compétitifs\n5. Management et organisation\n6. IT et systèmes\n7. Analyse financière historique + business plan\n8. Informations juridiques"
  },
  {
    id: "ma_003", cat: "M&A", difficulty: "intermédiaire",
    q: "Qu'est-ce que la formule du bridge EV / Equity Value ? Déroulez chaque composante.",
    a: "EV = Equity Value + Dette financière nette + Intérêts minoritaires - SME + Autres retraitements\n\nOu dans l'autre sens :\nEquity Value = EV - Dette nette - Minoritaires + SME +/- Autres\n\nDette financière nette :\n= Dette LT + Dette CT + IFRS 16 + Découvert bancaire - Trésorerie\n\nIntérêts minoritaires :\nPart du capital des filiales que le groupe ne détient pas. On les ajoute car l'EBITDA est consolidé à 100%.\n\nSME (Sociétés Mises en Equivalence) :\nParticipations 20-50% non consolidées. On les déduit car leur résultat n'est pas dans l'EBITDA.\n\nAutres : provisions retraites, earn-outs, stock-options."
  },
  {
    id: "ma_004", cat: "M&A", difficulty: "fondamental",
    q: "Quelle est la différence entre un processus bilatéral et un processus structuré ?",
    a: "Processus structuré (enchères) :\nPlusieurs acheteurs en compétition, plusieurs tours. Tension concurrentielle maximale.\nAvantages vendeur : prix optimal, position de négociation forte.\nInconvénients : long (4-6 mois), coûteux, signal marché.\n\nProcessus bilatéral :\nNégociation avec un seul acheteur. Rapide (2-3 mois), discret.\nAvantages : rapidité, confidentialité, conditions sur mesure possibles.\nInconvénients : pas de tension concurrentielle, prix potentiellement sous-optimal.\n\nEn pratique :\nLes banques conseillent souvent un processus semi-structuré (3-5 acheteurs ciblés) pour combiner les avantages des deux approches."
  },
  {
    id: "ma_005", cat: "M&A", difficulty: "intermédiaire",
    q: "Quels sont les types de fusions-acquisitions ? Horizontale, verticale, conglomérale.",
    a: "Horizontale : acquisition d'un concurrent direct dans le même secteur.\nObjectif : économies d'échelle, part de marché, réduction de la compétition.\nExemple : BNP Paribas / Fortis.\n\nVerticale : acquisition d'un fournisseur (upstream) ou d'un distributeur (downstream).\nObjectif : sécuriser les approvisionnements, contrôler la distribution.\nExemple : LVMH achetant ses propres boutiques.\n\nConglomérale : acquisition dans un secteur non lié.\nObjectif : diversification du risque.\nSouvent décotée (conglomerate discount).\nExemples : Berkshire Hathaway, anciens conglomérats (GE, Vivendi)."
  },
  {
    id: "ma_006", cat: "M&A", difficulty: "avancé",
    q: "Pourquoi un acquéreur éviterait-il de payer 100% cash même s'il en a la capacité ?",
    a: "1. Partage du risque d'exécution :\nEn payant en actions, les actionnaires de la cible deviennent actionnaires de l'entité combinée. Ils partagent le risque d'intégration.\n\n2. Signal sur la valorisation :\nPayer en actions peut signaler que l'acquéreur pense que ses propres actions sont surévaluées.\n\n3. Préservation de la liquidité :\nUtiliser toute la trésorerie fragilise le bilan et réduit la flexibilité future.\n\n4. Optimisation fiscale :\nDans certaines juridictions, un paiement en actions permet aux vendeurs de différer l'imposition des plus-values.\n\n5. Effet relutif/dilutif :\nSelon le P/E relatif de l'acquéreur et de la cible, émettre des actions peut être relutif sur le BPA."
  },
  {
    id: "ma_007", cat: "M&A", difficulty: "avancé",
    q: "Qu'est-ce que la dilution / relution en M&A ? Comment se calcule-t-elle ?",
    a: "BPA = Résultat Net / Nombre d'actions\n\nAcquisition relutive : BPA post > BPA pré.\nAcquisition dilutive : BPA post < BPA pré.\n\nCalcul :\n1. BPA pré = RN acquéreur / Actions acquéreur\n2. RN combiné = RN acquéreur + RN cible + Synergies - Intérêts sur dette\n3. Actions combinées = Actions acquéreur + Nouvelles actions émises\n4. BPA post = RN combiné / Actions combinées\n\nRègle pratique :\nPaiement cash : généralement relutif si la cible est bénéficiaire.\nPaiement actions : dilutif si P/E cible > P/E acquéreur."
  },
  {
    id: "ma_008", cat: "M&A", difficulty: "avancé",
    q: "Qu'est-ce qu'un earn-out ? Dans quels cas est-il utilisé ?",
    a: "Un earn-out est un mécanisme de prix différé et conditionnel. Une partie du prix est payée après closing, sous condition que la cible atteigne certains objectifs.\n\nExemple : prix total 100 dont 70 au closing + 30 si l'EBITDA de l'année N+2 dépasse 10M.\n\nQuand l'utiliser ?\n- Réduction de l'asymétrie d'information : le vendeur connaît mieux la cible.\n- Désaccord sur la valorisation : l'acquéreur doute des projections.\n- M&A de startups : difficile de valoriser sur l'EBITDA actuel.\n\nRisques :\n- Conflits post-acquisition si le management maximise les métriques d'earn-out au détriment de la valeur long terme.\n- Complexité des clauses de calcul."
  },
  {
    id: "ecm_001", cat: "ECM / DCM", difficulty: "intermédiaire",
    q: "Quelle est la différence entre un IPO classique et une cotation directe (direct listing) ?",
    a: "IPO classique :\nEmission de nouvelles actions. Syndicat de banques underwriters. Roadshow institutionnel. Book building. Lock-up de 180 jours. Prix fixé avant la première cotation.\n\nCotation directe (direct listing) :\nAucune nouvelle action émise, pas de levée de fonds. Pas d'underwriters. Prix déterminé par l'offre et la demande le jour J. Pas de lock-up obligatoire. Moins chère (pas de commission underwriting ~5-7%).\n\nAvantages direct listing : pas de dilution, transparence sur le prix.\nInconvénients : plus volatile le jour J, aucune garantie de prix. Réservé aux sociétés déjà très connues (Spotify, Slack, Coinbase)."
  },
  {
    id: "ecm_002", cat: "ECM / DCM", difficulty: "intermédiaire",
    q: "Comment réagissent les marchés obligataires et actions à une baisse des taux directeurs de la BCE ?",
    a: "Marchés obligataires :\nPrix des obligations existantes monte (relation prix/taux inversée). Les obligations à taux fixe déjà émises ont des coupons supérieurs aux nouvelles -> leur valeur de marché augmente. Les nouvelles émissions se font à taux plus bas.\n\nMarchés actions (impact positif en général) :\n1. Effet taux d'actualisation : WACC plus faible -> valorisations montent.\n2. Effet rotation : les obligations moins attractives -> les investisseurs se reportent sur les actions.\n\nNuances :\nSi la baisse reflète une récession : effet potentiellement négatif pour les actions.\nSecteurs les plus sensibles aux taux : tech, immobilier, utilities."
  },
  {
    id: "ecm_003", cat: "ECM / DCM", difficulty: "avancé",
    q: "Comment un prix d'obligation réagit-il à une hausse des taux ? Expliquez mathématiquement.",
    a: "La relation est inverse et mathématiquement démontrée.\n\nPrix = somme [C / (1+r)^t] + [Principal / (1+r)^n]\n\nSi r (taux de marché) augmente, le dénominateur augmente, donc le prix diminue.\n\nIntuition : si les nouvelles obligations offrent 5%, une obligation existante à 3% devient moins attractive. Son prix doit baisser jusqu'à ce que son rendement effectif soit équivalent.\n\nDuration :\nMesure la sensibilité du prix à une variation de taux.\nPour une obligation à 10 ans, une hausse de 1% des taux fait baisser le prix d'environ 8-9%.\n\nDuration modifiée : % de variation du prix pour une variation de 1 point de taux."
  },
  {
    id: "fit_001", cat: "Fit", difficulty: "fondamental",
    q: "Pourquoi le M&A ? Qu'est-ce qui vous attire par rapport au conseil ou aux marchés ?",
    a: "Points clés à aborder :\n\nLa combinaison unique d'analyse et d'impact concret : en M&A on voit l'opération se réaliser. Le deal signe, la valeur se crée ou se détruit. C'est tangible.\n\nLa diversité sectorielle : chaque mandat est un nouveau secteur à comprendre rapidement.\n\nLa rigueur analytique combinée à la dimension relationnelle : construire une valorisation rigoureuse, défendre un prix en négociation.\n\nL'exposition au top management dès le début.\n\nAncrage concret obligatoire : mentionner une expérience de stage, un deal sur lequel vous avez travaillé, ce que vous en avez appris. Les interviewers détestent les réponses théoriques non ancrées."
  },
  {
    id: "fit_002", cat: "Fit", difficulty: "fondamental",
    q: "Quel est le rôle d'un stagiaire en M&A au quotidien ? Quelles tâches concrètes ?",
    a: "Modélisation et analyse :\nConstruction de modèles de valorisation (trading comps, deal comps, DCF). Analyse sectorielle. Screening d'acquéreurs potentiels. Calcul de métriques financières.\n\nProduction de documents :\nSlides pour pitchbooks et présentations clients. Sections de l'IM. Teasers, fact sheets. Fact-checking rigoureux (AMF, rapports annuels).\n\nRecherche :\nCollecte de données financières (Capital IQ, Mergermarket, Bloomberg). Benchmark sectoriel. Cartographie des acteurs.\n\nCoordination process :\nGestion du calendrier d'enchères. Coordination avec conseils juridiques et auditeurs. Mise à jour de la data room.\n\nRéalité : les premières semaines sont du research et de la mise en forme. L'exposition client vient progressivement."
  },
  {
    id: "fit_003", cat: "Fit", difficulty: "fondamental",
    q: "Parlez-moi d'un deal récent qui vous a marqué. Comment structurer la réponse ?",
    a: "Structure recommandée en 4 temps :\n\n1. Contexte (30 sec) : secteur, taille, type d'opération, acquéreur et cible, date.\n\n2. Logique stratégique (1 min) : pourquoi cette opération ? Quelles synergies, quel repositionnement, quelle logique de marché ? Ne pas se contenter de 'c'était une grande acquisition'.\n\n3. Valorisation / financement (30 sec) : à quel multiple approximatif ? En cash, actions, dette ?\n\n4. Ce qui vous a marqué / opinion personnelle (30 sec) : apporter un angle critique. C'est ce qui différencie des autres candidats.\n\nCe qu'ils évaluent : curiosité intellectuelle, lecture du marché, capacité à avoir une opinion argumentée."
  },
  {
    id: "fit_004", cat: "Fit", difficulty: "intermédiaire",
    q: "Où avez-vous postulé à part chez nous ? Comment gérer cette question ?",
    a: "Cette question est quasi-systématique chez Oaklins, Stifel, Clairfield.\n\nCe qu'il ne faut pas dire :\n'Partout.' Sans stratégie visible.\n\nCe qu'il faut faire :\nDonner une réponse honnête et cohérente regroupée par logique. Exemple : 'Je cible principalement les boutiques M&A mid-market : j'ai des process en cours chez Rothschild, Houlihan Lokey et deux autres boutiques spécialisées mid-cap.'\n\nSi vous postulez aussi en PE ou Private Debt : assumez et expliquez la cohérence. 'Je cherche à comprendre les transactions des deux côtés de la table.'\n\nL'objectif est de montrer une vraie stratégie de carrière, pas une candidature en masse."
  },
  {
    id: "fit_005", cat: "Fit", difficulty: "fondamental",
    q: "Etes-vous au courant des horaires en M&A ? Comment répondre à cette question ?",
    a: "Cette question, posée notamment chez UBS et Oaklins, teste la maturité du candidat.\n\nCe qu'il ne faut pas dire :\n'Oui oui je suis prêt à travailler 100 heures par semaine !' (naïf et peu crédible).\n\nCe qu'il faut dire :\nMontrer une vision réaliste des exigences, que vous les avez anticipées, et que vous avez déjà géré des environnements similaires.\n\nStructure possible :\n'J'ai une bonne idée de l'investissement horaire. Mon stage chez [X] m'a exposé à des périodes intenses sur des livrables critiques. Je cherche un métier à forte intensité car je suis à un stade de ma carrière où je veux apprendre au maximum en peu de temps. Je comprends que c'est un investissement qui se paie sur les premières années.'\n\nAncrez toujours dans une expérience concrète."
  },
  {
    id: "terrain_001", cat: "Valuation", difficulty: "avancé",
    q: "Quelle méthode de valorisation donne le résultat le plus élevé et pourquoi ?",
    a: "Ordre habituel du plus élevé au plus bas :\n\n1. Comparables de transactions : incluent la prime de contrôle (20-30%) et les synergies anticipées. Valeurs majoritaires.\n\n2. DCF : intègre les perspectives de croissance et les synergies si du point de vue de l'acquéreur.\n\n3. Comparables boursiers : valeur minoritaire (sans prime de contrôle), standalone.\n\n4. Méthode patrimoniale : souvent la plus basse car basée sur les actifs historiques. Plancher de valorisation.\n\nExceptions :\nPour une société en forte décroissance, le DCF peut donner une valeur inférieure aux comparables boursiers.\n\nEn entretien : la réponse attendue est 'deal comps > DCF > trading comps', en sachant expliquer pourquoi."
  },
  {
    id: "terrain_002", cat: "Accounting", difficulty: "intermédiaire",
    q: "Qu'est-ce que le churn rate et le CAC ? Comment les combiner pour évaluer un SaaS ?",
    a: "Churn rate : % de clients ou revenus perdus sur une période.\nSeuil sain : <5-10% annuel. Churn >20% : signal de problème.\n\nCAC (Customer Acquisition Cost) : coût moyen pour acquérir un nouveau client.\nCAC = Dépenses marketing + sales / Nombre nouveaux clients\n\nLTV (Lifetime Value) = ARPU mensuel / Churn mensuel\nRevenu total qu'un client génère jusqu'à son départ.\n\nRatios clés :\nLTV/CAC > 3x : modèle économique sain.\nLTV/CAC < 1x : on acquiert des clients à perte.\n\nPayback period = CAC / (ARPU mensuel x marge brute). Idéalement < 12 mois.\n\nNRR (Net Revenue Retention) > 100% : les clients existants dépensent plus d'une année sur l'autre.\n\nMultiple de valorisation SaaS : EV/ARR (3x-15x selon profil de croissance)."
  },
  {
    id: "terrain_003", cat: "Accounting", difficulty: "intermédiaire",
    q: "49 x 51 : calculez sans calculatrice en utilisant les identités remarquables.",
    a: "Question classique de Stifel / Clairfield pour tester le calcul mental.\n\nMéthode via l'identité remarquable (a-b)(a+b) = a² - b² :\n\n49 x 51 = (50 - 1) x (50 + 1) = 50² - 1² = 2500 - 1 = 2499\n\nDémonstration :\na = 50, b = 1\n(50-1)(50+1) = 50² - 1² = 2500 - 1 = 2499\n\nPourquoi cette question en entretien ?\nElle teste la capacité à raisonner rapidement et à utiliser des outils mathématiques élégants plutôt que la force brute. En finance, calculer de tête est essentiel pour détecter des erreurs d'ordre de grandeur dans les modèles."
  },
  {
    id: "terrain_004", cat: "Brainteasers", difficulty: "avancé",
    q: "Pourquoi les bouches d'égout sont-elles rondes ? Démontrez mathématiquement.",
    a: "Réponse pratique :\nUn couvercle rond ne peut pas tomber dans son propre trou, quelle que soit l'orientation. Le diamètre est constant dans toutes les directions.\n\nDémonstration mathématique avec Pythagore :\nPour un carré de côté a : sa diagonale = a x racine(2) = 1.41a. Un couvercle carré peut tomber à travers un trou carré de même côté si on l'incline selon la diagonale (car la diagonale > côté).\n\nPour un cercle de rayon r : toute corde du cercle est au maximum égale au diamètre 2r. Il est impossible qu'une dimension du couvercle dépasse le diamètre. Le couvercle ne peut jamais passer à travers un trou de même diamètre.\n\nAutres raisons pratiques : plus facile à rouler, plus résistant aux contraintes de pression, moins coûteux à fabriquer."
  },
  {
    id: "terrain_005", cat: "Valuation", difficulty: "avancé",
    q: "Qu'est-ce qu'une prime de contrôle ? Pourquoi le DCF et les deal comps la reflètent-ils ?",
    a: "La prime de contrôle est le supplément de prix payé au-dessus du cours de bourse pour obtenir le contrôle d'une société. Généralement 20-30%.\n\nPourquoi les deal comps et le DCF l'intègrent :\nDeal comps : utilisent les prix effectivement payés lors de transactions passées, qui incluent par définition la prime de contrôle et les synergies.\nDCF : projette les flux futurs en tenant compte des synergies post-acquisition.\n\nPourquoi les trading comps ne l'intègrent pas :\nIls reflètent la valeur du marché pour une participation minoritaire, en standalone, sans synergies.\n\nConclusion : valeur minoritaire x (1 + prime de contrôle) = valeur majoritaire. La prime est la passerelle entre les deux."
  },
  {
    id: "terrain_006", cat: "M&A", difficulty: "avancé",
    q: "Qu'est-ce que la rentabilité économique vs. financière ? Quel est le lien via l'effet de levier ?",
    a: "Rentabilité économique (ROCE) :\nROCE = EBIT x (1-t) / (Capitaux propres + Dette nette)\nMesure la capacité de l'outil industriel à créer de la valeur, indépendamment du financement.\n\nRentabilité financière (ROE) :\nROE = Résultat net / Capitaux propres\nMesure le rendement pour les actionnaires.\n\nFormule de l'effet de levier :\nROE = ROCE + (ROCE - Coût de la dette après IS) x Dette / Capitaux propres\n\nInterprétation :\nSi ROCE > coût de la dette : s'endetter augmente le ROE. Effet de levier positif.\nSi ROCE < coût de la dette : s'endetter détruit de la valeur. Effet de massue.\n\nApplication LBO : fonctionne uniquement si le ROCE de la cible est supérieur au coût de la dette."
  },
  {
    id: "terrain_007", cat: "Accounting", difficulty: "avancé",
    q: "Qu'est-ce que IFRS 16 ? Quel est son impact sur les états financiers et les métriques M&A ?",
    a: "IFRS 16 (en vigueur depuis 2019) impose la comptabilisation au bilan de tous les contrats de location opérationnelle de durée > 12 mois.\n\nAvant IFRS 16 : les loyers étaient une charge d'exploitation sortant de l'EBITDA.\n\nAprès IFRS 16 :\nBilan : apparition d'un actif 'droit d'utilisation' et d'une dette de location.\nP&L : les loyers sont remplacés par une dotation aux amortissements + des charges d'intérêts.\n\nImpact sur les métriques M&A :\nEBITDA : augmente mécaniquement car les loyers sont maintenant au-dessus de la ligne EBITDA.\nDette nette : augmente de la valeur de la dette de location IFRS 16.\n\nConséquence en M&A : toujours préciser si l'EBITDA est pre-IFRS 16 ou post-IFRS 16."
  },
  {
    id: "adv_001", cat: "M&A", difficulty: "avancé",
    q: "Qu'est-ce qu'un SPA (Share Purchase Agreement) ? Quelles sont ses clauses principales ?",
    a: "Le SPA est le contrat juridique central d'une acquisition.\n\nClauses principales :\n\nPrix et mécanisme d'ajustement : prix initial, locked-box ou completion accounts, earn-outs éventuels.\n\nDéclarations et garanties (R&W) : le vendeur déclare l'exactitude des informations fournies. Si inexactes, l'acheteur peut demander une indemnisation.\n\nIndemnisation (indemnities) : certains risques identifiés en due diligence sont couverts spécifiquement.\n\nConditions suspensives : autorisation antitrust, financement obtenu, pas de MAC.\n\nMAC clause (Material Adverse Change) : l'acquéreur peut se retirer si un événement majeur négatif affecte la cible avant closing.\n\nNon-concurrence : le vendeur s'engage à ne pas concurrencer la société cédée pendant 2-3 ans."
  },
  {
    id: "adv_002", cat: "LBO", difficulty: "avancé",
    q: "Qu'est-ce qu'un management package dans un LBO ? Comment fonctionne-t-il ?",
    a: "Le management package est le mécanisme d'intéressement au capital réservé aux dirigeants clés. Son but est d'aligner les intérêts du management avec ceux du fonds.\n\nMécanisme :\nLe management investit une somme symbolique (1 à 3 ans de salaire) en actions ordinaires (sweet equity). Le fonds investit en actions de préférence.\n\nStructure de ratchet :\nSi le TRI du fonds dépasse un seuil (ex. 15%), le management reçoit un % croissant de la plus-value au-delà de ce seuil. Plus le TRI est élevé, plus le management est récompensé de façon disproportionnée.\n\nExemple simplifié :\nFonds investit 100 en equity préférentiel. Management investit 5. Si l'EV à la sortie est de 300, le fonds récupère d'abord son 100 + rendement préférentiel. Le solde donne potentiellement 15-20% au management.\n\nObjectif : mobiliser pleinement le management pour maximiser la valeur de sortie."
  }
];

export const CATEGORIES = [...new Set(QUESTIONS.map(q => q.cat))];

export function getByCategorie(cat) {
  return cat === "all" ? QUESTIONS : QUESTIONS.filter(q => q.cat === cat);
}

export function getById(id) {
  return QUESTIONS.find(q => q.id === id);
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}