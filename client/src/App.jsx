import { useState, useRef, useEffect, useCallback } from "react";

const KB_ES = `=== SÍŤ A: ELECTREE SOLAR ===
SPOLEČNOST: Electree Solar a.s. | web: electreesolar.cz
Telefon: +420 722 981 190 | Email: info@electreesolar.cz | Provozní doba: Po–Pá 9:00–16:00

KLÍČOVÉ VÝHODY:
- Realizace na klíč: vše od návrhu po zapojení
- Dotace: kompletní administrativa za zákazníka, garantována smluvně
- Instalace průměrně do 2 měsíců od smlouvy o připojení
- Záloha pouze od 10 %, zbytek po dokončení
- Technici po celé ČR
- Smlouvu lze vypovědět bez sankce do 30 dní od vyhlášení nových dotačních pravidel

PRODUKTY — RODINNÉ DOMY (ceny bez DPH, orientační):
1. GoodWe 5 kWp — 5 kWp + 7 kWh baterie — 267 777 Kč — splátka 2 613 Kč/měs — úspora ~2 300 Kč/měs — záruka střídač/bat 10/10 let
2. GoodWe 7 kWp — 7 kWp + 11 kWh baterie — 330 073 Kč — splátka 3 547 Kč/měs — úspora ~3 210 Kč/měs — záruka 10/10 let
3. GoodWe 10 kWp — 10 kWp + 11 kWh baterie — 360 992 Kč — splátka 4 176 Kč/měs — úspora ~4 583 Kč/měs — záruka 10/10 let
4. Solax 10 kWp (Premium) — 10 kWp + 11 kWh baterie — 387 713 Kč — splátka 4 719 Kč/měs — záruka 10/10 let
POZNÁMKA: Ceny jsou orientační, vždy potvrdit přímo u Electree Solar.

STANDARDNÍ KOMPONENTY: Panely AIKO | Střídač GoodWe | Baterie Pylontech
ELECTREE PULSE: chytré řízení — automatické načasování odběru/prodeje dle cen trhu, záporné ceny využívá ve prospěch zákazníka.

SEGMENTY:
- Rodinné domy: kompletní servis, dotace, montáž
- Bytové domy: řešení pro SVJ a bytová družstva
- Firmy: dotace RES+ až 30 % nákladů (50 kWp–5 MWp vlastní spotřeba; 10–50 kWp pouze Praha; do 31.1.2026)
- Města a obce: podpora pro veřejný sektor

SERVISNÍ BALÍČKY:
1. Vizuální prohlídka — vizuální kontrola panelů a konstrukce, základní posouzení stavu
2. Revize FVE — odborná kontrola tech. stavu, zpráva o stavu, ověření bezpečnosti
3. Správa FVE — pravidelný monitoring výroby, vyhodnocování, doporučení zásahu
4. Servis FVE — nonstop monitoring, přednostní zásahy, kompletní tech. podpora

SERVISNÍ FAQ: Doporučená frekvence 1× ročně. Zákonná povinnost: revize elektroinstalace ano (firmy), obecný servis ne. Čištění panelů 1× za 1–2 roky. Délka servisu RD 1–3 hodiny.

DOTACE NOVÁ ZELENÁ ÚSPORÁM 2026+ (od jara 2026):
- Bezúročný úvěr (0 % úrok) na komplexní i dílčí renovace (zateplení, okna, TČ, FVE) pro RD i BD. Spuštění: květen 2026 (výzva), červen 2026 (příjem žádostí na SFŽP), září 2026 (příjem žádostí v bankách).
- NZÚ Light (dotace pro nízkopříjmové domácnosti): Až 250 000 Kč na zateplení, až 150 000 Kč na výměnu zdroje/OZE (TČ, solární ohřev). Spuštění: květen 2026 (výzva), červen 2026 (příjem žádostí).
- Renovační pas a energetické poradenství zdarma (od dubna 2026).
- Kompenzace za přípravu projektů z roku 2025: Až 50 000 Kč pro RD, až 100 000 Kč pro BD (pro ty, co nestihli podat žádost v roce 2025). Příjem žádostí od 25. března 2026.
Celou administrativu zajišťuje ES. Chaty/chalupy: možná pokud číslo popisné + trvalý pobyt 24+ měsíců.

PROCES: Konzultace (zdarma) → Smlouva + 10% záloha → Projekt + dotace → Montáž do 2 měsíců → Zprovoznění → Žádost o dotaci → Vyplacení 6–8 týdnů.`;

