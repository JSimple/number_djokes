"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.http import HttpResponse
from . import settings
import os

def index(response):
    f = open(os.path.join(settings.STATIC_ROOT, 'index.html'), 'rb')
    return HttpResponse(f.read(), content_type="text/html")

urlpatterns = [ 
    path('polls/', include('polls.urls')),
    path('jokes_site/', include('jokes_site.urls')),
    path('admin/', admin.site.urls),
    path('', index)
]
