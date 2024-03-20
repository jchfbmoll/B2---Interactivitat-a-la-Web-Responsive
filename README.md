# B2---Interactivitat-a-la-Web-Responsive
Segona pràctica de l'assignatura Llenguatge de Marques de 1er de DAW, què és una pàgina web responsive amb interactivitat amb JS

# TaxiWaiting, el teu transport a Mallorca 
## Estructura de carpetes i directoris


- **Pàgines HTML:**
  - `index.html`: Pàgina principal que mostra un carrusel d'imatges de Mallorca i presenta els serveis a nes clients.
  - `excursions.html`: Mostra les excursions que s'ofereixen amb una petita descripció de cadasquna amb una imatge relacionada amb l'excursió. Ademés, dona l'opció als usuaris de escriure les seves opinions i comentaris de la web i de les excursions.
  - `reserves.html`: Ofereix l'opció als usuaris de fer una reserva dels serveis oferits.
  - `contacte.html`: Ofereix l'opció als usuaris de posar-se en contacte amb nosaltres per oferir-nos les seves sugerències o demanar-nos els seus dubtes. Parescut a sa part des comentaris, però mes enfocat a contactar directament amb nosaltres i no relacionar-se entre els usuaris.
 
- **Estils CSS:**
  -`./css/`: Directori on tenim els diferents arxius css.
  -`estils.css`: Full d'estils per estilitzar els diferents elements de les diferents pàgines.
- **Imatges**
  -`./img/`: Directori on es guarden totes les imatges que es fan servir a la web.
- **JS**
  -`./js/`: Directori on es guarden els arxius d'scripts en JavaScript (JS).
  -`script.js`: Script en JS, on tenim totes les funcions que donaran interactivitat a sa web.

## Tecnologies utilitzades

- **HTML:** És la base de les nostres pàgines WEB.
- **CSS:** Per estilitzar les pàgines en HTML i donar-lis format.
- **JS:** Per oferir interactivitat a les pàgines HTML i unes característiques que no serien possible tota sola

## Software utilitzat

- **VS Code:** Per crear i editar els arxius .html, .css i .js.
- **Gimp:** Per crear el logotip de la pàgina.
- **Mozilla Firefox:** Per visualitzar i testejar els diferents elements de la WEB.

## Elements comuns a la WEB

### Capçalera

És l'element superior en totes les pàgines. La seva funció es la de fer de menú de navegació de la web i està composta pels següents elements.

- **Logotip:** Creat amb Gimp, representa la companyia i a sa web, la seva funció és la de tornar a la pàgina inicial.
- **Enllaços:** Enllaços a les diferents pàgines la WEB.
- **Imatge de mode:** Botó que ens permet canviar ente modes. noctur i diurn. En cada mode, la imatge del botó és diferent.

Tots aquests elements, ens permeten una navegació clara, intuitiva i senzilla a través de la WEB.

### Principal

És l'element principal de cada pàgina, i és l'element on l'usuari interactuarà amb la WEB. Trobant informació en ella o interactuant a través del diferents formularis.

### Footer

És el darrer element de cada pàgina, i conté informació sobre l'equip creador de la WEB.

## Pàgines de la WEB

### Index.html

Pàgina inicial de la WEB, on l'usuari trobarà tota l'informació necessària per conèixer TaxiWaiting i els diferents serveis que oferim

#### Funcionalitat i interactivitat.

L'usuari, pot navegar, a través del menú, a les diferents WEBs. A travès del logotip es torna a la pàgina inicial, i a l'icone de la lluna es pot canviar al mode oscur.

A continuació, ens trobam el carrusel d'imatges, que va canviant cada 2 segons, encara que també podem navegar a través del carrusel amb les fletxes que hi ha a tots dos costats, quan s'utilitza una de les fletxes, es reinicien els temporitzadors dels carrusels.

#### Captures de pantalla

###### Logotip

El farem servir per tornar a la pàgina principal cada vegada que cliquem en ell.

![logo](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/1f7d0d8d-6822-4270-810c-4395e708988d)

###### Mode nocturn icone

Clicant en ell canviam a mode nocturn.

![dark](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/c2759003-1a77-483b-8a21-c24cef157f72)

