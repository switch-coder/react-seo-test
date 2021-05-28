OUTPUT=$(curl --location --request GET 'http://localhost:3001/api/getEvents') 
echo "hi"
echo "$OUTPUT" > seo.json
