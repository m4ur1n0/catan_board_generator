// theo maurino

export interface TileData {
    resource : string;
    value : number;
}

import React from 'react'

function getRandomInt(max_value : number) { // non-inclusive max
    return Math.floor(Math.random() * max_value);
}

// const generate_board_values = (): TileData[] => {

//     const vals_to_weights = [0, 0, 1, 2, 3, 4, 5, 0, 5, 4, 3, 2, 1];
//     // const weights_to_vals = {1 : [2, 12], 2 : [3, 11], 3 : [4, 10], 4 : [5, 9], 5 : [6, 8]}

//     let ones: number[] = [2, 12];
//     let twos: number[] = [3, 11, 3, 11]
//     let threes: number[] = [4, 10, 4, 10]
//     let fours: number[] = [5, 9, 5, 9]
//     let fives: number[] = [6, 8, 6, 8];

//     const hay = Array(4).fill("hay");
//     const wood = Array(4).fill("wood");
//     const sheep = Array(4).fill("sheep");
//     const clay = Array(3).fill("clay");
//     const stone = Array(3).fill("stone");
//     let resources = ["desert"].concat(hay).concat(wood).concat(sheep).concat(clay).concat(stone);
//     console.log(resources);

//     let neighbors : number[][] = [[], [0], [1], [0], [0, 1, 3], [1, 2, 4], [2, 5], [3], [3, 4, 7], [4, 5, 8], [5, 6, 9], [6, 10], [7, 8], [8, 9, 12], [9, 10, 13], [10, 11, 14], [12, 13], [13, 14, 16], [14, 15, 17]];
//     // TILE LOCS --> A    B    C    D       E          F        G      H       I          J           K        L       M         N            O             P          Q            R             S
//     let tiles: TileData[] = []

//     // FUNCTION TO GET NEXT VALUE
//     function getWeightBasedOnNeighbors(neighbor_weights : number[]) : number {
//         if (neighbor_weights.length === 0) {
//             let i = getRandomInt(5) + 1;
//             switch (i) {
//                 case 1:
//                     return ones.pop() || 0;
//                 case 2:
//                     return twos.pop() || 0;
//                 case 3:
//                     return threes.pop() || 0;
//                 case 4:
//                     return fours.pop() || 0;
//                 case 5:
//                     return fives.pop() || 0;
//             }
//         } else if (ones.length + twos.length + threes.length + fours.length + fives.length === 1) { // if there is only one val left, return it
//             if (ones.length != 0) {
//                 return ones.pop() || 999;
//             }
//             if (twos.length != 0) {
//                 return twos.pop() || 999;
//             }
//             if (threes.length != 0) {
//                 return threes.pop() || 999;
//             }
//             if (fours.length != 0) {
//                 return fours.pop() || 999;
//             }
//             if (fives.length != 0 && !(5 in neighbor_weights)) {
//                 return fives.pop() || 999;
//             }
//         }

//         let total_to_match = neighbor_weights.reduce((a, b) => a + b);
//         let avg = total_to_match * 1.0 / neighbor_weights.length;
    
//         if (avg <= 3) {
//             while (true) {
//                 let chance = getRandomInt(20) + 1;
//                 if (chance == 1) {
//                     // 5%
//                     if (ones.length != 0) {
//                         return ones.pop() || 999;
//                     }

//                 } else if (chance == 2) {
//                     // 5%
//                     if (twos.length != 0) {
//                         return twos.pop() || 999;
//                     }
        
//                 } else if (chance <= 4) {
//                     // 10%
//                     if (threes.length != 0) {
//                         return threes.pop() || 999;
//                     }
        
//                 } else if (chance <= 8) {
//                     // 20%
//                     if (fours.length != 0) {
//                         return fours.pop() || 999;
//                     }
        
//                 } else {
//                     // 60%
//                     if (fives.length != 0 && !(5 in neighbor_weights)) {
//                         return fives.pop() || 999;
//                     }

