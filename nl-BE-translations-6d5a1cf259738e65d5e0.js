(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1837:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var n,t=a(106),i=a(1845),o=(n=i)&&n.__esModule?n:{default:n};(0,t.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="nl-BE",r.messages={"Terra.actionHeader.back":"Terug","Terra.actionHeader.close":"Sluiten","Terra.actionHeader.maximize":"Maximalisatie","Terra.actionHeader.minimize":"Minimaliseren","Terra.actionHeader.next":"Volgende","Terra.actionHeader.previous":"Vorige","Terra.ajax.error":"Deze inhoud kon niet worden geladen.","Terra.application.tabs.more":"Meer","Terra.application.utility.back":"Terug","Terra.application.utility.button":"Hulpprogrammaknop","Terra.application.utility.close":"Sluiten","Terra.application.utility.menu":"Menu Hulpprogramma's","Terra.ApplicationHeaderLayout.SkipToContent":"Doorgaan naar content","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Menu","Terra.applicationLayout.utilityDefaults.about":"Over","Terra.applicationLayout.utilityDefaults.appearance":"Uiterlijk","Terra.applicationLayout.utilityDefaults.changePhoto":"Foto wijzigen","Terra.applicationLayout.utilityDefaults.gettingStarted":"Aan de slag","Terra.applicationLayout.utilityDefaults.help":"Help","Terra.applicationLayout.utilityDefaults.logOut":"Afmelden","Terra.applicationLayout.utilityDefaults.menu":"Menu","Terra.applicationLayout.utilityDefaults.security":"Beveiliging","Terra.applicationLayout.utilityDefaults.settings":"Instellingen","Terra.applicationLayout.utilityDefaults.termsOfUse":"Gebruiksvoorwaarden","Terra.applicationLayout.utilityDefaults.userInformation":"Gebruikersinformatie","Terra.collapsibleMenuView.more":"Meer","Terra.data-grid.row-selection-template":"Selecteer: {rij-omschrijving}","Terra.datePicker.dateFormat":"DD/MM/JJJJ","Terra.datePicker.openCalendar":"Agenda openen","Terra.datePicker.today":"Vandaag","Terra.devSiteRoutingMenu.filter":"Filter","Terra.form.field.optional":"(optioneel)","Terra.form.select.add":'"{text}" toevoegen',"Terra.form.select.defaultDisplay":"- Selecteren -","Terra.form.select.noResults":'Geen resultaten gevonden voor "{text}"',"Terra.menu.back":"Terug","Terra.menu.close":"Sluiten","Terra.onsetPicker.age":"Leeftijd","Terra.onsetPicker.ageLabel":"Voer een leeftijd in","Terra.onsetPicker.agePrecision":"Leeftijdprecisie","Terra.onsetPicker.agePrecisionLabel":"Selecteer een leeftijdprecisie","Terra.onsetPicker.agePrecisionMonth":"Maanden","Terra.onsetPicker.agePrecisionWeek":"Weken","Terra.onsetPicker.agePrecisionYear":"jaren","Terra.onsetPicker.april":"april","Terra.onsetPicker.august":"augustus","Terra.onsetPicker.date":"Datum","Terra.onsetPicker.dateLabel":"Selecteer een datum","Terra.onsetPicker.december":"december","Terra.onsetPicker.february":"februari","Terra.onsetPicker.granularity":"Garnulariteit","Terra.onsetPicker.granularityLabel":"Selecteer een datumgranulariteit","Terra.onsetPicker.january":"januari","Terra.onsetPicker.july":"juli","Terra.onsetPicker.june":"juni","Terra.onsetPicker.march":"maart","Terra.onsetPicker.may":"mei","Terra.onsetPicker.month":"maand","Terra.onsetPicker.monthLabel":"Selecteer een maand","Terra.onsetPicker.november":"november","Terra.onsetPicker.october":"oktober","Terra.onsetPicker.precision":"Precisie","Terra.onsetPicker.precisionAbout":"Over","Terra.onsetPicker.precisionAfter":"Na","Terra.onsetPicker.precisionBefore":"Voor","Terra.onsetPicker.precisionLabel":"Selecteer een datumprecisie","Terra.onsetPicker.precisionOnAt":"Op/Bij","Terra.onsetPicker.precisionUnknown":"Onbekend","Terra.onsetPicker.september":"september","Terra.onsetPicker.year":"jaar","Terra.onsetPicker.yearLabel":"Selecteer een jaar","Terra.Overlay.loading":"Bezig met laden","Terra.searchField.search":"Zoeken","Terra.searchField.submit-search":"Zoeken"}},1845:function(e,r,a){e.exports=function(){"use strict";return[{locale:"nl",pluralRuleFunction:function(e,r){var a=!String(e).split(".")[1];return r?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"jaar",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},"year-short":{displayName:"jr",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},month:{displayName:"maand",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},"month-short":{displayName:"mnd",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},day:{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dagen"},past:{one:"{0} dag geleden",other:"{0} dagen geleden"}}},"day-short":{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dgn"},past:{one:"{0} dag geleden",other:"{0} dgn geleden"}}},hour:{displayName:"uur",relative:{0:"binnen een uur"},relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},"hour-short":{displayName:"uur",relative:{0:"binnen een uur"},relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},minute:{displayName:"minuut",relative:{0:"binnen een minuut"},relativeTime:{future:{one:"over {0} minuut",other:"over {0} minuten"},past:{one:"{0} minuut geleden",other:"{0} minuten geleden"}}},"minute-short":{displayName:"min",relative:{0:"binnen een minuut"},relativeTime:{future:{one:"over {0} min.",other:"over {0} min."},past:{one:"{0} min. geleden",other:"{0} min. geleden"}}},second:{displayName:"seconde",relative:{0:"nu"},relativeTime:{future:{one:"over {0} seconde",other:"over {0} seconden"},past:{one:"{0} seconde geleden",other:"{0} seconden geleden"}}},"second-short":{displayName:"sec",relative:{0:"nu"},relativeTime:{future:{one:"over {0} sec.",other:"over {0} sec."},past:{one:"{0} sec. geleden",other:"{0} sec. geleden"}}}}},{locale:"nl-AW",parentLocale:"nl"},{locale:"nl-BE",parentLocale:"nl"},{locale:"nl-BQ",parentLocale:"nl"},{locale:"nl-CW",parentLocale:"nl"},{locale:"nl-SR",parentLocale:"nl"},{locale:"nl-SX",parentLocale:"nl"}]}()}}]);
//# sourceMappingURL=nl-BE-translations-6d5a1cf259738e65d5e0.js.map