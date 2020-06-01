def print_inorder(map):
    l=map.keys()
    l.sort()
    for c in l:
        print c,map[c]

print_inorder({'one':'uno','two':'dos','three':'tres'})
