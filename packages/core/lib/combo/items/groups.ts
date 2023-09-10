import { Items } from './defs';

export const MASKS_REGULAR = new Set([
  Items.MM_MASK_CAPTAIN,
  Items.MM_MASK_GIANT,
  Items.MM_MASK_ALL_NIGHT,
  Items.MM_MASK_BUNNY,
  Items.MM_MASK_KEATON,
  Items.MM_MASK_GARO,
  Items.MM_MASK_ROMANI,
  Items.MM_MASK_TROUPE_LEADER,
  Items.MM_MASK_POSTMAN,
  Items.MM_MASK_COUPLE,
  Items.MM_MASK_GREAT_FAIRY,
  Items.MM_MASK_GIBDO,
  Items.MM_MASK_DON_GERO,
  Items.MM_MASK_KAMARO,
  Items.MM_MASK_TRUTH,
  Items.MM_MASK_STONE,
  Items.MM_MASK_BREMEN,
  Items.MM_MASK_BLAST,
  Items.MM_MASK_SCENTS,
  Items.MM_MASK_KAFEI,
  Items.SHARED_MASK_TRUTH,
  Items.SHARED_MASK_BUNNY,
  Items.SHARED_MASK_KEATON,
]);

export const MASKS_TRANSFORM = new Set([
  Items.MM_MASK_DEKU,
  Items.MM_MASK_GORON,
  Items.MM_MASK_ZORA,
  Items.MM_MASK_FIERCE_DEITY,
  Items.SHARED_MASK_GORON,
  Items.SHARED_MASK_ZORA,
]);

export const MASKS_OOT = new Set([
  Items.OOT_MASK_SKULL,
  Items.OOT_MASK_SPOOKY,
  Items.OOT_MASK_KEATON,
  Items.OOT_MASK_BUNNY,
  Items.OOT_MASK_TRUTH,
  Items.OOT_MASK_GERUDO,
  Items.OOT_MASK_GORON,
  Items.OOT_MASK_ZORA,
  Items.SHARED_MASK_KEATON,
  Items.SHARED_MASK_BUNNY,
  Items.SHARED_MASK_TRUTH,
  Items.SHARED_MASK_GORON,
  Items.SHARED_MASK_ZORA,
]);

export const STONES = new Set([
  Items.OOT_STONE_EMERALD,
  Items.OOT_STONE_RUBY,
  Items.OOT_STONE_SAPPHIRE,
]);

export const MEDALLIONS = new Set([
  Items.OOT_MEDALLION_LIGHT,
  Items.OOT_MEDALLION_FOREST,
  Items.OOT_MEDALLION_FIRE,
  Items.OOT_MEDALLION_WATER,
  Items.OOT_MEDALLION_SPIRIT,
  Items.OOT_MEDALLION_SHADOW,
]);

export const REMAINS = new Set([
  Items.MM_REMAINS_ODOLWA,
  Items.MM_REMAINS_GOHT,
  Items.MM_REMAINS_GYORG,
  Items.MM_REMAINS_TWINMOLD,
]);

export const DUNGEON_REWARDS = new Set([
  ...STONES,
  ...MEDALLIONS,
  ...REMAINS,
]);

export const OWLS = new Set([
  Items.MM_OWL_GREAT_BAY,
  Items.MM_OWL_ZORA_CAPE,
  Items.MM_OWL_SNOWHEAD,
  Items.MM_OWL_MOUNTAIN_VILLAGE,
  Items.MM_OWL_CLOCK_TOWN,
  Items.MM_OWL_MILK_ROAD,
  Items.MM_OWL_WOODFALL,
  Items.MM_OWL_SOUTHERN_SWAMP,
  Items.MM_OWL_IKANA_CANYON,
  Items.MM_OWL_STONE_TOWER,
]);

export const SMALL_KEYS_OOT = new Set([
  Items.OOT_SMALL_KEY_FOREST,
  Items.OOT_SMALL_KEY_FIRE,
  Items.OOT_SMALL_KEY_WATER,
  Items.OOT_SMALL_KEY_SPIRIT,
  Items.OOT_SMALL_KEY_SHADOW,
  Items.OOT_SMALL_KEY_BOTW,
  Items.OOT_SMALL_KEY_GTG,
  Items.OOT_SMALL_KEY_GANON,
]);

export const KEY_RINGS_OOT = new Set([
  Items.OOT_KEY_RING_FOREST,
  Items.OOT_KEY_RING_FIRE,
  Items.OOT_KEY_RING_WATER,
  Items.OOT_KEY_RING_SPIRIT,
  Items.OOT_KEY_RING_SHADOW,
  Items.OOT_KEY_RING_BOTW,
  Items.OOT_KEY_RING_GTG,
  Items.OOT_KEY_RING_GANON,
]);

