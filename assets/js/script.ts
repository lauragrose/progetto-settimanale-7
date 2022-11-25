interface Smartphone {

    // PROPRIETA
    credito: number;
    numeroChiamate: number;

    // METODI
    ricarica?(x: number): void;
    chiamata?(x:number, y?: number): void;
    numero404?(x: number, y: number): number;
    getNumeroChiamate?(): number;
    azzeraChiamate?(x: number, y: number): void;

}


///////////////////////////////////////////// PRIMO UTENTE /////////////////////////////////////////////

class Primo implements Smartphone {

    public credito: number;
    public numeroChiamate: number;
    public utente: string;

    constructor(_credito: number, _numeroChiamate: number, _utente: string) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }

    public ricarica(x: number): number {
        return x + this.credito;
    }
    public chiamata(y: number): number {
        return y * 0.2;
    }
    public numero404(x: number, y: number) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }

    public stampaLog(x: number, y: number): any {
        console.log(this.utente);
        console.log(`-------------------`);
        console.log(`Credito residuo: ${this.numero404(x, y)}`);
        console.log(`Chiamate effettuate: ${this.getNumeroChiamate()}`);
        console.log(`Azzera chiamate: ${this.azzeraChiamate()}`);
        console.log(`-------------------`);
    }

}

var Laura = new Primo(5, 2, "Laura");
Laura.stampaLog(15, 15);

///////////////////////////////////////////// SECONDO UTENTE /////////////////////////////////////////////

class Secondo implements Smartphone {

    public credito: number;
    public numeroChiamate: number;
    public utente: string;

    constructor(_credito: number, _numeroChiamate: number, _utente: string) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }

    public ricarica(x: number): number {
        return x + this.credito;
    }
    public chiamata(y: number): number {
        return y * 0.2;
    }
    public numero404(x: number, y: number) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }

    public stampaLog(x: number, y: number): any {
        console.log(this.utente);
        console.log(`-------------------`);
        console.log(`Credito residuo: ${this.numero404(x, y)}`);
        console.log(`Chiamate effettuate: ${this.getNumeroChiamate()}`);
        console.log(`Azzera chiamate: ${this.azzeraChiamate()}`);
        console.log(`-------------------`);
    }

}

var Cosimo = new Secondo(20, 5, "Cosimo");
Cosimo.stampaLog(35, 90);

///////////////////////////////////////////// TERZO UTENTE /////////////////////////////////////////////

class Terzo implements Smartphone {

    public credito: number;
    public numeroChiamate: number;
    public utente: string;

    constructor(_credito: number, _numeroChiamate: number, _utente: string) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }

    public ricarica(x: number): number {
        return x + this.credito;
    }
    public chiamata(y: number): number {
        return y * 0.2;
    }
    public numero404(x: number, y: number) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }

    public stampaLog(x: number, y: number): any {
        console.log(this.utente);
        console.log(`-------------------`);
        console.log(`Credito residuo: ${this.numero404(x, y)}`);
        console.log(`Chiamate effettuate: ${this.getNumeroChiamate()}`);
        console.log(`Azzera chiamate: ${this.azzeraChiamate()}`);
        console.log(`-------------------`);
    }

}

var Christian = new Terzo(0, 3, "Christian");
Christian.stampaLog(20, 10);

///////////////////////////////////////////// UTENTE CUSTOM DAL FORM /////////////////////////////////////////////

class Custom implements Smartphone {

    public credito: number;
    public numeroChiamate: number;
    public utente: string;
    public durataMediaChiamate: number;
    public costoMinuto: number;

    constructor(_credito: number, _numeroChiamate: number, _utente: string, _durataMediaChiamate: number, _costoMinuto: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
        this.durataMediaChiamate = _durataMediaChiamate;
        this.costoMinuto = _costoMinuto;
    }

    public chiamata(x: number, y: number) {
        return x * y;
    }
    public numero404(x: number, y: number): number {
        return (this.credito - (this.chiamata(x, y) * this.numeroChiamate));
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public stampa(): any {

        //CONTROLLO
        if (!Number((document.getElementById("credito") as HTMLInputElement).value) ||
            !Number((document.getElementById("numeroTelefonate") as HTMLInputElement).value) ||
            !(document.getElementById("nomeUtente") as HTMLInputElement).value ||
            !Number((document.getElementById("durataMedia") as HTMLInputElement).value) ||
            !Number((document.getElementById("costoMinuto") as HTMLInputElement).value)) {
            alert("Compilare tutti i campi");
            return;
        }
        else if (this.numero404(this.durataMediaChiamate, this.costoMinuto) < 0) {
            alert("Il credito residuo è negativo, riprova con più credito sul telefono!");
            return;
        } else {
            //PULIZIA PER INPUT SEQUENZIALI
            let zonaStampa = (document.getElementById("zonaStampa") as HTMLElement);
            zonaStampa.innerHTML = " ";

            // CREAZIONE E STILIZZAZIONE ELEMENTI
            // USER
            let span = document.createElement("span");
            span.classList.add("display-5", "d-block");
            span.innerHTML = `Gentile ${this.utente}, ecco il tuo resoconto:`;

            // CREDITO RESIDUO
            let p = document.createElement("p");
            p.classList.add("d-block")
            p.innerHTML = `Credito residuo: ${this.numero404(this.durataMediaChiamate, this.costoMinuto).toFixed(2)}&euro; <br>
        Credito speso: ${(this.chiamata(this.durataMediaChiamate, this.costoMinuto) * this.numeroChiamate).toFixed(2)}&euro; <br> 
        Credito medio speso per chiamata: ${this.chiamata(this.durataMediaChiamate, this.costoMinuto).toFixed(2)}&euro; `;

            // STAMPA IN HTML
            zonaStampa.append(span, p);
        }
    }
}

// FUNZIONE RACCOLTA DATI, ISTANZIAMENTO CLASSE E STAMPA VALORI
var btn = document.getElementById("effectBox") as HTMLElement;

btn.addEventListener("click", () => {
    let User = new Custom(
        Number((document.getElementById("credito") as HTMLInputElement).value),
        Number((document.getElementById("numeroTelefonate") as HTMLInputElement).value),
        (document.getElementById("nomeUtente") as HTMLInputElement).value,
        Number((document.getElementById("durataMedia") as HTMLInputElement).value),
        Number((document.getElementById("costoMinuto") as HTMLInputElement).value)
    )

    User.stampa();
})