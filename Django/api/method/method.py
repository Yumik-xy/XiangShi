import requests
import base64

from rest_framework import serializers
from rest_framework.exceptions import ValidationError
APPID = ''
SECRET = ''
KEY = 'xiangshishixiangxiangshishixiang'


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
