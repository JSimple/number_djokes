from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    print(request)
    return HttpResponse("you're at the pool index")