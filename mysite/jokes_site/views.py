from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import * 
import json

# Create your views here.
def index(request):
    joke_list = Joke.objects.order_by('-pk')[:5]
    context = {
        'joke_list': joke_list,
    }
    return render(request, 'jokes_site/index.html', context)

def detail(request, joke_id):
    joke = get_object_or_404(Joke, pk=joke_id)
    content = json.loads(joke.content)
    return render(request, 'jokes_site/detail.html', {'joke': joke, 'content': content})