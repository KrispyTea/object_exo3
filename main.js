let François = {
    panier: ["huile", "tomate", "pain", "fromage"],
    derober(a){
        for (let i=0; i < 2;i++) {
            this.panier.push(a.panier[i]);
            a.panier.splice(i, 1)
        }
    }
}
let Sergio = {
    panier: ["pasta", "banane", "hummus", "roquefort"]
}

François.derober(Sergio)
console.log(François.panier);
console.log(Sergio.panier);