#zip function of same length elements
s='abc'
t=[0,1,2]
print(zip(s,t))

#zip fn of different elements takes the least size and matches
print(zip('Anne','Elk'))

#tuple in for loop
t=[('a',0),('b',1),('c',2)]
for letter,number in t:
    print number,letter

    