export const SMALL_KEYS_MM = new Set([
  Items.MM_SMALL_KEY_WF,
  Items.MM_SMALL_KEY_SH,
  Items.MM_SMALL_KEY_GB,
  Items.MM_SMALL_KEY_ST,
]);

export const KEY_RINGS_MM = new Set([
  Items.MM_KEY_RING_WF,
  Items.MM_KEY_RING_SH,
  Items.MM_KEY_RING_GB,
  Items.MM_KEY_RING_ST,
]);

export const BOSS_KEYS_OOT = new Set([
  Items.OOT_BOSS_KEY_FOREST,
  Items.OOT_BOSS_KEY_FIRE,
  Items.OOT_BOSS_KEY_WATER,
  Items.OOT_BOSS_KEY_SPIRIT,
  Items.OOT_BOSS_KEY_SHADOW,
]);

export const BOSS_KEYS_MM = new Set([
  Items.MM_BOSS_KEY_WF,
  Items.MM_BOSS_KEY_SH,
  Items.MM_BOSS_KEY_GB,
  Items.MM_BOSS_KEY_ST,
]);

export const MAPS = new Set([
  Items.OOT_MAP_DT,
  Items.OOT_MAP_DC,
  Items.OOT_MAP_JJ,
  Items.OOT_MAP_FOREST,
  Items.OOT_MAP_FIRE,
  Items.OOT_MAP_WATER,
  Items.OOT_MAP_SPIRIT,
  Items.OOT_MAP_SHADOW,
  Items.OOT_MAP_BOTW,
  Items.OOT_MAP_IC,
  Items.MM_MAP_WF,
  Items.MM_MAP_SH,
  Items.MM_MAP_GB,
  Items.MM_MAP_ST,
]);

export const COMPASSES = new Set([
  Items.OOT_COMPASS_DT,
  Items.OOT_COMPASS_DC,
  Items.OOT_COMPASS_JJ,
  Items.OOT_COMPASS_FOREST,
  Items.OOT_COMPASS_FIRE,
  Items.OOT_COMPASS_WATER,
  Items.OOT_COMPASS_SPIRIT,
  Items.OOT_COMPASS_SHADOW,
  Items.OOT_COMPASS_BOTW,
  Items.OOT_COMPASS_IC,
  Items.MM_COMPASS_WF,
  Items.MM_COMPASS_SH,
  Items.MM_COMPASS_GB,
  Items.MM_COMPASS_ST,
]);

export const SONGS = new Set([
  Items.OOT_SONG_EPONA,
  Items.OOT_SONG_SARIA,
  Items.OOT_SONG_STORMS,
  Items.OOT_SONG_SUN,
  Items.OOT_SONG_TIME,
  Items.OOT_SONG_ZELDA,
  Items.OOT_SONG_TP_FOREST,
  Items.OOT_SONG_TP_WATER,
  Items.OOT_SONG_TP_FIRE,
  Items.OOT_SONG_TP_SHADOW,
  Items.OOT_SONG_TP_SPIRIT,
  Items.OOT_SONG_TP_LIGHT,
  Items.MM_SONG_TIME,
  Items.MM_SONG_AWAKENING,
  Items.MM_SONG_HEALING,
  Items.MM_SONG_EPONA,
  Items.MM_SONG_SOARING,
  Items.MM_SONG_GORON_HALF,
  Items.MM_SONG_GORON,
  Items.MM_SONG_ZORA,
  Items.MM_SONG_STORMS,
  Items.MM_SONG_EMPTINESS,
  Items.MM_SONG_ORDER,
  Items.MM_SONG_SUN,
  Items.SHARED_SONG_EPONA,
  Items.SHARED_SONG_TIME,
  Items.SHARED_SONG_STORMS,
  Items.SHARED_SONG_SUN,
]);

