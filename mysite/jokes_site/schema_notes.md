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

Favorite:
- Joke_id
- User_id

Share:
- Joke_id
- Owner_id
- Share_info -- JSON

User:
- Name - string
- Password - string

JOKE INFO JSONs

All:
- type

Gardenpath_polynomial:
- setup_pts
- punchline_pts
- setup_terms
- punchline_terms

---
QUESTIONS:
- If I add a column to a model, how do I normalize that w the existing rows that have been written in the database?


---
NOTES:

single model:
pros - easier to query

seperate models:
pros - you're not doing any joins so faster, 
cons - but doing more queries