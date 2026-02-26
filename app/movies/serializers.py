from rest_framework import serializers

from movies.models import Movie, Platform

__all__ = ["MovieSerializer"]


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ["id", "title", "subtitle", "director", "description"]

class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ["id", "name"]