###### Mode diurn icone

Clicant en ell canviam a mode diurn.

![sol](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/c9578a2a-0abf-4aa9-a26c-bb7c636ed391)

###### Index mode diurn

Podem veure, diferents imatges de com va variant es carrusel, en mode diurn.
![index](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/a9f9c16f-c980-4ffa-b9e6-302c2ced7a0e)
![index1](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/932935db-f795-41a7-b8a7-14bcacdf40ee)
![index2](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/3e461626-d2fa-45bf-ad3d-a26bb59f8ff6)
![index3](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/f2c75292-91d3-42d7-a62e-b5823864167e)

###### Index mode nocturn
Podem veure, diferents imatges de com va variant es carrusel, en mode nocturn.
![indexnoct](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/d7345b6f-4cb9-4275-904a-1aaf75c46c50)
![indexnoct2](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/e82baee2-e1e4-48d8-a775-649e988e4183)

### Excursions.html

Segona pàgina, on l'usuari trobarà tota l'informació referent a les excursions que s'ofereixen. A més, aquí es troba la secció de comentaris.

#### Funcionalitat

L'usuari, si clica damunt els títols de les excursions, farà mes grosses ses àrees d'aquestes, visualitzant la descripció de l'excursió i visualitzant una imatge relacionada amb aquesta excursió, si torna a pitjar sobre aquesta àrea, aquesta es tancarà i tota la web tornarà a sa seva posició anterior. 
A més, després te totes les excursions, hi ha un formulari de comentaris, on l'usuari pot afegir un comentari a la web, si se introduïssin bases de dades, aquest apartat es podria utilizar per a que tots el usuaris interactuassin entre ells, pero actualment, al no disposar d'aquesta tecnologia, l'usuari és l'únic que pot veure els seus propis missatges. Però, quan refresqui, tots aquests missatges es perderan.

#### Captures de pantalla

###### Pàgina amb tots es divs replegats

![excursion1](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/33f246c9-9f5d-4436-959c-e0ba0222a148)

###### Pàgina amb tots es divs oberts
![excursiontotobert](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/29f6e514-78e9-4445-b36b-c4559bae6398)

###### Pàgina amb tots es divs oberts amb comentaris
![excursiototobertcomms](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/3ad0ed03-7d33-4d61-8ec1-e92a66ef6902)
###### Pàgina amb tots es divs oberts sense comentaris nocturn
![excursiototobertnocturn](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/d0a03da5-8020-48e8-be24-659c08cc90bf)
###### Pàgina amb tots es divs oberts amb comentaris nocturn
![excursiototobertnoctcomms](https://github.com/jchfbmoll/B2---Interactivitat-a-la-Web-Responsive/assets/151379997/8950e5de-be78-487e-8c52-f3ec45102c87)
### Reserves.html

Tercer pàgina, on l'usuari pot reservar qualsevol dels serveis que s'ofereixen.

#### Funcionalitat

Aquí, l'usuari pot realitzar una reserva dels serveis que s'ofereixen a la WEB. Pot triar entre tres opcions, un taxi normal i corrent, un transfer entre el lloc on dormirà i el port o l'aeroport o una excursió per qualsevol de les opcions que disposam. Si tria un servei normal o un transfer, l'usuari haurà de afegir, l'origen, el destí, la data de recollida, l'hora de recollida i a més podrà afegir comentaris extra, com si necessita un maleter molt gros, una cadireta de nadó o un cotxe adaptat per minusvàlits. En el cas de tria una excursió, haura de seleccionar, l'origen, quina excursió vol fer, la data, l'hora i comentaris extra. S'única diferència es que a un tria el destí i a l'altra l'excursió. A més, com a sa resta, por navegar entre les diferents pàgines i pot tria entre mode nocturn o no.

#### Captures de pantalla


### Contacte.html

Darrera pàgina, on l'usuari es trobarà el formulari de contacte.

#### Funcionalitat

 Ademés de les opcions comuns de la resta de pàgines, en aquesta pàgina, l'usuari únicament podrà omplir un contacte per enviar les seves sugerències o els seus comentaris o dubtes que tengui.

#### Captures de pantalla


# Responsive

