from django.db import models
from ckeditor.fields import RichTextField
from mptt.models import MPTTModel, TreeForeignKey


# Create your models here.

class medicine(models.Model):
    drumname = models.TextField(verbose_name='药物名称')
    description = RichTextField(verbose_name='药物性状')
    indications = RichTextField(verbose_name='药物的适用症')
    administration = RichTextField(verbose_name='剂量与用法')
    note = RichTextField(verbose_name='注意事项')
    sideeffects = RichTextField(verbose_name='副作用')
    contraindications = RichTextField(verbose_name='禁忌症')

    class Meta:
        verbose_name_plural = '药物说明书'
        verbose_name = '药品'
        db_table = 'medicine'
        unique_together = (
            'drumname', 'description', 'indications', 'administration', 'note', 'sideeffects', 'contraindications')


class symptom(models.Model):
    symptomname = models.TextField(verbose_name='症状名称')
    summary = RichTextField(verbose_name='概述')
    pathogeny = RichTextField(verbose_name='病因')
    diagnosis = RichTextField(verbose_name='诊断')
    clinical = RichTextField(verbose_name='临床表现')
    symptom = RichTextField(verbose_name='症状')
    therapeutic = RichTextField(verbose_name='治疗方法')
    prevention = RichTextField(verbose_name='预防')
    highriskgroup = RichTextField(verbose_name='高危人群')
    relateddiseases = RichTextField(verbose_name='相关疾病')

    class Meta:
        verbose_name_plural = '症状表现'
        verbose_name = '症状'
        db_table = 'symptom'
        unique_together = (
            'symptomname', 'summary', 'pathogeny', 'diagnosis', 'clinical', 'symptom', 'therapeutic', 'prevention',
            'highriskgroup', 'relateddiseases')


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
    photourl = models.CharField(max_length=120, verbose_name='photourl')
    title = models.CharField(max_length=60, verbose_name='标题')
    classify = models.CharField(max_length=30, verbose_name='分类')
    content = RichTextField(verbose_name='正文')
    summary = models.CharField(max_length=120, verbose_name='概述')
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = '问诊信息'
        verbose_name = '问诊'
        db_table = 'inquirypost'

    def __str__(self):
        return self.content[:30]


class comment(MPTTModel):
    openid = models.CharField(max_length=60, verbose_name='openid')
    name = models.CharField(max_length=30, verbose_name='用户名')
    postid = models.ForeignKey(inquirypost, on_delete=models.CASCADE, related_name='postid')
    photourl = models.CharField(max_length=120, verbose_name='photourl')
    parent = TreeForeignKey(
        'self',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='children'
    )
    reply_to = models.CharField(max_length=30, verbose_name='被回复者的用户名', blank=True)
    body = models.TextField(verbose_name='评论内容')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = '评论信息'
        verbose_name = '评论'
        db_table = 'comment'

    class MPTTMeta:
        order_insertion_by = ['created']

    def __str__(self):
        return self.name[:30]


class symptomwiki(MPTTModel):
    name = models.CharField(max_length=30, verbose_name='类名')
    parent = TreeForeignKey(
        'self',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='children'
    )
    child = models.ForeignKey(symptom, on_delete=models.CASCADE, related_name='postid', blank=True, null=True)

    class Meta:
        verbose_name_plural = '疾病wiki信息'
        verbose_name = '疾病wiki'
        db_table = 'symptomwiki'

    class MPTTMeta:
        order_insertion_by = ['parent']

    def __str__(self):
        return self.name[:30]


class imgmd5(models.Model):
    img = models.ImageField(upload_to='picture/%Y%m%d/')
    md5 = models.CharField(max_length=60)


class notify(models.Model):
    title = models.CharField(max_length=60, verbose_name='标题')
    img_url = models.CharField(max_length=120, verbose_name='预览图url')
    text = RichTextField(verbose_name='正文内容', help_text='图片请使用sm.ms图床上传！！！')
    readnum = models.PositiveIntegerField(blank=True, default=0)
    POSTWIKIS = (
        (1, u'百科'),
        (2, u'疫情'),
        (3, u'药品'),
    )
    postwiki = models.IntegerField(choices=POSTWIKIS, verbose_name='分类')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = '资讯信息'
        verbose_name = '资讯'
        db_table = 'notify'

    def __str__(self):
        return self.title[:30]
