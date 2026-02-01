const elfNames = {
  traditional: [
    { name: "Elandorr", meaning: "Elegant dancer under the moonlight", background: "Born into the noble house of Silvermoon Forest" },
    { name: "Aerindel", meaning: "Guardian of the stars", background: "Ancient elf priestess who watches over celestial bodies" },
    { name: "Galadriel", meaning: "Maiden of light", background: "Elven princess from the City of Radiance" },
    { name: "Thranduil", meaning: "King of the forest", background: "Elven monarch who has ruled the woodland realm for millennia" },
    { name: "Legolas", meaning: "Green leaf elf", background: "Master archer and woodland warrior" },
    { name: "Elrond", meaning: "Star dome", background: "Wise elven lord and keeper of ancient knowledge" },
    { name: "Arwen", meaning: "Royal maiden", background: "Bridge between the worlds of elves and humans" },
    { name: "Celeborn", meaning: "Silver tree", background: "Ancient elf who lives in harmony with nature" },
    { name: "Glorfindel", meaning: "Golden-haired elf", background: "Hero who returned from the realm of death" },
    { name: "Elladan", meaning: "Elf-man", background: "Firstborn son of a half-elf family" },
    { name: "Elrohir", meaning: "Elven knight", background: "Warrior who fights alongside his brother" },
    { name: "Idril", meaning: "Shining star", background: "Beautiful elf from a hidden valley" },
    { name: "Tuor", meaning: "Strength", background: "Human hero accepted by the elves" },
    { name: "Luthien", meaning: "Flower", background: "Legendary elf of unmatched beauty" },
    { name: "Beren", meaning: "Brave", background: "Human who dared to love an elf" },
    { name: "Earendil", meaning: "Sea star", background: "Mariner who sailed to the heavens" },
    { name: "Fingolfin", meaning: "Wise leader", background: "Great king who challenged the darkness" },
    { name: "Feanor", meaning: "Spirit of fire", background: "Genius who created the Silmarils" },
    { name: "Maedhros", meaning: "Red-haired", background: "Loyal warrior of tragic fate" },
    { name: "Maglor", meaning: "Golden voice", background: "Poet who sings to heal wounds" },
    { name: "Curufin", meaning: "Skillful hand", background: "Craftsman who inherited his father's art" },
    { name: "Caranthir", meaning: "Red-faced", background: "Warrior with a fierce temper" },
    { name: "Celegorm", meaning: "Strong one", background: "Hunter of great renown" },
    { name: "Finrod", meaning: "Friend of wisdom", background: "Benefactor who helped humans build kingdoms" },
    { name: "Orodreth", meaning: "Mountain guardian", background: "Brave elf who guards the borders" },
    { name: "Gil-galad", meaning: "Starlight", background: "Last High King of the Elves" },
    { name: "Cirdan", meaning: "Shipwright", background: "Elder elf who sends others across the sea" },
    { name: "Gwindor", meaning: "Young warrior", background: "Elven champion who fought for love" },
    { name: "Beleg", meaning: "Strong", background: "Greatest archer of all time" },
    { name: "Mablung", meaning: "Heavy hand", background: "Warrior who wields a massive blade" },
    { name: "Daeron", meaning: "Master", background: "Most skilled musician among elves" },
    { name: "Nimrodel", meaning: "White lady", background: "Legendary elf who vanished mysteriously" },
    { name: "Amroth", meaning: "Climber", background: "Devoted elf who searched for his beloved" },
    { name: "Haldir", meaning: "Hidden one", background: "Guardian of the forest borders" },
    { name: "Rumil", meaning: "River", background: "Elf in harmony with nature" },
    { name: "Orophin", meaning: "Mountain peak", background: "Warrior who guards the high forest" },
    { name: "Celebrian", meaning: "Silver tree", background: "Guardian of healing waters" },
    { name: "Arathorn", meaning: "King's tree", background: "Elf of royal bloodline" },
    { name: "Gilraen", meaning: "Star maiden", background: "Wise woman with prophetic gifts" },
    { name: "Dior", meaning: "Successor", background: "Young king who inherited his parents' realm" },
    { name: "Elured", meaning: "Child of stars", background: "Twin elf, elder brother" },
    { name: "Elurin", meaning: "Friend of stars", background: "Twin elf who grew with his brother" },
    { name: "Eol", meaning: "Dark elf", background: "Recluse who dwells deep in the forest" },
    { name: "Maeglin", meaning: "Sharp glance", background: "Tragic figure who betrayed his kingdom" },
    { name: "Aredhel", meaning: "Noble elf", background: "Elf princess who loved freedom" },
    { name: "Turgon", meaning: "Founder", background: "King who built a hidden valley" }
  ],
  cute: [
    { name: "Lumina", meaning: "Shining like a star", background: "Little elf who lives in the Starlight Garden" },
    { name: "Petalfall", meaning: "Elf of falling petals", background: "Flower fairy who travels with the spring breeze" },
    { name: "Sparkle", meaning: "Twinkling sprite", background: "Dances in the morning light" },
    { name: "Breezy", meaning: "Breeze elf", background: "Brings the scent of spring wherever she goes" },
    { name: "Dewdrop", meaning: "Dewdrop fairy", background: "Collects morning dew on flower petals" },
    { name: "Twinkle", meaning: "Little twinkling star", background: "Guards children's dreams at night" },
    { name: "Giggles", meaning: "Laughing elf", background: "Her laughter dispels all gloom" },
    { name: "Bloom", meaning: "Blooming flower", background: "Life spirit who brings renewal to all things" },
    { name: "Whisper", meaning: "Soft whisperer", background: "Whispers stories in your ear" },
    { name: "Bubbles", meaning: "Bubble fairy", background: "Creates wonders with magical bubbles" },
    { name: "Sugar", meaning: "Sweet elf", background: "Brings warmth and sweetness to the world" },
    { name: "Candy", meaning: "Candy fairy", background: "Heals hearts with sweet magic" },
    { name: "Lolly", meaning: "Lollipop elf", background: "Guardian who keeps childhood innocence" },
    { name: "Pudding", meaning: "Pudding fairy", background: "Soft and cute healing spirit" },
    { name: "Cookie", meaning: "Cookie elf", background: "Little chef who bakes happiness" },
    { name: "Muffin", meaning: "Muffin fairy", background: "Food lover who brings morning fragrance" },
    { name: "Jelly", meaning: "Jelly elf", background: "Bouncy and joyful messenger" },
    { name: "Fuzzy", meaning: "Fuzzy elf", background: "Hugs that can heal anything" },
    { name: "Softie", meaning: "Gentle spirit", background: "The gentlest existence in the world" },
    { name: "Snuggly", meaning: "Snuggling elf", background: "Companion who loves to cuddle" },
    { name: "Cuddles", meaning: "Cuddle fairy", background: "Heals hearts with warm embraces" },
    { name: "Huggy", meaning: "Hugging elf", background: "Little one who loves close contact" },
    { name: "Fluffy", meaning: "Fluffy elf", background: "Soft as a cloud" },
    { name: "Puffy", meaning: "Marshmallow fairy", background: "Light and airy like a cloud" },
    { name: "Dreamy", meaning: "Dreamy elf", background: "Lives in the world of beautiful dreams" },
    { name: "Cloudy", meaning: "Cloud elf", background: "Soars freely in the sky" },
    { name: "Sunny", meaning: "Sunshine elf", background: "Brings warmth and hope" },
    { name: "Happy", meaning: "Joyful spirit", background: "Always cheerful and happy" },
    { name: "Joy", meaning: "Delightful elf", background: "Messenger who spreads joy" },
    { name: "Smile", meaning: "Smiling fairy", background: "Infects everyone with her smile" },
    { name: "Glee", meaning: "Gleeful elf", background: "Full of energy and enthusiasm" },
    { name: "Cheer", meaning: "Cheering fairy", background: "Encourages others with her cheers" },
    { name: "Merry", meaning: "Merry elf", background: "Brings festival-like happiness" },
    { name: "Jolly", meaning: "Jolly spirit", background: "Always laughing little one" },
    { name: "Bouncy", meaning: "Bouncy elf", background: "Athlete full of energy" },
    { name: "Jump", meaning: "Jumping fairy", background: "Loves to hop and bounce around" },
    { name: "Hop", meaning: "Hopping elf", background: "Explores the world with light steps" },
    { name: "Skip", meaning: "Skipping fairy", background: "Dancer as light as the wind" },
    { name: "Dance", meaning: "Dancing elf", background: "Expresses all emotions through dance" },
    { name: "Sing", meaning: "Singing fairy", background: "Voice like heavenly music" },
    { name: "Play", meaning: "Playful elf", background: "Forever keeps a playful heart" }
  ],
  mystical: [
    { name: "Shadowweave", meaning: "Weaver of shadow magic", background: "Recluse who masters ancient magic" },
    { name: "Mysticstar", meaning: "Child of mysterious stars", background: "Magical elf born from starlight" },
    { name: "Arcanum", meaning: "Guardian of secrets", background: "Protector of forgotten secrets" },
    { name: "Voidwalker", meaning: "Walker of void", background: "Mysterious being who travels through space rifts" },
    { name: "Ethereal", meaning: "Spirit of ether", background: "Elf who doesn't belong to this world" },
    { name: "Astral", meaning: "Astral messenger", background: "Visitor from distant star realms" },
    { name: "Nebula", meaning: "Nebula elf", background: "Born from cosmic dust" },
    { name: "Cosmos", meaning: "Soul of the universe", background: "Sage who understands the essence of all things" },
    { name: "Zodiac", meaning: "Zodiac guardian", background: "Each constellation has its own guardian" },
    { name: "Oracle", meaning: "Prophet", background: "Seer who glimpses fragments of the future" },
    { name: "Rune", meaning: "Rune master", background: "Master of ancient rune magic" },
    { name: "Glyph", meaning: "Glyph elf", background: "Changes reality with magical symbols" },
    { name: "Sigil", meaning: "Seal guardian", background: "Elf who guards ancient seals" },
    { name: "Charm", meaning: "Charm maker", background: "Expert in creating magical charms" },
    { name: "Spell", meaning: "Spell caster", background: "Master of countless magical incantations" },
    { name: "Witch", meaning: "Witch elf", background: "Expert in curses and blessings" },
    { name: "Sorcer", meaning: "Sorcerer", background: "Wise one who masters forbidden magic" },
    { name: "Wizard", meaning: "Wizard", background: "Scholar of ancient magical texts" },
    { name: "Mage", meaning: "Mage", background: "Controller of elemental magic" },
    { name: "Enchan", meaning: "Enchanter", background: "Can imbue any item with magic" },
    { name: "Alchemy", meaning: "Alchemist", background: "Transforms the ordinary into miraculous" },
    { name: "Transmute", meaning: "Transmuter", background: "Magician who changes matter's properties" },
    { name: "Summon", meaning: "Summoner", background: "Can call forth beings from other realms" },
    { name: "Portal", meaning: "Portal keeper", background: "Traveler who opens dimensional gates" },
    { name: "Dimension", meaning: "Dimensional walker", background: "Shuttles between parallel worlds" },
    { name: "Realm", meaning: "Realm guardian", background: "Protects the boundaries of different dimensions" },
    { name: "Spirit", meaning: "Spirit essence", background: "Pure magical energy being" },
    { name: "Soul", meaning: "Soul guide", background: "Guide who leads lost souls" },
    { name: "Phantom", meaning: "Phantom elf", background: "Mysterious being wandering among humans" },
    { name: "Specter", meaning: "Specter", background: "Magical creature hard to capture" },
    { name: "Wraith", meaning: "Wraith", background: "Elf carrying memories from past lives" },
    { name: "Ghoul", meaning: "Ghoul", background: "Dark elf guarding ancient cemeteries" },
    { name: "Demon", meaning: "Demon elf", background: "Descendant of fallen angels" },
    { name: "Angel", meaning: "Angel elf", background: "Pure and holy guardian" },
    { name: "Seraph", meaning: "Seraph", background: "Highest rank of celestial beings" },
    { name: "Cherub", meaning: "Cherub", background: "Keeper of knowledge and wisdom" },
    { name: "Throne", meaning: "Throne angel", background: "Pillar supporting the heavens" },
    { name: "Power", meaning: "Power angel", background: "Warrior executing divine missions" },
    { name: "Virtue", meaning: "Virtue angel", background: "Spreads virtue and good deeds" },
    { name: "Dominion", meaning: "Dominion", background: "Elf managing specific domains" },
    { name: "Archangel", meaning: "Archangel", background: "Highest commander of celestial forces" },
    { name: "Divine", meaning: "Divine spirit", background: "Elf with divine nature" }
  ],
  dark: [
    { name: "Nighthollow", meaning: "Void of night", background: "Mysterious being at the edge of darkness" },
    { name: "Shadowmourn", meaning: "Dark lament", background: "Shadow elf singing ancient dirges" },
    { name: "Voidblade", meaning: "Blade of void", background: "Assassin who hunts in darkness" },
    { name: "Dreadlord", meaning: "Lord of dread", background: "Monarch ruling the realm of darkness" },
    { name: "Nightshade", meaning: "Night shadow", background: "Caster of deadly shadows in moonlight" },
    { name: "Grim", meaning: "Grim one", background: "Executor without emotions" },
    { name: "Doom", meaning: "Doom", background: "Messenger bringing finality" },
    { name: "Death", meaning: "Death", background: "Underworld elf guiding souls" },
    { name: "Soulreaper", meaning: "Soul reaper", background: "Underworld guard harvesting the dead" },
    { name: "Crypt", meaning: "Crypt keeper", background: "Undead guarding ancient tombs" },
    { name: "Tomb", meaning: "Tomb", background: "Ancient elf sleeping in stone coffins" },
    { name: "Grave", meaning: "Grave", background: "Buried with forgotten history" },
    { name: "Coffin", meaning: "Coffin", background: "Eternal slumber of elf spirits" },
    { name: "Sarcophagus", meaning: "Sarcophagus", background: "Vessel sealing powerful forces" },
    { name: "Catacomb", meaning: "Catacomb", background: "Place hiding countless secrets" },
    { name: "Necropolis", meaning: "City of dead", background: "Mysterious place where souls gather" },
    { name: "Underworld", meaning: "Underworld", background: "Final destination of deceased souls" },
    { name: "Abyss", meaning: "Abyss", background: "Bottomless space of darkness" },
    { name: "Chaos", meaning: "Chaos", background: "Embodiment of disorderly forces" },
    { name: "Disorder", meaning: "Disorder", background: "Destroyer breaking all rules" },
    { name: "Anarchy", meaning: "Anarchy", background: "Revolutionary overthrowing everything" },
    { name: "Destruction", meaning: "Destruction", background: "Destroyer bringing finality" },
    { name: "Ruin", meaning: "Ruin", background: "Elf witnessing rise and fall of civilizations" },
    { name: "Decay", meaning: "Decay", background: "Force returning all to dust" },
    { name: "Rot", meaning: "Rot", background: "Elf decomposing dead matter" },
    { name: "Fester", meaning: "Fester", background: "Dark creature breeding in shadows" },
    { name: "Corrupt", meaning: "Corrupt", background: "Elf eroded by dark forces" },
    { name: "Taint", meaning: "Taint", background: "Evil force polluting pure beings" },
    { name: "Blight", meaning: "Blight", background: "Curse withering all life" },
    { name: "Curse", meaning: "Curse", background: "Evil elf bringing misfortune" },
    { name: "Hex", meaning: "Hex", background: "Warlock using dark witchcraft" },
    { name: "Jinx", meaning: "Jinx", background: "Mischievous elf bringing bad luck" },
    { name: "Voodoo", meaning: "Voodoo", background: "Priest mastering mysterious curses" },
    { name: "Cult", meaning: "Cult", background: "Group worshipping dark forces" },
    { name: "Occult", meaning: "Occult", background: "Scholar studying forbidden knowledge" },
    { name: "Forbidden", meaning: "Forbidden", background: "Untouchable secrets" },
    { name: "Taboo", meaning: "Taboo", background: "Powerful magic forbidden to use" },
    { name: "Sacrifice", meaning: "Sacrifice", background: "Dark ritual requiring a price" },
    { name: "Blood", meaning: "Blood", background: "Warlock trading blood for power" },
    { name: "Pact", meaning: "Pact", background: "Agreement signed with dark forces" },
    { name: "Deal", meaning: "Deal", background: "Demon trading wishes for souls" },
    { name: "Bargain", meaning: "Bargain", background: "Cunning demon merchant" },
    { name: "Betrayal", meaning: "Betrayal", background: "Tragedy of being betrayed by trust" },
    { name: "Treacher", meaning: "Treacherous", background: "Existence that can never be trusted" }
  ],
  forest: [
    { name: "Leafwhisper", meaning: "Whisperer of leaves", background: "Forest child who understands leaf language" },
    { name: "Briarheart", meaning: "Heart of thorns", background: "Brave warrior guarding thorn jungles" },
    { name: "Oakshield", meaning: "Shield of oak", background: "Guardian made from ancient trees" },
    { name: "Willow", meaning: "Willow", background: "Elf guarding the forest by the river" },
    { name: "Maple", meaning: "Maple", background: "Elf bringing golden autumn" },
    { name: "Birch", meaning: "Birch", background: "Pure as snow forest elf" },
    { name: "Pine", meaning: "Pine", background: "Evergreen guardian" },
    { name: "Cedar", meaning: "Cedar", background: "Forest sage emitting fragrance" },
    { name: "Elm", meaning: "Elm", background: "Elf connecting heaven and earth" },
    { name: "Ash", meaning: "Ash", background: "Forest mother bringing rebirth" },
    { name: "Spruce", meaning: "Spruce", background: "Towering watcher reaching clouds" },
    { name: "Fir", meaning: "Fir", background: "Resilient elf enduring harsh winters" },
    { name: "Hemlock", meaning: "Hemlock", background: "Guardian carrying poison" },
    { name: "Yew", meaning: "Yew", background: "Companion of death and rebirth" },
    { name: "Larch", meaning: "Larch", background: "Unique and rare elf" },
    { name: "Redwood", meaning: "Redwood", background: "Long-lived witness of millennia" },
    { name: "Sequoia", meaning: "Sequoia", background: "Giant of the forest" },
    { name: "Cypress", meaning: "Cypress", background: "Unchanging eternal elf" },
    { name: "Juniper", meaning: "Juniper", background: "Gatherer of healing herbs" },
    { name: "Holly", meaning: "Holly", background: "Blessing elf bringing good fortune" },
    { name: "Ivy", meaning: "Ivy", background: "Elf climbing to great heights" },
    { name: "Vine", meaning: "Vine", background: "Bond connecting all things" },
    { name: "Moss", meaning: "Moss", background: "Carpet covering ancient forests" },
    { name: "Fern", meaning: "Fern", background: "Little sprite in shady places" },
    { name: "Mushroom", meaning: "Mushroom", background: "Life born from decay" },
    { name: "Fungi", meaning: "Fungi", background: "Cleaner decomposing death" },
    { name: "Spore", meaning: "Spore", background: "Seed spreading life" },
    { name: "Root", meaning: "Root", background: "Foundation supporting the entire forest" },
    { name: "Branch", meaning: "Branch", background: "Arms reaching toward the sky" },
    { name: "Trunk", meaning: "Trunk", background: "Unbreakable pillar" },
    { name: "Bark", meaning: "Bark", background: "Armor protecting soft interior" },
    { name: "Sap", meaning: "Sap", background: "Flowing life force" },
    { name: "Bloom", meaning: "Bloom", background: "Spring's most beautiful gift" },
    { name: "Fruit", meaning: "Fruit", background: "Autumn's blessing of harvest" },
    { name: "Seed", meaning: "Seed", background: "Hope of future life" },
    { name: "Nut", meaning: "Nut", background: "Forest elves' favorite food" },
    { name: "Berry", meaning: "Berry", background: "Sweet little snack" },
    { name: "Nectar", meaning: "Nectar", background: "Sweetness attracting elves" },
    { name: "Pollen", meaning: "Pollen", background: "Messenger spreading life" },
    { name: "Breeze", meaning: "Breeze", background: "Gentle hand passing through forest" },
    { name: "Rain", meaning: "Rain", background: "Blessing nourishing all things" },
    { name: "Dew", meaning: "Dew", background: "Morning's gem" },
    { name: "Stream", meaning: "Stream", background: "Forest's bloodstream" },
    { name: "Pond", meaning: "Pond", background: "Tranquil mirror" },
    { name: "Lake", meaning: "Lake", background: "Deep mysterious eye" }
  ],
  xianxia: [
    { name: "萧尘", meaning: "One sword breaks all laws", background: "Sword immortal who ascended from mortal cultivation" },
    { name: "墨莲", meaning: "Reincarnation of the Nine Heavens Mystic Maiden", background: "Lotus fairy continuing past life's destiny" },
    { name: "星河", meaning: "All submit under the stars", background: "Cultivator controlling the power of stars" },
    { name: "月华", meaning: "Fairy under the moon", background: "Moon spirit born from moonlight" },
    { name: "紫霄", meaning: "Purple aura from the east", background: "Great cultivator who comprehends heavenly laws" },
    { name: "云飞", meaning: "Riding the wind", background: "Carefree immortal flying on swords" },
    { name: "玉清", meaning: "Pure jade void", background: "Taoist cultivating jade purity methods" },
    { name: "凌风", meaning: "Blade of the wind", background: "Sword cultivator using wind as blade" },
    { name: "梦蝶", meaning: "Zhuangzi's dream butterfly", background: "Mysterious cultivator training in dreams" },
    { name: "流云", meaning: "Ethereal as clouds", background: "Master of cloud-like movement arts" },
    { name: "青鸾", meaning: "Divine bird descended", background: "Spirit beast, reincarnation of blue phoenix" },
    { name: "朱雀", meaning: "Southern divine bird", background: "Fire master controlling flames" },
    { name: "白虎", meaning: "Western divine beast", background: "Decisive sword cultivator" },
    { name: "玄武", meaning: "Northern divine beast", background: "Defense expert, invincible shield" },
    { name: "青龙", meaning: "Eastern divine dragon", background: "Master controlling wood and life force" },
    { name: "麒麟", meaning: "Auspicious beast arrived", background: "Lucky divine beast bringing fortune" },
    { name: "凤凰", meaning: "Nirvana rebirth", background: "Divine bird reborn from flames" },
    { name: "龙吟", meaning: "Dragon's roar", background: "Cultivator with dragon bloodline" },
    { name: "凤鸣", meaning: "Phoenix's cry", background: "Female cultivator with phoenix blood awakened" },
    { name: "剑心", meaning: "Sword heart connects to divine", background: "Sword immortal who entered the way through sword" },
    { name: "丹心", meaning: "Alchemy master", background: "Divine doctor refining pills" },
    { name: "阵法", meaning: "Array grandmaster", background: "Formation master deploying arrays" },
    { name: "符箓", meaning: "Talisman expert", background: "Talisman maker drawing magic symbols" },
    { name: "御兽", meaning: "Beast king possessed", background: "Beast tamer contracting spirit beasts" },
    { name: "炼器", meaning: "Weapon refining grandmaster", background: "Master refining magical treasures" },
    { name: "炼魂", meaning: "Soul refining venerable", background: "Soul cultivator training spirit power" },
    { name: "幻术", meaning: "Illusion master", background: "Enchanter creating illusions" },
    { name: "傀儡", meaning: "Puppet master", background: "Eerie cultivator controlling puppets" },
    { name: "毒术", meaning: "Poison expert", background: "Master using poisons" },
    { name: "医道", meaning: "Medical immortal saint", background: "Healer doctor saving the world" },
    { name: "鬼道", meaning: "Ghost path cultivator", background: "Cultivator dealing with ghosts" },
    { name: "魔道", meaning: "Demon path overlord", background: "Demon cultivator practicing magic" },
    { name: "佛道", meaning: "Buddhist dharma monk", background: "High monk practicing Buddhism" },
    { name: "妖道", meaning: "Demon clan great power", background: "Strong one among the demon clan" },
    { name: "天骄", meaning: "Son of heaven's mandate", background: "Heaven's pride favored by the dao" },
    { name: "妖孽", meaning: "Monstrous genius", background: "Heaven-defying monstrous existence" },
    { name: "绝世", meaning: "Peerless genius", background: "Genius surpassing common sense" },
    { name: "无双", meaning: "Unmatched under heaven", background: "Invincible powerhouse of the generation" },
    { name: "至尊", meaning: "Supreme existence", background: "Great power standing at the peak" },
    { name: "帝君", meaning: "Ruler of a realm", background: "World lord governing a territory" },
    { name: "道祖", meaning: "Founder of the dao", background: "Ancient existence who founded cultivation methods" },
    { name: "Icefire", meaning: "Ice and fire dual heaven", background: "Cultivator training ice and fire dual magic" },
    { name: "Stormblade", meaning: "Blade of the storm", background: "Sword cultivator controlling storm power" },
    { name: "Nightsong", meaning: "Singer of the night", background: "Sound cultivator training at night" },
    { name: "Dreamweaver", meaning: "Weaver of dreams", background: "Mysterious immortal master controlling illusions" },
    { name: "Soulreaver", meaning: "Reaper of souls", background: "Demon cultivator training soul arts" },
    { name: "Phoenixflame", meaning: "Flame of the phoenix", background: "Fire cultivator with phoenix bloodline" },
    { name: "Dragonsoul", meaning: "Soul of the dragon", background: "Dragon cultivator with awakened dragon soul" },
    { name: "Thundersmite", meaning: "Thunder strike", background: "Lightning cultivator controlling thunder" },
    { name: "Moonshadow", meaning: "Shadow of the moon", background: "Assassin training moon shadow arts" }
  ]
};

