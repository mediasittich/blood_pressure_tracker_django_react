from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Entry(models.Model):
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    pulse = models.IntegerField()
    owner = models.ForeignKey(User, related_name='entries', on_delete=models.CASCADE, null=True) # TODO: set null=False later
    created_at = models.DateTimeField(auto_now_add=True) # TODO: Change later for user input