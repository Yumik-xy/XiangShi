import datetime

from django.db.models import Q
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
from .models import notify as notify_model

import time


# next code 10008


# Create your views here.

class login(APIView):
    def get(self, request):
        return Response({'status': True})


# 药物List查询
class medicine_list(APIView):
    def get(self, request):
        datas = []
        drumname = request.query_params.get('drumname')
        drumname = drumname.split(' ')
        print(drumname)
        try:
            for item in drumname:
                if not item == '':
                    drums = medicine_model.objects.filter(drumname__contains=item).values('id', 'drumname')
                    datas.extend(list(drums))
            json_data = []
            for data in datas:
                if data not in json_data:
                    json_data.append(data)
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
        lt = request.query_params.get('lt')
        try:
            if lt:
                symptom = symptomwiki_model.objects.filter(level__lte=int(lt)).values('id', 'name', 'parent', 'child')
            else:
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
        ser_title = request.query_params.get('ser_title')
        ser_classify = request.query_params.get('ser_classify')
        times = 5
        if page <= 0 or (page - 1) * times > inquirypost_model.objects.count():
            return Response({'status': False, 'message': '没有更多的帖子了', 'code': 10005})
        try:
            if ser_title is None and ser_classify is None:
                inquirypost_list = inquirypost_model.objects.all().order_by("-id") \
                    [(page - 1) * times:(page - 0) * times].values('id', 'name', 'title', 'classify', 'summary', 'time',
                                                               'photourl')
            elif ser_title and ser_classify is None:
                inquirypost_list = inquirypost_model.objects.filter(title__contains=ser_title).order_by("-id") \
                    [(page - 1) * times:(page - 0) * times].values('id', 'name', 'title', 'classify', 'summary', 'time',
                                                                   'photourl')
            elif ser_title is None and ser_classify:
                inquirypost_list = inquirypost_model.objects.filter(classify__contains=ser_classify).order_by("-id") \
                    [(page - 1) * times:(page - 0) * times].values('id', 'name', 'title', 'classify', 'summary', 'time',
                                                                   'photourl')
            else:
                inquirypost_list = inquirypost_model.objects.filter(Q(title__contains=ser_title),
                                                                    Q(classify__contains=ser_classify)).order_by("-id") \
                    [(page - 1) * times:(page - 0) * times].values('id', 'name', 'title', 'classify', 'summary', 'time',
                                                                   'photourl')

            for item in inquirypost_list:
                item['time'] = int(time.mktime(item['time'].timetuple()))
            json_data = list(inquirypost_list)

        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})

        else:
            return Response({'status': True, 'data': json_data})


# 问诊查询
class inquirypost(APIView):
    def get(self, request):
        id = request.query_params.get('id')
        coder = request.query_params.get('coder')
        openid = GetOpenid(coder)
        print(request.data)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            inquirypost = inquirypost_model.objects.filter(id=id).values('id', 'name', 'title', 'classify', 'content',
                                                                         'time', 'photourl')
            for item in inquirypost:
                item['time'] = int(time.mktime(item['time'].timetuple()))
            json_data = list(inquirypost)
            if inquirypost_model.objects.get(id=id).openid == openid:
                possess = True
            else:
                possess = False
        except:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        else:
            return Response({'status': True, 'data': json_data, 'possess': possess})

    def post(self, request):
        name = request.data.get('name')
        title = request.data.get('title')
        photourl = request.data.get('photourl')
        classify = request.data.get('classify')
        content = request.data.get('content')
        summary = request.data.get('summary')[0:100]
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})

        try:
            db = inquirypost_model.objects.create(openid=openid, name=name, title=title, classify=classify,
                                                  content=content, summary=summary, photourl=photourl)
            db.save()
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True})

    def put(self, request):
        id = request.data.get('id')
        _name = request.data.get('name')
        _photourl = request.data.get('photourl')
        _title = request.data.get('title')
        _classify = request.data.get('classify')
        _content = request.data.get('content')
        _summary = request.data.get('summary')[0:100]
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            db = inquirypost_model.objects.get(openid=openid, id=id)
        except:
            return Response({'status': False, 'message': '未找到用户', 'code': 10002})
        else:
            db.name = _name
            db.title = _title
            db.photourl = _photourl
            db.classify = _classify
            db.content = _content
            db.summary = _summary
            db.save()
            return Response({'status': True})

    def delete(self, request):
        id = request.data.get('id')
        coder = request.data.get("coder")
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            comment_model.objects.filter(postid=id).delete()
            inquirypost_model.objects.filter(openid=openid, id=id).delete()
        except:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        else:
            return Response({'status': True})


