# Generated by Django 3.0.8 on 2020-08-07 17:46

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inquirypost',
            name='content',
            field=ckeditor.fields.RichTextField(verbose_name='正文'),
        ),
        migrations.CreateModel(
            name='comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('openid', models.CharField(max_length=60, verbose_name='openid')),
                ('name', models.CharField(max_length=30, verbose_name='用户名')),
                ('reply_to', models.CharField(max_length=30, verbose_name='被回复者的用户名')),
                ('body', ckeditor.fields.RichTextField(verbose_name='评论内容')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='api.comment')),
                ('postid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='postid', to='api.inquirypost')),
            ],
            options={
                'verbose_name': '评论',
                'verbose_name_plural': '评论信息',
                'db_table': 'comment',
            },
        ),
    ]
