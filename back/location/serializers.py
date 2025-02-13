from rest_framework import serializers
from .models import Ville, Domicile, DomicileClient, DomicileStore

class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = ['id', 'code_postal', 'nom']

class DomicileSerializer(serializers.ModelSerializer):
    ville = VilleSerializer()

    class Meta:
        model = Domicile
        fields = ['id', 'adresse', 'latitude', 'longitude', 'ville']

    def create(self, validated_data):
        ville_data = validated_data.pop('ville')
        ville = Ville.objects.create(**ville_data)
        return Domicile.objects.create(ville=ville, **validated_data)

class DomicileClientSerializer(DomicileSerializer):
    class Meta(DomicileSerializer.Meta):
        model = DomicileClient
        fields = DomicileSerializer.Meta.fields + ['client']

class DomicileStoreSerializer(DomicileSerializer):
    class Meta(DomicileSerializer.Meta):
        model = DomicileStore
        fields = DomicileSerializer.Meta.fields + ['store']
