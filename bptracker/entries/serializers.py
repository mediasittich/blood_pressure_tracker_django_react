from rest_framework import serializers
from .models import Entry

# Entry Serializer
class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'
        # fields = ('systolic', 'diastolic', 'pulse', 'created_at')