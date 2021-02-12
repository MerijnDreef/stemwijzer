let currentSubject = 0;

const start = document.getElementById("start");
const eens = document.getElementById("eens");
const gvb = document.getElementById("gvb");
const oneens = document.getElementById("oneens");
const title = document.getElementById("title");
const statement = document.getElementById("statement");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const container = document.getElementById("container");

start.addEventListener ("click", function() {
    show(container);
    title.innerHTML = quest[currentSubject].title;
    statement.innerHTML = quest[currentSubject].statement;
    hide(start);
  });

next.addEventListener ("click", function(){
  if (currentSubject == 30) {
    //stop
  } else {
    currentSubject++;
    title.innerHTML = quest[currentSubject].title;
    statement.innerHTML = quest[currentSubject].statement;
  }
  console.log(currentSubject);
});

previous.addEventListener ("click", function(){
  if (currentSubject == 0){
    //don't
  } else {
    currentSubject--;
    title.innerHTML = quest[currentSubject].title;
    statement.innerHTML = quest[currentSubject].statement;
  }
  console.log(currentSubject);
});

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

var quest = [
  {title: "Vaccinatiebewijs", statement: "Organisatoren van evenementen moeten bij de toegang een vaccinatiebewijs kunnen vragen."}, //1
  {title: "Defensiebudget", statement: "Nederland moet meer geld uitgeven aan defensie."}, //2
  {title: "Gratis kinderopvang", statement: "Kinderopvang moet voor alle ouders ten minste drie dagen in de week gratis worden."}, //3
  {title: "Nederland uit EU", statement: "Nederland moet uit de Europese Unie (EU) stappen."}, //4, waarom uit de EU dat is dom
  {title: "Rekeningrijden", statement: "In plaats van de belasting op autobezit moet er voor automobilisten een belasting komen per gereden kilometer."}, //5
  {title: "Vuurwerk", statement: "Aankomende jaarwisseling moet het weer toegestaan zijn om siervuurwerk af te steken."}, //6
  {title: "Vleesbelasting", statement: "Er moet een extra belasting komen op het kopen van vlees."}, //7
  {title: "Publieke omroep", statement: "Er moet minder geld naar de publieke omroep."}, //8
  {title: "Zorgfonds", statement: "In plaats van commerciële zorgverzekeraars moet er een landelijk zorgfonds komen voor iedereen."}, //9
  {title: "Gezichtsbedekkende kleding", statement: "De regering moet het verbod op gezichtsbedekkende kleding afschaffen."}, //10
  {title: "Volkshuisvesting", statement: "In plaats van provincies en gemeenten moet de landelijke overheid weer beslissen waar nieuwe woonwijken worden gebouwd."}, //11
  {title: "Btw op kunst en cultuur", statement: "De regering moet de btw op culturele activiteiten verlagen naar 5 procent."}, //12
  {title: "Kerncentrale", statement: "Nederland moet een nieuwe kerncentrale bouwen."}, //13
  {title: "Woningen op landbouwgrond", statement: "Er moeten woningen worden gebouwd op grond die nu voor landbouw wordt gebruikt."}, //14
  {title: "Belastingvoordeel huishoudens", statement: "Huishoudens met twee partners waarvan er één werkt, moeten net zoveel belastingvoordeel krijgen als huishoudens met twee werkende partners."}, //15
  {title: "Excuses slavenhandel", statement: "De Nederlandse regering moet excuses aanbieden voor de slavenhandel in het verleden."}, //16
  {title: "Correctief referendum", statement: "Burgers moeten de mogelijkheid krijgen om door het parlement aangenomen wetten tegen te houden via een referendum."}, //17
  {title: "Inkomen leraren", statement: "Leraren op basisscholen moeten net zoveel gaan verdienen als leraren op middelbare scholen."}, //18
  {title: "Gevangenisstraffen", statement: "Er moeten minder mogelijkheden komen om taakstraffen op te leggen in plaats van gevangenisstraffen."}, //19
  {title: "Vliegbelasting", statement: "Nederland moet een extra vliegbelasting invoeren voor korte-afstandsvluchten."}, //20
  {title: "Inburgering op locatie", statement: "Asielzoekers met een voorlopige verblijfsvergunning moeten eerst inburgeren voordat zij een huurwoning krijgen."}, //21
  {title: "Legalisering softdrugs", statement: "Zowel inkoop als verkoop van softdrugs door coffeeshops moet legaal worden."}, //22
  {title: "Nederlandstalig hoger onderwijs", statement: "De overheid moet onderwijs in het Nederlands vaker verplicht stellen op universiteiten en hogescholen."}, //23
  {title: "Voltooid leven", statement: "Mensen die hun leven voltooid vinden, moeten hulp kunnen krijgen bij zelfdoding."}, //24
  {title: "koppelling minimumloon en bijstand", statement: "Verhoging van de minimumlonen moet niet langer automatisch leiden tot verhoging van de bijstandsuitkeringen."}, //25
  {title: "Sociale huurwoningen", statement: "Nieuwbouwwijken moeten voor ten minste 40 procent bestaan uit sociale huurwoningen."}, //26
  {title: "Boerenbedrijven", statement: "Er moeten geen nieuwe beperkingen komen op de activiteiten van boerenbedrijven."}, //27
  {title: "Middenschool", statement: "Er moet een middenschool komen, zodat leerlingen op latere leeftijd de keuze maken tussen vmbo, havo of vwo."}, //28
  {title: "Vluchtelingen opnemen", statement: "Nederland moet meer vluchtelingen opnemen dan het nu doet."}, //29
  {title: "Mondkapjesplicht", statement: "Mensen moeten altijd zelf kunnen kiezen of ze een mondkapje dragen."}, //30
]
