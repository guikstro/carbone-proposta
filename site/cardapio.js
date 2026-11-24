// Cardápio da Carbone Steakhouse, copiado do cardápio digital público (menu.getin.app) em 23/11/2026.
// Preços e alergênicos exatamente como estão lá. `fix` guarda o texto original quando corrigimos digitação.
// `en` é tradução sugerida pela Timeless, a revisar pela casa.
// a = alergênicos informados pela casa; null = a casa não informa.
window.CARDAPIO = [
 {cat:'Para beliscar', en:'To nibble', itens:[
  {n:'Pão de alho', d:'Pão ciabatta com pasta de alho e mix de queijos.', a:['glúten','lactose'], p:32, en:['Garlic bread','Ciabatta with garlic paste and a mix of cheeses.']},
  {n:'Brisket & macaxeira', d:'Peito, macaxeira e catupiry.', a:['soja','lactose'], p:46, en:['Brisket & cassava','Brisket, cassava and catupiry cheese.']},
  {n:'Croquete de cordeiro', d:'Bolinhos crocantes de cordeiro e aioli da casa.', a:['ovo','soja','corantes','glúten','lactose'], p:45, en:['Lamb croquettes','Crispy lamb croquettes with house aioli.']},
  {n:'Porchetta crocante', d:'Panceta de porco com geleia de gengibre.', a:null, p:48, en:['Crispy porchetta','Pork belly with ginger jelly.']},
  {n:'Polvo espanhol', d:'Polvo grelhado, salsa romesco e tomate confit.', a:null, mar:1, p:74, en:['Spanish octopus','Grilled octopus, romesco sauce and tomato confit.']},
  {n:'Camarões kimchi', d:'Camarões com molho kimchi e pastéis de vento.', fix:'Camarões com kimchi sause e pasteis de vento.', a:null, mar:1, p:58, en:['Kimchi shrimp','Shrimp in kimchi sauce with puffed pastry crisps.']},
  {n:'Carpaccio', d:'Lâminas de carne, alcaparras e molho mostarda.', a:null, p:65, en:['Carpaccio','Thin slices of beef, capers and mustard sauce.']},
  {n:'Steak tartare', d:'Mignon na ponta da faca e salsa da casa.', a:null, p:74, en:['Steak tartare','Hand-cut filet mignon with house sauce.']},
  {n:'Burrata assada', d:'Queijo cremoso assado e pesto de tomate seco.', a:null, p:89, en:['Baked burrata','Baked creamy cheese with sun-dried tomato pesto.']},
  {n:'Empanaditas', d:'Mini empanadas de brisket com chimichurri.', a:null, p:34, en:['Empanaditas','Mini brisket empanadas with chimichurri.']},
  {n:'Linguiça dois queijos', d:'Linguiça em crosta de queijos gruyère e coalho.', a:null, p:38, en:['Two-cheese sausage','Sausage in a gruyère and coalho cheese crust.']}
 ]},
 {cat:'Saladas', en:'Salads', itens:[
  {n:'Salada CRBN', d:'Folhas, gorgonzola, maçã verde, castanhas caramelizadas, batata-doce e creme azedo.', a:null, p:49, en:['CRBN salad','Greens, gorgonzola, green apple, caramelized nuts, sweet potato and sour cream.']},
  {n:'Caesar na brasa', d:'Alface grelhada, bacon, fonduta de queijo e molho caesar.', a:['ovo','glúten','lactose'], p:48, en:['Ember-grilled Caesar','Grilled lettuce, bacon, cheese fonduta and Caesar dressing.']},
  {n:'Inspirado na caprese', d:'Folhas, mozzarella defumada, tomates e pesto verde.', a:['soja','castanhas','lactose'], p:46, en:['Caprese, our way','Greens, smoked mozzarella, tomatoes and basil pesto.']}
 ]},
 {cat:'Saindo da parrilla · steaks', en:'From the parrilla · steaks', nota:'250 g ou 500 g', itens:[
  {n:'Ribeye', d:'Conhecido como bife ancho, muito suculento e macio.', a:null, p:104, p2:208, en:['Ribeye','Also known as bife ancho: juicy and tender.']},
  {n:'Chorizo', d:'Corte dos “hermanos”, parte nobre do contrafilé.', a:null, p:92, p2:184, en:['Chorizo','The Argentinian cut, the prime part of the sirloin.']},
  {n:'Picanha', d:'Corte dos “brazucas”, não precisa explicar, né?', a:null, p:99, p2:198, en:['Picanha','Brazil’s favourite cut. Need we say more?']},
  {n:'Maminha', d:'Corte clássico retirado da alcatra.', fix:'R$250g | R$85 ◆ 500g | R$170', a:null, p:85, p2:170, en:['Maminha','Classic tri-tip cut from the rump.']},
  {n:'Flat iron', d:'Bife sem gordura retirado da paleta.', a:null, p:108, p2:216, en:['Flat iron','Lean steak from the shoulder.']}
 ]},
 {cat:'Saindo da parrilla · terra e mar', en:'From the parrilla · land and sea', itens:[
  {n:'Salmão', d:'Filé de salmão grelhado com molho da casa. 220 g', a:null, mar:1, p:89, en:['Salmon','Grilled salmon fillet with house sauce. 220 g']},
  {n:'Sirigado', d:'Lombo de peixe branco com molho da casa. 220 g', a:null, mar:1, p:89, en:['Sirigado','White fish loin with house sauce. 220 g']},
  {n:'Prime pork', d:'Corte nobre suíno com molho beurre blanc asiático. 350 g', a:null, p:79, en:['Prime pork','Prime pork cut with Asian beurre blanc. 350 g']},
  {n:'Galeto', d:'Meio galeto desossado, grelhado e glaceado.', a:null, p:41, p2:82, en:['Spring chicken','Half a boneless spring chicken, grilled and glazed.']},
  {n:'Carré de cordeiro', d:'Conhecido como french rack, famoso corte ovino. 300 g', a:null, p:149, en:['Rack of lamb','The classic French rack. 300 g']}
 ]},
 {cat:'Parrilla · seleção especial', en:'Parrilla · special selection', itens:[
  {n:'Wagyu', d:'Caracterizado pelo marmoreio incomparável. 400 g', a:null, p:410, en:['Wagyu','Known for its unmatched marbling. 400 g']},
  {n:'Bisteca fiorentina', d:'Corte clássico italiano com manteiga noisette. 950 g', a:null, p:365, en:['Bistecca alla fiorentina','Classic Italian cut with brown butter. 950 g']},
  {n:'Fraldinha', d:'Corte brasileiro com azeite de alho e ervas. 600 g', a:null, p:210, en:['Fraldinha','Brazilian flank cut with garlic and herb oil. 600 g']},
  {n:'Costela 4 ossos', d:'Costela bovina do dianteiro com roti. 950 g', a:null, p:319, en:['Four-bone short rib','Beef short rib with roti sauce. 950 g']}
 ]},
 {cat:'Acompanhamentos', en:'Sides', itens:[
  {n:'Arroz para churrasco', d:'Com ovo, bacon, vagem, coalho e batata crocante.', a:['ovo','soja','lactose'], p:34, en:['Barbecue rice','With egg, bacon, green beans, coalho cheese and crispy potato.']},
  {n:'Arroz de brócolis', d:'Arroz com brócolis, assados no forno de carvão.', a:null, p:34, en:['Broccoli rice','Rice with broccoli, roasted in the charcoal oven.']},
  {n:'Nosso baião', d:'Arroz, feijão-verde e nata.', a:['lactose'], p:39, en:['Our baião','Rice, green beans and cream, the Ceará way.']},
  {n:'Risoto de cogumelo', d:'Cogumelos frescos, funghi e alho caramelizado.', a:['lactose'], p:52, en:['Mushroom risotto','Fresh mushrooms, porcini and caramelized garlic.']},
  {n:'Purê de batata', d:'Purê de batatas.', a:['lactose'], p:35, en:['Mashed potatoes','Creamy mashed potatoes.']},
  {n:'Fritas Carbone', d:'Batatas fritas da casa, super crocantes.', a:['soja'], p:36, en:['Carbone fries','Extra-crispy house fries.']},
  {n:'Mil folhas', d:'Lâminas de batata com fonduta de queijo manteiga.', a:['lactose'], p:39, en:['Potato mille-feuille','Layered potato with butter-cheese fonduta.']},
  {n:'Macaxeira', d:'Macaxeira assada no forno de carvão com noisette.', fix:'Macaxeira assada no forno de carvão com noissete', a:null, p:36, en:['Cassava','Cassava roasted in the charcoal oven with brown butter.']},
  {n:'Legumes grelhados', d:'Seleção de legumes grelhados no forno a carvão.', a:null, p:36, en:['Grilled vegetables','Seasonal vegetables from the charcoal oven.']},
  {n:'Saladinha', d:'Mix de folhas, tomate e azeite de ervas.', a:null, p:32, en:['Side salad','Mixed greens, tomato and herb oil.']},
  {n:'Pasta al ajillo', d:'Nossa massa artesanal em alho e óleo.', a:['ovo','glúten','lactose'], p:39, en:['Pasta al ajillo','House-made pasta with garlic and olive oil.']},
  {n:'Farofa Carbone', d:'Mix de farinhas com ovo, bacon e banana.', a:['ovo','lactose'], p:34, en:['Carbone farofa','Toasted cassava flour with egg, bacon and banana.']}
 ]},
 {cat:'Cozinha do fogo', en:'From the fire kitchen', itens:[
  {n:'Ribeye CRBN', d:'Miolo do contrafilé, roti de cogumelos e mil folhas de batata em fonduta de queijo.', a:['lactose'], p:115, en:['Ribeye CRBN','Ribeye heart, mushroom roti and potato mille-feuille in cheese fonduta.']},
  {n:'Blue steak', d:'Filé, fettuccine em molho de gorgonzola e farofa crocante de panko.', a:['ovo','glúten','lactose'], p:98, en:['Blue steak','Filet, fettuccine in gorgonzola sauce and crispy panko crumbs.']},
  {n:'Tagliata', d:'Miolo de alcatra em crosta de pimenta-preta, rigatoni e salsa de tartufo.', fix:'TAGLIATTA', a:['ovo','lactose'], p:92, en:['Tagliata','Peppercorn-crusted rump heart, rigatoni and truffle sauce.']},
  {n:'Tuna', d:'Atum em crosta de furikake, coalhada fresca, salada cítrica de rúcula e erva-doce.', a:null, mar:1, p:89, en:['Tuna','Furikake-crusted tuna, fresh curd, citrus arugula and fennel salad.']},
  {n:'Polvo terra e mar', d:'Arroz japonês de polvo grelhado com kimchi da casa e linguiça portuguesa.', a:null, mar:1, p:89, en:['Octopus surf & turf','Japanese rice with grilled octopus, house kimchi and Portuguese sausage.']},
  {n:'Camarões e pesto', d:'Camarões grelhados com chili oil, spaghetti em pesto verde e creme de parmesão.', a:null, mar:1, p:105, en:['Shrimp & pesto','Grilled shrimp with chili oil, spaghetti in basil pesto and parmesan cream.']},
  {n:'Peixe Josper', d:'Peixe branco grelhado em forno de carvão, molho verde da praia, legumes tostados e farofa cítrica.', a:null, mar:1, p:95, en:['Josper fish','White fish from the charcoal oven, beach-style green sauce, charred vegetables and citrus farofa.']},
  {n:'Salmão Carbone', d:'Lombo de salmão em black rub, risotto de limone e caviar de tapioca.', a:null, mar:1, p:96, en:['Carbone salmon','Black-rub salmon loin, lemon risotto and tapioca pearls.']}
 ]},
 {cat:'Para compartilhar', en:'To share', itens:[
  {n:'Filé mignon', d:'Mignon grelhado na parrilla, molho catupiry, chips de batata-doce e arroz de alho.', a:null, p:219, en:['Filet mignon','Parrilla-grilled filet, catupiry sauce, sweet potato chips and garlic rice.']},
  {n:'Parmegiana', d:'Milanesa de mignon, ragu de tomates grelhados, mozzarella e spaghetti em manteiga de sálvia.', a:null, p:188, en:['Parmigiana','Breaded filet, grilled-tomato ragù, mozzarella and spaghetti in sage butter.']},
  {n:'Picanha fatiada', d:'Corte preferido dos brasileiros com farofa Carbone e nosso baião de feijão-verde.', a:null, p:254, en:['Sliced picanha','Brazil’s favourite cut with Carbone farofa and our green-bean baião.']}
 ]},
 {cat:'Sanduíches', en:'Sandwiches', itens:[
  {n:'Burger', d:'Blend da casa grelhado na parrilla, queijo cheddar e maionese.', a:['ovo','soja','glúten','lactose'], p:58, en:['Burger','House blend from the parrilla, cheddar and mayo.']},
  {n:'Melt', d:'Blend de 180 g, bacon e cebola caramelizada, creme de cheddar e aioli de dijon.', a:['ovo','soja','glúten','lactose'], p:62, en:['Melt','180 g blend, bacon, caramelized onion, cheddar cream and Dijon aioli.']},
  {n:'Blue', d:'Blend de 180 g, creme de gorgonzola, bacon, fio de mel e aioli.', a:null, p:64, en:['Blue','180 g blend, gorgonzola cream, bacon, a drizzle of honey and aioli.']}
 ]},
 {cat:'Sobremesas', en:'Desserts', itens:[
  {n:'Eu só quero chocolate', d:'Petit gâteau meio amargo, brownie e mousse branco tostado.', a:['ovo','castanhas','glúten','lactose'], p:39, en:['All I want is chocolate','Dark petit gâteau, brownie and toasted white mousse.']},
  {n:'Pudim & pera', d:'Pudim de leite, toffee de missô e peras grelhadas na brasa.', a:['ovo','glúten','lactose'], p:29, en:['Flan & pear','Milk flan, miso toffee and ember-grilled pears.']},
  {n:'Cookie', d:'Biscoito quente de chocolate, sorvete de baunilha e caramelo flor de sal.', a:['ovo','glúten','lactose'], p:35, en:['Cookie','Warm chocolate cookie, vanilla ice cream and fleur de sel caramel.']},
  {n:'Cheesecake basca', d:'Torta espanhola assada, frutas vermelhas e castanhas caramelizadas.', a:['castanhas','glúten','lactose'], p:38, en:['Basque cheesecake','Baked Spanish cheesecake, red berries and caramelized nuts.']},
  {n:'Alla tiramisù', d:'Tartelete com creme de mascarpone e licor de café.', a:['ovo','glúten','lactose'], p:33, en:['Alla tiramisù','Tartlet with mascarpone cream and coffee liqueur.']},
  {n:'Mousse de chocolate branco', d:'Chocolate branco tostado, compota de abacaxi e merengue suíço.', a:['ovo','glúten','lactose'], p:32, en:['White chocolate mousse','Toasted white chocolate, pineapple compote and Swiss meringue.']},
  {n:'Sorvete', d:'Consulte a disponibilidade com o garçom.', a:null, p:21, en:['Ice cream','Ask your waiter for today’s flavours.']},
  {n:'Frutas da estação', d:'Fruta do dia; consulte a disponibilidade com o garçom.', a:null, p:21, en:['Seasonal fruit','Fruit of the day; ask your waiter.']}
 ]}
];