//                 }
//             }
//         } else if (avg <= 6) {
//             while (true) {
//                 let chance = getRandomInt(20) + 1;
//                 if (chance <= 2) {
//                     // 10%
//                     if (ones.length != 0) {
//                         return ones.pop() || 999;
//                     }

//                 } else if (chance <= 4) {
//                     // 10%
//                     if (twos.length != 0) {
//                         return twos.pop() || 999;
//                     }
        
//                 } else if (chance <= 8) {
//                     // 20%
//                     if (threes.length != 0) {
//                         return threes.pop() || 999;
//                     }
        
//                 } else if (chance <= 16) {
//                     // 40%
//                     if (fours.length != 0) {
//                         return fours.pop() || 999;
//                     }
        
//                 } else {
//                     // 20%
//                     if (fives.length != 0 && !(5 in neighbor_weights)) {
//                         return fives.pop() || 999;
//                     }

//                 }
//             }  
//         } else if (avg <= 9) {
//             while (true) {
//                 let chance = getRandomInt(20) + 1;
//                 if (chance <= 2) {
//                     // 10%
//                     if (ones.length != 0) {
//                         return ones.pop() || 999;
//                     }

//                 } else if (chance <= 6) {
//                     // 20%
//                     if (twos.length != 0) {
//                         return twos.pop() || 999;
//                     }
        
//                 } else if (chance <= 14) {
//                     // 40%
//                     if (threes.length != 0) {
//                         return threes.pop() || 999;
//                     }
        
//                 } else if (chance <= 18) {
//                     // 20%
//                     if (fours.length != 0) {
//                         return fours.pop() || 999;
//                     }
        
//                 } else {
//                     // 10%
//                     if (fives.length != 0 && !(5 in neighbor_weights)) {
//                         return fives.pop() || 999;
//                     }

//                 }
//             }
    
//         } else if (avg <= 11) {
//             while (true) {
//                 let chance = getRandomInt(20) + 1;
//                 if (chance <= 6) {
//                     // 30%
//                     if (ones.length != 0) {
//                         return ones.pop() || 999;
//                     }

//                 } else if (chance <= 14) {
//                     // 40%
//                     if (twos.length != 0) {
//                         return twos.pop() || 999;
//                     }
        
//                 } else if (chance <= 17) {
//                     // 15%
//                     if (threes.length != 0) {
//                         return threes.pop() || 999;
//                     }
        
//                 } else if (chance <= 19) {
//                     // 10%
//                     if (fours.length != 0) {
//                         return fours.pop() || 999;
//                     }
        
//                 } else {
//                     // 5%
//                     if (fives.length != 0 && !(5 in neighbor_weights)) {
//                         return fives.pop() || 999;
//                     }

//                 }
//             }
//         } else {
//             while (true) {
//                 let chance = getRandomInt(20) + 1;
//                 if (chance <= 12) {
//                     // 60%
//                     if (ones.length != 0) {
//                         return ones.pop() || 999;
//                     }

//                 } else if (chance <= 16) {
//                     // 20%
//                     if (twos.length != 0) {
//                         return twos.pop() || 999;
//                     }
        
//                 } else if (chance <= 18) {
//                     // 10%
//                     if (threes.length != 0) {
//                         return threes.pop() || 999;
//                     }
        
//                 } else if (chance <= 19) {
//                     // 5%
//                     if (fours.length != 0) {
//                         return fours.pop() || 999;
//                     }
        
//                 } else {
//                     // 5%
//                     if (fives.length != 0 && !(5 in neighbor_weights)) {
//                         return fives.pop() || 999;
//                     }

//                 }
//             }
//         }
//     }

//     // GENERATE A RANDOMLY
//     let idx1 = getRandomInt(resources.length);
//     let res1 = resources[idx1];
//     resources.splice(0, idx1);
//     let tile1 = {resource : res1, value : 0}
//     if (res1 === "desert") {
//         tile1.value = getWeightBasedOnNeighbors([]);
//     }

