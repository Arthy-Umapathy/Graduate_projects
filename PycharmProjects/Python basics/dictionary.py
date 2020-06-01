#declaring
map = dict()
print map

#populating map
map['one']='uno'
print map

#alternatively
map = {'one':'uno','two':'dos','three':'tres'}
print map

#get value by key
print map['two']

#get length
print len(map)

#check contains key
print('one' in map)
print('uno' in map)

#check contains value
vals=map.values()
print('uno' in vals)
