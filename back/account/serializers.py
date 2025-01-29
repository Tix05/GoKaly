from rest_framework import serializers
from .models import (
    Utilisateur, Client, ImageClient,
    RestoManager, ImageRestoManager,
    StoreManager, ImageStoreManager,
    SuperAdmin, ImageSuperAdmin,
    Livreur, ImageLivreur
)

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'image']

class ImageClientSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageClient

class ImageRestoManagerSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageRestoManager

class ImageStoreManagerSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageStoreManager

class ImageSuperAdminSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageSuperAdmin

class ImageLivreurSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageLivreur

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['id', 'email', 'date_creation', 'last_logged']
        read_only_fields = ['date_creation', 'last_logged']
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password:
            instance.password = password
        instance.save()
        return instance

class ClientSerializer(UtilisateurSerializer):
    image_client = ImageClientSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = Client
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'contact', 'date_update', 'image_client']
        read_only_fields = UtilisateurSerializer.Meta.read_only_fields + ['date_update']

    def create(self, validated_data):
        image_data = validated_data.pop('image_client', None)
        client = super().create(validated_data)
        if image_data:
            ImageClient.objects.create(client=client, **image_data)
        return client

class RestoManagerSerializer(UtilisateurSerializer):
    image_resto_manager = ImageRestoManagerSerializer(required=False)
    fields = UtilisateurSerializer.Meta.fields + ['nom', 'contact', 'date_update', 'image_client']
    read_only_fields = UtilisateurSerializer.Meta.read_only_fields + ['date_update']

    def create(self, validated_data):
        image_data = validated_data.pop('image_client', None)
        client = super().create(validated_data)
        if image_data:
            ImageClient.objects.create(client=client, **image_data)
        return client

class RestoManagerSerializer(UtilisateurSerializer):
    image_resto_manager = ImageRestoManagerSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = RestoManager
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_resto_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_resto_manager', None)
        manager = super().create(validated_data)
        if image_data:
            ImageRestoManager.objects.create(restoManager=manager, **image_data)
        return manager

class StoreManagerSerializer(UtilisateurSerializer):
    image_store_manager = ImageStoreManagerSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = StoreManager
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_store_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_store_manager', None)
        manager = super().create(validated_data)
        if image_data:
            ImageStoreManager.objects.create(storeManager=manager, **image_data)
        return manager

class SuperAdminSerializer(UtilisateurSerializer):
    image_resto_manager = ImageSuperAdminSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = SuperAdmin
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_resto_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_resto_manager', None)
        admin = super().create(validated_data)
        if image_data:
            ImageSuperAdmin.objects.create(superAdmin=admin, **image_data)
        return admin

class LivreurSerializer(serializers.ModelSerializer):
    image_livreur = ImageLivreurSerializer(required=False)

    class Meta:
        model = Livreur
        fields = ['id', 'nom', 'contact', 'isAvailable', 'image_livreur']

    def create(self, validated_data):
        image_data = validated_data.pop('image_livreur', None)
        livreur = Livreur.objects.create(**validated_data)
        if image_data:
            ImageLivreur.objects.create(livreur=livreur, **image_data)
        return livreur
    class Meta(UtilisateurSerializer.Meta):
        model = RestoManager
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_resto_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_resto_manager', None)
        manager = super().create(validated_data)
        if image_data:
            ImageRestoManager.objects.create(restoManager=manager, **image_data)
        return manager

class StoreManagerSerializer(UtilisateurSerializer):
    image_store_manager = ImageStoreManagerSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = StoreManager
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_store_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_store_manager', None)
        manager = super().create(validated_data)
        if image_data:
            ImageStoreManager.objects.create(storeManager=manager, **image_data)
        return manager

class SuperAdminSerializer(UtilisateurSerializer):
    image_resto_manager = ImageSuperAdminSerializer(required=False)

    class Meta(UtilisateurSerializer.Meta):
        model = SuperAdmin
        fields = UtilisateurSerializer.Meta.fields + ['nom', 'image_resto_manager']

    def create(self, validated_data):
        image_data = validated_data.pop('image_resto_manager', None)
        admin = super().create(validated_data)
        if image_data:
            ImageSuperAdmin.objects.create(superAdmin=admin, **image_data)
        return admin

class LivreurSerializer(serializers.ModelSerializer):
    image_livreur = ImageLivreurSerializer(required=False)

    class Meta:
        model = Livreur
        fields = ['id', 'nom', 'contact', 'isAvailable', 'image_livreur']

    def create(self, validated_data):
        image_data = validated_data.pop('image_livreur', None)
        livreur = Livreur.objects.create(**validated_data)
        if image_data:
            ImageLivreur.objects.create(livreur=livreur, **image_data)
        return livreur