const KB_TRANSFER = `=== SÍŤ B: PŘECHOD ACETEX → ELECTREE SOLAR ===
SITUACE: Acetex s.r.o. je v insolvenčním řízení a nemůže pokračovat v poskytování služeb. Vedení Acetexu dohodlo s Electree Solar a.s. převzetí veškeré klientské péče.

CO ELECTREE SOLAR PŘEBÍRÁ:
- Monitoring provozu FVE
- Servis a technická podpora
- Pomoc s reklamacemi a zárukami
- Revize, kontroly a servisní úkony

PRŮBĚH PŘECHODU: Probíhá postupně. ES bude klienty kontaktovat telefonicky. Klienti mohou kontaktovat ES předem přes formulář: electreesolar.cz/klienti-acetex-prechazeji-pod-electree-solar/
Formulář nabízí: Servis, Revize, Rozšíření instalace, Servisní prohlídka, Zájem o FVE/TČ/Baterie, Ostatní.

POKUD FVE FUNGUJE: Nemusíte nic akutně řešit, ES vás včas zkontaktuje.
POKUD FVE NEFUNGUJE / PROBLÉM: Kontaktujte ES co nejdříve: Tel: +420 722 981 190 (Po–Pá 9–16h), Email: info@electreesolar.cz

STARÉ KONTAKTY ACETEX (již NEFUNGUJÍ): tel. 770 110 011, info@acetex.cz — zákazníci Acetexu kontaktují POUZE Electree Solar.

ZÁRUKY: Záruky na hardware jsou vázány na výrobce — nezanikají insolvencí dodavatele. ES přebírá pomoc s reklamacemi. Připravte: záruční listy, faktury, sériová čísla.

SMLOUVY/ZÁLOHY Z DOBY ACETEXU: Pro nezaplacené zálohy nebo nedokončené instalace kontaktujte insolvenčního správce Acetexu nebo právního poradce. ES pomůže s technickými záležitostmi.

KOMPENZACE NZÚ 2026 PRO KLIENTY Z ROKU 2025:
Pokud jste s Acetexem připravovali projekt renovace pro NZÚ v roce 2025 a nestihli jste podat žádost, stát nabízí kompenzaci:
- Až 50 000 Kč na projekt rodinného domu (RD)
- Až 100 000 Kč na projekt bytového domu (BD)
Příjem žádostí o tuto kompenzaci začíná 25. března 2026. Electree Solar vám může pomoci s novým řešením a žádostí.`;

