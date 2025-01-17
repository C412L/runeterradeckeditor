class Sprite{
    constructor(title, id, name, image, type){
        this.title = title;
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}

var sprites = [
    new Sprite('Freljord', 54, 'Freljord', 'img/sprites/Freljord.png', 'Region'),
    new Sprite('Shadow isles', 58, 'ShadowIsles', 'img/sprites/ShadowIsles.png', 'Region'),
    new Sprite('Demacia', 53, 'Demacia', 'img/sprites/Demacia.png', 'Region'),
    new Sprite('Piltover', 57, 'PiltoverZaun', 'img/sprites/PiltoverZaun.png', 'Region'),
    new Sprite('Bilgewater', 52, 'Bilgewater', 'img/sprites/Bilgewater.png', 'Region'),
    new Sprite('Noxus', 56, 'Noxus', 'img/sprites/Noxus.png', 'Region'),
    new Sprite('Shurima', 35, 'Shurima', 'img/sprites/Shurima.png', 'Region'),
    new Sprite('All regions', 51, 'Neutral', 'img/sprites/AllFactions.png', 'Region'),
    new Sprite('Ionia', 55, 'Ionia', 'img/sprites/Ionia.png', 'Region'),
    new Sprite('Targon', 43, 'Targon', 'img/sprites/Targon.png', 'Region'),
    new Sprite('Level up: half', 10, 'ChampLevelUpIcon2', 'img/sprites/ChampLevelUpIcon2.png', 'Levelup'),
    new Sprite('Level up: empty', 18, 'ChampLevelUpIcon1', 'img/sprites/ChampLevelUpIcon1.png', 'Levelup'),
    new Sprite('Level up: full', 5, 'ChampLevelUpIcon3', 'img/sprites/ChampLevelUpIcon3.png', 'Levelup'),    
    new Sprite('Landmark', 47, 'LandmarkVisualOnly', 'img/sprites/LandmarkVisualOnly.png', 'Keyword'),
    new Sprite('Coin', 48, 'currency_bp', 'img/sprites/currency_bp.png', 'Currency'),
    new Sprite('Shards', 49, 'currency_shards', 'img/sprites/currency_shards.png', 'Currency'),
    new Sprite('Focus', 46, 'Focus', 'img/sprites/Focus.png', 'SpellSpeed'),    //TODO
    new Sprite('Slow', 45, 'Slow', 'img/sprites/Slow.png', 'SpellSpeed'),
    new Sprite('Fast', 44, 'Fast', 'img/sprites/Fast.png', 'SpellSpeed'),
    new Sprite('Burst', 0, 'Burst', 'img/sprites/Burst.png', 'SpellSpeed'),
    new Sprite('Common wildcard', 50, 'common', 'img/sprites/common.png', 'Wildcard'),
    new Sprite('Rare wildcard', 36, 'rare', 'img/sprites/rare.png', 'Wildcard'),
    new Sprite('Epic wildcard', 27, 'epic', 'img/sprites/epic.png', 'Wildcard'),
    new Sprite('Champion wildcard', 19, 'champion', 'img/sprites/champion.png', 'Wildcard'),
    new Sprite('Attune', 11, 'Attune', 'img/sprites/Attune.png', 'Keyword'),
    new Sprite('Aura', 6, 'Aura', 'img/sprites/Aura.png', 'Keyword'),
    new Sprite('Barrier', 1, 'Barrier', 'img/sprites/Barrier.png', 'Keyword'),
    new Sprite('Capture', 37, 'Capture', 'img/sprites/Capture.png', 'Keyword'),
    new Sprite('Challenger', 38, 'Challenger', 'img/sprites/Challenger.png', 'Keyword'),
    new Sprite('Deep', 39, 'Deep', 'img/sprites/Deep.png', 'Keyword'),
    new Sprite('Double strike', 40, 'DoubleStrike', 'img/sprites/DoubleStrike.png', 'Keyword'),
    new Sprite('Elusive', 41, 'Elusive', 'img/sprites/Elusive.png', 'Keyword'),
    new Sprite('Ephemeral', 42, 'Ephemeral', 'img/sprites/Ephemeral.png', 'Keyword'),
    new Sprite('Fearsome', 28, 'Fearsome', 'img/sprites/Fearsome.png', 'Keyword'),
    new Sprite('Fleeting', 20, 'Fleeting', 'img/sprites/Fleeting.png', 'Keyword'),
    new Sprite('Frostbite', 12, 'Frostbite', 'img/sprites/Frostbite.png', 'Keyword'),
    new Sprite('Fury', 14, 'Fury', 'img/sprites/Fury.png', 'Keyword'),
    new Sprite('Immobile', 29, 'Immobile', 'img/sprites/Immobile.png', 'Keyword'),
    new Sprite('Invoke', '', 'Invoke', 'img/sprites/Invoke.png', 'Keyword'),
    new Sprite('Last breath', 30, 'LastBreath', 'img/sprites/LastBreath.png', 'Keyword'),
    new Sprite('Lifesteal', 31, 'Lifesteal', 'img/sprites/Lifesteal.png', 'Keyword'),
    new Sprite('Overwhelm', 32, 'Overwhelm', 'img/sprites/Overwhelm.png', 'Keyword'),
    new Sprite('Quick strike', 21, 'QuickStrike', 'img/sprites/QuickStrike.png', 'Keyword'),
    new Sprite('Reckless', 13, 'Reckless', 'img/sprites/Reckless.png', 'Keyword'),
    new Sprite('Regeneration', 8, 'Regeneration', 'img/sprites/Regeneration.png', 'Keyword'),
    new Sprite('Scout', 3, 'Scout', 'img/sprites/Scout.png', 'Keyword'),
    new Sprite('Silenced', 22, 'Silenced', 'img/sprites/Silenced.png', 'Keyword'),
    new Sprite('Spell Shield', 9, 'SpellShield', 'img/sprites/SpellShield.png', 'Keyword'),
    new Sprite('Stunned', 23, 'Stunned', 'img/sprites/Stunned.png', 'Keyword'),
    new Sprite('Tough', 24, 'Tough', 'img/sprites/Tough.png', 'Keyword'),
    new Sprite('Vulnerable', 25, 'Vulnerable', 'img/sprites/Vulnerable.png', 'Keyword'),
    new Sprite('Attack skill mark', 33, 'AttackSkillMark', 'img/sprites/AttackSkillMark.png', 'Card Effect'),
    new Sprite('Generic trigger', 7, 'GenericTrigger', 'img/sprites/GenericTrigger.png', 'Card Effect'),
    new Sprite('Imbue', 2, 'Imbue', 'img/sprites/Imbue.png', 'Card Effect'),
    new Sprite('Play skill mark', '', 'PlaySkillMark', 'img/sprites/PlaySkillMark.png', 'Card Effect'),
    // new Sprite('Void', 2, '', 'img/sprites/Void.png', 'Region'),
    // new Sprite('Zaun', 20, '', 'img/sprites/Zaun.png','Region'),
    // new Sprite('Bandle city', 26, '', 'img/sprites/BandleCity.png', 'Region'),
    new Sprite('Augment', 4, 'Augment', 'img/sprites/Augment.png', 'Keyword'),
    //new Sprite('Impact', '', 'PlaySkillMark', 'img/sprites/Impact.png', 'Card Effect'),
    //new Sprite('Fated', '', 'PlaySkillMark', 'img/sprites/Fated.png', 'Card Effect'),
];
