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

    class Meta:
        verbose_name_plural = '药物说明书'
        verbose_name = '药品'
        db_table = 'medicine'
#
# class symptom(models.Model):
#