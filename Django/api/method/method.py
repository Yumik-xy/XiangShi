import time
import uuid

import requests
import base64

from django.conf import settings
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

APPID = 'wxc9bc178415433f14'
SECRET = '43c875a17e0a54a2fa5346fc9dbba29f'


# KEY = 'xiangshishixiangxiangshishixiang'


# 获取openid的部分
def GetOpenid(coder):
    if not all([coder]):
        return ""
    url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + coder + '&grant_type=authorization_code'
    res = requests.get(url=url)
    try:
        openid = res.json()['openid']
    except:
        print(res.json()['errmsg'])
        return ""
    print(openid)
    return openid


def Savepic(img):
    if not img:
        return ""
    path = '%spicture/%s/' % (settings.MEDIA_ROOT, time.strftime("%Y%m%d", time.localtime()))
    mkdir(path)
    file_name = 'picture/%s/%s.jpg' % (time.strftime("%Y%m%d", time.localtime()), str(uuid.uuid4()))
    save_path = '%spicture/%s/%s.jpg' % (
        settings.MEDIA_ROOT, time.strftime("%Y%m%d", time.localtime()), str(uuid.uuid4()))
    imgdata = base64.b64decode(img)
    with open(save_path, 'wb') as f:
        f.write(imgdata)
        f.close()
    return file_name


def mkdir(path):
    import os
    path = path.strip()
    path = path.rstrip("\\")
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)
        return True
    else:
        return False
