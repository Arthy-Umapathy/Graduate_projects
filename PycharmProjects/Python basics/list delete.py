#pop operation removes and return the element in the given index. If the index is not provided it removes the last element
t=['a','b','c']
x=t.pop(1)
print t
print x

#del deletes the element in the index but does not return the value
t=['a','b','c']
del t[1]
print t

#remove removes the given element
t=['a','b','c']
t.remove('b')
print t

#to remove more than one element use del with slicing
t=['a','b','c','d','e','f']
del t[1:5]
print t