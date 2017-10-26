var kwotaBrutto = 2500;
var stawkaPodatku = 1;
var kosztPrzychoduProcent = 1;


function skladkaZus(kwotaBrutto) {
	var emerytalne = kwotaBrutto * 0.0976;
	var rentowe = kwotaBrutto * 0.015;
	var chorobowe = kwotaBrutto * 0.0245;

	var skladkaZus = chorobowe + rentowe + emerytalne;
	return skladkaZus;
	
}

function podatekDochodowy(kwotaBrutto, stawkaPodatku, kosztPrzychoduProcent ){

	var podstawaDoZdrowotnego = kwotaBrutto - skladkaZus;
	var kosztPrzychodu = podstawaDoZdrowotnego * kosztPrzychoduProcent;

	var podstawaPodatku = podstawaDoZdrowotnego - kosztPrzychodu;
	var pobranaZaliczka = podstawaPodatku * stawkaPodatku;

	var zdrowotneOdliczone = podstawaDoZdrowotnego * 0.09;
	var zdrowotneNieOdliczone = podstawaDoZdrowotnego * 0.0775;
	var zdrowotnePobrane = podstawaDoZdrowotnego * 0.0125;

	var zaliczkaWplacona = pobranaZaliczka - zdrowotneNieOdliczone;

	return zaliczkaWplacona;

}

function zdrowotneOdliczone(kwotaBrutto){
	var podstawaDoZdrowotnego = kwotaBrutto - skladkaZus;
	var zdrowotneOdliczone = podstawaDoZdrowotnego * 0.09;

	return zdrowotneOdliczone;

}

var skladkaZus = skladkaZus(kwotaBrutto);
var podatek = podatekDochodowy(kwotaBrutto, stawkaPodatku, kosztPrzychoduProcent);
var zdrowotneOdliczone = zdrowotneOdliczone(kwotaBrutto);

function kwotaNetto(kwotaBrutto){

	var kwotaNetto = kwotaBrutto - zdrowotneOdliczone - skladkaZus - podatek;
	return kwotaNetto;
}

var kwotaNetto = kwotaNetto(kwotaBrutto);



alert('Składka ZUS wynosi: ' + skladkaZus.toFixed(2) + ' zł.  Podatek dochodowy wynosi: ' + podatek.toFixed(2) + 'zł.  Zdrowotne odliczone wynosi: ' + zdrowotneOdliczone.toFixed(2) + ' zł. Kwota netto wynosi: ' + kwotaNetto.toFixed(2) + ' zł.');