const ACETEX_CHUNKS = [{"id":"faq_01","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Kolik fotovoltaikou ušetřím?\nOdpověď: Naši klienti po instalaci FVE vždy oproti původním nákladům ušetřili, a to o desítky procent. Konkrétní výpočet závisí na mnoha faktorech – konzultaci poskytneme zdarma."},{"id":"faq_02","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaká je návratnost fotovoltaiky?\nOdpověď: Průměrná návratnost investice se pohybuje mezi 6–9 lety, v závislosti na velikosti systému, orientaci střechy a spotřebě domácnosti."},{"id":"faq_03","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaké komponenty Acetex instaloval?\nOdpověď: Střídače: GoodWe (NS, DNS, ET, DT), Wattsonic All-in-One Gen 3, AEG Solar ICH02. Baterie: GoodWe Lynx Home HV, Pylontech US2000B a H2, AEG AS-BBH1, Wattsonic HV, Force H1/H2. Panely: JA Solar, Luxen (Mono/Bifacial/FullBlack), Canadian Solar, AEG Solar, AIKO (450W ABC), Trinasolar."},{"id":"faq_04","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Potřebuji na FVE stavební povolení?\nOdpověď: Do výkonu 50 kW stavební povolení nepotřebujete. Výjimkou jsou objekty v památkových zónách."},{"id":"faq_05","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak dlouho realizace FVE trvala u Acetexu?\nOdpověď: Od poptávky po vyplacení dotace průměrně 4–6 měsíců. Samotná montáž na RD trvá 1–2 dny."},{"id":"faq_06","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Z čeho se fotovoltaika skládá?\nOdpověď: Tři základní komponenty: fotovoltaické panely (přeměňují světlo na DC proud), střídač (převádí DC na AC pro spotřebiče) a baterie (ukládá přebytky na pozdější využití)."},{"id":"faq_07","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak poznám, že je pro mne vhodné bateriové úložiště?\nOdpověď: Pokud jste doma spíše ráno a večer, baterie se vyplatí – uložíte přebytky z poledne na večer. Zvyšuje míru vlastní spotřeby z ~30 % na 70–80 %."},{"id":"faq_08","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Funguje FVE v zimě nebo při zatažené obloze?\nOdpověď: Ano, funguje i v zimě – jen s nižším výkonem. Panely reagují na světlo, ne na teplo. Sníh na panelech je krátkodobý, panely jsou skloněné."},{"id":"faq_09","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je NZÚ Light a kolik lze získat?\nOdpověď: Nová zelená úsporám Light – dotace MŽP ČR pro rodinné domy. FVE bez baterie až 100 000 Kč, s baterií až 147 000 Kč. Podmínka: vlastní RD, trvalé bydliště. Žádost po dokončení instalace, správce SFŽP ČR."},{"id":"faq_10","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Potřebuji povolení od distributora?\nOdpověď: Ano, ke každé FVE nad 1 kWp je potřeba souhlas distributora a smlouva o připojení. Administraci vyřizuje instalační firma. Proces trvá 1–3 měsíce. Od července 2025 povinný výrobní EAN."},{"id":"faq_11","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je výrobní EAN?\nOdpověď: Povinný identifikátor pro každý zdroj elektřiny od července 2025. Bez aktivního výrobního EAN a smlouvy o výkupu nelze legálně provozovat FVE připojenou k síti."},{"id":"faq_12","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je hybridní střídač?\nOdpověď: Kombinuje klasický střídač (DC→AC) s bateriovým měničem. Řídí výrobu z panelů, nabíjení/vybíjení baterie a tok energie ze/do sítě. Základ pro systémy s bateriovým úložištěm."},{"id":"faq_13","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je backup (záložní zdroj)?\nOdpověď: Umožňuje systému fungovat i při výpadku sítě. Hybridní střídač s baterií při blackoutu automaticky odpojí dům od sítě a zásobuje spotřebiče. Ne všechny střídače tuto funkci mají."},{"id":"faq_14","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak probíhá monitoring FVE?\nOdpověď: GoodWe: SEMS Portal (home.semsportal.com) nebo mobilní aplikace SEMS Portal. Wattsonic: Wattsonic App. AEG: AEG Solar App. Zobrazuje výrobu, spotřebu, stav baterie, historii a chybové stavy."},{"id":"faq_15","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak se připojím na SEMS portal GoodWe?\nOdpověď: Potřebujete e-mail a heslo zadané při registraci na home.semsportal.com nebo v mobilní aplikaci SEMS Portal. Zapomenuté heslo: funkce Reset. Nemáte účet: kontaktujte technickou podporu (nyní Electree Solar)."},{"id":"faq_16","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Kde na SEMS portálu najdu základní informace o mé FVE?\nOdpověď: V levém horním rohu SEMS portálu: datum připojení, instalovaný výkon (PV kapacita), kapacita baterie, místo instalace, předpověď počasí."},{"id":"faq_17","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co dělat když střídač hlásí chybu?\nOdpověď: 1) Zkontrolujte SEMS Portal/Wattsonic App – zobrazí přesný kód chyby. 2) Restartujte: vypněte AC a DC jistič, počkejte 5 minut, zapněte. Běžné chyby E02–E05 jsou přechodné. 3) Pokud přetrvává, kontaktujte Electree Solar +420 722 981 190."},{"id":"faq_18","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co dělat když FVE přestala vyrábět?\nOdpověď: Zkontrolujte: 1) Je noc nebo hustě zamračeno? Normální. 2) Kontrolky na střídači. 3) Monitorovací portál – chybové kódy. 4) Jističe v rozvaděči – není vypnutý FV nebo AC jistič? Pokud přetrvává, volejte Electree Solar +420 722 981 190."},{"id":"faq_19","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak aktualizovat firmware GoodWe?\nOdpověď: Online přes SEMS Portal: detail zařízení → Nastavení → Aktualizace firmwaru. Nebo offline přes SD kartu. Aktualizujte pouze pokud technická podpora doporučuje konkrétní verzi."},{"id":"faq_20","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak připojit GoodWe střídač k WiFi?\nOdpověď: 1) Aktivujte AP mód na střídači. 2) Připojte telefon na WiFi střídače (SSID: SSEMS_XXXXXX). 3) V aplikaci zadejte přihlašovací údaje domácí WiFi. 4) Střídač se připojí k routeru."},{"id":"faq_21","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaká je záruka na Luxen Fullblack panely?\nOdpověď: 12letá produktová záruka a 25letá lineární výkonová záruka."},{"id":"faq_22","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaká je záruka na GoodWe střídač?\nOdpověď: Standardní 5–10 let (dle modelu). Prodloužená záruka dostupná za příplatek. Vyžaduje registraci na SEMS Portalu do 30 dnů od instalace."},{"id":"faq_23","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je Pylontech US2000B?\nOdpověď: LiFePO4 bateriový modul, kapacita 2,4 kWh, napětí 48V (LV). Životnost 6 000 cyklů nebo 10 let (min. 80 % kapacity). Až 8 modulů paralelně (max. 19,2 kWh)."},{"id":"faq_24","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je GoodWe Lynx Home HV baterie?\nOdpověď: Napětí 100–560V DC, kapacita 5,4–16,2 kWh, až 3 moduly paralelně. Po 10 letech nebo 6 000 cyklech garantováno 70 % původní kapacity."},{"id":"faq_25","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaký je rozdíl mezi LV a HV baterií?\nOdpověď: LV (48V) pro menší systémy s LV střídačem. HV (100–560V) nabízí vyšší účinnost a rychlejší nabíjení – pro větší instalace. HV baterie vyžadují HV kompatibilní střídač."},{"id":"faq_26","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je Wattsonic All-in-One Gen 3?\nOdpověď: Hybridní střídač s integrovanou HV baterií v jednom boxu. Výkony 4–12 kW, kapacita baterie 3,84–7,68 kWh. Modulární rozšíření až 8 modulů. Záruka 10 let střídač, 10 let baterie."},{"id":"faq_27","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je Force H1/H2 baterie?\nOdpověď: HV bateriové moduly, kapacita ~3,84–7,68 kWh na modul. Lze zapojit paralelně. Určeny pro HV hybridní střídače."},{"id":"faq_28","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je WattRouter a k čemu slouží?\nOdpověď: IR WattRouter ECO/MX přesměrovává přebytky FVE do spotřebičů s regulovatelným příkonem (bojler, přímotop). Maximalizuje vlastní spotřebu. Instaluje se do rozvaděče."},{"id":"faq_29","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je iBoost?\nOdpověď: IR-Solar iBoost ohřívá teplou vodu z přebytků FVE. Sleduje přetoky do sítě a přesměrovává je do bojleru. Funguje bez internetu, měří přetoky přímo na měřiči."},{"id":"faq_30","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak funguje tepelné čerpadlo?\nOdpověď: TČ přenáší teplo ze vzduchu (vzduch-voda) do objektu. COP 3–5: z 1 kWh elektřiny získáte 3–5 kWh tepla. Acetex instaloval: Viessmann Vitocal 200-S, Stiebel Eltron s WPM."},{"id":"faq_31","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Je TČ hlučné?\nOdpověď: Viessmann Vitocal 200-S: 46 dB(A). Stiebel Eltron: ~35–40 dB. Srovnatelné s lednicí, vhodné i pro řadové domy."},{"id":"faq_32","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Je vhodné zkombinovat FVE s tepelným čerpadlem?\nOdpověď: Ano, ideální kombinace. FVE pokryje výrobu energie, TČ efektivně vytápí a ohřívá vodu. Synergicky snižují provozní náklady."},{"id":"faq_33","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Kolik s tepelným čerpadlem ušetřím?\nOdpověď: Náhrada elektrického kotle: úspora až 70 % ročních nákladů. Náhrada plynového kotle: ~50 %. Závisí na parametrech domu."},{"id":"faq_34","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak probíhá reklamace produktu zakoupeného přes Acetex?\nOdpověď: Záruky jsou vázány na výrobce – nezanikají insolvencí Acetexu. Kontaktujte Electree Solar (+420 722 981 190). Připravte: model, sériové číslo, datum instalace, popis závady, foto."},{"id":"faq_35","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Kolik stojí fotovoltaika?\nOdpověď: Cena FVE pro RD se pohybuje v řádu nižších statisíců. S dotací NZÚ Light (až 147 000 Kč s baterií) se výrazně sníží. Pro aktuální ceny kontaktujte Electree Solar."},{"id":"faq_36","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je AEG Solar ICH02?\nOdpověď: Hybridní střídač, výkony 3–10 kW (jednofázový). Kompatibilní baterie: AEG AS-BBH1 HV (10 nebo 15 kWh). Funkce: backup, smart load management, export limit."},{"id":"faq_37","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaká panely AIKO instaloval Acetex?\nOdpověď: AIKO 450W MAH54Mw, technologie ABC (All Back Contact), účinnost 22,8 %. Výkonová záruka 30 let (min. 87,4 % po 30 letech). Produktová záruka 15 let."},{"id":"faq_38","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jaká je záruka na JA Solar panely?\nOdpověď: Produktová záruka 12 let. Výkonová záruka 25 let lineárních (min. 84,8 % po 25 letech). Technologie monokrystalické PERC a N-type, účinnost 20–23 %."},{"id":"faq_39","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je RISEN SYL HomeESS?\nOdpověď: Integrovaný domácí energetický systém All-in-One od RISEN Energy. Kombinuje panely, střídač a bateriové úložiště v jednom kompaktním řešení pro RD s omezeným prostorem."},{"id":"faq_40","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Životnost baterie vs. záruční doba?\nOdpověď: Záruční doba a životnost jsou různé parametry. Životnost kvalitních baterií je 6 000+ cyklů (~15–20 let provozu). Záruka říká podmínky, za nichž výrobce řeší závady – po uplynutí baterie dál funguje, jen bez záruky."},{"id":"faq_41","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak funguje prodej přebytků elektřiny?\nOdpověď: Přebytky nestihnete spotřebovat ani uložit → prodáte do sítě. Potřebujete smlouvu o výkupu s obchodníkem. Od července 2025 povinný výrobní EAN. Výkupní cena závisí na dodavateli a trhu."},{"id":"faq_42","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Jak vybrat dodavatele fotovoltaiky?\nOdpověď: Solární asociace ČR doporučuje: ověřit reference a délku působení na trhu, vyžádat písemnou nabídku s rozpisem komponent, zkontrolovat certifikace. Acetex byl v 2023 TOP 3 dodavatel dle Refsite (96 % FVE, 98 % TČ)."},{"id":"faq_43","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: V čem je výhoda modulárního bateriového systému?\nOdpověď: Lze přidávat moduly a zvyšovat kapacitu postupně. Wattsonic G3 až 8 modulů. Začnete s menší kapacitou a rozšíříte dle potřeby."},{"id":"faq_44","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Potřebuji pro TČ stavební povolení?\nOdpověď: Pro RD ne – TČ do 18 kW nevyžaduje stavební povolení (povinné až od 20 kW)."},{"id":"faq_45","type":"faq","title":"FAQ | Acetex","source":"https://acetex.cz/otazky-a-odpovedi","text":"Otázka: Co je Viessmann Vitocal 200-S?\nOdpověď: Vzduch-voda TČ, výkon 2–18 kW, COP až 5,1 (A7/W35), hlučnost 46 dB(A). Řídicí systém Vitotronic 200. Funkce: vytápění, chlazení (volitelně), ohřev TV. Komunikace přes ViCare app."},{"id":"prod_01","type":"product_service","title":"GoodWe střídače | Acetex","source":"https://acetex.cz/goodwe","text":"GoodWe řady (Acetex): NS/DNS – 0,7–3,6 kW, menší instalace. ET – hybridní 3–10 kW, HV bateriové rozhraní (Lynx Home HV). DT – třífázový 5–80 kW, komerční. Monitoring: SEMS Portal (home.semsportal.com). Záruka: 5 let základní, prodloužení na 10 let."},{"id":"prod_02","type":"product_service","title":"Pylontech baterie | Acetex","source":"https://acetex.cz/pylontech","text":"Pylontech LiFePO4: US2000B – 2,4 kWh, 48V LV, až 8 modulů (max 19,2 kWh). H2 series – 5–10 kWh, kompatibilní HV i LV. Záruka: 10 let nebo 6 000 cyklů, min. 80 % zbytková kapacita. Komunikace: CAN nebo RS485."},{"id":"prod_03","type":"product_service","title":"Wattsonic All-in-One Gen 3 | Acetex","source":"https://acetex.cz/wattsonic","text":"Hybridní střídač + integrovaná HV baterie. Výkony: 4, 6, 8, 10, 12 kW. Kapacita baterie: 3,84 nebo 7,68 kWh. Modulární rozšíření až 8 modulů. Monitoring: Wattsonic App. Záruka: 10 let střídač, 10 let baterie."},{"id":"prod_04","type":"product_service","title":"AEG Solar ICH02 | Acetex","source":"https://acetex.cz/aeg-solar","text":"Hybridní střídač 3–10 kW (jednofázový). Kompatibilní baterie: AEG AS-BBH1 HV (10 nebo 15 kWh). Funkce: backup, smart load management, export limit. Monitoring: AEG Solar App."},{"id":"prod_05","type":"product_service","title":"Viessmann Vitocal 200-S | Acetex","source":"https://acetex.cz/viessmann","text":"Vzduch-voda TČ, 2–18 kW, COP 5,1 (A7/W35), 46 dB(A). Řídicí systém Vitotronic 200. Komunikace: ViCare app + Vitoconnect 100."},{"id":"prod_06","type":"product_service","title":"Stiebel Eltron WPM | Acetex","source":"https://acetex.cz/stiebel","text":"TČ s řídicí jednotkou WPM (Wärmepumpenmanager): řídí vytápění, chlazení, ohřev TV, integraci se solárním systémem. Programování přes dotykový displej nebo ISG app."},{"id":"prod_07","type":"product_service","title":"JA Solar panely | Acetex","source":"https://acetex.cz/ja-solar","text":"Monokrystalické PERC a N-type, účinnost 20–23 %. Produktová záruka 12 let, výkonová 25 let (min. 84,8 % po 25 l.)."},{"id":"prod_08","type":"product_service","title":"Luxen panely | Acetex","source":"https://acetex.cz/luxen","text":"Varianty Mono, Bifacial, Full Black. FullBlack: produktová záruka 12 let, výkonová 25 let lineárních. Bifacial generuje energii i ze zadní strany (+5–15 % výkon)."},{"id":"prod_09","type":"product_service","title":"GoodWe Lynx Home HV baterie | Acetex","source":"https://acetex.cz/goodwe-lynx","text":"Napětí 100–560V DC, kapacita 5,4–16,2 kWh, až 3 moduly paralelně. Po 10 letech nebo 6 000 cyklech garantováno 70 % původní kapacity."},{"id":"prod_10","type":"product_service","title":"AEG AS-BBH1 baterie | Acetex","source":"https://acetex.cz/aeg-baterie","text":"HV lithiová baterie. Kapacity: 10 kWh a 15 kWh. Kompatibilní s AEG ICH02 a dalšími HV střídači. Záruka: 10 let nebo 4 000 cyklů. Nástěnná montáž."},{"id":"prod_11","type":"product_service","title":"Canadian Solar panely | Acetex","source":"https://acetex.cz/canadian-solar","text":"Canadian Solar 530–550W, HiKu PERC. Produktová záruka 12 let, výkonová 25 let. Certifikace IEC 61215, IEC 61730, CE."},{"id":"sup_01","type":"client_support","title":"Kontakt zákazníků Acetexu","source":"https://electreesolar.cz/klienti-acetex","text":"Zákazníci Acetexu kontaktují POUZE Electree Solar: +420 722 981 190, info@electreesolar.cz, Po–Pá 9–16h. Formulář: electreesolar.cz/klienti-acetex-prechazeji-pod-electree-solar/. Starý tel. Acetexu 770 110 011 a info@acetex.cz již nejsou aktivní."},{"id":"sup_02","type":"client_support","title":"Záruky po insolvenci Acetexu","source":"https://acetex.cz/zaruka","text":"Záruky na hardware (panely, střídače, baterie) jsou vázány na výrobce – nezanikají insolvenčním řízením Acetexu. ES přebírá pomoc s reklamacemi. Připravte: záruční listy, faktury, instalační dokumentaci, sériová čísla."},{"id":"sup_03","type":"client_support","title":"Technická dokumentace produktů","source":"https://acetex.cz/dokumenty","text":"Dokumentace u výrobců: GoodWe: goodwe.com | Pylontech: pylontech.com | Wattsonic: wattsonic.com | Viessmann: viessmann.cz | Stiebel Eltron: stiebel-eltron.cz. Pro dokumenty k vaší konkrétní instalaci kontaktujte Electree Solar."},{"id":"sup_04","type":"client_support","title":"Reklamační proces přes ES","source":"https://acetex.cz/reklamace","text":"Pro reklamaci kontaktujte ES: +420 722 981 190 nebo info@electreesolar.cz. Připravte: model + sériové číslo, datum instalace, fakturu, popis závady, foto/video. ES zprostředkuje kontakt s výrobcem."},{"id":"sub_01","type":"subsidy","title":"NZÚ Light | Acetex","source":"https://acetex.cz/dotace/nzu-light","text":"NZÚ Light pro RD: FVE bez baterie až 100 000 Kč, s baterií až 147 000 Kč. Vlastní RD + trvalé bydliště. Žádost po dokončení instalace, správce SFŽP ČR. Doba zpracování 2–4 měsíce."},{"id":"sub_02","type":"subsidy","title":"RES+ dotace pro firmy | Acetex","source":"https://acetex.cz/dotace/res-plus","text":"RES+: dotace až 30 % nákladů, výkon 50 kWp–5 MWp, vlastní spotřeba. Pro 10–50 kWp pouze Praha. Administraci zajišťuje ES."},{"id":"about_01","type":"about","title":"O společnosti Acetex","source":"https://acetex.cz/o-nas","text":"Acetex s.r.o. – česká firma, 6 000+ realizací FVE a TČ po ČR. TOP 3 dodavatel Refsite 2023 (96 % FVE, 98 % TČ). Jednatel: René Milota. AKTUÁLNÍ STAV 2026: Acetex je v insolvenčním řízení, klientskou péči přebírá Electree Solar a.s."}];

