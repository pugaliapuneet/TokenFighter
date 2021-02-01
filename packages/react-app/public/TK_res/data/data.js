/** serves the same as data.txt or (deep_chop.dat in earlier versions)
 */
/**
type:
character				id from 0~99
lightweapon				id from 100~149
heavyweapon				id from 150~199
specialattack			id from 200~299
baseball
miscell (Criminal, etc, broken_weapon)
drink (Milk and beer)
effects (blood,fire)	id from 300~349 (extended standard)
 */
//extended standard

define({

	object:
	[
		{id: 1, name:'Jarvan', type:'character', file:'data/deep.js', pic:'sprite/deep_f.png'},
		{id: 2, name:'Magic', type:'character', file:'data/john.js', pic:'sprite/john_f.png'},
		{id: 5, name:'Yasuo', type:'character', file:'data/rudolf.js', pic:'sprite/rudolf_f.png'},
		{id: 4, name:'Robin', type:'character', file:'data/henry.js', pic:'sprite/henry_f.png'},
		{id: 6, name:'Garen', type:'character', file:'data/louis.js', pic:'sprite/louis_f.png'},
		{id: 7, name:'Mars', type:'character', file:'data/firen.js', pic:'sprite/firen_f.png'},
		{id: 8, name:'White', type:'character', file:'data/freeze.js', pic:'sprite/freeze_f.png'},
		{id: 9, name:'Lee', type:'character', file:'data/dennis.js', pic:'sprite/dennis_f.png'},
		{id:10, name:'Chopper', type:'character', file:'data/woody.js', pic:'sprite/woody_f.png'},
		{id:11, name:'Shen', type:'character', file:'data/davis.js', pic:'sprite/davis_f.png'},
		{id:30, name:'Gwei', type:'character', file:'data/bandit.js', pic:'sprite/bandit_f.png'},
		{id:31, name:'Frontr', type:'character', file:'data/hunter.js', pic:'sprite/hunter_f.png'},
		{id:32, name:'Work', type:'character', file:'data/mark.js', pic:'sprite/mark_f.png'},
		{id:33, name:'Click', type:'character', file:'data/jack.js', pic:'sprite/jack_f.png'},
		{id:34, name:'Base', type:'character', file:'data/sorcerer.js', pic:'sprite/sorcerer_f.png'},
		{id:35, name:'Monk', type:'character', file:'data/monk.js', pic:'sprite/monk_f.png'},
		{id:36, name:'Ada', type:'character', file:'data/jan.js', pic:'sprite/jan_f.png'},
		{id:37, name:'Stake', type:'character', file:'data/knight.js', pic:'sprite/knight_f.png'},
		{id:39, name:'Null', type:'character', file:'data/justin.js', pic:'sprite/justin_f.png'},
		{id:52, name:'Void', type:'character', file:'data/julian.js', pic:'sprite/julian_f.png'},
		{id:51, name:'Wars', type:'character', file:'data/firzen.js', pic:'sprite/firzen_f.png'},
		{id:38, name:'Draco', type:'character', file:'data/bat.js', pic:'sprite/bat_f.png'},
		{id:50, name:'Garen EX', type:'character', file:'data/louisEX.js', pic:'sprite/louisEX_f.png'},
		{id:60, name:'CZ', type:'character', file:'data/cz.js', pic:'sprite/cz_f.png'},
		{id:61, name:'CZ EX', type:'character', file:'data/cz_bl.js', pic:'sprite/cz_bl_f.png'},
		{id:62, name:'Arthur', type:'character', file:'data/arthur.js', pic:'sprite/arthur_f.png'},
		{id:63, name:'Hayden', type:'character', file:'data/hayden.js', pic:'sprite/hayden_f.png'},
		{id:64, name:'SBF', type:'character', file:'data/sbf.js', pic:'sprite/sbf_f.png'},
		{id:65, name:'Robert', type:'character', file:'data/robert.js', pic:'sprite/robert_f.png'},
		{id:66, name:'Andre', type:'character', file:'data/andre.js', pic:'sprite/andre_f.png'},
		{id:67, name:'MemeBoi', type:'character', file:'data/meme.js', pic:'sprite/meme_f.png'},
		{id:68, name:'Ether', type:'character', file:'data/ether.js', pic:'sprite/ether_f.png'},
		{id:69, name:'Banteg', type:'character', file:'data/banteg.js', pic:'sprite/banteg_f.png'},
		{id:70, name:'Mai', type:'character', file:'data/msbtc.js', pic:'sprite/msbtc_f.png'},
		{id:71, name:'Sushinobi', type:'character', file:'data/sushi.js', pic:'sprite/sushi_f.png'},
		{id:72, name:'Pickle', type:'character', file:'data/pickle.js', pic:'sprite/pickle_f.png'},
		{id:73, name:'Lord Zeig', type:'character', file:'data/zeig.js', pic:'sprite/zeig_f.png'},
		{id:74, name:'Tether', type:'character', file:'data/tether.js', pic:'sprite/tether_f.png'},

		{id:100, type:'lightweapon', file:'data/weapon0.js'}, //stick
		{id:101, type:'lightweapon', file:'data/weapon2.js'}, //hoe
		{id:150, type:'heavyweapon', file:'data/weapon1.js'}, //stone
    	{id:151, type:'heavyweapon', file:'data/weapon3.js'}, //wooden_box
		{id:217, type:'heavyweapon', file:'data/weapon10.js'},
		{id:218, type:'heavyweapon', file:'data/weapon11.js'},
		{id:250, type:'heavyweapon', file:'data/cz_armur_0.js'},
		{id:251, type:'heavyweapon', file:'data/cz_armur_1.js'},

		{id:300, type:'effect', file:'data/effect0.js'}, //blast
		{id:301, type:'effect', file:'data/effect1.js'}, //blood
		{id:320, type:'broken', file:'data/broken.js'},

		{id:200, type:'specialattack', file:'data/john_ball.js'},
		{id:201, type:'lightweapon', file:'data/henry_arrow1.js'},
		{id:202, type:'lightweapon', file:'data/rudolf_weapon.js'},
		{id:203, type:'specialattack', file:'data/deep_ball.js'},
		{id:204, type:'specialattack', file:'data/henry_louis_rudolf_wind.js'},
		{id:205, type:'specialattack', file:'data/dennis_ball.js'},
		{id:206, type:'specialattack', file:'data/woody_ball.js'},
		{id:207, type:'specialattack', file:'data/davis_ball.js'},
		{id:208, type:'specialattack', file:'data/henry_arrow2.js'},
		{id:209, type:'specialattack', file:'data/freeze_ball.js'},
		{id:210, type:'specialattack', file:'data/firen_ball.js'},
		{id:211, type:'specialattack', file:'data/firen_flame.js'},
		{id:212, type:'specialattack', file:'data/freeze_column.js'},
		{id:213, type:'lightweapon', file:'data/weapon7.js'}, //ice_sword
		{id:214, type:'specialattack', file:'data/john_biscuit.js'},
		{id:215, type:'specialattack', file:'data/dennis_chase.js'},
		{id:216, type:'specialattack', file:'data/jack_ball.js'},
		{id:219, type:'specialattack', file:'data/jan_chaseh.js'},
		{id:220, type:'specialattack', file:'data/jan_chase.js'},
		{id:221, type:'specialattack', file:'data/firzen_chasef.js'},
		{id:222, type:'specialattack', file:'data/firzen_chasei.js'},
		{id:223, type:'specialattack', file:'data/firzen_ball.js'},
		{id:224, type:'specialattack', file:'data/bat_ball.js'},
		{id:225, type:'specialattack', file:'data/bat_chase.js'},
		{id:226, type:'specialattack', file:'data/justin_ball.js'},
		{id:228, type:'specialattack', file:'data/julian_ball.js'},
		{id:229, type:'specialattack', file:'data/julian_ball2.js'},
		{id:260, type:'specialattack', file:'data/arthur_ball.js'},
		{id:261, type:'specialattack', file:'data/arthur_ball2.js'},
		{id:262, type:'specialattack', file:'data/hayden_wind.js'},
		{id:263, type:'lightweapon', file:'data/hayden_arrow1.js'},
		{id:264, type:'specialattack', file:'data/hayden_arrow2.js'},
		{id:265, type:'lightweapon', file:'data/sbf_weapon.js'},
		{id:266, type:'specialattack', file:'data/sbf_smoke.js'},
		{id:267, type:'specialattack', file:'data/robert_ball.js'},
		{id:268, type:'specialattack', file:'data/andre_ball.js'},
		{id:269, type:'specialattack', file:'data/meme_ball.js'},
		{id:270, type:'specialattack', file:'data/banteg_ball.js'},
		{id:271, type:'specialattack', file:'data/banteg_biscuit.js'},
		{id:272, type:'lightweapon', file:'data/msbtc_weapon.js'},
		{id:273, type:'specialattack', file:'data/msbtc_smoke.js'},
		{id:274, type:'lightweapon', file:'data/sushi_weapon.js'},
		{id:275, type:'specialattack', file:'data/sushi_smoke.js'},
		{id:276, type:'specialattack', file:'data/pickle_ball.js'},
		{id:277, type:'specialattack', file:'data/zeig_ball.js'}
	],

	AI:
	[
		{id:1, file:'AI/Crusher.js', name:'CRUSHER'},
		{id:2, file:'AI/Challangar.js', name:'CHALLENGER'},
		{id:3, file:'AI/dumbass.js', name:'CHAD'}
	],

	background:
	[
		{id:4, name: 'HK Coliseum', file:'bg/hkc/bg.js'},
		{id:2, name: 'Lion Forest', file:'bg/lf/bg.js'},
		{id:3, name: 'Stanley Prison', file:'bg/sp/bg.js'},
		{id:5, name: 'The Great Wall', file:'bg/gw/bg.js'},
		{id:6, name: "Queen's Island", file:'bg/qi/bg.js'},
		{id:7, name: 'Forbidden Tower', file:'bg/ft/bg.js'},
		{id:1, name: 'CUHK', file:'bg/cuhk/bg.js'},
		{id:0, name: 'Tai Hom Village', file:'bg/thv/bg.js'},
	],

	sound:
	[
		{id:1, file: 'sound/soundpack.js'}
	],

	UI: {file:'UI/UI.js'},

	properties: {file:'data/properties.js'},

	file_editing: {},

	config: ['id: 100~199 drop weapon'],

	icon: 'sprite/icon.png'
});
