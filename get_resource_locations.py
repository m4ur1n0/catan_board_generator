# theo maurino

# two resources of the same kind cannot be neighbors if their sum total >= 8
# a group of 3 cannot occur where their sum total >= 13
# a group of 3 cannot occur where their sum total <= 4

import random
import time
import json

"""
TILEs will look like a JSON object:

tile : {
    'resource' : 'xxx',
    'value' : 000,
    'position' : 'X'
}

"""
def get_locs(tlist):
    # tiles list objects will originally only have resource and value
    tiles_list = tlist
    # tiles_list = [{'resource': 'clay', 'value': 11}, {'resource': 'clay', 'value': 11}, {'resource': 'clay', 'value': 2}, {'resource': 'stone', 'value': 10}, {'resource': 'stone', 'value': 9}, {'resource': 'stone', 'value': 3}, {'resource': 'hay', 'value': 6}, {'resource': 'hay', 'value': 6}, {'resource': 'hay', 'value': 4}, {'resource': 'hay', 'value': 8}, {'resource': 'sheep', 'value': 9}, {'resource': 'sheep', 'value': 12}, {'resource': 'sheep', 'value': 3}, {'resource': 'sheep', 'value': 8}, {'resource': 'wood', 'value': 4}, {'resource': 'wood', 'value': 5}, {'resource': 'wood', 'value': 5}, {'resource': 'wood', 'value': 10}, {'resource': 'desert', 'value': 0}]

    clay = 3
    stone = 3
    hay = 4
    sheep = 4
    wood = 4
    desert = 1
    resources = [clay, stone, hay, sheep, wood]

    # tile_values_used = {12:0, 11:0, 10:0, 9:0, 8:0, 6:0, 5:0, 4:0, 3:0, 2:0}
    tile_values_weight = {12:1, 11:2, 10:3, 9:4, 8:5, 6:5, 5:4, 4:3, 3:2, 2:1, 0:0}
    tile_values_unused = {12:1, 11:2, 10:2, 9:2, 8:2, 6:2, 5:2, 4:2, 3:2, 2:1, 0:0}

    positions_and_neighbors = {"A": "DEB", "B":"AEFC", "C":"BFG", "D":"HIEA", "E":"ABDFIJ", "F":"BCEGJK", "G":"CFKL", "H":"DIM", "I":"DEHJMN", "J":"EFIKNO", "K":"FGJLOP", "L":"GKP", "M":"HINQ", "N":"IJMOQR", "O":"JKNPRS", "P":"KLOS", "Q":"MNR", "R":"QNOPS", "S":"ROP"}

    tiles_by_position = {}

    def find_threes(pos):
        # find all intersections of three which occur including a specific position
        threes = []
        neighbors = positions_and_neighbors[pos]
        for n in neighbors:
            n_neighbors = positions_and_neighbors[n]
            for m in n_neighbors:
                if m in neighbors:
                    three = pos + n + m
                    alternative = pos + m + n
                    if alternative not in threes:
                        threes.append(three)

        return threes

    def generate_tile():
        if len(tiles_list) <= 1:
            return tiles_list[0]
        
        potential_tile = random.randint(0, len(tiles_list) - 1)
        return tiles_list[potential_tile]


    def fit_tile(pos, fallback = 0):

        # get a random tile from the list
        tile = generate_tile()
        # print("JUST RECEIVED", tile)

        neighbor_tiles = []
        neighbors = positions_and_neighbors[pos]
        for n in neighbors:
            if n in tiles_by_position:
                neighbor_tiles.append(tiles_by_position[n])

        if not neighbor_tiles:
            # make this tile ineligible to place again, then include it in our tiles_by_position dictionary
            tiles_list.remove(tile)
            tile = tile.copy()
            tile['position'] = pos
            tiles_by_position[pos] = tile
            return
        
        neighbors = [n['position'] for n in neighbor_tiles]

        if fallback >= len(tiles_list):
            # make this tile ineligible to place again, then include it in our tiles_by_position dictionary
            # print("fallback reached")
            tiles_list.remove(tile)
            tile = tile.copy()
            tile['position'] = pos
            tiles_by_position[pos] = tile
            return

        tile_resource = tile['resource']
        tile_value = tile['value']
        tile_weight = tile_values_weight[tile_value]

        # look for issues between 2
        for neighbor in neighbor_tiles:
            if ((neighbor['resource'] == tile_resource) and (tile_values_weight[neighbor['value']] + tile_weight >= 8)) or (neighbor['value'] + tile_value > 9):
                fit_tile(pos, fallback=fallback + 1)
                return

        # look for issues between 3
        threes = find_threes(pos)
        for t in threes:
            part1 = t[1]
            part2 = t[2]
            if part1 not in neighbors or part2 not in neighbors:
                # if either of the neighbors in the 3 have not been fitted with a tile yet, ignore this 3
                continue

            n1_resource = tiles_by_position[part1]['resource']
            n1_weight = tile_values_weight[tiles_by_position[part1]['value']]
            n2_resource = tiles_by_position[part2]['resource']
            n2_weight = tile_values_weight[tiles_by_position[part2]['value']]
            total_weight = tile_weight + n1_weight + n2_weight 

            if tile_resource == n1_resource and tile_resource == n2_resource:
                # if all 3 tiles have same resource, refitting is necessary (save a 1/15 chance we keep it)
                chance = random.randint(1, 15)
                if chance != 1:
                    fit_tile(pos, fallback=fallback + 1)
                    return
            elif total_weight <= 4 and 'desert' not in (n1_resource, n2_resource):
                # if the three is too underpowered, refitting is necessary, except in rare cases
                chance = random.randint(1, 20)
                if chance != 1:
                    fit_tile(pos, fallback=fallback + 1)
                    return
            elif total_weight >= 13:
                # overpowered 3 requires refitting
                fit_tile(pos, fallback=fallback + 1)
                return
        
        # if we've made it this far, then we are good to go
        # print(tiles_list)
        # print("tile to remove: ", tile)
        tiles_list.remove(tile)
        tile = tile.copy()
        tile['position'] = pos
        tiles_by_position[pos] = tile
        return

                

    for pos in positions_and_neighbors:
        fit_tile(pos)
        # print("\nJUST FITTED ", pos, "\n")
        time.sleep(0.005)

    # for pos in tiles_by_position:
    #     tile = tiles_by_position[pos]
    #     tile_val = tile['value']
    #     if tile_val == 6 or tile_val == 8:
    #         neighbors = positions_and_neighbors[pos]
    #         for n in neighbors:
    #             if n['value'] == tile_val:


    # print("\t\t\t", tiles_by_position["A"], "\t", tiles_by_position["B"], "\t", tiles_by_position["C"])
    # print()
    # print("\t\t", tiles_by_position["D"], "\t", tiles_by_position["E"], "\t", tiles_by_position["F"], "\t", tiles_by_position["G"])
    # print()
    # print(tiles_by_position["H"], "\t", tiles_by_position["I"], "\t", tiles_by_position["J"], "\t", tiles_by_position["K"], "\t", tiles_by_position["L"])
    # print()
    # print("\t\t", tiles_by_position["M"], "\t", tiles_by_position["N"], "\t", tiles_by_position["O"], "\t", tiles_by_position["P"])
    # print()
    # print("\t\t\t", tiles_by_position["Q"], "\t", tiles_by_position["R"], "\t", tiles_by_position["S"])


    tile_data_dict = tiles_by_position.items()
    tile_data_list = [x[1] for x in tile_data_dict]
    tile_data_tuples = [list(o.values()) for o in tile_data_list]
    print(tile_data_tuples)

    








    