const ROUTER_PROMPT = `Jsi router pro multi-network chatbot. Analyzuješ zprávu a určuješ které sítě jsou potřeba.
SÍTĚ: ES=Electree Solar (nové instalace, produkty ES, servis ES, dotace ES) | TRANSFER=přechod Acetex→ES (situace Acetexu, co ES přebírá, jak kontaktovat ES ohledně přechodu) | ACETEX=technická databáze Acetexu (existující instalace zákazníků, produkty GoodWe/Pylontech/Wattsonic/AEG/Viessmann, záruky, SEMS portal, tech problémy)
Pokud zpráva obsahuje témata z VÍCE sítí, vrať VŠECHNY relevantní.
Odpovídej POUZE jako čistý JSON bez jakéhokoliv dalšího textu.
Formát: {"networks":["ES"],"r":"důvod"}
Příklady:
"Chci novou FVE" → {"networks":["ES"],"r":"nová instalace ES"}
"Co se stalo s Acetexem a kdo mě bude servisovat?" → {"networks":["TRANSFER"],"r":"přechod a servis"}
"Mám GoodWe E04 chybu" → {"networks":["ACETEX"],"r":"tech problém existující instalace"}
"Jsem zákazník Acetexu, GoodWe hlásí chybu a nevím na koho se obrátit" → {"networks":["ACETEX","TRANSFER"],"r":"tech problém + přechod"}
"Mám Pylontech baterii z Acetexu, potřebuji servis, a chci vědět zda ES nabízí upgrade" → {"networks":["ACETEX","TRANSFER","ES"],"r":"tech Acetex + přechod + nové ES produkty"}`;