# 评论查询
class comment(APIView):
    def get(self, request):
        postid = request.query_params.get('postid')
        try:
            comment = comment_model.objects.filter(postid=postid).values('id', 'name', 'reply_to',
                                                                         'parent', 'body', 'created', 'photourl')
            for item in comment:
                item['created'] = int(time.mktime(item['created'].timetuple()))
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
        if not inquirypost_model.objects.filter(id=postid):
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        parentid = request.data.get('parentid')
        photourl = request.data.get('photourl')
        reply_to = request.data.get('reply_to')
        body = request.data.get('body')
        coder = request.data.get('coder')
        openid = GetOpenid(coder)
        print(request.data)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        if not parentid == 'null':
            par = comment_model.objects.get(id=parentid)
            if par.parent_id:
                parentid = par.parent_id
        try:
            db = comment_model.objects.create(openid=openid, name=name, postid_id=postid,
                                              reply_to=reply_to, body=body, photourl=photourl)
            if not parentid == 'null':
                print(parentid)
                db.parent_id = int(parentid)
            db.save()
        except:
            return Response({'status': False, 'message': '发布评论错误', 'code': 10008})
        else:
            return Response({'status': True})

    def delete(self, request):
        id = request.data.get('id')
        coder = request.data.get("coder")
        openid = GetOpenid(coder)
        if openid == "":
            return Response({'status': False, 'message': '获取openid失败', 'code': 10001})
        try:
            comment_model.objects.filter(parent_id=id).delete()
            comment_model.objects.filter(openid=openid, id=id).delete()
        except:
            return Response({'status': False, 'message': '未找到帖子', 'code': 10004})
        else:
            return Response({'status': True})


class uploadimg(APIView):
    def post(self, request):
        picture_base64 = request.data.get('picture')
        path = str(Savepic(picture_base64))
        print(path)
        return Response({'status': True, 'url': path})


class notify_list(APIView):
    def get(self, request):
        postwiki = int(request.query_params.get('postwiki'))
        times = 5
        try:
            if postwiki == 0:
                now = datetime.datetime.now()
                start = now - datetime.timedelta(days=7)
                notify_list = notify_model.objects.filter(created__gte=start).order_by('-readnum') \
                    [0: times].values('id', 'title', 'img_url', 'text', 'readnum', 'postwiki', 'created')
            else:
                notify_list = notify_model.objects.filter(postwiki=postwiki).order_by("-created") \
                    [0: times].values('id', 'title', 'img_url', 'text', 'readnum', 'created')
            for item in notify_list:
                item['created'] = int(time.mktime(item['created'].timetuple()))
            json_data = list(notify_list)
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True, 'data': json_data})


class notify(APIView):
    def get(self, request):
        id = request.query_params.get('id')
        try:
            db = notify_model.objects.get(id=id)
            db.readnum = db.readnum + 1
            db.save()
            notify = notify_model.objects.filter(id=id).values('id', 'title', 'img_url', 'text', 'readnum', 'created')
            for item in notify:
                item['created'] = int(time.mktime(item['created'].timetuple()))
            json_data = list(notify)
        except:
            return Response({'status': False, 'message': '未知错误', 'code': 10000})
        else:
            return Response({'status': True, 'data': json_data})
