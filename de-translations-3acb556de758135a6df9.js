(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1832:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,n=a(106),i=a(1851),o=(t=i)&&t.__esModule?t:{default:t};(0,n.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="de",r.messages={"Terra.actionHeader.back":"Zurück","Terra.actionHeader.close":"Schließen","Terra.actionHeader.maximize":"Maximieren","Terra.actionHeader.minimize":"Minimieren","Terra.actionHeader.next":"Nächste","Terra.actionHeader.previous":"Vorherige","Terra.ajax.error":"Inhalt konnte nicht geladen werden.","Terra.application.tabs.more":"Mehr","Terra.application.utility.back":"Zurück","Terra.application.utility.button":"Schaltfläche „Dienstprogramm“","Terra.application.utility.close":"Schließen","Terra.application.utility.menu":"Menü „Dienstprogramm“","Terra.ApplicationHeaderLayout.SkipToContent":"Zum Inhalt","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Menü ein-/ausblenden","Terra.applicationLayout.utilityDefaults.about":"Info über","Terra.applicationLayout.utilityDefaults.appearance":"Erscheinungsbild","Terra.applicationLayout.utilityDefaults.changePhoto":"Foto ändern","Terra.applicationLayout.utilityDefaults.gettingStarted":"Erste Schritte","Terra.applicationLayout.utilityDefaults.help":"Hilfe","Terra.applicationLayout.utilityDefaults.logOut":"Abmelden","Terra.applicationLayout.utilityDefaults.menu":"Menü","Terra.applicationLayout.utilityDefaults.security":"Berechtigung","Terra.applicationLayout.utilityDefaults.settings":"Einstellungen","Terra.applicationLayout.utilityDefaults.termsOfUse":"Nutzungsbestimmungen","Terra.applicationLayout.utilityDefaults.userInformation":"Benutzerdaten","Terra.collapsibleMenuView.more":"Mehr","Terra.data-grid.row-selection-template":"Wählen: {row-description}","Terra.datePicker.dateFormat":"TT.MM.JJJJ","Terra.datePicker.openCalendar":"Kalender öffnen","Terra.datePicker.today":"Heute","Terra.devSiteRoutingMenu.filter":"Filter","Terra.form.field.optional":"(Optional)","Terra.form.select.add":'"{text}" hinzufügen',"Terra.form.select.defaultDisplay":"- Auswählen -","Terra.form.select.noResults":'Keine Übereinstimmungen für "{text}"',"Terra.menu.back":"Zurück","Terra.menu.close":"Schließen","Terra.onsetPicker.age":"Alter","Terra.onsetPicker.ageLabel":"Geben Sie ein Alter an","Terra.onsetPicker.agePrecision":"Alter","Terra.onsetPicker.agePrecisionLabel":"Wählen Sie eine Altersgenauigkeit","Terra.onsetPicker.agePrecisionMonth":"Monat(e)","Terra.onsetPicker.agePrecisionWeek":"Woche(n)","Terra.onsetPicker.agePrecisionYear":"Jahr(e)","Terra.onsetPicker.april":"April","Terra.onsetPicker.august":"August","Terra.onsetPicker.date":"Datum","Terra.onsetPicker.dateLabel":"Wählen Sie ein Datum","Terra.onsetPicker.december":"Dezember","Terra.onsetPicker.february":"Februar","Terra.onsetPicker.granularity":"Granularität","Terra.onsetPicker.granularityLabel":"Wählen Sie eine Datengranularität","Terra.onsetPicker.january":"Januar","Terra.onsetPicker.july":"Juli","Terra.onsetPicker.june":"Juni","Terra.onsetPicker.march":"März","Terra.onsetPicker.may":"Mai","Terra.onsetPicker.month":"Monat","Terra.onsetPicker.monthLabel":"Wählen Sie einen Monat","Terra.onsetPicker.november":"November","Terra.onsetPicker.october":"Oktober","Terra.onsetPicker.precision":"Genauigkeit","Terra.onsetPicker.precisionAbout":"Ungefähr","Terra.onsetPicker.precisionAfter":"Nach","Terra.onsetPicker.precisionBefore":"Vor","Terra.onsetPicker.precisionLabel":"Wählen Sie eine Datumsgenauigkeit","Terra.onsetPicker.precisionOnAt":"Am/Um","Terra.onsetPicker.precisionUnknown":"Unbekannt","Terra.onsetPicker.september":"September","Terra.onsetPicker.year":"Jahr","Terra.onsetPicker.yearLabel":"Wählen Sie ein Jahr","Terra.Overlay.loading":"Ladevorgang...","Terra.searchField.search":"Suchen","Terra.searchField.submit-search":"Suche eingeben"}},1851:function(e,r,a){e.exports=function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,r){var a=!String(e).split(".")[1];return r?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},"year-short":{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},"month-short":{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},"day-short":{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},"hour-short":{displayName:"Std.",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Std.",other:"in {0} Std."},past:{one:"vor {0} Std.",other:"vor {0} Std."}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},"minute-short":{displayName:"Min.",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Min.",other:"in {0} Min."},past:{one:"vor {0} Min.",other:"vor {0} Min."}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}},"second-short":{displayName:"Sek.",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sek.",other:"in {0} Sek."},past:{one:"vor {0} Sek.",other:"vor {0} Sek."}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]}()}}]);
//# sourceMappingURL=de-translations-3acb556de758135a6df9.js.map