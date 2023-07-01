from django.contrib import admin

# Register your models here.

from .models import *

class UserDetailAdmin(admin.ModelAdmin):
    list_display =  [field.name for field in UserDetail._meta.get_fields()]

admin.site.register(UserDetail,UserDetailAdmin)