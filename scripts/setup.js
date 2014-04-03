/*-------- Asset Initialization and Setup --------*/

// Blueprints
UTIL.asset.queue('blueprint', ['tanks', 'json/blueprints/tanks.json']);
UTIL.asset.queue('blueprint', ['destructibles', 'json/blueprints/destructibles.json']);

// Terrain images
TerrainImages = new ImageLibrary();
UTIL.asset.queue('image', ['default', 'images/testmap.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_02', 'images/terrain/dirt_and_grass/dirt_and_grass_02.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_03', 'images/terrain/dirt_and_grass/dirt_and_grass_03.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_04', 'images/terrain/dirt_and_grass/dirt_and_grass_04.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_06', 'images/terrain/dirt_and_grass/dirt_and_grass_06.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_07', 'images/terrain/dirt_and_grass/dirt_and_grass_07.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_08', 'images/terrain/dirt_and_grass/dirt_and_grass_08.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_09', 'images/terrain/dirt_and_grass/dirt_and_grass_09.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_10', 'images/terrain/dirt_and_grass/dirt_and_grass_10.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_11', 'images/terrain/dirt_and_grass/dirt_and_grass_11.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_13', 'images/terrain/dirt_and_grass/dirt_and_grass_13.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_14', 'images/terrain/dirt_and_grass/dirt_and_grass_14.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_15', 'images/terrain/dirt_and_grass/dirt_and_grass_15.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_16', 'images/terrain/dirt_and_grass/dirt_and_grass_16.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_17', 'images/terrain/dirt_and_grass/dirt_and_grass_17.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_18', 'images/terrain/dirt_and_grass/dirt_and_grass_18.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_19', 'images/terrain/dirt_and_grass/dirt_and_grass_19.png', TerrainImages]);
UTIL.asset.queue('image', ['dirt_and_grass_20', 'images/terrain/dirt_and_grass/dirt_and_grass_20.png', TerrainImages]);

// Tank images
TankImages = new ImageLibrary();
UTIL.asset.queue('image', ['jagdpanther_turret', 'images/tanks/jagdpanther/turret.png', TankImages]);
UTIL.asset.queue('image', ['jagdpanther_chassis', 'images/tanks/jagdpanther/chassis.png', TankImages]);
UTIL.asset.queue('image', ['m4_sherman_turret', 'images/tanks/m4_sherman/turret.png', TankImages]);
UTIL.asset.queue('image', ['m4_sherman_chassis', 'images/tanks/m4_sherman/chassis.png', TankImages]);
UTIL.asset.queue('image', ['m4_sherman_turret_blue', 'images/tanks/m4_sherman_blue/turret.png', TankImages]);
UTIL.asset.queue('image', ['m4_sherman_chassis_blue', 'images/tanks/m4_sherman_blue/chassis.png', TankImages]);
UTIL.asset.queue('image', ['heavy_turret', 'images/tanks/heavy/turret.png', TankImages]);
UTIL.asset.queue('image', ['heavy_chassis', 'images/tanks/heavy/chassis.png', TankImages]);

// Projectile images
ProjectileImages = new ImageLibrary();
UTIL.asset.queue('image', ['default', 'images/projectiles/default.png', ProjectileImages]);

// Powerup images
PowerUpImages = new ImageLibrary();
UTIL.asset.queue('image', ['random', 'images/powerups/random.png', PowerUpImages]);
UTIL.asset.queue('image', ['rapid-fire', 'images/powerups/rapid-fire.png', PowerUpImages]);
UTIL.asset.queue('image', ['haste', 'images/powerups/haste.png', PowerUpImages]);
UTIL.asset.queue('image', ['faster-projectile', 'images/powerups/faster-projectile.png', PowerUpImages]);
UTIL.asset.queue('image', ['increased-armor', 'images/powerups/increased-armor.png', PowerUpImages]);
UTIL.asset.queue('image', ['increased-damage', 'images/powerups/increased-damage.png', PowerUpImages]);
UTIL.asset.queue('image', ['aphotic-shield', 'images/powerups/aphotic-shield.png', PowerUpImages]);
UTIL.asset.queue('image', ['reactive-armor', 'images/powerups/reactive-armor.png', PowerUpImages]);
UTIL.asset.queue('image', ['regeneration', 'images/powerups/regeneration.png', PowerUpImages]);
UTIL.asset.queue('image', ['ammo', 'images/powerups/ammo.png', PowerUpImages]);
UTIL.asset.queue('image', ['projectile-barrier', 'images/powerups/projectile-barrier.png', PowerUpImages]);
UTIL.asset.queue('image', ['return', 'images/powerups/return.png', PowerUpImages]);
UTIL.asset.queue('image', ['multi-shot', 'images/powerups/multi-shot.png', PowerUpImages]);
UTIL.asset.queue('image', ['homing-missile', 'images/powerups/homing-missile.png', PowerUpImages]);
UTIL.asset.queue('image', ['concussive-shell', 'images/powerups/concussive-shell.png', PowerUpImages]);
UTIL.asset.queue('image', ['fireworks', 'images/powerups/fireworks.png', PowerUpImages]);
UTIL.asset.queue('image', ['chain', 'images/powerups/chain.png', PowerUpImages]);
UTIL.asset.queue('image', ['gold-coin', 'images/powerups/gold-coin.png', PowerUpImages]);

