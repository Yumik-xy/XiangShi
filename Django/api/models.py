from django.db import models


# Create your models here.

class medicine(models.Model):
    drumname = models.CharField(max_length=30, verbose_name='药物名称', unique=True)
    description = models.CharField(max_length=120, verbose_name='药物性状')
    indications = models.CharField(max_length=120, verbose_name='药物的适用症')
    administration = models.CharField(max_length=120, verbose_name='剂量与用法')
    note = models.CharField(max_length=120, verbose_name='注意事项')
    sideeffects = models.CharField(max_length=120, verbose_name='副作用')
    contraindications = models.CharField(max_length=120, verbose_name='禁忌症')
    ctime = models.DateTimeField(auto_now=True, verbose_name='创建时间')
    uptime = models.DateTimeField(auto_now_add=True, verbose_name='上次时间')
    class Meta:
        verbose_name_plural = '药物说明书'
        verbose_name = '药品'
        db_table = 'medicine'


class patient(models.Model):
    openid = models.CharField(max_length=60, verbose_name='openid')
    patientname = models.CharField(max_length=30, verbose_name='患者名称')
    gender = models.CharField(max_length=2, verbose_name='性别')
    age = models.CharField(max_length=3, verbose_name='年龄')
    telephone = models.CharField(max_length=11, verbose_name='电话')
    pastmedicalhistory = models.CharField(max_length=120, verbose_name='既往病史')
    allergy = models.CharField(max_length=60, verbose_name='过敏情况')
    ctime = models.DateTimeField(auto_now=True, verbose_name='创建时间')
    uptime = models.DateTimeField(auto_now_add=True, verbose_name='上次时间')

    class Meta:
        verbose_name_plural = '病人信息'
        verbose_name = '病人'
        db_table = 'patient'