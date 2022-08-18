from math import floor
from random import random
from urllib import response
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import * 
from django.core import serializers
import json
from number_jokes import polynomial_gardenpath as pg, joke_part as jp
from django.middleware.csrf import get_token

# csrf endpoint
def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'})

# Create your views here.
def index(request):
    if request.method == 'GET':
        joke_list =  Joke.objects.order_by('-pk')[:10]
        api_joke_list  = [
            {
                'content': json.loads(joke.content),
                'name' : joke.name,
                'author': joke.author
            }
            for joke in joke_list
        ]
        return JsonResponse(api_joke_list, safe=False)
    if request.method == 'POST':
        new_joke = pg.PolynomialGardenpath()
        new_joke.gen_joke()
        new_joke_db_object = Joke(
            content = new_joke.json(),
            name = 'Funny_Joke' + str(floor(random() * 1000)),
            author = None,
        )
        new_joke_db_object.save()
        new_joke_db_object
        new_joke_dict = {
            'content': json.loads(new_joke_db_object.content),
            'name' : new_joke_db_object.name,
            'author': new_joke_db_object.author
        }
    return JsonResponse(new_joke_dict, safe=False)
    


def detail(request, joke_id):
    joke = get_object_or_404(Joke, pk=joke_id)
    content = json.loads(joke.content)
    return render(request, 'jokes_site/detail.html', {'joke': joke, 'content': content})

def about(request):
    return render(request,'jokes_site/about.html')