// Destructible images
DestructibleImages = new ImageLibrary();
UTIL.asset.queue('image', ['brick_explosive', 'images/destructibles/brick-explosive.png', DestructibleImages]);
UTIL.asset.queue('image', ['wall_rubber', 'images/destructibles/wall-rubber.png', DestructibleImages]);
UTIL.asset.queue('image', ['heavy_rubber', 'images/destructibles/heavy-rubber.png', DestructibleImages]);
UTIL.asset.queue('image', ['concrete', 'images/destructibles/concrete.png', DestructibleImages]);
UTIL.asset.queue('image', ['riveted_iron', 'images/destructibles/riveted-iron.png', DestructibleImages]);
UTIL.asset.queue('image', ['tree', 'images/destructibles/tree.png', DestructibleImages]);

// Attachment images
AttachmentImages = new ImageLibrary();
UTIL.asset.queue('image', ['increased-damage', 'images/attachments/turret/increased-damage.png', AttachmentImages]);
UTIL.asset.queue('image', ['increased-armor', 'images/attachments/chassis/increased-armor.png', AttachmentImages]);

// Editor images
EditorImages = new ImageLibrary();
UTIL.asset.queue('image', ['starting-point', 'images/editor/starting-point.png', EditorImages]);
UTIL.asset.queue('image', ['grass-grid', 'images/editor/grid.png', EditorImages]);

