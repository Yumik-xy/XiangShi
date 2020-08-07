from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .method.method import *
from .models import medicine as medicine_model
from .models import patient as patient_model
from .models import inquirypost as inquirypost_model


# next code 10005


# Create your views here.

class login(APIView):
    def get(self, request):
        return Response({'status': True})


# 药物查询
class medicine(APIView):
    def get(self, request):
        try:
            drumname = request.query_params.get('drumname')
            drums = medicine_model.objects.filter(drumname__contain=drumname).values()[0:30]
            json_data = list(drums)
        except:
            return Response({'status': False})
        else:
            return Response({'status': True, 'data': json_data})


# 症状List查询
class symptom_list(APIView):
    def get(self, request):
        return Response({'status': True})


# 症状查询
class symptom(APIView):
    def get(self, request):
        id = int(id)
        return Response({'status': True})


# 病人查询
class patient(APIView):
    def get(self, request):
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

    def post(self, request):
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

    def put(self, request):
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
        print(request.data)
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            db = patient_model.objects.get(openid=openid, patientname=patientname, gender=gender, age=age,
                                           telephone=telephone, pastmedicalhistory=pastmedicalhistory,
                                           allergy=allergy)
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:
            db.patientname = _patientname
            db.gender = _gender
            db.age = _age
            db.telephone = _telephone
            db.pastmedicalhistory = _pastmedicalhistory
            db.allergy = _allergy
            db.save()
            return Response({'status': True})

    def delete(self, request):
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


class inquirypost_list(APIView):
    def get(self, request):
        return Response({'status': True})


class inquirypost(APIView):
    def get(self, request, id):
        id = int(id)
        try:
            inquirypost = inquirypost_model.objects.filter(id=id).values('id', 'name', 'title', 'classify', 'content',
                                                                         'picture1', 'picture2', 'picture3')
            json_data = list(inquirypost)
        except:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        else:
            return Response({'status': True, 'data': json_data})
