def histogram(s):
    map=dict()
    for c in s:
        map[c]=map.get(c,0)+1
    return map

def reverse_loopup(map,val):
       l=[]
       for m in map:
           if map[m]==val:
               l.append(m)
       return l

m=histogram('aaru')
print(reverse_loopup(m,1))

