from django.contrib import admin
from .models import Post

# PostモデルをDjango管理画面に登録
admin.site.register(Post)