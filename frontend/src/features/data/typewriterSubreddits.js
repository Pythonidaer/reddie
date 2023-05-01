const typewriterSubreddits = [
  'Home',

  'AskReddit',

  'mildlyinfuriating',

  'facepalm',

  'AmItheAsshole',

  'PublicFreakout',

  'WhitePeopleTwitter',

  'antiwork',

  'mildlyinteresting',

  'Unexpected',

  'interestingasfuck',

  'Damnthatsinteresting',

  'funny',

  'gaming',

  'LivestreamFail',

  'politics',

  'worldnews',

  'nba',

  'therewasanattempt',

  'pathofexile',

  'leagueoflegends',

  'ChatGPT',

  'pics',

  'news',

  'nextfuckinglevel',

  'movies',

  'todayilearned',

  'NoStupidQuestions',

  'memes',

  'MurderedByWords',

  'Piracy',

  'FrankOcean',

  'Minecraft',

  'tumblr',

  'shitposting',

  'OnePiece',

  'explainlikeimfive',

  'buildapc',

  'pcmasterrace',

  'MadeMeSmile',

  'Genshin_Impact',

  'ukraine',

  'DigitalCodeSELL',

  'GlobalOffensive',

  'soccer',

  'wow',

  'tifu',

  'personalfinance',

  'LoveIsBlindOnNetflix',

  'BestofRedditorUpdates',

  'Tinder',

  'anime',

  'europe',

  'ProgrammerHumor',

  'StableDiffusion',

  'ffxiv',

  'sysadmin',

  '2007scape',

  'HolUp',

  'UkraineWarVideoReport',

  'Eldenring',

  'WTF',

  'pcgaming',

  'TikTokCringe',

  'technology',

  'CombatFootage',

  'TwoXChromosomes',

  'DnD',

  'DestinyTheGame',

  'aww',

  'wallstreetbets',

  'manga',

  'Games',

  'relationship_advice',

  'videos',

  'IdiotsInCars',

  'SuccessionTV',

  'Genshin_Impact_Leaks',

  'jobs',

  'feedthebeast',

  'AskMen',

  'dataisbeautiful',

  'legaladvice',

  'DotA2',

  'unpopularopinion',

  'discordapp',

  'Jokes',

  'FashionReps',

  'maybemaybemaybe',

  'LifeProTips',

  'nfl',

  'Fauxmoi',

  'SteamDeck',

  'CasualUK',

  'cats',

  'television',

  'Overwatch',

  'Steam',

  'pettyrevenge',

  'canada',

  'classicwow',

  'formula1',

  'VALORANT',

  'sadcringe',

  'oddlyterrifying',

  'de',

  'IASIP',

  'AskUK',

  'DarkAndDarker',

  'techsupport',

  'Amd',

  'entertainment',

  'CrackWatch',

  'oddlysatisfying',

  'SquaredCircle',

  'PersonalFinanceCanada',

  'dndnext',

  'totalwar',

  'Wellthatsucks',

  'nvidia',

  'Hololive',

  'dankmemes',

  'StarWars',

  'OutOfTheLoop',

  'pokemon',

  'OldSchoolCool',

  'terriblefacebookmemes',

  'PathOfExileBuilds',

  'LeopardsAteMyFace',

  'sex',

  'NonCredibleDefense',

  'australia',

  'magicTCG',

  'CrazyFuckingVideos',

  'meirl',

  'teenagers',

  'ask',

  'cscareerquestions',

  'AskWomen',

  'OpenAI',

  'Superstonk',

  '196',

  'whatisthisthing',

  'dndmemes',

  'greentext',

  'PiratedGames',

  'copypasta',

  'TerrifyingAsFuck',

  'Whatcouldgowrong',

  'Fitness',

  'RPClipsGTA',

  'zelda',

  'NintendoSwitch',

  'nottheonion',

  'ContagiousLaughter',

  'skyrimmods',

  'residentevil',

  'books',

  'TrueOffMyChest',

  'Coachella',

  'BlackPeopleTwitter',

  'cyberpunkgame',

  'space',

  'MechanicalKeyboards',

  'chess',

  'lostarkgame',

  'wholesomememes',

  'Terraria',

  'hiphopheads',

  'learnprogramming',

  'comics',

  'Twitch',

  'MapPorn',

  'midjourney',

  'baseball',

  'apple',

  'StardewValley',

  'EscapefromTarkov',

  'Warframe',

  'Destiny',

  'Warthunder',

  'hockey',

  'Art',

  'me_irl',

  'cars',

  'Philippines',

  'offmychest',

  'gifs',

  'starterpacks',

  'PS5',

  '3Dprinting',

  'france',

  'UkrainianConflict',

  'starcitizen',

  'conspiracy',

  'travel',

  'CryptoCurrency',

  'coolguides',

  'india',

  'Futurology',

  'askscience',

  'Showerthoughts',

  'Roms',

  'ValorantCompetitive',

  'WatchPeopleDieInside',

  'Frugal',

  'Music',

  'CuratedTumblr',

  'HomeImprovement',

  'popculturechat',

  'Teachers',

  'relationships',

  'projectzomboid',

  'doordash',

  'Warhammer40k',

  'skyrim',

  'TIHI',

  'germany',

  'gamedev',

  'programming',

  'LateStageCapitalism',

  'Guildwars2',

  'inthenews',

  'IAmA',

  'Stellaris',

  'golf',

  'selfhosted',

  'Denmark',

  'runescape',

  'worldnewsvideo',

  'SkincareAddiction',

  'Animemes',

  'apexlegends',

  'OnePunchMan',

  'tf2',

  'YouShouldKnow',

  'sweden',

  'KGBTR',

  'valheim',

  'AskHistorians',

  'learnpython',

  'rust',

  'ModernWarfareII',

  'DataHoarder',

  'brasil',

  'NorthCarolina',

  'RimWorld',

  'GamingLeaksAndRumours',

  'buildapcsales',

  'Conservative',

  'ich_iel',

  'CrusaderKings',

  'eu4',

  'Cooking',

  'homelab',

  'webdev',

  'TooAfraidToAsk',

  'changemyview',

  'headphones',

  'MMA',

  'LinusTechTips',

  'hoi4',

  'hearthstone',

  'Sims4',

  'Diablo',

  'ireland',

  'melbourne',

  'kpop',

  'NoMansSkyTheGame',

  '4chan',

  'Breath_of_the_Wild',

  'unrealengine',

  'Windows10',

  'cursedcomments',

  'destiny2',

  'tax',

  'BuyItForLife',

  'spacex',

  'BeAmazed',

  '40kLore',

  'Justrolledintotheshop',

  'Scams',

  'MachineLearning',

  'diablo4',

  'ADHD',

  'awfuleverything',

  'medicalschool',

  'AbruptChaos',

  'malefashionadvice',

  'clevercomebacks',

  'civ',

  'TaylorSwift',

  'vancouver',

  'marvelstudios',

  'Monitors',

  'tiktokthots',

  'Grimdank',

  'ApplyingToCollege',

  'science',

  'deadbydaylight',

  'UKPersonalFinance',

  'Lubbock',

  'technicallythetruth',

  'gtaonline',

  'ChoosingBeggars',

  'HarryPotterGame',

  'PrequelMemes',

  'Entrepreneur',

  'netflix',

  'trashy',

  'shittymoviedetails',

  'reddeadredemption',

  'loseit',

  'ufc',

  'gachagaming',

  'LegalAdviceUK',

  'CrackSupport',

  'argentina',

  'megalophobia',

  'iphone',

  'ontario',

  'fuckcars',

  'careerguidance',

  'MouseReview',

  'PoliticalCompassMemes',

  'Plumbing',

  'Gamingcirclejerk',

  'london',

  'FortNiteBR',

  'atheism',

  'dating_advice',

  'Costco',

  'PleX',

  'harrypotter',

  'trees',

  'MarvelSnap',

  'blender',

  '2westerneurope4u',

  'DunderMifflin',

  'chicago',

  'osugame',

  'Unity3D',

  'summonerschool',

  'Pathfinder_Kingmaker',

  'AusFinance',

  'SaintMeghanMarkle',

  'HumansBeingBros',

  'MacOS',

  'ChainsawMan',

  'fightporn',

  'linux_gaming',

  'gardening',

  'lotrmemes',

  'XDefiant',

  'Finanzen',

  'PoliticalHumor',

  'stocks',

  'lakers',

  'askTO',

  'rupaulsdragrace',

  'CharacterAI',

  'Mordhau',

  'WarTalesGame',

  'PokemonInfiniteFusion',

  'factorio',

  'Polska',

  'arknights',

  'csgo',

  'horror',

  'HistoryMemes',

  'Suomi',

  'patientgamers',

  'singularity',

  'GooglePixel',

  'XboxSeriesX',

  'FragReddit',

  'Pathfinder2e',

  'firefox',

  'unitedkingdom',

  'DeepRockGalactic',

  'nonononoyes',

  'mac',

  'hardware',

  'grandorder',

  'singapore',

  'portugal',

  'AskNYC',

  'homeassistant',

  'running',

  'CFB',

  'whenthe',

  'boardgames',

  'formuladank',

  'btd6',

  'lego',

  'KimetsuNoYaiba',

  'newzealand',

  'Gundam',

  'DMAcademy',

  'recruitinghell',

  'premed',

  'Windows11',

  'elderscrollsonline',

  'Piratefolk',

  'davisvgarciahd',

  'HomeNetworking',

  'CrappyDesign',

  'China_irl',

  'MaliciousCompliance',

  'ThatsInsane',

  'Rainbow6',

  'PokemonTCG',

  'halo',

  'MagicArena',

  'investing',

  'Economics',

  'toronto',

  'Watches',

  'reactjs',

  'NatureIsFuckingLit',

  'linux',

  'CasualConversation',

  'LogitechG',

  'Fantasy',

  'MechanicAdvice',

  'Notion',

  'sydney',

  'Gunners',

  'college',

  'h3h3productions',

  'BollyBlindsNGossip',

  'Turkey',

  'bodyweightfitness',

  'blackdesertonline',

  'tearsofthekingdom',

  'EDH',

  'yugioh',

  'playrust',

  'TheSilphRoad',

  'playstation',

  'Parenting',

  'reddevils',

  'hungary',

  'linuxquestions',

  'AnarchyChess',

  'AmITheDevil',

  'Bitcoin',

  'CODWarzone',

  'software',

  'woodworking',

  'help',

  'pokemongo',

  'WorkersStrikeBack',

  'Genshin_Memepact',

  'boston',

  'whowouldwin',

  'TheOwlHouse',

  'PhotoshopRequest',

  'legaladvicecanada',

  'thesims',

  'MonsterHunter',

  'bayarea',

  'discordVideos',

  'CreditCards',

  'popheads',

  'ListOfSubreddits',

  'JoeRogan',

  'dating',

  'tipofmytongue',

  'Fallout',

  'Boruto',

  'BBBY',

  'FIFA',

  'Asmongold',

  'redscarepod',

  'LeagueOfMemes',

  'UnethicalLifeProTips',

  'sanfrancisco',

  'youtube',

  'whatcarshouldIbuy',

  'TheMandalorianTV',

  'AITAH',

  'RocketLeague',

  'Guitar',

  'oddlyspecific',

  'Python',

  'xboxone',

  'anime_irl',

  'arbeitsleben',

  'rareinsults',

  'Persona5',

  'doordash_drivers',

  'ImTheMainCharacter',

  'aws',

  'privacy',

  'startrek',

  'Ubiquiti',

  'GameDeals',

  'OculusQuest',

  'solotravel',

  'StardustCrusaders',

  'Android',

  'Advice',

  'HFY',

  'overclocking',

  'comicbooks',

  'whatsthisbug',

  'Weird',

  'NoFap',

  'xqcow',

  'PS4',

  'Office365',

  'windows',

  'rpg',

  'roblox',

  'Accounting',

  'archlinux',

  'moviecritic',

  'motorcycles',

  'LiverpoolFC',

  'ksi',

  'cycling',

  'Naruto',

  'goodanimemes',

  'csgomarketforum',

  'RealEstate',

  'Mcat',

  'iamatotalpieceofshit',

  'ottawa',

  'frugalmalefashion',

  'SatisfactoryGame',

  'boxoffice',

  'Pandabuy',

  'nosleep',

  'golang',

  'SwitchPirates',

  'Anticonsumption',

  'gameofthrones',

  'Marvel',

  'BlueLock',

  'bjj',

  'masterduel',

  'neovim',

  'csMajors',

  'manhwa',

  'Intune',

  'CitiesSkylines',

  'FinalFantasy',

  'TwoBestFriendsPlay',

  'Romania',

  'assholedesign',

  'ironscape',

  'food',

  'TwoSentenceHorror',

  'bodybuilding',

  'ShitPostCrusaders',

  'witcher',

  'Maplestory',

  'Sneakers',

  'norge',

  'synology',

  'lgbt',

  'Funnymemes',

  'real_China_irl',

  'MicrosoftRewards',

  'NukesTop5',

  'fireemblem',

  'nintendo',

  'askSingapore',

  'MemePiece',

  'CompetitiveApex',

  'DiWHY',

  'davisvgarciacrackst',

  'electricians',

  'MMORPG',

  'intel',

  'MtF',

  'Repsneakers',

  'DivinityOriginalSin',

  'footballmanagergames',

  'perfectlycutscreams',

  'aviation',

  'PowerShell',

  'Competitiveoverwatch',

  'Austin',

  'confessions',

  'msp',

  'mexico',

  'criticalrole',

  'kpopthoughts',

  'ultrawidemasterrace',

  'Drumkits',

  'FireEmblemHeroes',

  'geography',

  'Seattle',

  'ARK',

  'UFOs',

  'JustUnsubbed',

  'stalker',

  'WitchesVsPatriarchy',

  'dogs',

  'amcstock',

  'Residency',

  'teslamotors',

  'simracing',

  'NikkeMobile',

  'DIY',

  'fo4',

  'Calgary',

  'femalefashionadvice',

  'socialskills',

  'RWBY',

  'cosplaygirls',

  'marvelmemes',

  'writing',

  'meme',

  'Celebhub',

  'excel',

  'oculus',

  'JapanTravel',

  'artificial',

  '3d6',

  'NewYuzuPiracy',

  'fo76',

  'LearnJapanese',

  'notinteresting',

  'AskAnAmerican',

  'UkraineRussiaReport',

  'EliteDangerous',

  'AnimalsBeingDerps',

  'NotHowGirlsWork',

  'financialindependence',

  'uvtrade',

  'GameSale',

  'WinStupidPrizes',

  'unixporn',

  'asktransgender',

  'docker',

  'razer',

  'chrome',

  'bindingofisaac',

  'Supplements',

  'incremental_games',

  'godot',

  'networking',

  'RussiaUkraineWar2022',

  'asoiaf',

  'BokuNoHeroAcademia',

  'ShingekiNoKyojin',

  'StarWarsLeaks',

  'childfree',

  'Faces',

  'AzureLane',

  'onejob',

  'productivity',

  'IllegalLifeProTips',

  'lostredditors',

  'askcarsales',

  'IndianDankMemes',

  'southpark',

  'thinkpad',

  'chelseafc',

  'polandball',

  'tjournal_refugees',

  'BrandNewSentence',

  'Instagramreality',

  'edmproduction',

  'askgaybros',

  'yakuzagames',

  'dyinglight',

  'masseffect',

  'malaysia',

  'X4Foundations',

  'HuntShowdown',

  'japanlife',

  'KidsAreFuckingStupid',

  'tressless',

  'TheLastAirbender',

  'howto',

  'LosAngeles',

  'OverwatchUniversity',

  'guns',

  'swtor',

  'xbox',

  'TeamfightTactics',

  'math',

  'army',

  'me_irlgbt',

  'Pathfinder_RPG',

  'BlueArchive',

  'sffpc',

  'computers',

  'UnearthedArcana',

  'suns',

  'CK3AGOT',

  'smashbros',

  'CanadaPublicServants',

  'AskScienceFiction',

  'Edmonton',

  'AirForce',

  'homeowners',

  'blackmagicfuckery',

  'IBO',

  'HumansAreMetal',

  'cybersecurity',

  'JRPG',

  'GlobalOffensiveTrade',

  'TankPorn',

  'chessbeginners',

  'dadjokes',

  'AskAnAustralian',

  'korea',

  'onguardforthee',

  'AnimalCrossing',

  'fivenightsatfreddys',

  'AskCulinary',

  'bleach',

  'japan',

  'summonerswar',

  'HollowKnight',

  'blursedimages',

  'languagelearning',

  'tennis',

  'VampireSurvivors',

  'flying',

  'Eve',

  'Nootropics',

  'WorkReform',

  'imaginarymaps',

  'Construction',

  'insanepeoplefacebook',

  'lawschooladmissions',

  'assassinscreed',

  'wordington',

  'Berserk',

  'DC_Cinematic',

  'ukpolitics',

  'battlestations',

  'Celebs',

  'Seaofthieves',

  'DarkTide',

  'assettocorsa',

  'allthemods',

  'Netherlands',

  'Cricket',

  'furry_irl',

  'vanderpumprules',

  'electricvehicles',

  'EngineeringStudents',

  'croatia',

  'IndiaSpeaks',

  'SpaceXLounge',

  'PcBuild',

  'OshiNoKo',

  'AppleWatch',

  'RoastMe',

  'gamingsuggestions',

  'LawSchool',

  'whatsthisplant',

  'emulation',

  'berlin',

  '3DS',

  'agedlikemilk',

  'TeslaModel3',

  'washingtondc',

  'devops',

  'worldbuilding',

  'VirtualYoutubers',

  'egg_irl',

  'DCcomics',

  'BabyBumps',

  'AsianBeauty',

  'TheSimpsons',

  'thelastofus',

  'JuJutsuKaisen',

  'JEENEETards',

  'MarchAgainstNazis',

  'batman',

  'torrents',

  'Guiltygear',

  'HeadphoneAdvice',

  'moreplatesmoredates',

  'coys',

  'ClashOfClans',

  'stunfisk',

  'selfie',

  'FalloutMods',

  'WeAreTheMusicMakers',

  'darksouls3',

  'ASUS',

  'SubredditDrama',

  'Tekken',

  'Pikabu',

  'AdviceAnimals',

  'DMZ',

  'walmart',

  'warriors',

  'traaaaaaannnnnnnnnns',

  'LoveIsBlindNetflix',

  'poland',

  'nyc',

  'thenetherlands',

  'TheGirlSurvivalGuide',

  'FinancialCareers',

  'dayz',

  'breakingbad',

  'AbsoluteUnits',

  'ObsidianMD',

  'lifehacks',

  'gadgets',

  'wownoob',

  'HermanCainAward',

  'careeradvice',

  'weddingplanning',

  'GreenAndPleasant',

  'FREEMEDIAHECKYEAH',

  'forsen',

  'bestof',

  'Warhammer',

  'nattyorjuice',

  'aspiememes',

  'selfimprovement',

  'ender3',

  'Tools',

  'airsoft',

  'diablo3',

  'kubernetes',

  'battlefield2042',

  'cemu',

  'brisbane',

  'madlads',

  'spotify',

  'PokemonROMhacks',

  'PokemonScarletViolet',

  'fortinet',

  'Bannerlord',

  'neoliberal',

  'Quebec',

  'okbuddyretard',

  'ios',

  'FL_Studio',

  'islam',

  'limbuscompany',

  'discgolf',

  'aoe2',

  'diablo2',

  'Bogleheads',

  'audioengineering',

  'SonicTheHedgehog',

  'Spiderman',

  'popping',

  'nursing',

  'sportsbook',

  'Austria',

  'overemployed',

  'AMDHelp',

  'gundeals',

  'CompetitiveTFT',

  'trans',

  'csharp',

  'Target',

  'HadesTheGame',

  'polls',

  'yuzu',

  'TeslaLounge',

  'afkarena',

  'victoria3',

  'GamingLaptops',

  'synthesizers',

  'poker',

  'smallbusiness',

  'audiophile',

  'ClashRoyale',

  'mountandblade',

  'serbia',

  'Fedora',

  'androidapps',

  'fragrance',

  'LegendsOfRuneterra',

  'TedLasso',

  'kpophelp',

  'macgaming',

  'visualnovels',

  'autism',

  'hoggit',

  'indieheads',

  'orangetheory',

  'betterCallSaul',

  'lotr',

  'espresso',

  'BaldursGate3',

  'TalesFromYourServer',

  'Professors',

  'actuallesbians',

  'photography',

  'datascience',

  'Eyebleach',

  'Portland',

  'itookapicture',

  'animememes',

  'LAClippers',

  'splatoon',

  'virtualreality',

  'PremierLeague',

  'SCCM',

  'horizon',

  'vmware',

  'Christianity',

  'StupidFood',

  'vexillology',

  'CalamityMod',

  'linux4noobs',

  'nhl',

  'Ubuntu',

  'Boxing',

  'applehelp',

  'cringepics',

  'LowSodiumCyberpunk',

  'VaushV',

  'EpicSeven',

  'ipad',

  'nbacirclejerk',

  'MTB',

  'berkeley',

  'natureismetal',

  'legal',

  'TwoHotTakes',

  'antivirus',

  'JustGuysBeingDudes',

  'houston',

  'CleaningTips',

  'namenerds',

  'KerbalSpaceProgram',

  'guitarpedals',

  'self',

  'Shittygamecollecting',

  'gradadmissions',

  'skiing',

  'toptalent',

  'admincraft',

  'GodofWar',

  'albiononline',

  'bicycling',

  'britishproblems',

  'truegaming',

  'depression',

  'CODZombies',

  'halifax',

  'tattoos',

  'thefighterandthekid',

  'Mario',

  'PERSoNA',

  'spaceengineers',

  'de_IAmA',

  'italy',

  'dotnet',

  'LastEpoch',

  'musictheory',

  'dbz',

  'PSVR',

  'nutrition',

  'beauty',

  'survivor',

  'blenderhelp',

  'NoahGetTheBoat',

  'China',

  'indonesia',

  'onebag',

  'XboxGamePass',

  'ShouldIbuythisgame',

  'darksouls',

  'WorldofTanks',

  'overwatch2',

  'jailbreak',

  'raisedbynarcissists',

  'OMORI',

  'TheRightCantMeme',

  'MonsterHunterWorld',

  'freefolk',

  'MakeupAddiction',

  'thedivision',

  'Undertale',

  'FundieSnarkUncensored',

  'ITCareerQuestions',

  'Yellowjackets',

  'newworldgame',

  'minipainting',

  'MilitaryPorn',

  'FanFiction',

  'beyondthebump',

  'VRchat',

  'UofT',

  'hacking',

  'daddit',

  'AskAcademia',

  'Denver',

  'bikewrench',

  'Coffee',

  'Wallstreetsilver',

  'UnresolvedMysteries',

  'IndianGaming',

  'MovieDetails',

  'FanTheories',

  'chile',

  'Deltarune',

  'darkestdungeon',

  'houkai3rd',

  'logitech',

  'SipsTea',

  'xxfitness',

  'RandomThoughts',

  'BravoRealHousewives',

  'FreeGameFindings',

  'philadelphia',

  'cpp',

  'AskDocs',

  'ForzaHorizon',

  'Instagram',

  'NMSCoordinateExchange',

  'unRAID',

  'WWE',

  'SWGalaxyOfHeroes',

  'UBC',

  'hometheater',

  'ar15',

  'OfflinetvGirls',

  'CatastrophicFailure',

  'Kingdom',

  'FantasyPL',

  'kde',

  'answers',

  'playboicarti',

  'macbookpro',

  'CharacterRant',

  'AskMechanics',

  'TravelHacks',

  'intermittentfasting',

  'starcraft',

  'WarhammerCompetitive',

  'ConanExiles',

  '2meirl4meirl',

  'DBZDokkanBattle',

  'belgium',

  'HPfanfiction',

  'fatFIRE',

  'Kanye',

  'medicine',

  'HalfLife',

  '30PlusSkinCare',

  'worldofpvp',

  'ableton',

  'bapcsalescanada',

  'czech',

  'Proxmox',

  'Catholicism',

  'collapse',

  'stopdrinking',

  'AMA',

  'MovieSuggestions',

  'digitalnomad',

  'EatCheapAndHealthy',

  'Metallica',

  'exmormon',

  'MLBTheShow',

  'dubai',

  'AskWomenOver30',

  'metalgearsolid',

  'Gunpla',

  'wowservers',

  'StreetFighter',

  'step1',

  'vscode',

  'Dell',

  'repbudgetsneakers',

  'Oxygennotincluded',

  'Barry',

  'OLED_Gaming',

  'povertyfinance',

  'lostgeneration',

  'RaidShadowLegends',

  'ShitAmericansSay',

  'houseplants',

  'delta',

  'RunningShoeGeeks',

  'androiddev',

  'graphic_design',

  'texas',

  'nostalgia',

  'furry',

  'lawncare',

  'SGExams',

  'BoJackHorseman',

  'HypixelSkyblock',

  'FunnyandSad',

  'dankvideos',

  'Aquariums',

  'AFL',

  'amiugly',

  'rutgers',

  'askphilosophy',

  'Garmin',

  'KDRAMA',

  'hmmm',

  'BMW',

  'Xenoblade_Chronicles',

  'CoDCompetitive',

  'nova',

  'talk_hunfluencers',

  'RetroArch',

  'confession',

  'slaythespire',

  'Brawlstars',

  'LinkedInLunatics',

  'ThelastofusHBOseries',

  'samsung',

  'mechmarket',

  'BinIchDasArschloch',

  'IWantToLearn',

  'GetMotivated',

  'eurovision',

  'EnglishLearning',

  'IRLgirls',

  'animepiracy',

  'Ultralight',

  'justneckbeardthings',

  'AdvancedRunning',

  'distressingmemes',

  'getdisciplined',

  'starbucks',

  'KotakuInAction',

  'TrueFilm',

  'history',

  'BattleNetwork',

  'uwaterloo',

  'UIUC',

  'HonkaiStarRail',

  'youseeingthisshit',

  'Anki',

  'okbuddychicanery',

  'steelseries',

  'WaltDisneyWorld',

  'datingoverthirty',

  'TrashTaste',

  'NBA2k',

  'montreal',

  'prusa3d',

  'node',

  'GenshinImpactTips',

  'PygmalionAI',

  'vegan',

  'suggestmeabook',

  'Surface',

  'dragonage',

  'jellyfin',

  'touhou',

  'nier',

  'religiousfruitcake',

  'reddeadredemption2',

  'resumes',

  'TowerofFantasy',

  'Animesuggest',

  'MBA',

  'pihole',

  'Truckers',

  'okbuddybaka',

  'desabafos',

  'TikTok_Tits',

  'barstoolsports',

  'legostarwars',

  'auckland',

  'playark',

  'PFSENSE',

  'ATBGE',

  'BatmanArkham',

  'suspiciouslyspecific',

  'pop_os',

  'WritingPrompts',

  'malehairadvice',

  'okmatewanker',

  'FirstTimeHomeBuyer',

  'Screenwriting',

  'shrooms',

  'phinvest',

  'theydidthemath',

  'PeopleFuckingDying',

  'FoundryVTT',

  'bangalore',

  'RedDeadOnline',

  'AskEngineers',

  'danganronpa',

  'BlackPink',

  'UpliftingNews',

  'BocchiTheRock',

  'forza',

  'AfterEffects',

  'CemuPiracy',

  'nextjs',

  'RomanceBooks',

  'keto',

  'borderlands3',

  'thesopranos',

  'AZURE',

  'gainit',

  'whatisthiscar',

  'totalwarhammer',

  'TeslaModelY',

  'ExperiencedDevs',

  'GradSchool',

  'DesignerReps',

  'OffMyChestPH',

  'homeautomation',

  'FallenOrder',

  'alberta',

  'iRacing',

  'Corsair',

  'AnimeFigures',

  'wallpaper',

  'ArtistLounge',

  'BambuLab',

  'ABoringDystopia',

  'malelivingspace',

  'Youmo',

  'MicrosoftTeams',

  'mtgfinance',

  'AskElectronics',

  'adhdmeme',

  'StLouis',

  'fut',

  'ActualPublicFreakouts',

  'obs',

  'malegrooming',

  'RepTime',

  'ftm',

  'HighStrangeness',

  'askanelectrician',

  'surfing',

  'climbing',

  'CarTalkUK',

  'dwarffortress',

  '90DayFiance',

  'amex',

  'Amsterdam',

  'Kaiserreich',

  'Sephora',

  'retrogaming',

  'piano',

  'JUSTNOMIL',

  'FUCKYOUINPARTICULAR',

  'macapps',

  'sales',

  'TNOmod',

  'Barotrauma',

  'stevenuniverse',

  'Smite',

  'overlord',

  'balkans_irl',

  'greece',

  'HermitCraft',

  'davinciresolve',

  'DevilMayCry',

  'videography',

  'sewing',

  'Military',

  'Chiraqology',

  'developersIndia',

  'Xiaomi',

  'Sekiro',

  'Yugioh101',

  'Blink182',

  'fountainpens',

  'tmobile',

  'Watchexchange',

  'WorldOfWarships',

  'mtg',

  'Finland',

  'battlemaps',

  'kansascity',

  'fidelityinvestments',

  'evangelion',

  'Winnipeg',

  'Ultrakill',

  'Gloomhaven',

  'shittyfoodporn',

  '90dayfianceuncensored',

  'DestinyFashion',

  'FunnyAnimals',

  'biology',

  'learnmath',

  'NASCAR',

  'InstacartShoppers',

  'rolex',

  'PurplePillDebate',

  'consulting',

  'HiTMAN',

  'AskLosAngeles',

  'TattooDesigns',

  'Coronavirus',

  'wholesomeyuri',

  'footballhighlights',

  'Italia',

  'masskillers',

  'BikiniBottomTwitter',

  'MkeBucks',

  'femboy',

  'place',

  'GPT3',

  'NewTubers',

  'badwomensanatomy',

  'BoysPlanet',

  'Kenshi',

  'Marriage',

  'NYCinfluencersnark',

  'gaybros',

  'subnautica',

  'CookieClicker',

  'minnesota',

  'Starlink',

  'Dragonballsuper',

  'moviescirclejerk',

  'assetto_pirate',

  'WGU',

  'weddingshaming',

  'memphisgrizzlies',

  'modernwarfare',

  'hackintosh',

  'cpp_questions',

  'Anxiety',

  'CompTIA',

  'KingdomHearts',

  'interesting',

  'octopathtraveler',

  'KitchenConfidential',

  'InternetIsBeautiful',

  'antiMLM',

  'tooktoomuch',

  'dataengineering',

  'linuxmasterrace',

  'FinancialPlanning',

  'USCIS',

  'wallpapers',

  'weed',

  'sto',

  'vinyl',

  'Baking',

  'Broadway',

  'paradoxplaza',

  'Flipping',

  'dividends',

  'mumbai',

  'AskFrance',

  'youtubedl',

  'OneOrangeBraincell',

  'bing',

  'literaciafinanceira',

  'TalesFromTheFrontDesk',

  'funnyvideos',

  'florida',

  'mbti',

  'AnalogCommunity',

  'SCP',

  'Switzerland',

  'confusing_perspective',

  'PUBATTLEGROUNDS',

  'HistoryPorn',

  'Bass',

  'armoredcore',

  'DnDBehindTheScreen',

  'MicrosoftFlightSim',

  'Doom',

  'Bumble',

  'editors',

  'cringe',

  'HobbyDrama',

  'NameThatSong',

  'chromeos',

  'Picard',

  'Torontobluejays',

  'Filmmakers',

  'Jujutsushi',

  'bloodborne',

  'SeattleWA',

  'dankgentina',

  '7daystodie',

  'gentlemanboners',

  'civilengineering',

  'farialimabets',

  'lululemon',

  'thebachelor',

  'technicalminecraft',

  'ucla',

  'PowerBI',

  'mlb',

  'ZephyrusG14',

  'IKEA',

  'Dogtraining',

  'raidsecrets',

  'shittytattoos',

  'r4r',

  'flightsim',

  'starwarsmemes',

  'curlyhair',

  'progresspics',

  'tacticalgear',

  'LiveFromNewYork',

  'GenP',

  'CrackheadCraigslist',

  'botw',

  'fnv',

  'SweatyPalms',

  'community',

  'CurseofStrahd',

  'beermoney',

  'sports',

  'grammar',

  'options',

  'neopets',

  'eagles',

  'flipperzero',

  'CatAdvice',

  'CozyPlaces',

  'klippers',

  'Scotland',

  'Documentaries',

  'anno',

  'PornhubComments',

  'RDR2',

  'ShitpostXIV',

  'PizzaTower',

  'Twitter',

  'thewalkingdead',

  'MSI_Gaming',

  'preppers',

  'shortcuts',

  'MinecraftCommands',

  'IAmTheMainCharacter',

  'crochet',

  'REBubble',

  'gymsnark',

  'wholesomegreentext',

  'EmulationOnAndroid',

  'VindictaRateCelebs',

  '3dspiracy',

  'Metroid',

  'PixelArt',

  'ebikes',

  'CreateMod',

  'HomeMaintenance',

  'German',

  'transformers',

  'scifi',

  'BudgetAudiophile',

  'HouseOfTheDragon',

  'duolingo',

  '1200isplenty',

  'FifaCareers',

  'AutoDetailing',

  'Borderlands',

  'fishtanklive',

  'wasletztepreis',

  'robloxhackers',

  'emacs',

  'Totaldrama',

  'vim',

  'exmuslim',

  'Chainsawfolk',

  'okbuddyhololive',

  'awardtravel',

  'opinionnonpopulaire',

  'chemistry',

  'java',

  'SolidWorks',

  'Cartalk',

  'arduino',

  'DungeonsAndDragons',

  'wyzecam',

  'sandiego',

  'SelfAwarewolves',

  'philosophy',

  'javascript',

  'bigdickproblems',

  'Metalcore',

  'uBlockOrigin',

  'ageofsigmar',

  'PhasmophobiaGame',

  'AndroidGaming',

  'rap',

  'newjersey',

  'transtimelines',

  'DiscoElysium',

  'riskofrain',

  'EverspaceGame',

  'landscaping',

  'orangecounty',

  'VictoriaBC',

  'medizzy',

  'unpopularkpopopinions',

  'farmingsimulator',

  'DestinyLore',

  'RBI',

  'CollegeBasketball',

  'UCSD',

  'OtomeIsekai',

  'AskMiddleEast',

  'Minecraftbuilds',

  'airpods',

  'DolphinEmulator',

  'HVAC',

  'Firearms',

  'twice',

  'kingdomcome',

  'residentevil4',

  'tylerthecreator',

  'phoenix',

  'rugbyunion',

  'RealTesla',

  'crossfit',

  'google',

  'nope',

  'nashville',

  'WWEGames',

  'superman',

  'Big4',

  'torontoraptors',

  'AskEurope',

  'learnmachinelearning',

  'EpicGamesPC',

  'titanfolk',

  'jerma985',

  'AskAGerman',

  'adventuretime',

  'AirBnB',

  'Fire',

  'qBittorrent',

  'workingmoms',

  'Sacramento',

  'bisexual',

  'Memes_Of_The_Dank',

  'Serverlife',

  'VideoEditing',

  'UberEATS',

  'britishcolumbia',

  'watercooling',

  'Adulting',

  'Colorization',

  'EntitledPeople',

  'JuniorDoctorsUK',

  'homestead',

  'Thailand',

  'HaircareScience',

  'animenocontext',

  'bloxfruits',

  'StudentLoans',

  'needforspeed',

  'naturalbodybuilding',

  'StockMarket',

  'howardstern',

  'fabricmc',

  'Daytrading',

  'raspberry_pi',

  'truerateme',

  'Buttcoin',

  'DeadBedrooms',

  'minecraftsuggestions',

  'medicalschoolanki',

  'DarkSouls2',

  'BlueStacks',

  'Granblue_en',

  'typescript',

  'GeForceNOW',

  'HelpMeFind',

  'learnjavascript',

  'TheWeeknd',

  'HellLetLoose',

  'shitpostemblem',

  'drawing',

  'django',

  'kindle',

  'pittsburgh',

  'APStudents',

  'softwaregore',

  'GetStudying',

  'gmod',

  'Wrasslin',

  'HomeServer',

  'wotlk',

  'CompetitiveWoW',

  'HunterXHunter',

  'CringetopiaRM',

  '19684',

  'hingeapp',

  'PersonalFinanceNZ',

  'ImaginaryWarhammer',

  'business',

  'web_design',

  'QualityReps',

  'ShuumatsuNoValkyrie',

  'BeautyGuruChatter',

  'CricketShitpost',

  'insaneparents',

  'PaymoneyWubby',

  'NilouMains',

  'HomeKit',

  'LocalLLaMA',

  'brasilivre',

  'NonPoliticalTwitter',

  'BeamNG',

  'perth',

  'Columbus',

  'Diablo_2_Resurrected',

  'RedLetterMedia',

  'billsimmons',

  'IRS',

  'crossdressing',

  'Wordpress',

  'freemagic',

  'rickandmorty',

  'photoshop',

  'farcry',

  'digimon',

  'gnome',

  'saltierthancrait',

  'BreakUps',

  'gigabyte',

  'nbadiscussion',

  'BlackClover',

  'FORTnITE',

  'ToiletPaperUSA',

  'SpyxFamily',

  'insects',

  'Audi',

  'timberwolves',

  'motogp',

  'RLCraft',

  'Cornell',

  'forhonor',

  'SuicideWatch',

  'EnoughMuskSpam',

  'VinylReleases',

  'photoshopbattles',

  'LetsTalkMusic',

  'ProRevenge',

  'GTA',

  'MonsterHunterMeta',

  'Nijisanji',

  'CBSE',

  'bluey',

  'ArtefactPorn',

  'AskMenOver30',

  'hardwareswap',

  'Norway',

  'SunHaven',

  'AEWOfficial',

  'streetwear',

  'gamingnews',

  'sony',

  'findapath',

  'CPTSD',

  'Re_Zero',

  'CCW',

  'Vermintide',

  'Falcom',

  'identifythisfont',

  'WindowsHelp',

  'koreanvariety',

  '197',

  'granturismo',

  'shittydarksouls',

  'musicproduction',

  'weightroom',

  'stupidpol',

  'leafs',

  'TurboTax',

  'Meditation',

  'deadcells',

  'pyrocynical',

  'fednews',

  'Morrowind',

  'onions',

  'yesyesyesyesno',

  'EarthPorn',

  'dndmaps',

  'gravelcycling',

  'sadboys',

  'USPS',

  'DnDHomebrew',

  'pokemonanime',

  'plantclinic',

  'rainworld',

  'traderjoes',

  'subaru',

  'canadahousing',

  'learndota2',

  'phcareers',

  'techsupportgore',

  'futebol',

  'DJs',

  'LSD',

  'reactnative',

  'labrats',

  'Maya',

  'reddit.com',

  'truezelda',

  'Starfield',

  'bostonceltics',

  'marketing',

  'arma',

  'pakistan',

  'DreamlightValley',

  'lanadelrey',

  'DecidingToBeBetter',

  'FuckYouKaren',

  'CreatorClash',

  'linguistics',

  'Eminem',

  'PLC',

  'Fighters',

  'SpottedonRightmove',

  'InstaCelebsGossip',

  'AppleMusic',

  'swedishproblems',

  'Frontend',

  'KamenRider',

  'PrivacyGuides',

  'entitledparents',

  'woweconomy',

  'MensRights',

  'Etsy',

  'Studium',

  'de_EDV',

  'VitaPiracy',

  'premiere',

  'ThriftStoreHauls',

  'snowrunner',

  '2visegrad4you',

  'Slack',

  'ethereum',

  'piercing',

  'Eesti',

  'Grimdawn',

  'TwoXIndia',

  'KendrickLamar',

  'Keychron',

  'McMaster',

  'DeathBattleMatchups',

  'starwarsspeculation',

  'facebook',

  'ScienceUncensored',

  'f150',

  'nederlands',

  'NevilleGoddard',

  'makinghiphop',

  'HIMYM',

  'MLS',

  'idleon',

  'SwagBucks',

  'CrucibleGuidebook',

  'anime_titties',

  'ifyoulikeblank',

  'seinfeld',

  'findareddit',

  'sonos',

  'ValveIndex',

  'SBCGaming',

  'aspergers',

  'Priconne',

  'madisonwi',

  'ClassroomOfTheElite',

  'wohnen',

  'kotor',

  'PunishingGrayRaven',

  'GirlGamers',

  'rant',

  'macbook',

  'DeathStranding',

  'joinsquad',

  'F1NN5TER',

  'pornfree',

  'EDM',

  'Spanish',

  'gamecollecting',

  'Dislyte',

  'bestoflegaladvice',

  'NFA',

  'Jungle_Mains',

  'churning',

  'Crunchyroll',

  'nrl',

  'Genshin_Lore',

  'Breadit',

  'LightNovels',

  'MawInstallation',

  'dkfinance',

  'blogsnark',

  'nuzlocke',

  'heat',

  'UnusualVideos',

  'aves',

  'raleigh',

  'browsers',

  'taskmaster',

  'Aliexpress',

  'celebrities',

  'adhdwomen',

  'VietNam',

  'MortalKombat',

  'girlsfrontline',

  'geometrydash',

  'killteam',

  'IndianSkincareAddicts',

  'vegas',

  'law',

  'Argaming',

  'teslore',

  'guitarlessons',

  'Xcom',

  'Transmogrification',

  'VinlandSaga',

  'Mommit',

  'deepwoken',

  'DynastyFF',

  'criterion',

  'LenovoLegion',

  'paydaytheheist',

  'Purdue',

  'KingOfTheHill',

  'battletech',

  'DDLC',

  'Dallas',

  'revancedapp',

  'MinecraftMemes',

  'NetflixBestOf',

  'northernireland',

  'onlyfansadvice',

  'Brooklyn',

  'KanojoOkarishimasu',

  'LaTeX',

  'classicalmusic',

  'puppy101',

  'woahdude',

  'heroesofthestorm',

  'salesforce',

  'SpidermanPS4',

  'TheBoys',

  'biglaw',

  'Letterboxd',

  'translator',

  'geopolitics',

  'trackers',

  'PS3',

  'esp32',

  'PropagandaPosters',

  'Drizzy',

  'SanJose',

  'soccercirclejerk',

  'EDC',

  'IsItBullshit',

  'outerwilds',

  'Fishing',

  'NYStateOfMind',

  'Cyberpunk',

  'panelshow',

  'ShitMomGroupsSay',

  'denvernuggets',

  'makeyourchoice',

  'Terraform',

  'DCEUleaks',

  'MarvelStrikeForce',

  'WorkOnline',

  'kiszamolo',

  'GoCommitDie',

  'Tokyo',

  'Sidemen',

  'baldursgate',

  'TrackMania',

  'Battlefield',

  'aiArt',

  'KUWTK',

  'fatestaynight',

  '600euro',

  'PlasticSurgery',

  'vosfinances',

  'fasting',

  'Swingers',

  'PhD',

  'exchangeserver',

  'Gamecube',

  'paloaltonetworks',

  'youngpeopleyoutube',

  'uofm',

  'FingMemes',

  'IDontWorkHereLady',

  'PlayStationPlus',

  'Switch',

  'guitars',

  'announcements',

  'ThatLookedExpensive',

  'Colombia',

  'ArtificialInteligence',

  'CivVI',

  'ElderScrolls',

  'PhoenixSC',

  'AndroidQuestions',

  'canucks',

  'analog',

  'doctorwho',

  'niceguys',

  'tea',

  'replika',

  'vuejs',

  'Cisco',

  'architecture',

  'MangaCollectors',

  'Ebay',

  'casualnintendo',

  'Witcher3',

  'amIuglyBrutallyHonest',

  'carscirclejerk',

  'orlando',

  'instant_regret',

  'solar',

  'livesound',

  'TrueCrimeDiscussion',

  'UMD',

  'vfx',

  'Rivian',

  'WRX',

  'Bitwarden',

  'WeWantPlates',

  'MarvelStudios_Rumours',

  'Testosterone',

  'PewdiepieSubmissions',

  'UrbanHell',

  'SonyAlpha',

  'ClipStudio',

  'unitedairlines',

  'AskSF',

  'YUROP',

  'gatech',

  'Step2',

  'amateurradio',

  'TheWayWeWere',

  'southafrica',

  'wildrift',

  'thatHappened',

  'nus',

  'Wizard101',

  'taiwan',

  'netsec',

  'PPC',

  'blunderyears',

  'expats',

  'rbtv_cj',

  'opensource',

  'Disneyland',

  'FiftyFifty',

  'PHCreditCards',

  'KatarinaMains',

  'Blizzard',

  'wholesomeanimemes',

  'mississauga',

  'startups',

  'ChatGPTPromptGenius',

  'StarWarsBattlefront',

  'BeefTV',

  'tolkienfans',

  'Megaten',

  'reactivedogs',

  'AskNetsec',

  'FoodPorn',

  'FortniteCompetitive',

  'Persecutionfetish',

  '6thForm',

  'speedrun',

  'Minneapolis',

  'SpaceXMasterrace',

  'HuTao_Mains',

  'ik_ihe',

  'French',

  'gatesopencomeonin',

  'insanereality',

  'AskVet',

  'TorontoRealEstate',

  'brdev',

  'bald',

  'HilariaBaldwin',

  'ledgerwallet',

  'HeroForgeMinis',

  'FlutterDev',

  'Stormlight_Archive',

  'martialarts',

  'GroundedGame',

  'FACEITcom',

  'Bundesliga',

  'verizon',

  'Cruise',

  'jaipaul',

  'Outlook',

  'AnimalTracking',

  'cinematography',

  'reddit',

  'DiabloImmortal',

  'CampingGear',

  'Gameboy',

  'bonehurtingjuice',

  'OsuSkins',

  'DuelLinks',

  'HousingUK',

  'Addons4Kodi',

  'Kerala',

  'survivinginfidelity',

  'ansible',

  'sololeveling',

  'JordanPeterson',

  'notliketheothergirls',

  'HyperX',

  'CollegeRant',

  'radiohead',

  'TibiaMMO',

  'MHRise',

  'iOSProgramming',

  'appletv',

  'ravens',

  'DogAdvice',

  'FFXVI',

  'Psychonaut',

  'amazonprime',

  'sixers',

  'Chipotle',

  'skyrimvr',

  'mcgill',

  'VPNTorrents',

  'DemonSlayerAnime',

  'NovelAi',

  'InteriorDesign',

  'MobileLegendsGame',

  'Konosuba',

  'GYM',

  'StructuralEngineering',

  'Stoicism',

  'PlanetZoo',

  'snooker',

  'aliens',

  'Beatmatch',

  'Sham_Sharma_Show',

  'realasians',

  'Porsche',

  'C_Programming',

  'Modern_Family',

  'GreenBayPackers',

  'WaifuDiffusion',

  'ValorantTechSupport',

  'Barca',

  'Lenovo',

  'Alienware',

  'GossipDK',

  'aoe4',

  'cordcutters',

  '9anime',

  'rance',

  'GameTheorists',

  'simpleliving',

  'AndroidTV',

  'vexillologycirclejerk',

  'DestinyMemes',

  'realestateinvesting',

  'tattoo',

  'Atlanta',

  'ItaliaPersonalFinance',

  'TheSims4Mods',

  'truenas',

  'mathmemes',

  'queensofleague',

  'kings',

  'iosgaming',

  'Miata',

  'creepy',

  'TheDeprogram',

  'StrangerThings',

  'ffxivdiscussion',

  'EngineeringPorn',

  'ProjectSekai',

  'slatestarcodex',

  'truespotify',

  'fatlogic',

  'SaltLakeCity',

  'DoesAnybodyElse',

  'CommercialsIHate',

  'Lovecraft',

  'EngagementRings',

  'russian',

  'CanadianInvestor',

  'CasualRO',

  'Rabbits',

  'cormacmccarthy',

  'UWMadison',

  'engineering',

  'osr',

  'animalid',

  'AskACanadian',

  'fakedisordercringe',

  'NZXT',

  'RWBYcritics',

  'thepiratebay',

  'Dimension20',

  'debian',

  'MicrosoftEdge',

  'CompanyOfHeroes',

  'navy',

  'Reaper',

  'socialanxiety',

  'TrueSTL',

  'Indiangirlsontinder',

  'Flights',

  'gifsthatendtoosoon',

  'SlowNewsDay',

  'Mavericks',

  'AutoGPT',

  'YouOnLifetime',

  'columbia',

  'MxRMods',

  'bulgaria',

  'BobsTavern',

  'MetalMemes',

  'minimalism',

  'wisconsin',

  'Destiny2Leaks',

  'Minecrafthmmm',

  'WireGuard',

  'crtgaming',

  'PHP',

  'TenseiSlime',

  'SSBM',

  'starsector',

  'Buddhism',

  'googlesheets',

  'yourmomshousepodcast',

  'oneplus',

  'AskPhotography',

  'TOR',

  'InfluencergossipDK',

  'silenthill',

  'xmen',

  'pharmacy',

  'gamegrumps',

  'firstimpression',

  'Physics',

  'linuxmint',

  'VeteransBenefits',

  'WowUI',

  'HelluvaBoss',

  'sveltejs',

  'Telegram',

  'Nepal',

  'attackontitan',

  'confidentlyincorrect',

  'Dentistry',

  'Slovenia',

  'Charlotte',

  'BokuNoMetaAcademia',

  'cscareerquestionsEU',

  'OLED',

  'Pets',

  'Helltaker',

  'londonontario',

  'MemeTemplatesOfficial',

  'weightlifting',

  'smoking',

  'Whatisthis',

  'delhi',

  'foxholegame',

  'trucksim',

  'DIYUK',

  'booksuggestions',

  'toddlers',

  'castiron',

  'TurkishCeleb',

  'beatles',

  'Forex',

  'GalaxyWatch',

  'TillSverige',

  'fixedbytheduet',

  'MotorsportsReplays',

  'maryland',

  'RotMG',

  'ChatGPTPro',

  'wien',

  'cocktails',

  'hajimenoippo',

  'football',

  'WhyWomenLiveLonger',

  'AusRenovation',

  'doodoofard',

  'PokemonUnite',

  'Lowes',

  'IndianBoysOnTinder',

  'Planetside',

  'youtubers',

  'uAlberta',

  'rva',

  'Hawaii',

  'geoguessr',

  'PoliticalDiscussion',

  'boyslove',

  'OSINT',

  'git',

  'ps2',

  'DisneyPlus',

  'feminineboys',

  'polyamory',

  'UpvotedBecauseBoobs',

  'engrish',

  'AO3',

  'realmadrid',

  'Sims3',

  'Bossfight',

  'fnki',

  'CrackedPlugins3',

  'yurimemes',

  'therapists',

  'realonlyfansreviews',

  'Angryupvote',

  'Anbennar',

  'trippinthroughtime',

  'Welding',

  'DarkinFolk',

  'ApexUncovered',

  'CanadaPolitics',

  'LongDistance',

  'SQL',

  'UPS',

  'sendfeetpics',

  'VerifiedFeet',

  'Shoestring',

  'saskatoon',

  'watchpeoplesurvive',

  'Adelaide',

  'comicbookmovies',

  'FixMyPrint',

  'audible',

  'ProtonMail',

  'MexicoFinanciero',

  'sideloaded',

  'BanPitBulls',

  'USMC',

  'spaceporn',

  'minecraftclients',

  'CelebBattles',

  'yorku',

  'CFA',

  'glasgow',

  'Catswithjobs',

  'holdmycosmo',

  'BDSMAdvice',

  'gis',

  'AskHR',

  'instantkarma',

  'FridayNightFunkin',

  'CatsAreAssholes',

  'PokemonMasters',

  'PCRedDead',

  'fantasyfootball',

  'Dehyamains',

  'intj',

  'elgato',

  'copypasta_es',

  'GTA6',

  'CelebrityButts',

  'googlehome',

  'textbookrequest',

  'Fahrrad',

  'legaladviceofftopic',

  'aznidentity',

  'AskBalkans',

  'ImmigrationCanada',

  'UsbCHardware',

  'dune',

  'Hentai__videos',

  'whatsapp',

  'femalehairadvice',

  'fantasybaseball',

  'BoltEV',

  'dogecoin',

  'drums',

  'podcasts',

  'mycology',

  'Hair',

  'offlineTV',

  'UCI',

  'GunAccessoriesForSale',

  'ComedyCemetery',

  'awesome',

  'brave_browser',

  'SonyHeadphones',

  'custommagic',

  'rpcs3',

  'Kaguya_sama',

  'GenX',

  'homegym',

  'Hardcore',

  'ACCompetizione',

  'dredge',

  'ErgoMechKeyboards',

  'flashlight',

  '4kTV',

  'dontstarve',

  'HomeDepot',

  'phish',

  'popheadscirclejerk',

  'mapporncirclejerk',

  'MAAU',

  'operabrowser',

  'Astronomy',

  'FreeKarma4You',

  'sonarr',

  'keyboards',

  'VORONDesign',

  'IllegallySmolCats',

  'Insurance',

  'rpghorrorstories',

  'CHIBears',

  'UTAustin',

  'crowdstrike',

  'lithuania',

  'ElectricalEngineering',

  'GymMemes',

  'VaultHuntersMinecraft',

  'ukdrill',

  'collegeresults',

  'GolfGTI',

  'flask',

  'wirklichgutefrage',

  'shid_and_camed',

  'immigration',

  'microsoft',

  'LoveIslandTV',

  'dalle2',

  'QuestPiracy',

  'WhatsWrongWithYourDog',

  'Animedubs',

  'mildyinteresting',

  'Legoleak',

  'fuckHOA',

  'hvacadvice',

  'ARAM',

  'cosplay',

  'PokeInvesting',

  'GilmoreGirls',

  'interactivebrokers',

  'tiktokgossip',

  'CasualPH',

  'cataclysmdda',

  'LMDShow',

  'DragonballLegends',

  'Connecticut',

  'hotas',

  'ASUSROG',

  'WarshipPorn',

  'usajobs',

  'AusLegal',

  'Monero',

  'yoga',

  'Kengan_Ashura',

  '2nordic4you',

  'DaystromInstitute',

  'startrekmemes',

  'EuSouOBabaca',

  'nordvpn',

  'steak',

  'zlibrary',

  'Ryujinx',

  'MTFSelfieTrain',

  'SonsOfTheForest',

  'Pareidolia',

  'findfashion',

  'rocketbeans',

  'macbookair',

  'mariokart',

  'canon',

  'adultingph',

  'motorcycle',

  'NonBinary',

  'wallpaperengine',

  'NintendoSwitchDeals',

  'highschool',

  'madmen',

  'Megaman',

  'embedded',

  'economy',

  'MoneyDiariesACTIVE',

  'hockeyplayers',

  'Louisville',

  'NoJumper',

  'KoreanHotties',

  'singing',

  'PSO2NGS',

  'FitGirlRepack',

  'Angular2',

  'microgrowery',

  'OneSecondBeforeDisast',

  'Markiplier',

  'rpg_gamers',

  'MCFC',

  'dogelore',

  '21stCenturyHumour',

  'Ghosts',

  'blankies',

  'oldschoolhot',

  'Ben10',

  'ProductManagement',

  'MrBeast',

  'PixelmonMod',

  'CasualPT',

  'CarsAustralia',

  'fujifilm',

  'CookieRunKingdoms',

  'iPadPro',

  'AsianMasculinity',

  'bangtan',

  'DesignPorn',

  'Rainmeter',

  'ak47',

  'lookismcomic',

  'NYKnicks',

  'ChineseLanguage',

  'bikinis',

  'Qult_Headquarters',

  'fixit',

  'AskPhysics',

  'VeganDE',

  'suisjeletroudeballe',

  'longisland',

  'swift',

  'exjw',

  'TVTooHigh',

  'ABCDesis',

  'TheExpanse',

  'brooklynninenine',

  'k12sysadmin',

  'DuggarsSnark',

  'noveltranslations',

  'DanMachi',

  'laptops',

  'BattleBrothers',

  'rarepuppers',

  'beards',

  'baltimore',

  'quotes',

  'mazda',

  'Korean',

  'okbuddygenshin',

  'NYYankees',

  'opendirectories',

  'deadisland',

  'Machinists',

  'videogames',

  'asexuality',

  'titanfall',

  'gamedesign',

  'KUWTKsnark',

  '2Asia4u',

  'GTAV',

  'PizzaCrimes',

  'vandwellers',

  'thetagang',

  'AskARussian',

  'bikecommuting',

  'deeplearning',

  'SmashBrosUltimate',

  'F1Game',

  'funkopop',

  'TheDepthsBelow',

  'OneNote',

  'LGOLED',

  'westjet',

  'udub',

  'ffmpeg',

  'paypal',

  'flicks',

  'NuclearRevenge',

  'wiiu',

  'hoodironycentral',

  'MousepadReview',

  'apexuniversity',

  'TrollXChromosomes',

  'Detroit',

  'HubermanLab',

  'kpoprants',

  'audiobooks',

  'Nioh',

  'roosterteeth',

  'carporn',

  'privacytoolsIO',

  'SuddenlyGay',

  'beermoneyuk',

  'SEO',

  'UniUK',

  'MinecraftChampionship',

  'ShieldAndroidTV',

  'ForeverAlone',

  'igcse',

  'audio',

  'Ohio',

  'paris',

  'krita',

  'OfficeChairs',

  'PHGamers',

  'quityourbullshit',

  'CDrama',

  'BeautifulFemales',

  'AskOldPeople',

  'TowerofGod',

  'SkyFactory',

  'antimeme',

  'learnart',

  'Netsuite',

  'morbidquestions',

  'ModernMagic',

  'valve',

  'electrical',

  'wholesome',

  'Israel',

  'Metal',

  'cremposting',

  'Mattress',

  'uruguay',

  'linuxadmin',

  'tall',

  'Tiktokhelp',

  'aggies',

  'tf2shitposterclub',

  'DigitalArt',

  'StardewValleyExpanded',

  'NewParents',

  'seriouseats',

  'AskProgramming',

  'ThickFit',

  'ActionFigures',

  'AmazonFC',

  'Roll20',

  'camping',

  'NoRules',

  'WiiHacks',

  'CredibleDefense',

  'fosscad',

  'MtvChallenge',

  'LearnCSGO',

  'CryptoMoonShots',

  'TronScript',

  'MandelaEffect',

  'edge',

  'Nahida_Mains',

  'Animewallpaper',

  'CallOfDuty',

  'Shitty_Car_Mods',

  'uberdrivers',

  '7vsWild',

  'dankinindia',

  'ufl',

  'Mizkif',

  'creepyencounters',

  'Egypt',

  'goodyearwelt',

  'studentsph',

  'TurkeyJerky',

  'Paladins',

  'darknet',

  'eu_nvr',

  'functionalprint',

  'moderatepolitics',

  'WhiteWolfRPG',

  'TradingView',

  'SFWNextDoorGirls',

  'Overwatch_Memes',

  'acecombat',

  'shopify',

  'brandonsanderson',

  'icecoast',

  'TheTryGuys',

  'tipofmyjoystick',

  'Cosmere',

  'Sat',

  'commandline',

  'projecteternity',

  'LSAT',

  'ender3v2',

  'QAnonCasualties',

  'comedyhomicide',

  'cloudygamer',

  'tales',

  'ToolBand',

  'knitting',

  'gay',

  'Kappachino',

  'chefknives',

  'HowToHack',

  'investimentos',

  'javahelp',

  'ShitLiberalsSay',

  'PowerScaling',

  'lostmedia',

  'im14andthisisdeep',

  'algotrading',

  'FigureSkating',

  'OnlineDating',

  'SCJerk',

  'radeon',

  'WarplanePorn',

  'bourbon',

  'CityPorn',

  'Rateme',

  'WutheringWaves',

  'AustralianNostalgia',

  'Patriots',

  'hermanmiller',

  'TheOCS',

  'LineageOS',

  'laravel',

  'oblivion',

  'hiphop101',

  'INDYCAR',

  'VPN',

  'MoscowMurders',

  'A24',

  'DrDisrespectLive',

  'GenshinImpact',

  'massachusetts',

  'RPDRDRAMA',

  'RocketLeagueEsports',

  'TrueDoTA2',

  'retirement',

  'weddingdress',

  'OCD',

  'LowSodiumDestiny',

  'DidntKnowIWantedThat',

  'portugueses',

  'linuxmemes',

  'greysanatomy',

  'usenet',

  'MadeInAbyss',

  'Vive',

  'TheLastKingdom',

  'podcasting',

  'premedcanada',

  'YoutubeMusic',

  'mentalhealth',

  'MoldyMemes',

  'McMansionHell',

  'berserklejerk',

  '3dshacks',

  '3amjokes',

  'deathgrips',

  'hot_reporters',

  'short',

  'RATS',

  'Idiotswithguns',

  'AskFeminists',

  'Stargate',

  'Pennsylvania',

  'rails',

  'powerlifting',

  'gamemaker',

  'cincinnati',

  'barexam',

  'fnatic',

  'tampa',

  'RaidenMains',

  'magicthecirclejerking',

  'UCDavis',

  'DissidiaFFOO',

  'RetroPie',

  'DavisvsRyanGarciaLive',

  'weirddalle',

  'OkBuddyPersona',

  'Optifine',

  'dccomicscirclejerk',

  'AccidentalComedy',

  'tomorrow',

  'ToyotaTacoma',

  'liberalgunowners',

  'Morocco',

  'Chromecast',

  'NextCloud',

  'redsox',

  'CalgaryFlames',

  'grandrapids',

  'transgoddesses',

  'CAguns',

  'GunMemes',

  'ManyBaggers',

  'BABYMETAL',

  'americanairlines',

  'ProgressionFantasy',

  'lianli',

  'Judaism',

  'tretinoin',

  'EtsySellers',

  'tacobell',

  'PrettyGirls',

  'stupiddovenests',

  'fairytail',

  'Homebrewing',

  'SkyrimModsXbox',

  'AnimeART',

  'ExpectationVsReality',

  'spotted',

  'kdramarecommends',

  'realhousewives',

  'introvert',

  'gsuite',

  'ANormalDayInRussia',

  'talesfromtechsupport',

  'obeyme',

  'GalaxyTab',

  'antinatalism',

  'Carpentry',

  'OMSCS',

  'BostonBruins',

  'TipOfMyFork',

  'MySingingMonsters',

  'Healthygamergg',

  'radarr',

  'miraculousladybug',

  'Borderlands2',

  'DragRaceTea',

  'CompetitiveEDH',

  'HongKong',

  'PetiteFashionAdvice',

  'NoContract',

  'PokeLeaks',

  'ManchesterUnited',

  'CampingandHiking',

  'missouri',

  'AbandonedPorn',

  'fantanoforever',

  'IndianTeenagers',

  'UXDesign',

  'GrandTheftAutoV',

  'angelsbaseball',

  'ihaveihaveihavereddit',

  'redneckengineering',

  'infj',

  'SuperMegaShow',

  'bashonubuntuonwindows',

  'VFIO',

  'mylittlepony',

  'Discord_Bots',

  'animecirclejerk',

  'AusProperty',

  'gamernews',

  'Logic_Studio',

  'LiminalSpace',

  'supportlol',

  'respectthreads',

  'USC',

  'snowboarding',

  'MSILaptops',

  'conservativeterrorism',

  'honkaiimpact3',

  'OkCupid',

  'AppleCard',

  'liberta',

  'CPA',

  'OSU',

  'letsplay',

  'sportsbetting',

  'Unity2D',

  'minecraftseeds',

  'travisscott',

  'bose',

  'climbharder',

  'hyderabad',

  'Avatar',

  'OnePiecePowerScaling',

  'celestegame',

  'Roofing',

  'unitedstatesofindia',

  'Kirby',

  'PSP',

  'fastfood',

  'CloneHero',

  'actuary',

  'Jazz',

  'PKA',

  'TrueUnpopularOpinion',

  'steinsgate',

  'evangelionmemes',

  'youtubetv',

  'mmamemes',

  'StarWarsEU',

  'bristol',

  'detroitlions',

  'Slovakia',

  'GMail',

  'fightsticks',

  'literature',

  'MelvorIdle',

  'TrueAnon',

  'TheCinemassacreTruth',

  'Miami',

  'samharris',

  'warcraftlore',

  'Autobody',

  'KoboldAI',

  'litrpg',

  'fromsoftware',

  'CrossStitch',

  'ecommerce',

  'Weddingattireapproval',

  'mina_irl',

  'pelotoncycle',

  'ContestOfChampions',

  'resinprinting',

  'AlternateHistory',

  'TLCsisterwives',

  'MCPE',

  'IcebergCharts',

  'Noctor',

  'asianamerican',

  'Oobabooga',

  'breakingmom',

  'Toyota',

  'dragonquest',

  'RedHotChiliPeppers',

  'OnlyFansReviews',

  'arcane',

  'NFL_Draft',

  'AWSCertifications',

  'GhostRecon',

  'Maine',

  'FPGA',

  'printers',

  'BPD',

  'Depop',

  'MiyooMini',

  'GalaxyFold',

  'TheWire',

  'FreeGamesOnSteam',

  'Grapplerbaki',

  'ussoccer',

  'Cinema4D',

  'pregnant',

  'peyups',

  'ZeroWaste',

  'stockholm',

  'Lexus',

  'Komi_san',

  'peloton',

  'ASRock',

  'nosurf',

  'TrueCrime',

  'nagatoro',

  'internetparents',

  'Honda',

  'lotro',

  'Veterans',

  'canadaguns',

  'FireEmblemThreeHouses',

  'AnimalsBeingBros',

  'NewOrleans',

  'idlechampions',

  'sharepoint',

  'jackwhite',

  'poppunkers',

  'japanesepeopletwitter',

  'taxpros',

  'DoubanGoosegroup',

  'StudentNurse',

  'dbxv',

  'CompetitiveHS',

  'Techno',

  'compoface',

  'waterloo',

  'baseballcards',

  'programminghorror',

  'wine',

  'eupersonalfinance',

  'Shittyaskflying',

  'redditrequest',

  'Illustration',

  'pixreponses',

  'GrandTheftAutoV_PC',

  'printSF',

  'enfrancais',

  'otomegames',

  'UNBGBBIIVCHIDCTIICBG',

  'ladyladyboners',

  'github',

  'WarhammerFantasy',

  'The10thDentist',

  'libgen',

  'wedding',

  'vita',

  'gaymers',

  'Paranormal',

  'noita',

  'UCalgary',

  'memexico',

  'dji',

  'SingaporeRaw',

  'Hasan_Piker',

  'conversas',

  'Dominos',

  'electricdaisycarnival',

  'PlantsVSZombies',

  'KansasCityChiefs',

  'TheMorningToastSnark',

  'Kotlin',

  'wicked_edge',

  'n64',

  'BostonU',

  'TwitchGoneWild_',

  'fpv',

  'IWantOut',

  'statistics',

  'MandJTV',

  'Fusion360',

  'supersentai',

  'ABraThatFits',

  'Warhammer30k',

  'italianlearning',

  'macsysadmin',

  'RemarkableTablet',

  'HydroHomies',

  'leangains',

  'ChatGPTCoding',

  'cheatengine',

  'UtahJazz',

  'CRedit',

  'OneyPlays',

  'BobsBurgers',

  'LAinfluencersnark',

  'cookingforbeginners',

  'homestuck',

  'Velo',

  'Against_the_Storm',

  'porterrobinson',

  'ATT',

  'Infographics',

  'NHLStreams',

  'Glocks',

  'Trophies',

  'uwo',

  'ReadyOrNotGame',

  'AQW',

  'hardstyle',

  'Poetry',

  'Hue',

  'blackcats',

  'LasVegas',

  'wotv_ffbe',

  'Citrix',

  'bouldering',

  'offbeat',

  'runningman',

  'Silverbugs',

  'ElectricScooters',

  'PokemonSwordAndShield',

  'gigabytegaming',

  'ActLikeYouBelong',

  'Subliminal',

  'i3wm',

  'Tetris',

  'loltyler1',

  'gravityfalls',

  'gratefuldead',

  'HadToHurt',

  'ThailandTourism',

  'legendofkorra',

  'MB2Bannerlord',

  'osvaldo12',

  'knives',

  'asmr',

  'TeenMomOGandTeenMom2',

  'Killtony',

  'BuenosAires',

  'NewGreentexts',

  'openSUSE',

  'INTP',

  'linuxhardware',

  'technews',

  'notjustbikes',

  'dragonball',

  'Kibbe',

  'northernlion',

  'grilling',

  'GuardianTales',

  'GoodNotes',

  'deloitte',

  'americandad',

  'qnap',

  '4Runner',

  'inkarnate',

  'MakeNewFriendsHere',

  'flexibility',

  'NewYorkMets',

  'retroid',

  'IncelTear',

  'OnlyFans',

  'covidlonghaulers',

  'Sino',

  'SequelMemes',

  'canberra',

  'ProtonVPN',

  'iiiiiiitttttttttttt',

  'bjork',

  'amazon',

  'MurderDrones',

  'PrintedMinis',

  'Mechwarrior5',

  'NarutoFanfiction',

  'rollercoasters',

  'PennStateUniversity',

  'Ozempic',

  'lingling40hrs',

  'asklatinamerica',

  'ExNoContact',

  'EdmontonOilers',

  'lonely',

  'FortniteLeaks',

  'KGATLW',

  'ManjaroLinux',

  'FPSAimTrainer',

  'friendlyjordies',

  'CanadianForces',

  'mikrotik',

  'newyorkcity',

  'Brawlhalla',

  'Volkswagen',

  'rav4club',

  'boulder',

  'badfriendspod',

  'CallOfDutyMobile',

  'ADCMains',

  'PostgreSQL',

  'backpacking',

  'Munich',

  'MealPrepSunday',

  'trapproduction',

  'psychology',

  'dragrace',

  'LadyBoners',

  'KessokuBand',

  'infp',

  'OnePieceHints',

  'ASU',

  'FrugalMaleFashionCDN',

  'ContraPoints',

  'socialism',

  'Gymnastics',

  'Dyson_Sphere_Program',

  'punk',

  'TikTok_Ass',

  'ClassyPornstars',

  'Houdini',

  'beer',

  'Genealogy',

  'JuiceWRLD',

  'programare',

  'horrorlit',

  'Makeup',

  'BrasiIeirasGostosas',

  'TigerBelly',

  'diabetes',

  'Citra',

  'bridezillas',

  'Archery',

  'AskMexico',

  'FLMedicalTrees',

  'FlashTV',

  'OverwatchTMZ',

  'Ningen',

  'ProtectAndServe',

  'indiegameswap',

  'MuayThai',

  'Cleveland',

  'byebyejob',

  'modelmakers',

  'lfg',

  'askwomenadvice',

  'ynab',

  'rawdenim',

  'xboxinsiders',

  'InteractiveCYOA',

  'Political_Revolution',

  'dancemoms',

  'OntarioUniversities',

  'Chadtopia',

  'cheating_stories',

  'casualiama',

  'buildapcmonitors',

  'EmulationOnPC',

  'originalxbox',

  'bestconspiracymemes',

  'Seahawks',

  'handbags',

  'EntrepreneurRideAlong',

  'Skincare_Addiction',

  'GME',

  'gopro',

  'GenshinGays',

  'askspain',

  'academia',

  'blackladies',

  'SomeOfYouMayDie',

  'NanatsunoTaizai',

  'Hamilton',

  'lostpause',

  'Bioshock',

  'Stadia',

  'familyguy',

  'SteamVR',

  'HealthyFood',

  'haskell',

  'cardano',

  'tattooadvice',

  'zfs',

  'DarceyAndStaceyTLC',

  'battlecats',

  'hiking',

  'marriott',

  'VLC',

  'WouldYouRather',

  'electronicmusic',

  'harborfreight',

  'Chang_Gang',

  'Nicegirls',

  'humansarespaceorcs',

  'ROBLOXExploiting',

  'askportland',

  'Nbamemes',

  'trains',

  'PinoyProgrammer',

  'characterdrawing',

  'sugarlifestyleforum',

  'guitarcirclejerk',

  'Health',

  'SkincareAddicts',

  'Mariners',

  'nespresso',

  'Neverbrokeabone',

  'Hyundai',

  'Gta5Modding',

  'Indiemakeupandmore',

  'ProjectDiablo2',

  'AskALiberal',

  'JumpChain',

  'Awww',

  'Yogscast',

  'FreeCompliments',

  'CarsIndia',

  'gog',

  'HotGermanCelebrities',

  'SisterWives',

  'ProCreate',

  'AmITheAngel',

  'Bolehland',

  'Peptides',

  'humanresources',

  'BeginnerWoodWorking',

  'SigSauer',

  'sleep',

  'PathToNowhere',

  'Biohackers',

  'sennheiser',

  'FigmaDesign',

  'shameless',

  'merval',

  'CX5',

  'ikeahacks',

  'HBOMAX',

  'datingoverforty',

  'fakehistoryporn',

  'transgender',

  'counterstrike',

  'antiarbeit',

  'pinkfloyd',

  'California',

  'libraryofruina',

  'freelanceWriters',

  '4kbluray',

  'cellbits',

  'WormFanfic',

  'SteamController',

  'Cloud9',

  'Michigan',

  'BeelcitosMemes',

  'mullvadvpn',

  'ems',

  'AutismInWomen',

  'StarWarsCantina',

  'GuitarAmps',

  'BudgetKeebs',

  'vrising',

  'swordartonline',

  'MinecraftHelp',

  'lrcast',

  'milwaukee',

  'HomeworkHelp',

  'webhosting',

  'persona4golden',

  'TrueChristian',

  'Jabra',

  'rickygervais',

  'VGC',

  'questions',

  'OntarioGrade12s',

  'beatsaber',

  'CVS',

  'GIMP',

  'RPGMaker',

  'datarecovery',

  'homebridge',

  'ghibli',

  'Emoney',

  'Nanny',

  '1Password',

  'wacom',

  'Wellington',

  'SiegeAcademy',

  'mercedes_benz',

  'Landlord',

  'swaywm',

  'AmItheButtface',

  'Transgender_Surgeries',

  'commandandconquer',

  'RG35XX',

  'EulaMains',

  'psg',

  'MeJulgue',

  'AceAttorney',

  'FedEx',

  'ofcoursethatsathing',

  'FUTMobile',

  'lowendgaming',

  'Satisfyingasfuck',

  'thisiswoke',

  'liluzivert',

  'sanantonio',

  'JohnWick',

  'OUTFITS',

  'Shortsqueeze',

  'copenhagen',

  'leetcode',

  'kia',

  'Spectrum',

  'simpsonsshitposting',

  'finance',

  'PokemonGoFriends',

  'gwent',

  'AustralianPolitics',

  'battlefield_one',

  'singaporefi',

  'euphoria',

  'StandingDesk',

  'helsinki',

  'ECE',

  'skeptic',

  'TheLastOfUs2',

  'howyoudoin',

  'exchristian',

  'funnysigns',

  'lawofattraction',

  'minnesotavikings',

  'AdobeIllustrator',

  'Veeam',

  'Zoom',

  'selfpublish',

  'antitrampo',

  'sexualidade',

  'amiibo',

  'macsetups',

  'Swimming',

  'occult',

  'acting',

  'RiseofKingdoms',

  'binance',

  'Idubbbz',

  'royalcaribbean',

  'MinecraftDungeons',

  'BarefootRunning',

  'ucf',

  'belowdeck',

  'triathlon',

  'Mounjaro',

  'toolgifs',

  'Brogress',

  'HungryArtists',

  'aldi',

  'askmath',

  'sneakerreps',

  'utdallas',

  'Concordia',

  'MxRThumbnails',

  'BattlefieldV',

  'NewSkaters',

  'GaySoundsShitposts',

  'DeepIntoYouTube',

  'Rowing',

  'twinpeaks',

  'bartenders',

  '23andme',

  'Adblock',

  'jurassicworldevo',

  'astoria',

  'optometry',

  'FFVIIRemake',

  'Rochester',

  'AskElectricians',

  'SilverDegenClub',

  'HPHogwartsMystery',

  'Chennai',

  'dungeondraft',

  'AnadeArmas',

  'Edinburgh',

  'Belgium2',

  'urbanplanning',

  'Brunei',

  'AustralianTeachers',

  'ShinyPokemon',

  'destiny2builds',

  'emulators',

  'powerrangers',

  'xbiking',

  'Soundbars',

  'kaiserredux',

  'ipl',

  'gorillaz',

  'typography',

  'OSHA',

  'GalaxyS23',

  'amphibia',

  'fitmeals',

  'ArsenalFC',

  'researchchemicals',

  'GoodAssSub',

  'meraki',

  'glasses',

  'MovieLeaksAndRumors',

  'astrology',

  'vegetablegardening',

  'FallGuysGame',

  'CoinBase',

  'veYakinEvren',

  'HighQualityGifs',

  'Hiphopcirclejerk',

  'linkedin',

  'Semaglutide',

  'Invisalign',

  'regularcarreviews',

  'feet',

  'ccna',

  'Anarchism',

  'GCSE',

  'GameStop',

  'suits',

  'AussieCasual',

  'ibs',

  'Vent',

  'shylily',

  'SPTarkov',

  'WarCollege',

  'AlHaithamMains',

  'degoogle',

  'GoogleMaps',

  'Standup',

  'unclebens',

  'Technoblade',

  'WoT',

  'oakland',

  'nyu',

  'ShittyLifeProTips',

  'compsci',

  'WeirdWheels',

  'oklahoma',

  'wrestling',

  'leaves',

  'mazda3',

  'Thunder',

  'stephenking',

  'rstats',

  'GODZILLA',

  'HUEstation',

  'foundfootage',

  'Gothenburg',

  'Appliances',

  'remnantgame',

  'WidescreenWallpaper',

  'FiveM',

  'ModdedMinecraft',

  'KissAnime',

  'Wonderlands',

  'anno1800',

  'ethstaker',

  'guessmyage',

  'WildHeartsGame',

  'hotwebseries_india',

  'SwiftUI',

  'Tau40K',

  'ror2',

  'thesimscc',

  'medical',

  'battlebots',

  'emiru',

  'wec',

  'Newbalance',

  'googlecloud',

  'JDM',

  'UNIFI',

  '4tran',

  'conseiljuridique',

  'transgendercirclejerk',

  'Vocaloid',

  'realtors',

  'pkmntcg',

  'Cameras',

  'NEU',

  'Radiology',

  'onedrive',

  'RedditForGrownups',

  'Iceland',

  'dankruto',

  'Buffalo',

  'bioinformatics',

  'IndieGaming',

  'askswitzerland',

  'HottestFemaleAthletes',

  'crappyoffbrands',

  'onednd',

  'Design',

  'wikipedia',

  'leanbeefpatty',

  'FIREUK',

  'AyakaMains',

  'behindthebastards',

  'fanedits',

  'longrange',

  'bollywood',

  'EntitledBitch',

  'AndroidAuto',

  'youtubehaiku',

  'DragonsDogma',

  'Insta360',

  'NootropicsDepot',

  'thelongdark',

  'HomeDecorating',

  'Warzone',

  'learnjava',

  'jerseycity',

  'Madden',

  'CanyonBikes',

  'Albuquerque',

  'walkaway',

  'Minoxbeards',

  'powerpoint',

  'CestQuoiCeTruc',

  'BeautifulIndianWomen',

  'CarAV',

  'handbrake',

  'tokkiemarktplaats',

  'PointlessStories',

  'zerobaseone',

  'HaggardGarage',

  'metro',

  'Dinosaurs',

  'UCSantaBarbara',

  'Nails',

  'aaaaaaacccccccce',

  'lastimages',

  'DeadSpace',

  'blackopscoldwar',

  'unket',

  'elonmusk',

  '4kdownloadapps',

  'vegaslocals',

  'starwarsrebels',

  'webtoons',

  'openwrt',

  'iamverysmart',

  'mountainbiking',

  'PSO2',

  'panthers',

  'olkb',

  'learndutch',

  'DMT',

  'mushokutensei',

  'conspiracy_commons',

  'seventeen',

  'Splendida',

  'skyrimrequiem',

  'analytics',

  'steelers',

  'iBUYPOWER',

  'beastboyshub',

  'MuslimMarriage',

  'Divorce',

  'UpvoteBecauseButt',

  'learntodraw',

  'CelebsWithPetiteTits',

  'AskScienceDiscussion',

  'quant',

  'AskEconomics',

  '49ers',

  'MrRobot',

  'SuggestALaptop',

  'xbox360',

  'classicwowtbc',

  'PergunteReddit',

  'fitbit',

  'sousvide',

  'theunforgiven',

  'listentothis',

  'RenPy',

  'sailing',

  'TheEminenceInShadow',

  'EDAnonymous',

  'ramen',

  'nexusmods',

  'Dodgers',

  'lies',

  'Comcast_Xfinity',

  'SexyWomanOfTheDay',

  'declutter',

  'boutiquebluray',

  'BaizhuMains',

  'sarmssourcetalk',

  'Firebase',

  'creepyPMs',

  'IndieDev',

  'jasontheweenie',

  'DreamWasTaken2',

  'PaMedicalMarijuana',

  'Revolut',

  'OrphanCrushingMachine',

  'bodyswap',

  'mixingmastering',

  'starbound',

  'ultimate',

  'saltierthankrayt',

  'calvinandhobbes',

  'BeloHorizonte',

  'AntiTaff',

  'Gold',

  'GakiNoTsukai',

  'SideProject',

  'ft86',

  'TwinCities',

  'everymanshouldknow',

  'projectmanagement',

  'socialmedia',

  'Passports',

  'chanceme',

  'kroger',

  'mtgrules',

  'OperaGX',

  'cineplex',

  'gaybrosgonemild',

  'Torontology',

  'Mercari',

  'PuzzleAndDragons',

  'bikepacking',

  'nyjets',

  'PasDeQuestionIdiote',

  'UkraineConflict',

  'FrugalFemaleFashion',

  'DronedOrc',

  'the1975',

  'MechanicalEngineering',

  'cs50',

  'PrettyOlderWomen',

  'Ioniq5',

  'lepin',

  'BBQ',

  'LancerRPG',

  'googledocs',

  'Lutris',

  'framework',

  'EmmaWatson',

  'jigokuraku',

  'MensLib',

  'Lightroom',

  'DDLCMods',

  'ffxi',

  'Ganyu',

  'devsarg',

  'Nirvana',

  'femboymemes',

  'PCOS',

  'HouseMD',

  'ThirdLifeSMP',

  'PokemonGoSpoofing',

  'todoist',

  'BeeSwarmSimulator',

  'Barcelona',

  'Basketball',

  'EmuDeck',

  'czskkurvy',

  'Visible',

  'RedditLaqueristas',

  'Semenretention',

  'ChatGPTJailbreak',

  'TEMU_Official',

  'nevertellmetheodds',

  'alexandradaddario',

  'ThePirateBays',

  'NTU',

  'Firefighting',

  'bipolar',

  'Chivalry2',

  'DankMemesFromSite19',

  'MysteryDungeon',

  'hellofresh',

  'PCSX2',

  'snakes',

  'buccaneers',

  'SexySportsBabes',

  'TheAstraMilitarum',

  'AcademicBiblical',

  'electronics',

  'relacionamentos',

  'blackmagicdesign',

  'indesign',

  'buffalobills',

  'LucidDreaming',

  'repweidiansneakers',

  'geegees',

  'falloutnewvegas',

  'OldWorldBlues',

  'Schwab',

  'RTLSDR',

  'animation',

  'EnoughCommieSpam',

  'slowcooking',

  'plants',

  'biotech',

  'ScottishPeopleTwitter',

  'HotWheels',

  'Csgohacks',

  'Hydroneer',

  'elementor',

  'AITA',

  'pokemmo',

  'RhodeIsland',

  'sdforall',

  'PORTUGALCARALHO',

  'wine_gaming',

  'Ghostbc',

  '0sanitymemes',

  'witchcraft',

  'DnB',

  'GoodGoodMemes',

  'twitchasians',

  'FortniteCreative',

  'Simracingstewards',

  'macmini',

  'PandR',

  'Pizza',

  '10s',

  'auslaw',

  'kobo',

  'conan',

  'Volumeeating',

  'TalkTherapy',

  'DigimonCardGame2020',

  'energydrinks',

  'Isekai',

  'CineShots',

  'ftlgame',

  'Wales',

  'manchester',

  'indianapolis',

  'Mustang',

  'buhaydigital',

  'USdefaultism',

  'pchelp',

  'galaxybuds',

  'NCSU',

  'Tyranids',

  'badhistory',

  'AnimalsBeingJerks',

  'signal',

  'TheCycleFrontier',

  'recruiting',

  'fuckepic',

  'LeedsUnited',

  'DebateReligion',

  'NYGiants',

  'NatureofPredators',

  'CICO',

  'Feminism',

  'oregon',

  'EnoughJKRowling',

  'volleyball',

  'PERU',

  'nreal',

  'AsOneAfterInfidelity',

  'R6ProLeague',

  'goodmythicalmorning',

  'WatchesCirclejerk',

  'AnnArbor',

  'etymology',

  'IceSpiceLust',

  'lyftdrivers',

  'SonoBisqueDoll',

  'RS3Ironmen',

  'ScienceBasedParenting',

  'Zwift',

  'CharliDamelioMommy',

  'hrblock',

  'sidehustle',

  'yubikey',

  'Reformed',

  'WhatsWrongWithYourCat',

  'Pickleball',

  'GERD',

  'FGOcomics',

  'koreatravel',

  'reactiongifs',

  'Portal',

  'MUAontheCheap',

  'MicrosoftWord',

  'arcticmonkeys',

  'startrekfleetcommand',

  'mintmobile',

  'blackops3',

  'Crypto_com',

  'cricut',

  'araragi',

  'ArcBrowser',

  'Rammstein',

  'gatekeeping',

  'rpdrcringe',

  'PSLF',

  'GermanRap',

  'react',

  'CelebrityBelly',

  'TheMajorityReport',

  'PlantedTank',

  'CarletonU',

  'unsw',

  'RobloxHelp',

  'modular',

  'ParlerWatch',

  'MilwaukeeTool',

  'dataanalysis',

  'metroidvania',

  'Nest',

  'unimelb',

  'rocksmith',

  'Scream',

  'kitchener',

  'vitahacks',

  'BPDlovedones',

  'NikkeOutpost',

  'knifeclub',

  'Helicopters',

  'pennystocks',

  'TikTokSeeThrough',

  'AutoHotkey',

  'parrots',

  'uchicago',

  'pussypassdenied',

  'thalassophobia',

  'Braves',

  'Embroidery',

  'AmateurRoomPorn',

  'CreatorsAdvice',

  'BBallShoes',

  'OPNsenseFirewall',

  'jovemnerd',

  'FixedGearBicycle',

  'AssassinsCreedOdyssey',

  'd100',

  'AnycubicPhoton',

  'ValueInvesting',

  'DHgate',

  'YuGiOhMasterDuel',

  'htpc',

  'css',

  'futurama',

  'NonCredibleDiplomacy',

  '5ToubunNoHanayome',

  'ModelsGoneMild',

  'yandere',

  'Sudan',

  'CaliBanging',

  'MacOSBeta',

  'mealtimevideos',

  'SS13',

  'virtualbox',

  'indiasocial',

  'CelsiusNetwork',

  'AmexPlatinum',

  'ukvisa',

  'Strava',

  'AskGaybrosOver30',

  'CloudFlare',

  'CelebrityFeet',

  'NixOS',

  'Prague',

  'SaimanSays',

  'Lawyertalk',

  'whichbike',

  'MEGA',

  'Eugene',

  'CAStateWorkers',

  'LOONA',

  'PortlandOR',

  'thinkorswim',

  'NotMyJob',

  'ZBrush',

  'ps3homebrew',

  'osx',

  'sunraybee',

  'TheMarvelousMrsMaisel',

  'arcteryx',

  'chicagobulls',

  'progmetal',

  'bengals',

  'OeffentlicherDienst',

  'DemonSchoolIrumakun',

  'BLAHAJ',

  'FoodNYC',

  'streetfighterduel',

  'croptopgirls',

  'hapas',

  'castlevania',

  'TIdaL',

  'cowboys',

  'FamosasGifs',

  'IThinkYouShouldLeave',

  'cosplayers',

  'ucr',

  'whiskey',

  'Frostpunk',

  'PhantomForces',

  'VisitingIceland',

  'TMNT',

  'MyChemicalRomance',

  'AMDLaptops',

  'MyPeopleNeedMe',

  'teenagersbuthot',

  'bicycletouring',

  'PrintedWarhammer',

  'buildapcforme',

  'gme_meltdown',

  'summerhousebravo',

  'Padres',

  'insurgency',

  'GreatBritishMemes',

  'MemeHunter',

  'ethtrader',

  'SBU',

  'referralcodes',

  'drumkitsleaks',

  'Nerf',

  'Scotch',

  'SWORDS',

  'recipes',

  'PHbuildapc',

  'whatsthissnake',

  'TechnoProduction',

  'arkhamhorrorlcg',

  'kingcobrajfs',

  'EnaiRim',

  'gay_irl',

  'nudism',

  'cyberpunkred',

  'Vanced',

  'XXXTENTACION',

  'MacCrack',

  'Laesterschwestern',

  'Enneagram',

  'Frat',

  'bigsleep',

  'inscryption',

  'detrans',

  'orslokx',

  'eFootball',

  'washingtonwizards',

  'GarminFenix',

  'pmp',

  'Cubers',

  'CK2GameOfthrones',

  'l4d2',

  'HuntsvilleAlabama',

  'DownUnderTV',

  'jerseyshore',

  'Indiana',

  'deathnote',

  'tollywood',

  'yeat_',

  'Discordmemes',

  'jpegmafia',

  'Necrontyr',

  'pokemonmemes',

  'MonsterHigh',

  'FFBraveExvius',

  'AsianParentStories',

  'AmongUs',

  'NormMacdonald',

  'Maps',

  'xxfitnessGOALStoday',

  'legodeal',

  'passive_income',

  'Silksong',

  'IdleHeroes',

  'dropship',

  'Astros',

  'modernwarfare2',

  'vintageaudio',

  'latin',

  'GPT_jailbreaks',

  'ck3',

  'pcgamingtechsupport',

  'BruceDropEmOff',

  'Awwducational',

  'gmu',

  'raimimemes',

  'AnyDesk',

  'FFXV',

  'MiniPCs',

  'myfriendwantstoknow',

  'dankmark',

  'loreofleague',

  'InfowarriorRides',

  'ShittyMapPorn',

  'TheForest',

  'Nikon',

  'donaldglover',

  'Frasier',

  'FreeStuffGuru',

  'BungouStrayDogs',

  'bioniclelego',

  'flutterhelp',

  'Adguard',

  'AstroGaming',

  'amateur_boxing',

  'worldjerking',

  'kodi',

  'Brampton',

  'BigBrother',

  'JohnMayer',

  'Dashcam',

  'OptimizedGaming',

  'GregDoucette',

  'animegifs',

  'StopGaming',

  'Bestbuy',

  'OnePieceTCG',

  'interiordecorating',

  'origin',

  'Dublin',

  'prius',

  'OrthodoxChristianity',

  'Atelier',

  'BicyclingCirclejerk',

  'Edgerunners',

  'orks',

  'ACMilan',

  'HaloStory',

  'lesserafim',

  'DerechoGenial',

  'Noctua',

  'humblebundles',

  'UCSC',

  'lost',

  'ForeverAloneDating',

  'asheville',

  'DaftPunk',

  'TalesFromDF',

  'mendrawingwomen',

  'virginvschad',

  'realms',

  'JusticeServed',

  'gpdwin',

  'aspergirls',

  'datasets',

  'Banking',

  'webcomics',

  'WindowsOnDeck',

  'evilbuildings',

  'controlgame',

  'Stormworks',

  'Upwork',

  'Calibre',

  'SuzumeNoTojimari',

  'bettafish',

  'whatsthisbird',

  'WGU_CompSci',

  'truetf2',

  'Roku',

  'dankrishu',

  'ArchitecturePorn',

  'kollywood',

  'artcommissions',

  'PokemonRMXP',

  'AskTechnology',

  'VIDEOENGINEERING',

  'slp',

  'AmazonDSPDrivers',

  'WatchDogsWoofInside',

  'OntarioLandlord',

  'snes',

  'SaaS',

  '1688Reps',

  'LinkinPark',

  'Libertarian',

  'robloxgamedev',

  'smarthome',

  'saudiarabia',

  'DINgore',

  'ruby',

  'picrew',

  'WayOfTheBern',

  'titanic',

  'BalticStates',

  'redditmoment',

  'ArgentinaBenderStyle',

  'backrooms',

  'Polestar',

  'TheCivilService',

  'alevel',

  'Habs',

  'buffy',

  'Gatineau',

  'MarvelLegends',

  'LetsNotMeet',

  'opengl',

  'wolongfallendynasty',

  'TorontoDriving',

  'IndiaNostalgia',

  'programiranje',

  'Mudae',

  'whatsthisrock',

  'LaptopDeals',

  'TrueCrimeDK',

  'LinuxCrackSupport',

  'orthotropics',

  'WeightLossAdvice',

  'armenia',

  'TorontoMetU',

  '2hujerk',

  'AIDungeon',

  'flightradar24',

  'soloboardgaming',

  'dishonored',

  'freebies',

  'squishmallow',

  'PrimeiraLiga',

  'whatisthisanimal',

  'TrueReddit',

  'comedy',

  'SlavaUkrayini',

  'Worldbox',

  'midnightsuns',

  'StrangerofParadiseFFO',

  'FordMaverickTruck',

  '8bitdo',

  'publix',

  'EUGENIACOONEY',

  'AskGayMen',

  'PioneerMTG',

  'BoneAppleTea',

  'Infidelity',

  'hogwartslegacyJKR',

  'PNVmilitary_community',

  'HauntedMound',

  'AV1',

  'customhearthstone',

  'phoebebridgers',

  'ChineseWatches',

  'Virginia',

  'FulfillmentByAmazon',

  'KoreanCelebrityFap',

  'lasercutting',

  'PhilosophyMemes',

  'conlangs',

  'coins',

  'BetterEveryLoop',

  'mystery',

  'hoi4modding',

  'NiceHash',

  'mtgvorthos',

  'UniversalOrlando',

  'VirginiaTech',

  'OldSchoolCelebs',

  'memeframe',

  'realbikinis',

  'SteamGameSwap',

  'DarwinAwards',

  'Permaculture',

  'burdurland',

  'f45',

  'TheLeftCantMeme',

  'Amouranth',

  'NewVegasMemes',

  'lgbtmemes',

  'streetwearstartup',

  'tasker',

  'thebadbatch',

  'IndianStreetBets',

  'CrownOfTheMagister',

  'Astroneer',

  'awwnime',

  'consolerepair',

  'ChaiApp',

  'BladeAndSorcery',

  'RetroFuturism',

  'backpacks',

  'BingQuizAnswers',

  'ApksApps',

  'serialkillers',

  'XboxSeriesS',

  'AzureCertification',

  'Universitaly',

  'ForgottenWeapons',

  'bi_irl',

  'voidlinux',

  'turntables',

  'queensuniversity',

  'spiders',

  'ProgrammingLanguages',

  'NLCelebs',

  'acotar',

  'kfeets',

  'F1Technical',

  'cad',

  'disney',

  'RealDayTrading',

  'Weddingsunder10k',

  'mattcolville',

  'CamGirlProblems',

  'dropout',

  'Stremio',

  'Traeger',

  'HiganEruthyll',

  'TheGriffonsSaddlebag',

  'sims2',

  'ChemicalEngineering',

  'Repbudgetfashion',

  'OnePieceTC',

  'trailrunning',

  'newhampshire',

  'Beichtstuhl',

  'teenagersnew',

  'Ratschlag',

  'PokemonUnbound',

  'anker',

  'ubisoft',

  'QuebecLibre',

  'TheWhiteLotusHBO',

  'EtherMining',

  'civ5',

  'Bellingham',

  'furniture',

  'callofcthulhu',

  'cocaine',

  'FullmetalAlchemist',

  'childemains',

  'lightsabers',

  'succulents',

  'PartneredYoutube',

  '2b2t',

  'vinyljerk',

  'programacion',

  'TroChuyenLinhTinh',

  'MemeEconomy',

  'AskArgentina',

  'AnimeSketch',

  'Cordoba',

  'migraine',

  'ufo',

  'Jujutsufolk',

  'DiretoDoZapZap',

  'bravia',

  'MeetPeople',

  'Revit',

  'Harley',

  'NationalServiceSG',

  'Battletechgame',

  'roguelikes',

  'environment',

  'DnD5e',

  'Bangkok',

  'Supernatural',

  'Georgia',

  'scuba',

  'SafeMoon',

  'BringingUpBates',

  'NuCarnival',

  'SNKRS',

  'clevelandcavs',

  'cheatatmathhomework',

  'android_beta',

  'DS4Windows',

  'AskAnthropology',

  'FacebookAds',

  'FitAndNatural',

  'Manhua',

  'GoogleFi',

  'h1b',

  'Earbuds',

  'WFH',

  'comedyheaven',

  'RoleReversal',

  'Shadowrun',

  'somethingimade',

  'Bowling',

  'PowerApps',

  'amazonecho',

  'uber',

  'TLAUNCHER',

  'FreckledGirls',

  'Bad_Cop_No_Donut',

  'GarciavsDavisLive1',

  'AmItheEx',

  'TeamSolomid',

  'fantasywriters',

  'lastcloudia',

  'fiaustralia',

  'likeus',

  'BaseBuildingGames',

  'seedboxes',

  'Roborock',

  'Parahumans',

  'climbergirls',

  'gshock',

  'Utah',

  'Catswhoyell',

  'ItemShop',

  'omegle',

  'avatartrading',

  'BIGTREETECH',

  'phclassifieds',

  'BleachBraveSouls',

  'PampamilyangPaoLUL',

  'azuredevops',

  'DokkanBattleCommunity',

  'Moviesinthemaking',

  'bigboobproblems',

  'uplay',

  'MandelaCatalogue',

  'tribesofmidgard',

  'CommunismMemes',

  'pointlesslygendered',
]

export default typewriterSubreddits
