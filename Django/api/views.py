from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .method.method import *
from .models import medicine as medicine_model
from .models import symptom as symptom_model
from .models import symptomwiki as symptomwiki_model
from .models import patient as patient_model
from .models import inquirypost as inquirypost_model
from .models import comment as comment_model


# next code 10008


# Create your views here.

class login(APIView):
    def get(self, request):
        return Response({'status': True})


# 药物List查询
class medicine_list(APIView):
    def get(self, request):
        try:
            drumname = request.query_params.get('drumname')
            drums = medicine_model.objects.filter(drumname__contain=drumname).values('id', 'drumname')[0:10]
            json_data = list(drums)
        except:
            return Response({'status': False, 'message': '未找到对应药物', 'code': 10007})
        else:
            return Response({'status': True, 'data': json_data})


# 药物查询
class medicine(APIView):
    def get(self, request):
        id = request.query_params.get('id')
        try:
            drum = medicine_model.objects.filter(id=id).values()
            json_data = list(drum)
        except:
            return Response({'status': False, 'message': '未找到对应药物', 'code': 10007})
        else:
            return Response({'status': True, 'data': json_data})


# 症状List查询
class symptom_list(APIView):
    def get(self, request):
        try:
            symptom = symptomwiki_model.objects.all().values('id', 'name', 'parent', 'child')
            json_data = list(symptom)
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True, 'data': json_data})


# 症状查询
class symptom(APIView):
    def get(self, request):
        id = request.query_params.get('id')
        try:
            symptom = symptom_model.objects.filter(id=id).values()
            json_data = list(symptom)
        except:
            return Response({'status': False, 'message': '没有该的病症', 'code': 10007})
        else:
            return Response({'status': True, 'data': json_data})


# 病人查询
class patient(APIView):
    def get(self, request):
        coder = request.query_params.get('coder')
        print(coder)
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            patientinfo = patient_model.objects.filter(openid=openid).values('id', 'patientname', 'gender', 'age',
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
        # patientname = request.data.get('patientname')
        # gender = request.data.get('gender')
        # age = request.data.get('age')
        # telephone = request.data.get('telephone')
        # pastmedicalhistory = request.data.get('pastmedicalhistory')
        # allergy = request.data.get('allergy')
        # new data
        id = request.data.get('id')
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
            db = patient_model.objects.get(openid=openid, id=id)
            # db = patient_model.objects.get(openid=openid, patientname=patientname, gender=gender, age=age,
            #                                telephone=telephone, pastmedicalhistory=pastmedicalhistory,
            #                                allergy=allergy)
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
        # patientname = request.data.get('patientname')
        # gender = request.data.get('gender')
        # age = request.data.get('age')
        # telephone = request.data.get('telephone')
        # pastmedicalhistory = request.data.get('pastmedicalhistory')
        # allergy = request.data.get('allergy')
        id = request.data.get('id')
        coder = request.data.get("coder")
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            patient_model.objects.filter(openid=openid, id=id).delete()
            # patient_model.objects.filter(openid=openid, patientname=patientname, gender=gender, age=age,
            #                              telephone=telephone, pastmedicalhistory=pastmedicalhistory,
            #                              allergy=allergy).delete()
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:
            return Response({'status': True})


# 问诊list查询
class inquirypost_list(APIView):
    def get(self, request):
        page = int(request.query_params.get('page'))
        times = 5
        if page <= 0 or (page - 1) * 5 > inquirypost_model.objects.count():
            return Response({'status': False, 'message': '没有更多的帖子了', 'code': 10005})
        try:
            inquirypost_list = inquirypost_model.objects.all().order_by("-id") \
                [(page - 1) * 5:(page - 0) * 5].values('id', 'name', 'title', 'classify', 'summary', 'picture1',
                                                       'picture2', 'picture3', 'time')
            json_data = list(inquirypost_list)
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})

        else:
            return Response({'status': True, 'data': json_data})


# 问诊查询
class inquirypost(APIView):
    def get(self, request):
        id = request.query_params.get('id')
        try:
            inquirypost = inquirypost_model.objects.filter(id=id).values('id', 'name', 'title', 'classify', 'content',
                                                                         'picture1', 'picture2', 'picture3', 'time')
            json_data = list(inquirypost)
        except:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        else:
            return Response({'status': True, 'data': json_data})

    def post(self, request):
        name = request.data.get('name')
        title = request.data.get('title')
        classify = request.data.get('classify')
        content = request.data.get('content')
        summary = request.data.get('summary')[0:100]
        picture1_base64 = request.data.get('picture1')
        picture2_base64 = request.data.get('picture2')
        picture3_base64 = request.data.get('picture3')
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        print(request.data)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            db = inquirypost_model.objects.create(openid=openid, name=name, title=title, classify=classify,
                                                  content=content, summary=summary)
            if not picture1_base64 == '':
                db.picture1 = Savepic(picture1_base64)
            if not picture2_base64 == '':
                db.picture2 = Savepic(picture2_base64)
            if not picture3_base64 == '':
                db.picture3 = Savepic(picture3_base64)
            db.save()
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True})


# 评论查询
class comment(APIView):
    def get(self, request):
        postid = request.query_params.get('postid')
        try:
            comment = comment_model.objects.filter(postid=postid).values('id', 'name', 'reply_to',
                                                                         'parent', 'body', 'created')
            json_data = list(comment)
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            if not json_data == []:
                return Response({'status': True, 'data': json_data})
            else:
                return Response({'status': True, 'message': '暂无评论'})

    def post(self, request):
        name = request.data.get('name')
        postid = request.data.get('postid')
        postid = inquirypost_model.objects.filter(id=postid).values()
        print(postid)
        if not postid:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        parentid = request.data.get('parentid')
        reply_to = request.data.get('reply_to')
        body = request.data.get('body')
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        print(request.data)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        if parentid:
            parent = comment_model.objects.filter(id=parentid)
            parentid = parent.get_root().id
            reply_to = parent.user
        try:
            db = comment_model.objects.create(openid=openid, name=name, postid_id=postid, parent_id=parentid,
                                              reply_to=reply_to, body=body)
            db.save()
        except:
            return Response({'status': False, 'message': '发布评论错误', 'code': 10008})
        else:
            return Response({'status': True})