export const JUNK = new Set([
  Items.OOT_RUPEE_BLUE,
  Items.OOT_RUPEE_RED,
  Items.OOT_RECOVERY_HEART,
  Items.OOT_ARROWS_5,
  Items.OOT_ARROWS_10,
  Items.OOT_ARROWS_30,
  Items.OOT_BOMB,
  Items.OOT_BOMBS_5,
  Items.OOT_BOMBS_10,
  Items.OOT_BOMBS_20,
  Items.OOT_BOMBS_30,
  Items.OOT_NUTS_5,
  Items.OOT_NUTS_5_ALT,
  Items.OOT_NUTS_10,
  Items.OOT_DEKU_SEEDS_5,
  Items.OOT_DEKU_SEEDS_30,
  Items.OOT_STICK,
  Items.OOT_STICKS_5,
  Items.OOT_STICKS_10,
  Items.OOT_SHIELD_DEKU,
  Items.OOT_SHIELD_HYLIAN,
  Items.OOT_BOMBCHU_5,
  Items.OOT_BOMBCHU_10,
  Items.OOT_BOMBCHU_20,
  Items.MM_RUPEE_GREEN,
  Items.MM_RUPEE_BLUE,
  Items.MM_RUPEE_RED,
  Items.MM_RECOVERY_HEART,
  Items.MM_ARROWS_10,
  Items.MM_ARROWS_30,
  Items.MM_ARROWS_40,
  Items.MM_BOMB,
  Items.MM_BOMBS_5,
  Items.MM_BOMBS_10,
  Items.MM_BOMBS_20,
  Items.MM_BOMBS_30,
  Items.MM_NUT,
  Items.MM_NUTS_5,
  Items.MM_NUTS_10,
  Items.MM_STICK,
  Items.MM_SHIELD_HERO,
  Items.MM_BOMBCHU,
  Items.MM_BOMBCHU_5,
  Items.MM_BOMBCHU_10,
  Items.MM_BOMBCHU_20,
  Items.SHARED_ARROWS_5,
  Items.SHARED_ARROWS_10,
  Items.SHARED_ARROWS_30,
  Items.SHARED_ARROWS_40,
  Items.SHARED_BOMB,
  Items.SHARED_BOMBS_5,
  Items.SHARED_BOMBS_10,
  Items.SHARED_BOMBS_20,
  Items.SHARED_BOMBS_30,
  Items.SHARED_NUT,
  Items.SHARED_NUTS_5,
  Items.SHARED_NUTS_10,
  Items.SHARED_STICK,
  Items.SHARED_STICKS_5,
  Items.SHARED_STICKS_10,
  Items.SHARED_RUPEE_GREEN,
  Items.SHARED_RUPEE_BLUE,
  Items.SHARED_RUPEE_RED,
  Items.SHARED_RECOVERY_HEART,
  Items.SHARED_BOMBCHU,
  Items.SHARED_BOMBCHU_5,
  Items.SHARED_BOMBCHU_10,
  Items.SHARED_BOMBCHU_20,
]);

export const LICENSES = new Set([
  Items.MM_MAGIC_BEAN,
]);

export const CONSUMABLES = new Set([
  Items.OOT_RECOVERY_HEART,
  Items.OOT_STICK,
  Items.OOT_STICKS_5,
  Items.OOT_STICKS_10,
  Items.OOT_NUTS_5,
  Items.OOT_NUTS_10,
  Items.OOT_BOMB,
  Items.OOT_BOMBS_5,
  Items.OOT_BOMBS_10,
  Items.OOT_BOMBS_20,
  Items.OOT_BOMBS_30,
  Items.OOT_ARROWS_5,
  Items.OOT_ARROWS_10,
  Items.OOT_ARROWS_30,
  Items.OOT_DEKU_SEEDS_5,
  Items.OOT_DEKU_SEEDS_30,
  Items.OOT_BOMBCHU_5,
  Items.OOT_BOMBCHU_10,
  Items.OOT_BOMBCHU_20,
  Items.OOT_SHIELD_DEKU,
  Items.OOT_SHIELD_HYLIAN,
  Items.OOT_MILK,
  Items.OOT_POTION_RED,
  Items.OOT_POTION_GREEN,
  Items.OOT_POTION_BLUE,
  Items.OOT_FAIRY,
  Items.OOT_FISH,
  Items.OOT_BUG,
  Items.OOT_BLUE_FIRE,
  Items.OOT_POE,
  Items.MM_RECOVERY_HEART,
  Items.MM_STICK,
  Items.MM_NUT,
  Items.MM_NUTS_5,
  Items.MM_NUTS_10,
  Items.MM_BOMB,
  Items.MM_BOMBS_5,
  Items.MM_BOMBS_10,
  Items.MM_BOMBS_20,
  Items.MM_BOMBS_30,
  Items.MM_BOMBCHU,
  Items.MM_BOMBCHU_5,
  Items.MM_BOMBCHU_10,
  Items.MM_BOMBCHU_20,
  Items.MM_ARROWS_10,
  Items.MM_ARROWS_30,
  Items.MM_ARROWS_40,
  Items.MM_SHIELD_HERO,
  Items.MM_MILK,
  Items.MM_CHATEAU,
  Items.MM_FISH,
  Items.MM_BUGS,
  Items.MM_FAIRY,
  Items.MM_POTION_RED,
  Items.MM_POTION_GREEN,
  Items.MM_POTION_BLUE,
  Items.SHARED_RECOVERY_HEART,
  Items.SHARED_STICK,
  Items.SHARED_STICKS_5,
  Items.SHARED_STICKS_10,
  Items.SHARED_NUT,
  Items.SHARED_NUTS_5,
  Items.SHARED_NUTS_10,
  Items.SHARED_BOMB,
  Items.SHARED_BOMBS_5,
  Items.SHARED_BOMBS_10,
  Items.SHARED_BOMBS_20,
  Items.SHARED_BOMBS_30,
  Items.SHARED_ARROWS_5,
  Items.SHARED_ARROWS_10,
  Items.SHARED_ARROWS_30,
  Items.SHARED_ARROWS_40,
  Items.SHARED_BOMBCHU,
  Items.SHARED_BOMBCHU_5,
  Items.SHARED_BOMBCHU_10,
  Items.SHARED_BOMBCHU_20,
]);

