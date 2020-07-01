import boto3
import json
import collections


def lambda_handler(event, context):
    if event:
        print("Event :", event)
        file_obj = event["Records"][0]
        filename = str(file_obj['s3']['object']['key'])
        print("Filename:", filename)
        name = filename[:len(filename)-4]
        s3 = boto3.client('s3')
        fileObj = s3.get_object(Bucket="sampleasdfawer", Key=filename)
        text = fileObj["Body"].read().decode('utf-8')

        comprehend = boto3.client(service_name='comprehend', region_name='us-east-1', aws_access_key_id="ASIA3QYPDRLC5LUQ4544",
                                  aws_secret_access_key="9/jt9vEscooUIKPMWs2ufOO3U5O3SeLXvL9CyTP5",
                                  aws_session_token="FwoGZXIvYXdzEEwaDFHwPltDl6yk9y+0cyLEAToozdk1zqXXVkA0v6ir3OK2P+0gDmSo7HUI4HoVdjoVt+kU60+S4Jtynf4T1wnjSYh49zRS89VkTNaoL1qvOzDgevyZnQUfBjdvBhHqeT44yNyD4b+ZKGeCPv3eF0DoxKLkXd/W2YIV18yCVUhyKEnBna66FYtRBtVGGGQF1BA3QRgeEyJUmH6YkcSJKTFhC4XKfpc59GNJcKadtLUdsc65SFQnQHGbEQvm64vXk9yBYaUm8qiJDUf1ROzVLU3f0+P9oxMon4XZ9wUyLfGRzTCoHraZnB5kjnIpN2Kn8yR2X8n7DD32POVJZVjg1QjpmHwKaKCrmIFKcQ=="
                                  )

        print('Calling DetectEntities')
        j = comprehend.detect_entities(Text=text, LanguageCode='en')
        print(j)
        print(type(j))
        l = []
        entities = ['PERSON', 'LOCATION', 'ORGANIZATION',
                    'EVENT', 'TITLE', 'OTHER']
        for k in j['Entities']:
            if k['Type'] in entities:
                l.append(k['Text'])

        print(l)
        res = dict(collections.Counter(l))
        print(collections.Counter(l))
        dic = {name+"ne": res}

        print('End of DetectEntities\n')
        s3 = boto3.resource('s3', aws_access_key_id="ASIA3QYPDRLC5LUQ4544",
                            aws_secret_access_key="9/jt9vEscooUIKPMWs2ufOO3U5O3SeLXvL9CyTP5",
                            aws_session_token="FwoGZXIvYXdzEEwaDFHwPltDl6yk9y+0cyLEAToozdk1zqXXVkA0v6ir3OK2P+0gDmSo7HUI4HoVdjoVt+kU60+S4Jtynf4T1wnjSYh49zRS89VkTNaoL1qvOzDgevyZnQUfBjdvBhHqeT44yNyD4b+ZKGeCPv3eF0DoxKLkXd/W2YIV18yCVUhyKEnBna66FYtRBtVGGGQF1BA3QRgeEyJUmH6YkcSJKTFhC4XKfpc59GNJcKadtLUdsc65SFQnQHGbEQvm64vXk9yBYaUm8qiJDUf1ROzVLU3f0+P9oxMon4XZ9wUyLfGRzTCoHraZnB5kjnIpN2Kn8yR2X8n7DD32POVJZVjg1QjpmHwKaKCrmIFKcQ=="
                            )

        s3.Bucket('sqlaccess').put_object(Key=name+"ne.txt",
                                          Body=bytes(json.dumps(dic).encode('UTF-8')))
