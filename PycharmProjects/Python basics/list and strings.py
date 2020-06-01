#string to list of characters
s='spam'
t=list(s)
print t

#sentences into words
s='pinning for the fjords'
t=s.split()
print t

#split with delimiter
s='spam-spam-spam'
t=s.split('-')
print t

#join with delimiter
t=['pinning', 'for', 'the', 'fjords']
s=' '
print(s.join(t))