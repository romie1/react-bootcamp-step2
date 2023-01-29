import React, { useEffect, useState } from 'react';
import { SHE_TECH_LOGO } from './const';
import { buildGameBoard } from './utils';
import './reset.css';
import './style.css';

/**
 * Step 2: 
 * 
 * Nello step precedente (https://stackblitz.com/edit/react-ts-mbhkix) abbiamo preparato la struttura principale del nostro gioco ed aggiunto una singola carta alla board. Ovviamente per poter giocare abbiamo bisogno di più carte, precisamente un insieme di N coppie di carte, per un totale di 2N carte.
 Procediamo dunque al completamento della board.
 Assumiamo che la nostra board di gioco è composta da 4 righe e 4 colonne per un totale di 16 carte e quindi 8 coppie.

 NOTA: La carta che vediamo visualizzata nella board ha probabilmente un aspetto differente da quanto ottenuto nel primo step, questo perchè abbiamo modificato il codice css.
 * ------------
 * 1) Creare una riga di carte formata da 4 elementi aggiungendo 3 carte alla board duplicando il codice necessario alla creazione di una singola carta. Fatto?
 * Bene, come potete notare le 4 carte però non sono in riga ma appaiono in colonna! Per disporle come desiderato utilizziamo un po' di css e un ulteriore elemento HTML di tipo "div" che conterrà la 4 carte:
 - aggiungamo un div con classe game-board-row (vedi style.css)
 - posizioniamo le 4 carte all'interno del div creato
 * ------------
 * 2) Completare la board di gioco, ottenendo le 16 carte necessarie duplicando il codice che abbiamo scritto al passo precedente altre 3 volte.
 * 
 * E' chiaro che il metodo di aggiungere carte alla board duplicando il codice di una riga di carte non è molto efficace e questo per varie ragioni:
 * - duplicare il codice non è mai una buona idea perchè è difficile da leggere e manutenere
 * - l'attività in se è tediosa, prona ad errori e per nulla efficiente in termini di tempo (pensate se dovessimo creare una board molto grande, ad esempio di 20 coppie per un totale di 40 carte)
 * 
 * ------------ 
 * 3) React permette di scrivere del codice Javascript "mixandolo" con del codice HTML (questo mix prende il nome di JSX); questo ci consente di fare varie cose, fornendoci strumenti che il semplice codice HTML non ha, come ad esempio la possibile di fare dei cicli per automatizzare operazioni come quella vista al punto sopra.
 * Utilizzando questo strumento generiamo ora la board di gioco senza ripetizioni di codice tramite il metodo "map" proprio per gli Array partendo dalla struttura dati fornita e memorizzata dalla variabile (o state) board. 
 * 
 * 
 * La funzione buildGameBoard (vedi utils.js) restituisce una matrice di 16 carte. Dove ogni carta è un oggetto contente 4 proprietà:
 * - selected -> un valore booleano che indica se la carta è stata selezionata o meno
 * - symbol -> la carta (colore, id)
 * - row -> in quale riga verrà posizionata la carta all'interno della griglia
 * - column -> in quale colonna verrà posizionata la carta all'interno della griglia
 */
const Board = () => {
  /**
   * useState è un hook di React che ci consente di aggiornare e manipolare lo stato all'interno dei componenti; lo stato rappresenta le informazioni che l'applicazione o un componente memorizzano e possono gestire in un dato momento.
   *
   * In questo caso board è una variabile contenente i dati di tutte le carte (colore, posizione, se è stata selezionata o meno), ed ogni volta che questi dati cambiano (per esempio quando l'utente clicca la carta e quindi il valore "selected" passa da false a true) React aggiorna l'interfaccia eseguendo nuovamente il rendering del componente per applicare le modifiche necessarie a riflettere il cambiamento avvenuto nei dati.
   **/
  const [board, setBoard] = useState(buildGameBoard());

  return (
    <div className="game-board">
      {board.map((row) => (
        <div className="game-board-row">
          {row.map((card) => (
            <div className="play-card">
              <div className="play-card-front"> </div>
              <div className="play-card-back"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return <Board />;
}
