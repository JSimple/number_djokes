REQUIREMENTS

MVP:
- generate num jokes
- store them
- ratings for jokes

V2:
- user auth
- user specific ratings
- user favorated jokes
- jokes owned by users

V3:
- multiple joke types
- see who favorited your jokes
- post to social media


----

MODELS

Joke:
- Info -- JSON
- User_id

Rating:
- Joke_id
- User_id

Favorites:
- Joke_id
- User_id

Share:
- Joke_id
- Owner_id
- Share_info -- JSON

User:
- Name - string
- Password - string


JOKE INFOS

All:
- type

Gardenpath_polynomial:
- setup_pts
- punchline_pts
- setup_terms
- punchline_terms


single model:
pros - easier to query

seperate models:
pros - you're not doing any joins so faster, 
cons - but doing more queries

easier in a databse to get less specific than more specific