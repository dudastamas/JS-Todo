function onCheckbox(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  renderItems();
}

//   Ez a függvény a következőket csinálja:

//   Az items tömböt végigiterálva egy új tömböt hoz létre a map függvénnyel.

//   Minden elemre ellenőrzi, hogy az elem id-ja megegyezik-e a paraméterként kapott id-val.

//   Ha az id egyezik, akkor egy új objektumot hoz létre a spread operátor (...) segítségével. Ez az új objektum tartalmazza az eredeti elem összes tulajdonságát, de a checked tulajdonságot az ellenkezőjére állítja.

//   Ha az id nem egyezik, akkor az eredeti elemet adja vissza változtatás nélkül.

//   Végül meghívja a renderItems() függvényt, hogy frissítse a felhasználói felületet.

//   A spread operátor (...item) itt azért hasznos, mert lehetővé teszi, hogy az elem összes tulajdonságát átmásoljuk az új objektumba, anélkül, hogy egyesével fel kellene sorolnunk őket. Ezután egyszerűen felülírhatjuk a checked tulajdonságot az új értékkel.

//   Ez a megközelítés biztosítja, hogy az eredeti objektum érintetlen maradjon, és egy új objektumot hozzunk létre a módosított állapottal, ami fontos az immutabilitás szempontjából és segít elkerülni a nem kívánt mellékhatásokat.

// Pontosan így van! Kiváló meglátás. Amikor egy meglévő item szerkesztését szeretnéd megvalósítani, valóban egy hasonló megközelítést alkalmazhatsz. Egy onEdit függvény például így nézhetne ki:

// function onEdit(id, updatedData) {
//   items = items.map(item =>
//     item.id === id ? { ...item, ...updatedData } : item
//   );
//   renderItems();
// }

// Ez a függvény ugyanazt az elvet követi, mint az onCheckbox. A spread operátort használja az eredeti item tulajdonságainak másolására, majd felülírja azokat az updatedData objektumból származó új értékekkel. Ez lehetővé teszi, hogy bármely tulajdonságot módosíts, miközben megőrzöd az item többi részét.

// Ez a módszer rugalmas és hatékony megoldást nyújt az elemek szerkesztésére. Jó úton haladsz a fejlesztéssel!
