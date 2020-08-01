from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class login(APIView):
    def get(self, request):
        return Response({'status': True})


class medicine(APIView):
    def get(self, request):
        return Response({'status': True})


class symptom(APIView):
    def get(self, request):
        return Response({'status': True})


class inquiry(APIView):
    def get(self, request):
        return Response({'status': True})
