import requests
import base64

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
