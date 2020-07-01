import os
import boto3
import time

s3=boto3.resource('s3',aws_access_key_id="ASIA3QYPDRLCTKWXDRFH",
aws_secret_access_key="HhV6Zwc1QN+pqqzlJW84U7XJie7EPwTu8GB44Cqt",
aws_session_token="FwoGZXIvYXdzEFAaDNSvYfmvVnmSY0LZsCLEAb2OfNB0mrHpXwqCUpWuRHBrkCka06uQQOaxaGCSkcZc9iyQJTrtaFLi0hvjBErbMEjuHq0cI3/Vv5Aco0FSk0SKXlnsPlHIs0w9nGDqA7OCtc7fKtmblHYbSvNfbAkErvkFRP7jEpOrAQv7sP42OpYfyHzyWNQxkIcp5xNEb6vX2/Pi4IvzbkHVxIP76W0w6IXKdHfZ7Ln47xVVwci3W/2BcB0YV1yQOBiKbKLwUnKVhteM55ceTNeS2UmnLdQwbAP/bDMo0uLZ9wUyLdMC2xo2lwHnk/yALup/Jn+M+vpzJHIQvkArncFRvbDoHc6agQhpmSRaYJUttA=="
)

for subdir, dirs, files in os.walk(r'C:\Users\AVuser\Downloads\tech'):
    for file in files:
        time.sleep(.100)
        filepath = subdir + os.sep + file
        if filepath.endswith(".txt"):
            print(filepath)
            print(file)
            
            body=open(filepath)
            s3.Bucket('sampledatab00840100').put_object(Key=file,Body=body.read())