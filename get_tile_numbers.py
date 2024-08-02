# theo maurino
import random

clay = 3
stone = 3
hay = 4
sheep = 4
wood = 4
desert = 1
resources = [clay, stone, hay, sheep, wood]

# tile_values_used = {12:0, 11:0, 10:0, 9:0, 8:0, 6:0, 5:0, 4:0, 3:0, 2:0}
tile_values_weight = {12:1, 11:2, 10:3, 9:4, 8:5, 6:5, 5:4, 4:3, 3:2, 2:1}
tile_values_unused = {12:1, 11:2, 10:2, 9:2, 8:2, 6:2, 5:2, 4:2, 3:2, 2:1, 0:0}

# each will correspond to pos A - S : 0 - 18
tiles_dict = {"clay" : [], "stone" : [], "hay" : [], "sheep" : [], "wood" : []}
tiles_names = list(tiles_dict.keys())

"""
TILEs will look like a JSON object:

tile : {
    'resource' : 'xxx',
    'value' : 000,
    'position' : 'X'
}

"""

# deal with desert
tiles_dict["desert"] = [{'resource' : 'desert', 'value' : 0}]

# resources with 3 should have weight x where 7 < x < 12
# resources with 4 should have weight x where 9 < x < 16

def get_value(curr_weights, num_resources, kind, fallback = 0):
        # curr_values is the currently assigned weights for this resource type
        # num_resources is the number of tiles with this resource in the game
        new_value = 0
        while new_value == 7 or tile_values_unused[new_value] == 0:
            # get a weight that is at least possible
            new_value = random.randint(2, 12)

        if fallback >= 10:
            # print("fallback reached")
            return new_value
        
        for t in tiles_dict[kind]:
            if t['value'] == new_value:
                return get_value(curr_weights, num_resources, kind, fallback=fallback+1)
            if (t['value'] == 6 or t['value'] == 8) and (new_value == 6 or new_value == 8):
                chance = random.randint(1,20)
                if chance != 1:
                    return get_value(curr_weights, num_resources, kind, fallback=fallback+1)


        new_weight = tile_values_weight[new_value]

        sum_weights = sum(curr_weights) + new_weight
        num_weights = 1 + len(curr_weights)

        match num_resources:
            case 3:
                if (sum_weights > 12) or (new_weight == 1 and new_weight in curr_weights) or (num_weights == 3 and sum_weights < 6):
                    return get_value(curr_weights, num_resources, kind, fallback=fallback + 1)
            case 4:
                if (sum_weights > 15) or (num_weights == 3 and sum_weights < 5) or (sum_weights == 4 and sum_weights < 9):
                    return get_value(curr_weights, num_resources, kind, fallback=fallback + 1)
        

        return new_value

def get_nums():

    while any(num in resources for num in {1, 2, 3, 4}):
        resource_num = random.randint(0, 4)
        if resources[resource_num] == 0:
            # if there are no more of this kind of resource to attend to just keep going
            continue
        
        kind = tiles_names[resource_num]
        existing_values = [t['value'] for t in tiles_dict[kind]]
        existing_weights = [tile_values_weight[v] for v in existing_values]
        
        new_val = get_value(existing_weights, resources[resource_num], kind)

        tiles_dict[kind].append({'resource' : kind, 'value' : new_val})
        tile_values_unused[new_val] -= 1
        resources[resource_num] -= 1

    tiles_list = []
    for t in tiles_dict:
        for x in tiles_dict[t]:
            tiles_list.append(x)

    # print(tiles_list)
    return tiles_list

        
# get_nums();



