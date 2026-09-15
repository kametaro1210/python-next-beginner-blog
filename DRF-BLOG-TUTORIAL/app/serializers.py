
"""
Serializer とは、
クエリセットやモデルインスタンスのような複雑なデータを、
Json 形式のフォーマットに変換することを役割としている。

使用する場合、アプリケーションフォルダ配下に
ファイルを作成する必要がある。
"""

# Django REST Frameworkのシリアライザー機能を読み込む
from rest_framework import serializers

# 同じアプリ内にあるPostモデルを読み込む
from .models import Post

# PostモデルのデータをJSONに変換するシリアライザー
class PostSerializer(serializers.ModelSerializer):
    # 作成日時を「年-月-日 時:分」の形式で表示
    # 例: 2026-09-15 14:30
    created_at = serializers.DateTimeField(
        format="%Y-%m-%d %H:%M"
    )

    class Meta:
        # 変換対象のモデルとしてPostモデルを指定
        model = Post

        # APIで扱うPostモデルのフィールドを指定
        fields = (
            'id',
            'title',
            'image',
            'content',
            'created_at',
        )