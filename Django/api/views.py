from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import medicine


# Create your views here.

class login(APIView):
    def get(self, request):
        return Response({'status': True})


class medicine(APIView):
    def get(self, request):
        try:
            drumname = request.query_params.get('drumname')
            drums = medicine.objects.filter(drumname__contain=drumname).values()[0:30]
            json_data = list(drums)
        except:
            return Response({'status': False})
        else:
            return Response({'status': True, 'data': json_data})


class symptom(APIView):
    def get(self, request):
        return Response({'status': True})


class inquiry(APIView):
    def get(self, request):
        return Response({'status': True})