export const CRITICAL_RENEWABLES = new Set([
  Items.MM_SHIELD_HERO,
  Items.MM_BOMBCHU_10,
  Items.MM_MAGIC_BEAN,
  Items.MM_POTION_BLUE,
  Items.MM_MILK,
  Items.OOT_SHIELD_DEKU,
  Items.OOT_SHIELD_HYLIAN,
]);

export const TINGLE_MAPS = new Set([
  Items.MM_WORLD_MAP_CLOCK_TOWN,
  Items.MM_WORLD_MAP_WOODFALL,
  Items.MM_WORLD_MAP_SNOWHEAD,
  Items.MM_WORLD_MAP_ROMANI_RANCH,
  Items.MM_WORLD_MAP_GREAT_BAY,
  Items.MM_WORLD_MAP_STONE_TOWER,
]);

export const STRAY_FAIRIES_DUNGEON = new Set([
  Items.MM_STRAY_FAIRY_WF,
  Items.MM_STRAY_FAIRY_SH,
  Items.MM_STRAY_FAIRY_GB,
  Items.MM_STRAY_FAIRY_ST,
]);

export const RUPEES = new Set([
  Items.OOT_RUPEE_GREEN,
  Items.OOT_RUPEE_BLUE,
  Items.OOT_RUPEE_RED,
  Items.OOT_RUPEE_PURPLE,
  Items.OOT_RUPEE_HUGE,
  Items.MM_RUPEE_GREEN,
  Items.MM_RUPEE_BLUE,
  Items.MM_RUPEE_RED,
  Items.MM_RUPEE_PURPLE,
  Items.MM_RUPEE_SILVER,
  Items.MM_RUPEE_GOLD,
  Items.SHARED_RUPEE_GREEN,
  Items.SHARED_RUPEE_BLUE,
  Items.SHARED_RUPEE_RED,
  Items.SHARED_RUPEE_PURPLE,
  Items.SHARED_RUPEE_SILVER,
  Items.SHARED_RUPEE_GOLD,
]);

export const RUPEES_SILVER = new Set([
  Items.OOT_RUPEE_SILVER_DC,
  Items.OOT_RUPEE_SILVER_BOTW,
  Items.OOT_RUPEE_SILVER_SPIRIT_CHILD,
  Items.OOT_RUPEE_SILVER_SPIRIT_SUN,
  Items.OOT_RUPEE_SILVER_SPIRIT_BOULDERS,
  Items.OOT_RUPEE_SILVER_SPIRIT_LOBBY,
  Items.OOT_RUPEE_SILVER_SPIRIT_ADULT,
  Items.OOT_RUPEE_SILVER_SHADOW_SCYTHE,
  Items.OOT_RUPEE_SILVER_SHADOW_PIT,
  Items.OOT_RUPEE_SILVER_SHADOW_SPIKES,
  Items.OOT_RUPEE_SILVER_SHADOW_BLADES,
  Items.OOT_RUPEE_SILVER_IC_SCYTHE,
  Items.OOT_RUPEE_SILVER_IC_BLOCK,
  Items.OOT_RUPEE_SILVER_GTG_SLOPES,
  Items.OOT_RUPEE_SILVER_GTG_LAVA,
  Items.OOT_RUPEE_SILVER_GTG_WATER,
  Items.OOT_RUPEE_SILVER_GANON_SPIRIT,
  Items.OOT_RUPEE_SILVER_GANON_LIGHT,
  Items.OOT_RUPEE_SILVER_GANON_FIRE,
  Items.OOT_RUPEE_SILVER_GANON_FOREST,
  Items.OOT_RUPEE_SILVER_GANON_SHADOW,
  Items.OOT_RUPEE_SILVER_GANON_WATER,
]);

