from rest_framework import routers
from .api import EntryViewSet

router = routers.DefaultRouter()
router.register('api/entries', EntryViewSet, 'entries')

urlpatterns = router.urls