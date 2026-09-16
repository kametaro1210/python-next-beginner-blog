

"""
サーバー起動をして、動作確認済み
http://127.0.0.1:8000/api/post/
http://127.0.0.1:8000/api/post/1/
"""

# from django.shortcuts import render

# Django REST Frameworkの汎用APIViewを読み込む
from rest_framework import generics

# APIで返すデータの形式を定義したSerializerを読み込む
from .serializers import PostSerializer

# データベースのPostモデルを読み込む
from .models import Post


# 投稿一覧を取得するためのビュー
class PostView(generics.ListAPIView):
    # データベースからすべての投稿を取得する
    queryset = Post.objects.all()

    # 取得した投稿をJSON形式に変換するSerializerを指定
    serializer_class = PostSerializer


# 投稿の詳細を取得するためのビュー
class PostDetailView(generics.RetrieveAPIView):
    # データベースからPostのデータを取得する
    queryset = Post.objects.all()

    # 取得した投稿をJSON形式に変換するSerializerを指定
    serializer_class = PostSerializer
