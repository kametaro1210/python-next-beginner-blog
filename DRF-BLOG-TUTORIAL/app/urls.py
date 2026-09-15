
"""
このファイルは毎回プロジェクト配下に
urls.pyのファイルを作成する必要がある
"""

# URLパターンを作成するためのpath関数を読み込む
from django.urls import path

# appアプリのviews.pyを読み込む
from app import views

# このアプリで使用するURLの一覧
urlpatterns = [
    
    # 投稿一覧を表示・新規投稿を処理するURL
    # 例: /api/post/
    path('post/', views.PostView.as_view(), name='post'),
    
    # URL内のpkを使って、特定の投稿を表示・編集・削除するURL
    # 例: /api/post/1/
    path('post/<str:pk>/', views.PostDetailView.as_view(), name='post-detail'),
]