export const OOT_SOULS = new Set([
  Items.OOT_SOUL_STALFOS,
  Items.OOT_SOUL_OCTOROK,
  Items.OOT_SOUL_WALLMASTER,
  Items.OOT_SOUL_DODONGO,
  Items.OOT_SOUL_KEESE,
  Items.OOT_SOUL_TEKTITE,
  Items.OOT_SOUL_LEEVER,
  Items.OOT_SOUL_PEAHAT,
  Items.OOT_SOUL_LIZALFOS_DINALFOS,
  Items.OOT_SOUL_GOHMA_LARVA,
  Items.OOT_SOUL_SHABOM,
  Items.OOT_SOUL_BABY_DODONGO,
  Items.OOT_SOUL_DARK_LINK,
  Items.OOT_SOUL_BIRI_BARI,
  Items.OOT_SOUL_TAILPASARN,
  Items.OOT_SOUL_PARASITE,
  Items.OOT_SOUL_SKULLTULA,
  Items.OOT_SOUL_TORCH_SLUG,
  Items.OOT_SOUL_MOBLIN,
  Items.OOT_SOUL_ARMOS,
  Items.OOT_SOUL_DEKU_BABA,
  Items.OOT_SOUL_DEKU_SCRUB,
  Items.OOT_SOUL_BUBBLE,
  Items.OOT_SOUL_BEAMOS,
  Items.OOT_SOUL_FLOORMASTER,
  Items.OOT_SOUL_REDEAD_GIBDO,
  Items.OOT_SOUL_SKULLWALLTULA,
  Items.OOT_SOUL_FLARE_DANCER,
  Items.OOT_SOUL_DEAD_HAND,
  Items.OOT_SOUL_SHELL_BLADE,
  Items.OOT_SOUL_LIKE_LIKE,
  Items.OOT_SOUL_SPIKE,
  Items.OOT_SOUL_ANUBIS,
  Items.OOT_SOUL_IRON_KNUCKLE,
  Items.OOT_SOUL_SKULL_KID,
  Items.OOT_SOUL_FLYING_POT,
  Items.OOT_SOUL_FREEZARD,
  Items.OOT_SOUL_STINGER,
  Items.OOT_SOUL_WOLFOS,
  Items.OOT_SOUL_STALCHILD,
  Items.OOT_SOUL_GUAY,
  Items.OOT_SOUL_QUEEN_GOHMA,
  Items.OOT_SOUL_KING_DODONGO,
  Items.OOT_SOUL_BARINADE,
  Items.OOT_SOUL_PHANTOM_GANON,
  Items.OOT_SOUL_VOLVAGIA,
  Items.OOT_SOUL_MORPHA,
  Items.OOT_SOUL_BONGO_BONGO,
  Items.OOT_SOUL_TWINROVA,
]);

export const MM_SOULS = new Set([
  Items.MM_SOUL_OCTOROK,
  Items.MM_SOUL_WALLMASTER,
  Items.MM_SOUL_DODONGO,
  Items.MM_SOUL_KEESE,
  Items.MM_SOUL_TEKTITE,
  Items.MM_SOUL_PEAHAT,
  Items.MM_SOUL_LIZALFOS_DINALFOS,
  Items.MM_SOUL_SKULLTULA,
  Items.MM_SOUL_ARMOS,
  Items.MM_SOUL_DEKU_BABA,
  Items.MM_SOUL_DEKU_SCRUB,
  Items.MM_SOUL_BUBBLE,
  Items.MM_SOUL_BEAMOS,
  Items.MM_SOUL_REDEAD_GIBDO,
  Items.MM_SOUL_SKULLWALLTULA,
  Items.MM_SOUL_SHELL_BLADE,
  Items.MM_SOUL_LIKE_LIKE,
  Items.MM_SOUL_IRON_KNUCKLE,
  Items.MM_SOUL_FREEZARD,
  Items.MM_SOUL_WOLFOS,
  Items.MM_SOUL_GUAY,
  Items.MM_SOUL_FLYING_POT,
  Items.MM_SOUL_FLOORMASTER,
  Items.MM_SOUL_CHUCHU,
  Items.MM_SOUL_DEEP_PYTHON,
  Items.MM_SOUL_STALCHILD,
  Items.MM_SOUL_LEEVER,
  Items.MM_SOUL_SKULLFISH,
  Items.MM_SOUL_DEXIHAND,
  Items.MM_SOUL_DRAGONFLY,
  Items.MM_SOUL_EENO,
  Items.MM_SOUL_EYEGORE,
  Items.MM_SOUL_HIPLOOP,
  Items.MM_SOUL_REAL_BOMBCHU,
  Items.MM_SOUL_TAKKURI,
  Items.MM_SOUL_BOE,
  Items.MM_SOUL_NEJIRON,
  Items.MM_SOUL_BIO_BABA,
  Items.MM_SOUL_GARO,
  Items.MM_SOUL_WIZZROBE,
  Items.MM_SOUL_GOMESS,
  Items.MM_SOUL_GEKKO,
  Items.MM_SOUL_BAD_BAT,
  Items.MM_SOUL_SNAPPER,
  Items.MM_SOUL_WART,
  Items.MM_SOUL_CAPTAIN_KEETA,
  Items.MM_SOUL_IGOS,
  Items.MM_SOUL_ODOLWA,
  Items.MM_SOUL_GOHT,
  Items.MM_SOUL_GYORG,
  Items.MM_SOUL_TWINMOLD,
]);

