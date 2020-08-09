from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import User
from api.models import *


class medicineAdmin(admin.ModelAdmin):
    search_fields = ('drumname',)  # 根据属性搜索
    list_display = ('id', 'drumname',)  # 列表显示的属性
    pass


admin.site.register(medicine, medicineAdmin)


class symptomAdmin(admin.ModelAdmin):
    search_fields = ('symptomname',)  # 根据属性搜索
    list_display = ('id', 'symptomname',)  # 列表显示的属性
    pass


admin.site.register(symptom, symptomAdmin)


class patientAdmin(admin.ModelAdmin):
    search_fields = ('patientname',)  # 根据属性搜索
    list_display = ('id', 'patientname',)  # 列表显示的属性
    pass


admin.site.register(patient, patientAdmin)


class inquirypostAdmin(admin.ModelAdmin):
    search_fields = ('title', 'classify',)  # 根据属性搜索
    list_display = ('id', 'title', 'classify',)  # 列表显示的属性
    pass


admin.site.register(inquirypost, inquirypostAdmin)


class commentAdmin(admin.ModelAdmin):
    search_fields = ('name', 'reply_to',)  # 根据属性搜索
    list_display = ('id', 'name', 'reply_to', 'level',)  # 列表显示的属性
    pass


admin.site.register(comment, commentAdmin)


class symptomwikiAdmin(admin.ModelAdmin):
    search_fields = ('name', 'child',)  # 根据属性搜索
    list_display = ('id', 'name', 'child', 'level',)  # 列表显示的属性
    pass


admin.site.register(symptomwiki, symptomwikiAdmin)
