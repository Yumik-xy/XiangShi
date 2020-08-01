from django.urls import path
from api import views

urlpatterns = [
    path('login/', views.login.as_view()),
    path('medicine/', views.medicine.as_view()),
    path('symptom/', views.symptom.as_view()),
    path('inquiry/', views.inquiry.as_view()),
]