window.BEBIDAS = [
 {cat:'Drinks Carbone', en:'Carbone signatures', itens:[
  {n:'Asa Branca', d:'Vodka, redução de graviola, limão, água de coco.', p:38},
  {n:'Red Velvet', d:'Meio doce: Cîroc, geleia de frutas vermelhas, Aperol, espuma de lichia.', p:38},
  {n:'Breakfast Martini', d:'Tequila silver, laranja, cardamomo.', p:35},
  {n:'Banzai', d:'Whisky, manjericão, mix cítrico, sal temperado.', p:37},
  {n:'Lotus Martini', d:'Vodka, licor de sabugueiro, creme de lichia, hortelã.', p:38},
  {n:'Pineapple Express', d:'Whisky, néctar de abacaxi, Licor 43, calda de alecrim, angostura.', p:37}
 ]},
 {cat:'Clássicos', en:'Classics', itens:[
  {n:'Moscow Mule', d:'Vodka, limão-siciliano, espuma de gengibre.', p:38},
  {n:'Negroni', d:'Gin, vermute rosso, Campari.', p:36},
  {n:'Cosmopolitan', d:'Vodka, triple sec, limão, cranberry.', fix:'Cramberry', p:38},
  {n:'Apple Martini', d:'Vodka, néctar de maçã verde, cítricos.', p:35},
  {n:'Porn Star Collins', d:'Vodka, maracujá, calda de baunilha, espumante.', p:38},
  {n:'Corpse Reviver', d:'Gin, Lillet Blanc, triple sec, cítricos, absinto.', fix:'CORPUS REVIVER', p:38},
  {n:'Aperol Spritz', d:'Aperol, prosecco, água gaseificada, laranja.', fix:'APEROL SPRITS', p:38},
  {n:'Fitzgerald', d:'Gin, calda de limão, bitter angostura.', p:36}
 ]},
 {cat:'Botânicos', en:'Botanicals', itens:[
  {n:'La Fragancia', d:'Tanqueray Ten, morango, dry orange, manjericão.', p:36},
  {n:'Tropical Gin', d:'Gin, tangerina, hortelã.', p:36},
  {n:'Infusion', d:'Gin, chá de framboesa com siciliano, hortelã.', p:36}
 ]},
 {cat:'Brasileiros', en:'Brazilian', itens:[
  {n:'Caipirinha', d:'Ypióca Prata.', p:26},
  {n:'Caipirinha premium', d:'Ypióca 150.', p:34},
  {n:'Caipiroska', d:'Smirnoff.', p:34},
  {n:'Caipiroska premium', d:'Ketel One ou Absolut.', p:38},
  {n:'Caipiroska super premium', d:'Cîroc, Belvedere, Grey Goose ou Absolut Elyx.', p:44}
 ]},
 {cat:'Sem álcool', en:'Alcohol-free', itens:[
  {n:'Pink Punch Mule', d:'Melancia, maracujá, limão e espuma cremosa de lichia.', p:24},
  {n:'Mirandita', d:'Geleia de laranja, xarope de morango, água gaseificada.', p:22},
  {n:'Apple Mojito', d:'Néctar de maçã verde, calda de hortelã, mix cítrico.', p:25},
  {n:'Sodas italianas', d:'Maçã verde, cranberry ou limão-siciliano.', fix:'Cramberry', p:21}
 ]},
 {cat:'Whisky · single malt', en:'Whisky · single malt', fixCat:'Wisky | Single Malt', itens:[
  {n:'The Macallan', fix:'The Macalan', p:79},{n:'Glenfiddich 12', p:48},{n:'The Dalmore 12', p:72},
  {n:'The Chita (single grain)', p:59},{n:'Talisker', p:42},{n:'The Singleton', p:32}
 ]},
 {cat:'Whisky · blended scotch', en:'Whisky · blended scotch', fixCat:'Wisky | Blended Scotch', itens:[
  {n:'Johnnie Walker Red Label', p:22},{n:'Johnnie Walker Black Label', p:30},{n:'Johnnie Walker Gold Reserve', p:47},
  {n:'Johnnie Walker Green Label', p:48},{n:'Johnnie Walker Blue Label', p:130},{n:'Royal Salute', p:89},
  {n:'Chivas 18', p:68},{n:'Chivas 12', p:28},{n:'Swing', p:75},{n:'Buchanan’s 12', p:34},{n:'Old Parr', p:26}
 ]},
 {cat:'Whisky · irish, american, bourbon', en:'Whiskey · Irish, American, bourbon', fixCat:'Wisky | Irish / American / Bourbons', itens:[
  {n:'Jack Daniel’s', p:25},{n:'Jack Daniel’s Honey', p:20},{n:'Maker’s Mark', p:29},{n:'Jameson', p:29},{n:'Wild Turkey', p:29}
 ]},
 {cat:'Destilados', en:'Spirits', itens:[
  {n:'Rum', d:'Bacardi ou Malibu.', fix:'RUN', p:19},
  {n:'Rum premium', d:'The Kraken ou Havana 7 anos.', fix:'RUN PREMIUM', p:28},
  {n:'Tequila', d:'Jose Cuervo Gold ou Silver.', p:24},
  {n:'Tequila premium', d:'1800 Silver ou Reposado.', fix:'Repousado', p:38},
  {n:'Gin premium', d:'Beefeater, Tanqueray ou Bombay.', p:24},
  {n:'Gin super premium', d:'Tanqueray Ten ou Roku.', p:45},
  {n:'Amargos', d:'Campari, Jägermeister ou Martini Bianco.', p:18},
  {n:'Saquê', d:'Jun Daiti.', p:19},
  {n:'Cachaça premium', d:'Leblon, Ypióca 150 ou Ypióca 160.', p:19}
 ]},
 {cat:'Vodkas', en:'Vodka', itens:[
  {n:'Super premium', d:'Grey Goose, Cîroc ou Absolut Elyx.', p:32},
  {n:'Premium', d:'Ketel One, Absolut ou Stolichnaya.', p:24},
  {n:'Standard', d:'Smirnoff.', p:19}
 ]},
 {cat:'Cervejas', en:'Beer', itens:[
  {n:'Chopp Heineken 300 ml', p:17},{n:'Chopp Amstel 300 ml', p:13},{n:'Heineken 600 ml', p:26},
  {n:'Heineken long neck', p:18},{n:'Eisenbahn Pilsen long neck', p:18},{n:'Cerpa Export long neck', p:19},
  {n:'Corona long neck', p:18},{n:'Stella Artois long neck', p:18},{n:'Baden Baden Cristal', p:28},
  {n:'Baden Baden IPA', p:28},{n:'Paulaner Hefe-Weißbier 500 ml', p:48},{n:'Blue Moon Belgian White 355 ml', p:23}
 ]},
 {cat:'Vinho em taça', en:'Wine by the glass', itens:[
  {n:'Tinto, branco ou espumante', p:24, en:['Red, white or sparkling','']}
 ]}
];
