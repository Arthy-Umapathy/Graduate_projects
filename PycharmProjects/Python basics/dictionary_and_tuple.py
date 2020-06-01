d={'a':0,'b':1,'c':2}
t=d.items()
print t

t=[('a', 0), ('c', 2), ('b', 1)]
d=dict(t)
print d

d=dict(zip('abc',range(3)))
print d