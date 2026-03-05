from rest_framework.routers import SimpleRouter

from movies.views import MovieViewSet, PlatformViewSet


app_name = "movies"

router = SimpleRouter()
router.register("movies/channel", PlatformViewSet, basename="movies/channel")
router.register("movies", MovieViewSet, basename="movies")

urlpatterns = router.urls