function retrieveChunks(query, k=10) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter(w=>w.length>2);
  const scored = ACETEX_CHUNKS.map(c=>{
    const h=(c.text+" "+c.title).toLowerCase();
    let s=0;
    for(const w of words){ const n=h.split(w).length-1; if(n>0) s+=n; }
    if(c.type==="faq") s*=1.6;
    if(c.type==="product_service") s*=1.4;
    if(c.type==="client_support") s*=1.3;
    return {...c,score:s};
  }).filter(c=>c.score>0).sort((a,b)=>b.score-a.score).slice(0,k);
  if(!scored.length) return "";
  return scored.map(c=>`[${c.type.toUpperCase()} | ${c.title}]\n${c.text}\nZdroj: ${c.source}`).join("\n\n---\n\n");
}

async function callAPI(system, messages, maxTokens=1000){
  const res=await fetch("/api/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({system,messages,maxTokens})
  });
  const data=await res.json();
  if(data.error) throw new Error(data.error);
  return data.content||"";
}

async function callRouter(system, message){
  const res=await fetch("/api/route",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({system,message})
  });
  const data=await res.json();
  if(data.error) throw new Error(data.error);
  return data.content||"";
}

function buildSystem(networks, acetexCtx){
  const multi=networks.length>1;
  let p=`Jsi AI asistent pro fotovoltaickou energetiku. Komunikuješ VŽDY v češtině, přirozeně a věcně – jako zkušený odborník, ne jako stroj.
Pravidla: vždy česky | přirozený tón bez prázdných frází | pokud nevíš, řekni to a doporuč kontakt | u cen upozorni na orientační charakter | na konci uveď zdroj.
Aktivní sítě: ${networks.join(", ")}
`;
  if(multi) p+=`\nDŮLEŽITÉ – VÍCEÚČELOVÝ DOTAZ: Odpověz na KAŽDOU část dotazu zvlášť, každou VÝHRADNĚ z příslušné sítě. Logicky provázej části, ale NIKDY nekombinuj fakta ze sítí navzájem kde by to bylo zavádějící.\n`;
  if(networks.includes("ES")) p+=`\n${KB_ES}\n`;
  if(networks.includes("TRANSFER")) p+=`\n${KB_TRANSFER}\n`;
  if(networks.includes("ACETEX")&&acetexCtx) p+=`\n=== SÍŤ C: ACETEX TECHNICKÁ DATABÁZE ===\nRelevantní záznamy:\n\n${acetexCtx}\n`;
  return p;
}

