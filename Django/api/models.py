from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

class medicine(models.Model):
    drumname = models.CharField(max_length=30, verbose_name='药物名称')
    description = models.CharField(max_length=120, verbose_name='药物性状')
    indications = models.CharField(max_length=120, verbose_name='药物的适用症')
    administration = models.CharField(max_length=120, verbose_name='剂量与用法')
    note = models.CharField(max_length=120, verbose_name='注意事项')
    sideeffects = models.CharField(max_length=120, verbose_name='副作用')
    contraindications = models.CharField(max_length=120, verbose_name='禁忌症')

    class Meta:
        verbose_name_plural = '药物说明书'
        verbose_name = '药品'
        db_table = 'medicine'
        unique_together = (
            'drumname', 'description', 'indications', 'administration', 'note', 'sideeffects', 'contraindications')


class patient(models.Model):
    openid = models.CharField(max_length=60, verbose_name='openid')
    patientname = models.CharField(max_length=30, verbose_name='患者名称')
    gender = models.CharField(max_length=2, verbose_name='性别[0]男,[1]女')
    age = models.CharField(max_length=3, verbose_name='年龄')
    telephone = models.CharField(max_length=11, verbose_name='电话')
    pastmedicalhistory = models.CharField(max_length=120, verbose_name='既往病史')
    allergy = models.CharField(max_length=60, verbose_name='过敏情况')

    class Meta:
        verbose_name_plural = '病人信息'
        verbose_name = '病人'
        db_table = 'patient'
        unique_together = (
            'openid', 'patientname', 'gender', 'age', 'telephone', 'pastmedicalhistory', 'allergy')


class inquirypost(models.Model):
    openid = models.CharField(max_length=60, verbose_name='openid')
    name = models.CharField(max_length=30, verbose_name='用户名')
    title = models.CharField(max_length=60, verbose_name='标题')
    classify = models.CharField(max_length=30, verbose_name='分类')
    content = models.TextField(verbose_name='正文')
    picture1 = models.ImageField(verbose_name='图片1', upload_to='picture/%Y%m%d/', blank=True)
    picture2 = models.ImageField(verbose_name='图片2', upload_to='picture/%Y%m%d/', blank=True)
    picture3 = models.ImageField(verbose_name='图片3', upload_to='picture/%Y%m%d/', blank=True)
    time = models.TimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = '问诊信息'
        verbose_name = '问诊'
        db_table = 'inquirypost'
