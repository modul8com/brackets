/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
    /**
     * Errors
     */

    // General file io error strings
    "GENERIC_ERROR"                     : "(virhe {0})",
    "NOT_FOUND_ERR"                     : "Tiedostoa ei löytynyt.",
    "NOT_READABLE_ERR"                  : "Tiedostoa ei voitu lukea.",
    "NO_MODIFICATION_ALLOWED_ERR"       : "Kohdekansiota ei voitu muuttaa.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE"  : "Sinulla ei ole oikeuksia tehdä muutoksia.",
    "FILE_EXISTS_ERR"                   : "Tiedosto on jo olemassa.",

    // Project error strings
    "ERROR_LOADING_PROJECT"             : "Projektia ei voitu lukea.",
    "OPEN_DIALOG_ERROR"                 : "Tapahtui virhe avattaessa tiedostovalintaikkunaa. (virhe {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR"  : "Tapahtui virhe avattaessa kansiota <span class='dialog-filename'>{0}</span>. (virhe {1})",
    "READ_DIRECTORY_ENTRIES_ERROR"      : "Tapahtui virhe luettaessa kansion sisältöä. <span class='dialog-filename'>{0}</span>. (virhe {1})",

    // File open/save error string
    "ERROR_OPENING_FILE_TITLE"          : "Virhe avattaessa tiedostoa",
    "ERROR_OPENING_FILE"                : "Tapahtui virhe avattaessa tiedostoa <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RELOADING_FILE_TITLE"        : "Virhe päivittäessä muutoksia levyltä",
    "ERROR_RELOADING_FILE"              : "Tapahtui virhe lukiessa tiedostoa <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_SAVING_FILE_TITLE"           : "Tiedostoa ei voitu tallentaa",
    "ERROR_SAVING_FILE"                 : "Tapahtui virhe tallennettaessa tiedostoa <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE"         : "Tiedostoa ei voitu nimetä uudelleen",
    "ERROR_RENAMING_FILE"               : "Tapahtui virhe yrittäessä nimetä uudelleen tiedostoa <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE"            : "Kelpaamaton tiedostonimi",
    "INVALID_FILENAME_MESSAGE"          : "Tiedostonimi ei voi sisältää seuraavia merkkejä: /?*:;{}<>\\|",
    "FILE_ALREADY_EXISTS"               : "Tiedosto <span class='dialog-filename'>{0}</span> on jo olemassa.",
    "ERROR_CREATING_FILE_TITLE"         : "Virhe luodessa tiedostoa",
    "ERROR_CREATING_FILE"               : "Virhe yrittäessä luoda tiedostoa <span class='dialog-filename'>{0}</span>. {1}",

    // Application error strings
    "ERROR_IN_BROWSER_TITLE"            : "Ups! {APP_NAME}-sovellusta ei voi suorittaa selaimessa.",
    "ERROR_IN_BROWSER"                  : "{APP_NAME} on rakennettu HTML:llä, mutta nyt se toimii kuten työpöydän sovellus, jotta voit käyttää sitä muokataksesi paikallisia tiedostoja. (<b>github.com/adobe/brackets-shell</b>)", //!!

    // FileIndexManager error string
    "ERROR_MAX_FILES_TITLE"             : "Virhe indeksoidessa tiedostoja",
    "ERROR_MAX_FILES"                   : "Suurin sallittu määrä tiedostoja on indeksoitu.", //!!

    // Live Development error strings
    "ERROR_LAUNCHING_BROWSER_TITLE"     : "Verkkoselainta ei voitu avata.",
    "ERROR_CANT_FIND_CHROME"            : "Google Chrome -selainta ei löydy. Varmista, että se on asennettu.",
    "ERROR_LAUNCHING_BROWSER"           : "Tapahtui virhe avattaessa verkkoselainta. (error {0})",
    
    "LIVE_DEVELOPMENT_ERROR_TITLE"      : "Esikatselu epäonnistui",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE"   : "Yhdistetään selaimeen",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE"    : "Jotta voit käyttää esikatselua, Chrome on käynnistettävä uudelleen etävirheenkorjaus käytössä.<br /><br />Haluatko käynnistää Chromen uudelleen ja aktivoida etävirheenkorjauksen?",
    "LIVE_DEV_NEED_HTML_MESSAGE"        : "Avaa HTML-tiedosto käyttääksesi esikatselua.",
    "LIVE_DEV_NEED_BASEURL_MESSAGE"     : "Käynnistääksesi reaaliaikaisen esikatselun projektin url-osoite on määritettävä.",
    "LIVE_DEVELOPMENT_INFO_TITLE"       : "Tervetuloa reaaliaikaiseen esikatseluun!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE"     : "Esikatselu yhdistää {APP_NAME}-sovelluksen verkkoselaimeesi. Se avaa HTML-tiedoston esikatselun selaimessasi. Esikatselu päivittyy tehdässäsi muutoksia koodiin.<br /><br />Aiemmissa {APP_NAME}-sovelluksen versioissa esikatselu toimii vain, kun muokkaat <strong>CSS-tiedostoja</strong> ja ainoastaan <strong>Google Chrome -selaimella</strong>. Toteutamme tämän HTML:lle ja JavaScriptille pian!<br /><br />(Näet vain tämän viestin uudelleen.)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING"  : "Saadaksesi lisätietoja, katso <a class=\"clickable-link\" data-href=\"{0}\">Troubleshooting Live Development connection errors</a>.",
    
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED" : "Esikatselu",
    "LIVE_DEV_STATUS_TIP_PROGRESS1"     : "Esikatselu: Yhdistetään\u2026",
    "LIVE_DEV_STATUS_TIP_PROGRESS2"     : "Esikatselu: Aloitetaan\u2026",
    "LIVE_DEV_STATUS_TIP_CONNECTED"     : "Lopeta esikatselu",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC"   : "Esikatselu: Napsauta tästä katkaistaksesi yhteys (tallenna tiedostot päivittääksesi)",
    
    "SAVE_CLOSE_TITLE"                  : "Tallenna muutokset",
    "SAVE_CLOSE_MESSAGE"                : "Haluatko tallentaa muutokset dokumenttiin <span class='dialog-filename'>{0}</span>?",
    "SAVE_CLOSE_MULTI_MESSAGE"          : "Haluatko tallentaa muutokset näihin dokumentteihin?",
    "EXT_MODIFIED_TITLE"                : "Ulkoiset muutokset",
    "EXT_MODIFIED_MESSAGE"              : "<span class='dialog-filename'>{0}</span> on muuttunut, mutta siinä on myös tallentamattomia muutoksia {APP_NAME}-sovelluksessa.<br /><br />Minkä version haluat säilyttää?",
    "EXT_DELETED_MESSAGE"               : "<span class='dialog-filename'>{0}</span> on poistettu. Kuitenkin {APP_NAME}-sovelluksessa on tallentamattomia muutoksia.<br /><br />Haluatko säilyttää muutokset?",
    
    // Find, Replace, Find in Files
    "SEARCH_REGEXP_INFO"                : "Käytä /re/-syntaksia hakeaksesi säännöllisellä lausekkeella",
  "FIND_RESULT_COUNT"                 : "{0} tulosta",
    "WITH"                              : "merkkijonolla",
    "BUTTON_YES"                        : "Kyllä",
    "BUTTON_NO"                         : "Ei",
    "BUTTON_STOP"                       : "Seis",

    "OPEN_FILE"                         : "Avaa tiedosto",
    "CHOOSE_FOLDER"                     : "Valitse kansio",

    "RELEASE_NOTES"                     : "Julkaisutiedot",
    "NO_UPDATE_TITLE"                   : "Olet ajantasalla!",
    "NO_UPDATE_MESSAGE"                 : "Käytät uusinta versiota sovelluksesta {APP_NAME}.",
    
    "FIND_IN_FILES_TITLE"               : "kohteelle \"{4}\" {5} - {0} {1} {2} {3}",
    "FIND_IN_FILES_SCOPED"              : "kohteesta <span class='dialog-filename'>{0}</span>",
    "FIND_IN_FILES_NO_SCOPE"            : "projektissa",
    "FIND_IN_FILES_FILE"                : "tiedostossa",
    "FIND_IN_FILES_FILES"               : "tiedostossa",
    "FIND_IN_FILES_MATCH"               : "vastaavuus",
    "FIND_IN_FILES_MATCHES"             : "vastaavuutta",
    "FIND_IN_FILES_MORE_THAN"           : "Enemmän kuin ",
    "FIND_IN_FILES_MAX"                 : " (näytetään ensimmäiset {0} vastaavuutta)",
    "FIND_IN_FILES_FILE_PATH"           : "Tiedosto: <span class='dialog-filename'>{0}</span>",
    "FIND_IN_FILES_LINE"                : "Rivi: {0}",

    "ERROR_FETCHING_UPDATE_INFO_TITLE"  : "Virhe noudettaessa päivitystietoja",
    "ERROR_FETCHING_UPDATE_INFO_MSG"    : "Ei onnistuttu saamaan tietoja palvelimelta. Tarkista internet-yhteytesi ja yritä uudelleen.",

    /**
     * ProjectManager
     */
    "PROJECT_LOADING"   : "Ladataan\u2026",
	"UNTITLED"          : "nimetön",
	"WORKING_FILES"     : "Työtiedostot",

    /**
     * Keyboard modifier names
     */

    "KEYBOARD_CTRL"   : "Ctrl",
    "KEYBOARD_SHIFT"  : "Shift",
    "KEYBOARD_SPACE"  : "Välilyönti",
    
    /**
     * StatusBar strings
     */
    "STATUSBAR_CURSOR_POSITION"             : "Rivi {0}, merkki {1}",
    "STATUSBAR_INDENT_TOOLTIP_SPACES"       : "Napsauta muuttaaksesi sisennys välilyönneiksi",
    "STATUSBAR_INDENT_TOOLTIP_TABS"         : "Napsauta muuttaaksesi sisennys sarkainmerkeiksi",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES"  : "Napsauta muuttaaksesi sisennyksenä käytettävien välilyöntien määrää",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS"    : "Napsauta muuttaaksesi sarkainmerkin leveyttä",
    "STATUSBAR_SPACES"                      : "Välilyönnit",
    "STATUSBAR_TAB_SIZE"                    : "Sarkaimen koko",
	"STATUSBAR_LINE_COUNT_SINGULAR"         : "\u2014 {0} rivi",
    "STATUSBAR_LINE_COUNT_PLURAL"           : "\u2014 {0} riviä",

    /**
     * Command Name Constants
     */

    // File menu commands
    "FILE_MENU"                           : "Tiedosto",
    "CMD_FILE_NEW"                        : "Uusi tiedosto",
    "CMD_FILE_NEW_FOLDER"                 : "Uusi kansio",
    "CMD_FILE_OPEN"                       : "Avaa\u2026",
    "CMD_ADD_TO_WORKING_SET"              : "Lägg till i arbetsyta",
    "CMD_OPEN_FOLDER"                     : "Avaa kansio\u2026",
    "CMD_FILE_CLOSE"                      : "Sulje",
    "CMD_FILE_CLOSE_ALL"                  : "Sulje kaikki",
    "CMD_FILE_SAVE"                       : "Tallenna",
    "CMD_FILE_SAVE_ALL"                   : "Tallenna kaikki",
    "CMD_FILE_SAVE_AS"                    : "Tallenna nimellä\u2026",
    "CMD_LIVE_FILE_PREVIEW"               : "Esikatselu",
    "CMD_LIVE_HIGHLIGHT"                  : "Reaaliaikainen korostus",
    "CMD_PROJECT_SETTINGS"                : "Projektin asetukset\u2026",
    "CMD_FILE_RENAME"                     : "Nimeä uudelleen",
    "CMD_FILE_DELETE"                     : "Poista",
	"CMD_EXTENSION_MANAGER"               : "Laajennusten hallinta\u2026",
    "CMD_FILE_REFRESH"                    : "Päivitä",
	"CMD_QUIT"                            : "Lopeta",
    // Used in native File menu on Windows
	"CMD_EXIT"                            : "Poistu",

    // Edit menu commands
    "EDIT_MENU"                           : "Muokkaa",
    "CMD_UNDO"                            : "Kumoa",
    "CMD_REDO"                            : "Tee uudelleen",
    "CMD_CUT"                             : "Leikkaa",
    "CMD_COPY"                            : "Kopioi",
    "CMD_PASTE"                           : "Liitä",
    "CMD_SELECT_ALL"                      : "Valitse kaikki",
    "CMD_SELECT_LINE"                     : "Valitse rivi",
    "CMD_FIND"                            : "Etsi",
    "CMD_FIND_IN_FILES"                   : "Etsi tiedostoista",
    "CMD_FIND_IN_SUBTREE"                 : "Etsi kohteesta\u2026",
    "CMD_FIND_NEXT"                       : "Etsi seuraava",
    "CMD_FIND_PREVIOUS"                   : "Etsi edellinen",
    "CMD_REPLACE"                         : "Korvaa",
    "CMD_INDENT"                          : "Sisennä",
    "CMD_UNINDENT"                        : "Poista sisennys",
    "CMD_DUPLICATE"                       : "Kahdenna",
    "CMD_DELETE_LINES"                    : "Poista rivi",
    "CMD_COMMENT"                         : "Vaihda kommenttirivi",
    "CMD_BLOCK_COMMENT"                   : "Vaihda kommenttilohko",
    "CMD_LINE_UP"                         : "Siirrä rivi ylemmäs",
    "CMD_LINE_DOWN"                       : "Siirrä rivi alemmas",
    "CMD_SHOW_CODE_HINTS"                 : "Näytä koodivihjeet",
    "CMD_TOGGLE_CLOSE_BRACKETS"           : "Sulje sulkeet automaattisesti",
     
    // View menu commands
    "VIEW_MENU"                           : "Näytä",
    "CMD_HIDE_SIDEBAR"                    : "Piilota sivupalkki",
    "CMD_SHOW_SIDEBAR"                    : "Näytä sivupalkki",
    "CMD_INCREASE_FONT_SIZE"              : "Suurenna tekstikokoa",
    "CMD_DECREASE_FONT_SIZE"              : "Pienennä tekstikokoa",
    "CMD_RESTORE_FONT_SIZE"               : "Palauta tekstikoko",
    "CMD_TOGGLE_ACTIVE_LINE"              : "Korosta aktiivinen rivi",
    "CMD_TOGGLE_LINE_NUMBERS"             : "Rivinumerot",
    "CMD_TOGGLE_WORD_WRAP"                : "Tekstin rivitys",
    "CMD_SORT_WORKINGSET_BY_ADDED"        : "Järjestä lisäysajan mukaan",
    "CMD_SORT_WORKINGSET_BY_NAME"         : "Järjestä nimen mukaan",
    "CMD_SORT_WORKINGSET_BY_TYPE"         : "Järjestä tyypin mukaan",
    "CMD_SORT_WORKINGSET_AUTO"            : "Automaattinen järjestäminen",

    // Navigate menu Commands
    "NAVIGATE_MENU"                       : "Siirry",
    "CMD_QUICK_OPEN"                      : "Pika-avaus",
    "CMD_GOTO_LINE"                       : "Siirry riville",
    "CMD_GOTO_DEFINITION"                 : "Siirry määrittelyyn",
    "CMD_TOGGLE_QUICK_EDIT"               : "Pikamuokkaus",
    "CMD_QUICK_EDIT_PREV_MATCH"           : "Edellinen vastaavuus",
    "CMD_QUICK_EDIT_NEXT_MATCH"           : "Seuraava vastaavuus",
    "CMD_NEXT_DOC"                        : "Seuraava dokumentti",
    "CMD_PREV_DOC"                        : "Edellinen dokumentti",
    "CMD_SHOW_IN_TREE"                    : "Näytä tiedostopuussa",
    "CMD_SHOW_IN_OS"                      : "Näytä käyttöjärjestelmässä",
    "CMD_TOGGLE_QUICK_DOCS"               : "Pikadokumentaatio",
    
    // Help menu commands
    "HELP_MENU"                           : "Ohje",
    "CMD_CHECK_FOR_UPDATE"                : "Tarkista päivitykset",
    "CMD_HOW_TO_USE_BRACKETS"             : "Miten käyttää {APP_NAME}-sovellusta",
	"CMD_FORUM"                           : "{APP_NAME}-keskustelupalsta",
	"CMD_RELEASE_NOTES"                   : "Julkaisutiedot",
	"CMD_REPORT_AN_ISSUE"                 : "Ilmoita ongelmasta",
	"CMD_SHOW_EXTENSIONS_FOLDER"          : "Näytä laajennusten kansio",
	"CMD_TWITTER"                         : "{TWITTER_NAME} Twitterissä",
	"CMD_ABOUT"                           : "Tietoja {APP_TITLE}-sovelluksesta",

    // Special commands invoked by the native shell
    "CMD_CLOSE_WINDOW"                    : "Sulje ikkuna",
    "CMD_ABORT_QUIT"                      : "Peruuta poistuminen",

    // Strings for main-view.html
    "EXPERIMENTAL_BUILD"                   : "Kokeellinen koontiversio",
    "SEARCH_RESULTS"                       : "Hakutulokset",
    "OK"                                   : "OK",
    "DONT_SAVE"                            : "Älä tallenna",
    "SAVE"                                 : "Tallenna",
    "CANCEL"                               : "Peruuta",
    "RELOAD_FROM_DISK"                     : "Lataa uudelleen levyltä",
    "KEEP_CHANGES_IN_EDITOR"               : "Pidä muutokset editorissa",
    "CLOSE_DONT_SAVE"                      : "Sulje (älä tallenna)",
    "RELAUNCH_CHROME"                      : "Käynnistä Chrome uudelleen",
    "ABOUT"                                : "Tietoja",
    "CLOSE"                                : "Sulje",
    "ABOUT_TEXT_LINE1"                     : "sprint {VERSION_MINOR} kokeellinen koontiversio {VERSION}",
    "ABOUT_TEXT_LINE4"                     : "Dokumentaatio ja lähdekoodi osoitteessa <a class=\"clickable-link\" data-href=\"https://github.com/adobe/brackets/\">https://github.com/adobe/brackets/</a>",
	"ABOUT_TEXT_LINE5"                     : "He tekivät sen \u2764lla ja JavaScriptilla:",
    "UPDATE_NOTIFICATION_TOOLTIP"          : "{APP_NAME}-sovelluksesta on saatavilla uusi versio! Napsauta tästä saadaksesi lisätietoja.",
    "UPDATE_AVAILABLE_TITLE"               : "Päivitys saatavissa!",
    "UPDATE_MESSAGE"                       : "Hei! {APP_NAME}-sovelluksesta on saatavilla uusi versio. Tässä on joitakin uusia toimintoja:",
    "GET_IT_NOW"                           : "Asenna nyt!",
    "PROJECT_SETTINGS_TOOLTIP"             : "Projektin asetukset",
    "PROJECT_SETTINGS_TITLE"               : "Projektin asetukset kohteelle: {0}",
    "PROJECT_SETTING_BASE_URL"             : "Esikatselun URL-osoite",
    "PROJECT_SETTING_BASE_URL_HINT"        : "(käytä paikallista palvelinta antamalla url-osoite)",
    "BASEURL_ERROR_INVALID_PROTOCOL"       : "{0} Esikatselu ei tue tätä protokollaa. Käytä joko http: tai https: .",
    "BASEURL_ERROR_SEARCH_DISALLOWED"      : "URL-osoite ei saa sisältää hakuparametreja, kuten \"{0}\".",
    "BASEURL_ERROR_HASH_DISALLOWED"        : "URL-osoite ei saa sisältää ristikkomerkkejä, kuten \"{0}\".",
    "BASEURL_ERROR_INVALID_CHAR"           : "Erikoismerkit, kuten '{0}', täytyy olla %-koodattu.",
    "BASEURL_ERROR_UNKOWN_ERROR"           : "Tuntematon virhe!",
    
    
    // Extension Management strings
    "INSTALL"                              : "Asenna",
    "REMOVE"                               : "Poista",
    "OVERWRITE"                            : "Ylikirjoita",
	"CANT_REMOVE_DEV"                      : "Laajennusten \"dev\"-kansio on poistettava käsin.",
	"INSTALL_EXTENSION_TITLE"              : "Asenna laajennus",
	"INSTALL_EXTENSION_LABEL"              : "Laajennuksen URL-osoite",
    "INSTALL_EXTENSION_HINT"               : "Laajennuksen zip-tiedoston URL-osoite tai GitHub repo",
	"INSTALLING_FROM"                      : "Asennetaan laajennus kohteesta {0}\u2026",
	"INSTALL_SUCCEEDED"                    : "Asennus on valmis!",
    "INSTALL_FAILED"                       : "Asennus epäonnistui.",
	"CANCELING_INSTALL"                    : "Peruutetaan\u2026",
    "CANCELING_HUNG"                       : "Asennuksen peruutus on kestänyt jo useita minuutteja. On voinut tapahtua sisäinen virhe.",
	"INSTALL_CANCELED"                     : "Asennus keskeytetty.",
	// These must match the error codes in ExtensionsDomain.Errors.* :
    "INVALID_ZIP_FILE"                     : "Ladattu zip-tiedosto ei ole kelvollinen.",
    "INVALID_PACKAGE_JSON"                 : "JSON-paketti on virheellinen. (Virhe: {0}).",
    "MISSING_PACKAGE_NAME"                 : "JSON-pakettitiedostolle ei ole määritelty paketin nimeä.",
    "BAD_PACKAGE_NAME"                     : "{0} on virheellinen paketin nimi.",
    "MISSING_PACKAGE_VERSION"              : "JSON-pakettitiedostolle ei ole määritelty paketin versiota.",
    "INVALID_VERSION_NUMBER"               : "Paketin versionumero ({0}) ei kelpaa.",
    "INVALID_BRACKETS_VERSION"             : "{APP_NAME}-sovelluksen yhteensopivuuden merkkijono ({0}) ei kelpaa.",
    "DISALLOWED_WORDS"                     : "Sanat ({1}) eivät ole sallittuja {0} kentässä.",
    "API_NOT_COMPATIBLE"                   : "Laajennus ei ole yhteensopiva nykyisen {APP_NAME}-version kanssa.", // !!
    "MISSING_MAIN"                         : "Paketissa ei ole main.js-tiedostoa.",
    "EXTENSION_ALREADY_INSTALLED"          : "Tämän paketin asennus korvaa aiemmin asennetun laajennuksen. Korvataanko vanha laajennus?",
    "EXTENSION_SAME_VERSION"               : "Tämä paketti on sama kuin jo asennettu versio. Korvataanko nykyinen asennus?",
    "EXTENSION_OLDER_VERSION"              : "Tämän paketin versio on {0}, joka on vanhempi kuin nykyinen asennettu ({1}). Korvataanko nykyinen asennus?",
    "DOWNLOAD_ID_IN_USE"                   : "Sisäinen virhe: Lataustunnus on jo käytössä.",
    "NO_SERVER_RESPONSE"                   : "Yhteyttä ei voitu määrittää.",
    "BAD_HTTP_STATUS"                      : "Tiedostoa ei löydy palvelimelta (HTTP {0}).",
    "CANNOT_WRITE_TEMP"                    : "Latausta ei voitu tallentaa väliaikaiseen tiedostoon.",
    "ERROR_LOADING"                        : "Kun käynnistit laajennuksen, tapahtui virhe.",
    "MALFORMED_URL"                        : "URL on virheellinen. Tarkista, onko tämä kelvollinen URL-osoite.",
    "UNSUPPORTED_PROTOCOL"                 : "Syötä http- tai https-URL-osoite.",
    "UNKNOWN_ERROR"                        : "Tuntematon (sisäinen) virhe.",
	// For NOT_FOUND_ERR, see generic strings above
    "EXTENSION_MANAGER_TITLE"              : "Laajennusten hallinta",
	"EXTENSION_MANAGER_ERROR_LOAD"         : "Virhe käytettäessä rekisterin laajennuksia. Yritä myöhemmin uudelleen.",
	"INSTALL_FROM_URL"                     : "Asenna URL-osoitteesta\u2026",
	"EXTENSION_AUTHOR"                     : "Tekijä",
    "EXTENSION_DATE"                       : "Päivämäärä",
	"EXTENSION_INCOMPATIBLE_NEWER"         : "Tämä laajennus vaatii uudemman version {APP_NAME}-sovelluksesta.",
    "EXTENSION_INCOMPATIBLE_OLDER"         : "Tämä laajennus toimii tällä hetkellä vain vanhemmissa {APP_NAME}-sovelluksen versioissa.",
	"EXTENSION_NO_DESCRIPTION"             : "Ei kuvausta",
    "EXTENSION_MORE_INFO"                  : "Lisätietoja\u2026",
    "EXTENSION_ERROR"                      : "Laajennusvirhe",
    "EXTENSION_KEYWORDS"                   : "Avainsanat",
    "EXTENSION_INSTALLED"                  : "Asennettu",
    "EXTENSION_UPDATE_INSTALLED"           : "Tämän laajennuksen päivitys on ladattu ja asennettu, kun poistut {APP_NAME}-sovelluksesta.",
    "EXTENSION_SEARCH_PLACEHOLDER"         : "Haku",
    "EXTENSION_MORE_INFO_LINK"             : "Lisää",
	"BROWSE_EXTENSIONS"                    : "Selaa laajennuksia",
	"EXTENSION_MANAGER_REMOVE"             : "Poista laajennus",
    "EXTENSION_MANAGER_REMOVE_ERROR"       : "Virhe poistettaessa laajennusta: {0}. {APP_NAME} on yhä suljettu.",
    "EXTENSION_MANAGER_UPDATE"             : "Päivitä laajennus",
    "EXTENSION_MANAGER_UPDATE_ERROR"       : "Yhden tai useamman päivityksen asennus epäonnistui: {0}. {APP_NAME} on yhä suljettu.",
	"MARKED_FOR_REMOVAL"                   : "Merkitty poistettavaksi",
    "UNDO_REMOVE"                          : "Kumoa",
    "MARKED_FOR_UPDATE"                    : "Merkitty päivitettäväksi",
    "UNDO_UPDATE"                          : "Kumoa",
    "CHANGE_AND_QUIT_TITLE"                : "Muuta laajennuksia",
    "CHANGE_AND_QUIT_MESSAGE"              : "Päivittääksesi tai poistaaksesi valitut laajennukset sinun tarvitsee sulkea ja käynnistää {APP_NAME} uudelleen. Sinulta kysytään tallentamattomien muutosten tallentamista.",
    "REMOVE_AND_QUIT"                      : "Poista laajennukset ja poistu",
    "CHANGE_AND_QUIT"                      : "Muuta laajennuksia ja poistu",
    "UPDATE_AND_QUIT"                      : "Päivitä laajennukset ja poistu",
	"NO_EXTENSIONS"                        : "Laajennuksia ei ole vielä asennettu.<br>Napsauta \"Asenna URL-osoitteesta\" -painiketta alhaalta aloittaaksesi.",
	"NO_EXTENSION_MATCHES"                 : "Mikään laajennus ei vastannut hakuasi.",
	
	// extensions/default/DebugCommands
    "DEBUG_MENU"                           : "Kehitys",
    "CMD_SHOW_DEV_TOOLS"                   : "Näytä kehitystyökalut",
    "CMD_REFRESH_WINDOW"                   : "Päivitä {APP_NAME}-käyttöliittymä",
    "CMD_NEW_BRACKETS_WINDOW"              : "Uusi {APP_NAME}-ikkuna",
    "CMD_SWITCH_LANGUAGE"                  : "Vaihda kieltä",
    "CMD_RUN_UNIT_TESTS"                   : "Suorita testejä",
    "CMD_SHOW_PERF_DATA"                   : "Näytä suorituskyvyn tiedot",
	"CMD_ENABLE_NODE_DEBUGGER"             : "Ota käyttöön: Solmujen virheenjäljitin",
    "CMD_LOG_NODE_STATE"                   : "Kirjaa solmun tila konsoliin",
    "CMD_RESTART_NODE"                     : "Käynnistä solmu uudelleen",
    
    "LANGUAGE_TITLE"                       : "Vaihda kieltä",
    "LANGUAGE_MESSAGE"                     : "Valitse haluamasi kieli luettelosta:",
    "LANGUAGE_SUBMIT"                      : "Lataa {APP_NAME} uudelleen",
    "LANGUAGE_CANCEL"                      : "Peruuta",
	"LANGUAGE_SYSTEM_DEFAULT"              : "Järjestelmän oletus",
    
    /**
     * Locales
     */
    "LOCALE_DE"                            : "saksa",
    "LOCALE_EN"                            : "englanti",
	"LOCALE_FI"                            : "suomi",
    "LOCALE_FR"                            : "ranska",
    "LOCALE_CS"                            : "tšekki",
    "LOCALE_ES"                            : "espanja",
    "LOCALE_IT"                            : "italia",
    "LOCALE_JA"                            : "japani",
    "LOCALE_NB"                            : "norja",
    "LOCALE_PL"                            : "puola",
    "LOCALE_PT_BR"                         : "portugali, Brasilia",
    "LOCALE_PT_PT"                         : "portugali",
    "LOCALE_RU"                            : "venäjä",
    "LOCALE_SV"                            : "ruotsi",
    "LOCALE_TR"                            : "turkki",
    "LOCALE_ZH_CN"                         : "kiina, yksinkertaistettu",
	"LOCALE_HU"                            : "unkari",
	
	// extensions/default/InlineColorEditor
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP"     : "Nykyinen väri",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP"    : "Alkuperäinen väri",
    "COLOR_EDITOR_RGBA_BUTTON_TIP"              : "RGBa-muoto",
    "COLOR_EDITOR_HEX_BUTTON_TIP"               : "hex-muoto",
    "COLOR_EDITOR_HSLA_BUTTON_TIP"              : "HSLa-muoto",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR"      : "{0} (käytetty {1} kerran)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL"        : "{0} (käytetty {1} kertaa)",
	
	// extensions/default/JavaScriptCodeHints
    "CMD_JUMPTO_DEFINITION"                     : "Hyppää määrittelyyn",
    
    // extensions/default/JSLint
    "CMD_JSLINT"                           : "Ota JSLint käyttöön",
    "CMD_JSLINT_FIRST_ERROR"               : "Siirry ensimmäiseen JSLint-virheeseen",
    "JSLINT_ERRORS"                        : "JSLintin virheilmoitukset",
    "JSLINT_ERROR_INFORMATION"             : "1 JSLint-virhe",
    "JSLINT_ERRORS_INFORMATION"            : "{0} JSLint-virhettä",
    "JSLINT_NO_ERRORS"                     : "Ei JSLint-virheitä – Hyvää työtä!",
    "JSLINT_DISABLED"                      : "JSLint poistettu käytöstä tai ei yhteensopiva tiedostosi kanssa",
    
    // extensions/default/QuickView 
    "CMD_ENABLE_QUICK_VIEW"                : "Pikanäkymä osoittaessa",
    
    // extensions/default/WebPlatformDocs
    "DOCS_MORE_LINK"                       : "Lue lisää"
});
