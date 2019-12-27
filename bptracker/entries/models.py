from django.db import models

# Create your models here.
class Entry(models.Model):
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    pulse = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=False)