const NET_CFG={ES:["#22c55e","Electree Solar"],TRANSFER:["#f59e0b","Přechod Acetex→ES"],ACETEX:["#3b82f6","Acetex tech"]};

export default function App(){
  const [msgs,setMsgs]=useState([]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const [activeNets,setActiveNets]=useState([]);
  const bottomRef=useRef(null);
  const inputRef=useRef(null);

  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs,loading]);

  const send=useCallback(async(text)=>{
    if(!text.trim()||loading) return;
    setMsgs(p=>[...p,{role:"user",content:text}]);
    setInput(""); setLoading(true); setActiveNets(["..."]);
    try{
      const rr=await callRouter(ROUTER_PROMPT,text);
      let nets=["ES"];
      try{ const j=JSON.parse(rr.replace(/```json|```/g,"").trim()); nets=j.networks||["ES"]; }catch{}
      setActiveNets(nets);
      const ctx=nets.includes("ACETEX")?retrieveChunks(text):"";
      const history=[...msgs.map(m=>({role:m.role,content:m.content})),{role:"user",content:text}];
      const reply=await callAPI(buildSystem(nets,ctx),history,1000);
      setMsgs(p=>[...p,{role:"assistant",content:reply,networks:nets}]);
    }catch{
      setMsgs(p=>[...p,{role:"assistant",content:"Omlouvám se, došlo k technické chybě. Zkuste to znovu nebo volejte +420 722 981 190.",networks:[]}]);
    }finally{
      setLoading(false); setActiveNets([]);
      setTimeout(()=>inputRef.current?.focus(),50);
    }
  },[msgs,loading]);

  const handleKey=e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);} };

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#050d05 0%,#071507 55%,#050d12 100%)",fontFamily:"'DM Sans','Segoe UI',sans-serif",display:"flex",flexDirection:"column",alignItems:"center"}}>
      {/* Header */}
      <div style={{width:"100%",maxWidth:740,padding:"18px 18px 0",display:"flex",alignItems:"center",gap:11}}>
        <div style={{width:38,height:38,background:"linear-gradient(135deg,#22c55e,#16a34a)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0,boxShadow:"0 0 18px rgba(34,197,94,.35)"}}>☀️</div>
        <div>
          <div style={{color:"#e2fce5",fontWeight:700,fontSize:15.5,letterSpacing:"-.02em"}}>Electree Solar <span style={{color:"#4ade80",fontWeight:400,fontSize:12.5}}>AI Asistent</span></div>
          <div style={{color:"#4ade80",fontSize:10.5,opacity:.6,marginTop:1}}>● Aktivní · 3 znalostní sítě</div>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:4,flexWrap:"wrap",justifyContent:"flex-end"}}>
          {Object.entries(NET_CFG).map(([id,[col,lbl]])=>(
            <span key={id} style={{fontSize:9.5,fontWeight:600,color:col,background:`${col}18`,border:`1px solid ${col}28`,padding:"2px 6px",borderRadius:20}}>{lbl}</span>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{width:"100%",maxWidth:740,flex:1,padding:"16px 18px",display:"flex",flexDirection:"column",gap:13,minHeight:"calc(100vh - 160px)",overflowY:"auto"}}>
        {msgs.length===0 && <Welcome onSelect={q=>{send(q);}} />}
        {msgs.map((m,i)=><Bubble key={i} m={m}/>)}
        {loading&&(
          <div style={{display:"flex",gap:9,alignItems:"flex-start",animation:"fu .2s ease"}}>
            <Av/>
            <div style={{background:"#0c1c0d",border:"1px solid #1a3a1c",borderRadius:"4px 15px 15px 15px",padding:"11px 15px",display:"flex",alignItems:"center",gap:9}}>
              {activeNets.length>0&&activeNets[0]!=="..."&&(
                <span style={{color:"#4ade80",fontSize:11,opacity:.75}}>{activeNets.map(n=>NET_CFG[n]?NET_CFG[n][1]:n).join(" + ")}</span>
              )}
              {[0,1,2].map(d=><div key={d} style={{width:7,height:7,borderRadius:"50%",background:"#22c55e",animation:"pulse 1.2s ease-in-out infinite",animationDelay:`${d*.22}s`}}/>)}
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      {/* Input */}
      <div style={{width:"100%",maxWidth:740,padding:"9px 18px 20px",position:"sticky",bottom:0}}>
        <div style={{display:"flex",gap:8,background:"#0c1c0d",border:"1px solid #1e3a20",borderRadius:13,padding:"8px 8px 8px 15px",boxShadow:"0 -4px 40px rgba(0,0,0,.55)"}}>
          <textarea ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey}
            placeholder="Napište dotaz… (Enter = odeslat)" rows={1}
            style={{flex:1,background:"transparent",border:"none",outline:"none",color:"#e2fce5",fontSize:14,resize:"none",fontFamily:"inherit",lineHeight:1.55,maxHeight:100,overflowY:"auto",paddingTop:3}}
            onInput={e=>{e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,100)+"px";}}
          />
          <button onClick={()=>send(input)} disabled={loading||!input.trim()}
            style={{width:38,height:38,flexShrink:0,background:loading||!input.trim()?"#162616":"linear-gradient(135deg,#22c55e,#16a34a)",border:"none",borderRadius:9,cursor:loading||!input.trim()?"not-allowed":"pointer",color:loading||!input.trim()?"#2a4a2a":"#fff",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s",boxShadow:loading||!input.trim()?"none":"0 0 12px rgba(34,197,94,.3)"}}>↑</button>
        </div>
        <div style={{textAlign:"center",color:"#1a3020",fontSize:10,marginTop:5}}>Electree Solar a.s. · info@electreesolar.cz · +420 722 981 190 · Po–Pá 9–16h</div>
      </div>

      <style>{`
        @keyframes pulse{0%,100%{opacity:.22;transform:scale(.72)}50%{opacity:1;transform:scale(1)}}
        @keyframes fu{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:#1a3020;border-radius:4px}
      `}</style>
    </div>
  );
}

function Av(){
  return <div style={{width:28,height:28,flexShrink:0,background:"linear-gradient(135deg,#22c55e,#16a34a)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,marginTop:2,boxShadow:"0 0 9px rgba(34,197,94,.2)"}}>☀️</div>;
}

function Bubble({m}){
  const isUser=m.role==="user";
  const parseInline=(text,key)=>{
    const parts=[];
    const re=/\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*([^*\n]+?)\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let last=0,m,idx=0;
    while((m=re.exec(text))!==null){
      if(m.index>last) parts.push(<span key={`${key}-t${idx++}`}>{text.slice(last,m.index)}</span>);
      if(m[1]) parts.push(<strong key={`${key}-b${idx++}`} style={{fontWeight:700,fontStyle:"italic",color:"#86efac"}}>{m[1]}</strong>);
      else if(m[2]) parts.push(<strong key={`${key}-b${idx++}`} style={{fontWeight:700,color:"#86efac"}}>{m[2]}</strong>);
      else if(m[3]) parts.push(<em key={`${key}-i${idx++}`} style={{fontStyle:"italic",color:"#d1fae5"}}>{m[3]}</em>);
      else if(m[4]) parts.push(<a key={`${key}-a${idx++}`} href={m[5]} target="_blank" rel="noreferrer" style={{color:"#4ade80",textDecoration:"underline"}}>{m[4]}</a>);
      last=m.index+m[0].length;
    }
    if(last<text.length) parts.push(<span key={`${key}-t${idx++}`}>{text.slice(last)}</span>);
    return parts.length?parts:text;
  };
  const renderText=text=>text.split("\n").map((line,i)=>{
    if(!line.trim()) return <div key={i} style={{height:5}}/>;
    if(/^---+$/.test(line.trim())) return <hr key={i} style={{border:"none",borderTop:"1px solid #1a3a1c",margin:"6px 0"}}/>;
    if(/^#{1,3}\s/.test(line)) return <div key={i} style={{fontWeight:700,color:"#4ade80",fontSize:14.5,marginTop:5,marginBottom:2}}>{parseInline(line.replace(/^#+\s/,""),i)}</div>;
    if(/^\*\s/.test(line)||/^-\s/.test(line)) return <div key={i} style={{paddingLeft:13,color:"#bbf7d0",lineHeight:1.65,display:"flex",gap:6}}><span style={{flexShrink:0}}>•</span><span>{parseInline(line.slice(2),i)}</span></div>;
    if(/^\d+\.\s/.test(line)) return <div key={i} style={{paddingLeft:13,color:"#bbf7d0",lineHeight:1.65}}>{parseInline(line,i)}</div>;
    return <div key={i} style={{lineHeight:1.65}}>{parseInline(line,i)}</div>;
  });
  return(
    <div style={{display:"flex",gap:9,alignItems:"flex-start",flexDirection:isUser?"row-reverse":"row",animation:"fu .2s ease"}}>
      {!isUser&&<Av/>}
      <div style={{maxWidth:"79%",display:"flex",flexDirection:"column",gap:5,alignItems:isUser?"flex-end":"flex-start"}}>
        {!isUser&&m.networks?.length>0&&(
          <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
            {m.networks.map(n=>{ const [col,lbl]=NET_CFG[n]||["#888",n]; return <span key={n} style={{fontSize:10,fontWeight:600,color:col,background:`${col}15`,border:`1px solid ${col}28`,padding:"2px 6px",borderRadius:20}}>📡 {lbl}</span>;})}
          </div>
        )}
        <div style={{background:isUser?"linear-gradient(135deg,#14532d,#166534)":"#0c1c0d",border:`1px solid ${isUser?"#166534":"#1a3a1c"}`,borderRadius:isUser?"15px 4px 15px 15px":"4px 15px 15px 15px",padding:"11px 14px",color:"#e2fce5",fontSize:13.5,wordBreak:"break-word"}}>
          {renderText(m.content)}
        </div>
      </div>
    </div>
  );
}

function Welcome({onSelect}){
  const QS=[
    {icon:"⚡",text:"Kolik stojí fotovoltaika pro rodinný dům?",net:"ES",col:"#22c55e"},
    {icon:"💰",text:"Jak a kdy dostanu dotaci na FVE?",net:"ES",col:"#22c55e"},
    {icon:"🔧",text:"Jaké servisní balíčky Electree Solar nabízí?",net:"ES",col:"#22c55e"},
    {icon:"🔄",text:"Jsem zákazník Acetexu — co mám teď dělat?",net:"TRANSFER",col:"#f59e0b"},
    {icon:"⚠️",text:"Mám GoodWe střídač z Acetexu, hlásí chybu E04 — jak postupovat?",net:"ACETEX",col:"#3b82f6"},
    {icon:"🔀",text:"Mám Pylontech baterii z Acetexu, potřebuji servis a zajímá mě přechod na Electree Solar",net:"MULTI",col:"#a855f7"},
  ];
  const NL={ES:"Electree Solar",TRANSFER:"Přechod Acetex",ACETEX:"Acetex tech",MULTI:"Multi-síť"};
  return(
    <div style={{animation:"fu .35s ease"}}>
      <div style={{textAlign:"center",padding:"26px 0 20px"}}>
        <div style={{fontSize:44,filter:"drop-shadow(0 0 16px rgba(34,197,94,.45))",marginBottom:9}}>☀️</div>
        <div style={{color:"#4ade80",fontSize:19,fontWeight:700,letterSpacing:"-.02em"}}>Dobrý den!</div>
        <div style={{color:"#4a7a50",fontSize:13,marginTop:5,maxWidth:400,margin:"5px auto 0",lineHeight:1.65}}>
          Jsem AI asistent Electree Solar. Odpovím na otázky o fotovoltaice, dotacích a servisu — a pomůžu zákazníkům Acetexu s přechodem.
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,maxWidth:620,margin:"0 auto"}}>
        {QS.map((q,i)=>(
          <button key={i} onClick={()=>onSelect(q.text)}
            style={{background:"#09150a",border:"1px solid #162416",borderRadius:10,padding:"10px 12px",color:"#c4e8c5",fontSize:12,cursor:"pointer",textAlign:"left",transition:"all .14s",display:"flex",flexDirection:"column",gap:6}}
            onMouseEnter={e=>{e.currentTarget.style.background="#0d1e0e";e.currentTarget.style.borderColor=`${q.col}40`;}}
            onMouseLeave={e=>{e.currentTarget.style.background="#09150a";e.currentTarget.style.borderColor="#162416";}}
          >
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:16}}>{q.icon}</span>
              <span style={{fontSize:9,fontWeight:700,color:q.col,background:`${q.col}18`,border:`1px solid ${q.col}28`,padding:"1px 6px",borderRadius:20}}>{NL[q.net]}</span>
            </div>
            <span style={{lineHeight:1.45}}>{q.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
