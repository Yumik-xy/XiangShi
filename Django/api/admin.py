from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import User
from api.models import medicine


class medicineAdmin(admin.ModelAdmin):
    search_fields = ('drumname',)  # 根据属性搜索
    list_display = ('drumname',)  # 列表显示的属性
    pass


admin.site.register(medicine, medicineAdmin)
