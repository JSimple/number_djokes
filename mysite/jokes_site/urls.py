from django.urls import path

from . import views

app_name = "jokes_site"

urlpatterns = [
    path('', views.index, name='index'),
    path('csrf/', views.csrf),
    path('ping/', views.ping),
    path('<int:joke_id>/', views.detail, name='detail'),
]
