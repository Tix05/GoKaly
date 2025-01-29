from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import (
    TypeRestaurant, Restaurant, ImageRestaurant,
    Horaire, Table, CategorieMenu, Store,
    ArticleMenu, Menu, ImageMenu
)
from .serializers import (
    TypeRestaurantSerializer, RestaurantSerializer, ImageRestaurantSerializer,
    HoraireSerializer, TableSerializer, CategorieMenuSerializer, StoreSerializer,
    ArticleMenuSerializer, MenuSerializer, ImageMenuSerializer
)

class TypeRestaurantView(APIView):
    def get(self, request):
        types = TypeRestaurant.objects.all()
        serializer = TypeRestaurantSerializer(types, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TypeRestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TypeRestaurantDetailView(APIView):
    def get(self, request, pk):
        type_resto = get_object_or_404(TypeRestaurant, pk=pk)
        serializer = TypeRestaurantSerializer(type_resto)
        return Response(serializer.data)

    def put(self, request, pk):
        type_resto = get_object_or_404(TypeRestaurant, pk=pk)
        serializer = TypeRestaurantSerializer(type_resto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        type_resto = get_object_or_404(TypeRestaurant, pk=pk)
        type_resto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RestaurantView(APIView):
    def get(self, request):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(gerant=request.user.restomanager)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RestaurantDetailView(APIView):
    def get(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    def put(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        serializer = RestaurantSerializer(restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        restaurant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class StoreView(APIView):
    def get(self, request):
        stores = Store.objects.all()
        serializer = StoreSerializer(stores, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(store_manager=request.user.storemanager)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StoreDetailView(APIView):
    def get(self, request, pk):
        store = get_object_or_404(Store, pk=pk)
        serializer = StoreSerializer(store)
        return Response(serializer.data)

    def put(self, request, pk):
        store = get_object_or_404(Store, pk=pk)
        serializer = StoreSerializer(store, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        store = get_object_or_404(Store, pk=pk)
        store.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vue pour ImageRestaurant
class ImageRestaurantView(APIView):
    def get(self, request):
        images = ImageRestaurant.objects.all()
        serializer = ImageRestaurantSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ImageRestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageRestaurantDetailView(APIView):
    def get(self, request, pk):
        image = get_object_or_404(ImageRestaurant, pk=pk)
        serializer = ImageRestaurantSerializer(image)
        return Response(serializer.data)

    def delete(self, request, pk):
        image = get_object_or_404(ImageRestaurant, pk=pk)
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CategorieMenuView(APIView):
    def get(self, request):
        categories = CategorieMenu.objects.all()
        serializer = CategorieMenuSerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorieMenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategorieMenuDetailView(APIView):
    def get(self, request, pk):
        categorie = get_object_or_404(CategorieMenu, pk=pk)
        serializer = CategorieMenuSerializer(categorie)
        return Response(serializer.data)

    def put(self, request, pk):
        categorie = get_object_or_404(CategorieMenu, pk=pk)
        serializer = CategorieMenuSerializer(categorie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        categorie = get_object_or_404(CategorieMenu, pk=pk)
        categorie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ArticleMenuView(APIView):
    def get(self, request):
        articles = ArticleMenu.objects.all()
        serializer = ArticleMenuSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ArticleMenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArticleMenuDetailView(APIView):
    def get(self, request, pk):
        article = get_object_or_404(ArticleMenu, pk=pk)
        serializer = ArticleMenuSerializer(article)
        return Response(serializer.data)

    def put(self, request, pk):
        article = get_object_or_404(ArticleMenu, pk=pk)
        serializer = ArticleMenuSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        article = get_object_or_404(ArticleMenu, pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MenuView(APIView):
    def get(self, request):
        menus = Menu.objects.all()
        serializer = MenuSerializer(menus, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MenuDetailView(APIView):
    def get(self, request, pk):
        menu = get_object_or_404(Menu, pk=pk)
        serializer = MenuSerializer(menu)
        return Response(serializer.data)

    def put(self, request, pk):
        menu = get_object_or_404(Menu, pk=pk)
        serializer = MenuSerializer(menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        menu = get_object_or_404(Menu, pk=pk)
        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ImageMenuView(APIView):
    def get(self, request):
        images = ImageMenu.objects.all()
        serializer = ImageMenuSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ImageMenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageMenuDetailView(APIView):
    def get(self, request, pk):
        image = get_object_or_404(ImageMenu, pk=pk)
        serializer = ImageMenuSerializer(image)
        return Response(serializer.data)

    def delete(self, request, pk):
        image = get_object_or_404(ImageMenu, pk=pk)
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TableView(APIView):
    def get(self, request):
        tables = Table.objects.all()
        serializer = TableSerializer(tables, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TableDetailView(APIView):
    def get(self, request, pk):
        table = get_object_or_404(Table, pk=pk)
        serializer = TableSerializer(table)
        return Response(serializer.data)

    def put(self, request, pk):
        table = get_object_or_404(Table, pk=pk)
        serializer = TableSerializer(table, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        table = get_object_or_404(Table, pk=pk)
        table.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class HoraireView(APIView):
    def get(self, request):
        horaires = Horaire.objects.all()
        serializer = HoraireSerializer(horaires, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = HoraireSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HoraireDetailView(APIView):
    def get(self, request, pk):
        horaire = get_object_or_404(Horaire, pk=pk)
        serializer = HoraireSerializer(horaire)
        return Response(serializer.data)

    def put(self, request, pk):
        horaire = get_object_or_404(Horaire, pk=pk)
        serializer = HoraireSerializer(horaire, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        horaire = get_object_or_404(Horaire, pk=pk)
        horaire.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