//     let i = tiles.push(tile1);
//     let tile;
//     let idx;
//     let res : string;
//     let val;
//     while (i < 19) {
//         // i is our position as well as our tally
//         idx = getRandomInt(resources.length);
//         res = resources[idx];

//         let skip = false;
//         let neighbor_weights: number[] = [];
//         neighbors[i].forEach(index => {
//             let n = tiles[index];
//             console.log("'INDEX' : ", index, "RESOURCE : ", n.resource, " VALUE : ", n.value);
//             if (tiles[index].resource === res) {
//                 // 10 % chance of a 3-tier resource doubling
//                 // 15% chance of a 4-tier resource doubling
//                 let chance = getRandomInt(20) + 1;
//                 if ((chance > 3) || (chance > 2 && (res in stone || res in clay))) {
//                     skip = true;
//                     // break;
//                 }
//             }
//             console.log("TRYING TO PUSH ", vals_to_weights[n.value])
//             neighbor_weights.push(vals_to_weights[n.value]);
//         });
//         if (skip) {
//             // if there is an unacceptable double, skip it
//             continue;
//         }

//         // if we make it here the tile resource is valid
//         resources.splice(idx, 1);
//         console.log(resources);
//         console.log("NEIGHBOR WEIGHTS : ", neighbor_weights);
//         val = getWeightBasedOnNeighbors(neighbor_weights);
//         tile = {resource : res, value : val};
//         i = tiles.push(tile);
//     }



//     console.log(tiles);
//     return (tiles);
// }

