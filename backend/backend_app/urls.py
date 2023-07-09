from django.urls import path 
from backend_app.views import *

urlpatterns = [
    path('getUsers/',UserView.as_view(),name='get_users'),
    path('getUser/<int:pk>/',UserDetailView.as_view(),name='get_user')
]