export const SHARED_SOULS = new Set([
  Items.SHARED_SOUL_OCTOROK,
  Items.SHARED_SOUL_WALLMASTER,
  Items.SHARED_SOUL_DODONGO,
  Items.SHARED_SOUL_KEESE,
  Items.SHARED_SOUL_TEKTITE,
  Items.SHARED_SOUL_PEAHAT,
  Items.SHARED_SOUL_LIZALFOS_DINALFOS,
  Items.SHARED_SOUL_SKULLTULA,
  Items.SHARED_SOUL_ARMOS,
  Items.SHARED_SOUL_DEKU_BABA,
  Items.SHARED_SOUL_DEKU_SCRUB,
  Items.SHARED_SOUL_BUBBLE,
  Items.SHARED_SOUL_BEAMOS,
  Items.SHARED_SOUL_REDEAD_GIBDO,
  Items.SHARED_SOUL_SKULLWALLTULA,
  Items.SHARED_SOUL_SHELL_BLADE,
  Items.SHARED_SOUL_LIKE_LIKE,
  Items.SHARED_SOUL_IRON_KNUCKLE,
  Items.SHARED_SOUL_FREEZARD,
  Items.SHARED_SOUL_WOLFOS,
  Items.SHARED_SOUL_GUAY,
  Items.SHARED_SOUL_FLYING_POT,
  Items.SHARED_SOUL_FLOORMASTER,
  Items.SHARED_SOUL_LEEVER,
  Items.SHARED_SOUL_STALCHILD,
]);

export const NAMED_TRIFORCE = new Set([
  Items.SHARED_TRIFORCE_POWER,
  Items.SHARED_TRIFORCE_WISDOM,
  Items.SHARED_TRIFORCE_COURAGE,
]);

export const TRIFORCE = new Set([
  Items.SHARED_TRIFORCE,
  ...NAMED_TRIFORCE,
]);