const nameGrid = document.getElementById('nameGrid');
const styleButtons = document.querySelectorAll('.style-btn');
const generateBtn = document.querySelector('.generate-btn');
const toast = document.getElementById('toast');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
let currentStyle = 'traditional';

styleButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    styleButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    this.classList.add('active');
    this.setAttribute('aria-pressed', 'true');
    currentStyle = this.dataset.style;
  });
});

generateBtn.addEventListener('click', generateNames);

function generateNames() {
  const names = elfNames[currentStyle];
  const selectedNames = [];
  const shuffled = [...names].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < Math.min(10, shuffled.length); i++) {
    selectedNames.push(shuffled[i]);
  }
  
  displayNames(selectedNames);
}

function displayNames(names) {
  nameGrid.classList.remove('empty');
  nameGrid.innerHTML = '';
  
  names.forEach((nameObj, index) => {
    const card = document.createElement('div');
    card.className = 'name-card animate-in';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Name: ${nameObj.name}, Meaning: ${nameObj.meaning}, click to copy`);
    
    const nameElement = document.createElement('span');
    nameElement.className = 'elf-name';
    nameElement.textContent = nameObj.name;
    
    const meaningElement = document.createElement('span');
    meaningElement.className = 'name-meaning';
    meaningElement.textContent = nameObj.meaning;
    
    const backgroundElement = document.createElement('span');
    backgroundElement.className = 'name-background';
    backgroundElement.textContent = nameObj.background;
    
    card.appendChild(nameElement);
    card.appendChild(meaningElement);
    card.appendChild(backgroundElement);
    
    card.addEventListener('click', () => copyToClipboard(nameObj.name));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyToClipboard(nameObj.name);
      }
    });
    
    nameGrid.appendChild(card);
  });
  
  setTimeout(() => {
    const cards = nameGrid.querySelectorAll('.name-card');
    cards.forEach(card => card.classList.remove('animate-in'));
  }, 1000 + names.length * 100);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('✅ Copied to clipboard!');
    }).catch(err => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast('✅ Copied to clipboard!');
  } catch (err) {
    showToast('❌ Copy failed, please copy manually');
  }
  
  document.body.removeChild(textArea);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

function showModal(type) {
  let content = '';
  if (type === 'privacy') {
    content = `
      <h2>Privacy Policy</h2>
      <p><strong>Last updated:</strong> January 2026</p>
      <p>Elf Name Generator respects your privacy. This privacy policy explains how we handle information:</p>
      <h3>Information Collection</h3>
      <p>We do not collect, store, or transmit any personal information. All name generation happens locally in your browser.</p>
      <h3>Cookies</h3>
      <p>We do not use cookies or tracking technologies.</p>
      <h3>Third Parties</h3>
      <p>We do not share any information with third parties.</p>
      <h3>Changes</h3>
      <p>We may update this policy from time to time. Please check back periodically.</p>
    `;
  } else if (type === 'terms') {
    content = `
      <h2>Terms of Use</h2>
      <p><strong>Last updated:</strong> January 2026</p>
      <p>By using Elf Name Generator, you agree to these terms:</p>
      <h3>Usage</h3>
      <p>This tool is provided for entertainment and creative writing purposes only. Generated names are free to use for personal projects, games, and stories.</p>
      <h3>Commercial Use</h3>
      <p>While you may use generated names in commercial projects, we make no guarantees about name uniqueness or trademark availability. Please conduct your own research.</p>
      <h3>Disclaimer</h3>
      <p>We provide this service "as is" without warranties of any kind.</p>
      <h3>Changes</h3>
      <p>We reserve the right to modify these terms at any time.</p>
    `;
  }
  
  modalBody.innerHTML = content;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});
