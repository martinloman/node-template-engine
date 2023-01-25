## Demo-kod för att använda en template engine

Ibland vill man generera _dynamiskt innehåll_ med NodeJS. Det kan vara t.ex. en lista mer produkter eller liknande som ska läsas upp ur en databas och sedan presenteras i någon slags HTML-struktur i en sida.

### Om template engines

En _template engine_ är ett verktyg för att skapa separation mellan HTML och JavaScript-kod. Att blanda HTML och JavaScript-kod kan ibland vara nödvändigt men det kan också innebära att koden blir svår att läsa.

Med en template engine skapar man mallar för hela HTML-sidor eller delar av HTML-sidor (t.ex. en lista med annonser eller en tabell med information) som man sedan använder för att generera den slutliga HTML-koden som ska skickas till klienten.

Den här demon använder en template engine som heter [express-handlebars](https://www.npmjs.com/package/express-handlebars) men det finns flera andra.

### Förutsättningar

Denna kod förutsätter att du har en MySql-server på din dator med en databas som heter _mydb_. Databasen ska ha tabellerna _users_ och _posts_. Om du har en annan struktur eller andra namn får du uppdatera inställningarna för databaskopplingarna och justera de querys som körs mot databasen.

### Installation

För att köra koden behöver du först installera dess dependencies. Det gör du genom att köra

```
npm install
```

i rotmappen. Det kommer installera npm-paketet [mysql2](https://www.npmjs.com/package/mysql2) samt [express](https://www.npmjs.com/package/express).

### Köra koden

Starta servern med

```
node server.js
```

eller, om du har nodemon installerat och inte kör i PowerShell,

```
nodemon server.js
```
