# Generated by Django 3.0.1 on 2019-12-27 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('systolic', models.IntegerField()),
                ('diastolic', models.IntegerField()),
                ('pulse', models.IntegerField()),
                ('created_at', models.DateTimeField()),
            ],
        ),
    ]
