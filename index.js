'use strict'

// Úkol: Výlet na Havaj

// Zadání

//Dvě kamarádky se rozhodly, že pojedou spolu na dovolenou. Jde o drahou dovolenou na Havaj, takže mohou jet pouze, pokud součet jejich úspor přesahuje 100 tisíc korun. Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich měla platit víc. Dluh vyrovnají po dovolené.

//Napiš sérii podmínek, která zjistí (do konzole vypíše):
//1. Zda vůbec mohou nebo nemohou na dovolenou jet.

//2. Pokud mohou jet (tj. mají dohromady 100 tisíc):
//2.1. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
//2.2. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
//3. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
//3.1. Kolik peněz jim celkově ještě chybí.
//3.2. Kolik musí každá z nich ještě naspořit.


//Vstupní data dostaneš v následujícím formátu:

let osoba1 = {
    jmeno: 'Alena',
    uspory: 5000
};

let osoba2 = {
    jmeno: 'Karolína',
    uspory: 6000
};

const celkemZaDovolenou = 100000;

function dovolena (osoba1, osoba2) {
    if (osoba1.uspory + osoba2.uspory >= celkemZaDovolenou) {
      if (osoba1.uspory >= celkemZaDovolenou/2 && osoba2.uspory >= celkemZaDovolenou/2) {
          console.log("Obe maji dost nasetreno a mohou jet na dovolenou!")
        }
      else {
        console.log("Mohou jet na dovolenou, ale")
        if (osoba1.uspory <= celkemZaDovolenou/2) {
          console.log(`${osoba1.jmeno} bude dluzit ${celkemZaDovolenou/2 - osoba1.uspory} Kc.`)
        }
        if (osoba2.uspory <= celkemZaDovolenou/2) {
            console.log(`${osoba2.jmeno} bude dluzit ${celkemZaDovolenou/2 - osoba2.uspory} Kc.`)
        }
  
      }
    }
    else {
      console.log(`Nemohou jet na dovolenou! Jeste jim dohromady chybi: ${celkemZaDovolenou - osoba1.uspory - osoba2.uspory} Kc.`);
      if (osoba1.uspory <= celkemZaDovolenou/2) {
          console.log(`Na dovolenou musi jeste ${osoba1.jmeno} tolik: ${celkemZaDovolenou / 2 - osoba1.uspory} Kc nasetrit.`)
        }
      if (osoba2.uspory <= celkemZaDovolenou/2) {
          console.log(`Na dovolenou musi jeste ${osoba2.jmeno} tolik: ${celkemZaDovolenou / 2 - osoba2.uspory} Kc nasetrit.`)
      }
    }
}

//Tvým úkolem je program nejenom napsat, ale i otestovat - tedy vymyslet víc možností vstupních dat a zkontrolovat, jestli to funguje správně. Je hned vidět, že u zadaných vstupních dat mohou kamarádky okamžitě bez problémů odjet. Určitě ale existuje možnost, kdy kamarádky mají tak málo úspor, že nemohou odjet vůbec. A taky možnost, že můžou odjet, ale po dovolené si musí srovnat dluhy. Odpovídající vstupní data si vymysli. Jejich formát bude vždycky stejný, jen částky budou jiné (a jiný bude i výstup programu).

// Test:

//mohou
let osoba1 = {
    jmeno: 'Alena',
    uspory: 60000
  };
  let osoba2 = {
    jmeno: 'Karolína',
    uspory: 60000
  };
  dovolena(osoba1, osoba2);

//nemohou
let osoba1 = {
    jmeno: 'Alena',
    uspory: 40000
  };
  let osoba2 = {
    jmeno: 'Karolína',
    uspory: 40000
  };
  dovolena(osoba1, osoba2);

//jedna pujci te druhe
let osoba1 = {
    jmeno: 'Alena',
    uspory: 49000
  };
  let osoba2 = {
    jmeno: 'Karolína',
    uspory: 61000
  };
  dovolena(osoba1, osoba2);

let osoba1 = {
    jmeno: 'Alena', 
    uspory: 61000
    };
  let osoba2 = {
    jmeno: 'Karolína',
    uspory: 49000
    };
  dovolena(osoba1, osoba2);

