def invert_dict(map):
    inverse=dict()
    for key in map:
        val=map[key]
        if val not in inverse:
            inverse[val]=[key]
        else:
            inverse[val].append(key)
    return inverse

print(invert_dict({'a': 1, 'p': 1, 'r': 2, 't': 1, 'o': 1}))