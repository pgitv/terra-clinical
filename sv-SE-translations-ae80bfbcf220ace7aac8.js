(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1841:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,i=a(106),n=a(1847),o=(t=n)&&t.__esModule?t:{default:t};(0,i.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="sv-SE",r.messages={"Terra.actionHeader.back":"Tillbaka","Terra.actionHeader.close":"Stäng","Terra.actionHeader.maximize":"Maximera","Terra.actionHeader.minimize":"Minimera","Terra.actionHeader.next":"Nästa","Terra.actionHeader.previous":"Föregående","Terra.ajax.error":"Innehållet lästes inte in.","Terra.application.tabs.more":"Mer","Terra.application.utility.back":"Tillbaka","Terra.application.utility.button":"Knappen Hjälpmedel","Terra.application.utility.close":"Stäng","Terra.application.utility.menu":"Menyn Hjälpmedel","Terra.ApplicationHeaderLayout.SkipToContent":"Gå till Innehåll","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Växla meny","Terra.applicationLayout.utilityDefaults.about":"Om","Terra.applicationLayout.utilityDefaults.appearance":"Utseende","Terra.applicationLayout.utilityDefaults.changePhoto":"Byt bild","Terra.applicationLayout.utilityDefaults.gettingStarted":"Kom igång","Terra.applicationLayout.utilityDefaults.help":"Hjälp","Terra.applicationLayout.utilityDefaults.logOut":"Logga ut","Terra.applicationLayout.utilityDefaults.menu":"Meny","Terra.applicationLayout.utilityDefaults.security":"Säkerhet","Terra.applicationLayout.utilityDefaults.settings":"Inställningar","Terra.applicationLayout.utilityDefaults.termsOfUse":"Användningsvillkor","Terra.applicationLayout.utilityDefaults.userInformation":"Användaruppgifter","Terra.collapsibleMenuView.more":"Mer","Terra.data-grid.row-selection-template":"Välj: {row-description}","Terra.datePicker.dateFormat":"DD/MM/ÅÅÅÅ","Terra.datePicker.openCalendar":"Öppna kalender","Terra.datePicker.today":"I dag","Terra.devSiteRoutingMenu.filter":"Filtrera","Terra.form.field.optional":"(valfri)","Terra.form.select.add":'Lägg till "{text}"',"Terra.form.select.defaultDisplay":"- Välj -","Terra.form.select.noResults":'Inga matchande resultat för "{text}"',"Terra.menu.back":"Tillbaka","Terra.menu.close":"Stäng","Terra.onsetPicker.age":"Ålder","Terra.onsetPicker.ageLabel":"Ange ålder","Terra.onsetPicker.agePrecision":"Åldersprecision","Terra.onsetPicker.agePrecisionLabel":"Välj åldersprecision","Terra.onsetPicker.agePrecisionMonth":"Månader","Terra.onsetPicker.agePrecisionWeek":"Veckor","Terra.onsetPicker.agePrecisionYear":"År","Terra.onsetPicker.april":"april","Terra.onsetPicker.august":"augusti","Terra.onsetPicker.date":"Datum","Terra.onsetPicker.dateLabel":"Välj datum","Terra.onsetPicker.december":"december","Terra.onsetPicker.february":"februari","Terra.onsetPicker.granularity":"Granularitet","Terra.onsetPicker.granularityLabel":"Välj datumgranularitet","Terra.onsetPicker.january":"januari","Terra.onsetPicker.july":"juli","Terra.onsetPicker.june":"juni","Terra.onsetPicker.march":"mars","Terra.onsetPicker.may":"maj","Terra.onsetPicker.month":"Månad","Terra.onsetPicker.monthLabel":"Välj månad","Terra.onsetPicker.november":"november","Terra.onsetPicker.october":"oktober","Terra.onsetPicker.precision":"Precision","Terra.onsetPicker.precisionAbout":"Handla om","Terra.onsetPicker.precisionAfter":"Efter","Terra.onsetPicker.precisionBefore":"Innan","Terra.onsetPicker.precisionLabel":"Välj datumprecision","Terra.onsetPicker.precisionOnAt":"På/På","Terra.onsetPicker.precisionUnknown":"Okänd","Terra.onsetPicker.september":"september","Terra.onsetPicker.year":"År","Terra.onsetPicker.yearLabel":"Välj år","Terra.Overlay.loading":"Läser in ...","Terra.searchField.search":"Sök","Terra.searchField.submit-search":"Sök"}},1847:function(e,r,a){e.exports=function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,r){var a=String(e).split("."),t=!a[1],i=Number(a[0])==e,n=i&&a[0].slice(-1),o=i&&a[0].slice(-2);return r?1!=n&&2!=n||11==o||12==o?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},"year-short":{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sen",other:"för {0} år sen"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},"month-short":{displayName:"m",relative:{0:"denna mån.",1:"nästa mån.","-1":"förra mån."},relativeTime:{future:{one:"om {0} mån.",other:"om {0} mån."},past:{one:"för {0} mån. sen",other:"för {0} mån. sen"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},"day-short":{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} d",other:"om {0} d"},past:{one:"för {0} d sedan",other:"för {0} d sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},"hour-short":{displayName:"tim",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} tim",other:"om {0} tim"},past:{one:"för {0} tim sedan",other:"för {0} tim sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},"minute-short":{displayName:"min",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} min",other:"om {0} min"},past:{one:"för {0} min sen",other:"för {0} min sen"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}},"second-short":{displayName:"sek",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sek",other:"om {0} sek"},past:{one:"för {0} s sen",other:"för {0} s sen"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]}()}}]);
//# sourceMappingURL=sv-SE-translations-ae80bfbcf220ace7aac8.js.map