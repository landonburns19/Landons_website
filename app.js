class GeneratedVar {
    constructor() {
        this.point1x = 0;
        this.point1y = 0;
        this.city1 = '';
        this.point2x = 0;
        this.point2y = 0;
        this.city2 = '';
        this.point3x = 0;
        this.point3y = 0;
        this.city3 = '';
        this.length = 0;
        this.queur = 0;
        this.nextercounter = 0;
    }
}


class Qual {
    constructor() {
        this.type1 = 0;
    }
}


function prim1(map1, dim1, vari) {
    const rand = () => Math.floor(Math.random() * 1000);

    let randx = rand() % Math.floor(dim1 / 2);
    vari.point1x = randx;
    vari.point1x = vari.point1x + Math.floor(dim1 / 4);

    let randy = rand() % Math.floor(dim1 / 2);
    vari.point1y = randy;
    vari.point1y = vari.point1y + Math.floor(dim1 / 4);

    let lengthy = rand() % Math.floor(dim1 / 3);
    vari.length = lengthy;

    let height1 = rand() % 5;
    let height2 = rand() % 5;
    let height3;

    map1[vari.point1x][vari.point1y].type1 = 0;
    for (let h = 0; h < vari.length; h++) {
        if (((vari.point1x + h) >= dim1) || ((vari.point1x + h) <= 0)) {
            break;
        }
        map1[vari.point1x + h][vari.point1y].type1 = 0;
    }

    for (let y = 0; y <= vari.length; y++) {
        for (let q = 0; q <= (height1 + (rand() % 3)); q++) {
            if (((vari.point1x + y) >= dim1) || ((vari.point1y + q) >= dim1) || ((vari.point1x + y) <= 0) || ((vari.point1y + q) <= 0)) {
                break;
            }
            map1[vari.point1x + y - 1][vari.point1y + q - 1].type1 = 0;
        }
        for (let c = 0; c <= (height1 + (rand() % 3)); c++) {
            if (((vari.point1x + y) >= dim1) || ((vari.point1y - c) <= 0)) {
                break;
            }
            map1[vari.point1x + y - 1][vari.point1y - c].type1 = 0;
        }
    }
}


function sec1(map1, dim1, vari2) {
    const rand = (max) => Math.floor(Math.random() * max);

    let randx = rand(Math.floor(dim1 / 2));
    vari2.point1x = randx;

    let randy = rand(Math.floor(dim1 / 2));
    vari2.point1y = randy;

    let lengthy = rand(Math.floor(dim1 / 3));
    vari2.length = lengthy;

    let height1 = rand(5);
    let height2 = rand(5);

    if (map1[vari2.point1x][vari2.point1y].type1 === 0) {
        for (let h = 0; h < vari2.length; h++) {
            if (((vari2.point1x + h) >= dim1) || ((vari2.point1x + h) <= 0)) {
                break;
            }
            console.log(vari2.point1x + h);
            map1[vari2.point1x + h - 1][vari2.point1y].type1 = 0;
        }

        for (let y = 0; y <= vari2.length; y++) {
            for (let q = 0; q <= height1 + rand(3); q++) {
                if (((vari2.point1x + y) >= dim1) || ((vari2.point1y + q) >= dim1) || ((vari2.point1x + y) <= 0) || ((vari2.point1y + q) <= 0)) {
                    break;
                }
                console.log(vari2.point1x + y);
                console.log(vari2.point1y + q);
                map1[vari2.point1x + y - 1][vari2.point1y + q - 1].type1 = 0;
            }

            for (let c = 0; c <= height1 + rand(3); c++) {
                if (((vari2.point1x + y) >= dim1) || ((vari2.point1y - c) <= 0)) {
                    break;
                }
                console.log(vari2.point1x + y);
                console.log(vari2.point1y - c);
                map1[vari2.point1x + y - 1][vari2.point1y - c].type1 = 0;
            }
        }
    }
}


