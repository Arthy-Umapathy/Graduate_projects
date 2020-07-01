import boto3
import collections
import nltk
import json

from nltk.tokenize import word_tokenize

def lambda_handler(event):
    # TODO implement
    s3=boto3.client('s3')
    
    if event:
        print("Event :",event)
        file_obj =event["Records"][0]
        filename=str(file_obj['s3']['object']['key'])
        print("Filename:",filename)
        fileObj=s3.get_object(Bucket="sampledatab00840100",Key=filename)
        file_content=fileObj["Body"].read().decode('utf-8')
        file_content=str(file_content)
        
        # comprehend = boto3.client(service_name='comprehend', region_name='region')
        # text = file_content
        
        # print('Calling DetectEntities')
        # josn=json.dumps(comprehend.detect_entities(Text=text, LanguageCode='en'), sort_keys=True, indent=4)
        # print('End of DetectEntities\n')
        # print("json"+json)
        
        print(file_content)
        def is_noun(pos): return pos[:3] == 'NNP'
        tokenized = nltk.word_tokenize(file_content)
        res = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]
        d = collections.Counter(res)
        for r in res:
            if r not in d:
                del d[r]
        print(res)
        j=json.dumps(d)
        print("json:"+j)
        
    return "hello"

    
# res=[]
        # words=re.split(" |\n |\t |, |- |.",str(file_content))
        # for word in words:
        #     if word[0].isupper():
        #         if word[-1]=="." or word[-1]==",":
        #             res.append(word[0:len(word)-1])
        #     res.append(word)
        # print(res)
