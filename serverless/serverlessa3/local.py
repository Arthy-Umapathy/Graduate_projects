import nltk
import collections
import json
def main():
    f = open("001.txt", "r")
    if f.mode == "r":
        contents = f.read()
        print(contents)
        def is_noun(pos): return pos[:3] == 'NNP'
        tokenized = nltk.word_tokenize(contents)
        res = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]

    d = collections.Counter(res)
    for r in res:
        if r not in d:
            del d[r]
    print(res)
    j=json.dumps(d)
    print("json:" + j)
    print(type(j))
    

    data = json.loads(j)

    for k, v in data.items():
        print(k)
        print(v)
    print(type(data))
if __name__ == "__main__":
    main()
