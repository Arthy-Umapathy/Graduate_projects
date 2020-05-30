def has_no_e(s):
    for c in s:
        if c in 'e':
            return False
    return True

print(has_no_e("arthy"))

def avoids(s,f):
    for c in s:
        if c in f:
            return False
    return  True

print(avoids("arthy","rx"))

def use_only(w,s):
    for c in w:
        if c not in s:
            return False
    return True

print(use_only("ace","fdgesdfgc"))

def use_all(w,s):
    for c in s:
        if c not in w:
            return False
    return True
print(use_all("elephantiou","aeiou"))