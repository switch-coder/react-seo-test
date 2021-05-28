OUTPUT=$(curl --location --request GET 'http://localhost:3001/api/getEvents') 
echo "hi"
echo "$OUTPUT" > seo.json


# OUTPUT=$(curl http://ec2-54-180-118-162.ap-northeast-2.compute.amazonaws.com:3001/api/getEvents) && echo $OUTPUT > seo.json && 