// Spritesheet images
SpriteSheetImages = new ImageLibrary();
UTIL.asset.queue('image', ['explosion', 'images/spritesheets/explosion.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['volumetric_explosion', 'images/spritesheets/volumetric_explosion.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['volumetric_explosion_2', 'images/spritesheets/volumetric_explosion_2.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['aphotic_shield', 'images/spritesheets/aphotic_shield.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['spawn_vortex', 'images/spritesheets/spawn_vortex.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['heavy_recoil', 'images/tanks/heavy/recoil.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['jagdpanther_recoil', 'images/tanks/jagdpanther/recoil.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['m4_sherman_recoil', 'images/tanks/m4_sherman/recoil.png', SpriteSheetImages]);
UTIL.asset.queue('image', ['m4_sherman_blue_recoil', 'images/tanks/m4_sherman_blue/recoil.png', SpriteSheetImages]);

// BGM
var backgroundMusic = new Audio();
UTIL.asset.queue('audio', ['sounds/bgm/6.mp3', true, 0.15, backgroundMusic]);

// Sound effects
fireSound         = new SoundPool('sounds/turret_fire.wav', 0.12, 20);
explodeSound      = new SoundPool('sounds/explosion.wav', 0.1, 20);
d_explodeSound    = new SoundPool('sounds/destructible_hit.wav', 0.1, 20);
d_destroyedSound  = new SoundPool('sounds/destructible_destroyed.wav', 0.2, 10);
t_destroyedSound  = new SoundPool('sounds/tank_destroyed.wav', 0.2, 10);
t_destroyedSound2 = new SoundPool('sounds/tank_destroyed2.wav', 0.2, 10);
t_destroyedSound3 = new SoundPool('sounds/tank_destroyed3.wav', 0.2, 10);
pick_powerupSound = new SoundPool('sounds/pick-powerup.wav', 0.2, 20);
tick_sound        = new SoundPool('sounds/tick.mp3', 1.0, 60);
wave_cleared_sound = new SoundPool('sounds/wave_cleared.wav', 0.5, 3);
wave_start_sound   = new SoundPool('sounds/wave_start.wav', 0.5, 3);
gameover_sound     = new SoundPool('sounds/gameover.wav', 0.5, 3);
    
UTIL.asset.queue('soundpool', ['fire', fireSound]);
UTIL.asset.queue('soundpool', ['explode', explodeSound]);
UTIL.asset.queue('soundpool', ['explode_destructible', d_explodeSound]);
UTIL.asset.queue('soundpool', ['destroyed_destructible', d_destroyedSound]);
UTIL.asset.queue('soundpool', ['destroyed_tank', t_destroyedSound]);
UTIL.asset.queue('soundpool', ['destroyed_tank2', t_destroyedSound2]);
UTIL.asset.queue('soundpool', ['destroyed_tank3', t_destroyedSound3]);
UTIL.asset.queue('soundpool', ['pick_powerup', pick_powerupSound]);
UTIL.asset.queue('soundpool', ['tick', tick_sound]);
UTIL.asset.queue('soundpool', ['wave_cleared', wave_cleared_sound]);
UTIL.asset.queue('soundpool', ['wave_start', wave_start_sound]);
UTIL.asset.queue('soundpool', ['gameover', gameover_sound]);

// Init stat fields
var STAT = new Stat();
STAT.add('total_shots_fired');
STAT.add('total_hits');
STAT.add('total_damage_dealt');
STAT.add('total_damage_taken');
STAT.add('total_tanks_destroyed');

// Map editor initiatlization
MAP.addPlaceable('destructible', 'brick_explosive');
MAP.addPlaceable('destructible', 'concrete');
MAP.addPlaceable('destructible', 'riveted_iron');
MAP.addPlaceable('destructible', 'wall_rubber');
MAP.addPlaceable('destructible', 'heavy_rubber');
MAP.addPlaceable('destructible', 'tree');
MAP.addPlaceable('starting-point', 'starting-point');
MAP.addPlaceable('powerup', 'random');
MAP.addPlaceable('powerup', 'haste');
MAP.addPlaceable('powerup', 'ammo');
MAP.addPlaceable('powerup', 'projectile-barrier');
MAP.addPlaceable('powerup', 'aphotic-shield');
MAP.addPlaceable('powerup', 'increased-armor');
MAP.addPlaceable('powerup', 'reactive-armor');
MAP.addPlaceable('powerup', 'regeneration');
MAP.addPlaceable('powerup', 'rapid-fire');
MAP.addPlaceable('powerup', 'faster-projectile');
MAP.addPlaceable('powerup', 'increased-damage');
MAP.addPlaceable('powerup', 'return');
MAP.addPlaceable('powerup', 'multi-shot');
MAP.addPlaceable('powerup', 'homing-missile');
MAP.addPlaceable('powerup', 'concussive-shell');
MAP.addPlaceable('powerup', 'fireworks');
MAP.addPlaceable('powerup', 'chain');
MAP.addPlaceable('powerup', 'gold-coin');

// the default map
MAP.importFromJSON('{"name":"gg","desc":"No description.","dropRate":10,"powerups":[["rapid-fire",596.3761360645294,752.2362347245216],["rapid-fire",1574.877245619893,661.5300506204367],["rapid-fire",594.7446242272854,525.3705675154924],["rapid-fire",310.0003488510847,1131.587684892118],["rapid-fire",344.30358727276325,408.6474855020642],["rapid-fire",1357.8664659708738,76.16628565639257],["rapid-fire",126.9984466060996,519.6490555331111],["rapid-fire",1205.2074535042048,1294.8387914523482],["rapid-fire",1653.1365207508206,400.31621818989515],["rapid-fire",1050.9529304355383,820.5509806126356],["rapid-fire",812.5347032994032,198.79301773756742],["rapid-fire",883.1349343433976,202.8785786703229],["rapid-fire",879.2888280004263,1156.7241425514221],["rapid-fire",97.98042326420546,1161.5136475637555],["rapid-fire",1626.9872168451548,699.4754867702723],["multi-shot",479.78143744915724,997.2606745138764],["multi-shot",1114.1074917688966,351.0076847076416],["multi-shot",762.2654296383262,877.9386725351214],["multi-shot",613.0877003520727,120.4569463133812],["multi-shot",1029.7087536379695,1212.022644214332],["multi-shot",181.86794147640467,37.09956807643175],["multi-shot",768.2430268004537,185.38969101011753],["multi-shot",662.335546195507,364.0014487579465],["multi-shot",1020.7052707448602,661.7075554132462],["multi-shot",352.2491187527776,1634.0110981017351],["multi-shot",954.6841639280319,340.60944825410843],["multi-shot",715.4729761630297,908.3982575833797],["multi-shot",660.7648332640529,1269.392409414053],["multi-shot",1784.0535942837596,1464.643725156784],["multi-shot",180.8130932226777,845.6962822973728],["multi-shot",164.87916572391987,1608.367940850556],["multi-shot",1273.1287203133106,885.2555753588676],["multi-shot",1358.6986329182982,874.2903818786144],["multi-shot",1644.1134302392602,1488.849886469543],["multi-shot",1193.7974902689457,985.4605770036578],["multi-shot",909.4994922727346,1015.0514549463987],["multi-shot",1541.1607914045453,854.2563981637359],["multi-shot",321.2014287337661,1382.3195830509067],["multi-shot",208.95870961993933,623.7630293592811],["multi-shot",1374.0331270247698,130.05304983258247],["multi-shot",1596.164950311184,527.1174801886082],["multi-shot",1621.4335863366723,951.6745066121221],["multi-shot",131.04222084581852,1547.083159379661],["multi-shot",1318.1918693259358,1626.6173611879349],["multi-shot",138.286965765059,757.2324189841747],["multi-shot",1790.6026709228754,961.4696340411901],["multi-shot",444.52209936082363,442.730525739491],["multi-shot",581.8164762631059,1097.1290366649628],["multi-shot",84.60848443955183,936.4489517882466],["multi-shot",584.1942284926772,687.6330275461078],["multi-shot",1297.6009328439832,785.7154945135117],["multi-shot",721.7794882580638,1566.9677850231528],["multi-shot",1629.2472528666258,55.0936765819788],["multi-shot",75.63603483885527,1044.8455288857222],["multi-shot",616.1718067377806,1390.2004115134478],["multi-shot",121.82446239888668,1139.1110308393836],["multi-shot",1315.578608237207,1130.8466872125864],["multi-shot",169.7290509045124,803.8863837271929],["multi-shot",538.604664824903,1173.2992102950811],["multi-shot",329.5055086836219,319.1031519547105],["multi-shot",1396.9170039743185,397.50425127893686],["multi-shot",685.4739310517907,1704.7274128720164],["multi-shot",119.91289414465427,791.1703063622117],["multi-shot",1578.0663757100701,281.888363532722],["multi-shot",308.65013095736504,1679.5265252664685],["multi-shot",1226.73267198354,1271.075854048133],["multi-shot",1448.3495330438018,1148.9945764392614],["multi-shot",1653.462873995304,990.5656759142876],["multi-shot",1082.8387384861708,131.7422170713544],["multi-shot",1530.0110068693757,1466.091794282198],["multi-shot",1019.8620909154415,303.7843337506056],["multi-shot",436.71264059096575,130.448147803545],["multi-shot",1158.843861579895,745.4391966685653],["multi-shot",1671.485283382237,290.4413884654641],["multi-shot",1427.122583091259,29.655325300991535],["multi-shot",302.0005883127451,443.84768264740705],["multi-shot",821.0640831515193,677.6246361583471],["chain",1286.948978818953,1166.5761397182941],["chain",1495.1009268835187,69.37209340184927],["chain",105.05034696310759,532.3012686297297],["chain",952.5585490241647,1509.763910382986],["chain",1724.5812736228108,1811.5214376971126],["chain",130.80855553597212,857.6521178930998],["chain",1782.0672168284655,1721.0450491905212],["chain",1138.444351427257,499.68310180306435],["chain",1639.1552071273327,234.11592239141464],["chain",798.9167115837336,721.6834504231811],["chain",1360.3459489122033,1650.5908331125975],["chain",1562.2685553207994,351.66458324342966],["chain",325.02925883978605,289.5010708719492],["chain",176.15295814722776,1314.0492161214352],["chain",250.74992340803146,227.94138906151056],["chain",596.2155769765377,1314.3667830973864],["chain",490.1993545666337,1544.2163773477077],["chain",107.14380486309528,782.6357619389892],["chain",482.06327882409096,636.1551644057035],["chain",1589.9240071624517,1659.5106007754803],["chain",210.19411486387253,1698.9222141131759]],"destructibles":[],"startingPoints":[{"config":{"oX":1148.9941041916609,"oY":1659.370965398848}},{"config":{"oX":1192.3995341733098,"oY":1140.2563845813274}},{"config":{"oX":577.6369108781219,"oY":1613.3966379985213}},{"config":{"oX":416.2284448072314,"oY":104.60794863849878}},{"config":{"oX":1611.810580842197,"oY":479.594371765852}},{"config":{"oX":1204.19909658283,"oY":1214.9835266768932}},{"config":{"oX":1752.0081160068512,"oY":1583.9828745648265}},{"config":{"oX":1260.2189220562577,"oY":195.80229661613703}},{"config":{"oX":1310.4709365963936,"oY":314.10169737786055}},{"config":{"oX":1326.9750002995133,"oY":971.8792851269245}},{"config":{"oX":826.1739261969924,"oY":1378.598055370152}},{"config":{"oX":1512.7483045756817,"oY":1540.8429917022586}},{"config":{"oX":870.7058064267039,"oY":1752.7717641592026}},{"config":{"oX":627.5088043212891,"oY":1150.0744262114167}},{"config":{"oX":686.4372401386499,"oY":1474.665776051581}},{"config":{"oX":1798.2797402590513,"oY":613.4089773595333}},{"config":{"oX":499.3712863102555,"oY":1370.437493674457}},{"config":{"oX":153.23996747285128,"oY":245.8773316964507}},{"config":{"oX":279.7055939286947,"oY":1711.7872970625758}},{"config":{"oX":1504.7578857913613,"oY":1592.8008100166917}},{"config":{"oX":73.458048440516,"oY":108.79530016332865}},{"config":{"oX":1194.4418572559953,"oY":38.46231624484062}},{"config":{"oX":434.734869338572,"oY":1743.0878790691495}},{"config":{"oX":449.9597391486168,"oY":1336.7250340282917}},{"config":{"oX":767.4926274865866,"oY":1408.2719754204154}},{"config":{"oX":84.99923365563154,"oY":1355.8311386927962}},{"config":{"oX":434.3797561302781,"oY":1558.973981514573}},{"config":{"oX":1508.1817229390144,"oY":264.9015990793705}},{"config":{"oX":1454.0228392481804,"oY":649.696172118187}},{"config":{"oX":1472.8081591129303,"oY":1132.9260893762112}},{"config":{"oX":1368.1087711080909,"oY":1385.5901830717921}},{"config":{"oX":320.65923115611076,"oY":987.5611377283931}},{"config":{"oX":218.66333156079054,"oY":983.0811056569219}},{"config":{"oX":676.1983541250229,"oY":320.61915381252766}},{"config":{"oX":1596.6111278906465,"oY":1421.4463639855385}},{"config":{"oX":612.5963895767927,"oY":237.63097169995308}},{"config":{"oX":1261.671320401132,"oY":730.3062422946095}},{"config":{"oX":459.51544723659754,"oY":900.0527396053076}},{"config":{"oX":1232.998998016119,"oY":571.0331940874457}},{"config":{"oX":1491.053621828556,"oY":943.9942755103111}},{"config":{"oX":176.07323833554983,"oY":1794.816895544529}},{"config":{"oX":986.2156928479671,"oY":216.60205444693565}},{"config":{"oX":1747.3732627406716,"oY":277.6420736387372}},{"config":{"oX":975.9239626675844,"oY":1316.9432840421796}},{"config":{"oX":469.5074895992875,"oY":1241.9320196136832}},{"config":{"oX":1367.4802392795682,"oY":1171.3506177440286}},{"config":{"oX":1440.4001976773143,"oY":273.42042046040297}},{"config":{"oX":194.96711314469576,"oY":370.07375322282314}},{"config":{"oX":495.6850986331701,"oY":1150.1452688723803}}],"waves":[["dfdf",["m4_sherman|20"],"12"],["dfdf",["heavy|4","m4_sherman_blue|12"],"12"]],"triggers":[],"timedEvents":[],"terrain":null}');
MAP.importFromJSON('{"name":"Wave Test Map","desc":"<p>This map is used to test the wave spawn feature of BattleTanks.</p><p>If you find any issue/bugs, please report it to: https://github.com/quarkdev/battletanks/issues</p>","dropRate":10, "powerups":[["chain",947.6639442890882,1698.1012163311243],["chain",1360.2522081881762,397.11663495004177],["chain",851.2144008055329,603.0040062814951],["chain",1548.3692760318518,1132.211729094386],["chain",1442.7973944470286,223.92386066168547],["chain",653.8140314742923,1614.8897902071476],["chain",31.94304259121418,105.46544495970011],["chain",854.4984662532806,341.47392339259386],["chain",37.33450148999691,1741.9024569019675],["chain",867.0134723111987,1656.3811284676194],["chain",1416.272616751492,882.3626026958227],["chain",1402.821619771421,1264.9770977720618],["chain",1383.5806264132261,1469.9645053222775],["chain",534.9046898111701,1715.1720748320222],["chain",1097.4632822200656,1031.4840767607093],["chain",1201.2294329479337,1671.3741068691015],["chain",207.21375643461943,180.71892526745796],["chain",793.3593205064535,1644.4114082828164],["chain",1588.6069081798196,1749.622626900673],["chain",1726.7487818151712,1419.2239026501775],["chain",90.92489929497242,1560.7099352404475],["chain",620.6136984452605,825.9863279610872],["chain",1368.6132784858346,18.94785415381193],["chain",1476.4121676385403,1407.7542867287993],["chain",248.32002264261246,1608.0697708502412],["chain",1174.0709890052676,275.80433951318264],["chain",82.13590727001429,1552.8789811357856],["chain",1296.0971338301897,923.9393583163619],["chain",63.367796413600445,1357.6698525622487],["chain",67.85921933501959,1787.6929738149047],["chain",264.9261415153742,216.5090378075838],["chain",20.536730356514454,959.9310517832637],["chain",1163.3548067584634,1285.8393158689141],["chain",1023.2695841342211,283.6174514070153],["chain",677.5839324072003,18.3353740721941],["chain",1039.0950369536877,1117.2318330556154],["chain",779.0186319798231,821.5514363050461],["rapid-fire",1331.9550096541643,943.7468959093094],["rapid-fire",1026.5526125058532,8.067487724125385],["rapid-fire",1344.3206164464355,861.167143844068],["rapid-fire",536.8427030816674,157.08055336028337],["rapid-fire",884.780083604157,1013.1510889828205],["rapid-fire",1607.1774216368794,1528.9261581525207],["rapid-fire",283.05547803640366,1591.089385136962],["rapid-fire",1033.1809337362647,1353.9036932364106],["rapid-fire",992.6891198381782,31.583890222012997],["rapid-fire",616.5254552140832,423.14894588291645],["rapid-fire",97.16352239996195,800.3062152117491],["rapid-fire",576.2319776639342,1117.2926646620035],["rapid-fire",351.6919523701072,709.5338315069675],["rapid-fire",201.06190288066864,605.5338358283043],["rapid-fire",223.39764603227377,1701.4308031350374],["rapid-fire",171.2661391273141,1574.5949294641614],["rapid-fire",377.2335326448083,256.0399119257927],["rapid-fire",1747.9151430800557,1340.1315988898277],["rapid-fire",1159.4949563965201,11.964062981307507],["rapid-fire",1445.8654890060425,1134.775694668293],["rapid-fire",779.0884647443891,19.620799764990807],["rapid-fire",749.8286688923836,1452.6473187357187],["rapid-fire",1400.7413962706923,1584.8704703003168],["multi-shot",493.5638673081994,983.8861578628421],["multi-shot",909.5034898146987,1014.6099582239985],["multi-shot",699.9526496529579,540.2029528543353],["multi-shot",1457.6680055111647,1685.7568628042936],["multi-shot",47.26926302164793,1277.907348766923],["multi-shot",1688.2897967845201,677.4478788077831],["multi-shot",1515.1075949817896,798.2007370814681],["multi-shot",1132.4660042747855,338.8081434443593],["multi-shot",539.6640775725245,814.0411994755268],["multi-shot",223.51363802701235,145.89198124408722],["multi-shot",638.3596463575959,230.15881110727787],["multi-shot",1262.2552205845714,464.2845513224602],["multi-shot",462.6352469623089,1242.240018479526],["multi-shot",1487.874989055097,1521.6222243010998],["multi-shot",1470.6682965159416,519.7772966623306],["multi-shot",474.72330551594496,1275.148369140923],["multi-shot",706.5711309760809,761.0646687671542],["multi-shot",487.78672651201487,1428.5190744549036],["multi-shot",1801.4100772216916,1483.6380404904485],["multi-shot",473.6032616123557,1264.890400417149],["multi-shot",1422.76795399189,711.1216583177447],["multi-shot",304.46614292263985,296.99850732833147],["multi-shot",685.6071413978934,571.5696902945638],["multi-shot",57.35751733928919,847.2854787111282],["multi-shot",1759.2190081626177,50.300030060112476],["multi-shot",189.01531420648098,912.8675604611635]],"destructibles":[["tree",593.4545741602778,272.11746215075254,32],["tree",276.37969167530537,1390.723529778421,32],["tree",570.0096853226423,957.7605733573437,32],["tree",1775.7595869675279,1214.4813669472933,32],["tree",53.04211876541376,629.4559695124626,32],["tree",1620.3646067529917,1718.3759571388364,32],["tree",1518.2010558620095,996.2362322956324,32],["tree",826.3827870413661,1297.4060211405158,32],["tree",912.3773576840758,589.2219408005476,32],["tree",1532.9601948335767,273.99143958091736,32],["tree",1780.8413219377398,1069.0118349641562,32],["tree",1126.469743564725,2.1759712770581245,32],["tree",1678.9307063519955,896.6605001538992,32],["tree",1542.8959356844425,1344.8900064826012,32],["tree",516.6059637665749,830.1417157128453,32],["tree",509.26302149891853,1398.8791999742389,32],["tree",79.3267114162445,1571.9734341949224,32],["tree",377.564661026001,948.006410010159,32],["tree",140.36949402093887,462.5762355476618,32],["tree",134.765296921134,247.72872278094292,32],["tree",1008.4659676775336,1716.9920376688242,32],["tree",139.42484168708324,1625.4479937404394,32],["tree",1626.9100833535194,1127.138571023941,32],["tree",1419.5421911627054,46.043244548141956,32],["tree",714.3722506687045,1055.8479951024055,32],["tree",1041.2558771967888,947.3341124653816,32],["tree",887.6238172352314,720.6882535815239,32],["tree",0.9701919257640839,1076.4884436875582,32],["tree",636.7803565263748,684.882413752377,32],["tree",211.36517849564552,899.2973150163889,32],["tree",200.30021251738071,1010.3407948985696,32],["tree",1122.2939506396651,307.6133542433381,32],["tree",1336.5952283665538,8.908556878566742,32],["tree",780.592721991241,1632.7170602604747,32],["tree",1391.6765466704965,1823.744895413518,32],["tree",774.2760030627251,1604.2680757418275,32],["tree",1466.5547574609518,566.3457943573594,32],["tree",1335.0572283491492,1293.4559281691909,32],["tree",1796.6015340909362,1014.5536150932312,32],["tree",1754.15086517483,560.3471392840147,32],["tree",1511.6933149024844,226.88597725331783,32],["tree",1685.9411994740367,1440.14051245898,32],["tree",803.1443421766162,1753.284571543336,32],["tree",1151.5875236615539,1611.9272136837244,32],["tree",981.8256901949644,66.80039944499731,32],["tree",597.07915263623,619.2397420406342,32],["tree",1173.1463129147887,948.5605237707496,32],["tree",1413.6752842515707,811.560897320509,32],["tree",804.0417404472828,121.0038349404931,32],["tree",310.45923209935427,36.03497164696455,32],["tree",1542.2432708144188,351.70162834972143,32],["tree",828.0072724968195,115.6096589192748,32],["tree",149.63684483617544,1777.8779988214374,32],["tree",1336.8520448505878,1348.043520949781,32],["tree",1384.0932940766215,212.02587667107582,32],["tree",532.0620803162456,53.23358289152384,32],["heavy_rubber",378.4937147498131,1421.3576476871967,32],["heavy_rubber",571.2278565019369,1455.5929427593946,32],["heavy_rubber",539.8674498125911,1037.4539773911238,32],["heavy_rubber",440.72592470794916,609.7624538093805,32],["heavy_rubber",985.5692325979471,956.9516892358661,32],["heavy_rubber",1734.945453889668,1659.7389575466514,32],["heavy_rubber",1179.826321899891,1088.6112922802567,32],["heavy_rubber",1491.468134187162,1420.9174636602402,32],["heavy_rubber",40.36203286796808,933.5161107257009,32],["heavy_rubber",67.49363683909178,529.9664828628302,32],["heavy_rubber",173.81614239513874,612.8121417537332,32],["heavy_rubber",310.3648318424821,471.43590588122606,32],["heavy_rubber",1396.93830268085,948.551063105464,32],["heavy_rubber",1476.0854691267014,1036.0698574706912,32],["heavy_rubber",809.0236353948712,18.47026616334915,32],["heavy_rubber",1030.2439439445734,397.7473313882947,32],["heavy_rubber",1003.8311870321631,730.868670925498,32],["heavy_rubber",1439.1212178245187,468.1492209881544,32],["heavy_rubber",67.83000283688307,1031.1027576327324,32],["heavy_rubber",1090.0802553892136,1044.463422395289,32],["heavy_rubber",1074.9766988530755,316.1182099208236,32],["heavy_rubber",83.26334702968597,19.119850806891918,32],["heavy_rubber",521.487378269434,85.04216529428959,32],["heavy_rubber",1617.1361798867583,939.8881824240088,32],["heavy_rubber",234.74263487756252,1357.1555868163705,32],["heavy_rubber",81.32476340979338,1189.1377951651812,32],["heavy_rubber",1389.04040620476,809.4612972289324,32],["heavy_rubber",449.49923361092806,235.22292894870043,32],["heavy_rubber",746.1838304847479,553.4914338067174,32],["heavy_rubber",1468.69539000839,621.0237737149,32],["heavy_rubber",1132.9535107389092,1639.171929448843,32],["heavy_rubber",919.2640883848071,446.474679261446,32],["heavy_rubber",1375.1886468306184,1376.7630685195327,32],["heavy_rubber",931.8909491747618,1442.2024380639195,32],["heavy_rubber",431.9922629445791,1542.160981245339,32],["heavy_rubber",760.3713528066874,1282.984996587038,32],["heavy_rubber",108.29356214404106,1497.355002477765,32],["heavy_rubber",840.8596213236451,1415.9620952680707,32],["heavy_rubber",532.6746635958552,633.564095556736,32],["heavy_rubber",1730.5936417132616,155.33963211625814,32],["heavy_rubber",693.9753174930811,397.06585559248924,32],["heavy_rubber",1472.263459302485,519.5604921206832,32],["heavy_rubber",54.5536172837019,1047.3048342838883,32],["heavy_rubber",1588.8655533492565,688.2967490404844,32],["heavy_rubber",1015.5295551046729,1005.2448640465736,32],["heavy_rubber",1304.4168688729405,1443.090467825532,32],["heavy_rubber",1709.667682506144,1481.4616725593805,32],["heavy_rubber",907.1919520497322,893.655285872519,32],["heavy_rubber",1121.6476806476712,1345.8462051004171,32],["heavy_rubber",1783.256959721446,13.88553399592638,32],["heavy_rubber",231.4408299922943,770.5713739469647,32],["heavy_rubber",1007.8623154833913,1618.1275766640902,32],["heavy_rubber",1265.9120494946837,1810.5706028267741,32],["heavy_rubber",951.37766289711,61.47226334363222,32],["heavy_rubber",423.1049610301852,1641.7137987613678,32],["heavy_rubber",1401.6313884928823,1495.9905075877905,32],["heavy_rubber",1817.2956638932228,58.61123789101839,32],["heavy_rubber",368.4886894002557,652.8944069892168,32],["heavy_rubber",1288.208253800869,842.3601876497269,32],["heavy_rubber",1460.7001251652837,660.6339985951781,32],["heavy_rubber",704.5335588231683,1767.7689014822245,32],["heavy_rubber",1102.9371907934546,915.373701184988,32],["heavy_rubber",741.0744032040238,189.3727725148201,32],["heavy_rubber",420.94782742112875,1752.6895467862487,32],["heavy_rubber",800.3921035453677,739.550783380866,32],["heavy_rubber",1369.6991260573268,1589.2406763508916,32],["heavy_rubber",602.2337356209755,790.640853099525,32],["heavy_rubber",1169.6181103214622,755.9384813681245,32],["heavy_rubber",63.173058830201626,1398.8039333894849,32],["heavy_rubber",253.22706167399883,1738.7010717317462,32],["heavy_rubber",809.1254344806075,1740.113689161837,32],["heavy_rubber",856.8391890898347,250.1110993847251,32],["heavy_rubber",1171.2349255755544,918.559502184391,32],["heavy_rubber",369.61590959876776,1680.2259808704257,32],["heavy_rubber",1190.1161686107516,1394.96658231318,32],["heavy_rubber",1520.143248014152,26.283728420734406,32],["heavy_rubber",806.3939942792058,670.3127348273993,32],["heavy_rubber",578.0769020989537,499.58111840486526,32],["heavy_rubber",1272.5950614139438,33.19636648893356,32],["heavy_rubber",1007.8876567482948,97.1259710714221,32],["heavy_rubber",1770.1887427791953,1403.5845000967383,32],["heavy_rubber",652.0409897491336,403.02655843645334,32],["heavy_rubber",855.5688655525446,194.8694483488798,32],["heavy_rubber",322.07942917943,1056.8553710058331,32],["heavy_rubber",1000.5658297240734,1603.3852385804057,32],["heavy_rubber",1671.2664144560695,109.04832337796688,32],["heavy_rubber",1253.6993515491486,1162.0934368148446,32]],"startingPoints":[{"config":{"oX":1584.8755036443472,"oY":662.3819186165929}},{"config":{"oX":1771.3605708405375,"oY":1033.3313709273934}},{"config":{"oX":299.04834263026714,"oY":1534.7926335856318}},{"config":{"oX":927.0020131096244,"oY":37.70472492277622}},{"config":{"oX":1220.634182408452,"oY":699.421628035605}},{"config":{"oX":54.73253754526377,"oY":500.8949146270752}},{"config":{"oX":2.2619619593024254,"oY":1206.2339465171099}},{"config":{"oX":1727.8419071808457,"oY":1546.7008898109198}},{"config":{"oX":115.37843723595142,"oY":1753.4277373105288}},{"config":{"oX":1678.7105476632714,"oY":964.3363120257854}},{"config":{"oX":1724.5230576395988,"oY":642.3045828267932}},{"config":{"oX":1816.9596762880683,"oY":1181.2519235908985}},{"config":{"oX":218.33069470524788,"oY":501.3835184723139}},{"config":{"oX":1397.6619630977511,"oY":1411.8618050515652}},{"config":{"oX":1123.3127394765615,"oY":747.6318605393171}},{"config":{"oX":1710.979238525033,"oY":1478.5652497708797}},{"config":{"oX":911.7997912243009,"oY":903.6526554599404}},{"config":{"oX":1809.8282597512007,"oY":1710.8535000532866}},{"config":{"oX":1055.8574854955077,"oY":1319.109026402235}},{"config":{"oX":32.63461013138294,"oY":1793.3621244952083}},{"config":{"oX":36.33010771125555,"oY":254.03420247137547}},{"config":{"oX":1515.5033087432384,"oY":504.19446402043104}},{"config":{"oX":229.3868039175868,"oY":1576.7593472376466}},{"config":{"oX":1758.2575455978513,"oY":693.5850821435452}},{"config":{"oX":1019.9390991255641,"oY":1614.093927718699}},{"config":{"oX":485.9379969164729,"oY":423.86883978545666}},{"config":{"oX":515.7197890207171,"oY":714.9213905408978}},{"config":{"oX":414.2932544052601,"oY":733.848965652287}},{"config":{"oX":1480.806492716074,"oY":1705.89820343256}},{"config":{"oX":1637.831515364349,"oY":1694.8506044447422}},{"config":{"oX":417.4449958205223,"oY":108.01778440922499}},{"config":{"oX":326.83575370162725,"oY":446.90190153568983}},{"config":{"oX":227.213724732399,"oY":195.9579119682312}},{"config":{"oX":177.7419536858797,"oY":1223.9593253284693}},{"config":{"oX":1066.8813820704818,"oY":114.93080511689186}},{"config":{"oX":778.4429995268583,"oY":806.0230756402016}},{"config":{"oX":1564.5717714205384,"oY":1691.3062235489488}},{"config":{"oX":1472.0090342089534,"oY":1775.2492452934384}},{"config":{"oX":1323.5366784855723,"oY":840.6088599711657}}],"waves":[["Easy Peasy",["m4_sherman|12"],"12"],["No Sweat",["m4_sherman|12","heavy|4"],"12"],["Not Quite There Yet",["jagdpanther|12","m4_sherman_blue|6"],"12"],["Reds",["heavy|20"],"12"]],"triggers":[],"timedEvents":[],"terrain":null}');
GLOBALS.map.index = 1;

// show progress bar
$('#progress').show();
var progressText = document.getElementById('progress-text');
var progressBar = document.getElementById('progress-bar');
var progressTextDone = document.getElementById('progress-text-done');
progressTextDone.style.display = "block";
progressText.innerHTML = 'Loading Game Assets...';

var totalAssets = UTIL.asset.getTotalQueued();
var totalLoaded = UTIL.asset.getTotalLoaded();
var totalFailed = UTIL.asset.getTotalFailed();

$(document).ready(function () {
    // start loading assets
    UTIL.asset.loadAll(function (item) {
        // everytime a queued item is loaded, update the progressbar
        totalLoaded = UTIL.asset.getTotalLoaded();
        progressTextDone.innerHTML = item + ' loaded';
        progressBar.value = (totalLoaded / totalAssets) * 100;
    }, function (error) {
        // if we encountered an error while loading, log it
        totalFailed = UTIL.asset.getTotalFailed();
        console.log(error);
    }, function () {
        // If everything has been loaded, Add statfields for all the tanks
        GLOBALS.tankSelection.blueprints = BLUEPRINT.getByType('tanks');
        for (var i = 0; i < GLOBALS.tankSelection.blueprints.length; i++) {
            STAT.add('td_' + GLOBALS.tankSelection.blueprints[i].name);
        }
        
        // then finally go to main menu
        progressTextDone.innerHTML = '';
        terrain = TerrainImages.get('default'); // default terrain
        $('#progress').hide();
        progressTextDone.style.display = 'none';
        menu();
    });
});
