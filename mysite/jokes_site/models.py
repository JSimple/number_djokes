from email.policy import default
from django.db import models

#QUESTIONS:
# what if you want to reference a model 
# earlier in the code relitive to where its class is defined?

# TODO:
# create tests for models
# add a date_creted field for joke
# add a date_favorited field for favorite
# write randomly generated jokes to DB
    # greate a JSON info object for each joke
# create view for all the jokes


class User(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=10)

class Joke(models.Model):
    content = models.JSONField('content', default=dict)
    name = models.CharField(max_length=200)
    author = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL,
        blank = True,
        null=True)

class Rating(models.Model):
    user = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL,
        blank = True,
        null=True)
    joke = models.ForeignKey(
        Joke, 
        on_delete=models.CASCADE)

class Favorite(models.Model):
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        blank = True,
        null=True)
    joke = models.ForeignKey(
        Joke, 
        on_delete=models.CASCADE)
    