function allmightydeletion(map1, vari3, dim1) {
    const rand = (max) => Math.floor(Math.random() * max);

    let height1 = rand(5);
    let height2 = rand(5);

    for (let h = 0; h < vari3.length; h++) {
        if (((vari3.point1x + h) >= dim1) || ((vari3.point1x + h) <= 0)) {
            break;
        }
        console.log(vari3.point1x + h);
        map1[vari3.point1x + h - 1][vari3.point1y].type1 = 3;
    }

    for (let y = 0; y <= vari3.length; y++) {
        for (let q = 0; q <= height1 + rand(3); q++) {
            if (((vari3.point1x + y) >= dim1) || ((vari3.point1y + q) >= dim1) || ((vari3.point1x + y) <= 0) || ((vari3.point1y + q) <= 0)) {
                break;
            }
            console.log(vari3.point1x + y);
            console.log(vari3.point1y + q);
            map1[vari3.point1x + y - 1][vari3.point1y + q - 1].type1 = 3;
        }

        for (let c = 0; c <= height1 + rand(3); c++) {
            if (((vari3.point1x + y) >= dim1) || ((vari3.point1y - c) <= 0)) {
                break;
            }
            console.log(vari3.point1x + y);
            console.log(vari3.point1y - c);
            map1[vari3.point1x + y - 1][vari3.point1y - c].type1 = 3;
        }
    }
}


function tertiary(dim1, map1, vari3) {
    const rand = (max) => Math.floor(Math.random() * max);

    let randx = rand(Math.floor(dim1 / 2));
    vari3.point1x = randx;

    let updownleftright = rand(12);

    let randy = rand(Math.floor(dim1 / 2));
    vari3.point1y = randy;

    let lengthy = rand(Math.floor(dim1 / 3));
    vari3.length = lengthy;

    if (map1[vari3.point1x][vari3.point1y].type1 === 0) {
        if (updownleftright < 3) {
            while (map1[vari3.point1x][vari3.point1y].type1 === 0) {
                vari3.point1y = vari3.point1y + 1;
            }
            allmightydeletion(map1, vari3, dim1);
        } else if (updownleftright < 6) {
            while (map1[vari3.point1x][vari3.point1y].type1 === 0) {
                vari3.point1y = vari3.point1y - 1;
            }
            allmightydeletion(map1, vari3, dim1);
        } else if (updownleftright < 9) {
            while (map1[vari3.point1x][vari3.point1y].type1 === 0) {
                vari3.point1x = vari3.point1x - 1;
            }
            allmightydeletion(map1, vari3, dim1);
        } else if (updownleftright < 12) {
            while (map1[vari3.point1x][vari3.point1y].type1 === 0) {
                vari3.point1x = vari3.point1x + 1;
            }
            allmightydeletion(map1, vari3, dim1);
        }
    }
}



function checker(dim1, map1) {
    let counting = 0;
    for (let i = 0; i < dim1; i++) {
        for (let j = 0; j < dim1; j++) {
            if (map1[j][i].type1 === 0) {
                counting += 1;
            }
        }
    }
    console.log("counting");
    console.log(counting);
    console.log("counting");
    return counting < 700;
}


function simulateMapProcessing() {
    const dim1 = 100; 
    const map1 = Array.from({ length: dim1 + 1 }, () => Array.from({ length: dim1 + 1 }, () => new Qual()));
    const vari = new GeneratedVar();
    const vari3 = new GeneratedVar();

    do {
        for (let i = 0; i < dim1; i++) {
            for (let j = 0; j < dim1; j++) {
                map1[j][i] = new Qual();
                map1[j][i].type1 = 2;
            }
        }

        prim1(map1, dim1, vari);

        for (let countin = 0; countin < 1000; countin++) {
            sec1(map1, dim1, vari);
        }

        for (let countin = 0; countin < 500; countin++) {
            tertiary(dim1, map1, vari3);
        }

        for (let countin = 0; countin < 300; countin++) {
            sec1(map1, dim1, vari);
        }

        for (let l = 0; l < dim1; l++) {
            let row = '';
            for (let m = 0; m < dim1; m++) {
                row += map1[m][l].type1 + ' ';
            }
            console.log(row);
        }
    } while (checker(dim1, map1));
}


// simulateMapProcessing();