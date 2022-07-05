# database
A quick-deploy database server

installation:
- download the code from [here]()
- change the password in password.js (it need to be an array)
- for start do npm start

Save data in in ./data/database.json

This is the link:
ip://api/<auth-code>/database to get all db
ip://api/<auth-code>/database/<name> search name in the database
ip://api/<auth-code>/database/<name>/set/<value> set a name's value in the database
ip://api/<auth-code>/database/<name>/remove remove <name> in the database
