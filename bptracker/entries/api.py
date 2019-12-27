from .models import Entry
from rest_framework import viewsets, permissions
from .serializers import EntrySerializer

# Entry Viewset
class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EntrySerializer