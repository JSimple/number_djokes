# Generated by Django 4.0.5 on 2022-08-01 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jokes_site', '0002_remove_joke_content_info_joke_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='joke',
            name='content',
            field=models.JSONField(default=dict, verbose_name='content'),
        ),
    ]