from urllib import response
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import * 
from django.core import serializers
import json

# Create your views here.
def index(request):
    joke_list =  Joke.objects.order_by('-pk')[:10]
    api_joke_list  = [
        {
            'content': json.loads(joke.content),
            'name' : joke.name,
            'author': joke.author
            
        }
        # [map(lambda c: int(c), jp) for jp in joke.content.joke_parts],
        for joke in joke_list
    ]
    return JsonResponse(api_joke_list, safe=False)

def detail(request, joke_id):
    joke = get_object_or_404(Joke, pk=joke_id)
    content = json.loads(joke.content)
    return render(request, 'jokes_site/detail.html', {'joke': joke, 'content': content})