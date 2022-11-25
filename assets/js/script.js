// primo utente

var Primo = /** @class */ (function () {
    function Primo(_credito, _numeroChiamate, _utente) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }
    Primo.prototype.ricarica = function (x) {
        return x + this.credito;
    };
    Primo.prototype.chiamata = function (y) {
        return y * 0.2;
    };
    Primo.prototype.numero404 = function (x, y) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    };
    Primo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Primo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    Primo.prototype.stampaLog = function (x, y) {
        console.log(this.utente);
        console.log("-------------------");
        console.log("Credito residuo: ".concat(this.numero404(x, y)));
        console.log("Chiamate effettuate: ".concat(this.getNumeroChiamate()));
        console.log("Azzera chiamate: ".concat(this.azzeraChiamate()));
        console.log("-------------------");
    };
    return Primo;
}());
var Laura = new Primo(5, 2, "Laura");
Laura.stampaLog(15, 15);

// secondo utente

var Secondo = /** @class */ (function () {
    function Secondo(_credito, _numeroChiamate, _utente) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }
    Secondo.prototype.ricarica = function (x) {
        return x + this.credito;
    };
    Secondo.prototype.chiamata = function (y) {
        return y * 0.2;
    };
    Secondo.prototype.numero404 = function (x, y) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    };
    Secondo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Secondo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    Secondo.prototype.stampaLog = function (x, y) {
        console.log(this.utente);
        console.log("-------------------");
        console.log("Credito residuo: ".concat(this.numero404(x, y)));
        console.log("Chiamate effettuate: ".concat(this.getNumeroChiamate()));
        console.log("Azzera chiamate: ".concat(this.azzeraChiamate()));
        console.log("-------------------");
    };
    return Secondo;
}());
var Cosimo = new Secondo(20, 5, "Cosimo");
Cosimo.stampaLog(35, 90);

// terzo utente

var Terzo = /** @class */ (function () {
    function Terzo(_credito, _numeroChiamate, _utente) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
    }
    Terzo.prototype.ricarica = function (x) {
        return x + this.credito;
    };
    Terzo.prototype.chiamata = function (y) {
        return y * 0.2;
    };
    Terzo.prototype.numero404 = function (x, y) {
        return (this.ricarica(x) - (this.chiamata(y) * this.numeroChiamate));
    };
    Terzo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Terzo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    Terzo.prototype.stampaLog = function (x, y) {
        console.log(this.utente);
        console.log("-------------------");
        console.log("Credito residuo: ".concat(this.numero404(x, y)));
        console.log("Chiamate effettuate: ".concat(this.getNumeroChiamate()));
        console.log("Azzera chiamate: ".concat(this.azzeraChiamate()));
        console.log("-------------------");
    };
    return Terzo;
}());
var Christian = new Terzo(0, 3, "Christian");
Christian.stampaLog(20, 10);



var Custom = /** @class */ (function () {
    function Custom(_credito, _numeroChiamate, _utente, _durataMediaChiamate, _costoMinuto) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.utente = _utente;
        this.durataMediaChiamate = _durataMediaChiamate;
        this.costoMinuto = _costoMinuto;
    }
    Custom.prototype.chiamata = function (x, y) {
        return x * y;
    };
    Custom.prototype.numero404 = function (x, y) {
        return (this.credito - (this.chiamata(x, y) * this.numeroChiamate));
    };
    Custom.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Custom.prototype.stampa = function () {
        //CONTROLLO
        if (!Number(document.getElementById("credito").value) ||
            !Number(document.getElementById("numeroTelefonate").value) ||
            !document.getElementById("nomeUtente").value ||
            !Number(document.getElementById("durataMedia").value) ||
            !Number(document.getElementById("costoMinuto").value)) {
            alert("Compilare tutti i campi");
            return;
        }
        else if (this.numero404(this.durataMediaChiamate, this.costoMinuto) < 0) {
            alert("Il credito residuo è negativo, riprova con più credito sul telefono!");
            return;
        }
        else {
            var zonaStampa = document.getElementById("zonaStampa");
            zonaStampa.innerHTML = " ";
            var span = document.createElement("span");
            span.classList.add("display-5", "d-block");
            span.innerHTML = "Gentile ".concat(this.utente, ", ecco il tuo resoconto:");
            var p = document.createElement("p");
            p.classList.add("d-block");
            p.innerHTML = "Credito residuo: ".concat(this.numero404(this.durataMediaChiamate, this.costoMinuto).toFixed(2), "&euro; <br>\n        Credito speso: ").concat((this.chiamata(this.durataMediaChiamate, this.costoMinuto) * this.numeroChiamate).toFixed(2), "&euro; <br> \n        Credito medio speso per chiamata: ").concat(this.chiamata(this.durataMediaChiamate, this.costoMinuto).toFixed(2), "&euro; ");
           zonaStampa.append(span, p);
        }
    };
    return Custom;
}());

var btn = document.getElementById("effectBox");
btn.addEventListener("click", function () {
    var User = new Custom(Number(document.getElementById("credito").value), Number(document.getElementById("numeroTelefonate").value), document.getElementById("nomeUtente").value, Number(document.getElementById("durataMedia").value), Number(document.getElementById("costoMinuto").value));
    User.stampa();
});
