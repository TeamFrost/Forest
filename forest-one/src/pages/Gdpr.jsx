import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import HeaderSecond from "../components/HeaderSecond";
import Box from '@material-ui/core/Box'
const useStyles = makeStyles(() => ({
    title: {
        fontSize: 36,
    },
    subtitle: {
        fontSize: 22,
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
    },
    hr: {
        width: '80%',
        borderWidth: 2
    },
    text: {
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'justify'
    },
    titleLists: {
        fontSize: 20,
        fontWeight: "bold"
    },
    specialText: {
        color: '#347D32',
        fontWeight: "bold"
    },

}));

function Gdpr() {
    const classes = useStyles();

    return (
        <div>
            <HeaderSecond />
            <Box fontWeight="fontWeightBold" m={4} className={classes.title}>
                Politica de protecție a datelor și de confidențialitate
              </Box>
            <Box fontWeight="fontWeightBold" m={2} className={classes.subtitle}>
                Vă informăm că ne-am actualizat politicile conform celor mai recente modificări propuse de Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date. Înainte de a continua navigarea pe Website-ul nostru te rugăm să aloci timpul necesar pentru a citi și înțelege conținutul Politicii de confidențialitate și Politicii de Cookie.
              </Box>
            <hr className={classes.hr} />
            <div className={classes.text}>
                <h2>Politica de confidențialitate</h2>
                <ol>
                    <li className={classes.titleLists}>Informații Generale</li>
                    <p>
                        <span className={classes.specialText}>SC FOREST ONE SRL</span>, persoană juridică română, cu sediul în Moșnița Nouă, str. Berarilor nr. 8, județul Timiș, înregistrată la Registrul Comerțului sub nr. J35/922/2003, cod unic de înregistrare 15368923, atribut fiscal RO, vă explicăm în continuare modul în care prelucrăm și protejăm datele cu caracter personal.
                        Această notă are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării paginii de internet <span className={classes.specialText}>www.forestone.ro</span> (site-ul).
                        </p>
                    <li className={classes.titleLists}>Categoriile de date cu caracter personal prelucrate</li>
                    <p>
                        Ca vizitator al site-ului, <span className={classes.specialText}>FOREST ONE SRL</span> va prelucra datele dumneavoastră cu caracter personal, cum ar fi nume și prenume, adresa de e-mail, telefon sau date cu privire la modul în care utilizați site-ul (preferințe/comportament), precum și alte date pe care le furnizați în mod direct prin completarea formularului de precomandă prezent pe site.
                        </p>
                    <li className={classes.titleLists}>Scopurile și temeiurile prelucrării</li>
                    <p>
                        Pentru activități de ofertare și marketing, respectiv pentru transmiterea, prin intermediul mijloacelor de comunicare la distanță (e-mail, sms, telefon) de comunicări comerciale despre produsele și serviciile oferite de <span className={classes.specialText}>FOREST ONE SRL</span>, prin intermediul site-ului.
                        Pentru rezolvarea reclamațiilor, pentru a monitoriza traficul și pentru a îmbunătăți experiența de navigare pe site.
                        <p>
                            Temei: Prelucrarea datelor dumneavoastră pentru aceste scopuri are la bază consimțământul dumneavoastră, daca alegeți să-l furnizați, precum și interesul legitim  <span className={classes.specialText}>FOREST ONE</span> de a asigura funcționarea corectă a site-ului, precum și pentru a îmbunătăți permanent experiența de navigare a vizitatorilor site-ului.
                            Vă puteți exprima consimțământul pentru prelucrarea datelor în acest scop prin bifarea căsuței corespunzătoare din subsolul site-ului (accept).
                            Furnizarea datelor dumneavoastră în acest scop este voluntară. Refuzul furnizării datelor pentru acest scop nu va avea urmări negative asupra dumneavoastră.
                        </p>
                    </p>
                    <li className={classes.titleLists}>Durata pentru care prelucrăm datele</li>
                    <p>
                        <span className={classes.specialText}>FOREST ONE SRL</span> va prelucra datele cu character personal pentru perioada de timp necesară îndeplinirii scopurilor mai sus menționate.
                        În cazul în care vă retrageți consimțământul pentru prelucrarea datelor în scop de marketing, <span className={classes.specialText}>FOREST ONE SRL</span> va înceta prelucrarea datelor în acest sens, fără a afecta prelucrările realizate de către <span className={classes.specialText}>FOREST ONE SRL</span>, pe baza consimțământului dumneavoastră, înainte de retragerea acestuia.
                        </p>
                    <li className={classes.titleLists}>Dezvăluirea datelor cu caracter personal</li>
                    <p>
                        Pentru îndeplinirea scopurilor de prelucrare, <span className={classes.specialText}>FOREST ONE SRL</span> poate partaja datele dumneavoastră personale cu parteneri, terțe persoane sau entități care sprijină <span className={classes.specialText}>FOREST ONE SRL</span> pentru desfășurarea activității prin intermediul site-ului (furnizori de servicii IT, companii de curierat sau firme de consultanță) ori cu autorități locale sau centrale, precum și în toate cazurile în care dezvăluirea datelor cu caracter personal este obligatorie conform legislației.
                        </p>
                    <li className={classes.titleLists}>Transferul datelor cu caracter personal</li>
                    <p>
                        Datele cu caracter personal furnizate către <span className={classes.specialText}>FOREST ONE SRL</span> pot fi transferate doar pe teritoriul statelor din Uniunea Europeană.
                        </p>
                    <li className={classes.titleLists}>Drepturile de care beneficiați</li>
                    <p>
                        Conform legislației în domeniul prelucrării datelor cu caracter personal, în calitate de persoane vizate, ne puteți solicita să vă confirmăm dacă datele dumneavoastră cu caracter personal sunt sau nu prelucrate de noi, să vă transmitem o copie a datelor dumneavoastră cu caracter personal și/sau să le corectăm. În anumite situații, aveți dreptul să ne solicitați ștergerea datelor dumneavoastră cu caracter personal. Aveți dreptul de a vă opune unor prelucrări ale datelor dumneavoastră cu caracter personal, precum și de a vă retrage consimțământul pentru prelucrarea datelor ulterior datei acordării acestuia, fără efecte negative asupra dumneavoastră. În situația în care prelucrăm datele dumneavoastră cu caracter  personal în baza unui interes legitim (așa cum am menționat mai sus), aveți dreptul de a vă opune acestei prelucrări.
                    </p>
                    <p>
                        Dreptul de ștergere a datelor cu caracter personal poate fi limitat în cazul în care avem o obligație legală sau un interes legitim să păstram datele respective.
                        </p>
                    <p>În situația în care aveți întrebări sau doriți să vă exercitați aceste drepturi vă rugam să ne contactati la: <span className={classes.specialText}>office@forestone.ro</span> . Este imperativ necesar să faceți dovada identității dumneavoastră și să ne furnizați detalii pentru a putea răspunde cererii dumneavoastră. Ne dorim și sperăm să răspundem tuturor întrebărilor dumneavoastră cu privire la modul în care prelucrăm datele dumneavoastră cu caracter personal. Eventualele reclamații le puteți depune în Statul Membru în care locuiți, sunteți angajat sau în care a avut loc presupusa încălcare a legii privind protecția datelor.
                           </p>
                </ol>
            </div>
            <hr className={classes.hr} />
            <div className={classes.text}>
                <h2>Politica privind fișierele cookies</h2>
                <ol>
                    <li className={classes.titleLists}>Introducere </li>
                    <p>Prezenta politică privind fișierele cookies se aplică tuturor utilizatorilor paginii de internet <span className={classes.specialText}>www.forestone.ro</span> . Informațiile prezentate în continuare vizează informarea utilizatorilor acestei pagini de internet cu privire la plasarea, utilizarea și administrarea cookie-urilor de către <span className={classes.specialText}>FOREST ONE SRL</span> în contextul navigării utilizatorilor pe această pagină de internet.</p>
                    <li className={classes.titleLists}>Ce sunt cookie-urile?</li>
                    <p>Folosim termenul „cookie”-uri pentru a ne referi la modulele cookie și la tehnologiile similare prin intermediul cărora pot fi colectate informații în mod automat.
                    Un „Internet Cookie” (termen cunoscut și sub denumirea de „browser cookie” sau „HTTP cookie” ori „cookie”) reprezintă un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau pe alte echipamente ale unui utilizator prin intermediul cărora se accesează internetul.<br /><br/>
                    Cookie-urile sunt instalate prin solicitarea emisă de un web-server către un browser (de ex.: Internet Explorer, Firefox, Chrome). Cookie-urile instalate au o durată de existența determinată, fiind „pasive”, în sensul că nu conțin programe software, viruși sau spyware și nu vor accesa informațiile de pe hard driverul utilizatorului pe al cărui echipament au fost instalate. Un cookie este format din doua părți: numele cookie-ului și conținutul sau valoarea cookie-ului.
                    Din punct de vedere tehnic doar web-serverul care a trimis cookie-ul îl poate accesa din nou în momentul în care un utilizator se întoarce pe pagina de internet asociată web-serverului respectiv.
                    </p>
                    <li className={classes.titleLists}>Pentru ce scopuri sunt utilizate cookie-urile prin intermediul acestei pagini de internet:</li>
                    <p>Cookie-urile sunt utilizate pentru a furniza utilizatorilor acestei pagini de internet o experiență mai bună de navigare și servicii personalizate pentru fiecare utilizator în parte și anume pentru:</p>
                    <ul>
                        <li>Îmbunătățirea utilizării acestei pagini de internet, inclusiv prin identificarea oricăror erori care apar în timpul vizitării/utilizării acesteia de către utilizatori</li>
                        <li>Furnizarea de statistici anonime cu privire la modul în care este utilizata această pagină de internet către FOREST ONE SRL, în calitate de deținător al acestei pagini de internet</li>
                        <li>Anticiparea unor eventuale bunuri care vor fi în viitor puse la dispoziția utilizatorilor prin intermediul acestei pagini de internet, în funcție de serviciile / produsele accesate.</li>
                    </ul>
                    <p>Pe baza feedback-ului transmis prin cookie-uri în legătură cu modul în care se utilizează această pagină de internet, FOREST ONE SRL poate lua măsuri astfel încât această pagină de internet să corespundă intereselor utilizatorilor. Astfel, utilizarea cookie-urilor permite memorarea anumitor setări/preferințe stabilite de către utilizatorii acestei pagini de internet, precum: postarea comentariilor pe site.</p>
                    <li className={classes.titleLists}>Care este durata de viață a cookie-urilor?</li>
                    <p>Durata de viață a cookie-urilor poate varia semnificativ, depinde de scopul pentru care este plasat. Categorii de cookie-uri și durata de viață a acestora:<br /><br />Cookie-uri de sesiune – Un „cookie de sesiune” este un cookie care este șters automat atunci când utilizatorul închide browserul.<br /><br />Cookie-uri persistente sau fixe – Un „cookie persistent” sau „fix” este un cookie care rămâne stocat în terminalul utilizatorului până când atinge o anumită dată de expirare (poate fi câteva minute, zile sau câțiva ani în viitor) sau până la ștergerea acestuia de către utilizator din setările browserului folosit.
                    </p>
                    <li className={classes.titleLists}>Ce sunt cookie-urile plasate de terți?</li>
                    <p>Unele secțiuni ale paginii de internet pot fi accesate prin intermediul unor terți, caz în care aceste cookie-uri sunt denumite cookie-uri plasate de terți („third party cookie-uri”).
                    Terții furnizori ai cookie-urilor trebuie să respecte, de asemenea, regulile în materie de protecție a datelor. Aceste cookie-uri pot proveni, de exemplu, de la următorii terți: Google Analytics, Facebook, Youtube etc.</p>
                    <li className={classes.titleLists}>Ce cookie-uri sunt folosite prin intermediul acestei pagini de internet:</li>
                    <p>Prin utilizarea/vizitarea paginii de internet pot fi plasate următoarele cookie-uri:</p>
                        <ul>
                            <li>Cookie-uri de performanță a paginii de internet</li>
                            <li>Cookie-urile de performanța memorează preferințele utilizatorului acestei pagini de internet, astfel încât la o vizită ulterioară a paginii de internet setarea preferințelor nu mai este necesară.</li>
                            <li>Cookie-urile de analiză a utilizatorilor informează daca un anumit utilizator al paginii de internet a mai vizitat anterior această pagină de internet. Aceste cookie-uri sunt folosite doar în scopuri statistice.</li>
                            <li>Cookie-urile pentru geotargetting sunt folosite pentru a stabili țara de proveniență a utilizatorului paginii de internet, reclamele vor fi aceleași indiferent de limba selectată.</li>
                            <li>Cookie-urile pentru înregistrare se generează daca vă înregistrați pe acest site, care memorează această acțiune. Serverele utilizează aceste cookie-uri pentru a ne arata contul cu care sunteți înregistrat. De asemenea, utilizarea acestor cookie-uri permite să asociem orice comentariu postat pe pagina de internet cu username-ul contului folosit. În situația în care nu este selectată opțiunea “păstrează-mă înregistrat”, aceste cookie-uri se vor șterge automat în momentul închiderii browser-ului sau calculatorului.</li>
                            <li>Cookie-urile pentru publicitate ne permit să aflam dacă un utilizator al siteului a vizualizat o reclamă online, tipul acesteia și timpul scurs de la momentul vizualizării respectivei reclame. Prin urmare, aceste cookie-uri sunt folosite pentru a targeta publicitatea online, sunt anonime, întrucât stochează informații despre conținutul vizualizat, nu despre utilizatori.</li>
                            <li>Cookie-uri ale furnizorilor de publicitate. O mare parte din publicitatea pe care o găsiți pe acest site aparține terțelor părți. Unele dintre aceste părți folosesc propriile cookie-uri anonime pentru a analiza cât de multe persoane au fost expuse unui mesaj publicitar, sau pentru a vedea câte persoane au fost expuse de mai multe ori la aceeași reclamă. Companiile care generează aceste cookie-uri au propriile politici de confidențialitate, iar acest site nu are acces pentru a citi sau scrie aceste cookie-uri. Cookie-urile celor terțe părți pot fi folosite pentru a vă arata publicitatea targeta și pe alte site-uri, bazandu-se pe navigarea dvs pe acest site.</li>
                        </ul><br/>
                    <li className={classes.titleLists}>Ce tip de informații sunt stocate și accesate prin intermediul cookie-urilor?</li>
                    <p>Cookie-urile păstrează informații într-un fișier text de mici dimensiuni care permit recunoașterea browserului. Acest site recunoaște browserul până când cookie-urile expiră sau sunt șterse.</p>
                    <li className={classes.titleLists}>Particularizarea setărilor browserului în ceea ce privește cookie-urile</li>
                    <p>Fiecare browser de navigare pe internet oferă posibilitatea de a vă seta propiile preferințe în ceea ce privește activitatea de navigare pe internet.</p>
                    <li className={classes.titleLists}>Cum pot fi oprite cookie-urile?</li>
                    <p>Dezactivarea și refuzul de a primi cookie-uri pot face această pagină de internet dificil de vizitat și utilizat, conținutul afișat  poate apărea deficitar. Utilizatorii pot configura browserul să respingă fișierele cookie sau să fie acceptate cookie-uri de la o anumită pagină de internet. Toate browserele moderne oferă posibilitatea de a schimba setările cookie-urilor. Aceste setări pot fi accesate, ca regulă, în secțiunea „opțiuni” sau în meniul de „preferințe” al browserului.
                        Totuși, refuzarea sau dezactivarea cookie-urilor nu înseamnă că nu veți mai primi publicitate online – ci doar că aceasta nu va fi adaptată preferințelor și intereselor dumneavoastră, conform comportamentului de navigare.</p>
                    <p>Pentru a ințelege aceste setari, urmatoarele linkuri pot fi folositoare:</p>
                </ol>
                Pentru orice intrebari despre modul in care sunt utilizate cookie-urile prin intermediul acestei pagini de internet, va rugam sa ne contactati la <span className={classes.specialText}>office@forestone.ro</span>
            </div><br /><br />
            <Footer />
        </div>
    );
}

export default Gdpr;