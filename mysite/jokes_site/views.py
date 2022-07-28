from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import * 

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the numberjokes index.")

def detail(request, joke_id):
    joke = get_object_or_404(Joke, pk=joke_id)
    return render(request, 'numberjokes/detail.html', {'joke': joke})