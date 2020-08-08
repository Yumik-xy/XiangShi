from django.urls import path
from api import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('login/', views.login.as_view()),
    path('medicine/', views.medicine.as_view()),
    path('symptom/list/', views.symptom_list.as_view()),
    path('symptom/<int:id>/', views.symptom.as_view()),
    path('inquirypost/list/<int:page>', views.inquirypost_list.as_view()),
    path('inquirypost/<int:id>/', views.inquirypost.as_view()),
    path('patient/', views.patient.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)