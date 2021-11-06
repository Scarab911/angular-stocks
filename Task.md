**Užduotis**
##Sukurkite platformą skirtą biržos akcijoms (vartybiniams popieriams) valdyti.

Akcijos (Stock) modelis susideda iš šių atributų:
_name: string - Kompanijos pavadinimas (pvz.: Apple) _ code: string - Akcijos pavadinimas (pvz.: AAPL)
\_price: number - Akcijos vieneto kaina
\_previousPrice: number - Akcijos vieneto kaina praėjusią dieną
\_exchange: string - Biržos pavadinimas (pvz.: NASDAQ)
\_favorite: boolean - Atributas, kuris nurodo, ar akcija pridėta prie stebimų akcijų.

Platformos reikalavimai: _ Atvaizduoti visas akcijas ir jų informaciją _ Galimybė peržiūrėti akcijos informaciją individualiai (unikaliam adrese (route)) _ Galimybė pridėti akciją _ Galimybė atnaujinti akcijos informacija \* Sugalvokite savo papildomo funkcionalumo

Informacija apie serverį
Atsisiųskite archyvą (zip) ir jame rasite serverį, kurį galite pasileisti lokaliai. Serverį galite pasiekti adresu http://localhost:3000.

Serverio paleidimui naudokite šias komandas: _ npm install _ node index.js

Galimi serverio resursai (endpoints): _ GET /api/stock - grąžina visų egzistuojančių akcijų duomenis (JSON - stock modelių masyvą). _ POST /api/stock - ledžia pridėti naują akciją. \* PATCH /api/stock/:code - ledžia atnaujinti akciją pagal nurodytą kodą (atkreipkite dėmesį, kad kiekviena akcija turi savo unikalų kodą, o ne ID, pvz.: AAPL).
