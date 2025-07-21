//importo express
import express from "express";
import { Persona, Persone } from "./models/persona";
import bodyParser from "body-parser";

//creo l'applicazione express
const app = express();
app.use(bodyParser.json()); // quando riceve del contenuto json lo interpreta i inserisce nel corpo della richiesta(body)
let coda: Persona[] = Persone;
let filaChiusa = false; //stato della fila
//avvio il webserver in ascolto sulla porta 3000
app.listen(3000, () => {
  console.log("backend in ascolto sulla porta 3000");
});
app.get("/", (req, res) => {
  res.send("Mettiti in Fila!");
});
//GET restituisce l intero array di persone e il numero di persone in Coda
app.get("/list", (req, res) => {
  res.send({
    coda: coda, // queue
    count: coda.length,
  });
});
//POST PER AGGIUNGERE UNA PERSONA ALLA CODA
app.post("/add", (req, res) => {
  console.log("Body ricevuto in /add:", req.body);
  const nuovaPersona: Persona = req.body;
  //controllo max 10pers
  if (coda.length >= 10) {
    return res.status(400).send({ error: "La Coda è piena, max 10 persone" });
  }
  if (!nuovaPersona.nome || !nuovaPersona.cognome) {
    return res.status(400).send({ error: "Nome e Cognome obbligatori" });
  }
  //uso il metodo some sull 'array coda per evitare duplicati
  const esistente = coda.some(
    (persona) =>
      persona.nome === nuovaPersona.nome &&
      persona.cognome === nuovaPersona.cognome
  );
  if (esistente) {
    return res.status(400).send({ error: "Persona già in coda" });
  } else {
    //se non esiste la aggiungo alla coda
    coda.push(nuovaPersona);
    res.send({
      messaggio: "Persona aggiunta alla Coda",
      coda: coda,
      count: coda.length,
    });
  }
});
//DELETE PER RIMUOVERE LA PRIMA PERSONA DALLA CODA
app.delete("/serve", (req, res) => {
  const personaServita = coda.shift();
  res.send({
    message: "Persona Servita",
    persona: personaServita,
    coda: coda,
    count: coda.length,
  });
});

//RIMESCOLAMENTO CODA con metodo sort()
app.get("/shuffle", (req, res) => {
  const codaRimescolata = [...coda].sort(() => Math.random() - 0.5);
  res.json({
    coda: codaRimescolata,
    message: "Rimescolamento avvenuto con successo",
    count: codaRimescolata.length,
  });
});
//CHIUSURA CODA
app.post("/close", (req, res) => {
  filaChiusa = true;
  res.json({
    message: "Coda chiusa con successo",
    coda: coda,
    count: coda.length,
  });
});
