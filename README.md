# Required packages

Det kræver at Vue CLI og strapi er installeret. Dette kan gøres med 2 kommandoer

npm i -g strapi@beta
npm i -g @vue/cli

Endvidere skal der køres:
npm install
i begge terminaler, for at få node modulerne installeret

# Guide til at køre applikationen

Åben 2 terminaler.
I den ene terminal går i ind i roden af mappen ok kører kommandoen:

strapi develop

Når dette er gjort, skal i blot oprette jeres egen bruger
Derefter skal i gå ind under settings -> "roles" under users og permissions plugin -> vælge "public" ->
klikke "select all" på alle enhederne -> save -> Klar til at bruge applikationen!

I den anden terminal går i ind i mappen, der hedder /onlineplus

der skriver i kommandoen

npm run serve

I kan derefter gå i gang med applikationen, ved at følge de links der står i terminalerne
