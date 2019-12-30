from .models import Entry
from rest_framework import viewsets, permissions
from .serializers import EntrySerializer

# Entry Viewset
class EntryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = EntrySerializer

    def get_queryset(self):
        return self.request.user.entries.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)