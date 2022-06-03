export interface UberState {
  id: string,
  groupId: number,
  uberId: number,
  uberValue?: number,
}

const uberStates: UberState[] = [
  {
    id: "trees.bash",
    groupId: 0,
    uberId: 0,
  },
  {
    id: "trees.double_jump",
    groupId: 0,
    uberId: 5,
  },
  {
    id: "trees.launch",
    groupId: 0,
    uberId: 8,
  },
  {
    id: "trees.grenade",
    groupId: 0,
    uberId: 51,
  },
  {
    id: "trees.grapple",
    groupId: 0,
    uberId: 57,
  },
  {
    id: "trees.flash",
    groupId: 0,
    uberId: 62,
  },
  {
    id: "trees.regenerate",
    groupId: 0,
    uberId: 77,
  },
  {
    id: "trees.bow",
    groupId: 0,
    uberId: 97,
  },
  {
    id: "trees.sword",
    groupId: 0,
    uberId: 100,
  },
  {
    id: "trees.burrow",
    groupId: 0,
    uberId: 101,
  },
  {
    id: "trees.dash",
    groupId: 0,
    uberId: 102,
  },
  {
    id: "trees.water_dash",
    groupId: 0,
    uberId: 104,
  },
  {
    id: "trees.ancestral_light",
    groupId: 0,
    uberId: 120,
  },
  {
    id: "trees.ancestral_light_2",
    groupId: 0,
    uberId: 121,
  },
  {
    id: "opher_weapons.Water Breath",
    groupId: 1,
    uberId: 23,
  },
  {
    id: "opher_weapons.Spike",
    groupId: 1,
    uberId: 74,
  },
  {
    id: "opher_weapons.Spirit Smash",
    groupId: 1,
    uberId: 98,
  },
  {
    id: "opher_weapons.Fast Travel",
    groupId: 1,
    uberId: 105,
  },
  {
    id: "opher_weapons.Spirit Star",
    groupId: 1,
    uberId: 106,
  },
  {
    id: "opher_weapons.Blaze",
    groupId: 1,
    uberId: 115,
  },
  {
    id: "opher_weapons.Sentry",
    groupId: 1,
    uberId: 116,
  },
  {
    id: "opher_weapons.Exploding Spike",
    groupId: 1,
    uberId: 1074,
  },
  {
    id: "opher_weapons.Shock Smash",
    groupId: 1,
    uberId: 1098,
  },
  {
    id: "opher_weapons.Static Star",
    groupId: 1,
    uberId: 1106,
  },
  {
    id: "opher_weapons.Charge Blaze",
    groupId: 1,
    uberId: 1115,
  },
  {
    id: "opher_weapons.Rapid Sentry",
    groupId: 1,
    uberId: 1116,
  },
  {
    id: "opher_weapons.Has bought everything",
    groupId: 1,
    uberId: 20000,
  },
  {
    id: "opher_weapons.Water Breath cost",
    groupId: 1,
    uberId: 10023,
  },
  {
    id: "opher_weapons.Spike cost",
    groupId: 1,
    uberId: 10074,
  },
  {
    id: "opher_weapons.Spirit Smash cost",
    groupId: 1,
    uberId: 10098,
  },
  {
    id: "opher_weapons.Fast Travel cost",
    groupId: 1,
    uberId: 10105,
  },
  {
    id: "opher_weapons.Spirit Star cost",
    groupId: 1,
    uberId: 10106,
  },
  {
    id: "opher_weapons.Blaze cost",
    groupId: 1,
    uberId: 10115,
  },
  {
    id: "opher_weapons.Sentry cost",
    groupId: 1,
    uberId: 10116,
  },
  {
    id: "opher_weapons.Exploding Spike cost",
    groupId: 1,
    uberId: 11074,
  },
  {
    id: "opher_weapons.Shock Smash cost",
    groupId: 1,
    uberId: 11098,
  },
  {
    id: "opher_weapons.Static Star cost",
    groupId: 1,
    uberId: 11106,
  },
  {
    id: "opher_weapons.Charge Blaze cost",
    groupId: 1,
    uberId: 11115,
  },
  {
    id: "opher_weapons.Rapid Sentry cost",
    groupId: 1,
    uberId: 11116,
  },
  {
    id: "twillen_shards.Overcharge",
    groupId: 2,
    uberId: 1,
  },
  {
    id: "twillen_shards.TripleJump",
    groupId: 2,
    uberId: 2,
  },
  {
    id: "twillen_shards.Wingclip",
    groupId: 2,
    uberId: 3,
  },
  {
    id: "twillen_shards.Swap",
    groupId: 2,
    uberId: 5,
  },
  {
    id: "twillen_shards.LightHarvest",
    groupId: 2,
    uberId: 19,
  },
  {
    id: "twillen_shards.Vitality",
    groupId: 2,
    uberId: 22,
  },
  {
    id: "twillen_shards.Energy",
    groupId: 2,
    uberId: 26,
  },
  {
    id: "twillen_shards.Finesse",
    groupId: 2,
    uberId: 40,
  },
  {
    id: "twillen_shards.Has bought everything",
    groupId: 2,
    uberId: 20000,
  },
  {
    id: "twillen_shards.Overcharge cost",
    groupId: 2,
    uberId: 101,
  },
  {
    id: "twillen_shards.TripleJump cost",
    groupId: 2,
    uberId: 102,
  },
  {
    id: "twillen_shards.Wingclip cost",
    groupId: 2,
    uberId: 103,
  },
  {
    id: "twillen_shards.Swap cost",
    groupId: 2,
    uberId: 105,
  },
  {
    id: "twillen_shards.LightHarvest cost",
    groupId: 2,
    uberId: 119,
  },
  {
    id: "twillen_shards.Vitality cost",
    groupId: 2,
    uberId: 122,
  },
  {
    id: "twillen_shards.Energy cost",
    groupId: 2,
    uberId: 126,
  },
  {
    id: "twillen_shards.Finesse cost",
    groupId: 2,
    uberId: 140,
  },
  {
    id: "game_state.Spawn",
    groupId: 3,
    uberId: 0,
  },
  {
    id: "game_state.Goal Modes Complete",
    groupId: 3,
    uberId: 11,
  },
  {
    id: "game_state.On Teleport",
    groupId: 3,
    uberId: 20,
  },
  {
    id: "game_state.On Jump",
    groupId: 3,
    uberId: 30,
  },
  {
    id: "game_state.On Double Jump",
    groupId: 3,
    uberId: 31,
  },
  {
    id: "game_state.On Dash",
    groupId: 3,
    uberId: 32,
  },
  {
    id: "game_state.On Bash",
    groupId: 3,
    uberId: 33,
  },
  {
    id: "game_state.On Glide",
    groupId: 3,
    uberId: 34,
  },
  {
    id: "game_state.On Sword",
    groupId: 3,
    uberId: 35,
  },
  {
    id: "game_state.On Hammer",
    groupId: 3,
    uberId: 36,
  },
  {
    id: "game_state.On Spike",
    groupId: 3,
    uberId: 37,
  },
  {
    id: "game_state.On Spirit Star",
    groupId: 3,
    uberId: 38,
  },
  {
    id: "game_state.On Light Burst",
    groupId: 3,
    uberId: 39,
  },
  {
    id: "game_state.On Bow",
    groupId: 3,
    uberId: 40,
  },
  {
    id: "game_state.On Blaze",
    groupId: 3,
    uberId: 41,
  },
  {
    id: "game_state.On Sentry",
    groupId: 3,
    uberId: 42,
  },
  {
    id: "game_state.On Flash",
    groupId: 3,
    uberId: 43,
  },
  {
    id: "game_state.On Launch",
    groupId: 3,
    uberId: 44,
  },
  {
    id: "game_state.On Wall Jump",
    groupId: 3,
    uberId: 45,
  },
  {
    id: "game_state.On Burrow",
    groupId: 3,
    uberId: 46,
  },
  {
    id: "game_state.On Water Dash",
    groupId: 3,
    uberId: 47,
  },
  {
    id: "game_state.On Flap",
    groupId: 3,
    uberId: 48,
  },
  {
    id: "game_state.On Regenerate",
    groupId: 3,
    uberId: 49,
  },
  {
    id: "game_state.Reload",
    groupId: 3,
    uberId: 1,
  },
  {
    id: "game_state.Binding One",
    groupId: 3,
    uberId: 2,
  },
  {
    id: "game_state.Binding Two",
    groupId: 3,
    uberId: 3,
  },
  {
    id: "game_state.Binding Three",
    groupId: 3,
    uberId: 4,
  },
  {
    id: "game_state.Binding Four",
    groupId: 3,
    uberId: 5,
  },
  {
    id: "game_state.Binding Five",
    groupId: 3,
    uberId: 6,
  },
  {
    id: "game_state.Load",
    groupId: 3,
    uberId: 7,
  },
  {
    id: "rando_upgrades.Autoaim",
    groupId: 4,
    uberId: 37,
  },
  {
    id: "rando_upgrades.Grenades explode on collision",
    groupId: 4,
    uberId: 41,
  },
  {
    id: "rando_upgrades.Bashable uncharged Grenades",
    groupId: 4,
    uberId: 42,
  },
  {
    id: "rando_upgrades.Charged Air Grenades",
    groupId: 4,
    uberId: 43,
  },
  {
    id: "rando_upgrades.Bow as fire source",
    groupId: 4,
    uberId: 70,
  },
  {
    id: "rando_upgrades.Blaze as fire source",
    groupId: 4,
    uberId: 71,
  },
  {
    id: "rando_upgrades.Sword as fire source",
    groupId: 4,
    uberId: 72,
  },
  {
    id: "rando_upgrades.Hammer as fire source",
    groupId: 4,
    uberId: 73,
  },
  {
    id: "rando_upgrades.Spear as fire source",
    groupId: 4,
    uberId: 74,
  },
  {
    id: "rando_upgrades.Shuriken as fire source",
    groupId: 4,
    uberId: 75,
  },
  {
    id: "rando_upgrades.Hammer speed multiplier",
    groupId: 4,
    uberId: 0,
  },
  {
    id: "rando_upgrades.Sword speed multiplier",
    groupId: 4,
    uberId: 1,
  },
  {
    id: "rando_upgrades.Blaze cost multiplier",
    groupId: 4,
    uberId: 2,
  },
  {
    id: "rando_upgrades.Spike cost multiplier",
    groupId: 4,
    uberId: 3,
  },
  {
    id: "rando_upgrades.Shuriken cost multiplier",
    groupId: 4,
    uberId: 4,
  },
  {
    id: "rando_upgrades.Sentry cost multiplier",
    groupId: 4,
    uberId: 5,
  },
  {
    id: "rando_upgrades.Bow cost multiplier",
    groupId: 4,
    uberId: 6,
  },
  {
    id: "rando_upgrades.Regeneration cost multiplier",
    groupId: 4,
    uberId: 7,
  },
  {
    id: "rando_upgrades.Flash cost multiplier",
    groupId: 4,
    uberId: 8,
  },
  {
    id: "rando_upgrades.Light Burst cost multiplier",
    groupId: 4,
    uberId: 9,
  },
  {
    id: "rando_upgrades.Bow rapid fire multiplier",
    groupId: 4,
    uberId: 10,
  },
  {
    id: "rando_upgrades.Spear speed multiplier",
    groupId: 4,
    uberId: 11,
  },
  {
    id: "rando_upgrades.Grenade charge time modifier",
    groupId: 4,
    uberId: 44,
  },
  {
    id: "rando_upgrades.Launch Speed",
    groupId: 4,
    uberId: 80,
  },
  {
    id: "rando_upgrades.Dash Distance",
    groupId: 4,
    uberId: 81,
  },
  {
    id: "rando_upgrades.Bash Speed",
    groupId: 4,
    uberId: 82,
  },
  {
    id: "rando_upgrades.Burrow Speed",
    groupId: 4,
    uberId: 83,
  },
  {
    id: "rando_upgrades.Burrow Dash Speed",
    groupId: 4,
    uberId: 84,
  },
  {
    id: "rando_upgrades.Swim Speed",
    groupId: 4,
    uberId: 85,
  },
  {
    id: "rando_upgrades.Swim Dash Speed",
    groupId: 4,
    uberId: 86,
  },
  {
    id: "rando_upgrades.Jump Height",
    groupId: 4,
    uberId: 87,
  },
  {
    id: "rando_upgrades.Relic",
    groupId: 4,
    uberId: 20,
  },
  {
    id: "rando_upgrades.Health Regeneration",
    groupId: 4,
    uberId: 30,
  },
  {
    id: "rando_upgrades.Energy Regeneration",
    groupId: 4,
    uberId: 31,
  },
  {
    id: "rando_upgrades.Extra Double Jumps",
    groupId: 4,
    uberId: 35,
  },
  {
    id: "rando_upgrades.Extra Dashes",
    groupId: 4,
    uberId: 36,
  },
  {
    id: "rando_upgrades.Extra Grenades",
    groupId: 4,
    uberId: 40,
  },
  {
    id: "rando_upgrades.Grenade multishot",
    groupId: 4,
    uberId: 45,
  },
  {
    id: "rando_upgrades.Hammer Speed",
    groupId: 4,
    uberId: 50,
  },
  {
    id: "rando_upgrades.Sword Speed",
    groupId: 4,
    uberId: 51,
  },
  {
    id: "rando_upgrades.Blaze Efficiency",
    groupId: 4,
    uberId: 52,
  },
  {
    id: "rando_upgrades.Spike Efficiency",
    groupId: 4,
    uberId: 53,
  },
  {
    id: "rando_upgrades.Shuriken Efficiency",
    groupId: 4,
    uberId: 54,
  },
  {
    id: "rando_upgrades.Sentry Efficiency",
    groupId: 4,
    uberId: 55,
  },
  {
    id: "rando_upgrades.Bow Efficiency",
    groupId: 4,
    uberId: 56,
  },
  {
    id: "rando_upgrades.Regenerate Efficiency",
    groupId: 4,
    uberId: 57,
  },
  {
    id: "rando_upgrades.Flash Efficiency",
    groupId: 4,
    uberId: 58,
  },
  {
    id: "rando_upgrades.Light Burst Efficiency",
    groupId: 4,
    uberId: 59,
  },
  {
    id: "rando_upgrades.Exploding Spike",
    groupId: 4,
    uberId: 95,
  },
  {
    id: "rando_upgrades.Shock Smash",
    groupId: 4,
    uberId: 96,
  },
  {
    id: "rando_upgrades.Static Star",
    groupId: 4,
    uberId: 97,
  },
  {
    id: "rando_upgrades.Charge Blaze",
    groupId: 4,
    uberId: 98,
  },
  {
    id: "rando_upgrades.Rapid Sentry",
    groupId: 4,
    uberId: 99,
  },
  {
    id: "rando_upgrades.Marsh Relic",
    groupId: 4,
    uberId: 100,
  },
  {
    id: "rando_upgrades.Hollow Relic",
    groupId: 4,
    uberId: 101,
  },
  {
    id: "rando_upgrades.Glades Relic",
    groupId: 4,
    uberId: 102,
  },
  {
    id: "rando_upgrades.Wellspring Relic",
    groupId: 4,
    uberId: 103,
  },
  {
    id: "rando_upgrades.Burrows Relic",
    groupId: 4,
    uberId: 104,
  },
  {
    id: "rando_upgrades.Woods Relic",
    groupId: 4,
    uberId: 105,
  },
  {
    id: "rando_upgrades.Reach Relic",
    groupId: 4,
    uberId: 106,
  },
  {
    id: "rando_upgrades.Pools Relic",
    groupId: 4,
    uberId: 107,
  },
  {
    id: "rando_upgrades.Depths Relic",
    groupId: 4,
    uberId: 108,
  },
  {
    id: "rando_upgrades.Wastes Relic",
    groupId: 4,
    uberId: 109,
  },
  {
    id: "rando_upgrades.Willow Relic",
    groupId: 4,
    uberId: 111,
  },
  {
    id: "rando_state.Checkable Item Hint 1",
    groupId: 6,
    uberId: 10,
  },
  {
    id: "rando_state.Checkable Item Hint 2",
    groupId: 6,
    uberId: 11,
  },
  {
    id: "rando_state.Checkable Item Hint 3",
    groupId: 6,
    uberId: 12,
  },
  {
    id: "rando_state.Checkable Item Hint 4",
    groupId: 6,
    uberId: 13,
  },
  {
    id: "rando_state.Checkable Item Hint 5",
    groupId: 6,
    uberId: 14,
  },
  {
    id: "rando_state.Checkable Item Hint 6",
    groupId: 6,
    uberId: 15,
  },
  {
    id: "rando_state.Checkable Item Hint 7",
    groupId: 6,
    uberId: 16,
  },
  {
    id: "rando_state.Checkable Item Hint 8",
    groupId: 6,
    uberId: 17,
  },
  {
    id: "rando_state.Checkable Item Hint 9",
    groupId: 6,
    uberId: 18,
  },
  {
    id: "rando_state.Checkable Item Hint 10",
    groupId: 6,
    uberId: 19,
  },
  {
    id: "rando_state.HollowTP",
    groupId: 6,
    uberId: 106,
  },
  {
    id: "rando_state.Bash",
    groupId: 6,
    uberId: 1000,
  },
  {
    id: "rando_state.WallJump",
    groupId: 6,
    uberId: 1003,
  },
  {
    id: "rando_state.DoubleJump",
    groupId: 6,
    uberId: 1005,
  },
  {
    id: "rando_state.Launch",
    groupId: 6,
    uberId: 1008,
  },
  {
    id: "rando_state.Feather",
    groupId: 6,
    uberId: 1014,
  },
  {
    id: "rando_state.Spirit Flame",
    groupId: 6,
    uberId: 1015,
  },
  {
    id: "rando_state.WaterBreath",
    groupId: 6,
    uberId: 1023,
  },
  {
    id: "rando_state.Resilience",
    groupId: 6,
    uberId: 1031,
  },
  {
    id: "rando_state.Health Efficiency",
    groupId: 6,
    uberId: 1032,
  },
  {
    id: "rando_state.Energy Efficiency",
    groupId: 6,
    uberId: 1039,
  },
  {
    id: "rando_state.LightBurst",
    groupId: 6,
    uberId: 1051,
  },
  {
    id: "rando_state.Grapple",
    groupId: 6,
    uberId: 1057,
  },
  {
    id: "rando_state.Flash",
    groupId: 6,
    uberId: 1062,
  },
  {
    id: "rando_state.Spike",
    groupId: 6,
    uberId: 1074,
  },
  {
    id: "rando_state.Regenerate",
    groupId: 6,
    uberId: 1077,
  },
  {
    id: "rando_state.SpiritArc",
    groupId: 6,
    uberId: 1097,
  },
  {
    id: "rando_state.SpiritSmash",
    groupId: 6,
    uberId: 1098,
  },
  {
    id: "rando_state.Torch",
    groupId: 6,
    uberId: 1099,
  },
  {
    id: "rando_state.SpiritEdge",
    groupId: 6,
    uberId: 1100,
  },
  {
    id: "rando_state.Burrow",
    groupId: 6,
    uberId: 1101,
  },
  {
    id: "rando_state.Dash",
    groupId: 6,
    uberId: 1102,
  },
  {
    id: "rando_state.WaterDash",
    groupId: 6,
    uberId: 1104,
  },
  {
    id: "rando_state.SpiritStar",
    groupId: 6,
    uberId: 1106,
  },
  {
    id: "rando_state.Seir",
    groupId: 6,
    uberId: 1108,
  },
  {
    id: "rando_state.Bow Charge",
    groupId: 6,
    uberId: 1109,
  },
  {
    id: "rando_state.Spirit Magnet",
    groupId: 6,
    uberId: 1112,
  },
  {
    id: "rando_state.Blaze",
    groupId: 6,
    uberId: 1115,
  },
  {
    id: "rando_state.Sentry",
    groupId: 6,
    uberId: 1116,
  },
  {
    id: "rando_state.Flap",
    groupId: 6,
    uberId: 1118,
  },
  {
    id: "rando_state.Weapon Charge",
    groupId: 6,
    uberId: 1119,
  },
  {
    id: "rando_state.DamageUpgrade1",
    groupId: 6,
    uberId: 1120,
  },
  {
    id: "rando_state.DamageUpgrade2",
    groupId: 6,
    uberId: 1121,
  },
  {
    id: "rando_state.Clean Water",
    groupId: 6,
    uberId: 2000,
  },
  {
    id: "rando_state.Collected Keystones",
    groupId: 6,
    uberId: 0,
  },
  {
    id: "rando_state.Purchased Keystones",
    groupId: 6,
    uberId: 1,
  },
  {
    id: "rando_state.Pickups Collected",
    groupId: 6,
    uberId: 2,
  },
  {
    id: "rando_state.Spirit Light Collected",
    groupId: 6,
    uberId: 3,
  },
  {
    id: "rando_state.Spirit Light Spent",
    groupId: 6,
    uberId: 4,
  },
  {
    id: "rando_state.Ore Collected",
    groupId: 6,
    uberId: 5,
  },
  {
    id: "rando_state.Ore Spent",
    groupId: 6,
    uberId: 6,
  },
  {
    id: "rando_state.Marsh Key Item Hint",
    groupId: 6,
    uberId: 10000,
  },
  {
    id: "rando_state.Hollow Key Item Hint",
    groupId: 6,
    uberId: 10001,
  },
  {
    id: "rando_state.Glades Key Item Hint",
    groupId: 6,
    uberId: 10002,
  },
  {
    id: "rando_state.Wellspring Key Item Hint",
    groupId: 6,
    uberId: 10003,
  },
  {
    id: "rando_state.Burrows Key Item Hint",
    groupId: 6,
    uberId: 10004,
  },
  {
    id: "rando_state.Woods Key Item Hint",
    groupId: 6,
    uberId: 10005,
  },
  {
    id: "rando_state.Reach Key Item Hint",
    groupId: 6,
    uberId: 10006,
  },
  {
    id: "rando_state.Pools Key Item Hint",
    groupId: 6,
    uberId: 10007,
  },
  {
    id: "rando_state.Depths Key Item Hint",
    groupId: 6,
    uberId: 10008,
  },
  {
    id: "rando_state.Wastes Key Item Hint",
    groupId: 6,
    uberId: 10009,
  },
  {
    id: "rando_state.Willow Key Item Hint",
    groupId: 6,
    uberId: 10011,
  },
  {
    id: "rando_config.glades_tp_fix",
    groupId: 7,
    uberId: 0,
  },
  {
    id: "rando_config.prevent_map_reactivate_tps",
    groupId: 7,
    uberId: 1,
  },
  {
    id: "rando_config.marsh_starts_sunny",
    groupId: 7,
    uberId: 2,
  },
  {
    id: "rando_config.howl_starts_dead",
    groupId: 7,
    uberId: 3,
  },
  {
    id: "rando_config.enable_vanilla_regen_tree",
    groupId: 7,
    uberId: 4,
  },
  {
    id: "rando_config.disable_tree_check_for_rain",
    groupId: 7,
    uberId: 5,
  },
  {
    id: "map_filter.show_spoiler",
    groupId: 8,
    uberId: 70,
  },
  {
    id: "plando_vars.100_bool",
    groupId: 9,
    uberId: 100,
  },
  {
    id: "plando_vars.101_bool",
    groupId: 9,
    uberId: 101,
  },
  {
    id: "plando_vars.102_bool",
    groupId: 9,
    uberId: 102,
  },
  {
    id: "plando_vars.103_bool",
    groupId: 9,
    uberId: 103,
  },
  {
    id: "plando_vars.104_bool",
    groupId: 9,
    uberId: 104,
  },
  {
    id: "plando_vars.105_bool",
    groupId: 9,
    uberId: 105,
  },
  {
    id: "plando_vars.106_bool",
    groupId: 9,
    uberId: 106,
  },
  {
    id: "plando_vars.107_bool",
    groupId: 9,
    uberId: 107,
  },
  {
    id: "plando_vars.108_bool",
    groupId: 9,
    uberId: 108,
  },
  {
    id: "plando_vars.109_bool",
    groupId: 9,
    uberId: 109,
  },
  {
    id: "plando_vars.110_bool",
    groupId: 9,
    uberId: 110,
  },
  {
    id: "plando_vars.111_bool",
    groupId: 9,
    uberId: 111,
  },
  {
    id: "plando_vars.112_bool",
    groupId: 9,
    uberId: 112,
  },
  {
    id: "plando_vars.113_bool",
    groupId: 9,
    uberId: 113,
  },
  {
    id: "plando_vars.114_bool",
    groupId: 9,
    uberId: 114,
  },
  {
    id: "plando_vars.115_bool",
    groupId: 9,
    uberId: 115,
  },
  {
    id: "plando_vars.116_bool",
    groupId: 9,
    uberId: 116,
  },
  {
    id: "plando_vars.117_bool",
    groupId: 9,
    uberId: 117,
  },
  {
    id: "plando_vars.118_bool",
    groupId: 9,
    uberId: 118,
  },
  {
    id: "plando_vars.119_bool",
    groupId: 9,
    uberId: 119,
  },
  {
    id: "plando_vars.120_bool",
    groupId: 9,
    uberId: 120,
  },
  {
    id: "plando_vars.121_bool",
    groupId: 9,
    uberId: 121,
  },
  {
    id: "plando_vars.122_bool",
    groupId: 9,
    uberId: 122,
  },
  {
    id: "plando_vars.123_bool",
    groupId: 9,
    uberId: 123,
  },
  {
    id: "plando_vars.124_bool",
    groupId: 9,
    uberId: 124,
  },
  {
    id: "plando_vars.125_bool",
    groupId: 9,
    uberId: 125,
  },
  {
    id: "plando_vars.126_bool",
    groupId: 9,
    uberId: 126,
  },
  {
    id: "plando_vars.127_bool",
    groupId: 9,
    uberId: 127,
  },
  {
    id: "plando_vars.128_bool",
    groupId: 9,
    uberId: 128,
  },
  {
    id: "plando_vars.129_bool",
    groupId: 9,
    uberId: 129,
  },
  {
    id: "plando_vars.130_bool",
    groupId: 9,
    uberId: 130,
  },
  {
    id: "plando_vars.131_bool",
    groupId: 9,
    uberId: 131,
  },
  {
    id: "plando_vars.132_bool",
    groupId: 9,
    uberId: 132,
  },
  {
    id: "plando_vars.133_bool",
    groupId: 9,
    uberId: 133,
  },
  {
    id: "plando_vars.134_bool",
    groupId: 9,
    uberId: 134,
  },
  {
    id: "plando_vars.135_bool",
    groupId: 9,
    uberId: 135,
  },
  {
    id: "plando_vars.136_bool",
    groupId: 9,
    uberId: 136,
  },
  {
    id: "plando_vars.137_bool",
    groupId: 9,
    uberId: 137,
  },
  {
    id: "plando_vars.138_bool",
    groupId: 9,
    uberId: 138,
  },
  {
    id: "plando_vars.139_bool",
    groupId: 9,
    uberId: 139,
  },
  {
    id: "plando_vars.140_bool",
    groupId: 9,
    uberId: 140,
  },
  {
    id: "plando_vars.141_bool",
    groupId: 9,
    uberId: 141,
  },
  {
    id: "plando_vars.142_bool",
    groupId: 9,
    uberId: 142,
  },
  {
    id: "plando_vars.143_bool",
    groupId: 9,
    uberId: 143,
  },
  {
    id: "plando_vars.144_bool",
    groupId: 9,
    uberId: 144,
  },
  {
    id: "plando_vars.145_bool",
    groupId: 9,
    uberId: 145,
  },
  {
    id: "plando_vars.146_bool",
    groupId: 9,
    uberId: 146,
  },
  {
    id: "plando_vars.147_bool",
    groupId: 9,
    uberId: 147,
  },
  {
    id: "plando_vars.148_bool",
    groupId: 9,
    uberId: 148,
  },
  {
    id: "plando_vars.149_bool",
    groupId: 9,
    uberId: 149,
  },
  {
    id: "plando_vars.0_int",
    groupId: 9,
    uberId: 0,
  },
  {
    id: "plando_vars.1_int",
    groupId: 9,
    uberId: 1,
  },
  {
    id: "plando_vars.2_int",
    groupId: 9,
    uberId: 2,
  },
  {
    id: "plando_vars.3_int",
    groupId: 9,
    uberId: 3,
  },
  {
    id: "plando_vars.4_int",
    groupId: 9,
    uberId: 4,
  },
  {
    id: "plando_vars.5_int",
    groupId: 9,
    uberId: 5,
  },
  {
    id: "plando_vars.6_int",
    groupId: 9,
    uberId: 6,
  },
  {
    id: "plando_vars.7_int",
    groupId: 9,
    uberId: 7,
  },
  {
    id: "plando_vars.8_int",
    groupId: 9,
    uberId: 8,
  },
  {
    id: "plando_vars.9_int",
    groupId: 9,
    uberId: 9,
  },
  {
    id: "plando_vars.10_int",
    groupId: 9,
    uberId: 10,
  },
  {
    id: "plando_vars.11_int",
    groupId: 9,
    uberId: 11,
  },
  {
    id: "plando_vars.12_int",
    groupId: 9,
    uberId: 12,
  },
  {
    id: "plando_vars.13_int",
    groupId: 9,
    uberId: 13,
  },
  {
    id: "plando_vars.14_int",
    groupId: 9,
    uberId: 14,
  },
  {
    id: "plando_vars.15_int",
    groupId: 9,
    uberId: 15,
  },
  {
    id: "plando_vars.16_int",
    groupId: 9,
    uberId: 16,
  },
  {
    id: "plando_vars.17_int",
    groupId: 9,
    uberId: 17,
  },
  {
    id: "plando_vars.18_int",
    groupId: 9,
    uberId: 18,
  },
  {
    id: "plando_vars.19_int",
    groupId: 9,
    uberId: 19,
  },
  {
    id: "plando_vars.20_int",
    groupId: 9,
    uberId: 20,
  },
  {
    id: "plando_vars.21_int",
    groupId: 9,
    uberId: 21,
  },
  {
    id: "plando_vars.22_int",
    groupId: 9,
    uberId: 22,
  },
  {
    id: "plando_vars.23_int",
    groupId: 9,
    uberId: 23,
  },
  {
    id: "plando_vars.24_int",
    groupId: 9,
    uberId: 24,
  },
  {
    id: "plando_vars.25_int",
    groupId: 9,
    uberId: 25,
  },
  {
    id: "plando_vars.26_int",
    groupId: 9,
    uberId: 26,
  },
  {
    id: "plando_vars.27_int",
    groupId: 9,
    uberId: 27,
  },
  {
    id: "plando_vars.28_int",
    groupId: 9,
    uberId: 28,
  },
  {
    id: "plando_vars.29_int",
    groupId: 9,
    uberId: 29,
  },
  {
    id: "plando_vars.30_int",
    groupId: 9,
    uberId: 30,
  },
  {
    id: "plando_vars.31_int",
    groupId: 9,
    uberId: 31,
  },
  {
    id: "plando_vars.32_int",
    groupId: 9,
    uberId: 32,
  },
  {
    id: "plando_vars.33_int",
    groupId: 9,
    uberId: 33,
  },
  {
    id: "plando_vars.34_int",
    groupId: 9,
    uberId: 34,
  },
  {
    id: "plando_vars.35_int",
    groupId: 9,
    uberId: 35,
  },
  {
    id: "plando_vars.36_int",
    groupId: 9,
    uberId: 36,
  },
  {
    id: "plando_vars.37_int",
    groupId: 9,
    uberId: 37,
  },
  {
    id: "plando_vars.38_int",
    groupId: 9,
    uberId: 38,
  },
  {
    id: "plando_vars.39_int",
    groupId: 9,
    uberId: 39,
  },
  {
    id: "plando_vars.40_int",
    groupId: 9,
    uberId: 40,
  },
  {
    id: "plando_vars.41_int",
    groupId: 9,
    uberId: 41,
  },
  {
    id: "plando_vars.42_int",
    groupId: 9,
    uberId: 42,
  },
  {
    id: "plando_vars.43_int",
    groupId: 9,
    uberId: 43,
  },
  {
    id: "plando_vars.44_int",
    groupId: 9,
    uberId: 44,
  },
  {
    id: "plando_vars.45_int",
    groupId: 9,
    uberId: 45,
  },
  {
    id: "plando_vars.46_int",
    groupId: 9,
    uberId: 46,
  },
  {
    id: "plando_vars.47_int",
    groupId: 9,
    uberId: 47,
  },
  {
    id: "plando_vars.48_int",
    groupId: 9,
    uberId: 48,
  },
  {
    id: "plando_vars.49_int",
    groupId: 9,
    uberId: 49,
  },
  {
    id: "plando_vars.50_int",
    groupId: 9,
    uberId: 50,
  },
  {
    id: "plando_vars.51_int",
    groupId: 9,
    uberId: 51,
  },
  {
    id: "plando_vars.52_int",
    groupId: 9,
    uberId: 52,
  },
  {
    id: "plando_vars.53_int",
    groupId: 9,
    uberId: 53,
  },
  {
    id: "plando_vars.54_int",
    groupId: 9,
    uberId: 54,
  },
  {
    id: "plando_vars.55_int",
    groupId: 9,
    uberId: 55,
  },
  {
    id: "plando_vars.56_int",
    groupId: 9,
    uberId: 56,
  },
  {
    id: "plando_vars.57_int",
    groupId: 9,
    uberId: 57,
  },
  {
    id: "plando_vars.58_int",
    groupId: 9,
    uberId: 58,
  },
  {
    id: "plando_vars.59_int",
    groupId: 9,
    uberId: 59,
  },
  {
    id: "plando_vars.60_int",
    groupId: 9,
    uberId: 60,
  },
  {
    id: "plando_vars.61_int",
    groupId: 9,
    uberId: 61,
  },
  {
    id: "plando_vars.62_int",
    groupId: 9,
    uberId: 62,
  },
  {
    id: "plando_vars.63_int",
    groupId: 9,
    uberId: 63,
  },
  {
    id: "plando_vars.64_int",
    groupId: 9,
    uberId: 64,
  },
  {
    id: "plando_vars.65_int",
    groupId: 9,
    uberId: 65,
  },
  {
    id: "plando_vars.66_int",
    groupId: 9,
    uberId: 66,
  },
  {
    id: "plando_vars.67_int",
    groupId: 9,
    uberId: 67,
  },
  {
    id: "plando_vars.68_int",
    groupId: 9,
    uberId: 68,
  },
  {
    id: "plando_vars.69_int",
    groupId: 9,
    uberId: 69,
  },
  {
    id: "plando_vars.70_int",
    groupId: 9,
    uberId: 70,
  },
  {
    id: "plando_vars.71_int",
    groupId: 9,
    uberId: 71,
  },
  {
    id: "plando_vars.72_int",
    groupId: 9,
    uberId: 72,
  },
  {
    id: "plando_vars.73_int",
    groupId: 9,
    uberId: 73,
  },
  {
    id: "plando_vars.74_int",
    groupId: 9,
    uberId: 74,
  },
  {
    id: "plando_vars.75_int",
    groupId: 9,
    uberId: 75,
  },
  {
    id: "plando_vars.76_int",
    groupId: 9,
    uberId: 76,
  },
  {
    id: "plando_vars.77_int",
    groupId: 9,
    uberId: 77,
  },
  {
    id: "plando_vars.78_int",
    groupId: 9,
    uberId: 78,
  },
  {
    id: "plando_vars.79_int",
    groupId: 9,
    uberId: 79,
  },
  {
    id: "plando_vars.80_int",
    groupId: 9,
    uberId: 80,
  },
  {
    id: "plando_vars.81_int",
    groupId: 9,
    uberId: 81,
  },
  {
    id: "plando_vars.82_int",
    groupId: 9,
    uberId: 82,
  },
  {
    id: "plando_vars.83_int",
    groupId: 9,
    uberId: 83,
  },
  {
    id: "plando_vars.84_int",
    groupId: 9,
    uberId: 84,
  },
  {
    id: "plando_vars.85_int",
    groupId: 9,
    uberId: 85,
  },
  {
    id: "plando_vars.86_int",
    groupId: 9,
    uberId: 86,
  },
  {
    id: "plando_vars.87_int",
    groupId: 9,
    uberId: 87,
  },
  {
    id: "plando_vars.88_int",
    groupId: 9,
    uberId: 88,
  },
  {
    id: "plando_vars.89_int",
    groupId: 9,
    uberId: 89,
  },
  {
    id: "plando_vars.90_int",
    groupId: 9,
    uberId: 90,
  },
  {
    id: "plando_vars.91_int",
    groupId: 9,
    uberId: 91,
  },
  {
    id: "plando_vars.92_int",
    groupId: 9,
    uberId: 92,
  },
  {
    id: "plando_vars.93_int",
    groupId: 9,
    uberId: 93,
  },
  {
    id: "plando_vars.94_int",
    groupId: 9,
    uberId: 94,
  },
  {
    id: "plando_vars.95_int",
    groupId: 9,
    uberId: 95,
  },
  {
    id: "plando_vars.96_int",
    groupId: 9,
    uberId: 96,
  },
  {
    id: "plando_vars.97_int",
    groupId: 9,
    uberId: 97,
  },
  {
    id: "plando_vars.98_int",
    groupId: 9,
    uberId: 98,
  },
  {
    id: "plando_vars.99_int",
    groupId: 9,
    uberId: 99,
  },
  {
    id: "plando_vars.150_float",
    groupId: 9,
    uberId: 150,
  },
  {
    id: "plando_vars.151_float",
    groupId: 9,
    uberId: 151,
  },
  {
    id: "plando_vars.152_float",
    groupId: 9,
    uberId: 152,
  },
  {
    id: "plando_vars.153_float",
    groupId: 9,
    uberId: 153,
  },
  {
    id: "plando_vars.154_float",
    groupId: 9,
    uberId: 154,
  },
  {
    id: "plando_vars.155_float",
    groupId: 9,
    uberId: 155,
  },
  {
    id: "plando_vars.156_float",
    groupId: 9,
    uberId: 156,
  },
  {
    id: "plando_vars.157_float",
    groupId: 9,
    uberId: 157,
  },
  {
    id: "plando_vars.158_float",
    groupId: 9,
    uberId: 158,
  },
  {
    id: "plando_vars.159_float",
    groupId: 9,
    uberId: 159,
  },
  {
    id: "plando_vars.160_float",
    groupId: 9,
    uberId: 160,
  },
  {
    id: "plando_vars.161_float",
    groupId: 9,
    uberId: 161,
  },
  {
    id: "plando_vars.162_float",
    groupId: 9,
    uberId: 162,
  },
  {
    id: "plando_vars.163_float",
    groupId: 9,
    uberId: 163,
  },
  {
    id: "plando_vars.164_float",
    groupId: 9,
    uberId: 164,
  },
  {
    id: "plando_vars.165_float",
    groupId: 9,
    uberId: 165,
  },
  {
    id: "plando_vars.166_float",
    groupId: 9,
    uberId: 166,
  },
  {
    id: "plando_vars.167_float",
    groupId: 9,
    uberId: 167,
  },
  {
    id: "plando_vars.168_float",
    groupId: 9,
    uberId: 168,
  },
  {
    id: "plando_vars.169_float",
    groupId: 9,
    uberId: 169,
  },
  {
    id: "plando_vars.170_float",
    groupId: 9,
    uberId: 170,
  },
  {
    id: "plando_vars.171_float",
    groupId: 9,
    uberId: 171,
  },
  {
    id: "plando_vars.172_float",
    groupId: 9,
    uberId: 172,
  },
  {
    id: "plando_vars.173_float",
    groupId: 9,
    uberId: 173,
  },
  {
    id: "plando_vars.174_float",
    groupId: 9,
    uberId: 174,
  },
  {
    id: "bingo_state.Squares",
    groupId: 10,
    uberId: 0,
  },
  {
    id: "bingo_state.Lines",
    groupId: 10,
    uberId: 1,
  },
  {
    id: "bingo_state.Rank",
    groupId: 10,
    uberId: 2,
  },
  {
    id: "bingo_state.Kills",
    groupId: 10,
    uberId: 10,
  },
  {
    id: "bingo_state.SwordKills",
    groupId: 10,
    uberId: 11,
  },
  {
    id: "bingo_state.HammerKills",
    groupId: 10,
    uberId: 12,
  },
  {
    id: "bingo_state.BowKills",
    groupId: 10,
    uberId: 13,
  },
  {
    id: "bingo_state.SpearKills",
    groupId: 10,
    uberId: 14,
  },
  {
    id: "bingo_state.SentryKills",
    groupId: 10,
    uberId: 15,
  },
  {
    id: "bingo_state.BlazeKills",
    groupId: 10,
    uberId: 16,
  },
  {
    id: "bingo_state.GrenadeKills",
    groupId: 10,
    uberId: 17,
  },
  {
    id: "bingo_state.BurnDoTKills",
    groupId: 10,
    uberId: 18,
  },
  {
    id: "bingo_state.ShurikenKills",
    groupId: 10,
    uberId: 19,
  },
  {
    id: "bingo_state.LaunchKills",
    groupId: 10,
    uberId: 20,
  },
  {
    id: "bingo_state.FlashKills",
    groupId: 10,
    uberId: 21,
  },
  {
    id: "bingo_state.BashKills",
    groupId: 10,
    uberId: 22,
  },
  {
    id: "bingo_state.DrownedEnemies",
    groupId: 10,
    uberId: 23,
  },
  {
    id: "bingo_state.MinerKills",
    groupId: 10,
    uberId: 40,
  },
  {
    id: "bingo_state.FlierKills",
    groupId: 10,
    uberId: 41,
  },
  {
    id: "bingo_state.TentaKills",
    groupId: 10,
    uberId: 42,
  },
  {
    id: "bingo_state.SlimeKills",
    groupId: 10,
    uberId: 43,
  },
  {
    id: "bingo_state.FishKills",
    groupId: 10,
    uberId: 44,
  },
  {
    id: "bingo_state.ExploderKills",
    groupId: 10,
    uberId: 45,
  },
  {
    id: "appliers_serialization.0_id",
    groupId: 11,
    uberId: 0,
  },
  {
    id: "appliers_serialization.1_value",
    groupId: 11,
    uberId: 1,
  },
  {
    id: "appliers_serialization.2_id",
    groupId: 11,
    uberId: 2,
  },
  {
    id: "appliers_serialization.3_value",
    groupId: 11,
    uberId: 3,
  },
  {
    id: "appliers_serialization.4_id",
    groupId: 11,
    uberId: 4,
  },
  {
    id: "appliers_serialization.5_value",
    groupId: 11,
    uberId: 5,
  },
  {
    id: "appliers_serialization.6_id",
    groupId: 11,
    uberId: 6,
  },
  {
    id: "appliers_serialization.7_value",
    groupId: 11,
    uberId: 7,
  },
  {
    id: "appliers_serialization.8_id",
    groupId: 11,
    uberId: 8,
  },
  {
    id: "appliers_serialization.9_value",
    groupId: 11,
    uberId: 9,
  },
  {
    id: "appliers_serialization.10_id",
    groupId: 11,
    uberId: 10,
  },
  {
    id: "appliers_serialization.11_value",
    groupId: 11,
    uberId: 11,
  },
  {
    id: "appliers_serialization.12_id",
    groupId: 11,
    uberId: 12,
  },
  {
    id: "appliers_serialization.13_value",
    groupId: 11,
    uberId: 13,
  },
  {
    id: "appliers_serialization.14_id",
    groupId: 11,
    uberId: 14,
  },
  {
    id: "appliers_serialization.15_value",
    groupId: 11,
    uberId: 15,
  },
  {
    id: "appliers_serialization.16_id",
    groupId: 11,
    uberId: 16,
  },
  {
    id: "appliers_serialization.17_value",
    groupId: 11,
    uberId: 17,
  },
  {
    id: "appliers_serialization.18_id",
    groupId: 11,
    uberId: 18,
  },
  {
    id: "appliers_serialization.19_value",
    groupId: 11,
    uberId: 19,
  },
  {
    id: "appliers_serialization.20_id",
    groupId: 11,
    uberId: 20,
  },
  {
    id: "appliers_serialization.21_value",
    groupId: 11,
    uberId: 21,
  },
  {
    id: "appliers_serialization.22_id",
    groupId: 11,
    uberId: 22,
  },
  {
    id: "appliers_serialization.23_value",
    groupId: 11,
    uberId: 23,
  },
  {
    id: "appliers_serialization.24_id",
    groupId: 11,
    uberId: 24,
  },
  {
    id: "appliers_serialization.25_value",
    groupId: 11,
    uberId: 25,
  },
  {
    id: "appliers_serialization.26_id",
    groupId: 11,
    uberId: 26,
  },
  {
    id: "appliers_serialization.27_value",
    groupId: 11,
    uberId: 27,
  },
  {
    id: "appliers_serialization.28_id",
    groupId: 11,
    uberId: 28,
  },
  {
    id: "appliers_serialization.29_value",
    groupId: 11,
    uberId: 29,
  },
  {
    id: "appliers_serialization.30_id",
    groupId: 11,
    uberId: 30,
  },
  {
    id: "appliers_serialization.31_value",
    groupId: 11,
    uberId: 31,
  },
  {
    id: "appliers_serialization.32_id",
    groupId: 11,
    uberId: 32,
  },
  {
    id: "appliers_serialization.33_value",
    groupId: 11,
    uberId: 33,
  },
  {
    id: "appliers_serialization.34_id",
    groupId: 11,
    uberId: 34,
  },
  {
    id: "appliers_serialization.35_value",
    groupId: 11,
    uberId: 35,
  },
  {
    id: "appliers_serialization.36_id",
    groupId: 11,
    uberId: 36,
  },
  {
    id: "appliers_serialization.37_value",
    groupId: 11,
    uberId: 37,
  },
  {
    id: "appliers_serialization.38_id",
    groupId: 11,
    uberId: 38,
  },
  {
    id: "appliers_serialization.39_value",
    groupId: 11,
    uberId: 39,
  },
  {
    id: "appliers_serialization.40_id",
    groupId: 11,
    uberId: 40,
  },
  {
    id: "appliers_serialization.41_value",
    groupId: 11,
    uberId: 41,
  },
  {
    id: "appliers_serialization.42_id",
    groupId: 11,
    uberId: 42,
  },
  {
    id: "appliers_serialization.43_value",
    groupId: 11,
    uberId: 43,
  },
  {
    id: "appliers_serialization.44_id",
    groupId: 11,
    uberId: 44,
  },
  {
    id: "appliers_serialization.45_value",
    groupId: 11,
    uberId: 45,
  },
  {
    id: "appliers_serialization.46_id",
    groupId: 11,
    uberId: 46,
  },
  {
    id: "appliers_serialization.47_value",
    groupId: 11,
    uberId: 47,
  },
  {
    id: "appliers_serialization.48_id",
    groupId: 11,
    uberId: 48,
  },
  {
    id: "appliers_serialization.49_value",
    groupId: 11,
    uberId: 49,
  },
  {
    id: "appliers_serialization.50_id",
    groupId: 11,
    uberId: 50,
  },
  {
    id: "appliers_serialization.51_value",
    groupId: 11,
    uberId: 51,
  },
  {
    id: "appliers_serialization.52_id",
    groupId: 11,
    uberId: 52,
  },
  {
    id: "appliers_serialization.53_value",
    groupId: 11,
    uberId: 53,
  },
  {
    id: "appliers_serialization.54_id",
    groupId: 11,
    uberId: 54,
  },
  {
    id: "appliers_serialization.55_value",
    groupId: 11,
    uberId: 55,
  },
  {
    id: "appliers_serialization.56_id",
    groupId: 11,
    uberId: 56,
  },
  {
    id: "appliers_serialization.57_value",
    groupId: 11,
    uberId: 57,
  },
  {
    id: "appliers_serialization.58_id",
    groupId: 11,
    uberId: 58,
  },
  {
    id: "appliers_serialization.59_value",
    groupId: 11,
    uberId: 59,
  },
  {
    id: "appliers_serialization.60_id",
    groupId: 11,
    uberId: 60,
  },
  {
    id: "appliers_serialization.61_value",
    groupId: 11,
    uberId: 61,
  },
  {
    id: "appliers_serialization.62_id",
    groupId: 11,
    uberId: 62,
  },
  {
    id: "appliers_serialization.63_value",
    groupId: 11,
    uberId: 63,
  },
  {
    id: "appliers_serialization.64_id",
    groupId: 11,
    uberId: 64,
  },
  {
    id: "appliers_serialization.65_value",
    groupId: 11,
    uberId: 65,
  },
  {
    id: "appliers_serialization.66_id",
    groupId: 11,
    uberId: 66,
  },
  {
    id: "appliers_serialization.67_value",
    groupId: 11,
    uberId: 67,
  },
  {
    id: "appliers_serialization.68_id",
    groupId: 11,
    uberId: 68,
  },
  {
    id: "appliers_serialization.69_value",
    groupId: 11,
    uberId: 69,
  },
  {
    id: "appliers_serialization.70_id",
    groupId: 11,
    uberId: 70,
  },
  {
    id: "appliers_serialization.71_value",
    groupId: 11,
    uberId: 71,
  },
  {
    id: "appliers_serialization.72_id",
    groupId: 11,
    uberId: 72,
  },
  {
    id: "appliers_serialization.73_value",
    groupId: 11,
    uberId: 73,
  },
  {
    id: "appliers_serialization.74_id",
    groupId: 11,
    uberId: 74,
  },
  {
    id: "appliers_serialization.75_value",
    groupId: 11,
    uberId: 75,
  },
  {
    id: "appliers_serialization.76_id",
    groupId: 11,
    uberId: 76,
  },
  {
    id: "appliers_serialization.77_value",
    groupId: 11,
    uberId: 77,
  },
  {
    id: "appliers_serialization.78_id",
    groupId: 11,
    uberId: 78,
  },
  {
    id: "appliers_serialization.79_value",
    groupId: 11,
    uberId: 79,
  },
  {
    id: "appliers_serialization.80_id",
    groupId: 11,
    uberId: 80,
  },
  {
    id: "appliers_serialization.81_value",
    groupId: 11,
    uberId: 81,
  },
  {
    id: "appliers_serialization.82_id",
    groupId: 11,
    uberId: 82,
  },
  {
    id: "appliers_serialization.83_value",
    groupId: 11,
    uberId: 83,
  },
  {
    id: "appliers_serialization.84_id",
    groupId: 11,
    uberId: 84,
  },
  {
    id: "appliers_serialization.85_value",
    groupId: 11,
    uberId: 85,
  },
  {
    id: "appliers_serialization.86_id",
    groupId: 11,
    uberId: 86,
  },
  {
    id: "appliers_serialization.87_value",
    groupId: 11,
    uberId: 87,
  },
  {
    id: "appliers_serialization.88_id",
    groupId: 11,
    uberId: 88,
  },
  {
    id: "appliers_serialization.89_value",
    groupId: 11,
    uberId: 89,
  },
  {
    id: "appliers_serialization.90_id",
    groupId: 11,
    uberId: 90,
  },
  {
    id: "appliers_serialization.91_value",
    groupId: 11,
    uberId: 91,
  },
  {
    id: "appliers_serialization.92_id",
    groupId: 11,
    uberId: 92,
  },
  {
    id: "appliers_serialization.93_value",
    groupId: 11,
    uberId: 93,
  },
  {
    id: "appliers_serialization.94_id",
    groupId: 11,
    uberId: 94,
  },
  {
    id: "appliers_serialization.95_value",
    groupId: 11,
    uberId: 95,
  },
  {
    id: "appliers_serialization.96_id",
    groupId: 11,
    uberId: 96,
  },
  {
    id: "appliers_serialization.97_value",
    groupId: 11,
    uberId: 97,
  },
  {
    id: "appliers_serialization.98_id",
    groupId: 11,
    uberId: 98,
  },
  {
    id: "appliers_serialization.99_value",
    groupId: 11,
    uberId: 99,
  },
  {
    id: "multi_vars.0_multi",
    groupId: 12,
    uberId: 0,
  },
  {
    id: "multi_vars.1_multi",
    groupId: 12,
    uberId: 1,
  },
  {
    id: "multi_vars.2_multi",
    groupId: 12,
    uberId: 2,
  },
  {
    id: "multi_vars.3_multi",
    groupId: 12,
    uberId: 3,
  },
  {
    id: "multi_vars.4_multi",
    groupId: 12,
    uberId: 4,
  },
  {
    id: "multi_vars.5_multi",
    groupId: 12,
    uberId: 5,
  },
  {
    id: "multi_vars.6_multi",
    groupId: 12,
    uberId: 6,
  },
  {
    id: "multi_vars.7_multi",
    groupId: 12,
    uberId: 7,
  },
  {
    id: "multi_vars.8_multi",
    groupId: 12,
    uberId: 8,
  },
  {
    id: "multi_vars.9_multi",
    groupId: 12,
    uberId: 9,
  },
  {
    id: "multi_vars.10_multi",
    groupId: 12,
    uberId: 10,
  },
  {
    id: "multi_vars.11_multi",
    groupId: 12,
    uberId: 11,
  },
  {
    id: "multi_vars.12_multi",
    groupId: 12,
    uberId: 12,
  },
  {
    id: "multi_vars.13_multi",
    groupId: 12,
    uberId: 13,
  },
  {
    id: "multi_vars.14_multi",
    groupId: 12,
    uberId: 14,
  },
  {
    id: "multi_vars.15_multi",
    groupId: 12,
    uberId: 15,
  },
  {
    id: "multi_vars.16_multi",
    groupId: 12,
    uberId: 16,
  },
  {
    id: "multi_vars.17_multi",
    groupId: 12,
    uberId: 17,
  },
  {
    id: "multi_vars.18_multi",
    groupId: 12,
    uberId: 18,
  },
  {
    id: "multi_vars.19_multi",
    groupId: 12,
    uberId: 19,
  },
  {
    id: "multi_vars.20_multi",
    groupId: 12,
    uberId: 20,
  },
  {
    id: "multi_vars.21_multi",
    groupId: 12,
    uberId: 21,
  },
  {
    id: "multi_vars.22_multi",
    groupId: 12,
    uberId: 22,
  },
  {
    id: "multi_vars.23_multi",
    groupId: 12,
    uberId: 23,
  },
  {
    id: "multi_vars.24_multi",
    groupId: 12,
    uberId: 24,
  },
  {
    id: "multi_vars.25_multi",
    groupId: 12,
    uberId: 25,
  },
  {
    id: "multi_vars.26_multi",
    groupId: 12,
    uberId: 26,
  },
  {
    id: "multi_vars.27_multi",
    groupId: 12,
    uberId: 27,
  },
  {
    id: "multi_vars.28_multi",
    groupId: 12,
    uberId: 28,
  },
  {
    id: "multi_vars.29_multi",
    groupId: 12,
    uberId: 29,
  },
  {
    id: "multi_vars.30_multi",
    groupId: 12,
    uberId: 30,
  },
  {
    id: "multi_vars.31_multi",
    groupId: 12,
    uberId: 31,
  },
  {
    id: "multi_vars.32_multi",
    groupId: 12,
    uberId: 32,
  },
  {
    id: "multi_vars.33_multi",
    groupId: 12,
    uberId: 33,
  },
  {
    id: "multi_vars.34_multi",
    groupId: 12,
    uberId: 34,
  },
  {
    id: "multi_vars.35_multi",
    groupId: 12,
    uberId: 35,
  },
  {
    id: "multi_vars.36_multi",
    groupId: 12,
    uberId: 36,
  },
  {
    id: "multi_vars.37_multi",
    groupId: 12,
    uberId: 37,
  },
  {
    id: "multi_vars.38_multi",
    groupId: 12,
    uberId: 38,
  },
  {
    id: "multi_vars.39_multi",
    groupId: 12,
    uberId: 39,
  },
  {
    id: "multi_vars.40_multi",
    groupId: 12,
    uberId: 40,
  },
  {
    id: "multi_vars.41_multi",
    groupId: 12,
    uberId: 41,
  },
  {
    id: "multi_vars.42_multi",
    groupId: 12,
    uberId: 42,
  },
  {
    id: "multi_vars.43_multi",
    groupId: 12,
    uberId: 43,
  },
  {
    id: "multi_vars.44_multi",
    groupId: 12,
    uberId: 44,
  },
  {
    id: "multi_vars.45_multi",
    groupId: 12,
    uberId: 45,
  },
  {
    id: "multi_vars.46_multi",
    groupId: 12,
    uberId: 46,
  },
  {
    id: "multi_vars.47_multi",
    groupId: 12,
    uberId: 47,
  },
  {
    id: "multi_vars.48_multi",
    groupId: 12,
    uberId: 48,
  },
  {
    id: "multi_vars.49_multi",
    groupId: 12,
    uberId: 49,
  },
  {
    id: "multi_vars.50_multi",
    groupId: 12,
    uberId: 50,
  },
  {
    id: "multi_vars.51_multi",
    groupId: 12,
    uberId: 51,
  },
  {
    id: "multi_vars.52_multi",
    groupId: 12,
    uberId: 52,
  },
  {
    id: "multi_vars.53_multi",
    groupId: 12,
    uberId: 53,
  },
  {
    id: "multi_vars.54_multi",
    groupId: 12,
    uberId: 54,
  },
  {
    id: "multi_vars.55_multi",
    groupId: 12,
    uberId: 55,
  },
  {
    id: "multi_vars.56_multi",
    groupId: 12,
    uberId: 56,
  },
  {
    id: "multi_vars.57_multi",
    groupId: 12,
    uberId: 57,
  },
  {
    id: "multi_vars.58_multi",
    groupId: 12,
    uberId: 58,
  },
  {
    id: "multi_vars.59_multi",
    groupId: 12,
    uberId: 59,
  },
  {
    id: "multi_vars.60_multi",
    groupId: 12,
    uberId: 60,
  },
  {
    id: "multi_vars.61_multi",
    groupId: 12,
    uberId: 61,
  },
  {
    id: "multi_vars.62_multi",
    groupId: 12,
    uberId: 62,
  },
  {
    id: "multi_vars.63_multi",
    groupId: 12,
    uberId: 63,
  },
  {
    id: "multi_vars.64_multi",
    groupId: 12,
    uberId: 64,
  },
  {
    id: "multi_vars.65_multi",
    groupId: 12,
    uberId: 65,
  },
  {
    id: "multi_vars.66_multi",
    groupId: 12,
    uberId: 66,
  },
  {
    id: "multi_vars.67_multi",
    groupId: 12,
    uberId: 67,
  },
  {
    id: "multi_vars.68_multi",
    groupId: 12,
    uberId: 68,
  },
  {
    id: "multi_vars.69_multi",
    groupId: 12,
    uberId: 69,
  },
  {
    id: "multi_vars.70_multi",
    groupId: 12,
    uberId: 70,
  },
  {
    id: "multi_vars.71_multi",
    groupId: 12,
    uberId: 71,
  },
  {
    id: "multi_vars.72_multi",
    groupId: 12,
    uberId: 72,
  },
  {
    id: "multi_vars.73_multi",
    groupId: 12,
    uberId: 73,
  },
  {
    id: "multi_vars.74_multi",
    groupId: 12,
    uberId: 74,
  },
  {
    id: "multi_vars.75_multi",
    groupId: 12,
    uberId: 75,
  },
  {
    id: "multi_vars.76_multi",
    groupId: 12,
    uberId: 76,
  },
  {
    id: "multi_vars.77_multi",
    groupId: 12,
    uberId: 77,
  },
  {
    id: "multi_vars.78_multi",
    groupId: 12,
    uberId: 78,
  },
  {
    id: "multi_vars.79_multi",
    groupId: 12,
    uberId: 79,
  },
  {
    id: "multi_vars.80_multi",
    groupId: 12,
    uberId: 80,
  },
  {
    id: "multi_vars.81_multi",
    groupId: 12,
    uberId: 81,
  },
  {
    id: "multi_vars.82_multi",
    groupId: 12,
    uberId: 82,
  },
  {
    id: "multi_vars.83_multi",
    groupId: 12,
    uberId: 83,
  },
  {
    id: "multi_vars.84_multi",
    groupId: 12,
    uberId: 84,
  },
  {
    id: "multi_vars.85_multi",
    groupId: 12,
    uberId: 85,
  },
  {
    id: "multi_vars.86_multi",
    groupId: 12,
    uberId: 86,
  },
  {
    id: "multi_vars.87_multi",
    groupId: 12,
    uberId: 87,
  },
  {
    id: "multi_vars.88_multi",
    groupId: 12,
    uberId: 88,
  },
  {
    id: "multi_vars.89_multi",
    groupId: 12,
    uberId: 89,
  },
  {
    id: "multi_vars.90_multi",
    groupId: 12,
    uberId: 90,
  },
  {
    id: "multi_vars.91_multi",
    groupId: 12,
    uberId: 91,
  },
  {
    id: "multi_vars.92_multi",
    groupId: 12,
    uberId: 92,
  },
  {
    id: "multi_vars.93_multi",
    groupId: 12,
    uberId: 93,
  },
  {
    id: "multi_vars.94_multi",
    groupId: 12,
    uberId: 94,
  },
  {
    id: "multi_vars.95_multi",
    groupId: 12,
    uberId: 95,
  },
  {
    id: "multi_vars.96_multi",
    groupId: 12,
    uberId: 96,
  },
  {
    id: "multi_vars.97_multi",
    groupId: 12,
    uberId: 97,
  },
  {
    id: "multi_vars.98_multi",
    groupId: 12,
    uberId: 98,
  },
  {
    id: "multi_vars.99_multi",
    groupId: 12,
    uberId: 99,
  },
  {
    id: "rando_stats.Deaths",
    groupId: 14,
    uberId: 101,
  },
  {
    id: "rando_stats.warps used",
    groupId: 14,
    uberId: 106,
  },
  {
    id: "rando_stats.Peak PPM count",
    groupId: 14,
    uberId: 108,
  },
  {
    id: "rando_stats.Marsh Time",
    groupId: 14,
    uberId: 0,
  },
  {
    id: "rando_stats.Hollow Time",
    groupId: 14,
    uberId: 1,
  },
  {
    id: "rando_stats.Glades Time",
    groupId: 14,
    uberId: 2,
  },
  {
    id: "rando_stats.Wellspring Time",
    groupId: 14,
    uberId: 3,
  },
  {
    id: "rando_stats.Burrows Time",
    groupId: 14,
    uberId: 4,
  },
  {
    id: "rando_stats.Woods Time",
    groupId: 14,
    uberId: 5,
  },
  {
    id: "rando_stats.Reach Time",
    groupId: 14,
    uberId: 6,
  },
  {
    id: "rando_stats.Pools Time",
    groupId: 14,
    uberId: 7,
  },
  {
    id: "rando_stats.Depths Time",
    groupId: 14,
    uberId: 8,
  },
  {
    id: "rando_stats.Wastes Time",
    groupId: 14,
    uberId: 9,
  },
  {
    id: "rando_stats.Ruins Time",
    groupId: 14,
    uberId: 10,
  },
  {
    id: "rando_stats.Willow Time",
    groupId: 14,
    uberId: 11,
  },
  {
    id: "rando_stats.Void Time",
    groupId: 14,
    uberId: 12,
  },
  {
    id: "rando_stats.Time",
    groupId: 14,
    uberId: 100,
  },
  {
    id: "rando_stats.Current Drought",
    groupId: 14,
    uberId: 102,
  },
  {
    id: "rando_stats.Longest Drought",
    groupId: 14,
    uberId: 103,
  },
  {
    id: "rando_stats.Time since last checkpoint",
    groupId: 14,
    uberId: 104,
  },
  {
    id: "rando_stats.Time lost to deaths",
    groupId: 14,
    uberId: 105,
  },
  {
    id: "rando_stats.Peak PPM time",
    groupId: 14,
    uberId: 107,
  },
  {
    id: "rando_stats.Marsh Deaths",
    groupId: 14,
    uberId: 20,
  },
  {
    id: "rando_stats.Hollow Deaths",
    groupId: 14,
    uberId: 21,
  },
  {
    id: "rando_stats.Glades Deaths",
    groupId: 14,
    uberId: 22,
  },
  {
    id: "rando_stats.Wellspring Deaths",
    groupId: 14,
    uberId: 23,
  },
  {
    id: "rando_stats.Burrows Deaths",
    groupId: 14,
    uberId: 24,
  },
  {
    id: "rando_stats.Woods Deaths",
    groupId: 14,
    uberId: 25,
  },
  {
    id: "rando_stats.Reach Deaths",
    groupId: 14,
    uberId: 26,
  },
  {
    id: "rando_stats.Pools Deaths",
    groupId: 14,
    uberId: 27,
  },
  {
    id: "rando_stats.Depths Deaths",
    groupId: 14,
    uberId: 28,
  },
  {
    id: "rando_stats.Wastes Deaths",
    groupId: 14,
    uberId: 29,
  },
  {
    id: "rando_stats.Ruins Deaths",
    groupId: 14,
    uberId: 30,
  },
  {
    id: "rando_stats.Willow Deaths",
    groupId: 14,
    uberId: 31,
  },
  {
    id: "rando_stats.Void Deaths",
    groupId: 14,
    uberId: 32,
  },
  {
    id: "rando_stats.Marsh Pickups",
    groupId: 14,
    uberId: 40,
  },
  {
    id: "rando_stats.Hollow Pickups",
    groupId: 14,
    uberId: 41,
  },
  {
    id: "rando_stats.Glades Pickups",
    groupId: 14,
    uberId: 42,
  },
  {
    id: "rando_stats.Wellspring Pickups",
    groupId: 14,
    uberId: 43,
  },
  {
    id: "rando_stats.Burrows Pickups",
    groupId: 14,
    uberId: 44,
  },
  {
    id: "rando_stats.Woods Pickups",
    groupId: 14,
    uberId: 45,
  },
  {
    id: "rando_stats.Reach Pickups",
    groupId: 14,
    uberId: 46,
  },
  {
    id: "rando_stats.Pools Pickups",
    groupId: 14,
    uberId: 47,
  },
  {
    id: "rando_stats.Depths Pickups",
    groupId: 14,
    uberId: 48,
  },
  {
    id: "rando_stats.Wastes Pickups",
    groupId: 14,
    uberId: 49,
  },
  {
    id: "rando_stats.Ruins Pickups",
    groupId: 14,
    uberId: 50,
  },
  {
    id: "rando_stats.Willow Pickups",
    groupId: 14,
    uberId: 51,
  },
  {
    id: "rando_stats.Void Pickups",
    groupId: 14,
    uberId: 52,
  },
  {
    id: "animalCutsceneGroupDescriptor.animalCutsceneDoneUberState",
    groupId: 192,
    uberId: 80,
  },
  {
    id: "kwoloksGroupDescriptor.leafPileB",
    groupId: 195,
    uberId: 56127,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorBOpen",
    groupId: 229,
    uberId: 2,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalOBurning",
    groupId: 229,
    uberId: 27,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalFBurning",
    groupId: 229,
    uberId: 30,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorAOpen",
    groupId: 229,
    uberId: 35,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorFOpen",
    groupId: 229,
    uberId: 49,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalEBurning",
    groupId: 229,
    uberId: 52,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalABurning",
    groupId: 229,
    uberId: 62,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalIBurning",
    groupId: 229,
    uberId: 66,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalNBurning",
    groupId: 229,
    uberId: 71,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorEOpen",
    groupId: 229,
    uberId: 76,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalGBurning",
    groupId: 229,
    uberId: 108,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalMBurning",
    groupId: 229,
    uberId: 119,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalCBurning",
    groupId: 229,
    uberId: 129,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalKBurning",
    groupId: 229,
    uberId: 174,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorCOpen",
    groupId: 229,
    uberId: 185,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalHBurning",
    groupId: 229,
    uberId: 210,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalJBurning",
    groupId: 229,
    uberId: 222,
  },
  {
    id: "_riverlandsGroup.riverlands_blueFlameDoorDOpen",
    groupId: 229,
    uberId: 226,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalDBurning",
    groupId: 229,
    uberId: 231,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalBBurning",
    groupId: 229,
    uberId: 233,
  },
  {
    id: "_riverlandsGroup.riverlands_pedestalLBurning",
    groupId: 229,
    uberId: 237,
  },
  {
    id: "_riverlandsGroup.savePedestalUberState",
    groupId: 229,
    uberId: 41675,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 109,
  },
  {
    id: "kwolokGroupDescriptor.watermillDoor",
    groupId: 937,
    uberId: 749,
  },
  {
    id: "kwolokGroupDescriptor.cavernGLeverAndDoor",
    groupId: 937,
    uberId: 1174,
  },
  {
    id: "kwolokGroupDescriptor.halfHealthCell",
    groupId: 937,
    uberId: 2463,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholder",
    groupId: 937,
    uberId: 2538,
  },
  {
    id: "kwolokGroupDescriptor.ravineToadTop04",
    groupId: 937,
    uberId: 4057,
  },
  {
    id: "kwolokGroupDescriptor.xpOrbB",
    groupId: 937,
    uberId: 5568,
  },
  {
    id: "kwolokGroupDescriptor.energyContainerA",
    groupId: 937,
    uberId: 5668,
  },
  {
    id: "kwolokGroupDescriptor.orePickup",
    groupId: 937,
    uberId: 6703,
  },
  {
    id: "kwolokGroupDescriptor.mokiGateOpened",
    groupId: 937,
    uberId: 6778,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokF",
    groupId: 937,
    uberId: 7119,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 7153,
  },
  {
    id: "kwolokGroupDescriptor.ravineToadTop01",
    groupId: 937,
    uberId: 7941,
  },
  {
    id: "kwolokGroupDescriptor.energyHalfCell",
    groupId: 937,
    uberId: 8518,
  },
  {
    id: "kwolokGroupDescriptor.secretWallA",
    groupId: 937,
    uberId: 10140,
  },
  {
    id: "kwolokGroupDescriptor.gromOreA",
    groupId: 937,
    uberId: 10729,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholder",
    groupId: 937,
    uberId: 10877,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 11430,
  },
  {
    id: "kwolokGroupDescriptor.bombableWallAkwoloksCavernEa",
    groupId: 937,
    uberId: 11610,
  },
  {
    id: "kwolokGroupDescriptor.orePickupB",
    groupId: 937,
    uberId: 11846,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokH",
    groupId: 937,
    uberId: 12458,
  },
  {
    id: "kwolokGroupDescriptor.stepsRisen",
    groupId: 937,
    uberId: 13273,
  },
  {
    id: "kwolokGroupDescriptor.xpOrbA",
    groupId: 937,
    uberId: 13413,
  },
  {
    id: "kwolokGroupDescriptor.smallExpA",
    groupId: 937,
    uberId: 15993,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholder",
    groupId: 937,
    uberId: 16163,
  },
  {
    id: "kwolokGroupDescriptor.energyContainerA",
    groupId: 937,
    uberId: 17761,
  },
  {
    id: "kwolokGroupDescriptor.temp_WispQuestStandIn",
    groupId: 937,
    uberId: 18035,
  },
  {
    id: "kwolokGroupDescriptor.smallExpA",
    groupId: 937,
    uberId: 18103,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpC",
    groupId: 937,
    uberId: 19529,
  },
  {
    id: "kwolokGroupDescriptor.smallExpB",
    groupId: 937,
    uberId: 20219,
  },
  {
    id: "kwolokGroupDescriptor.bombableWallAkwoloksCavernE",
    groupId: 937,
    uberId: 20294,
  },
  {
    id: "kwolokGroupDescriptor.kwolokCavernsGate",
    groupId: 937,
    uberId: 21165,
  },
  {
    id: "kwolokGroupDescriptor.kwolokShrineBreakableWall",
    groupId: 937,
    uberId: 22302,
  },
  {
    id: "kwolokGroupDescriptor.leverDoor",
    groupId: 937,
    uberId: 22419,
  },
  {
    id: "kwolokGroupDescriptor.pressurePlatePuzzle",
    groupId: 937,
    uberId: 22716,
  },
  {
    id: "kwolokGroupDescriptor.lifeCellA",
    groupId: 937,
    uberId: 23486,
  },
  {
    id: "kwolokGroupDescriptor.energyHalfCell",
    groupId: 937,
    uberId: 23772,
  },
  {
    id: "kwolokGroupDescriptor.spiritShardA",
    groupId: 937,
    uberId: 24039,
  },
  {
    id: "kwolokGroupDescriptor.energyHalfContainer",
    groupId: 937,
    uberId: 24175,
  },
  {
    id: "kwolokGroupDescriptor.spiritShardMagnet",
    groupId: 937,
    uberId: 25413,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokC",
    groupId: 937,
    uberId: 27481,
  },
  {
    id: "kwolokGroupDescriptor.hornbugWallBroken",
    groupId: 937,
    uberId: 27671,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpB",
    groupId: 937,
    uberId: 30182,
  },
  {
    id: "kwolokGroupDescriptor.ravineBottomTop01",
    groupId: 937,
    uberId: 30594,
  },
  {
    id: "kwolokGroupDescriptor.breakableWallA",
    groupId: 937,
    uberId: 31026,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpC",
    groupId: 937,
    uberId: 31036,
  },
  {
    id: "kwolokGroupDescriptor.switchTop",
    groupId: 937,
    uberId: 31222,
  },
  {
    id: "kwolokGroupDescriptor.door",
    groupId: 937,
    uberId: 32165,
  },
  {
    id: "kwolokGroupDescriptor.areaText",
    groupId: 937,
    uberId: 32175,
  },
  {
    id: "kwolokGroupDescriptor.drillZoneA",
    groupId: 937,
    uberId: 32452,
  },
  {
    id: "kwolokGroupDescriptor.keyStoneD",
    groupId: 937,
    uberId: 33763,
  },
  {
    id: "kwolokGroupDescriptor.winterForestDoor",
    groupId: 937,
    uberId: 33773,
  },
  {
    id: "kwolokGroupDescriptor.ravineToadTop03",
    groupId: 937,
    uberId: 34340,
  },
  {
    id: "kwolokGroupDescriptor.airDashHint",
    groupId: 937,
    uberId: 34343,
  },
  {
    id: "kwolokGroupDescriptor.leverDoorKwoloksHollowEntrance",
    groupId: 937,
    uberId: 34396,
  },
  {
    id: "kwolokGroupDescriptor.haveSpokenToOtters",
    groupId: 937,
    uberId: 34516,
  },
  {
    id: "kwolokGroupDescriptor.frogTongueA",
    groupId: 937,
    uberId: 34849,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokI",
    groupId: 937,
    uberId: 37823,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholder",
    groupId: 937,
    uberId: 37926,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokD",
    groupId: 937,
    uberId: 39338,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokE",
    groupId: 937,
    uberId: 39661,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokG",
    groupId: 937,
    uberId: 39715,
  },
  {
    id: "kwolokGroupDescriptor.secretWallB",
    groupId: 937,
    uberId: 40042,
  },
  {
    id: "kwolokGroupDescriptor.stompableFloor",
    groupId: 937,
    uberId: 40225,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpD",
    groupId: 937,
    uberId: 40298,
  },
  {
    id: "kwolokGroupDescriptor.secretWallKwolok",
    groupId: 937,
    uberId: 40466,
  },
  {
    id: "kwolokGroupDescriptor.smallExpA",
    groupId: 937,
    uberId: 40657,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholderB",
    groupId: 937,
    uberId: 42333,
  },
  {
    id: "kwolokGroupDescriptor.interactedWithTokk",
    groupId: 937,
    uberId: 42585,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolok",
    groupId: 937,
    uberId: 44594,
  },
  {
    id: "kwolokGroupDescriptor.ravineBottomTop03",
    groupId: 937,
    uberId: 44861,
  },
  {
    id: "kwolokGroupDescriptor.stompableFloorB",
    groupId: 937,
    uberId: 45349,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 45625,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpB",
    groupId: 937,
    uberId: 45744,
  },
  {
    id: "kwolokGroupDescriptor.secretWallA",
    groupId: 937,
    uberId: 45811,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 45987,
  },
  {
    id: "kwolokGroupDescriptor.ravineToadTop02",
    groupId: 937,
    uberId: 47364,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholderA",
    groupId: 937,
    uberId: 48192,
  },
  {
    id: "kwolokGroupDescriptor.desertBombableWall",
    groupId: 937,
    uberId: 49545,
  },
  {
    id: "kwolokGroupDescriptor.xpOrbA",
    groupId: 937,
    uberId: 50176,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokB",
    groupId: 937,
    uberId: 50357,
  },
  {
    id: "kwolokGroupDescriptor.secretWallA",
    groupId: 937,
    uberId: 50474,
  },
  {
    id: "kwolokGroupDescriptor.energyContainerPlaceholder",
    groupId: 937,
    uberId: 50615,
  },
  {
    id: "kwolokGroupDescriptor.breakableWallA",
    groupId: 937,
    uberId: 51878,
  },
  {
    id: "kwolokGroupDescriptor.kwolokBossBridgeBroken",
    groupId: 937,
    uberId: 51919,
  },
  {
    id: "kwolokGroupDescriptor.spiritShardPickupPlaceholder",
    groupId: 937,
    uberId: 52258,
  },
  {
    id: "kwolokGroupDescriptor.frogDoor",
    groupId: 937,
    uberId: 52652,
  },
  {
    id: "kwolokGroupDescriptor.hornBugBossDefeatedState",
    groupId: 937,
    uberId: 53122,
  },
  {
    id: "kwolokGroupDescriptor.bombableWallAkwoloksCavernEb",
    groupId: 937,
    uberId: 53969,
  },
  {
    id: "kwolokGroupDescriptor.keyStoneC",
    groupId: 937,
    uberId: 54102,
  },
  {
    id: "kwolokGroupDescriptor.brokenWallA",
    groupId: 937,
    uberId: 54236,
  },
  {
    id: "kwolokGroupDescriptor.risingPedestals",
    groupId: 937,
    uberId: 54318,
  },
  {
    id: "kwolokGroupDescriptor.ravineBottomTop02",
    groupId: 937,
    uberId: 55341,
  },
  {
    id: "kwolokGroupDescriptor.dashHint",
    groupId: 937,
    uberId: 55538,
  },
  {
    id: "kwolokGroupDescriptor.drillableWallKwolokJ",
    groupId: 937,
    uberId: 56352,
  },
  {
    id: "kwolokGroupDescriptor.frogTongueC",
    groupId: 937,
    uberId: 56795,
  },
  {
    id: "kwolokGroupDescriptor.leverDoorA",
    groupId: 937,
    uberId: 57028,
  },
  {
    id: "kwolokGroupDescriptor.healthHalfCell",
    groupId: 937,
    uberId: 58598,
  },
  {
    id: "kwolokGroupDescriptor.shootableTargetDoor",
    groupId: 937,
    uberId: 58747,
  },
  {
    id: "kwolokGroupDescriptor.ravineBottomTop05",
    groupId: 937,
    uberId: 59404,
  },
  {
    id: "kwolokGroupDescriptor.serializedBooleanUberState",
    groupId: 937,
    uberId: 59515,
  },
  {
    id: "kwolokGroupDescriptor.doorA",
    groupId: 937,
    uberId: 59850,
  },
  {
    id: "kwolokGroupDescriptor.switchDoorUberState",
    groupId: 937,
    uberId: 59920,
  },
  {
    id: "kwolokGroupDescriptor.ravineBottomTop04",
    groupId: 937,
    uberId: 61099,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 61460,
  },
  {
    id: "kwolokGroupDescriptor.hornbugIntroArenaUberState",
    groupId: 937,
    uberId: 61633,
  },
  {
    id: "kwolokGroupDescriptor.smallExpOrbPlaceholderC",
    groupId: 937,
    uberId: 61744,
  },
  {
    id: "kwolokGroupDescriptor.xpOrbC",
    groupId: 937,
    uberId: 61783,
  },
  {
    id: "kwolokGroupDescriptor.healthHalfCell",
    groupId: 937,
    uberId: 61897,
  },
  {
    id: "kwolokGroupDescriptor.entranceStatueOpened",
    groupId: 937,
    uberId: 64003,
  },
  {
    id: "kwolokGroupDescriptor.spiritShardPickupPlaceholderB",
    groupId: 937,
    uberId: 64146,
  },
  {
    id: "kwolokGroupDescriptor.mediumExpA",
    groupId: 937,
    uberId: 65195,
  },
  {
    id: "kwolokGroupDescriptor.savePedestal",
    groupId: 937,
    uberId: 5281,
  },
  {
    id: "kwolokGroupDescriptor.savePedestal",
    groupId: 937,
    uberId: 26601,
  },
  {
    id: "kwolokGroupDescriptor.kwolokNpcState",
    groupId: 937,
    uberId: 10071,
  },
  {
    id: "kwolokGroupDescriptor.cleanseWellspringQuestUberState",
    groupId: 937,
    uberId: 34641,
  },
  {
    id: "kwolokGroupDescriptor.recedingWaterSetup",
    groupId: 937,
    uberId: 42245,
  },
  {
    id: "kwolokGroupDescriptor.shardTraderState",
    groupId: 937,
    uberId: 47836,
  },
  {
    id: "kwolokGroupDescriptor.hornBugBossState",
    groupId: 937,
    uberId: 48534,
  },
  {
    id: "kwolokGroupDescriptor.recedingWaterSetupJordi",
    groupId: 937,
    uberId: 52814,
  },
  {
    id: "kwolokGroupDescriptor.healthPlantTimer",
    groupId: 937,
    uberId: 14501,
  },
  {
    id: "kwolokGroupDescriptor.healthPlant",
    groupId: 937,
    uberId: 15130,
  },
  {
    id: "kwolokGroupDescriptor.eyesPlacedIntoStatue",
    groupId: 937,
    uberId: 1038,
  },
  {
    id: "kwolokGroupDescriptor.frogUpperMainRoomBottom",
    groupId: 937,
    uberId: 6040,
  },
  {
    id: "kwolokGroupDescriptor.frogTongueB",
    groupId: 937,
    uberId: 12557,
  },
  {
    id: "kwolokGroupDescriptor.retractTongue",
    groupId: 937,
    uberId: 13557,
  },
  {
    id: "kwolokGroupDescriptor.frogTongueE",
    groupId: 937,
    uberId: 14026,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernGPuzzleLeftUp",
    groupId: 937,
    uberId: 19495,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernBRight",
    groupId: 937,
    uberId: 24510,
  },
  {
    id: "kwolokGroupDescriptor.frogTop01",
    groupId: 937,
    uberId: 28504,
  },
  {
    id: "kwolokGroupDescriptor.attackableFrogByteUberState",
    groupId: 937,
    uberId: 30661,
  },
  {
    id: "kwolokGroupDescriptor.kwolokCavernsAttackableToad",
    groupId: 937,
    uberId: 32948,
  },
  {
    id: "kwolokGroupDescriptor.frogBottom03",
    groupId: 937,
    uberId: 37928,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernFBottom",
    groupId: 937,
    uberId: 38183,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernGPuzzleRight",
    groupId: 937,
    uberId: 40810,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernBLeft",
    groupId: 937,
    uberId: 41587,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernELeft",
    groupId: 937,
    uberId: 44452,
  },
  {
    id: "kwolokGroupDescriptor.frogUpperMainRoomTopC",
    groupId: 937,
    uberId: 45423,
  },
  {
    id: "kwolokGroupDescriptor.frogBottom02",
    groupId: 937,
    uberId: 49392,
  },
  {
    id: "kwolokGroupDescriptor.kwolokCavernsAttackableToadB",
    groupId: 937,
    uberId: 49874,
  },
  {
    id: "kwolokGroupDescriptor.frogUpperMainRoomTopA",
    groupId: 937,
    uberId: 50411,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernGPuzzleLeft",
    groupId: 937,
    uberId: 50803,
  },
  {
    id: "kwolokGroupDescriptor.frogTongueD",
    groupId: 937,
    uberId: 51234,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernERight",
    groupId: 937,
    uberId: 53749,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernGBottom",
    groupId: 937,
    uberId: 56395,
  },
  {
    id: "kwolokGroupDescriptor.frogTop02",
    groupId: 937,
    uberId: 57711,
  },
  {
    id: "kwolokGroupDescriptor.frogTop03",
    groupId: 937,
    uberId: 59288,
  },
  {
    id: "kwolokGroupDescriptor.frogBottom04",
    groupId: 937,
    uberId: 62300,
  },
  {
    id: "kwolokGroupDescriptor.frogUpperMainRoomTopB",
    groupId: 937,
    uberId: 63347,
  },
  {
    id: "kwolokGroupDescriptor.frogCavernBTopRight",
    groupId: 937,
    uberId: 63834,
  },
  {
    id: "kwolokGroupDescriptor.frogBottom01",
    groupId: 937,
    uberId: 64257,
  },
  {
    id: "lagoonStateGroup.secretWallA",
    groupId: 945,
    uberId: 3487,
  },
  {
    id: "lagoonStateGroup.canShowGlideHint",
    groupId: 945,
    uberId: 3659,
  },
  {
    id: "lagoonStateGroup.mediumExpA",
    groupId: 945,
    uberId: 7031,
  },
  {
    id: "lagoonStateGroup.breakableWallB",
    groupId: 945,
    uberId: 7465,
  },
  {
    id: "lagoonStateGroup.kwolokBossBridgeBreak",
    groupId: 945,
    uberId: 9034,
  },
  {
    id: "lagoonStateGroup.wispSequencePlayedOut",
    groupId: 945,
    uberId: 9367,
  },
  {
    id: "lagoonStateGroup.mediumExpB",
    groupId: 945,
    uberId: 10682,
  },
  {
    id: "lagoonStateGroup.largeExpC",
    groupId: 945,
    uberId: 10833,
  },
  {
    id: "lagoonStateGroup.tentacleKilled",
    groupId: 945,
    uberId: 12852,
  },
  {
    id: "lagoonStateGroup.mediumExpA",
    groupId: 945,
    uberId: 14530,
  },
  {
    id: "lagoonStateGroup.energyCellA",
    groupId: 945,
    uberId: 21334,
  },
  {
    id: "lagoonStateGroup.memoriesPlayed",
    groupId: 945,
    uberId: 25182,
  },
  {
    id: "lagoonStateGroup.energyContainerA",
    groupId: 945,
    uberId: 25520,
  },
  {
    id: "lagoonStateGroup.breakableWallA",
    groupId: 945,
    uberId: 28631,
  },
  {
    id: "lagoonStateGroup.mediumExpA",
    groupId: 945,
    uberId: 32890,
  },
  {
    id: "lagoonStateGroup.displayedGlideHint",
    groupId: 945,
    uberId: 33930,
  },
  {
    id: "lagoonStateGroup.lagoonMillTransitionHealthCell",
    groupId: 945,
    uberId: 37243,
  },
  {
    id: "lagoonStateGroup.mediumExpB",
    groupId: 945,
    uberId: 38319,
  },
  {
    id: "lagoonStateGroup.breakableWallB",
    groupId: 945,
    uberId: 39004,
  },
  {
    id: "lagoonStateGroup.secretWallB",
    groupId: 945,
    uberId: 43451,
  },
  {
    id: "lagoonStateGroup.bossReward",
    groupId: 945,
    uberId: 49747,
  },
  {
    id: "lagoonStateGroup.breakableWallA",
    groupId: 945,
    uberId: 55795,
  },
  {
    id: "lagoonStateGroup.medExpA",
    groupId: 945,
    uberId: 58723,
  },
  {
    id: "lagoonStateGroup.savePedestalUberState",
    groupId: 945,
    uberId: 1370,
  },
  {
    id: "lagoonStateGroup.savePedestalUberState",
    groupId: 945,
    uberId: 58183,
  },
  {
    id: "lagoonStateGroup.healthPlantA",
    groupId: 945,
    uberId: 23296,
  },
  {
    id: "lagoonStateGroup.kwolokBossState",
    groupId: 945,
    uberId: 58403,
  },
  {
    id: "playerUberStateGroupDescriptor.playerPurchasedWeaponMasterUpgrade",
    groupId: 3440,
    uberId: 20131,
  },
  {
    id: "playerUberStateGroupDescriptor.playerOnTandemUberState",
    groupId: 3440,
    uberId: 54402,
  },
  {
    id: "playerUberStateGroupDescriptor.playerWeaponDamageUpgradeLevel",
    groupId: 3440,
    uberId: 34448,
  },
  {
    id: "playerUberStateGroupDescriptor.hammerSpeedUpgradeLevel",
    groupId: 3440,
    uberId: 1157,
  },
  {
    id: "playerUberStateGroupDescriptor.chargeWeaponsUpgradeLevel",
    groupId: 3440,
    uberId: 2234,
  },
  {
    id: "playerUberStateGroupDescriptor.spikeExplosiveUpgradeLevel",
    groupId: 3440,
    uberId: 5687,
  },
  {
    id: "playerUberStateGroupDescriptor.spellMeditateUpgradeLevel",
    groupId: 3440,
    uberId: 9670,
  },
  {
    id: "playerUberStateGroupDescriptor.waterBreathUpgradeLevel",
    groupId: 3440,
    uberId: 10233,
  },
  {
    id: "playerUberStateGroupDescriptor.chakramSpinUpgradeLevel",
    groupId: 3440,
    uberId: 10776,
  },
  {
    id: "playerUberStateGroupDescriptor.bashSplitUpgradeLevel",
    groupId: 3440,
    uberId: 10928,
  },
  {
    id: "playerUberStateGroupDescriptor.grenadeDamageUpgradeLevel",
    groupId: 3440,
    uberId: 16155,
  },
  {
    id: "playerUberStateGroupDescriptor.spellChakramUpgradeLevel",
    groupId: 3440,
    uberId: 17265,
  },
  {
    id: "playerUberStateGroupDescriptor.missilesDamageUpgradeLevel",
    groupId: 3440,
    uberId: 18770,
  },
  {
    id: "playerUberStateGroupDescriptor.spellSpikeUpgradeLevel",
    groupId: 3440,
    uberId: 24142,
  },
  {
    id: "playerUberStateGroupDescriptor.missilesAmountUpgradeLevel",
    groupId: 3440,
    uberId: 26998,
  },
  {
    id: "playerUberStateGroupDescriptor.bowDamageUpgradeLevel",
    groupId: 3440,
    uberId: 29503,
  },
  {
    id: "playerUberStateGroupDescriptor.swordComboUpgradeLevel",
    groupId: 3440,
    uberId: 30415,
  },
  {
    id: "playerUberStateGroupDescriptor.healEfficiencyUpgradeLevel",
    groupId: 3440,
    uberId: 31259,
  },
  {
    id: "playerUberStateGroupDescriptor.spikeDamageUpgradeLevel",
    groupId: 3440,
    uberId: 33963,
  },
  {
    id: "playerUberStateGroupDescriptor.spellSentryUpgradeLevel",
    groupId: 3440,
    uberId: 38929,
  },
  {
    id: "playerUberStateGroupDescriptor.swordDamageUpgradeLevel",
    groupId: 3440,
    uberId: 39658,
  },
  {
    id: "playerUberStateGroupDescriptor.chakramMagnetUpgradeLevel",
    groupId: 3440,
    uberId: 40954,
  },
  {
    id: "playerUberStateGroupDescriptor.chakramDamageUpgradeLevel",
    groupId: 3440,
    uberId: 42913,
  },
  {
    id: "playerUberStateGroupDescriptor.invisibilityDurationUpgradeLevel",
    groupId: 3440,
    uberId: 45208,
  },
  {
    id: "playerUberStateGroupDescriptor.hammerStompUpgradeLevel",
    groupId: 3440,
    uberId: 46488,
  },
  {
    id: "playerUberStateGroupDescriptor.sentryAmountUpgradeLevel",
    groupId: 3440,
    uberId: 48877,
  },
  {
    id: "playerUberStateGroupDescriptor.hammerDamageUpgradeLevel",
    groupId: 3440,
    uberId: 53415,
  },
  {
    id: "playerUberStateGroupDescriptor.sentrySpeedUpgradeLevel",
    groupId: 3440,
    uberId: 57376,
  },
  {
    id: "playerUberStateGroupDescriptor.spellBlazeUpgradeLevel",
    groupId: 3440,
    uberId: 58703,
  },
  {
    id: "playerUberStateGroupDescriptor.blazeChargeUpgradeLevel",
    groupId: 3440,
    uberId: 61898,
  },
  {
    id: "playerUberStateGroupDescriptor.chakramAmountUpgradeLevel",
    groupId: 3440,
    uberId: 62563,
  },
  {
    id: "playerUberStateGroupDescriptor.spellHammerUpgradeLevel",
    groupId: 3440,
    uberId: 64152,
  },
  {
    id: "lumaPoolsStateGroup.largeExpOrbPlaceholderA",
    groupId: 5377,
    uberId: 628,
  },
  {
    id: "lumaPoolsStateGroup.energyCellFragmentA",
    groupId: 5377,
    uberId: 1600,
  },
  {
    id: "lumaPoolsStateGroup.waterRaised",
    groupId: 5377,
    uberId: 2286,
  },
  {
    id: "lumaPoolsStateGroup.pullWallLeft",
    groupId: 5377,
    uberId: 2518,
  },
  {
    id: "lumaPoolsStateGroup.breakableSecretWallA",
    groupId: 5377,
    uberId: 3831,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallB",
    groupId: 5377,
    uberId: 4463,
  },
  {
    id: "lumaPoolsStateGroup.leverAndDoor",
    groupId: 5377,
    uberId: 6398,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallA",
    groupId: 5377,
    uberId: 6857,
  },
  {
    id: "lumaPoolsStateGroup.mediumExpOrbPlaceholder",
    groupId: 5377,
    uberId: 7381,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 7540,
  },
  {
    id: "lumaPoolsStateGroup.breakRockDState",
    groupId: 5377,
    uberId: 8019,
  },
  {
    id: "lumaPoolsStateGroup.trunkState",
    groupId: 5377,
    uberId: 8294,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerBlocked",
    groupId: 5377,
    uberId: 8440,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallA",
    groupId: 5377,
    uberId: 8451,
  },
  {
    id: "lumaPoolsStateGroup.expOrb",
    groupId: 5377,
    uberId: 8939,
  },
  {
    id: "lumaPoolsStateGroup.expOrbB",
    groupId: 5377,
    uberId: 9812,
  },
  {
    id: "lumaPoolsStateGroup.creepD",
    groupId: 5377,
    uberId: 10291,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallB",
    groupId: 5377,
    uberId: 10782,
  },
  {
    id: "lumaPoolsStateGroup.bombableWallA",
    groupId: 5377,
    uberId: 11049,
  },
  {
    id: "lumaPoolsStateGroup.gorlekOreA",
    groupId: 5377,
    uberId: 12235,
  },
  {
    id: "lumaPoolsStateGroup.pressurePlateGate",
    groupId: 5377,
    uberId: 12826,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbD",
    groupId: 5377,
    uberId: 13832,
  },
  {
    id: "lumaPoolsStateGroup.leverAndDoor",
    groupId: 5377,
    uberId: 14488,
  },
  {
    id: "lumaPoolsStateGroup.spiritShard",
    groupId: 5377,
    uberId: 14664,
  },
  {
    id: "lumaPoolsStateGroup.drillableWall",
    groupId: 5377,
    uberId: 15383,
  },
  {
    id: "lumaPoolsStateGroup.dashDoor",
    groupId: 5377,
    uberId: 15402,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerUnblockedA",
    groupId: 5377,
    uberId: 15754,
  },
  {
    id: "lumaPoolsStateGroup.keystoneB",
    groupId: 5377,
    uberId: 16426,
  },
  {
    id: "lumaPoolsStateGroup.breakRockFState",
    groupId: 5377,
    uberId: 16607,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbC",
    groupId: 5377,
    uberId: 17396,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 18345,
  },
  {
    id: "lumaPoolsStateGroup.areaText",
    groupId: 5377,
    uberId: 19132,
  },
  {
    id: "lumaPoolsStateGroup.pickupA",
    groupId: 5377,
    uberId: 19694,
  },
  {
    id: "lumaPoolsStateGroup.talkedToKwolok",
    groupId: 5377,
    uberId: 21700,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 21860,
  },
  {
    id: "lumaPoolsStateGroup.breakRockEState",
    groupId: 5377,
    uberId: 22047,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallB",
    groupId: 5377,
    uberId: 22978,
  },
  {
    id: "lumaPoolsStateGroup.hintZones",
    groupId: 5377,
    uberId: 24015,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerUnblockedA",
    groupId: 5377,
    uberId: 24765,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 25391,
  },
  {
    id: "lumaPoolsStateGroup.bridgeState",
    groupId: 5377,
    uberId: 25612,
  },
  {
    id: "lumaPoolsStateGroup.mediumExpOrbPlaceholderB",
    groupId: 5377,
    uberId: 25633,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallA",
    groupId: 5377,
    uberId: 26170,
  },
  {
    id: "lumaPoolsStateGroup.lagoonDoor",
    groupId: 5377,
    uberId: 26987,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 27204,
  },
  {
    id: "lumaPoolsStateGroup.bombableWall",
    groupId: 5377,
    uberId: 27558,
  },
  {
    id: "lumaPoolsStateGroup.breakRockCState",
    groupId: 5377,
    uberId: 29662,
  },
  {
    id: "lumaPoolsStateGroup.loweringWaterState",
    groupId: 5377,
    uberId: 29911,
  },
  {
    id: "lumaPoolsStateGroup.mediumExpOrbPlaceholderB",
    groupId: 5377,
    uberId: 30860,
  },
  {
    id: "lumaPoolsStateGroup.treeFallen",
    groupId: 5377,
    uberId: 31093,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallA",
    groupId: 5377,
    uberId: 31145,
  },
  {
    id: "lumaPoolsStateGroup.gorlekOreA",
    groupId: 5377,
    uberId: 31434,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerBlocked",
    groupId: 5377,
    uberId: 32210,
  },
  {
    id: "lumaPoolsStateGroup.creepB",
    groupId: 5377,
    uberId: 32685,
  },
  {
    id: "lumaPoolsStateGroup.energyContainerA",
    groupId: 5377,
    uberId: 32750,
  },
  {
    id: "lumaPoolsStateGroup.mediumExpOrbPlaceholderC",
    groupId: 5377,
    uberId: 33110,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 33180,
  },
  {
    id: "lumaPoolsStateGroup.breakRockAState",
    groupId: 5377,
    uberId: 33730,
  },
  {
    id: "lumaPoolsStateGroup.orePickupA",
    groupId: 5377,
    uberId: 34852,
  },
  {
    id: "lumaPoolsStateGroup.playedMokiVignette",
    groupId: 5377,
    uberId: 35023,
  },
  {
    id: "lumaPoolsStateGroup.keystoneA",
    groupId: 5377,
    uberId: 35091,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbB",
    groupId: 5377,
    uberId: 35440,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerUnblockedB",
    groupId: 5377,
    uberId: 35751,
  },
  {
    id: "lumaPoolsStateGroup.expOrb",
    groupId: 5377,
    uberId: 35971,
  },
  {
    id: "lumaPoolsStateGroup.breakableFloorA",
    groupId: 5377,
    uberId: 36511,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 38515,
  },
  {
    id: "lumaPoolsStateGroup.spiritShard",
    groupId: 5377,
    uberId: 40328,
  },
  {
    id: "lumaPoolsStateGroup.keystoneD",
    groupId: 5377,
    uberId: 41881,
  },
  {
    id: "lumaPoolsStateGroup.mainPickup",
    groupId: 5377,
    uberId: 42145,
  },
  {
    id: "lumaPoolsStateGroup.mediumExpOrbPlaceholderA",
    groupId: 5377,
    uberId: 42553,
  },
  {
    id: "lumaPoolsStateGroup.creepA",
    groupId: 5377,
    uberId: 43134,
  },
  {
    id: "lumaPoolsStateGroup.optionalPickup",
    groupId: 5377,
    uberId: 43859,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbA",
    groupId: 5377,
    uberId: 44122,
  },
  {
    id: "lumaPoolsStateGroup.expOrbA",
    groupId: 5377,
    uberId: 44777,
  },
  {
    id: "lumaPoolsStateGroup.switchesActivated",
    groupId: 5377,
    uberId: 45765,
  },
  {
    id: "lumaPoolsStateGroup.healthContainerA",
    groupId: 5377,
    uberId: 45774,
  },
  {
    id: "lumaPoolsStateGroup.fallingRockState",
    groupId: 5377,
    uberId: 46040,
  },
  {
    id: "lumaPoolsStateGroup.keystoneC",
    groupId: 5377,
    uberId: 46926,
  },
  {
    id: "lumaPoolsStateGroup.keystoneGate",
    groupId: 5377,
    uberId: 47621,
  },
  {
    id: "lumaPoolsStateGroup.splitPlatformState",
    groupId: 5377,
    uberId: 49394,
  },
  {
    id: "lumaPoolsStateGroup.pullWallRight",
    groupId: 5377,
    uberId: 49826,
  },
  {
    id: "lumaPoolsStateGroup.doorState",
    groupId: 5377,
    uberId: 52062,
  },
  {
    id: "lumaPoolsStateGroup.breakableLogA",
    groupId: 5377,
    uberId: 52133,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbB",
    groupId: 5377,
    uberId: 52791,
  },
  {
    id: "lumaPoolsStateGroup.bombableWallB",
    groupId: 5377,
    uberId: 53532,
  },
  {
    id: "lumaPoolsStateGroup.spiritShard",
    groupId: 5377,
    uberId: 56199,
  },
  {
    id: "lumaPoolsStateGroup.secretWallA",
    groupId: 5377,
    uberId: 56302,
  },
  {
    id: "lumaPoolsStateGroup.creepE",
    groupId: 5377,
    uberId: 57334,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerUnblocked",
    groupId: 5377,
    uberId: 57453,
  },
  {
    id: "lumaPoolsStateGroup.kwolokChaseDoorState",
    groupId: 5377,
    uberId: 57929,
  },
  {
    id: "lumaPoolsStateGroup.bubbleMakerUnblockedB",
    groupId: 5377,
    uberId: 58278,
  },
  {
    id: "lumaPoolsStateGroup.doorState",
    groupId: 5377,
    uberId: 59514,
  },
  {
    id: "lumaPoolsStateGroup.pickupA",
    groupId: 5377,
    uberId: 61475,
  },
  {
    id: "lumaPoolsStateGroup.xpOrbB",
    groupId: 5377,
    uberId: 62180,
  },
  {
    id: "lumaPoolsStateGroup.waterLowered",
    groupId: 5377,
    uberId: 63173,
  },
  {
    id: "lumaPoolsStateGroup.healthContainerA",
    groupId: 5377,
    uberId: 63201,
  },
  {
    id: "lumaPoolsStateGroup.doorState",
    groupId: 5377,
    uberId: 63513,
  },
  {
    id: "lumaPoolsStateGroup.secretWallA",
    groupId: 5377,
    uberId: 63922,
  },
  {
    id: "lumaPoolsStateGroup.breakableWall",
    groupId: 5377,
    uberId: 64337,
  },
  {
    id: "lumaPoolsStateGroup.creepC",
    groupId: 5377,
    uberId: 64761,
  },
  {
    id: "lumaPoolsStateGroup.breakRockBState",
    groupId: 5377,
    uberId: 64827,
  },
  {
    id: "lumaPoolsStateGroup.gorlekOreA",
    groupId: 5377,
    uberId: 65019,
  },
  {
    id: "lumaPoolsStateGroup.breakableWallA",
    groupId: 5377,
    uberId: 65413,
  },
  {
    id: "lumaPoolsStateGroup.healthPlantA",
    groupId: 5377,
    uberId: 47557,
  },
  {
    id: "lumaPoolsStateGroup.healthPlantA",
    groupId: 5377,
    uberId: 63230,
  },
  {
    id: "lumaPoolsStateGroup.arenaByteStateSerialized",
    groupId: 5377,
    uberId: 1373,
  },
  {
    id: "lumaPoolsStateGroup.arenaBByteStateSerialized",
    groupId: 5377,
    uberId: 53480,
  },
  {
    id: "testUberStateGroup.firePedestalBooleanUberState",
    groupId: 6837,
    uberId: 5475,
  },
  {
    id: "testUberStateGroup.kwolokCavernDoor2",
    groupId: 6837,
    uberId: 7403,
  },
  {
    id: "testUberStateGroup.desertShortcutWall",
    groupId: 6837,
    uberId: 10235,
  },
  {
    id: "testUberStateGroup.testDoorTwoSlotsBooleanUberState",
    groupId: 6837,
    uberId: 19173,
  },
  {
    id: "testUberStateGroup.testShrineUberStateDescriptor",
    groupId: 6837,
    uberId: 19701,
  },
  {
    id: "testUberStateGroup.arenaCompletedState",
    groupId: 6837,
    uberId: 31278,
  },
  {
    id: "testUberStateGroup.lianaHealLantern",
    groupId: 6837,
    uberId: 31353,
  },
  {
    id: "testUberStateGroup.willowsEndShortcutWall",
    groupId: 6837,
    uberId: 38771,
  },
  {
    id: "testUberStateGroup.swampShortcutWall",
    groupId: 6837,
    uberId: 40492,
  },
  {
    id: "testUberStateGroup.winterForestEnemyDoor",
    groupId: 6837,
    uberId: 44762,
  },
  {
    id: "testUberStateGroup.lagoonContactSwitch",
    groupId: 6837,
    uberId: 47735,
  },
  {
    id: "testUberStateGroup.watermillShortcutWall",
    groupId: 6837,
    uberId: 51086,
  },
  {
    id: "testUberStateGroup.kwolokCavernDoor",
    groupId: 6837,
    uberId: 54316,
  },
  {
    id: "testUberStateGroup.testLeverDescriptorDesertC",
    groupId: 6837,
    uberId: 54999,
  },
  {
    id: "testUberStateGroup.oneSideBreakableWall",
    groupId: 6837,
    uberId: 55663,
  },
  {
    id: "testUberStateGroup.testSecret",
    groupId: 6837,
    uberId: 60688,
  },
  {
    id: "testUberStateGroup.testBooleanUberStateDescriptor",
    groupId: 6837,
    uberId: 60823,
  },
  {
    id: "testUberStateGroup.cordycepsShortcutWall",
    groupId: 6837,
    uberId: 61703,
  },
  {
    id: "testUberStateGroup.kwolokCavernsPressurePlate",
    groupId: 6837,
    uberId: 62194,
  },
  {
    id: "testUberStateGroup.kwolokCavernsAttackableSwitch",
    groupId: 6837,
    uberId: 62909,
  },
  {
    id: "testUberStateGroup.lagoonShortcutWall",
    groupId: 6837,
    uberId: 64646,
  },
  {
    id: "testUberStateGroup.testBreakableWallInt",
    groupId: 6837,
    uberId: 37967,
  },
  {
    id: "testUberStateGroup.testBreakableWallIntB",
    groupId: 6837,
    uberId: 61358,
  },
  {
    id: "testUberStateGroup.serializedInt",
    groupId: 6837,
    uberId: 63967,
  },
  {
    id: "testUberStateGroup.landOnAndSpawnOrbs",
    groupId: 6837,
    uberId: 39815,
  },
  {
    id: "testUberStateGroup.testSerializedFloatUberState",
    groupId: 6837,
    uberId: 61561,
  },
  {
    id: "desertAGroup.collectableHDesertA",
    groupId: 7228,
    uberId: 1781,
  },
  {
    id: "desertAGroup.collectableEDesertA",
    groupId: 7228,
    uberId: 2996,
  },
  {
    id: "desertAGroup.secretWall",
    groupId: 7228,
    uberId: 4034,
  },
  {
    id: "desertAGroup.gorlekOre",
    groupId: 7228,
    uberId: 8370,
  },
  {
    id: "desertAGroup.keystoneAUberState",
    groupId: 7228,
    uberId: 20282,
  },
  {
    id: "desertAGroup.collectableFDesertA",
    groupId: 7228,
    uberId: 32434,
  },
  {
    id: "desertAGroup.expOrb",
    groupId: 7228,
    uberId: 35329,
  },
  {
    id: "desertAGroup.collectableDesertA",
    groupId: 7228,
    uberId: 36579,
  },
  {
    id: "desertAGroup.lifeCellBooleanUberState",
    groupId: 7228,
    uberId: 37885,
  },
  {
    id: "desertAGroup.xpOrbUberState",
    groupId: 7228,
    uberId: 45954,
  },
  {
    id: "desertAGroup.xpOrbBUberState",
    groupId: 7228,
    uberId: 48993,
  },
  {
    id: "desertAGroup.collectableCDesertA",
    groupId: 7228,
    uberId: 52086,
  },
  {
    id: "desertAGroup.xpOrbB",
    groupId: 7228,
    uberId: 54275,
  },
  {
    id: "desertAGroup.gorlekOre",
    groupId: 7228,
    uberId: 54494,
  },
  {
    id: "desertAGroup.collectableADesertA",
    groupId: 7228,
    uberId: 56821,
  },
  {
    id: "desertAGroup.collectableGDesertA",
    groupId: 7228,
    uberId: 60605,
  },
  {
    id: "desertAGroup.xpOrbAUberState",
    groupId: 7228,
    uberId: 61548,
  },
  {
    id: "desertAGroup.keystoneBUberState",
    groupId: 7228,
    uberId: 62117,
  },
  {
    id: "statsUberStateGroup.totalSpiritLightCollectedSerializedIntUberState",
    groupId: 8246,
    uberId: 5144,
  },
  {
    id: "statsUberStateGroup.fastTravelCountIntUberState",
    groupId: 8246,
    uberId: 7909,
  },
  {
    id: "statsUberStateGroup.enemiesPiercedAtOnceStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 7927,
  },
  {
    id: "statsUberStateGroup.deathFromEnemiesStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 12323,
  },
  {
    id: "statsUberStateGroup.npcsInHubStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 15506,
  },
  {
    id: "statsUberStateGroup.bashesStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 17772,
  },
  {
    id: "statsUberStateGroup.shardSlotUpgradesCollectedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 18554,
  },
  {
    id: "statsUberStateGroup.mostDefeatedEnemyEnumStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 26498,
  },
  {
    id: "statsUberStateGroup.totalDamageTakenStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 28073,
  },
  {
    id: "statsUberStateGroup.wallJumpsStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 30164,
  },
  {
    id: "statsUberStateGroup.spiritLightCollectedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 30251,
  },
  {
    id: "statsUberStateGroup.sideQuestsCompletedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 31056,
  },
  {
    id: "statsUberStateGroup.enemyVsEnemyKillsStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 31216,
  },
  {
    id: "statsUberStateGroup.enemiesDefeatedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 32860,
  },
  {
    id: "statsUberStateGroup.deathsStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 36466,
  },
  {
    id: "statsUberStateGroup.totalSpiritLightSpentSerializedIntUberState",
    groupId: 8246,
    uberId: 37583,
  },
  {
    id: "statsUberStateGroup.highestAmountOfDamageSerializedIntUberState",
    groupId: 8246,
    uberId: 40254,
  },
  {
    id: "statsUberStateGroup.totalHealthRegeneratedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 42772,
  },
  {
    id: "statsUberStateGroup.gardenerSeedsCollectedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 44318,
  },
  {
    id: "statsUberStateGroup.racesCompletedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 49162,
  },
  {
    id: "statsUberStateGroup.favoriteSkillEnumStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 49721,
  },
  {
    id: "statsUberStateGroup.shrinesDiscoveredStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 50096,
  },
  {
    id: "statsUberStateGroup.spiritLightSpentStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 50669,
  },
  {
    id: "statsUberStateGroup.dashesStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 50952,
  },
  {
    id: "statsUberStateGroup.racePedestalsActivatedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 54110,
  },
  {
    id: "statsUberStateGroup.deathsEnvironmentalStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 57639,
  },
  {
    id: "statsUberStateGroup.drowningDeathsStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 58048,
  },
  {
    id: "statsUberStateGroup.jumpsStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 58908,
  },
  {
    id: "statsUberStateGroup.shardsCollectedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 59865,
  },
  {
    id: "statsUberStateGroup.spiritWellsDiscoveredStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 60852,
  },
  {
    id: "statsUberStateGroup.mostDefeatedByEnemyEnumStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 62287,
  },
  {
    id: "statsUberStateGroup.shrinesCompletedStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 63037,
  },
  {
    id: "statsUberStateGroup.leashesStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 64519,
  },
  {
    id: "statsUberStateGroup.teleportCountStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 64778,
  },
  {
    id: "statsUberStateGroup.timeAirborneStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 3307,
  },
  {
    id: "statsUberStateGroup.timeGlowingStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 7293,
  },
  {
    id: "statsUberStateGroup.distanceSwamStatSettingSerializedFloatUberState",
    groupId: 8246,
    uberId: 8682,
  },
  {
    id: "statsUberStateGroup.distanceGlidedStatSettingSerializedFloatUberState",
    groupId: 8246,
    uberId: 16123,
  },
  {
    id: "statsUberStateGroup.distanceBurrowedStatSettingSerializedFloatUberState",
    groupId: 8246,
    uberId: 40261,
  },
  {
    id: "statsUberStateGroup.timeTotalPlaytimeStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 43418,
  },
  {
    id: "statsUberStateGroup.distanceFallingStatSettingSerializedFloatUberState",
    groupId: 8246,
    uberId: 44439,
  },
  {
    id: "statsUberStateGroup.timeAliveUberState",
    groupId: 8246,
    uberId: 47477,
  },
  {
    id: "statsUberStateGroup.timeLongestSingleAirborneStatSettingSerializedUberState",
    groupId: 8246,
    uberId: 49364,
  },
  {
    id: "statsUberStateGroup.energySpentSerializedFloatUberState",
    groupId: 8246,
    uberId: 60940,
  },
  {
    id: "statsUberStateGroup.distanceTravelledStatSettingSerializedFloatUberState",
    groupId: 8246,
    uberId: 62310,
  },
  {
    id: "inkwaterMarshStateGroup.mokiTorchPlayed",
    groupId: 9593,
    uberId: 3621,
  },
  {
    id: "inkwaterMarshStateGroup.expOrbA",
    groupId: 9593,
    uberId: 5253,
  },
  {
    id: "inkwaterMarshStateGroup.xpOrbA",
    groupId: 9593,
    uberId: 5929,
  },
  {
    id: "inkwaterMarshStateGroup.expOrb",
    groupId: 9593,
    uberId: 7849,
  },
  {
    id: "inkwaterMarshStateGroup.lanternAndCreepA",
    groupId: 9593,
    uberId: 9229,
  },
  {
    id: "inkwaterMarshStateGroup.breakableLogB",
    groupId: 9593,
    uberId: 14616,
  },
  {
    id: "inkwaterMarshStateGroup.climbHintShown",
    groupId: 9593,
    uberId: 15672,
  },
  {
    id: "inkwaterMarshStateGroup.stompableFloor",
    groupId: 9593,
    uberId: 17659,
  },
  {
    id: "inkwaterMarshStateGroup.expOrb",
    groupId: 9593,
    uberId: 17818,
  },
  {
    id: "inkwaterMarshStateGroup.lasersDiscovered",
    groupId: 9593,
    uberId: 17991,
  },
  {
    id: "inkwaterMarshStateGroup.gorlekOreA",
    groupId: 9593,
    uberId: 20382,
  },
  {
    id: "inkwaterMarshStateGroup.energyVessel",
    groupId: 9593,
    uberId: 22802,
  },
  {
    id: "inkwaterMarshStateGroup.breakableWall",
    groupId: 9593,
    uberId: 23319,
  },
  {
    id: "inkwaterMarshStateGroup.gorlekOreA",
    groupId: 9593,
    uberId: 23858,
  },
  {
    id: "inkwaterMarshStateGroup.gorlekOreA",
    groupId: 9593,
    uberId: 25989,
  },
  {
    id: "inkwaterMarshStateGroup.lanternAndCreepB",
    groupId: 9593,
    uberId: 26238,
  },
  {
    id: "inkwaterMarshStateGroup.energyContainer",
    groupId: 9593,
    uberId: 26457,
  },
  {
    id: "inkwaterMarshStateGroup.halfEnergyCellA",
    groupId: 9593,
    uberId: 27562,
  },
  {
    id: "inkwaterMarshStateGroup.secretWallA",
    groupId: 9593,
    uberId: 34704,
  },
  {
    id: "inkwaterMarshStateGroup.xpOrb",
    groupId: 9593,
    uberId: 42047,
  },
  {
    id: "inkwaterMarshStateGroup.xpOrbB",
    groupId: 9593,
    uberId: 45321,
  },
  {
    id: "inkwaterMarshStateGroup.secretWallA",
    groupId: 9593,
    uberId: 47420,
  },
  {
    id: "inkwaterMarshStateGroup.expOrb",
    groupId: 9593,
    uberId: 53947,
  },
  {
    id: "inkwaterMarshStateGroup.expOrb",
    groupId: 9593,
    uberId: 59344,
  },
  {
    id: "inkwaterMarshStateGroup.enemyRoom",
    groupId: 9593,
    uberId: 59418,
  },
  {
    id: "inkwaterMarshStateGroup.healthContainer",
    groupId: 9593,
    uberId: 61304,
  },
  {
    id: "inkwaterMarshStateGroup.lizardMultiWaveArenaInt",
    groupId: 9593,
    uberId: 25130,
  },
  {
    id: "inkwaterMarshStateGroup.swampArenaAInt",
    groupId: 9593,
    uberId: 31687,
  },
  {
    id: "inkwaterMarshStateGroup.swampArenaA",
    groupId: 9593,
    uberId: 45142,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 94,
  },
  {
    id: "windtornRuinsGroup.goldenSeinBarrierD",
    groupId: 10289,
    uberId: 1620,
  },
  {
    id: "windtornRuinsGroup.ruinsVisited",
    groupId: 10289,
    uberId: 3621,
  },
  {
    id: "windtornRuinsGroup.openedDesertRuins",
    groupId: 10289,
    uberId: 3804,
  },
  {
    id: "windtornRuinsGroup.goldenSeinBarrierB",
    groupId: 10289,
    uberId: 4154,
  },
  {
    id: "windtornRuinsGroup.baseKillzoneState",
    groupId: 10289,
    uberId: 7638,
  },
  {
    id: "windtornRuinsGroup.bombableWallDesertC",
    groupId: 10289,
    uberId: 8436,
  },
  {
    id: "windtornRuinsGroup.drillZoneD",
    groupId: 10289,
    uberId: 8533,
  },
  {
    id: "windtornRuinsGroup.drillZoneF",
    groupId: 10289,
    uberId: 10093,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 12859,
  },
  {
    id: "windtornRuinsGroup.sandwormActiveA",
    groupId: 10289,
    uberId: 13021,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 15867,
  },
  {
    id: "windtornRuinsGroup.escapeBridgeB",
    groupId: 10289,
    uberId: 16802,
  },
  {
    id: "windtornRuinsGroup.wispRewardPickup",
    groupId: 10289,
    uberId: 22102,
  },
  {
    id: "windtornRuinsGroup.goldenSeinBarrierC",
    groupId: 10289,
    uberId: 23922,
  },
  {
    id: "windtornRuinsGroup.collapseSequenceB",
    groupId: 10289,
    uberId: 27089,
  },
  {
    id: "windtornRuinsGroup.escapeRockI",
    groupId: 10289,
    uberId: 27929,
  },
  {
    id: "windtornRuinsGroup.escapeRockC",
    groupId: 10289,
    uberId: 28779,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 29069,
  },
  {
    id: "windtornRuinsGroup.fallingPillars",
    groupId: 10289,
    uberId: 29425,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 30540,
  },
  {
    id: "windtornRuinsGroup.windsweptWastesRuinsDoorCannotOpen",
    groupId: 10289,
    uberId: 31524,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 31750,
  },
  {
    id: "windtornRuinsGroup.escapeRockG",
    groupId: 10289,
    uberId: 32483,
  },
  {
    id: "windtornRuinsGroup.escapeRockE",
    groupId: 10289,
    uberId: 32833,
  },
  {
    id: "windtornRuinsGroup.drillZoneB",
    groupId: 10289,
    uberId: 36274,
  },
  {
    id: "windtornRuinsGroup.windtornRuinsAKeystoneDoor",
    groupId: 10289,
    uberId: 37849,
  },
  {
    id: "windtornRuinsGroup.drillZoneC",
    groupId: 10289,
    uberId: 38171,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 38721,
  },
  {
    id: "windtornRuinsGroup.escapeRockF",
    groupId: 10289,
    uberId: 40310,
  },
  {
    id: "windtornRuinsGroup.goldenSeinBarrierA",
    groupId: 10289,
    uberId: 40790,
  },
  {
    id: "windtornRuinsGroup.lever",
    groupId: 10289,
    uberId: 41277,
  },
  {
    id: "windtornRuinsGroup.drillZoneB",
    groupId: 10289,
    uberId: 41902,
  },
  {
    id: "windtornRuinsGroup.rootBreakPillarFall",
    groupId: 10289,
    uberId: 43103,
  },
  {
    id: "windtornRuinsGroup.drillZoneB",
    groupId: 10289,
    uberId: 44426,
  },
  {
    id: "windtornRuinsGroup.energyHalfCell",
    groupId: 10289,
    uberId: 44555,
  },
  {
    id: "windtornRuinsGroup.escapeEndRocks",
    groupId: 10289,
    uberId: 45179,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 45766,
  },
  {
    id: "windtornRuinsGroup.drillZoneB",
    groupId: 10289,
    uberId: 46316,
  },
  {
    id: "windtornRuinsGroup.healthHalfCell",
    groupId: 10289,
    uberId: 48372,
  },
  {
    id: "windtornRuinsGroup.keystoneDoor",
    groupId: 10289,
    uberId: 48604,
  },
  {
    id: "windtornRuinsGroup.escapeRockJ",
    groupId: 10289,
    uberId: 50961,
  },
  {
    id: "windtornRuinsGroup.wormBreakFloor",
    groupId: 10289,
    uberId: 52478,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 55317,
  },
  {
    id: "windtornRuinsGroup.drillZoneE",
    groupId: 10289,
    uberId: 55672,
  },
  {
    id: "windtornRuinsGroup.escapeRockH",
    groupId: 10289,
    uberId: 55692,
  },
  {
    id: "windtornRuinsGroup.bombableWall",
    groupId: 10289,
    uberId: 55787,
  },
  {
    id: "windtornRuinsGroup.escapeRockA",
    groupId: 10289,
    uberId: 57325,
  },
  {
    id: "windtornRuinsGroup.areaText",
    groupId: 10289,
    uberId: 61217,
  },
  {
    id: "windtornRuinsGroup.xpOrbA",
    groupId: 10289,
    uberId: 61615,
  },
  {
    id: "windtornRuinsGroup.drillZoneC",
    groupId: 10289,
    uberId: 62291,
  },
  {
    id: "windtornRuinsGroup.collapseSequenceA",
    groupId: 10289,
    uberId: 62926,
  },
  {
    id: "windtornRuinsGroup.escapeRockD",
    groupId: 10289,
    uberId: 63154,
  },
  {
    id: "windtornRuinsGroup.desertSruinsChaseSandWall",
    groupId: 10289,
    uberId: 63700,
  },
  {
    id: "windtornRuinsGroup.drillZoneA",
    groupId: 10289,
    uberId: 64240,
  },
  {
    id: "windtornRuinsGroup.escapeRockB",
    groupId: 10289,
    uberId: 65145,
  },
  {
    id: "windtornRuinsGroup.savePedestalUberState",
    groupId: 10289,
    uberId: 4928,
  },
  {
    id: "windtornRuinsGroup.DesertSavePedestal",
    groupId: 10289,
    uberId: 13937,
  },
  {
    id: "windtornRuinsGroup.savePedestalUberState",
    groupId: 10289,
    uberId: 40484,
  },
  {
    id: "windtornRuinsGroup.rotatingBlockSetupRotation",
    groupId: 10289,
    uberId: 93,
  },
  {
    id: "windtornRuinsGroup.powerLineIntUberStateA",
    groupId: 10289,
    uberId: 312,
  },
  {
    id: "windtornRuinsGroup.powerLineIntUberState",
    groupId: 10289,
    uberId: 3217,
  },
  {
    id: "windtornRuinsGroup.powerLineIntUberStateC",
    groupId: 10289,
    uberId: 3682,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateB",
    groupId: 10289,
    uberId: 6414,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateC",
    groupId: 10289,
    uberId: 12614,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateG",
    groupId: 10289,
    uberId: 16886,
  },
  {
    id: "windtornRuinsGroup.desertRuinsEscape",
    groupId: 10289,
    uberId: 19890,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateF",
    groupId: 10289,
    uberId: 23855,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateA",
    groupId: 10289,
    uberId: 27997,
  },
  {
    id: "windtornRuinsGroup.powerLineIntUberState",
    groupId: 10289,
    uberId: 35130,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateE",
    groupId: 10289,
    uberId: 45821,
  },
  {
    id: "windtornRuinsGroup.wormNodeState",
    groupId: 10289,
    uberId: 47857,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateD",
    groupId: 10289,
    uberId: 50264,
  },
  {
    id: "windtornRuinsGroup.wormNodeStateH",
    groupId: 10289,
    uberId: 56515,
  },
  {
    id: "windtornRuinsGroup.powerLineIntUberStateB",
    groupId: 10289,
    uberId: 58350,
  },
  {
    id: "windtornRuinsGroup.desertRuinsWispSequencePlayed",
    groupId: 10289,
    uberId: 60565,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateA",
    groupId: 10289,
    uberId: 5546,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateD",
    groupId: 10289,
    uberId: 5814,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateC",
    groupId: 10289,
    uberId: 10828,
  },
  {
    id: "windtornRuinsGroup.wormDistanceToNextNodeState",
    groupId: 10289,
    uberId: 35190,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateH",
    groupId: 10289,
    uberId: 36008,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateB",
    groupId: 10289,
    uberId: 51149,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateE",
    groupId: 10289,
    uberId: 52211,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateF",
    groupId: 10289,
    uberId: 58175,
  },
  {
    id: "windtornRuinsGroup.wormDistanceStateG",
    groupId: 10289,
    uberId: 63894,
  },
  {
    id: "howlsDenGRoup.hasOriUsedSavePedestal",
    groupId: 11666,
    uberId: 4220,
  },
  {
    id: "howlsDenGRoup.saveRoomDoor",
    groupId: 11666,
    uberId: 4932,
  },
  {
    id: "howlsDenGRoup.howlsDenLargeXPOrbA",
    groupId: 11666,
    uberId: 24943,
  },
  {
    id: "howlsDenGRoup.areaText",
    groupId: 11666,
    uberId: 42038,
  },
  {
    id: "howlsDenGRoup.savePedestalUberState",
    groupId: 11666,
    uberId: 16542,
  },
  {
    id: "howlsDenGRoup.savePedestalUberState",
    groupId: 11666,
    uberId: 20829,
  },
  {
    id: "howlsDenGRoup.savePedestal",
    groupId: 11666,
    uberId: 61594,
  },
  {
    id: "leaderboardsUberStateGroup.baursReachLeaderboardNotificationState",
    groupId: 13298,
    uberId: 54921,
  },
  {
    id: "leaderboardsUberStateGroup.baursReachLeaderboardPlaceState",
    groupId: 13298,
    uberId: 3608,
  },
  {
    id: "leaderboardsUberStateGroup.desertLeaderboardPlaceState",
    groupId: 13298,
    uberId: 4929,
  },
  {
    id: "leaderboardsUberStateGroup.hornbugBossLeaderboardPlaceState",
    groupId: 13298,
    uberId: 6736,
  },
  {
    id: "leaderboardsUberStateGroup.watermillEscapeLeaderboardPlaceState",
    groupId: 13298,
    uberId: 14784,
  },
  {
    id: "leaderboardsUberStateGroup.laserShooterMiniBossLeaderboardPlaceState",
    groupId: 13298,
    uberId: 20341,
  },
  {
    id: "leaderboardsUberStateGroup.kwolokBossLeaderboardPlaceState",
    groupId: 13298,
    uberId: 37881,
  },
  {
    id: "leaderboardsUberStateGroup.inkwaterLeaderboardPlaceState",
    groupId: 13298,
    uberId: 40104,
  },
  {
    id: "leaderboardsUberStateGroup.spiderBossLeaderboardPlaceState",
    groupId: 13298,
    uberId: 41733,
  },
  {
    id: "leaderboardsUberStateGroup.desertEscapeLeaderboardPlaceState",
    groupId: 13298,
    uberId: 44392,
  },
  {
    id: "leaderboardsUberStateGroup.kwoloksLeaderboardPlaceState",
    groupId: 13298,
    uberId: 53149,
  },
  {
    id: "leaderboardsUberStateGroup.avalancheEscapeLeaderboardPlaceState",
    groupId: 13298,
    uberId: 53528,
  },
  {
    id: "leaderboardsUberStateGroup.wellspringLeaderboardPlaceState",
    groupId: 13298,
    uberId: 53967,
  },
  {
    id: "leaderboardsUberStateGroup.silentWoodlandLeaderboardPlaceState",
    groupId: 13298,
    uberId: 55577,
  },
  {
    id: "leaderboardsUberStateGroup.lumaPoolsLeaderboardPlaceState",
    groupId: 13298,
    uberId: 58679,
  },
  {
    id: "leaderboardsUberStateGroup.mouldwoodLeaderboardPlaceState",
    groupId: 13298,
    uberId: 59179,
  },
  {
    id: "leaderboardsUberStateGroup.owlBossLeaderboardPlaceState",
    groupId: 13298,
    uberId: 64962,
  },
  {
    id: "bashIntroductionA__clone1Group.healthContainerA",
    groupId: 13428,
    uberId: 59730,
  },
  {
    id: "questUberStateGroup.gardenerHutDiscovered",
    groupId: 14019,
    uberId: 353,
  },
  {
    id: "questUberStateGroup.darkCaveQuestItemCollected",
    groupId: 14019,
    uberId: 2782,
  },
  {
    id: "questUberStateGroup.firstRaceDiscovered",
    groupId: 14019,
    uberId: 5662,
  },
  {
    id: "questUberStateGroup.gardenerSeedTreeCollected",
    groupId: 14019,
    uberId: 7470,
  },
  {
    id: "questUberStateGroup.gardenerSeedBashCollected",
    groupId: 14019,
    uberId: 8192,
  },
  {
    id: "questUberStateGroup.mapstoneDiscovered",
    groupId: 14019,
    uberId: 9874,
  },
  {
    id: "questUberStateGroup.mouldwoodDiscovered",
    groupId: 14019,
    uberId: 12642,
  },
  {
    id: "questUberStateGroup.lanternItemCollected",
    groupId: 14019,
    uberId: 14931,
  },
  {
    id: "questUberStateGroup.howlsOriginWellOpened",
    groupId: 14019,
    uberId: 20290,
  },
  {
    id: "questUberStateGroup.gardenerSeedFlowersCollected",
    groupId: 14019,
    uberId: 20601,
  },
  {
    id: "questUberStateGroup.gardenerSeedGrappleCollected",
    groupId: 14019,
    uberId: 24142,
  },
  {
    id: "questUberStateGroup.wellspringShrineDiscovered",
    groupId: 14019,
    uberId: 27270,
  },
  {
    id: "questUberStateGroup.braveMokiItemCollected",
    groupId: 14019,
    uberId: 27539,
  },
  {
    id: "questUberStateGroup.gardenerSeedGrassCollected",
    groupId: 14019,
    uberId: 28662,
  },
  {
    id: "questUberStateGroup.desertDiscovered",
    groupId: 14019,
    uberId: 29163,
  },
  {
    id: "questUberStateGroup.lagoonDiscovered",
    groupId: 14019,
    uberId: 29202,
  },
  {
    id: "questUberStateGroup.howlsOriginDiscovered",
    groupId: 14019,
    uberId: 30671,
  },
  {
    id: "questUberStateGroup.desertRuinsDiscovered",
    groupId: 14019,
    uberId: 31413,
  },
  {
    id: "questUberStateGroup.gardenerSeedSpringCollected",
    groupId: 14019,
    uberId: 32376,
  },
  {
    id: "questUberStateGroup.mapSecretsRevealed",
    groupId: 14019,
    uberId: 35534,
  },
  {
    id: "questUberStateGroup.howlsDenShrineDiscovered",
    groupId: 14019,
    uberId: 36248,
  },
  {
    id: "questUberStateGroup.inkwaterShrineDiscovered",
    groupId: 14019,
    uberId: 40630,
  },
  {
    id: "questUberStateGroup.baurDiscovered",
    groupId: 14019,
    uberId: 46529,
  },
  {
    id: "questUberStateGroup.discoveredWillowsEnd",
    groupId: 14019,
    uberId: 50847,
  },
  {
    id: "questUberStateGroup.silentWoodsShrineDiscovered",
    groupId: 14019,
    uberId: 52274,
  },
  {
    id: "questUberStateGroup.howlsOriginTreasureCollected",
    groupId: 14019,
    uberId: 52747,
  },
  {
    id: "questUberStateGroup.kwoloksWisdomItemCollected",
    groupId: 14019,
    uberId: 53103,
  },
  {
    id: "questUberStateGroup.mouldwoodShrineDiscovered",
    groupId: 14019,
    uberId: 54970,
  },
  {
    id: "questUberStateGroup.familyReunionItemCollected",
    groupId: 14019,
    uberId: 57399,
  },
  {
    id: "questUberStateGroup.mineGemItemCollected",
    groupId: 14019,
    uberId: 58342,
  },
  {
    id: "questUberStateGroup.inDangerBool",
    groupId: 14019,
    uberId: 60646,
  },
  {
    id: "questUberStateGroup.desertCogItemCollected",
    groupId: 14019,
    uberId: 63396,
  },
  {
    id: "questUberStateGroup.discoveredWeepingRidge",
    groupId: 14019,
    uberId: 63965,
  },
  {
    id: "questUberStateGroup.helpingHandQuestUberState",
    groupId: 14019,
    uberId: 1341,
  },
  {
    id: "questUberStateGroup.reachWaterMillQuestUberState",
    groupId: 14019,
    uberId: 5737,
  },
  {
    id: "questUberStateGroup.dialogQuest",
    groupId: 14019,
    uberId: 6284,
  },
  {
    id: "questUberStateGroup.winterForestWispQuestUberState",
    groupId: 14019,
    uberId: 8973,
  },
  {
    id: "questUberStateGroup.baursReachJTokkInteractionQuest",
    groupId: 14019,
    uberId: 11308,
  },
  {
    id: "questUberStateGroup.howlsDenShrineRumorMokiState",
    groupId: 14019,
    uberId: 12437,
  },
  {
    id: "questUberStateGroup.mouldwoodRumorMokiState",
    groupId: 14019,
    uberId: 13512,
  },
  {
    id: "questUberStateGroup.braveMokiQuest",
    groupId: 14019,
    uberId: 15983,
  },
  {
    id: "questUberStateGroup.wellspringShrineRumorMokiState",
    groupId: 14019,
    uberId: 15995,
  },
  {
    id: "questUberStateGroup.wellspringShrineRumorState",
    groupId: 14019,
    uberId: 16509,
  },
  {
    id: "questUberStateGroup.mouldwoodShrineRumorState",
    groupId: 14019,
    uberId: 18061,
  },
  {
    id: "questUberStateGroup.lagoonRumorState",
    groupId: 14019,
    uberId: 19024,
  },
  {
    id: "questUberStateGroup.desertRuinsRumorState",
    groupId: 14019,
    uberId: 19060,
  },
  {
    id: "questUberStateGroup.brothersQuest",
    groupId: 14019,
    uberId: 19157,
  },
  {
    id: "questUberStateGroup.lostCompassQuest",
    groupId: 14019,
    uberId: 20667,
  },
  {
    id: "questUberStateGroup.gardenerIntroQuest",
    groupId: 14019,
    uberId: 23459,
  },
  {
    id: "questUberStateGroup.lastTreeQuest",
    groupId: 14019,
    uberId: 23787,
  },
  {
    id: "questUberStateGroup.inkwaterShrineRumorState",
    groupId: 14019,
    uberId: 23863,
  },
  {
    id: "questUberStateGroup.optionalVSQuestAUberState",
    groupId: 14019,
    uberId: 24152,
  },
  {
    id: "questUberStateGroup.luposMapQuest",
    groupId: 14019,
    uberId: 24683,
  },
  {
    id: "questUberStateGroup.tradeSequenceQuest",
    groupId: 14019,
    uberId: 26318,
  },
  {
    id: "questUberStateGroup.regrowGladesQuest",
    groupId: 14019,
    uberId: 26394,
  },
  {
    id: "questUberStateGroup.silentWoodsShrineRumorState",
    groupId: 14019,
    uberId: 27011,
  },
  {
    id: "questUberStateGroup.familyReunionQuest",
    groupId: 14019,
    uberId: 27804,
  },
  {
    id: "questUberStateGroup.howlsDenShrineRumorState",
    groupId: 14019,
    uberId: 27822,
  },
  {
    id: "questUberStateGroup.gardenerHutRumorState",
    groupId: 14019,
    uberId: 30596,
  },
  {
    id: "questUberStateGroup.freeGromQuestUberState",
    groupId: 14019,
    uberId: 33762,
  },
  {
    id: "questUberStateGroup.darkCaveQuest",
    groupId: 14019,
    uberId: 33776,
  },
  {
    id: "questUberStateGroup.findKuQuest",
    groupId: 14019,
    uberId: 34504,
  },
  {
    id: "questUberStateGroup.lagoonWispQuestUberState",
    groupId: 14019,
    uberId: 35087,
  },
  {
    id: "questUberStateGroup.desertWispQuestUberState",
    groupId: 14019,
    uberId: 35399,
  },
  {
    id: "questUberStateGroup.mapstoneRumorState",
    groupId: 14019,
    uberId: 39957,
  },
  {
    id: "questUberStateGroup.howlsOriginRumorState",
    groupId: 14019,
    uberId: 40952,
  },
  {
    id: "questUberStateGroup.firstRaceRumorState",
    groupId: 14019,
    uberId: 42501,
  },
  {
    id: "questUberStateGroup.findHelpQuestUberState",
    groupId: 14019,
    uberId: 44059,
  },
  {
    id: "questUberStateGroup.baurRumorState",
    groupId: 14019,
    uberId: 44184,
  },
  {
    id: "questUberStateGroup.lookForKuQuestUberState",
    groupId: 14019,
    uberId: 44500,
  },
  {
    id: "questUberStateGroup.rebuildGladesQuest",
    groupId: 14019,
    uberId: 44578,
  },
  {
    id: "questUberStateGroup.mouldwoodDepthsWispQuestUberState",
    groupId: 14019,
    uberId: 45931,
  },
  {
    id: "questUberStateGroup.lagoonRumorMokiState",
    groupId: 14019,
    uberId: 47774,
  },
  {
    id: "questUberStateGroup.findToadQuestUberState",
    groupId: 14019,
    uberId: 48794,
  },
  {
    id: "questUberStateGroup.baurRumorMokiState",
    groupId: 14019,
    uberId: 50230,
  },
  {
    id: "questUberStateGroup.swampSpringIntroductionBOpherInteractionQuest",
    groupId: 14019,
    uberId: 50571,
  },
  {
    id: "questUberStateGroup.kwoloksWisdomQuest",
    groupId: 14019,
    uberId: 50597,
  },
  {
    id: "questUberStateGroup.mouldwoodRumorState",
    groupId: 14019,
    uberId: 53066,
  },
  {
    id: "questUberStateGroup.lastGlobalEvent",
    groupId: 14019,
    uberId: 54675,
  },
  {
    id: "questUberStateGroup.killTentacleQuestUberState",
    groupId: 14019,
    uberId: 57066,
  },
  {
    id: "questUberStateGroup.desertRumorState",
    groupId: 14019,
    uberId: 57552,
  },
  {
    id: "questUberStateGroup.searchForGrolQuest",
    groupId: 14019,
    uberId: 59705,
  },
  {
    id: "questUberStateGroup.treeKeeperQuest",
    groupId: 14019,
    uberId: 59708,
  },
  {
    id: "questUberStateGroup.desertCogQuest",
    groupId: 14019,
    uberId: 61011,
  },
  {
    id: "questUberStateGroup.getInitialWeaponQuestUberState",
    groupId: 14019,
    uberId: 62230,
  },
  {
    id: "questUberStateGroup.firstRaceRumorMokiState",
    groupId: 14019,
    uberId: 62288,
  },
  {
    id: "willowsEndGroup.expOrb",
    groupId: 16155,
    uberId: 2065,
  },
  {
    id: "willowsEndGroup.fallingPortalB",
    groupId: 16155,
    uberId: 2235,
  },
  {
    id: "willowsEndGroup.breakableWallA",
    groupId: 16155,
    uberId: 3096,
  },
  {
    id: "willowsEndGroup.vineEClear",
    groupId: 16155,
    uberId: 3588,
  },
  {
    id: "willowsEndGroup.arenaPlatform3Destroyed",
    groupId: 16155,
    uberId: 3670,
  },
  {
    id: "willowsEndGroup.arenaPlatform2Destroyed",
    groupId: 16155,
    uberId: 5826,
  },
  {
    id: "willowsEndGroup.gorlekOreA",
    groupId: 16155,
    uberId: 9230,
  },
  {
    id: "willowsEndGroup.fallingPortal",
    groupId: 16155,
    uberId: 18906,
  },
  {
    id: "willowsEndGroup.creepA",
    groupId: 16155,
    uberId: 20672,
  },
  {
    id: "willowsEndGroup.chaseSequenceG",
    groupId: 16155,
    uberId: 21083,
  },
  {
    id: "willowsEndGroup.breakableWallC",
    groupId: 16155,
    uberId: 21899,
  },
  {
    id: "willowsEndGroup.vineCClear",
    groupId: 16155,
    uberId: 24290,
  },
  {
    id: "willowsEndGroup.xpOrbA",
    groupId: 16155,
    uberId: 25259,
  },
  {
    id: "willowsEndGroup.chaseSequenceA",
    groupId: 16155,
    uberId: 27024,
  },
  {
    id: "willowsEndGroup.vineDClear",
    groupId: 16155,
    uberId: 28478,
  },
  {
    id: "willowsEndGroup.introPlayed",
    groupId: 16155,
    uberId: 32922,
  },
  {
    id: "willowsEndGroup.breakableWallC",
    groupId: 16155,
    uberId: 33738,
  },
  {
    id: "willowsEndGroup.secretWall",
    groupId: 16155,
    uberId: 36353,
  },
  {
    id: "willowsEndGroup.breakableWallA",
    groupId: 16155,
    uberId: 36873,
  },
  {
    id: "willowsEndGroup.breakableWallB",
    groupId: 16155,
    uberId: 37558,
  },
  {
    id: "willowsEndGroup.chaseSequenceC",
    groupId: 16155,
    uberId: 37648,
  },
  {
    id: "willowsEndGroup.chaseSequenceD",
    groupId: 16155,
    uberId: 38867,
  },
  {
    id: "willowsEndGroup.gorlekOreA",
    groupId: 16155,
    uberId: 38979,
  },
  {
    id: "willowsEndGroup.vineGClear",
    groupId: 16155,
    uberId: 41488,
  },
  {
    id: "willowsEndGroup.secretWallA",
    groupId: 16155,
    uberId: 42106,
  },
  {
    id: "willowsEndGroup.vineAClear",
    groupId: 16155,
    uberId: 42976,
  },
  {
    id: "willowsEndGroup.chaseSequenceB",
    groupId: 16155,
    uberId: 44311,
  },
  {
    id: "willowsEndGroup.arenaPlatform1Destroyed",
    groupId: 16155,
    uberId: 45630,
  },
  {
    id: "willowsEndGroup.healthCellA",
    groupId: 16155,
    uberId: 46270,
  },
  {
    id: "willowsEndGroup.expOrbB",
    groupId: 16155,
    uberId: 47690,
  },
  {
    id: "willowsEndGroup.expOrbA",
    groupId: 16155,
    uberId: 49381,
  },
  {
    id: "willowsEndGroup.chaseSequenceE",
    groupId: 16155,
    uberId: 49408,
  },
  {
    id: "willowsEndGroup.expOrb",
    groupId: 16155,
    uberId: 49457,
  },
  {
    id: "willowsEndGroup.chaseSequenceF",
    groupId: 16155,
    uberId: 49744,
  },
  {
    id: "willowsEndGroup.breakableWallB",
    groupId: 16155,
    uberId: 52848,
  },
  {
    id: "willowsEndGroup.groundDestroyed",
    groupId: 16155,
    uberId: 54148,
  },
  {
    id: "willowsEndGroup.vineBClear",
    groupId: 16155,
    uberId: 54940,
  },
  {
    id: "willowsEndGroup.xpOrbA",
    groupId: 16155,
    uberId: 55446,
  },
  {
    id: "willowsEndGroup.fallingPortalA",
    groupId: 16155,
    uberId: 55721,
  },
  {
    id: "willowsEndGroup.vineHClear",
    groupId: 16155,
    uberId: 60752,
  },
  {
    id: "willowsEndGroup.arenaPlatform4Destroyed",
    groupId: 16155,
    uberId: 63705,
  },
  {
    id: "willowsEndGroup.vineFClear",
    groupId: 16155,
    uberId: 65277,
  },
  {
    id: "willowsEndGroup.savePedestalUberState",
    groupId: 16155,
    uberId: 41465,
  },
  {
    id: "willowsEndGroup.savePedestalUberState",
    groupId: 16155,
    uberId: 50867,
  },
  {
    id: "willowsEndGroup.laserShooterBossState",
    groupId: 16155,
    uberId: 12971,
  },
  {
    id: "willowsEndGroup.petrifiedOwlBossState",
    groupId: 16155,
    uberId: 47278,
  },
  {
    id: "mouldwoodDepthsGroup.orePickupA",
    groupId: 18793,
    uberId: 836,
  },
  {
    id: "mouldwoodDepthsGroup.keystone",
    groupId: 18793,
    uberId: 1914,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbB",
    groupId: 18793,
    uberId: 2881,
  },
  {
    id: "mouldwoodDepthsGroup.doorWithFourSlots",
    groupId: 18793,
    uberId: 3171,
  },
  {
    id: "mouldwoodDepthsGroup.blockerWallBroken",
    groupId: 18793,
    uberId: 4645,
  },
  {
    id: "mouldwoodDepthsGroup.creepDestroyedA",
    groupId: 18793,
    uberId: 4664,
  },
  {
    id: "mouldwoodDepthsGroup.secretWall",
    groupId: 18793,
    uberId: 5315,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbB",
    groupId: 18793,
    uberId: 5797,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbB",
    groupId: 18793,
    uberId: 6573,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbA",
    groupId: 18793,
    uberId: 9251,
  },
  {
    id: "mouldwoodDepthsGroup.doorWithFourSlots",
    groupId: 18793,
    uberId: 10372,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsGDoorWithTwoSlotsOpened",
    groupId: 18793,
    uberId: 10758,
  },
  {
    id: "mouldwoodDepthsGroup.creepB",
    groupId: 18793,
    uberId: 11676,
  },
  {
    id: "mouldwoodDepthsGroup.shrineEnemies",
    groupId: 18793,
    uberId: 12512,
  },
  {
    id: "mouldwoodDepthsGroup.kwolokCavernsBreakableFloor",
    groupId: 18793,
    uberId: 13281,
  },
  {
    id: "mouldwoodDepthsGroup.shortcutWall",
    groupId: 18793,
    uberId: 13349,
  },
  {
    id: "mouldwoodDepthsGroup.darknessLiftedUberState",
    groupId: 18793,
    uberId: 13352,
  },
  {
    id: "mouldwoodDepthsGroup.lanternAndCreepB",
    groupId: 18793,
    uberId: 13367,
  },
  {
    id: "mouldwoodDepthsGroup.leverAndDoorA",
    groupId: 18793,
    uberId: 14503,
  },
  {
    id: "mouldwoodDepthsGroup.xpOrbC",
    groupId: 18793,
    uberId: 15396,
  },
  {
    id: "mouldwoodDepthsGroup.arenaBottomBrokenFloor",
    groupId: 18793,
    uberId: 15422,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHBreakableWallB",
    groupId: 18793,
    uberId: 15855,
  },
  {
    id: "mouldwoodDepthsGroup.chamberWebFBroken",
    groupId: 18793,
    uberId: 18064,
  },
  {
    id: "mouldwoodDepthsGroup.XPOrbA",
    groupId: 18793,
    uberId: 18395,
  },
  {
    id: "mouldwoodDepthsGroup.chamberWebEBroken",
    groupId: 18793,
    uberId: 18563,
  },
  {
    id: "mouldwoodDepthsGroup.mediumExpA",
    groupId: 18793,
    uberId: 19004,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsJKeystoneBCollected",
    groupId: 18793,
    uberId: 20493,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsJKeystoneCCollected",
    groupId: 18793,
    uberId: 20959,
  },
  {
    id: "mouldwoodDepthsGroup.breakableWallA",
    groupId: 18793,
    uberId: 21022,
  },
  {
    id: "mouldwoodDepthsGroup.puzzleSolvedSequenceCompleted",
    groupId: 18793,
    uberId: 21994,
  },
  {
    id: "mouldwoodDepthsGroup.lanternAndCreepA",
    groupId: 18793,
    uberId: 22368,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbC",
    groupId: 18793,
    uberId: 23799,
  },
  {
    id: "mouldwoodDepthsGroup.areaText",
    groupId: 18793,
    uberId: 23953,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHKeystoneBCollected",
    groupId: 18793,
    uberId: 23986,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodGateOpen",
    groupId: 18793,
    uberId: 25789,
  },
  {
    id: "mouldwoodDepthsGroup.energyContainerA",
    groupId: 18793,
    uberId: 26618,
  },
  {
    id: "mouldwoodDepthsGroup.stompableFloor",
    groupId: 18793,
    uberId: 27207,
  },
  {
    id: "mouldwoodDepthsGroup.energyContainerA",
    groupId: 18793,
    uberId: 28175,
  },
  {
    id: "mouldwoodDepthsGroup.spiderIntereactedAfterFight",
    groupId: 18793,
    uberId: 28205,
  },
  {
    id: "mouldwoodDepthsGroup.breakableWebB",
    groupId: 18793,
    uberId: 28677,
  },
  {
    id: "mouldwoodDepthsGroup.brokenTrunkTop",
    groupId: 18793,
    uberId: 28692,
  },
  {
    id: "mouldwoodDepthsGroup.creepA",
    groupId: 18793,
    uberId: 29066,
  },
  {
    id: "mouldwoodDepthsGroup.mediumExpA",
    groupId: 18793,
    uberId: 29533,
  },
  {
    id: "mouldwoodDepthsGroup.expOrbA",
    groupId: 18793,
    uberId: 29979,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHPushBlockPushed",
    groupId: 18793,
    uberId: 30627,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsJKeystoneDCollected",
    groupId: 18793,
    uberId: 30708,
  },
  {
    id: "mouldwoodDepthsGroup.shardSlotUpgradePlaceholder",
    groupId: 18793,
    uberId: 31937,
  },
  {
    id: "mouldwoodDepthsGroup.chamberWebBBroken",
    groupId: 18793,
    uberId: 32305,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsJKeystoneACollected",
    groupId: 18793,
    uberId: 32441,
  },
  {
    id: "mouldwoodDepthsGroup.doorWithFourSlots",
    groupId: 18793,
    uberId: 33471,
  },
  {
    id: "mouldwoodDepthsGroup.orePickupA",
    groupId: 18793,
    uberId: 35351,
  },
  {
    id: "mouldwoodDepthsGroup.expOrb",
    groupId: 18793,
    uberId: 38941,
  },
  {
    id: "mouldwoodDepthsGroup.creepA",
    groupId: 18793,
    uberId: 39232,
  },
  {
    id: "mouldwoodDepthsGroup.lanternAndCreepCTest",
    groupId: 18793,
    uberId: 40612,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHDoorWithFourSlotsOpened",
    groupId: 18793,
    uberId: 41544,
  },
  {
    id: "mouldwoodDepthsGroup.healthCellB",
    groupId: 18793,
    uberId: 42235,
  },
  {
    id: "mouldwoodDepthsGroup.mediumExpB",
    groupId: 18793,
    uberId: 42980,
  },
  {
    id: "mouldwoodDepthsGroup.webFallState",
    groupId: 18793,
    uberId: 44522,
  },
  {
    id: "mouldwoodDepthsGroup.leafPileA",
    groupId: 18793,
    uberId: 44773,
  },
  {
    id: "mouldwoodDepthsGroup.hintZoneFlash",
    groupId: 18793,
    uberId: 45899,
  },
  {
    id: "mouldwoodDepthsGroup.bottomRightSmallWall",
    groupId: 18793,
    uberId: 45963,
  },
  {
    id: "mouldwoodDepthsGroup.verticalFallingTrunk",
    groupId: 18793,
    uberId: 49362,
  },
  {
    id: "mouldwoodDepthsGroup.XPOrbB",
    groupId: 18793,
    uberId: 49526,
  },
  {
    id: "mouldwoodDepthsGroup.XPOrbA",
    groupId: 18793,
    uberId: 49759,
  },
  {
    id: "mouldwoodDepthsGroup.hintZoneFlashCharge",
    groupId: 18793,
    uberId: 50745,
  },
  {
    id: "mouldwoodDepthsGroup.arenaTrunkBroken",
    groupId: 18793,
    uberId: 53347,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHKeystoneACollected",
    groupId: 18793,
    uberId: 53953,
  },
  {
    id: "mouldwoodDepthsGroup.breakableWebA",
    groupId: 18793,
    uberId: 56320,
  },
  {
    id: "mouldwoodDepthsGroup.arenaBreakableA",
    groupId: 18793,
    uberId: 56666,
  },
  {
    id: "mouldwoodDepthsGroup.bottomLeftSmallWall",
    groupId: 18793,
    uberId: 56800,
  },
  {
    id: "mouldwoodDepthsGroup.keystoneA",
    groupId: 18793,
    uberId: 58148,
  },
  {
    id: "mouldwoodDepthsGroup.mediumExpC",
    groupId: 18793,
    uberId: 58342,
  },
  {
    id: "mouldwoodDepthsGroup.healthCellA",
    groupId: 18793,
    uberId: 62694,
  },
  {
    id: "mouldwoodDepthsGroup.bossReward",
    groupId: 18793,
    uberId: 63291,
  },
  {
    id: "mouldwoodDepthsGroup.arenaWallMid",
    groupId: 18793,
    uberId: 64305,
  },
  {
    id: "mouldwoodDepthsGroup.mouldwoodDepthsHBreakableWallA",
    groupId: 18793,
    uberId: 64772,
  },
  {
    id: "mouldwoodDepthsGroup.secretWallA",
    groupId: 18793,
    uberId: 65202,
  },
  {
    id: "mouldwoodDepthsGroup.savePedestalUberState",
    groupId: 18793,
    uberId: 38871,
  },
  {
    id: "mouldwoodDepthsGroup.savePedestalUberState",
    groupId: 18793,
    uberId: 39689,
  },
  {
    id: "mouldwoodDepthsGroup.spiderBossState",
    groupId: 18793,
    uberId: 26713,
  },
  {
    id: "mouldwoodDepthsGroup.lanternAndCreepBInt",
    groupId: 18793,
    uberId: 39667,
  },
  {
    id: "eventsUberStateGroup.gumoFreeUberState",
    groupId: 19973,
    uberId: 18551,
  },
  {
    id: "eventsUberStateGroup.spiritTreeReachedUberState",
    groupId: 19973,
    uberId: 22047,
  },
  {
    id: "eventsUberStateGroup.mistLiftedUberState",
    groupId: 19973,
    uberId: 23591,
  },
  {
    id: "eventsUberStateGroup.ginsoTreeKeyUberState",
    groupId: 19973,
    uberId: 30524,
  },
  {
    id: "eventsUberStateGroup.kwolokDeadUberState",
    groupId: 19973,
    uberId: 31305,
  },
  {
    id: "eventsUberStateGroup.mountHoruKeyUberState",
    groupId: 19973,
    uberId: 38631,
  },
  {
    id: "eventsUberStateGroup.kwolokLeftThroneUberState",
    groupId: 19973,
    uberId: 45830,
  },
  {
    id: "eventsUberStateGroup.gravityActivatedUberState",
    groupId: 19973,
    uberId: 49418,
  },
  {
    id: "eventsUberStateGroup.ginsoTreeEnteredUberState",
    groupId: 19973,
    uberId: 54999,
  },
  {
    id: "eventsUberStateGroup.windRestoredUberState",
    groupId: 19973,
    uberId: 59537,
  },
  {
    id: "eventsUberStateGroup.forlornRuinsKeyUberState",
    groupId: 19973,
    uberId: 61347,
  },
  {
    id: "windsweptWastesGroupDescriptor.expOrb",
    groupId: 20120,
    uberId: 224,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallA",
    groupId: 20120,
    uberId: 1348,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbG",
    groupId: 20120,
    uberId: 2013,
  },
  {
    id: "windsweptWastesGroupDescriptor.areaText",
    groupId: 20120,
    uberId: 2552,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbC",
    groupId: 20120,
    uberId: 3550,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbA",
    groupId: 20120,
    uberId: 8910,
  },
  {
    id: "windsweptWastesGroupDescriptor.breakableWall",
    groupId: 20120,
    uberId: 9095,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbB",
    groupId: 20120,
    uberId: 10397,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbD",
    groupId: 20120,
    uberId: 10801,
  },
  {
    id: "windsweptWastesGroupDescriptor.energyHalfCell",
    groupId: 20120,
    uberId: 11785,
  },
  {
    id: "windsweptWastesGroupDescriptor.leverStateA",
    groupId: 20120,
    uberId: 12902,
  },
  {
    id: "windsweptWastesGroupDescriptor.healthContainer",
    groupId: 20120,
    uberId: 12941,
  },
  {
    id: "windsweptWastesGroupDescriptor.projectileBreakableWall",
    groupId: 20120,
    uberId: 16172,
  },
  {
    id: "windsweptWastesGroupDescriptor.digHint",
    groupId: 20120,
    uberId: 16309,
  },
  {
    id: "windsweptWastesGroupDescriptor.expOrbE",
    groupId: 20120,
    uberId: 17798,
  },
  {
    id: "windsweptWastesGroupDescriptor.lifeHalfCell",
    groupId: 20120,
    uberId: 18965,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbB",
    groupId: 20120,
    uberId: 19113,
  },
  {
    id: "windsweptWastesGroupDescriptor.energyOrbA",
    groupId: 20120,
    uberId: 22354,
  },
  {
    id: "windsweptWastesGroupDescriptor.digDashHint",
    groupId: 20120,
    uberId: 24078,
  },
  {
    id: "windsweptWastesGroupDescriptor.drillableWallA",
    groupId: 20120,
    uberId: 24774,
  },
  {
    id: "windsweptWastesGroupDescriptor.e3DesertG_clone0_KeystoneDoor",
    groupId: 20120,
    uberId: 28786,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbE",
    groupId: 20120,
    uberId: 30358,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbA",
    groupId: 20120,
    uberId: 30740,
  },
  {
    id: "windsweptWastesGroupDescriptor.drillableBlockerA",
    groupId: 20120,
    uberId: 31180,
  },
  {
    id: "windsweptWastesGroupDescriptor.expOrbB",
    groupId: 20120,
    uberId: 33275,
  },
  {
    id: "windsweptWastesGroupDescriptor.shardA",
    groupId: 20120,
    uberId: 33292,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallC",
    groupId: 20120,
    uberId: 33294,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallB",
    groupId: 20120,
    uberId: 33775,
  },
  {
    id: "windsweptWastesGroupDescriptor.drillWallA",
    groupId: 20120,
    uberId: 36758,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbA",
    groupId: 20120,
    uberId: 36805,
  },
  {
    id: "windsweptWastesGroupDescriptor.gorlekOreB",
    groupId: 20120,
    uberId: 40245,
  },
  {
    id: "windsweptWastesGroupDescriptor.hintZoneA",
    groupId: 20120,
    uberId: 40816,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbA",
    groupId: 20120,
    uberId: 42393,
  },
  {
    id: "windsweptWastesGroupDescriptor.shootablePod",
    groupId: 20120,
    uberId: 43099,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWall",
    groupId: 20120,
    uberId: 43231,
  },
  {
    id: "windsweptWastesGroupDescriptor.gorlekOre",
    groupId: 20120,
    uberId: 46919,
  },
  {
    id: "windsweptWastesGroupDescriptor.verticalPlatformLeverA",
    groupId: 20120,
    uberId: 48009,
  },
  {
    id: "windsweptWastesGroupDescriptor.expOrbD",
    groupId: 20120,
    uberId: 48829,
  },
  {
    id: "windsweptWastesGroupDescriptor.hintZoneB",
    groupId: 20120,
    uberId: 49950,
  },
  {
    id: "windsweptWastesGroupDescriptor.shardA",
    groupId: 20120,
    uberId: 49985,
  },
  {
    id: "windsweptWastesGroupDescriptor.energyContainer",
    groupId: 20120,
    uberId: 50026,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallA",
    groupId: 20120,
    uberId: 51985,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrb",
    groupId: 20120,
    uberId: 52812,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWall",
    groupId: 20120,
    uberId: 54936,
  },
  {
    id: "windsweptWastesGroupDescriptor.creepA",
    groupId: 20120,
    uberId: 55057,
  },
  {
    id: "windsweptWastesGroupDescriptor.wispSequencePlayedOut",
    groupId: 20120,
    uberId: 55196,
  },
  {
    id: "windsweptWastesGroupDescriptor.gorlekOre",
    groupId: 20120,
    uberId: 55303,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallE",
    groupId: 20120,
    uberId: 55388,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbA",
    groupId: 20120,
    uberId: 57133,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbB",
    groupId: 20120,
    uberId: 57781,
  },
  {
    id: "windsweptWastesGroupDescriptor.halfLifeCell",
    groupId: 20120,
    uberId: 59046,
  },
  {
    id: "windsweptWastesGroupDescriptor.breakableWallA",
    groupId: 20120,
    uberId: 59275,
  },
  {
    id: "windsweptWastesGroupDescriptor.doorClosingPlayed",
    groupId: 20120,
    uberId: 60953,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallD",
    groupId: 20120,
    uberId: 60960,
  },
  {
    id: "windsweptWastesGroupDescriptor.bombableWallF",
    groupId: 20120,
    uberId: 61572,
  },
  {
    id: "windsweptWastesGroupDescriptor.lifeCellA",
    groupId: 20120,
    uberId: 62264,
  },
  {
    id: "windsweptWastesGroupDescriptor.xpOrbF",
    groupId: 20120,
    uberId: 63310,
  },
  {
    id: "windsweptWastesGroupDescriptor.savePedestalUberState",
    groupId: 20120,
    uberId: 41398,
  },
  {
    id: "windsweptWastesGroupDescriptor.savePedestalUberState",
    groupId: 20120,
    uberId: 49994,
  },
  {
    id: "uiGroup.displayedSpiritWellFirstUseHint",
    groupId: 20190,
    uberId: 31212,
  },
  {
    id: "minesUberStateGroup.stompableFloorB",
    groupId: 21194,
    uberId: 6799,
  },
  {
    id: "minesUberStateGroup.collectableC",
    groupId: 21194,
    uberId: 7318,
  },
  {
    id: "minesUberStateGroup.spiritShardA",
    groupId: 21194,
    uberId: 11371,
  },
  {
    id: "minesUberStateGroup.collectableA",
    groupId: 21194,
    uberId: 16526,
  },
  {
    id: "minesUberStateGroup.grolDefeated",
    groupId: 21194,
    uberId: 18508,
  },
  {
    id: "minesUberStateGroup.collectableB",
    groupId: 21194,
    uberId: 26302,
  },
  {
    id: "minesUberStateGroup.xpOrbA",
    groupId: 21194,
    uberId: 27102,
  },
  {
    id: "minesUberStateGroup.memoriesPlayed",
    groupId: 21194,
    uberId: 29515,
  },
  {
    id: "minesUberStateGroup.crusherActivated",
    groupId: 21194,
    uberId: 29822,
  },
  {
    id: "minesUberStateGroup.elevatorDoorsBottom",
    groupId: 21194,
    uberId: 35345,
  },
  {
    id: "minesUberStateGroup.stompableFloorA",
    groupId: 21194,
    uberId: 36700,
  },
  {
    id: "minesUberStateGroup.grolCuredIntroDialoguePlayed",
    groupId: 21194,
    uberId: 38411,
  },
  {
    id: "minesUberStateGroup.elevatorDoorsTop",
    groupId: 21194,
    uberId: 43575,
  },
  {
    id: "minesUberStateGroup.breakableWall",
    groupId: 21194,
    uberId: 48792,
  },
  {
    id: "minesUberStateGroup.enemyDoor",
    groupId: 21194,
    uberId: 52416,
  },
  {
    id: "minesUberStateGroup.leverA",
    groupId: 21194,
    uberId: 63648,
  },
  {
    id: "minesUberStateGroup.savePedestalUberState",
    groupId: 21194,
    uberId: 685,
  },
  {
    id: "minesUberStateGroup.savePedestalUberState",
    groupId: 21194,
    uberId: 63334,
  },
  {
    id: "minesUberStateGroup.gateState",
    groupId: 21194,
    uberId: 17773,
  },
  {
    id: "minesUberStateGroup.minesElevatorUberState",
    groupId: 21194,
    uberId: 34225,
  },
  {
    id: "swampStateGroup.boneBridgeBroken",
    groupId: 21786,
    uberId: 808,
  },
  {
    id: "swampStateGroup.creepDoorD",
    groupId: 21786,
    uberId: 876,
  },
  {
    id: "swampStateGroup.gorlekOreA",
    groupId: 21786,
    uberId: 2046,
  },
  {
    id: "swampStateGroup.laserPuzzleSolved",
    groupId: 21786,
    uberId: 2852,
  },
  {
    id: "swampStateGroup.enemyRoom",
    groupId: 21786,
    uberId: 2869,
  },
  {
    id: "swampStateGroup.xpOrbA",
    groupId: 21786,
    uberId: 6987,
  },
  {
    id: "swampStateGroup.stompableFloor",
    groupId: 21786,
    uberId: 6994,
  },
  {
    id: "swampStateGroup.halfEnergyCellA",
    groupId: 21786,
    uberId: 7152,
  },
  {
    id: "swampStateGroup.mediumExpA",
    groupId: 21786,
    uberId: 7709,
  },
  {
    id: "swampStateGroup.mediumExpC",
    groupId: 21786,
    uberId: 7871,
  },
  {
    id: "swampStateGroup.shardSlotA",
    groupId: 21786,
    uberId: 9270,
  },
  {
    id: "swampStateGroup.creepDoorB",
    groupId: 21786,
    uberId: 9402,
  },
  {
    id: "swampStateGroup.energyHalfCellA",
    groupId: 21786,
    uberId: 10295,
  },
  {
    id: "swampStateGroup.largeExpA",
    groupId: 21786,
    uberId: 10413,
  },
  {
    id: "swampStateGroup.attackableSwitchA",
    groupId: 21786,
    uberId: 10467,
  },
  {
    id: "swampStateGroup.breakableWallA",
    groupId: 21786,
    uberId: 11343,
  },
  {
    id: "swampStateGroup.spiritShardPickupA",
    groupId: 21786,
    uberId: 12077,
  },
  {
    id: "swampStateGroup.xpOrbC",
    groupId: 21786,
    uberId: 16206,
  },
  {
    id: "swampStateGroup.energyHalfCell",
    groupId: 21786,
    uberId: 17920,
  },
  {
    id: "swampStateGroup.areaText",
    groupId: 21786,
    uberId: 17957,
  },
  {
    id: "swampStateGroup.shardSlotUpgradePlaceholder",
    groupId: 21786,
    uberId: 18109,
  },
  {
    id: "swampStateGroup.mediumExpB",
    groupId: 21786,
    uberId: 19679,
  },
  {
    id: "swampStateGroup.creepTreeC",
    groupId: 21786,
    uberId: 20144,
  },
  {
    id: "swampStateGroup.xpOrbB",
    groupId: 21786,
    uberId: 20160,
  },
  {
    id: "swampStateGroup.lifeCellA",
    groupId: 21786,
    uberId: 20194,
  },
  {
    id: "swampStateGroup.hintZone",
    groupId: 21786,
    uberId: 20615,
  },
  {
    id: "swampStateGroup.largeExpA",
    groupId: 21786,
    uberId: 21727,
  },
  {
    id: "swampStateGroup.keyStone",
    groupId: 21786,
    uberId: 22068,
  },
  {
    id: "swampStateGroup.playedOutKeystoneSequence",
    groupId: 21786,
    uberId: 22367,
  },
  {
    id: "swampStateGroup.breakableWallA",
    groupId: 21786,
    uberId: 22570,
  },
  {
    id: "swampStateGroup.mediumExpA",
    groupId: 21786,
    uberId: 23154,
  },
  {
    id: "swampStateGroup.creepDoor",
    groupId: 21786,
    uberId: 23177,
  },
  {
    id: "swampStateGroup.nightCrawlerEscaped",
    groupId: 21786,
    uberId: 25095,
  },
  {
    id: "swampStateGroup.creepDoorA",
    groupId: 21786,
    uberId: 25147,
  },
  {
    id: "swampStateGroup.creepDoorE",
    groupId: 21786,
    uberId: 25291,
  },
  {
    id: "swampStateGroup.healthContainerA",
    groupId: 21786,
    uberId: 25761,
  },
  {
    id: "swampStateGroup.interactedWithOpher",
    groupId: 21786,
    uberId: 26462,
  },
  {
    id: "swampStateGroup.keyStoneA",
    groupId: 21786,
    uberId: 27433,
  },
  {
    id: "swampStateGroup.halfHealthCellA",
    groupId: 21786,
    uberId: 28908,
  },
  {
    id: "swampStateGroup.creepDoorB",
    groupId: 21786,
    uberId: 29636,
  },
  {
    id: "swampStateGroup.gorlekOreA",
    groupId: 21786,
    uberId: 29892,
  },
  {
    id: "swampStateGroup.spiritShardA",
    groupId: 21786,
    uberId: 30305,
  },
  {
    id: "swampStateGroup.nightCrawlerChaseStarted",
    groupId: 21786,
    uberId: 30656,
  },
  {
    id: "swampStateGroup.breakableWallA",
    groupId: 21786,
    uberId: 30928,
  },
  {
    id: "swampStateGroup.hintZone",
    groupId: 21786,
    uberId: 31430,
  },
  {
    id: "swampStateGroup.enemyDoorA",
    groupId: 21786,
    uberId: 32430,
  },
  {
    id: "swampStateGroup.creepTreeD",
    groupId: 21786,
    uberId: 32463,
  },
  {
    id: "swampStateGroup.creepDoor",
    groupId: 21786,
    uberId: 33430,
  },
  {
    id: "swampStateGroup.breakableWallB",
    groupId: 21786,
    uberId: 34008,
  },
  {
    id: "swampStateGroup.creepDoorA",
    groupId: 21786,
    uberId: 35166,
  },
  {
    id: "swampStateGroup.creepDoorC",
    groupId: 21786,
    uberId: 35260,
  },
  {
    id: "swampStateGroup.attackableSwitchC",
    groupId: 21786,
    uberId: 35350,
  },
  {
    id: "swampStateGroup.enemyArenaComplete",
    groupId: 21786,
    uberId: 35598,
  },
  {
    id: "swampStateGroup.breakableWallA",
    groupId: 21786,
    uberId: 35925,
  },
  {
    id: "swampStateGroup.keyStoneB",
    groupId: 21786,
    uberId: 37225,
  },
  {
    id: "swampStateGroup.creepTreeE",
    groupId: 21786,
    uberId: 37833,
  },
  {
    id: "swampStateGroup.hintZone",
    groupId: 21786,
    uberId: 38342,
  },
  {
    id: "swampStateGroup.bladeRitualFinished",
    groupId: 21786,
    uberId: 38475,
  },
  {
    id: "swampStateGroup.springCreep",
    groupId: 21786,
    uberId: 39804,
  },
  {
    id: "swampStateGroup.nightCrawlerDefeated",
    groupId: 21786,
    uberId: 40322,
  },
  {
    id: "swampStateGroup.breakableWall",
    groupId: 21786,
    uberId: 40424,
  },
  {
    id: "swampStateGroup.doorBState",
    groupId: 21786,
    uberId: 41817,
  },
  {
    id: "swampStateGroup.swampTorchIntroductionADoorWithTwoSlotsBooleanDescriptor",
    groupId: 21786,
    uberId: 42309,
  },
  {
    id: "swampStateGroup.watermillDiscovered",
    groupId: 21786,
    uberId: 43216,
  },
  {
    id: "swampStateGroup.xpOrbB",
    groupId: 21786,
    uberId: 43668,
  },
  {
    id: "swampStateGroup.energyContainerA",
    groupId: 21786,
    uberId: 44157,
  },
  {
    id: "swampStateGroup.secretWall",
    groupId: 21786,
    uberId: 44253,
  },
  {
    id: "swampStateGroup.creepTreeA",
    groupId: 21786,
    uberId: 44431,
  },
  {
    id: "swampStateGroup.attackableSwitchB",
    groupId: 21786,
    uberId: 45648,
  },
  {
    id: "swampStateGroup.nightcrawlerTeaseTimelinePlayed",
    groupId: 21786,
    uberId: 46536,
  },
  {
    id: "swampStateGroup.swampNightcrawlerCavernADoorWithTwoSlotsBooleanDescriptor",
    groupId: 21786,
    uberId: 47445,
  },
  {
    id: "swampStateGroup.torchHolded",
    groupId: 21786,
    uberId: 47458,
  },
  {
    id: "swampStateGroup.creepDoorB",
    groupId: 21786,
    uberId: 47644,
  },
  {
    id: "swampStateGroup.finishedIntroTop",
    groupId: 21786,
    uberId: 48748,
  },
  {
    id: "swampStateGroup.smallExpA",
    groupId: 21786,
    uberId: 49485,
  },
  {
    id: "swampStateGroup.mediumExpA",
    groupId: 21786,
    uberId: 50255,
  },
  {
    id: "swampStateGroup.swampWalljumpChallengeBKeystoneACollected",
    groupId: 21786,
    uberId: 50281,
  },
  {
    id: "swampStateGroup.leverA",
    groupId: 21786,
    uberId: 50432,
  },
  {
    id: "swampStateGroup.leverAndDoor",
    groupId: 21786,
    uberId: 50453,
  },
  {
    id: "swampStateGroup.doorAState",
    groupId: 21786,
    uberId: 50691,
  },
  {
    id: "swampStateGroup.nightcrawlerBridgeBrokenA",
    groupId: 21786,
    uberId: 50994,
  },
  {
    id: "swampStateGroup.powlTeaseTriggered",
    groupId: 21786,
    uberId: 51018,
  },
  {
    id: "swampStateGroup.smallExpA",
    groupId: 21786,
    uberId: 52026,
  },
  {
    id: "swampStateGroup.leverGateinkwaterMarsh",
    groupId: 21786,
    uberId: 52815,
  },
  {
    id: "swampStateGroup.creepDoorA",
    groupId: 21786,
    uberId: 53932,
  },
  {
    id: "swampStateGroup.elevatorDown",
    groupId: 21786,
    uberId: 55881,
  },
  {
    id: "swampStateGroup.gateUberState",
    groupId: 21786,
    uberId: 58612,
  },
  {
    id: "swampStateGroup.expOrb",
    groupId: 21786,
    uberId: 59513,
  },
  {
    id: "swampStateGroup.breakableBridgeBroken",
    groupId: 21786,
    uberId: 59922,
  },
  {
    id: "swampStateGroup.doorWithTwoSlots",
    groupId: 21786,
    uberId: 59990,
  },
  {
    id: "swampStateGroup.healthContainerA",
    groupId: 21786,
    uberId: 60210,
  },
  {
    id: "swampStateGroup.doorFourSlots",
    groupId: 21786,
    uberId: 60616,
  },
  {
    id: "swampStateGroup.ottersLeadToSpiritBlade",
    groupId: 21786,
    uberId: 61644,
  },
  {
    id: "swampStateGroup.halfEnergyCellA",
    groupId: 21786,
    uberId: 61706,
  },
  {
    id: "swampStateGroup.stompableFloor",
    groupId: 21786,
    uberId: 61900,
  },
  {
    id: "swampStateGroup.xpOrbA",
    groupId: 21786,
    uberId: 63072,
  },
  {
    id: "swampStateGroup.spiritShardA",
    groupId: 21786,
    uberId: 63545,
  },
  {
    id: "swampStateGroup.swampWalljumpChallengeBKeystoneBCollected",
    groupId: 21786,
    uberId: 64677,
  },
  {
    id: "swampStateGroup.creepTreeB",
    groupId: 21786,
    uberId: 65235,
  },
  {
    id: "swampStateGroup.savePedestal",
    groupId: 21786,
    uberId: 3714,
  },
  {
    id: "swampStateGroup.savePedestalSwampIntroTop",
    groupId: 21786,
    uberId: 10185,
  },
  {
    id: "swampStateGroup.savePedestal",
    groupId: 21786,
    uberId: 12914,
  },
  {
    id: "swampStateGroup.savePedestal",
    groupId: 21786,
    uberId: 38720,
  },
  {
    id: "swampStateGroup.savePedestalUberState",
    groupId: 21786,
    uberId: 38941,
  },
  {
    id: "swampStateGroup.savePedestal",
    groupId: 21786,
    uberId: 50820,
  },
  {
    id: "swampStateGroup.savePedestal",
    groupId: 21786,
    uberId: 56901,
  },
  {
    id: "swampStateGroup.pushBlockState",
    groupId: 21786,
    uberId: 22091,
  },
  {
    id: "pickupsGroup.hollowEnergyShardPickup",
    groupId: 23987,
    uberId: 897,
  },
  {
    id: "pickupsGroup.spiritPowerShardPickup",
    groupId: 23987,
    uberId: 986,
  },
  {
    id: "pickupsGroup.recklessShardPickup",
    groupId: 23987,
    uberId: 9864,
  },
  {
    id: "pickupsGroup.ultraLeashShardPickup",
    groupId: 23987,
    uberId: 12104,
  },
  {
    id: "pickupsGroup.energyCell",
    groupId: 23987,
    uberId: 12746,
  },
  {
    id: "pickupsGroup.focusShardPickup",
    groupId: 23987,
    uberId: 14014,
  },
  {
    id: "pickupsGroup.secretShardPickup",
    groupId: 23987,
    uberId: 14832,
  },
  {
    id: "pickupsGroup.untouchableShardPickup",
    groupId: 23987,
    uberId: 19630,
  },
  {
    id: "pickupsGroup.spiritMagnetShardPickup",
    groupId: 23987,
    uberId: 20915,
  },
  {
    id: "pickupsGroup.chainLightningPickup",
    groupId: 23987,
    uberId: 23015,
  },
  {
    id: "pickupsGroup.recycleShardPickup",
    groupId: 23987,
    uberId: 25183,
  },
  {
    id: "pickupsGroup.ultraBashShardPickup",
    groupId: 23987,
    uberId: 25996,
  },
  {
    id: "pickupsGroup.glueShardPickup",
    groupId: 23987,
    uberId: 27134,
  },
  {
    id: "pickupsGroup.counterstrikeShardPickup",
    groupId: 23987,
    uberId: 31426,
  },
  {
    id: "pickupsGroup.fractureShardPickup",
    groupId: 23987,
    uberId: 36359,
  },
  {
    id: "pickupsGroup.energyEfficiencyShardPickup",
    groupId: 23987,
    uberId: 46461,
  },
  {
    id: "pickupsGroup.aggressorShardPickup",
    groupId: 23987,
    uberId: 48605,
  },
  {
    id: "pickupsGroup.lastResortShardPickup",
    groupId: 23987,
    uberId: 50364,
  },
  {
    id: "pickupsGroup.bloodPactShardPickup",
    groupId: 23987,
    uberId: 50415,
  },
  {
    id: "pickupsGroup.vitalityLuckShardPickup",
    groupId: 23987,
    uberId: 53934,
  },
  {
    id: "pickupsGroup.barrierShardPickup",
    groupId: 23987,
    uberId: 59173,
  },
  {
    id: "pickupsGroup.frenzyShardPickup",
    groupId: 23987,
    uberId: 61017,
  },
  {
    id: "pickupsGroup.splinterShardPickup",
    groupId: 23987,
    uberId: 62973,
  },
  {
    id: "howlsOriginGroup.secretWallA",
    groupId: 24922,
    uberId: 2524,
  },
  {
    id: "howlsOriginGroup.expOrbA",
    groupId: 24922,
    uberId: 8568,
  },
  {
    id: "howlsOriginGroup.bellPuzzleSolved",
    groupId: 24922,
    uberId: 13349,
  },
  {
    id: "howlsOriginGroup.xpOrbA",
    groupId: 24922,
    uberId: 13921,
  },
  {
    id: "howlsOriginGroup.shardSlotUpgradePlaceholder",
    groupId: 24922,
    uberId: 13993,
  },
  {
    id: "howlsOriginGroup.portalsLifted",
    groupId: 24922,
    uberId: 16603,
  },
  {
    id: "howlsOriginGroup.smallExpA",
    groupId: 24922,
    uberId: 32076,
  },
  {
    id: "howlsOriginGroup.keystoneB",
    groupId: 24922,
    uberId: 33535,
  },
  {
    id: "howlsOriginGroup.keystoneA",
    groupId: 24922,
    uberId: 34250,
  },
  {
    id: "howlsOriginGroup.shrineArena",
    groupId: 24922,
    uberId: 45011,
  },
  {
    id: "howlsOriginGroup.interactedWithTokk",
    groupId: 24922,
    uberId: 45740,
  },
  {
    id: "howlsOriginGroup.spiritShard",
    groupId: 24922,
    uberId: 46311,
  },
  {
    id: "howlsOriginGroup.keystoneA",
    groupId: 24922,
    uberId: 47244,
  },
  {
    id: "howlsOriginGroup.breakableWallA",
    groupId: 24922,
    uberId: 50740,
  },
  {
    id: "howlsOriginGroup.bellPuzzleBSolved",
    groupId: 24922,
    uberId: 59146,
  },
  {
    id: "howlsOriginGroup.keystoneA",
    groupId: 24922,
    uberId: 60358,
  },
  {
    id: "howlsOriginGroup.largeExpA",
    groupId: 24922,
    uberId: 62138,
  },
  {
    id: "howlsOriginGroup.howlOriginEntranceSavePedestal",
    groupId: 24922,
    uberId: 42531,
  },
  {
    id: "convertedSetupsGymGroup.blowableFlameToggle",
    groupId: 26019,
    uberId: 971,
  },
  {
    id: "convertedSetupsGymGroup.secretWallA",
    groupId: 26019,
    uberId: 1274,
  },
  {
    id: "convertedSetupsGymGroup.horizontalDoorState",
    groupId: 26019,
    uberId: 4052,
  },
  {
    id: "convertedSetupsGymGroup.creepDoorD",
    groupId: 26019,
    uberId: 4231,
  },
  {
    id: "convertedSetupsGymGroup.secretWall",
    groupId: 26019,
    uberId: 5259,
  },
  {
    id: "convertedSetupsGymGroup.kwolokCavernsLever",
    groupId: 26019,
    uberId: 6406,
  },
  {
    id: "convertedSetupsGymGroup.creepD",
    groupId: 26019,
    uberId: 7636,
  },
  {
    id: "convertedSetupsGymGroup.mediumExpOrb",
    groupId: 26019,
    uberId: 10086,
  },
  {
    id: "convertedSetupsGymGroup.snowPileB",
    groupId: 26019,
    uberId: 11133,
  },
  {
    id: "convertedSetupsGymGroup.elevatorLever",
    groupId: 26019,
    uberId: 11592,
  },
  {
    id: "convertedSetupsGymGroup.stompableFloor",
    groupId: 26019,
    uberId: 12371,
  },
  {
    id: "convertedSetupsGymGroup.creepDoorA",
    groupId: 26019,
    uberId: 13586,
  },
  {
    id: "convertedSetupsGymGroup.desertBreakableWall",
    groupId: 26019,
    uberId: 14277,
  },
  {
    id: "convertedSetupsGymGroup.creepC",
    groupId: 26019,
    uberId: 15381,
  },
  {
    id: "convertedSetupsGymGroup.stompableFloorB",
    groupId: 26019,
    uberId: 18425,
  },
  {
    id: "convertedSetupsGymGroup.cordycepsBreakableWall",
    groupId: 26019,
    uberId: 21522,
  },
  {
    id: "convertedSetupsGymGroup.watermillEnemyDoor",
    groupId: 26019,
    uberId: 23282,
  },
  {
    id: "convertedSetupsGymGroup.leverAndDoor",
    groupId: 26019,
    uberId: 23382,
  },
  {
    id: "convertedSetupsGymGroup.weepingRidgeBreakableWall",
    groupId: 26019,
    uberId: 25103,
  },
  {
    id: "convertedSetupsGymGroup.petrifiedForestBreakableWall",
    groupId: 26019,
    uberId: 26714,
  },
  {
    id: "convertedSetupsGymGroup.leafPile",
    groupId: 26019,
    uberId: 27176,
  },
  {
    id: "convertedSetupsGymGroup.enemyDoor",
    groupId: 26019,
    uberId: 28367,
  },
  {
    id: "convertedSetupsGymGroup.kwolokCavernsBreakableWall",
    groupId: 26019,
    uberId: 28678,
  },
  {
    id: "convertedSetupsGymGroup.enemyDoorA",
    groupId: 26019,
    uberId: 29970,
  },
  {
    id: "convertedSetupsGymGroup.keyStoneYesCheckpoint",
    groupId: 26019,
    uberId: 30549,
  },
  {
    id: "convertedSetupsGymGroup.watermillBreakableWall",
    groupId: 26019,
    uberId: 32221,
  },
  {
    id: "convertedSetupsGymGroup.watermillBreakableWallUnderwater",
    groupId: 26019,
    uberId: 33339,
  },
  {
    id: "convertedSetupsGymGroup.lagoonEnemyDoor",
    groupId: 26019,
    uberId: 33392,
  },
  {
    id: "convertedSetupsGymGroup.desertRuinsBreakableWall",
    groupId: 26019,
    uberId: 33510,
  },
  {
    id: "convertedSetupsGymGroup.energyContainer",
    groupId: 26019,
    uberId: 34752,
  },
  {
    id: "convertedSetupsGymGroup.creepDoorC",
    groupId: 26019,
    uberId: 34818,
  },
  {
    id: "convertedSetupsGymGroup.snowPileA",
    groupId: 26019,
    uberId: 35001,
  },
  {
    id: "convertedSetupsGymGroup.classicShootableCreepDoor",
    groupId: 26019,
    uberId: 37244,
  },
  {
    id: "convertedSetupsGymGroup.snowPile",
    groupId: 26019,
    uberId: 38710,
  },
  {
    id: "convertedSetupsGymGroup.kwolokCavernsBreakableWallLock",
    groupId: 26019,
    uberId: 38743,
  },
  {
    id: "convertedSetupsGymGroup.keyStoneNoCheckpoint",
    groupId: 26019,
    uberId: 38761,
  },
  {
    id: "convertedSetupsGymGroup.kwolokCavernsBreakableWall2",
    groupId: 26019,
    uberId: 40296,
  },
  {
    id: "convertedSetupsGymGroup.winterForestBreakableWall",
    groupId: 26019,
    uberId: 40553,
  },
  {
    id: "convertedSetupsGymGroup.creepDoorB",
    groupId: 26019,
    uberId: 44556,
  },
  {
    id: "convertedSetupsGymGroup.creepE",
    groupId: 26019,
    uberId: 47055,
  },
  {
    id: "convertedSetupsGymGroup.secretWallWithLock",
    groupId: 26019,
    uberId: 47874,
  },
  {
    id: "convertedSetupsGymGroup.skillPointOrb",
    groupId: 26019,
    uberId: 49127,
  },
  {
    id: "convertedSetupsGymGroup.springCreep",
    groupId: 26019,
    uberId: 51496,
  },
  {
    id: "convertedSetupsGymGroup.enemyDoor",
    groupId: 26019,
    uberId: 52684,
  },
  {
    id: "convertedSetupsGymGroup.spiritShardPickup",
    groupId: 26019,
    uberId: 53374,
  },
  {
    id: "convertedSetupsGymGroup.drillZone",
    groupId: 26019,
    uberId: 53543,
  },
  {
    id: "convertedSetupsGymGroup.snowPileA",
    groupId: 26019,
    uberId: 54405,
  },
  {
    id: "convertedSetupsGymGroup.fourSlotDoor",
    groupId: 26019,
    uberId: 54578,
  },
  {
    id: "convertedSetupsGymGroup.minesBreakableWall",
    groupId: 26019,
    uberId: 58058,
  },
  {
    id: "convertedSetupsGymGroup.creepB",
    groupId: 26019,
    uberId: 58116,
  },
  {
    id: "convertedSetupsGymGroup.creepA",
    groupId: 26019,
    uberId: 60202,
  },
  {
    id: "convertedSetupsGymGroup.creepDoorE",
    groupId: 26019,
    uberId: 60454,
  },
  {
    id: "convertedSetupsGymGroup.lagoonBreakableWall",
    groupId: 26019,
    uberId: 62800,
  },
  {
    id: "convertedSetupsGymGroup.twoSlotDoor",
    groupId: 26019,
    uberId: 62962,
  },
  {
    id: "convertedSetupsGymGroup.swampBreakableWall",
    groupId: 26019,
    uberId: 63056,
  },
  {
    id: "convertedSetupsGymGroup.largeExpOrb",
    groupId: 26019,
    uberId: 64001,
  },
  {
    id: "convertedSetupsGymGroup.smallExpOrb",
    groupId: 26019,
    uberId: 64961,
  },
  {
    id: "convertedSetupsGymGroup.willowsEndSecretWall",
    groupId: 26019,
    uberId: 65139,
  },
  {
    id: "convertedSetupsGymGroup.xpOrbB",
    groupId: 26019,
    uberId: 65172,
  },
  {
    id: "convertedSetupsGymGroup.landOnAndSpawnOrbs",
    groupId: 26019,
    uberId: 13498,
  },
  {
    id: "winterForestGroupDescriptor.breakableFloorB",
    groupId: 28287,
    uberId: 3938,
  },
  {
    id: "winterForestGroupDescriptor.springBlossomTimelinePlayed",
    groupId: 28287,
    uberId: 6764,
  },
  {
    id: "winterForestGroupDescriptor.boxA",
    groupId: 28287,
    uberId: 10460,
  },
  {
    id: "winterForestGroupDescriptor.breakableFloor",
    groupId: 28287,
    uberId: 11124,
  },
  {
    id: "winterForestGroupDescriptor.mediumExpA",
    groupId: 28287,
    uberId: 12866,
  },
  {
    id: "winterForestGroupDescriptor.breakableRocksA",
    groupId: 28287,
    uberId: 13168,
  },
  {
    id: "winterForestGroupDescriptor.mediumExpC",
    groupId: 28287,
    uberId: 15252,
  },
  {
    id: "winterForestGroupDescriptor.thawStateDescriptor",
    groupId: 28287,
    uberId: 16339,
  },
  {
    id: "winterForestGroupDescriptor.pressurePlatePuzzleSolved",
    groupId: 28287,
    uberId: 22713,
  },
  {
    id: "winterForestGroupDescriptor.breakableWallA",
    groupId: 28287,
    uberId: 24327,
  },
  {
    id: "winterForestGroupDescriptor.breakableFloorA",
    groupId: 28287,
    uberId: 26844,
  },
  {
    id: "winterForestGroupDescriptor.mediumExpB",
    groupId: 28287,
    uberId: 28525,
  },
  {
    id: "winterForestGroupDescriptor.secretWallThaw",
    groupId: 28287,
    uberId: 30157,
  },
  {
    id: "winterForestGroupDescriptor.mediumExpA",
    groupId: 28287,
    uberId: 32414,
  },
  {
    id: "winterForestGroupDescriptor.hammerWall",
    groupId: 28287,
    uberId: 40607,
  },
  {
    id: "winterForestGroupDescriptor.breakableWallC",
    groupId: 28287,
    uberId: 43506,
  },
  {
    id: "winterForestGroupDescriptor.breakableWallB",
    groupId: 28287,
    uberId: 51721,
  },
  {
    id: "winterForestGroupDescriptor.boxB",
    groupId: 28287,
    uberId: 52043,
  },
  {
    id: "winterForestGroupDescriptor.leafPileA",
    groupId: 28287,
    uberId: 55131,
  },
  {
    id: "winterForestGroupDescriptor.spiritShardA",
    groupId: 28287,
    uberId: 55482,
  },
  {
    id: "winterForestGroupDescriptor.stompableFloor",
    groupId: 28287,
    uberId: 57792,
  },
  {
    id: "winterForestGroupDescriptor.leafPileB",
    groupId: 28287,
    uberId: 61490,
  },
  {
    id: "winterForestGroupDescriptor.breakableRocksB",
    groupId: 28287,
    uberId: 62332,
  },
  {
    id: "winterForestGroupDescriptor.savePedestalUberState",
    groupId: 28287,
    uberId: 64528,
  },
  {
    id: "baursReachGroup.keystoneB",
    groupId: 28895,
    uberId: 1053,
  },
  {
    id: "baursReachGroup.powlTeaseTriggered",
    groupId: 28895,
    uberId: 2108,
  },
  {
    id: "baursReachGroup.largeExpOrb",
    groupId: 28895,
    uberId: 2129,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 2462,
  },
  {
    id: "baursReachGroup.stompableFloorA",
    groupId: 28895,
    uberId: 2896,
  },
  {
    id: "baursReachGroup.breakableWallB",
    groupId: 28895,
    uberId: 2931,
  },
  {
    id: "baursReachGroup.mediumExpOrb",
    groupId: 28895,
    uberId: 3777,
  },
  {
    id: "baursReachGroup.doorWithFourSlots",
    groupId: 28895,
    uberId: 4290,
  },
  {
    id: "baursReachGroup.xpOrbF",
    groupId: 28895,
    uberId: 4301,
  },
  {
    id: "baursReachGroup.frozenMokiInteracted",
    groupId: 28895,
    uberId: 7152,
  },
  {
    id: "baursReachGroup.smallExpB",
    groupId: 28895,
    uberId: 7597,
  },
  {
    id: "baursReachGroup.breakableRocksA",
    groupId: 28895,
    uberId: 7616,
  },
  {
    id: "baursReachGroup.breakableRocksK",
    groupId: 28895,
    uberId: 7703,
  },
  {
    id: "baursReachGroup.stompableFloorA",
    groupId: 28895,
    uberId: 8664,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 8834,
  },
  {
    id: "baursReachGroup.breakableWallB",
    groupId: 28895,
    uberId: 8934,
  },
  {
    id: "baursReachGroup.expOrbD",
    groupId: 28895,
    uberId: 9321,
  },
  {
    id: "baursReachGroup.keystoneC",
    groupId: 28895,
    uberId: 9949,
  },
  {
    id: "baursReachGroup.keystoneC",
    groupId: 28895,
    uberId: 10823,
  },
  {
    id: "baursReachGroup.energyHalfCell",
    groupId: 28895,
    uberId: 10840,
  },
  {
    id: "baursReachGroup.breakableRocksG",
    groupId: 28895,
    uberId: 11936,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 12140,
  },
  {
    id: "baursReachGroup.breakableWallA",
    groupId: 28895,
    uberId: 14264,
  },
  {
    id: "baursReachGroup.breakableWallA",
    groupId: 28895,
    uberId: 17510,
  },
  {
    id: "baursReachGroup.afterMoraDeathRetalkPlayed",
    groupId: 28895,
    uberId: 17914,
  },
  {
    id: "baursReachGroup.keystoneD",
    groupId: 28895,
    uberId: 18358,
  },
  {
    id: "baursReachGroup.breakableWallA",
    groupId: 28895,
    uberId: 19041,
  },
  {
    id: "baursReachGroup.expOrbE",
    groupId: 28895,
    uberId: 19077,
  },
  {
    id: "baursReachGroup.breakableRockWall",
    groupId: 28895,
    uberId: 20731,
  },
  {
    id: "baursReachGroup.stompableGroundA",
    groupId: 28895,
    uberId: 22127,
  },
  {
    id: "baursReachGroup.keystoneA",
    groupId: 28895,
    uberId: 22382,
  },
  {
    id: "baursReachGroup.placedCoal",
    groupId: 28895,
    uberId: 22695,
  },
  {
    id: "baursReachGroup.winterForestBonfire",
    groupId: 28895,
    uberId: 22758,
  },
  {
    id: "baursReachGroup.mediumExpOrb",
    groupId: 28895,
    uberId: 22761,
  },
  {
    id: "baursReachGroup.expOrbC",
    groupId: 28895,
    uberId: 22959,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 23605,
  },
  {
    id: "baursReachGroup.breakableRocksH",
    groupId: 28895,
    uberId: 23678,
  },
  {
    id: "baursReachGroup.gorlekOreA",
    groupId: 28895,
    uberId: 23795,
  },
  {
    id: "baursReachGroup.smallXPOrbB",
    groupId: 28895,
    uberId: 24533,
  },
  {
    id: "baursReachGroup.afterKwolokDeathRetalkPlayed",
    groupId: 28895,
    uberId: 25315,
  },
  {
    id: "baursReachGroup.wispRewardPickup",
    groupId: 28895,
    uberId: 25522,
  },
  {
    id: "baursReachGroup.energyUpgrade",
    groupId: 28895,
    uberId: 27476,
  },
  {
    id: "baursReachGroup.firePedestalBooleanUberState",
    groupId: 28895,
    uberId: 27787,
  },
  {
    id: "baursReachGroup.seedPodBroken",
    groupId: 28895,
    uberId: 28059,
  },
  {
    id: "baursReachGroup.keystoneA",
    groupId: 28895,
    uberId: 29898,
  },
  {
    id: "baursReachGroup.grenadeLanternsHint",
    groupId: 28895,
    uberId: 30189,
  },
  {
    id: "baursReachGroup.firePedestalBooleanUberState",
    groupId: 28895,
    uberId: 30566,
  },
  {
    id: "baursReachGroup.breakableWall",
    groupId: 28895,
    uberId: 30794,
  },
  {
    id: "baursReachGroup.fallingBranch",
    groupId: 28895,
    uberId: 31575,
  },
  {
    id: "baursReachGroup.areaTextZone",
    groupId: 28895,
    uberId: 32092,
  },
  {
    id: "baursReachGroup.creepDoor",
    groupId: 28895,
    uberId: 32340,
  },
  {
    id: "baursReachGroup.closingGate",
    groupId: 28895,
    uberId: 32443,
  },
  {
    id: "baursReachGroup.xpOrbB",
    groupId: 28895,
    uberId: 33337,
  },
  {
    id: "baursReachGroup.xpOrbE",
    groupId: 28895,
    uberId: 33846,
  },
  {
    id: "baursReachGroup.breakableWall",
    groupId: 28895,
    uberId: 34098,
  },
  {
    id: "baursReachGroup.breakableRocksJ",
    groupId: 28895,
    uberId: 34461,
  },
  {
    id: "baursReachGroup.healthCellA",
    groupId: 28895,
    uberId: 34534,
  },
  {
    id: "baursReachGroup.smallXPOrbB",
    groupId: 28895,
    uberId: 35045,
  },
  {
    id: "baursReachGroup.memoriesPlayedOut",
    groupId: 28895,
    uberId: 35436,
  },
  {
    id: "baursReachGroup.hintZoneA",
    groupId: 28895,
    uberId: 35874,
  },
  {
    id: "baursReachGroup.xpOrbC",
    groupId: 28895,
    uberId: 36231,
  },
  {
    id: "baursReachGroup.smallExpA",
    groupId: 28895,
    uberId: 36378,
  },
  {
    id: "baursReachGroup.secretWallA",
    groupId: 28895,
    uberId: 36649,
  },
  {
    id: "baursReachGroup.grenadeSwitchA",
    groupId: 28895,
    uberId: 37287,
  },
  {
    id: "baursReachGroup.keystoneB",
    groupId: 28895,
    uberId: 37444,
  },
  {
    id: "baursReachGroup.xpOrbB",
    groupId: 28895,
    uberId: 38049,
  },
  {
    id: "baursReachGroup.breakableRocksE",
    groupId: 28895,
    uberId: 38120,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 38143,
  },
  {
    id: "baursReachGroup.breakableRocksF",
    groupId: 28895,
    uberId: 38525,
  },
  {
    id: "baursReachGroup.gorlekOreA",
    groupId: 28895,
    uberId: 39291,
  },
  {
    id: "baursReachGroup.xpOrbB",
    groupId: 28895,
    uberId: 40089,
  },
  {
    id: "baursReachGroup.xpOrbC",
    groupId: 28895,
    uberId: 40242,
  },
  {
    id: "baursReachGroup.healthCellA",
    groupId: 28895,
    uberId: 40744,
  },
  {
    id: "baursReachGroup.afterAvalancheRetalkPlayed",
    groupId: 28895,
    uberId: 41299,
  },
  {
    id: "baursReachGroup.hintZone",
    groupId: 28895,
    uberId: 41777,
  },
  {
    id: "baursReachGroup.enemyArenaComplete",
    groupId: 28895,
    uberId: 42209,
  },
  {
    id: "baursReachGroup.firePedestal",
    groupId: 28895,
    uberId: 43977,
  },
  {
    id: "baursReachGroup.xpOrbE",
    groupId: 28895,
    uberId: 45066,
  },
  {
    id: "baursReachGroup.largeXPOrbA",
    groupId: 28895,
    uberId: 45337,
  },
  {
    id: "baursReachGroup.firePedestalBooleanUberState",
    groupId: 28895,
    uberId: 46293,
  },
  {
    id: "baursReachGroup.xpOrbB",
    groupId: 28895,
    uberId: 46404,
  },
  {
    id: "baursReachGroup.xpOrbB",
    groupId: 28895,
    uberId: 46711,
  },
  {
    id: "baursReachGroup.breakableRocksI",
    groupId: 28895,
    uberId: 46875,
  },
  {
    id: "baursReachGroup.orePlaceholder",
    groupId: 28895,
    uberId: 47529,
  },
  {
    id: "baursReachGroup.creepA",
    groupId: 28895,
    uberId: 48186,
  },
  {
    id: "baursReachGroup.grenadeSwitchA",
    groupId: 28895,
    uberId: 48757,
  },
  {
    id: "baursReachGroup.breakyBridge",
    groupId: 28895,
    uberId: 49329,
  },
  {
    id: "baursReachGroup.keystoneGate",
    groupId: 28895,
    uberId: 49900,
  },
  {
    id: "baursReachGroup.breakableRocksB",
    groupId: 28895,
    uberId: 49997,
  },
  {
    id: "baursReachGroup.keystoneD",
    groupId: 28895,
    uberId: 50368,
  },
  {
    id: "baursReachGroup.blowableFlameB",
    groupId: 28895,
    uberId: 51471,
  },
  {
    id: "baursReachGroup.healthHalfContainer",
    groupId: 28895,
    uberId: 51853,
  },
  {
    id: "baursReachGroup.kindledFire",
    groupId: 28895,
    uberId: 52440,
  },
  {
    id: "baursReachGroup.seenLoremasterMenu",
    groupId: 28895,
    uberId: 53166,
  },
  {
    id: "baursReachGroup.xpOrbC",
    groupId: 28895,
    uberId: 53283,
  },
  {
    id: "baursReachGroup.smallXPOrbA",
    groupId: 28895,
    uberId: 54373,
  },
  {
    id: "baursReachGroup.smallXPOrbA",
    groupId: 28895,
    uberId: 55384,
  },
  {
    id: "baursReachGroup.breakableWallA",
    groupId: 28895,
    uberId: 56062,
  },
  {
    id: "baursReachGroup.secretWallBaur",
    groupId: 28895,
    uberId: 57743,
  },
  {
    id: "baursReachGroup.doorOpened",
    groupId: 28895,
    uberId: 58337,
  },
  {
    id: "baursReachGroup.gorlekOreA",
    groupId: 28895,
    uberId: 58675,
  },
  {
    id: "baursReachGroup.expOrbA",
    groupId: 28895,
    uberId: 58848,
  },
  {
    id: "baursReachGroup.talkedToSleepingBaur",
    groupId: 28895,
    uberId: 59287,
  },
  {
    id: "baursReachGroup.grenadeSwitchA",
    groupId: 28895,
    uberId: 59394,
  },
  {
    id: "baursReachGroup.interactedWithCampfire",
    groupId: 28895,
    uberId: 59955,
  },
  {
    id: "baursReachGroup.xpOrbA",
    groupId: 28895,
    uberId: 61536,
  },
  {
    id: "baursReachGroup.firePedestalBooleanUberState",
    groupId: 28895,
    uberId: 61789,
  },
  {
    id: "baursReachGroup.frozenMokiIceBroken",
    groupId: 28895,
    uberId: 61852,
  },
  {
    id: "baursReachGroup.breakableRocksC",
    groupId: 28895,
    uberId: 61896,
  },
  {
    id: "baursReachGroup.afterGoldenSeinRetalkPlayed",
    groupId: 28895,
    uberId: 61976,
  },
  {
    id: "baursReachGroup.leverSetup",
    groupId: 28895,
    uberId: 62198,
  },
  {
    id: "baursReachGroup.breakableRocksD",
    groupId: 28895,
    uberId: 62643,
  },
  {
    id: "baursReachGroup.orePickup",
    groupId: 28895,
    uberId: 64226,
  },
  {
    id: "baursReachGroup.blowableFlameA",
    groupId: 28895,
    uberId: 64742,
  },
  {
    id: "baursReachGroup.mediumExpA",
    groupId: 28895,
    uberId: 65235,
  },
  {
    id: "baursReachGroup.savePedestalUberState",
    groupId: 28895,
    uberId: 18910,
  },
  {
    id: "baursReachGroup.savePedestalUberState",
    groupId: 28895,
    uberId: 54235,
  },
  {
    id: "baursReachGroup.interactedWithTokk",
    groupId: 28895,
    uberId: 13636,
  },
  {
    id: "baursReachGroup.baurNpcState",
    groupId: 28895,
    uberId: 29098,
  },
  {
    id: "baursReachGroup.mokiNpcState",
    groupId: 28895,
    uberId: 12170,
  },
  {
    id: "weepingRidgeElevatorFightGroup.willowsEndGateOpened",
    groupId: 31136,
    uberId: 3441,
  },
  {
    id: "weepingRidgeElevatorFightGroup.areaText",
    groupId: 31136,
    uberId: 59099,
  },
  {
    id: "achievementsGroup.spiritBladeCollected",
    groupId: 33399,
    uberId: 17893,
  },
  {
    id: "achievementsGroup.gotHitBySpider",
    groupId: 33399,
    uberId: 28382,
  },
  {
    id: "achievementsGroup.shardEverEquipped",
    groupId: 33399,
    uberId: 34522,
  },
  {
    id: "achievementsGroup.spiritLightEverSpent",
    groupId: 33399,
    uberId: 50709,
  },
  {
    id: "achievementsGroup.poisonousWaterTouched",
    groupId: 33399,
    uberId: 58955,
  },
  {
    id: "achievementsGroup.enemiesKilledByHazards",
    groupId: 33399,
    uberId: 17398,
  },
  {
    id: "achievementsGroup.spiritLightGainedCounter",
    groupId: 33399,
    uberId: 36285,
  },
  {
    id: "achievementsGroup.energyContainersCounter",
    groupId: 33399,
    uberId: 41928,
  },
  {
    id: "achievementsGroup.healthContainersCounter",
    groupId: 33399,
    uberId: 52378,
  },
  {
    id: "achievementsGroup.collectablesCounter",
    groupId: 33399,
    uberId: 61261,
  },
  {
    id: "gameStateGroup.gameFinished",
    groupId: 34543,
    uberId: 11226,
  },
  {
    id: "gameStateGroup.gameDifficultyMode",
    groupId: 34543,
    uberId: 30984,
  },
  {
    id: "corruptedPeakGroup.spineStateB",
    groupId: 36153,
    uberId: 2824,
  },
  {
    id: "corruptedPeakGroup.gorlekOreA",
    groupId: 36153,
    uberId: 3013,
  },
  {
    id: "corruptedPeakGroup.expOrbB",
    groupId: 36153,
    uberId: 3662,
  },
  {
    id: "corruptedPeakGroup.weepingRidgeGetChargeJump",
    groupId: 36153,
    uberId: 5369,
  },
  {
    id: "corruptedPeakGroup.mediumExpA",
    groupId: 36153,
    uberId: 5552,
  },
  {
    id: "corruptedPeakGroup.xpOrbA",
    groupId: 36153,
    uberId: 6682,
  },
  {
    id: "corruptedPeakGroup.spineStateA",
    groupId: 36153,
    uberId: 8434,
  },
  {
    id: "corruptedPeakGroup.xpOrbB",
    groupId: 36153,
    uberId: 12077,
  },
  {
    id: "corruptedPeakGroup.healthContainerA",
    groupId: 36153,
    uberId: 12457,
  },
  {
    id: "corruptedPeakGroup.pressurePlatePuzzleA",
    groupId: 36153,
    uberId: 14400,
  },
  {
    id: "corruptedPeakGroup.pressurePlatePuzzleB",
    groupId: 36153,
    uberId: 17818,
  },
  {
    id: "corruptedPeakGroup.mediumExpOrbPlaceholder",
    groupId: 36153,
    uberId: 18750,
  },
  {
    id: "corruptedPeakGroup.breakableWallD",
    groupId: 36153,
    uberId: 18883,
  },
  {
    id: "corruptedPeakGroup.spineStateC",
    groupId: 36153,
    uberId: 20307,
  },
  {
    id: "corruptedPeakGroup.breakableRockB",
    groupId: 36153,
    uberId: 22461,
  },
  {
    id: "corruptedPeakGroup.elevatorCompleteState",
    groupId: 36153,
    uberId: 23584,
  },
  {
    id: "corruptedPeakGroup.expOrbA",
    groupId: 36153,
    uberId: 23902,
  },
  {
    id: "corruptedPeakGroup.corruptedPeakSecretWallB",
    groupId: 36153,
    uberId: 25095,
  },
  {
    id: "corruptedPeakGroup.spellPickup",
    groupId: 36153,
    uberId: 30728,
  },
  {
    id: "corruptedPeakGroup.expOrb",
    groupId: 36153,
    uberId: 36521,
  },
  {
    id: "corruptedPeakGroup.spineStateD",
    groupId: 36153,
    uberId: 42305,
  },
  {
    id: "corruptedPeakGroup.expOrbC",
    groupId: 36153,
    uberId: 42589,
  },
  {
    id: "corruptedPeakGroup.corruptedPeakSecretWallA",
    groupId: 36153,
    uberId: 44835,
  },
  {
    id: "corruptedPeakGroup.breakableRockA",
    groupId: 36153,
    uberId: 47520,
  },
  {
    id: "corruptedPeakGroup.stompableFloorA",
    groupId: 36153,
    uberId: 48472,
  },
  {
    id: "corruptedPeakGroup.stomperStateB",
    groupId: 36153,
    uberId: 51042,
  },
  {
    id: "corruptedPeakGroup.expOrb",
    groupId: 36153,
    uberId: 53032,
  },
  {
    id: "corruptedPeakGroup.stompableFloorC",
    groupId: 36153,
    uberId: 55011,
  },
  {
    id: "corruptedPeakGroup.mediumExpA",
    groupId: 36153,
    uberId: 56157,
  },
  {
    id: "corruptedPeakGroup.stompableFloorB",
    groupId: 36153,
    uberId: 57716,
  },
  {
    id: "corruptedPeakGroup.breakableWall",
    groupId: 36153,
    uberId: 60795,
  },
  {
    id: "corruptedPeakGroup.stomperStateA",
    groupId: 36153,
    uberId: 62883,
  },
  {
    id: "corruptedPeakGroup.savePedestalUberState",
    groupId: 36153,
    uberId: 43597,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillSecretWallADestroyedArt",
    groupId: 37858,
    uberId: 2615,
  },
  {
    id: "waterMillStateGroupDescriptor.smallExpOrb",
    groupId: 37858,
    uberId: 2797,
  },
  {
    id: "waterMillStateGroupDescriptor.hornbugBreakWall",
    groupId: 37858,
    uberId: 3421,
  },
  {
    id: "waterMillStateGroupDescriptor.shardSlotUpgrade",
    groupId: 37858,
    uberId: 3685,
  },
  {
    id: "waterMillStateGroupDescriptor.dashDoor",
    groupId: 37858,
    uberId: 6338,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 8344,
  },
  {
    id: "waterMillStateGroupDescriptor.exitDoorOpen",
    groupId: 37858,
    uberId: 9487,
  },
  {
    id: "waterMillStateGroupDescriptor.orePickupA",
    groupId: 37858,
    uberId: 11418,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillBossRoomBarrierOpen",
    groupId: 37858,
    uberId: 11772,
  },
  {
    id: "waterMillStateGroupDescriptor.finishedWatermillEscape",
    groupId: 37858,
    uberId: 12379,
  },
  {
    id: "waterMillStateGroupDescriptor.displayedFlingHint",
    groupId: 37858,
    uberId: 13968,
  },
  {
    id: "waterMillStateGroupDescriptor.spiritShardA",
    groupId: 37858,
    uberId: 15961,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillEntranceFallingDiscUberStateDescriptor",
    groupId: 37858,
    uberId: 16604,
  },
  {
    id: "waterMillStateGroupDescriptor.expOrbA",
    groupId: 37858,
    uberId: 16611,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 19347,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillSecretWallBDestroyed",
    groupId: 37858,
    uberId: 21874,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 22107,
  },
  {
    id: "waterMillStateGroupDescriptor.playedNaruGumoCutaway",
    groupId: 37858,
    uberId: 23225,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillEntranceDoorUberStateDescriptor",
    groupId: 37858,
    uberId: 23644,
  },
  {
    id: "waterMillStateGroupDescriptor.rescuedOpher",
    groupId: 37858,
    uberId: 25031,
  },
  {
    id: "waterMillStateGroupDescriptor.healthContainerA",
    groupId: 37858,
    uberId: 25833,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillVisited",
    groupId: 37858,
    uberId: 26885,
  },
  {
    id: "waterMillStateGroupDescriptor.poleLowered",
    groupId: 37858,
    uberId: 31104,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 31136,
  },
  {
    id: "waterMillStateGroupDescriptor.recedingWater",
    groupId: 37858,
    uberId: 31187,
  },
  {
    id: "waterMillStateGroupDescriptor.wheelsActivated",
    groupId: 37858,
    uberId: 31584,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillBEntranceTriggerUberStateDescriptor",
    groupId: 37858,
    uberId: 31962,
  },
  {
    id: "waterMillStateGroupDescriptor.doorWithTwoSlotsBooleanDescriptor",
    groupId: 37858,
    uberId: 31966,
  },
  {
    id: "waterMillStateGroupDescriptor.keystoneA",
    groupId: 37858,
    uberId: 32628,
  },
  {
    id: "waterMillStateGroupDescriptor.gorlekOreA",
    groupId: 37858,
    uberId: 32932,
  },
  {
    id: "waterMillStateGroupDescriptor.xpOrbA",
    groupId: 37858,
    uberId: 33063,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpB",
    groupId: 37858,
    uberId: 33642,
  },
  {
    id: "waterMillStateGroupDescriptor.wheelLever",
    groupId: 37858,
    uberId: 34433,
  },
  {
    id: "waterMillStateGroupDescriptor.enemyDoor",
    groupId: 37858,
    uberId: 34619,
  },
  {
    id: "waterMillStateGroupDescriptor.spiritShardA",
    groupId: 37858,
    uberId: 34646,
  },
  {
    id: "waterMillStateGroupDescriptor.enemyDoorA",
    groupId: 37858,
    uberId: 37323,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 41380,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpB",
    groupId: 37858,
    uberId: 41911,
  },
  {
    id: "waterMillStateGroupDescriptor.keystoneA",
    groupId: 37858,
    uberId: 43893,
  },
  {
    id: "waterMillStateGroupDescriptor.xpOrbWater",
    groupId: 37858,
    uberId: 45656,
  },
  {
    id: "waterMillStateGroupDescriptor.smallExpA",
    groupId: 37858,
    uberId: 45906,
  },
  {
    id: "waterMillStateGroupDescriptor.gorlekOraA",
    groupId: 37858,
    uberId: 47533,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpC",
    groupId: 37858,
    uberId: 50064,
  },
  {
    id: "waterMillStateGroupDescriptor.watermillEntranceTalkedToOpher",
    groupId: 37858,
    uberId: 50780,
  },
  {
    id: "waterMillStateGroupDescriptor.wheelAActive",
    groupId: 37858,
    uberId: 50902,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpB",
    groupId: 37858,
    uberId: 52110,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillBossRoomWheelFelt",
    groupId: 37858,
    uberId: 52129,
  },
  {
    id: "waterMillStateGroupDescriptor.hintZone",
    groupId: 37858,
    uberId: 54231,
  },
  {
    id: "waterMillStateGroupDescriptor.xpOrbA",
    groupId: 37858,
    uberId: 55450,
  },
  {
    id: "waterMillStateGroupDescriptor.expOrbB",
    groupId: 37858,
    uberId: 55499,
  },
  {
    id: "waterMillStateGroupDescriptor.xpOrb",
    groupId: 37858,
    uberId: 56444,
  },
  {
    id: "waterMillStateGroupDescriptor.energyVessel",
    groupId: 37858,
    uberId: 57552,
  },
  {
    id: "waterMillStateGroupDescriptor.arenaWheelsActivated",
    groupId: 37858,
    uberId: 58000,
  },
  {
    id: "waterMillStateGroupDescriptor.smallExpAArt",
    groupId: 37858,
    uberId: 58220,
  },
  {
    id: "waterMillStateGroupDescriptor.gorlekOreA",
    groupId: 37858,
    uberId: 58286,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillSecretWallADestroyedArtB",
    groupId: 37858,
    uberId: 58736,
  },
  {
    id: "waterMillStateGroupDescriptor.gorlekOreB",
    groupId: 37858,
    uberId: 58846,
  },
  {
    id: "waterMillStateGroupDescriptor.shardSlotExpansion",
    groupId: 37858,
    uberId: 58947,
  },
  {
    id: "waterMillStateGroupDescriptor.mediumExpA",
    groupId: 37858,
    uberId: 59022,
  },
  {
    id: "waterMillStateGroupDescriptor.wheelBActive",
    groupId: 37858,
    uberId: 60716,
  },
  {
    id: "waterMillStateGroupDescriptor.waterMillSecretWallADestroyed",
    groupId: 37858,
    uberId: 61481,
  },
  {
    id: "waterMillStateGroupDescriptor.wheelsActivatedEntry",
    groupId: 37858,
    uberId: 64055,
  },
  {
    id: "waterMillStateGroupDescriptor.expOrb",
    groupId: 37858,
    uberId: 64086,
  },
  {
    id: "waterMillStateGroupDescriptor.spiritShardA",
    groupId: 37858,
    uberId: 64961,
  },
  {
    id: "waterMillStateGroupDescriptor.lifeCellA",
    groupId: 37858,
    uberId: 65187,
  },
  {
    id: "waterMillStateGroupDescriptor.rotatingEnemyArenaStates",
    groupId: 37858,
    uberId: 8487,
  },
  {
    id: "waterMillStateGroupDescriptor.watermillEscapeState",
    groupId: 37858,
    uberId: 10720,
  },
  {
    id: "waterMillStateGroupDescriptor.rotatingEnemyArenaRotationStateController",
    groupId: 37858,
    uberId: 34636,
  },
  {
    id: "waterMillStateGroupDescriptor.rotationState",
    groupId: 37858,
    uberId: 36070,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbsARespawnTimer",
    groupId: 37858,
    uberId: 5107,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 8675,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 17790,
  },
  {
    id: "waterMillStateGroupDescriptor.healthPlantB",
    groupId: 37858,
    uberId: 22902,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbsA",
    groupId: 37858,
    uberId: 24680,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 28311,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 38044,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 44551,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbsARespawnTimerB",
    groupId: 37858,
    uberId: 48554,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 54186,
  },
  {
    id: "waterMillStateGroupDescriptor.healthPlant",
    groupId: 37858,
    uberId: 57762,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbsB",
    groupId: 37858,
    uberId: 60777,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 61727,
  },
  {
    id: "waterMillStateGroupDescriptor.landOnAndSpawnOrbs",
    groupId: 37858,
    uberId: 62404,
  },
  {
    id: "spiderBatTestGroup.roundOneDefeated",
    groupId: 42171,
    uberId: 14000,
  },
  {
    id: "spiderBatTestGroup.arenaDoorClosed",
    groupId: 42171,
    uberId: 26771,
  },
  {
    id: "spiderBatTestGroup.allRoundsDefeated",
    groupId: 42171,
    uberId: 32228,
  },
  {
    id: "spiderBatTestGroup.roundTwoDefeated",
    groupId: 42171,
    uberId: 43227,
  },
  {
    id: "spiderBatTestGroup.roundThreeDefeated",
    groupId: 42171,
    uberId: 56229,
  },
  {
    id: "spiderBatTestGroup.enemyArenaState",
    groupId: 42171,
    uberId: 53383,
  },
  {
    id: "hubUberStateGroup.leafPileB",
    groupId: 42178,
    uberId: 3295,
  },
  {
    id: "hubUberStateGroup.mediumExpD",
    groupId: 42178,
    uberId: 4125,
  },
  {
    id: "hubUberStateGroup.leafPileC",
    groupId: 42178,
    uberId: 5630,
  },
  {
    id: "hubUberStateGroup.stompableFloorEnterHub",
    groupId: 42178,
    uberId: 5815,
  },
  {
    id: "hubUberStateGroup.mediumExpG",
    groupId: 42178,
    uberId: 6117,
  },
  {
    id: "hubUberStateGroup.woodCrateC",
    groupId: 42178,
    uberId: 9319,
  },
  {
    id: "hubUberStateGroup.mediumExpE",
    groupId: 42178,
    uberId: 9780,
  },
  {
    id: "hubUberStateGroup.leafPileA",
    groupId: 42178,
    uberId: 10035,
  },
  {
    id: "hubUberStateGroup.hutBExpOrb",
    groupId: 42178,
    uberId: 13327,
  },
  {
    id: "hubUberStateGroup.mediumExpA",
    groupId: 42178,
    uberId: 14903,
  },
  {
    id: "hubUberStateGroup.woodCrateA",
    groupId: 42178,
    uberId: 15685,
  },
  {
    id: "hubUberStateGroup.woodCrateC",
    groupId: 42178,
    uberId: 17158,
  },
  {
    id: "hubUberStateGroup.smallExpE",
    groupId: 42178,
    uberId: 17489,
  },
  {
    id: "hubUberStateGroup.drillableWallB",
    groupId: 42178,
    uberId: 17732,
  },
  {
    id: "hubUberStateGroup.mediumExpF",
    groupId: 42178,
    uberId: 18448,
  },
  {
    id: "hubUberStateGroup.areaText",
    groupId: 42178,
    uberId: 19692,
  },
  {
    id: "hubUberStateGroup.woodCrateE",
    groupId: 42178,
    uberId: 21105,
  },
  {
    id: "hubUberStateGroup.gorlekOreA",
    groupId: 42178,
    uberId: 23125,
  },
  {
    id: "hubUberStateGroup.hubSpritWellIconVisible",
    groupId: 42178,
    uberId: 23193,
  },
  {
    id: "hubUberStateGroup.woodCrateC",
    groupId: 42178,
    uberId: 26189,
  },
  {
    id: "hubUberStateGroup.woodCrateA",
    groupId: 42178,
    uberId: 26365,
  },
  {
    id: "hubUberStateGroup.gorlekOreB",
    groupId: 42178,
    uberId: 27110,
  },
  {
    id: "hubUberStateGroup.warpHintShowed",
    groupId: 42178,
    uberId: 27777,
  },
  {
    id: "hubUberStateGroup.smallExpA",
    groupId: 42178,
    uberId: 30206,
  },
  {
    id: "hubUberStateGroup.hutDExpOrbB",
    groupId: 42178,
    uberId: 30520,
  },
  {
    id: "hubUberStateGroup.drillableWallA",
    groupId: 42178,
    uberId: 31795,
  },
  {
    id: "hubUberStateGroup.smallExpD",
    groupId: 42178,
    uberId: 35232,
  },
  {
    id: "hubUberStateGroup.woodCrateE",
    groupId: 42178,
    uberId: 35855,
  },
  {
    id: "hubUberStateGroup.mediumExpA",
    groupId: 42178,
    uberId: 36085,
  },
  {
    id: "hubUberStateGroup.woodCrateD",
    groupId: 42178,
    uberId: 36464,
  },
  {
    id: "hubUberStateGroup.fatherMokiGone",
    groupId: 42178,
    uberId: 36609,
  },
  {
    id: "hubUberStateGroup.smallExpB",
    groupId: 42178,
    uberId: 37028,
  },
  {
    id: "hubUberStateGroup.mediumExpC",
    groupId: 42178,
    uberId: 38743,
  },
  {
    id: "hubUberStateGroup.pyreA",
    groupId: 42178,
    uberId: 38905,
  },
  {
    id: "hubUberStateGroup.mediumExpB",
    groupId: 42178,
    uberId: 40609,
  },
  {
    id: "hubUberStateGroup.smallExpH",
    groupId: 42178,
    uberId: 42762,
  },
  {
    id: "hubUberStateGroup.smallExpG",
    groupId: 42178,
    uberId: 44748,
  },
  {
    id: "hubUberStateGroup.woodCrateB",
    groupId: 42178,
    uberId: 47152,
  },
  {
    id: "hubUberStateGroup.woodCrateA",
    groupId: 42178,
    uberId: 50325,
  },
  {
    id: "hubUberStateGroup.gromIntroSequencePlayed",
    groupId: 42178,
    uberId: 50418,
  },
  {
    id: "hubUberStateGroup.woodCrateB",
    groupId: 42178,
    uberId: 51080,
  },
  {
    id: "hubUberStateGroup.hutAExpOrb",
    groupId: 42178,
    uberId: 51468,
  },
  {
    id: "hubUberStateGroup.hutEExpOrb",
    groupId: 42178,
    uberId: 51934,
  },
  {
    id: "hubUberStateGroup.hutDExpOrb",
    groupId: 42178,
    uberId: 52497,
  },
  {
    id: "hubUberStateGroup.energyCellA",
    groupId: 42178,
    uberId: 52786,
  },
  {
    id: "hubUberStateGroup.woodCrateD",
    groupId: 42178,
    uberId: 56980,
  },
  {
    id: "hubUberStateGroup.hutCExpOrb",
    groupId: 42178,
    uberId: 57455,
  },
  {
    id: "hubUberStateGroup.largeExpA",
    groupId: 42178,
    uberId: 57675,
  },
  {
    id: "hubUberStateGroup.mediumExpB",
    groupId: 42178,
    uberId: 59623,
  },
  {
    id: "hubUberStateGroup.woodCrateB",
    groupId: 42178,
    uberId: 63260,
  },
  {
    id: "hubUberStateGroup.smallExpC",
    groupId: 42178,
    uberId: 63404,
  },
  {
    id: "hubUberStateGroup.woodCrateF",
    groupId: 42178,
    uberId: 63819,
  },
  {
    id: "hubUberStateGroup.savePedestal",
    groupId: 42178,
    uberId: 42096,
  },
  {
    id: "hubUberStateGroup.shardPurchaseCount",
    groupId: 42178,
    uberId: 38,
  },
  {
    id: "hubUberStateGroup.craftCutsceneState",
    groupId: 42178,
    uberId: 2654,
  },
  {
    id: "hubUberStateGroup.builderProjectShardShop",
    groupId: 42178,
    uberId: 7528,
  },
  {
    id: "hubUberStateGroup.builderProjectBeautify",
    groupId: 42178,
    uberId: 15068,
  },
  {
    id: "hubUberStateGroup.gardenerProjectFlowers",
    groupId: 42178,
    uberId: 16254,
  },
  {
    id: "hubUberStateGroup.builderProjectOpenCave",
    groupId: 42178,
    uberId: 16586,
  },
  {
    id: "hubUberStateGroup.builderProjectSpiritWell",
    groupId: 42178,
    uberId: 16825,
  },
  {
    id: "hubUberStateGroup.builderProjectRemoveThorns",
    groupId: 42178,
    uberId: 18751,
  },
  {
    id: "hubUberStateGroup.builderProjectHousesB",
    groupId: 42178,
    uberId: 23607,
  },
  {
    id: "hubUberStateGroup.gardenerProjectGrapplePlants",
    groupId: 42178,
    uberId: 33011,
  },
  {
    id: "hubUberStateGroup.gardenerProjectSpringPlants",
    groupId: 42178,
    uberId: 38393,
  },
  {
    id: "hubUberStateGroup.gardenerProjectTree",
    groupId: 42178,
    uberId: 40006,
  },
  {
    id: "hubUberStateGroup.builderProjectHousesC",
    groupId: 42178,
    uberId: 40448,
  },
  {
    id: "hubUberStateGroup.gardenerProjectBashPlants",
    groupId: 42178,
    uberId: 47651,
  },
  {
    id: "hubUberStateGroup.builderProjectHouses",
    groupId: 42178,
    uberId: 51230,
  },
  {
    id: "hubUberStateGroup.shardShopState",
    groupId: 42178,
    uberId: 61304,
  },
  {
    id: "hubUberStateGroup.gardenerProjectGrass",
    groupId: 42178,
    uberId: 64583,
  },
  {
    id: "wellspringGladesGroup.stompableFloorC",
    groupId: 44310,
    uberId: 125,
  },
  {
    id: "wellspringGladesGroup.smallExpA",
    groupId: 44310,
    uberId: 1647,
  },
  {
    id: "wellspringGladesGroup.shardSlotUpgrade",
    groupId: 44310,
    uberId: 9902,
  },
  {
    id: "wellspringGladesGroup.shardTraderState",
    groupId: 44310,
    uberId: 15689,
  },
  {
    id: "wellspringGladesGroup.lifeVesselB",
    groupId: 44310,
    uberId: 17523,
  },
  {
    id: "wellspringGladesGroup.lifeVesselA",
    groupId: 44310,
    uberId: 29043,
  },
  {
    id: "wellspringGladesGroup.lifeVesselA",
    groupId: 44310,
    uberId: 36911,
  },
  {
    id: "wellspringGladesGroup.blowableFlame",
    groupId: 44310,
    uberId: 47361,
  },
  {
    id: "wellspringGladesGroup.largeExpA",
    groupId: 44310,
    uberId: 47723,
  },
  {
    id: "wellspringGladesGroup.mediumExpA",
    groupId: 44310,
    uberId: 47923,
  },
  {
    id: "wellspringGladesGroup.stompableFloorA",
    groupId: 44310,
    uberId: 55192,
  },
  {
    id: "wellspringGladesGroup.stompableFloorB",
    groupId: 44310,
    uberId: 57009,
  },
  {
    id: "wellspringGladesGroup.shrineEnemyRoom",
    groupId: 44310,
    uberId: 58796,
  },
  {
    id: "raceGroup.firstRaceUnlockedMessagePlayed",
    groupId: 44964,
    uberId: 8328,
  },
  {
    id: "raceGroup.wellspringRaceIcon",
    groupId: 44964,
    uberId: 12682,
  },
  {
    id: "raceGroup.baursReachWindTunnelRaceIcon",
    groupId: 44964,
    uberId: 33045,
  },
  {
    id: "raceGroup.silentWoodlandRaceIcon",
    groupId: 44964,
    uberId: 34110,
  },
  {
    id: "raceGroup.desertRaceIcon",
    groupId: 44964,
    uberId: 38162,
  },
  {
    id: "raceGroup.mouldwoodDepthsRaceIcon",
    groupId: 44964,
    uberId: 40578,
  },
  {
    id: "raceGroup.inkwaterMarshRaceIcon",
    groupId: 44964,
    uberId: 50495,
  },
  {
    id: "raceGroup.lumaPoolsRaceIcon",
    groupId: 44964,
    uberId: 56533,
  },
  {
    id: "raceGroup.kwolokDropRaceIcon",
    groupId: 44964,
    uberId: 63031,
  },
  {
    id: "raceGroup.raceLeaderboardFilterState",
    groupId: 44964,
    uberId: 3798,
  },
  {
    id: "raceGroup.wellspringRace",
    groupId: 44964,
    uberId: 11512,
  },
  {
    id: "raceGroup.silentWoodlandRace",
    groupId: 44964,
    uberId: 22703,
  },
  {
    id: "raceGroup.baursReachWindTunnelRace",
    groupId: 44964,
    uberId: 23661,
  },
  {
    id: "raceGroup.kwolokDropRace",
    groupId: 44964,
    uberId: 25545,
  },
  {
    id: "raceGroup.mouldwoodDepthsRace",
    groupId: 44964,
    uberId: 28552,
  },
  {
    id: "raceGroup.desertRace",
    groupId: 44964,
    uberId: 30767,
  },
  {
    id: "raceGroup.inkwaterMarshRace",
    groupId: 44964,
    uberId: 45951,
  },
  {
    id: "raceGroup.testRace",
    groupId: 44964,
    uberId: 50634,
  },
  {
    id: "raceGroup.lumaPoolsRace",
    groupId: 44964,
    uberId: 54686,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.mediumExpA",
    groupId: 46462,
    uberId: 3872,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.spiritShardA",
    groupId: 46462,
    uberId: 9440,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.interactedWithMourningMoki",
    groupId: 46462,
    uberId: 20733,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.smallExpA",
    groupId: 46462,
    uberId: 20780,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.bombableDoor",
    groupId: 46462,
    uberId: 26623,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.largeExpA",
    groupId: 46462,
    uberId: 29054,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.leafPileA",
    groupId: 46462,
    uberId: 31447,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.questRewardOrb",
    groupId: 46462,
    uberId: 31575,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.bombableWallA",
    groupId: 46462,
    uberId: 34885,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.gorlekOreA",
    groupId: 46462,
    uberId: 37897,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.leafPileC",
    groupId: 46462,
    uberId: 56958,
  },
  {
    id: "kwoloksCavernThroneRoomGroup.wispRewardPickup",
    groupId: 46462,
    uberId: 59806,
  },
  {
    id: "npcsStateGroup.windtornRuinsWispTeaser",
    groupId: 48248,
    uberId: 1350,
  },
  {
    id: "npcsStateGroup.hasMapLumaPools",
    groupId: 48248,
    uberId: 1557,
  },
  {
    id: "npcsStateGroup.hasMapWellspring",
    groupId: 48248,
    uberId: 1590,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWeepingRidge",
    groupId: 48248,
    uberId: 2253,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWellspringGlades",
    groupId: 48248,
    uberId: 2285,
  },
  {
    id: "npcsStateGroup.treekeeperBRetalk",
    groupId: 48248,
    uberId: 3492,
  },
  {
    id: "npcsStateGroup.hasMapKwoloksHollow",
    groupId: 48248,
    uberId: 3638,
  },
  {
    id: "npcsStateGroup.stenchTease",
    groupId: 48248,
    uberId: 3846,
  },
  {
    id: "npcsStateGroup.hasMapWillowsEnd",
    groupId: 48248,
    uberId: 4045,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWellspringAfterQuest",
    groupId: 48248,
    uberId: 4306,
  },
  {
    id: "npcsStateGroup.lupoWantsToTalkToYou",
    groupId: 48248,
    uberId: 4510,
  },
  {
    id: "npcsStateGroup.tuleyMentionedSeed",
    groupId: 48248,
    uberId: 5060,
  },
  {
    id: "npcsStateGroup.gromMentionedOre",
    groupId: 48248,
    uberId: 5186,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispE",
    groupId: 48248,
    uberId: 5269,
  },
  {
    id: "npcsStateGroup.metOpherHubAfterWatermill",
    groupId: 48248,
    uberId: 5982,
  },
  {
    id: "npcsStateGroup.twillenGaveRumor",
    groupId: 48248,
    uberId: 6194,
  },
  {
    id: "npcsStateGroup.interactedWindsweptWastesCondition",
    groupId: 48248,
    uberId: 6730,
  },
  {
    id: "npcsStateGroup.lupoEncounteredSilentWoodlands",
    groupId: 48248,
    uberId: 6992,
  },
  {
    id: "npcsStateGroup.lupoEncounteredMouldwoodDepths",
    groupId: 48248,
    uberId: 7056,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispA",
    groupId: 48248,
    uberId: 7160,
  },
  {
    id: "npcsStateGroup.gromTalkedAboutBaur",
    groupId: 48248,
    uberId: 7321,
  },
  {
    id: "npcsStateGroup.gromGaveWarning",
    groupId: 48248,
    uberId: 7646,
  },
  {
    id: "npcsStateGroup.willowsEndSeirExitCutscene",
    groupId: 48248,
    uberId: 8985,
  },
  {
    id: "npcsStateGroup.metGrom",
    groupId: 48248,
    uberId: 9394,
  },
  {
    id: "npcsStateGroup.hasMapGorlekMines",
    groupId: 48248,
    uberId: 9750,
  },
  {
    id: "npcsStateGroup.mouldwoodDepthWispTeaser",
    groupId: 48248,
    uberId: 11223,
  },
  {
    id: "npcsStateGroup.lupoEncounteredBaursReach",
    groupId: 48248,
    uberId: 12352,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispD",
    groupId: 48248,
    uberId: 13320,
  },
  {
    id: "npcsStateGroup.interactedAfterWellOpened",
    groupId: 48248,
    uberId: 14878,
  },
  {
    id: "npcsStateGroup.hasMapWindtornRuins",
    groupId: 48248,
    uberId: 14995,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispB",
    groupId: 48248,
    uberId: 15833,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWillowsEnd",
    groupId: 48248,
    uberId: 16157,
  },
  {
    id: "npcsStateGroup.lumaPoolsWispSpotted",
    groupId: 48248,
    uberId: 18425,
  },
  {
    id: "npcsStateGroup.hasMapInkwaterMarsh",
    groupId: 48248,
    uberId: 18767,
  },
  {
    id: "npcsStateGroup.kiiWantsToTalkToYou",
    groupId: 48248,
    uberId: 19551,
  },
  {
    id: "npcsStateGroup.Has bought everything",
    groupId: 48248,
    uberId: 20000,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWellspringValley",
    groupId: 48248,
    uberId: 21009,
  },
  {
    id: "npcsStateGroup.metOpherLibrary",
    groupId: 48248,
    uberId: 22890,
  },
  {
    id: "npcsStateGroup.motayWantsToTalkToYou",
    groupId: 48248,
    uberId: 24328,
  },
  {
    id: "npcsStateGroup.tokkWantsToTalkToYou",
    groupId: 48248,
    uberId: 25629,
  },
  {
    id: "npcsStateGroup.lupoEncounteredKwoloksHollow",
    groupId: 48248,
    uberId: 26627,
  },
  {
    id: "npcsStateGroup.lupoEncounteredGorlekMines",
    groupId: 48248,
    uberId: 27701,
  },
  {
    id: "npcsStateGroup.tuleyWantsToTalkToYou",
    groupId: 48248,
    uberId: 28327,
  },
  {
    id: "npcsStateGroup.windsweptWastesRuinsDoor",
    groupId: 48248,
    uberId: 28782,
  },
  {
    id: "npcsStateGroup.hasMapBaursReach",
    groupId: 48248,
    uberId: 29604,
  },
  {
    id: "npcsStateGroup.gromTalkedAboutLagoon",
    groupId: 48248,
    uberId: 30073,
  },
  {
    id: "npcsStateGroup.interactedKwoloksCavern",
    groupId: 48248,
    uberId: 32549,
  },
  {
    id: "npcsStateGroup.baurReachWispTease",
    groupId: 48248,
    uberId: 32918,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWindsweptWastes",
    groupId: 48248,
    uberId: 34318,
  },
  {
    id: "npcsStateGroup.twillenMournedKu",
    groupId: 48248,
    uberId: 34756,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWindtornRuins",
    groupId: 48248,
    uberId: 35651,
  },
  {
    id: "npcsStateGroup.mouldwoodDepthsWisptIntro",
    groupId: 48248,
    uberId: 37364,
  },
  {
    id: "npcsStateGroup.hasMapWeepingRidge",
    groupId: 48248,
    uberId: 37481,
  },
  {
    id: "npcsStateGroup.treekeeperARetalk",
    groupId: 48248,
    uberId: 37606,
  },
  {
    id: "npcsStateGroup.lupoEncounteredUberState",
    groupId: 48248,
    uberId: 40170,
  },
  {
    id: "npcsStateGroup.baurReachWispIntro",
    groupId: 48248,
    uberId: 40451,
  },
  {
    id: "npcsStateGroup.lupoEncounteredBaursReachAfterThaw",
    groupId: 48248,
    uberId: 41206,
  },
  {
    id: "npcsStateGroup.tokkIntroduced",
    groupId: 48248,
    uberId: 42584,
  },
  {
    id: "npcsStateGroup.gromWantsToTalkToYou",
    groupId: 48248,
    uberId: 43860,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispF",
    groupId: 48248,
    uberId: 44446,
  },
  {
    id: "npcsStateGroup.hasMapHowlsOrigin",
    groupId: 48248,
    uberId: 45538,
  },
  {
    id: "npcsStateGroup.willowsEndSeirIntro",
    groupId: 48248,
    uberId: 45600,
  },
  {
    id: "npcsStateGroup.interactedBeforeMill",
    groupId: 48248,
    uberId: 45664,
  },
  {
    id: "npcsStateGroup.gromTalkedAboutDesert",
    groupId: 48248,
    uberId: 45751,
  },
  {
    id: "npcsStateGroup.gromTalkedAboutMouldwoodGate",
    groupId: 48248,
    uberId: 46471,
  },
  {
    id: "npcsStateGroup.opherMentiodedWatermill",
    groupId: 48248,
    uberId: 46745,
  },
  {
    id: "npcsStateGroup.gromInteractedOnce",
    groupId: 48248,
    uberId: 46863,
  },
  {
    id: "npcsStateGroup.hasMapWellspringValley",
    groupId: 48248,
    uberId: 47517,
  },
  {
    id: "npcsStateGroup.lupoEncounteredHowlsOrigin",
    groupId: 48248,
    uberId: 47546,
  },
  {
    id: "npcsStateGroup.feedingGroundsWispIntro",
    groupId: 48248,
    uberId: 47785,
  },
  {
    id: "npcsStateGroup.hasMapMouldwoodDepths",
    groupId: 48248,
    uberId: 48423,
  },
  {
    id: "npcsStateGroup.lupoEncounteredInkwaterMarsh",
    groupId: 48248,
    uberId: 48619,
  },
  {
    id: "npcsStateGroup.interactedBeforeKwolok",
    groupId: 48248,
    uberId: 50408,
  },
  {
    id: "npcsStateGroup.opherWantsToTalkToYou",
    groupId: 48248,
    uberId: 51005,
  },
  {
    id: "npcsStateGroup.desertRuinsLoreWispC",
    groupId: 48248,
    uberId: 52065,
  },
  {
    id: "npcsStateGroup.metMotay",
    groupId: 48248,
    uberId: 53028,
  },
  {
    id: "npcsStateGroup.hasMapWellspringGlades",
    groupId: 48248,
    uberId: 54647,
  },
  {
    id: "npcsStateGroup.gromTalkedAboutWatermill",
    groupId: 48248,
    uberId: 54806,
  },
  {
    id: "npcsStateGroup.metOpherHubBeforeWatermill",
    groupId: 48248,
    uberId: 55122,
  },
  {
    id: "npcsStateGroup.lupoEncounteredLumaPools",
    groupId: 48248,
    uberId: 55617,
  },
  {
    id: "npcsStateGroup.metOpherHub",
    groupId: 48248,
    uberId: 56448,
  },
  {
    id: "npcsStateGroup.twilenWantsToTalkToYou",
    groupId: 48248,
    uberId: 60805,
  },
  {
    id: "npcsStateGroup.hasMapWindsweptWastes",
    groupId: 48248,
    uberId: 61146,
  },
  {
    id: "npcsStateGroup.hasMapSilentWoodlands",
    groupId: 48248,
    uberId: 61819,
  },
  {
    id: "npcsStateGroup.lupoEncounteredWellspring",
    groupId: 48248,
    uberId: 61868,
  },
  {
    id: "npcsStateGroup.tokkLagoonDialogState",
    groupId: 48248,
    uberId: 2131,
  },
  {
    id: "npcsStateGroup.talkedInHub",
    groupId: 48248,
    uberId: 10337,
  },
  {
    id: "npcsStateGroup.twillenHubDialogState",
    groupId: 48248,
    uberId: 12799,
  },
  {
    id: "npcsStateGroup.inkwaterWellQuest",
    groupId: 48248,
    uberId: 18458,
  },
  {
    id: "npcsStateGroup.HCMapIconCost",
    groupId: 48248,
    uberId: 19397,
  },
  {
    id: "npcsStateGroup.twillenKwolokDialogState",
    groupId: 48248,
    uberId: 25267,
  },
  {
    id: "npcsStateGroup.watermillCEntranceInteraction",
    groupId: 48248,
    uberId: 26696,
  },
  {
    id: "npcsStateGroup.childMokiDialogState",
    groupId: 48248,
    uberId: 28897,
  },
  {
    id: "npcsStateGroup.wandererNeedleQuest",
    groupId: 48248,
    uberId: 32160,
  },
  {
    id: "npcsStateGroup.tokkKwolokDialogState",
    groupId: 48248,
    uberId: 33981,
  },
  {
    id: "npcsStateGroup.ShardMapIconCost",
    groupId: 48248,
    uberId: 41667,
  },
  {
    id: "npcsStateGroup.frozenMokiDialogState",
    groupId: 48248,
    uberId: 42865,
  },
  {
    id: "npcsStateGroup.marshKeystoneQuest",
    groupId: 48248,
    uberId: 51645,
  },
  {
    id: "npcsStateGroup.iceFisherDialogState",
    groupId: 48248,
    uberId: 54962,
  },
  {
    id: "npcsStateGroup.mouldwoodMokiDialogState",
    groupId: 48248,
    uberId: 57674,
  },
  {
    id: "npcsStateGroup.ECMapIconCost",
    groupId: 48248,
    uberId: 57988,
  },
  {
    id: "npcsStateGroup.lupoIntroState",
    groupId: 48248,
    uberId: 62835,
  },
  {
    id: "npcsStateGroup.tokkState",
    groupId: 48248,
    uberId: 15642,
  },
  {
    id: "npcsStateGroup.fastTravelEnabledUberState",
    groupId: 48248,
    uberId: 16489,
  },
  {
    id: "npcsStateGroup.mapmakerShowMapIconEnergyUberState",
    groupId: 48248,
    uberId: 19396,
  },
  {
    id: "npcsStateGroup.ShowMapIconCreepheartUberState",
    groupId: 48248,
    uberId: 38077,
  },
  {
    id: "npcsStateGroup.mapmakerShowMapIconShardUberState",
    groupId: 48248,
    uberId: 41666,
  },
  {
    id: "npcsStateGroup.mapmakerShowMapIconHealthUberState",
    groupId: 48248,
    uberId: 57987,
  },
  {
    id: "wellspringGroupDescriptor.energyVesselA",
    groupId: 53632,
    uberId: 1911,
  },
  {
    id: "wellspringGroupDescriptor.lanternAndCreepA",
    groupId: 53632,
    uberId: 2522,
  },
  {
    id: "wellspringGroupDescriptor.pushBlockPuzzleA",
    groupId: 53632,
    uberId: 3195,
  },
  {
    id: "wellspringGroupDescriptor.secretWallB",
    groupId: 53632,
    uberId: 3382,
  },
  {
    id: "wellspringGroupDescriptor.leafPileA",
    groupId: 53632,
    uberId: 3622,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpOrbPlaceholderG",
    groupId: 53632,
    uberId: 6500,
  },
  {
    id: "wellspringGroupDescriptor.energyVesselB",
    groupId: 53632,
    uberId: 6869,
  },
  {
    id: "wellspringGroupDescriptor.secretWallC",
    groupId: 53632,
    uberId: 9366,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpA",
    groupId: 53632,
    uberId: 12019,
  },
  {
    id: "wellspringGroupDescriptor.lifeVesselA",
    groupId: 53632,
    uberId: 17403,
  },
  {
    id: "wellspringGroupDescriptor.orePickupA",
    groupId: 53632,
    uberId: 21124,
  },
  {
    id: "wellspringGroupDescriptor.smallExpA",
    groupId: 53632,
    uberId: 21790,
  },
  {
    id: "wellspringGroupDescriptor.wispSequencePlayed",
    groupId: 53632,
    uberId: 22486,
  },
  {
    id: "wellspringGroupDescriptor.orePickupB",
    groupId: 53632,
    uberId: 25556,
  },
  {
    id: "wellspringGroupDescriptor.secretWallA",
    groupId: 53632,
    uberId: 25817,
  },
  {
    id: "wellspringGroupDescriptor.leafPileA",
    groupId: 53632,
    uberId: 32197,
  },
  {
    id: "wellspringGroupDescriptor.expOrbG",
    groupId: 53632,
    uberId: 32785,
  },
  {
    id: "wellspringGroupDescriptor.spiritShard",
    groupId: 53632,
    uberId: 33168,
  },
  {
    id: "wellspringGroupDescriptor.secretWallB",
    groupId: 53632,
    uberId: 40587,
  },
  {
    id: "wellspringGroupDescriptor.questItemCompass",
    groupId: 53632,
    uberId: 41227,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpOrbPlaceholderF",
    groupId: 53632,
    uberId: 42264,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpOrbPlaceholderE",
    groupId: 53632,
    uberId: 51706,
  },
  {
    id: "wellspringGroupDescriptor.secretWallA",
    groupId: 53632,
    uberId: 51735,
  },
  {
    id: "wellspringGroupDescriptor.xpOrbUberState",
    groupId: 53632,
    uberId: 54915,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpA",
    groupId: 53632,
    uberId: 56829,
  },
  {
    id: "wellspringGroupDescriptor.secretWallA",
    groupId: 53632,
    uberId: 58126,
  },
  {
    id: "wellspringGroupDescriptor.rotatingWheel",
    groupId: 53632,
    uberId: 61074,
  },
  {
    id: "wellspringGroupDescriptor.spiritShardA",
    groupId: 53632,
    uberId: 61128,
  },
  {
    id: "wellspringGroupDescriptor.mediumExpOrbPlaceholderC",
    groupId: 53632,
    uberId: 62356,
  },
  {
    id: "wellspringGroupDescriptor.secretWallA",
    groupId: 53632,
    uberId: 62781,
  },
  {
    id: "wellspringGroupDescriptor.secretWallA",
    groupId: 53632,
    uberId: 64763,
  },
  {
    id: "wellspringGroupDescriptor.savePedestal",
    groupId: 53632,
    uberId: 14947,
  },
  {
    id: "wellspringGroupDescriptor.savePedestalUberState",
    groupId: 53632,
    uberId: 18181,
  },
  {
    id: "wellspringGroupDescriptor.savePedestal",
    groupId: 53632,
    uberId: 53974,
  },
  {
    id: "wellspringGroupDescriptor.savePedestalUberState",
    groupId: 53632,
    uberId: 63074,
  },
  {
    id: "wellspringGroupDescriptor.showDoorCutsceneState",
    groupId: 53632,
    uberId: 26178,
  },
  {
    id: "prologueGroup.areaText",
    groupId: 54846,
    uberId: 27125,
  },
  {
    id: "_petrifiedForestGroup.xpOrbA",
    groupId: 58674,
    uberId: 193,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 595,
  },
  {
    id: "_petrifiedForestGroup.keyStoneD",
    groupId: 58674,
    uberId: 780,
  },
  {
    id: "_petrifiedForestGroup.creepBlocker",
    groupId: 58674,
    uberId: 902,
  },
  {
    id: "_petrifiedForestGroup.keystoneDUberState",
    groupId: 58674,
    uberId: 1816,
  },
  {
    id: "_petrifiedForestGroup.keystoneBUberState",
    groupId: 58674,
    uberId: 2169,
  },
  {
    id: "_petrifiedForestGroup.keyStoneA",
    groupId: 58674,
    uberId: 2227,
  },
  {
    id: "_petrifiedForestGroup.areaText",
    groupId: 58674,
    uberId: 2317,
  },
  {
    id: "_petrifiedForestGroup.stompableFloorA",
    groupId: 58674,
    uberId: 2797,
  },
  {
    id: "_petrifiedForestGroup.stompableFloorB",
    groupId: 58674,
    uberId: 3577,
  },
  {
    id: "_petrifiedForestGroup.blowableFlameA",
    groupId: 58674,
    uberId: 5285,
  },
  {
    id: "_petrifiedForestGroup.xpOrbUberState",
    groupId: 58674,
    uberId: 6936,
  },
  {
    id: "_petrifiedForestGroup.petrifiedOwlStalkSequenceCompleted",
    groupId: 58674,
    uberId: 7636,
  },
  {
    id: "_petrifiedForestGroup.CollectibleXpA",
    groupId: 58674,
    uberId: 8487,
  },
  {
    id: "_petrifiedForestGroup.drillableWallA",
    groupId: 58674,
    uberId: 8810,
  },
  {
    id: "_petrifiedForestGroup.leafPileB",
    groupId: 58674,
    uberId: 9239,
  },
  {
    id: "_petrifiedForestGroup.energyContainerA",
    groupId: 58674,
    uberId: 9583,
  },
  {
    id: "_petrifiedForestGroup.expOrbC",
    groupId: 58674,
    uberId: 9881,
  },
  {
    id: "_petrifiedForestGroup.narratorLineShownHowl",
    groupId: 58674,
    uberId: 10677,
  },
  {
    id: "_petrifiedForestGroup.blowableFlameA",
    groupId: 58674,
    uberId: 10685,
  },
  {
    id: "_petrifiedForestGroup.leafPile",
    groupId: 58674,
    uberId: 10877,
  },
  {
    id: "_petrifiedForestGroup.stompableFloor",
    groupId: 58674,
    uberId: 11400,
  },
  {
    id: "_petrifiedForestGroup.keyStoneC",
    groupId: 58674,
    uberId: 11736,
  },
  {
    id: "_petrifiedForestGroup.hutDoorUnlocked",
    groupId: 58674,
    uberId: 14313,
  },
  {
    id: "_petrifiedForestGroup.powlVignettePlayed",
    groupId: 58674,
    uberId: 14539,
  },
  {
    id: "_petrifiedForestGroup.mediumPickupB",
    groupId: 58674,
    uberId: 14590,
  },
  {
    id: "_petrifiedForestGroup.secretWallA",
    groupId: 58674,
    uberId: 14593,
  },
  {
    id: "_petrifiedForestGroup.displayedGlideHint",
    groupId: 58674,
    uberId: 14912,
  },
  {
    id: "_petrifiedForestGroup.playedEpilogue",
    groupId: 58674,
    uberId: 15269,
  },
  {
    id: "_petrifiedForestGroup.keyStoneB",
    groupId: 58674,
    uberId: 17420,
  },
  {
    id: "_petrifiedForestGroup.blowableFlame",
    groupId: 58674,
    uberId: 17742,
  },
  {
    id: "_petrifiedForestGroup.smallPickupA",
    groupId: 58674,
    uberId: 17974,
  },
  {
    id: "_petrifiedForestGroup.lifeCellUberState",
    groupId: 58674,
    uberId: 18735,
  },
  {
    id: "_petrifiedForestGroup.mediumPickupA",
    groupId: 58674,
    uberId: 18924,
  },
  {
    id: "_petrifiedForestGroup.keyStoneB",
    groupId: 58674,
    uberId: 19769,
  },
  {
    id: "_petrifiedForestGroup.leafPile",
    groupId: 58674,
    uberId: 20143,
  },
  {
    id: "_petrifiedForestGroup.gorlekOreA",
    groupId: 58674,
    uberId: 20713,
  },
  {
    id: "_petrifiedForestGroup.boolean_gasBallBridge",
    groupId: 58674,
    uberId: 20724,
  },
  {
    id: "_petrifiedForestGroup.keystoneCUberState",
    groupId: 58674,
    uberId: 20944,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 20983,
  },
  {
    id: "_petrifiedForestGroup.leverGateA",
    groupId: 58674,
    uberId: 21139,
  },
  {
    id: "_petrifiedForestGroup.narratorLineShriekAttackShown",
    groupId: 58674,
    uberId: 21385,
  },
  {
    id: "_petrifiedForestGroup.doorState",
    groupId: 58674,
    uberId: 21500,
  },
  {
    id: "_petrifiedForestGroup.narratorLineShown",
    groupId: 58674,
    uberId: 22056,
  },
  {
    id: "_petrifiedForestGroup.xpOrbA",
    groupId: 58674,
    uberId: 22472,
  },
  {
    id: "_petrifiedForestGroup.xpOrbUberState",
    groupId: 58674,
    uberId: 22503,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 23186,
  },
  {
    id: "_petrifiedForestGroup.lagoonBreakableFloor",
    groupId: 58674,
    uberId: 24457,
  },
  {
    id: "_petrifiedForestGroup.xpOrbA",
    groupId: 58674,
    uberId: 24911,
  },
  {
    id: "_petrifiedForestGroup.gorlekOreA",
    groupId: 58674,
    uberId: 26274,
  },
  {
    id: "_petrifiedForestGroup.shardSlotA",
    groupId: 58674,
    uberId: 26282,
  },
  {
    id: "_petrifiedForestGroup.smallExpOrbA",
    groupId: 58674,
    uberId: 26639,
  },
  {
    id: "_petrifiedForestGroup.gorlekOreA",
    groupId: 58674,
    uberId: 28710,
  },
  {
    id: "_petrifiedForestGroup.narrationPetrifiedOwlStalk",
    groupId: 58674,
    uberId: 29035,
  },
  {
    id: "_petrifiedForestGroup.shardSlotUpgradePlaceholder",
    groupId: 58674,
    uberId: 29265,
  },
  {
    id: "_petrifiedForestGroup.stompableFloor",
    groupId: 58674,
    uberId: 29622,
  },
  {
    id: "_petrifiedForestGroup.shardPickupA",
    groupId: 58674,
    uberId: 30377,
  },
  {
    id: "_petrifiedForestGroup.areaText",
    groupId: 58674,
    uberId: 30897,
  },
  {
    id: "_petrifiedForestGroup.expOrbC",
    groupId: 58674,
    uberId: 30908,
  },
  {
    id: "_petrifiedForestGroup.powlVignettePlayed",
    groupId: 58674,
    uberId: 32369,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 32647,
  },
  {
    id: "_petrifiedForestGroup.expOrbD",
    groupId: 58674,
    uberId: 33893,
  },
  {
    id: "_petrifiedForestGroup.breakableWallA",
    groupId: 58674,
    uberId: 33965,
  },
  {
    id: "_petrifiedForestGroup.diggableWallA",
    groupId: 58674,
    uberId: 34799,
  },
  {
    id: "_petrifiedForestGroup.expOrbB",
    groupId: 58674,
    uberId: 36199,
  },
  {
    id: "_petrifiedForestGroup.floatZoneState",
    groupId: 58674,
    uberId: 36832,
  },
  {
    id: "_petrifiedForestGroup.featherVignettePlayed",
    groupId: 58674,
    uberId: 36965,
  },
  {
    id: "_petrifiedForestGroup.expOrbB",
    groupId: 58674,
    uberId: 37006,
  },
  {
    id: "_petrifiedForestGroup.leafPile",
    groupId: 58674,
    uberId: 37037,
  },
  {
    id: "_petrifiedForestGroup.lifeCellUberState",
    groupId: 58674,
    uberId: 37128,
  },
  {
    id: "_petrifiedForestGroup.stompableFloorC",
    groupId: 58674,
    uberId: 37636,
  },
  {
    id: "_petrifiedForestGroup.mokiCleanWaterVignetteTriggered",
    groupId: 58674,
    uberId: 37811,
  },
  {
    id: "_petrifiedForestGroup.expOrb",
    groupId: 58674,
    uberId: 37885,
  },
  {
    id: "_petrifiedForestGroup.shardA",
    groupId: 58674,
    uberId: 38285,
  },
  {
    id: "_petrifiedForestGroup.secretWallA",
    groupId: 58674,
    uberId: 39950,
  },
  {
    id: "_petrifiedForestGroup.boolean_skeletonBoneA",
    groupId: 58674,
    uberId: 40066,
  },
  {
    id: "_petrifiedForestGroup.keyStoneD",
    groupId: 58674,
    uberId: 40073,
  },
  {
    id: "_petrifiedForestGroup.mokiFoulWaterVignetteTriggered",
    groupId: 58674,
    uberId: 41644,
  },
  {
    id: "_petrifiedForestGroup.expOrbC",
    groupId: 58674,
    uberId: 42158,
  },
  {
    id: "_petrifiedForestGroup.keyStoneA",
    groupId: 58674,
    uberId: 42531,
  },
  {
    id: "_petrifiedForestGroup.keyStoneC",
    groupId: 58674,
    uberId: 43033,
  },
  {
    id: "_petrifiedForestGroup.keystoneAUberState",
    groupId: 58674,
    uberId: 44215,
  },
  {
    id: "_petrifiedForestGroup.creepA",
    groupId: 58674,
    uberId: 44324,
  },
  {
    id: "_petrifiedForestGroup.escapeRocks",
    groupId: 58674,
    uberId: 44864,
  },
  {
    id: "_petrifiedForestGroup.collapsingSkeletonA",
    groupId: 58674,
    uberId: 46547,
  },
  {
    id: "_petrifiedForestGroup.petrifiedForestNewTransitionOriVignettePlayed",
    groupId: 58674,
    uberId: 46980,
  },
  {
    id: "_petrifiedForestGroup.setupDownB",
    groupId: 58674,
    uberId: 47179,
  },
  {
    id: "_petrifiedForestGroup.breakableGroundA",
    groupId: 58674,
    uberId: 47751,
  },
  {
    id: "_petrifiedForestGroup.creebBulb",
    groupId: 58674,
    uberId: 48394,
  },
  {
    id: "_petrifiedForestGroup.creepBall",
    groupId: 58674,
    uberId: 49272,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 49535,
  },
  {
    id: "_petrifiedForestGroup.boolean_skeletonBoneC",
    groupId: 58674,
    uberId: 50410,
  },
  {
    id: "_petrifiedForestGroup.boolean_skeletonBoneB",
    groupId: 58674,
    uberId: 51501,
  },
  {
    id: "_petrifiedForestGroup.shownHint",
    groupId: 58674,
    uberId: 51890,
  },
  {
    id: "_petrifiedForestGroup.secretWallA",
    groupId: 58674,
    uberId: 52280,
  },
  {
    id: "_petrifiedForestGroup.patrifiedForestBreakableFloor",
    groupId: 58674,
    uberId: 52345,
  },
  {
    id: "_petrifiedForestGroup.mediumPickupC",
    groupId: 58674,
    uberId: 54516,
  },
  {
    id: "_petrifiedForestGroup.stompableFloor",
    groupId: 58674,
    uberId: 54560,
  },
  {
    id: "_petrifiedForestGroup.breakableWall",
    groupId: 58674,
    uberId: 54686,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 55650,
  },
  {
    id: "_petrifiedForestGroup.enemyRoom",
    groupId: 58674,
    uberId: 56043,
  },
  {
    id: "_petrifiedForestGroup.wispCutscenePlayed",
    groupId: 58674,
    uberId: 58268,
  },
  {
    id: "_petrifiedForestGroup.shownFlapEnemyHint",
    groupId: 58674,
    uberId: 58684,
  },
  {
    id: "_petrifiedForestGroup.xpOrbB",
    groupId: 58674,
    uberId: 59372,
  },
  {
    id: "_petrifiedForestGroup.CollectibleXPB",
    groupId: 58674,
    uberId: 59691,
  },
  {
    id: "_petrifiedForestGroup.expOrbD",
    groupId: 58674,
    uberId: 59714,
  },
  {
    id: "_petrifiedForestGroup.skeletonState",
    groupId: 58674,
    uberId: 61252,
  },
  {
    id: "_petrifiedForestGroup.setupDownA",
    groupId: 58674,
    uberId: 61327,
  },
  {
    id: "_petrifiedForestGroup.stomableFloorB",
    groupId: 58674,
    uberId: 61391,
  },
  {
    id: "_petrifiedForestGroup.breakableHiddenWall",
    groupId: 58674,
    uberId: 61577,
  },
  {
    id: "_petrifiedForestGroup.clothBroken",
    groupId: 58674,
    uberId: 63837,
  },
  {
    id: "_petrifiedForestGroup.expOrbA",
    groupId: 58674,
    uberId: 64057,
  },
  {
    id: "_petrifiedForestGroup.expOrb",
    groupId: 58674,
    uberId: 64484,
  },
  {
    id: "_petrifiedForestGroup.secretWallA",
    groupId: 58674,
    uberId: 64690,
  },
  {
    id: "_petrifiedForestGroup.stomableFloorA",
    groupId: 58674,
    uberId: 65519,
  },
  {
    id: "_petrifiedForestGroup.savePedestalA",
    groupId: 58674,
    uberId: 1965,
  },
  {
    id: "_petrifiedForestGroup.savePedestalUberState",
    groupId: 58674,
    uberId: 7071,
  },
  {
    id: "_petrifiedForestGroup.savePedestalUberState",
    groupId: 58674,
    uberId: 10029,
  },
  {
    id: "_petrifiedForestGroup.savePedestalUberState",
    groupId: 58674,
    uberId: 10997,
  },
  {
    id: "_petrifiedForestGroup.savePedestalUberState",
    groupId: 58674,
    uberId: 11221,
  },
  {
    id: "_petrifiedForestGroup.savePedestalUberState",
    groupId: 58674,
    uberId: 36061,
  },
  {
    id: "_petrifiedForestGroup.chaseState",
    groupId: 58674,
    uberId: 32810,
  },
  {
    id: "_petrifiedForestGroup.petrifiedForestNewTransitionKuVignettePlayed",
    groupId: 58674,
    uberId: 44798,
  },
  {
    id: "_petrifiedForestGroup.petrifiedOwlClothState",
    groupId: 58674,
    uberId: 45819,
  },
  {
    id: "_petrifiedForestGroup.petrifiedOwlState",
    groupId: 58674,
    uberId: 61616,
  },
  {
    id: "shrineGroup.shrineLaser",
    groupId: 61306,
    uberId: 2129,
  },
  {
    id: "shrineGroup.shrineProjectile",
    groupId: 61306,
    uberId: 2239,
  },
  {
    id: "shrineGroup.shrineMouldwoodDepths",
    groupId: 61306,
    uberId: 18888,
  },
  {
    id: "shrineGroup.shrineHammer",
    groupId: 61306,
    uberId: 26590,
  },
  {
    id: "shrineGroup.shrinePortal",
    groupId: 61306,
    uberId: 40441,
  },
  {
    id: "shrineGroup.shrineTeleport",
    groupId: 61306,
    uberId: 52344,
  },
  {
    id: "shrineGroup.shrineOfFall",
    groupId: 61306,
    uberId: 56122,
  },
  {
    id: "spiderGroupDescriptor.spiderlingsQuestUberState",
    groupId: 61314,
    uberId: 55764,
  },
  {
    id: "spiderGroupDescriptor.spiderNpcState",
    groupId: 61314,
    uberId: 61458,
  },
  {
    id: "testUberStateGroupDescriptor.floatUberStateDescriptor",
    groupId: 63018,
    uberId: 22925,
  }
];
export default uberStates;
