for x in [1,"arthy","umapathy"]:
    print x

#union
a=[1,2,3]
b=[4,5,6]
c=a+b
print(c)

#slicing
t=['a','b','c','d','e','f']
print t[1:3]
print t[:4]
print t[3:]
print t[:]
t[1:3] = ['x','y']
print t

#methods
print(a.append(b))
print a
print(a.extend(b))
print a
a.sort()
print a

#map,filter,reduce
print(sum(b))

#capitalize all
def capitalize_all(t):
    res=[]
    for s in t:
        res.append(s.capitalize())
    return res

print(capitalize_all("arthy"))

#filtering upper case
def only_upper(t):
    res=[]
    for s in t:
        if s.isupper():
            res.append(s)
    return res