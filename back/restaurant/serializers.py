from rest_framework import serializers
from .models import (
    TypeRestaurant, Restaurant, ImageRestaurant,
    Horaire, Table, CategorieMenu, Store,
    ArticleMenu, Menu, ImageMenu
)

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'image']

class ImageRestaurantSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageRestaurant

class ImageMenuSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ImageMenu

class TypeRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeRestaurant
        fields = ['id', 'intitule']

class HoraireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horaire
        fields = ['id', 'heure_debut', 'heure_fermeture', 'jour_ouverture', 'jour_fermeture', 'restaurant']

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ['id', 'designation', 'capacite', 'restaurant']

class CategorieMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorieMenu
        fields = ['id', 'intitule', 'description']

class ArticleMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleMenu
        fields = ['id', 'nom', 'description', 'prix']

class MenuSerializer(serializers.ModelSerializer):
    article = ArticleMenuSerializer()
    categorie = CategorieMenuSerializer()
    image_menu = ImageMenuSerializer(required=False)

    class Meta:
        model = Menu
        fields = ['id', 'article', 'categorie', 'isVisible', 'image_menu']

    def create(self, validated_data):
        article_data = validated_data.pop('article')
        categorie_data = validated_data.pop('categorie')
        image_data = validated_data.pop('image_menu', None)

        article = ArticleMenu.objects.create(**article_data)
        categorie = CategorieMenu.objects.create(**categorie_data)
        menu = Menu.objects.create(article=article, categorie=categorie, **validated_data)

        if image_data:
            ImageMenu.objects.create(article=menu, **image_data)

        return menu

class RestaurantSerializer(serializers.ModelSerializer):
    type_restaurant = TypeRestaurantSerializer()
    gerant = serializers.PrimaryKeyRelatedField(read_only=True)
    images = ImageRestaurantSerializer(many=True, required=False)
    horaires = HoraireSerializer(many=True, required=False)
    tables = TableSerializer(many=True, required=False)

    class Meta:
        model = Restaurant
        fields = ['id', 'nom', 'type_restaurant', 'gerant', 'contact', 'total_table', 'images', 'horaires', 'tables']

    def create(self, validated_data):
        type_restaurant_data = validated_data.pop('type_restaurant')
        images_data = validated_data.pop('images', [])
        horaires_data = validated_data.pop('horaires', [])
        tables_data = validated_data.pop('tables', [])

        type_restaurant = TypeRestaurant.objects.create(**type_restaurant_data)
        restaurant = Restaurant.objects.create(type_restaurant=type_restaurant, **validated_data)

        for image_data in images_data:
            ImageRestaurant.objects.create(restaurant=restaurant, **image_data)

        for horaire_data in horaires_data:
            Horaire.objects.create(restaurant=restaurant, **horaire_data)

        for table_data in tables_data:
            Table.objects.create(restaurant=restaurant, **table_data)

        return restaurant

class StoreSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer()
    store_manager = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Store
        fields = ['id', 'restaurant', 'store_manager']

    def create(self, validated_data):
        restaurant_data = validated_data.pop('restaurant')
        
        # Créer ou récupérer le restaurant
        restaurant = Restaurant.objects.create(**restaurant_data)
        
        # Créer le point de vente
        store = Store.objects.create(
            restaurant=restaurant,
            **validated_data
        )
        
        return store
