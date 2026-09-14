from django.db import models

"""
※Modelを作成したら下記コマンドを実行する
python manage.py makemigrations
python manage.py migrate
"""

# ブログ記事を表すモデル
class Post(models.Model):
    # 記事のタイトル。最大50文字
    title = models.CharField('タイトル', max_length=50)

    # 画像ファイル。media/images/ フォルダに保存
    image = models.ImageField(
        upload_to='images',
        verbose_name='イメージ画像',
    )

    # 記事本文。長い文章を保存
    content = models.TextField('本文')

    # 記事を作成した日時。auto_now_addで作成時に自動設定
    created_at = models.DateTimeField('作成日', auto_now_add=True)

    # 管理画面などで記事のタイトルを表示
    def __str__(self):
        return self.title
