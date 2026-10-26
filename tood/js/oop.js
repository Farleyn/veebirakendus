let raamat = {
    pealkiri: "Harry Potter ja tarkade kivi",
    autor: "J. K. Rowling",
    aasta: 1997,

    // raamatu info
    kirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ") ";
    },
    // aasta muutmine
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus aasta on: " + this.aasta);
    }
};

console.log(raamat.kirjeldus());
raamat.muudaAastat(1998);

let raamatukogu = {
    // raamatute nimekiri
    raamatud: [
        { pealkiri: "Harry Potter ja saladuste kamber", autor: "J. K. Rowling", aasta: 1998 },
        { pealkiri: "Harry Potter ja Azkabani vang", autor: "J. K. Rowling", aasta: 1999 },
        { pealkiri: "Harry Potter ja tulepeeker", autor: "J. K. Rowling", aasta: 2000 },
        { pealkiri: "Harry Potter ja Fööniksi Ordu", autor: "J. K. Rowling", aasta: 2003 }
    ],

    // näita kõiki raamatuid
    kuvaKõik() {
        let tulemus = "";
        this.raamatud.forEach(r => {
            tulemus += r.pealkiri + ", " + r.autor + ", " + r.aasta + "<br>";
        });
        return tulemus;
    },

    // raamatute arv
    koguarv() {
        return this.raamatud.length;
    },

    // uuemad kui 2000
    pärast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // kõige uuem raamat
    kõigeUuem() {
        let uueim = this.raamatud[0];
        this.raamatud.forEach(r => {
            if (r.aasta > uueim.aasta) {
                uueim = r;
            }
        });
        return uueim;
    }
};

// lisa uus raamat
function lisa() {
    let p = document.getElementById("pealkiri").value;
    let a = document.getElementById("autor").value;
    let aa = Number(document.getElementById("aasta").value);

    raamatukogu.raamatud.push({ pealkiri: p, autor: a, aasta: aa });
    document.getElementById("lisaTeade").innerHTML = "Raamat lisatud!";
}

// kuva nimekiri
function kuvaKõik() {
    let vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = raamatukogu.kuvaKõik();
}

// kuva koguarv
function kuvaArv() {
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Kokku raamatuid: " + raamatukogu.koguarv();
}

// kuva uuemad
function kuvaUued() {
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "Pärast 2000. aastat ilmunud: " + raamatukogu.pärast2000();
}

// kuva kõige uuem
function kuvaUueim() {
    let vastus4 = document.getElementById("vastus4");
    let uueim = raamatukogu.kõigeUuem();
    vastus4.innerHTML = "Kõige uuem raamat: " + uueim.pealkiri + " " + uueim.autor + ", " + uueim.aasta;
}