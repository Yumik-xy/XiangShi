from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .method.method import *
from .models import medicine as medicine_model
from .models import patient as patient_model


# Create your views here.

class login(APIView):
    def get(self, request, *args, **kwargs):
        return Response({'status': True})


class medicine(APIView):
    def get(self, request, *args, **kwargs):
        try:
            drumname = request.query_params.get('drumname')
            drums = medicine_model.objects.filter(drumname__contain=drumname).values()[0:30]
            json_data = list(drums)
        except:
            return Response({'status': False})
        else:
            return Response({'status': True, 'data': json_data})


class symptom(APIView):
    def get(self, request, *args, **kwargs):
        return Response({'status': True})


class patient(APIView):
    def get(self, request, *args, **kwargs):
        coder = request.query_params.get('coder')
        print(coder)
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            patientinfo = patient_model.objects.filter(openid=openid).values('patientname', 'gender', 'age',
                                                                             'telephone', 'pastmedicalhistory',
                                                                             'allergy')
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:

            json_data = list(patientinfo)

            return Response({'status': True, 'data': json_data})

    def post(self, request, *args, **kwargs):
        patientname = request.data.get('patientname')
        gender = request.data.get('gender')
        age = request.data.get('age')
        telephone = request.data.get('telephone')
        pastmedicalhistory = request.data.get('pastmedicalhistory')
        allergy = request.data.get('allergy')
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        print(request.data)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            db = patient_model.objects.create(openid=openid, patientname=patientname, gender=gender, age=age,
                                              telephone=telephone, pastmedicalhistory=pastmedicalhistory,
                                              allergy=allergy)
            db.save()
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True})

    def put(self, request, *args, **kwargs):
        # old data
        patientname = request.data.get('patientname')
        gender = request.data.get('gender')
        age = request.data.get('age')
        telephone = request.data.get('telephone')
        pastmedicalhistory = request.data.get('pastmedicalhistory')
        allergy = request.data.get('allergy')
        # new data
        _patientname = request.data.get('_patientname')
        _gender = request.data.get('_gender')
        _age = request.data.get('_age')
        _telephone = request.data.get('_telephone')
        _pastmedicalhistory = request.data.get('_pastmedicalhistory')
        _allergy = request.data.get('_allergy')

        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            patient_model.objects.filter(openid=openid, patientname=patientname, gender=gender, age=age,
                                         telephone=telephone, pastmedicalhistory=pastmedicalhistory,
                                         allergy=allergy).update(patientname=_patientname,
                                                                 gender=_gender, age=_age,
                                                                 telephone=_telephone,
                                                                 pastmedicalhistory=_pastmedicalhistory,
                                                                 allergy=_allergy)
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:
            return Response({'status': True})

    def delete(self, request, *args, **kwargs):
        patientname = request.data.get('patientname')
        gender = request.data.get('gender')
        age = request.data.get('age')
        telephone = request.data.get('telephone')
        pastmedicalhistory = request.data.get('pastmedicalhistory')
        allergy = request.data.get('allergy')
        coder = request.data.get("coder")
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            patient_model.objects.filter(openid=openid, patientname=patientname, gender=gender, age=age,
                                         telephone=telephone, pastmedicalhistory=pastmedicalhistory,
                                         allergy=allergy).delete()
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:
            return Response({'status': True})