export const REQUIRED = new Set([
  ...OWLS,
  ...RUPEES_SILVER,
  ...OOT_SOULS,
  ...MM_SOULS,
  ...SHARED_SOULS,
  ...STRAY_FAIRIES_DUNGEON,
  ...DUNGEON_REWARDS,
  ...SMALL_KEYS_OOT,
  ...SMALL_KEYS_MM,
  ...BOSS_KEYS_OOT,
  ...BOSS_KEYS_MM,
  ...TRIFORCE,
  Items.OOT_BOSS_KEY_GANON,
  Items.OOT_SMALL_KEY_GF,
  Items.MM_STRAY_FAIRY_TOWN,
  Items.OOT_WEIRD_EGG,
  Items.OOT_POCKET_EGG,
  Items.OOT_SHIELD_DEKU,
  Items.OOT_SHIELD_HYLIAN,
  Items.OOT_GS_TOKEN,
  Items.OOT_ARROW_FIRE,
  Items.OOT_ARROW_ICE,
  Items.OOT_ARROW_LIGHT,
  Items.OOT_BOMB_BAG,
  Items.OOT_BOOMERANG,
  Items.OOT_BOOTS_HOVER,
  Items.OOT_BOOTS_IRON,
  Items.OOT_BOW,
  Items.OOT_CHICKEN,
  Items.OOT_BOTTLE_EMPTY,
  Items.OOT_GERUDO_CARD,
  Items.OOT_HAMMER,
  Items.OOT_HOOKSHOT,
  Items.OOT_LENS,
  Items.OOT_MAGIC_UPGRADE,
  Items.OOT_OCARINA,
  Items.OOT_RUTO_LETTER,
  Items.OOT_SCALE,
  Items.OOT_SHIELD,
  Items.OOT_SHIELD_MIRROR,
  Items.OOT_SLINGSHOT,
  Items.OOT_SONG_EPONA,
  Items.OOT_SONG_SARIA,
  Items.OOT_SONG_STORMS,
  Items.OOT_SONG_SUN,
  Items.OOT_SONG_TIME,
  Items.OOT_SONG_ZELDA,
  Items.OOT_SONG_TP_FOREST,
  Items.OOT_SONG_TP_WATER,
  Items.OOT_SONG_TP_FIRE,
  Items.OOT_SONG_TP_SHADOW,
  Items.OOT_SONG_TP_SPIRIT,
  Items.OOT_SONG_TP_LIGHT,
  Items.OOT_SPELL_FIRE,
  Items.OOT_STRENGTH,
  Items.OOT_SWORD,
  Items.OOT_SWORD_KOKIRI,
  Items.OOT_SWORD_MASTER,
  Items.OOT_SWORD_KNIFE,
  Items.OOT_SWORD_BIGGORON,
  Items.OOT_SWORD_GORON,
  Items.OOT_TUNIC_GORON,
  Items.OOT_TUNIC_ZORA,
  Items.OOT_ZELDA_LETTER,
  Items.OOT_MAGIC_BEAN,
  Items.OOT_BOTTLE_MILK,
  Items.OOT_STONE_OF_AGONY,
  Items.OOT_WALLET,
  Items.OOT_POCKET_CUCCO,
  Items.OOT_COJIRO,
  Items.OOT_ODD_MUSHROOM,
  Items.OOT_ODD_POTION,
  Items.OOT_POACHER_SAW,
  Items.OOT_BROKEN_GORON_SWORD,
  Items.OOT_PRESCRIPTION,
  Items.OOT_EYEBALL_FROG,
  Items.OOT_EYE_DROPS,
  Items.OOT_CLAIM_CHECK,
  Items.OOT_MASK_TRUTH,
  Items.OOT_MASK_SKULL,
  Items.OOT_MASK_SPOOKY,
  Items.OOT_MASK_GERUDO,
  Items.OOT_MASK_ZORA,
  Items.OOT_MASK_GORON,
  Items.OOT_MASK_BUNNY,
  Items.OOT_MASK_KEATON,
  Items.OOT_BLUE_FIRE,
  Items.OOT_STICK,
  Items.OOT_STICKS_5,
  Items.OOT_STICKS_10,
  Items.OOT_NUTS_5,
  Items.OOT_NUTS_10,
  Items.OOT_BOMB,
  Items.OOT_BOMBS_5,
  Items.OOT_BOMBS_10,
  Items.OOT_BOMBS_20,
  Items.OOT_BOMBS_30,
  Items.OOT_ARROWS_5,
  Items.OOT_ARROWS_10,
  Items.OOT_ARROWS_30,
  Items.OOT_DEKU_SEEDS_5,
  Items.OOT_DEKU_SEEDS_30,
  Items.OOT_BOMBCHU_5,
  Items.OOT_BOMBCHU_10,
  Items.OOT_BOMBCHU_20,
  Items.OOT_POTION_GREEN,
  Items.OOT_POTION_BLUE,
  Items.OOT_FISH,
  Items.OOT_BUG,
  Items.OOT_SKELETON_KEY,
  Items.MM_GS_TOKEN_SWAMP,
  Items.MM_GS_TOKEN_OCEAN,
  Items.MM_SHIELD_HERO,
  Items.MM_MASK_DEKU,
  Items.MM_MASK_GORON,
  Items.MM_MASK_ZORA,
  Items.MM_MASK_CAPTAIN,
  Items.MM_MASK_GIANT,
  Items.MM_MASK_ALL_NIGHT,
  Items.MM_MASK_BUNNY,
  Items.MM_MASK_KEATON,
  Items.MM_MASK_GARO,
  Items.MM_MASK_ROMANI,
  Items.MM_MASK_TROUPE_LEADER,
  Items.MM_MASK_POSTMAN,
  Items.MM_MASK_COUPLE,
  Items.MM_MASK_GREAT_FAIRY,
  Items.MM_MASK_GIBDO,
  Items.MM_MASK_DON_GERO,
  Items.MM_MASK_KAMARO,
  Items.MM_MASK_TRUTH,
  Items.MM_MASK_STONE,
  Items.MM_MASK_BREMEN,
  Items.MM_MASK_BLAST,
  Items.MM_MASK_SCENTS,
  Items.MM_MASK_KAFEI,
  Items.MM_MASK_FIERCE_DEITY,
  Items.MM_BOTTLE_POTION_RED,
  Items.MM_BOTTLED_GOLD_DUST,
  Items.MM_BOTTLE_EMPTY,
  Items.MM_BOTTLE_MILK,
  Items.MM_BOTTLE_CHATEAU,
  Items.MM_MAGIC_UPGRADE,
  Items.MM_SONG_TIME,
  Items.MM_SONG_AWAKENING,
  Items.MM_SONG_HEALING,
  Items.MM_SONG_EPONA,
  Items.MM_SONG_SOARING,
  Items.MM_SONG_GORON_HALF,
  Items.MM_SONG_GORON,
  Items.MM_SONG_ZORA,
  Items.MM_SONG_STORMS,
  Items.MM_SONG_EMPTINESS,
  Items.MM_SONG_ORDER,
  Items.MM_BOW,
  Items.MM_OCARINA,
  Items.MM_SWORD,
  Items.MM_SHIELD,
  Items.MM_SHIELD_MIRROR,
  Items.MM_BOMB_BAG,
  Items.MM_LENS,
  Items.MM_ARROW_FIRE,
  Items.MM_ARROW_ICE,
  Items.MM_ARROW_LIGHT,
  Items.MM_POWDER_KEG,
  Items.MM_HOOKSHOT,
  Items.MM_PICTOGRAPH_BOX,
  Items.MM_MAGIC_BEAN,
  Items.MM_MOON_TEAR,
  Items.MM_DEED_LAND,
  Items.MM_DEED_SWAMP,
  Items.MM_DEED_MOUNTAIN,
  Items.MM_DEED_OCEAN,
  Items.MM_ROOM_KEY,
  Items.MM_LETTER_TO_KAFEI,
  Items.MM_PENDANT_OF_MEMORIES,
  Items.MM_LETTER_TO_MAMA,
  Items.MM_WALLET,
  Items.MM_GREAT_FAIRY_SWORD,
  Items.MM_SPIN_UPGRADE,
  Items.MM_POTION_BLUE,
  Items.MM_POTION_RED,
  Items.MM_POTION_GREEN,
  Items.MM_MILK,
  Items.MM_CHATEAU,
  Items.MM_FISH,
  Items.MM_BUGS,
  Items.MM_STICK,
  Items.MM_NUT,
  Items.MM_NUTS_5,
  Items.MM_NUTS_10,
  Items.MM_BOMB,
  Items.MM_BOMBS_5,
  Items.MM_BOMBS_10,
  Items.MM_BOMBS_20,
  Items.MM_BOMBS_30,
  Items.MM_BOMBCHU,
  Items.MM_BOMBCHU_5,
  Items.MM_BOMBCHU_10,
  Items.MM_BOMBCHU_20,
  Items.MM_ARROWS_10,
  Items.MM_ARROWS_30,
  Items.MM_ARROWS_40,
  Items.MM_SKELETON_KEY,
  Items.SHARED_BOW,
  Items.SHARED_BOMB_BAG,
  Items.SHARED_MAGIC_UPGRADE,
  Items.SHARED_ARROW_FIRE,
  Items.SHARED_ARROW_ICE,
  Items.SHARED_ARROW_LIGHT,
  Items.SHARED_SONG_EPONA,
  Items.SHARED_SONG_TIME,
  Items.SHARED_SONG_STORMS,
  Items.SHARED_SONG_SUN,
  Items.SHARED_HOOKSHOT,
  Items.SHARED_LENS,
  Items.SHARED_OCARINA,
  Items.SHARED_MASK_GORON,
  Items.SHARED_MASK_ZORA,
  Items.SHARED_MASK_TRUTH,
  Items.SHARED_MASK_BUNNY,
  Items.SHARED_MASK_KEATON,
  Items.SHARED_WALLET,
  Items.SHARED_STICK,
  Items.SHARED_STICKS_5,
  Items.SHARED_STICKS_10,
  Items.SHARED_NUT,
  Items.SHARED_NUTS_5,
  Items.SHARED_NUTS_10,
  Items.SHARED_BOMB,
  Items.SHARED_BOMBS_5,
  Items.SHARED_BOMBS_10,
  Items.SHARED_BOMBS_20,
  Items.SHARED_BOMBS_30,
  Items.SHARED_ARROWS_5,
  Items.SHARED_ARROWS_10,
  Items.SHARED_ARROWS_30,
  Items.SHARED_ARROWS_40,
  Items.SHARED_BOMBCHU,
  Items.SHARED_BOMBCHU_5,
  Items.SHARED_BOMBCHU_10,
  Items.SHARED_BOMBCHU_20,
  Items.SHARED_SKELETON_KEY,
  Items.OOT_COIN_RED,
  Items.OOT_COIN_GREEN,
  Items.OOT_COIN_BLUE,
  Items.OOT_COIN_YELLOW,
]);

