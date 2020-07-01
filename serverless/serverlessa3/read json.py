# read_s3.py
import boto3
import json
# import pymysql

BUCKET = 'sampleasdfawer'
FILE_TO_READ = '001.txt'
client = boto3.client('s3',
                      aws_access_key_id='ASIA3QYPDRLCYR3RJZNP',
                      aws_secret_access_key='3nqCSBuL4k5G+t4Wmnb/Mnv9ZPtxjmJbZMEFWj6P',
                      aws_session_token='FwoGZXIvYXdzEEkaDLXGDOzErNaDDX7UciLEAZaQe1LYyO8b/b1DOq2MCisFiS0atHZ2xM7sClazLMKi0IcT5m8Dl7oIfMyl5t1TDOT3alDUQSSmjbX+6nr4cnWgMp+VXnLYhcD2KEYl1IZnnIyXD3BmtcMuJAAVLeTY+MVn8x61ISKpV/xAj20EprFGf71L6yEa63qg/eCELw/bUKVSlcVk9d/sJoT7UJal74mRKbgJFx9YrtRND8Ye6KySltjjyEyWL1on3FoOioMiaiumLItv5/6UZE+8OzFJ6EcC/ioo3KzY9wUyLXIiqiyv/p34uNtVu1jgR9fZksGLUIZojuRN/9/qtIG/rtFsrFsz0X8PM6a3oA=='
                      )
result = client.get_object(Bucket=BUCKET, Key=FILE_TO_READ)
print(type(result))
text = result["Body"].read().decode()
ans = json.loads(text)
print(type(ans))
for k,v in ans.items():
      print(k)

