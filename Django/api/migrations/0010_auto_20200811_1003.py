# Generated by Django 3.0.8 on 2020-08-11 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20200811_0959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='symptom',
            name='clinical',
            field=models.TextField(verbose_name='临床表现'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='diagnosis',
            field=models.TextField(verbose_name='诊断'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='highriskgroup',
            field=models.TextField(verbose_name='高危人群'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='pathogeny',
            field=models.TextField(verbose_name='病因'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='prevention',
            field=models.TextField(verbose_name='预防'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='relateddiseases',
            field=models.TextField(verbose_name='相关疾病'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='summary',
            field=models.TextField(verbose_name='概述'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='symptom',
            field=models.TextField(verbose_name='症状'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='symptomname',
            field=models.TextField(verbose_name='症状名称'),
        ),
        migrations.AlterField(
            model_name='symptom',
            name='therapeutic',
            field=models.TextField(verbose_name='治疗方法'),
        ),
    ]
