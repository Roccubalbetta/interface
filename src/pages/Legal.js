import React from "react";
import {Link} from 'react-router-dom';

function Legal() {
    return (
    <React.Fragment>
      <body className="body">
        <div>
          <div className="sub1">
            Non lavoriamo per i poteri forti
          </div>
          <div className="sub2">
            Sfortunatamente ne Soros ne i Big farma ci finanziano e da questo progetto non ci guadagnamo un euro.
            Da qualche settimana, mostrare il greenpass è diventato un obbligo e una cosa che facciamo quotidianamente al lavoro, ristorante, bar.
            Facciamolo con stile allora!
            Questo progetto serve per fare sorridere te e il povero lavoratore che passa ore a scannerizzare i greenpass fuori dagli ingressi con il cellulare.
            Sappiamo che non è tanto e il problema non si sconfigge così ma crediamo che nel nostro piccolo anche un sorriso possa fare la differenza (e poi siamo informatici, non sappiamo fare molto altro).
          </div>

          <div className="sub3">
            E la privacy?
          </div>
          <div className="sub2">
            Ottima domanda! Non salviamo niente!
            Ma proprio niente niente dei tuoi dati personali.
            Ci siamo impegnati per far si che il processo di personalizzazione viene fatto nel tuo cellulare e tutte le informazioni restino li.
            Quando apri il sito è come se tu scaricassi una applicazione e al momento della salvataggio del greenpass personalizzato la disinstallassi.
            L’unica cosa che salviamo, un po come tutti i siti (ma in realtà di meno), sono dati sull’utilizzo (quanta gente ha provato a usare questo sito, ecc). 
            Se non ti fidi comunque puoi contattare Samuele (samuele@nonstudio.org) per guardare il codice del progetto.
          </div>
          <div className="sub3">
            La morale di tutto cio
          </div>
          <div className="sub2">
            Quindi è gratis e non mi rubate le informazioni?
            Esatto, in generale fai bene a non fidarti (ed è anche il motivo per cui abbiamo scritto questa pagina lunghissima). 
            Proprio per questo se il progetto ti piace e condividi i questi valori, puoi dare una mano anche tu! 
            Come?
            Offrendo un caffè agli sviluppatori con una donazione. Non ci aspettiamo che il nostro tempo venga ripagato (non è il nostro obiettivo) ma è un gesto che a noi fa super piacere (anche perche i server sono da pagare)
            Oppure se come noi non hai un soldo, puoi condividere il progetto a qualcun altr* (cosi magari il caffe lo offre ad entrambi)
          </div>
        </div>
          <div className="caffeButton">
              <Link to='/page1'className="caffe">Offrici un caffè</Link>
          </div>
          <div>
            <Link to='/page1'className="backHome">Torna alla home</Link>
          </div>
      </body>
    </React.Fragment>
    )
  }
  
export default Legal;