const generate_board_values  = () : TileData[] => {

    const vals_to_weights = [0, 0, 1, 2, 3, 4, 5, 0, 5, 4, 3, 2, 1];
    // const weights_to_vals = {1 : [2, 12], 2 : [3, 11], 3 : [4, 10], 4 : [5, 9], 5 : [6, 8]}

    let ones = [2, 12];
    let twos = [3, 11, 3, 11]
    let threes = [4, 10, 4, 10]
    let fours = [5, 9, 5, 9]
    let fives = [6, 8, 6, 8];

    const hay = Array(4).fill("hay");
    const wood = Array(4).fill("wood");
    const sheep = Array(4).fill("sheep");
    const clay = Array(3).fill("clay");
    const stone = Array(3).fill("stone");
    let resources = ["desert"].concat(hay).concat(wood).concat(sheep).concat(clay).concat(stone);
    console.log(resources);

    let neighbors = [[], [0], [1], [0], [0, 1, 3], [1, 2, 4], [2, 5], [3], [3, 4, 7], [4, 5, 8], [5, 6, 9], [6, 10], [7, 8], [8, 9, 12], [9, 10, 13], [10, 11, 14], [12, 13], [13, 14, 16], [14, 15, 17]];
    // TILE LOCS --> A    B    C    D       E          F        G      H       I          J           K        L       M         N            O             P          Q            R             S
    let tiles : TileData[] = []

    // FUNCTION TO GET NEXT VALUE
    function getWeightBasedOnNeighbors(neighbor_weights : number[]) {
        if (neighbor_weights.length === 0) {
            let i = getRandomInt(5) + 1;
            switch (i) {
                case 1:
                    return ones.pop() || 0;
                case 2:
                    return twos.pop() || 0;
                case 3:
                    return threes.pop() || 0;
                case 4:
                    return fours.pop() || 0;
                case 5:
                    return fives.pop() || 0;
            }
        } else if (ones.length + twos.length + threes.length + fours.length + fives.length === 1) { // if there is only one val left, return it
            if (ones.length != 0) {
                return ones.pop() || 999;
            }
            if (twos.length != 0) {
                return twos.pop() || 999;
            }
            if (threes.length != 0) {
                return threes.pop() || 999;
            }
            if (fours.length != 0) {
                return fours.pop() || 999;
            }
            if (fives.length != 0) {
                return fives.pop() || 999;
            }
        }

        let total_to_match = neighbor_weights.reduce((a, b) => a + b);
        // let avg = total_to_match * 1.0 / neighbor_weights.length;
        let avg = total_to_match;

    
        if (avg <= 3) {

            while (true) {
                let chance = getRandomInt(20) + 1;
                if (chance == 1) {
                    // 5%
                    if (ones.length != 0) {
                        return ones.pop() || 999;
                    }

                } else if (chance == 2) {
                    // 5%
                    if (twos.length != 0) {
                        return twos.pop() || 999;
                    }
        
                } else if (chance <= 4) {
                    // 10%
                    if (threes.length != 0) {
                        return threes.pop() || 999;
                    }
        
                } else if (chance <= 7) {
                    // 15%
                    if (fours.length != 0) {
                        return fours.pop() || 999;
                    }
        
                } else {
                    // 65%
                    if (fives.length != 0 && !(neighbor_weights.includes(5))) {
                        console.log("RETURNING A 5er WITH NEIGHBORS : ", neighbor_weights);
                        console.log("PASSES FOLLOWING : ", (5 in neighbor_weights === true));

                        return fives.pop() || 999;
                    }

                }
            }
        } else if (avg <= 6) {

            while (true) {
                let chance = getRandomInt(20) + 1;
                if (chance <= 1) {
                    // 5%
                    if (ones.length != 0) {
                        return ones.pop() || 999;
                    }

                } else if (chance <= 2) {
                    // 5%
                    if (twos.length != 0) {
                        return twos.pop() || 999;
                    }
        
                } else if (chance <= 6) {
                    // 20%
                    if (threes.length != 0) {
                        return threes.pop() || 999;
                    }
        
                } else if (chance <= 13) {
                    // 35%
                    if (fours.length != 0) {
                        return fours.pop() || 999;
                    }
        
                } else {
                    // 25%
                    if (fives.length != 0 && !(neighbor_weights.includes(5))) {
                        console.log("RETURNING A 5er WITH NEIGHBORS : ", neighbor_weights);
                        console.log("PASSES FOLLOWING : ", (5 in neighbor_weights === true));

                        return fives.pop() || 999;
                    }

                }
            }  
        } else if (avg <= 9) {

            while (true) {
                let chance = getRandomInt(20) + 1;
                if (chance <= 2) {
                    // 10%
                    if (ones.length != 0) {
                        return ones.pop() || 999;
                    }

                } else if (chance <= 6) {
                    // 20%
                    if (twos.length != 0) {
                        return twos.pop() || 999;
                    }
        
                } else if (chance <= 14) {
                    // 40%
                    if (threes.length != 0) {
                        return threes.pop() || 999;
                    }
        
                } else if (chance <= 18) {
                    // 20%
                    if (fours.length != 0) {
                        return fours.pop() || 999;
                    }
        
                } else {
                    // 10%
                    if (fives.length != 0 && !(neighbor_weights.includes(5))) {
                        console.log("RETURNING A 5er WITH NEIGHBORS : ", neighbor_weights);
                        console.log("PASSES FOLLOWING : ", (5 in neighbor_weights === true));

                        return fives.pop() || 999;

                    }

                }
            }
    
        } else if (avg <= 11) {

            while (true) {
                let chance = getRandomInt(20) + 1;
                if (chance <= 6) {
                    // 30%
                    if (ones.length != 0) {
                        return ones.pop() || 999;
                    }

                } else if (chance <= 14) {
                    // 40%
                    if (twos.length != 0) {
                        return twos.pop() || 999;
                    }
        
                } else if (chance <= 17) {
                    // 15%
                    if (threes.length != 0) {
                        return threes.pop() || 999;
                    }
        
                } else if (chance <= 19) {
                    // 10%
                    if (fours.length != 0) {
                        return fours.pop() || 999;
                    }
        
                } else {
                    // 5%
                    if (fives.length != 0 && !(neighbor_weights.includes(5))) {
                        console.log("RETURNING A 5er WITH NEIGHBORS : ", neighbor_weights);
                        console.log("PASSES FOLLOWING : ", (5 in neighbor_weights === true));

                        return fives.pop() || 999;
                    }

                }
            }
        } else {

            while (true) {
                let chance = getRandomInt(20) + 1;
                if (chance <= 12) {
                    // 60%
                    if (ones.length != 0) {
                        return ones.pop() || 999;
                    }

                } else if (chance <= 16) {
                    // 20%
                    if (twos.length != 0) {
                        return twos.pop() || 999;
                    }
        
                } else if (chance <= 18) {
                    // 10%
                    if (threes.length != 0) {
                        return threes.pop() || 999;
                    }
        
                } else if (chance <= 19) {
                    // 5%
                    if (fours.length != 0) {
                        return fours.pop() || 999;
                    }
        
                } else {
                    // 5%
                    if (fives.length != 0 && !(neighbor_weights.includes(5))) {
                        console.log("RETURNING A 5er WITH NEIGHBORS : ", neighbor_weights);
                        console.log("PASSES FOLLOWING : ", (5 in neighbor_weights === true));

                        return fives.pop() || 999;
                    }

                }
            }
        }
    }

    // GENERATE A RANDOMLY
    let idx1 = getRandomInt(resources.length);
    let res1 = resources[idx1];
    resources.splice(idx1, 1);
    let tile1 = {resource : res1, value : 999}
    if (res1 != "desert") {
        tile1.value = getWeightBasedOnNeighbors([]);
    } else {
        tile1.value = 0;
    }

    let i = tiles.push(tile1);
    let tile;
    let idx;
    let res : string;
    let val;
    while (i < 19) {
        // i is our position as well as our tally
        idx = getRandomInt(resources.length);
        res = resources[idx];
        console.log("resource found :", res);

        // avoid assigning desert a val
        if (res === 'desert') {
            val = 0;
            tile = {resource : res, value: val};
            resources.splice(idx, 1);

            i = tiles.push(tile);
            continue;
        }

        let skip = false;
        let neighbor_weights : number[] = [];
        neighbors[i].forEach(index => {
            let n = tiles[index];
            // console.log("'INDEX' : ", index, "RESOURCE : ", n.resource, " VALUE : ", n.value);
            if (tiles[index].resource === res) {
                // 10 % chance of a 3-tier resource doubling
                // 15% chance of a 4-tier resource doubling
                let chance = getRandomInt(20) + 1;
                if ((chance > 3) || (chance > 2 && (res in stone || res in clay))) {
                    skip = true;
                    // break;
                }
            }
            // console.log("TRYING TO PUSH ", vals_to_weights[n.value])
            neighbor_weights.push(vals_to_weights[n.value]);
            console.log(`${i} 's NEIGHBOR'S WEIGHTS : ${neighbor_weights}`);
        });
        if (skip) {
            // if there is an unacceptable double, skip it
            console.log("SKIPPING");
            continue;
        }

        // if we make it here the tile resource is valid
        resources.splice(idx, 1);
        // console.log(resources);
        // console.log("NEIGHBOR WEIGHTS : ", neighbor_weights);
        val = getWeightBasedOnNeighbors(neighbor_weights);
        tile = {resource : res, value : val};
        console.log(`TILE : ${JSON.stringify(tile)}`);
        i = tiles.push(tile);
    }

    if (vals_to_weights[tiles[17].value] == 5 && vals_to_weights[tiles[18].value] == 5) {
        return generate_board_values();
    }

    console.log(JSON.stringify(tiles));
    return (tiles);
}

export default generate_board_values