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
    new Sprite('Freljord', 0, 'Freljord', 'img/sprites/Freljord.png', 'Region'),
    new Sprite('Shadow isles', 1, 'ShadowIsles', 'img/sprites/ShadowIsles.png', 'Region'),
    new Sprite('Demacia', 5, 'Demacia', 'img/sprites/Demacia.png', 'Region'),
    new Sprite('Piltover', 6, 'PiltoverZaun', 'img/sprites/PiltoverZaun.png', 'Region'),
    new Sprite('Bilgewater', 10, 'Bilgewater', 'img/sprites/Bilgewater.png', 'Region'),
    new Sprite('Noxus', 11, 'Noxus', 'img/sprites/Noxus.png', 'Region'),
    new Sprite('Shurima', 12, 'Shurima', 'img/sprites/Shurima.png', 'Region'),
    new Sprite('All regions', 16, 'AllFactions', 'img/sprites/AllFactions.png', 'Region'),
    new Sprite('Ionia', 17, 'Ionia', 'img/sprites/Ionia.png', 'Region'),
    new Sprite('Targon', 18, 'Targon', 'img/sprites/Targon.png', 'Region'),
    new Sprite('Level up: half', 2, 'ChampLevelUpIcon2', 'img/sprites/ChampLevelUpIcon2.png', 'Levelup'),
    new Sprite('Level up: empty', 7, 'ChampLevelUpIcon1', 'img/sprites/ChampLevelUpIcon1.png', 'Levelup'),
    new Sprite('Level up: full', 19, 'ChampLevelUpIcon3', 'img/sprites/ChampLevelUpIcon3.png', 'Levelup'),    
    new Sprite('Landmark', 21, 'LandmarkVisualOnly', 'img/sprites/LandmarkVisualOnly.png', 'Keyword'),
    new Sprite('Coin', 22, 'currency_bp', 'img/sprites/currency_bp.png', 'Currency'),
    new Sprite('Shards', 23, 'currency_shards', 'img/sprites/currency_shards.png', 'Currency'),
    new Sprite('Focus', 20, 'Focus', 'img/sprites/Focus.png', 'SpellSpeed'),    //TODO
    new Sprite('Slow', 3, 'Slow', 'img/sprites/Slow.png', 'SpellSpeed'),
    new Sprite('Fast', 8, 'Fast', 'img/sprites/Fast.png', 'SpellSpeed'),
    new Sprite('Burst', 13, 'Burst', 'img/sprites/Burst.png', 'SpellSpeed'),
    new Sprite('Common wildcard', 14, 'common', 'img/sprites/common.png', 'Wildcard'),
    new Sprite('Rare wildcard', 9, 'rare', 'img/sprites/rare.png', 'Wildcard'),
    new Sprite('Epic wildcard', 4, 'epic', 'img/sprites/epic.png', 'Wildcard'),
    new Sprite('Champion wildcard', 15, 'champion', 'img/sprites/champion.png', 'Wildcard'),
    new Sprite('Attune', '', 'Attune', 'img/sprites/Attune.png', 'Keyword'),
    new Sprite('Aura', '', 'Aura', 'img/sprites/Aura.png', 'Keyword'),
    new Sprite('Barrier', '', 'Barrier', 'img/sprites/Barrier.png', 'Keyword'),
    new Sprite('Capture', '', 'Capture', 'img/sprites/Capture.png', 'Keyword'),
    new Sprite('Challenger', '', 'Challenger', 'img/sprites/Challenger.png', 'Keyword'),
    new Sprite('Deep', '', 'Deep', 'img/sprites/Deep.png', 'Keyword'),
    new Sprite('Double strike', '', 'DoubleStrike', 'img/sprites/DoubleStrike.png', 'Keyword'),
    new Sprite('Elusive', '', 'Elusive', 'img/sprites/Elusive.png', 'Keyword'),
    new Sprite('Ephemeral', '', 'Ephemeral', 'img/sprites/Ephemeral.png', 'Keyword'),
    new Sprite('Fearsome', '', 'Fearsome', 'img/sprites/Fearsome.png', 'Keyword'),
    new Sprite('Fleeting', '', 'Fleeting', 'img/sprites/Fleeting.png', 'Keyword'),
    new Sprite('Frostbite', '', 'Frostbite', 'img/sprites/Frostbite.png', 'Keyword'),
    new Sprite('Fury', '', 'Fury', 'img/sprites/Fury.png', 'Keyword'),
    new Sprite('Immobile', '', 'Immobile', 'img/sprites/Immobile.png', 'Keyword'),
    new Sprite('Invoke', '', 'Invoke', 'img/sprites/Invoke.png', 'Keyword'),
    new Sprite('Last breath', '', 'LastBreath', 'img/sprites/LastBreath.png', 'Keyword'),
    new Sprite('Lifesteal', '', 'Lifesteal', 'img/sprites/Lifesteal.png', 'Keyword'),
    new Sprite('Overwhelm', '', 'Overwhelm', 'img/sprites/Overwhelm.png', 'Keyword'),
    new Sprite('Quick strike', '', 'QuickStrike', 'img/sprites/QuickStrike.png', 'Keyword'),
    new Sprite('Reckless', '', 'Reckless', 'img/sprites/Reckless.png', 'Keyword'),
    new Sprite('Regeneration', '', 'Regeneration', 'img/sprites/Regeneration.png', 'Keyword'),
    new Sprite('Scout', '', 'Scout', 'img/sprites/Scout.png', 'Keyword'),
    new Sprite('Silenced', '', 'Silenced', 'img/sprites/Silenced.png', 'Keyword'),
    new Sprite('Spell Shield', '', 'SpellShield', 'img/sprites/SpellShield.png', 'Keyword'),
    new Sprite('Stunned', '', 'Stunned', 'img/sprites/Stunned.png', 'Keyword'),
    new Sprite('Tough', '', 'Tough', 'img/sprites/Tough.png', 'Keyword'),
    new Sprite('Vulnerable', '', 'Vulnerable', 'img/sprites/Vulnerable.png', 'Keyword'),
    new Sprite('Attack skill mark', '', 'AttackSkillMark', 'img/sprites/AttackSkillMark.png', 'Card Effect'),
    new Sprite('Generic trigger', '', 'GenericTrigger', 'img/sprites/GenericTrigger.png', 'Card Effect'),
    new Sprite('Imbue', '', 'Imbue', 'img/sprites/Imbue.png', 'Card Effect'),
    new Sprite('Play skill mark', '', 'PlaySkillMark', 'img/sprites/PlaySkillMark.png', 'Card Effect'),
    // new Sprite('Void', 2, '', 'img/sprites/Void.png', 'Region'),
    // new Sprite('Zaun', 20, '', 'img/sprites/Zaun.png','Region'),
     new Sprite('Bandle city', 26, '', 'img/sprites/BandleCity.png', 'Region'),
    new Sprite('Augment', 4, 'Augment', 'img/sprites/Augment.png', 'Keyword'),
];
