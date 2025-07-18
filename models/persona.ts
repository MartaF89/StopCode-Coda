export const Persone: Persona[] = [
  { nome: "Luca", cognome: "Rossi" },
  { nome: "Maria", cognome: "Bianchi" },
  { nome: "Giovanni", cognome: "Verdi" },
  { nome: "Anna", cognome: "Neri" },
  { nome: "Marco", cognome: "Russo" },
  { nome: "Chiara", cognome: "Ferrari" },
  { nome: "Stefano", cognome: "Romano" },
  { nome: "Elena", cognome: "Gallo" },
];

export interface Persona {
  nome: string;
  cognome: string;
}
