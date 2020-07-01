import boto3
import json
import collections


name="001.txt"
f = open(name, "r")
if f.mode == "r":
    text = f.read()

comprehend = boto3.client(service_name='comprehend', region_name='us-east-1',aws_access_key_id="ASIA3QYPDRLCTKWXDRFH",
aws_secret_access_key="HhV6Zwc1QN+pqqzlJW84U7XJie7EPwTu8GB44Cqt",
aws_session_token="FwoGZXIvYXdzEFAaDNSvYfmvVnmSY0LZsCLEAb2OfNB0mrHpXwqCUpWuRHBrkCka06uQQOaxaGCSkcZc9iyQJTrtaFLi0hvjBErbMEjuHq0cI3/Vv5Aco0FSk0SKXlnsPlHIs0w9nGDqA7OCtc7fKtmblHYbSvNfbAkErvkFRP7jEpOrAQv7sP42OpYfyHzyWNQxkIcp5xNEb6vX2/Pi4IvzbkHVxIP76W0w6IXKdHfZ7Ln47xVVwci3W/2BcB0YV1yQOBiKbKLwUnKVhteM55ceTNeS2UmnLdQwbAP/bDMo0uLZ9wUyLdMC2xo2lwHnk/yALup/Jn+M+vpzJHIQvkArncFRvbDoHc6agQhpmSRaYJUttA=="
)
# text = "It is Seattle raining today in Seattle"

print('Calling DetectEntities')
j = comprehend.detect_entities(Text=text, LanguageCode='en')
print(j)
print(type(j))
l = []
entities=['PERSON', 'LOCATION', 'ORGANIZATION','COMMERCIAL_ITEM',
                              'EVENT', 'TITLE', 'OTHER']
for k in j['Entities']:
    if k['Type'] in entities:
        l.append(k['Text'])
    
print(l)
res=dict(collections.Counter(l))
print(dict(collections.Counter(l)))
di={name:res}

print('End of DetectEntities\n')

s3=boto3.resource('s3',aws_access_key_id="ASIA3QYPDRLCTKWXDRFH",
aws_secret_access_key="HhV6Zwc1QN+pqqzlJW84U7XJie7EPwTu8GB44Cqt",
aws_session_token="FwoGZXIvYXdzEFAaDNSvYfmvVnmSY0LZsCLEAb2OfNB0mrHpXwqCUpWuRHBrkCka06uQQOaxaGCSkcZc9iyQJTrtaFLi0hvjBErbMEjuHq0cI3/Vv5Aco0FSk0SKXlnsPlHIs0w9nGDqA7OCtc7fKtmblHYbSvNfbAkErvkFRP7jEpOrAQv7sP42OpYfyHzyWNQxkIcp5xNEb6vX2/Pi4IvzbkHVxIP76W0w6IXKdHfZ7Ln47xVVwci3W/2BcB0YV1yQOBiKbKLwUnKVhteM55ceTNeS2UmnLdQwbAP/bDMo0uLZ9wUyLdMC2xo2lwHnk/yALup/Jn+M+vpzJHIQvkArncFRvbDoHc6agQhpmSRaYJUttA=="
)
# ans = json.dumps(res, sort_keys=True)


s3.Bucket('sampleasdfawer').put_object(Key=name,Body=bytes(json.dumps(di).encode('UTF-8')))
# s3.Bucket('sampleasdfawer').put_object(Key=name,Body=res)
    
           
            
    
            
