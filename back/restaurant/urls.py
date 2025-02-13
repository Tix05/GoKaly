from django.urls import path
from .views import (
    TypeRestaurantView, TypeRestaurantDetailView,
    RestaurantView, RestaurantDetailView,
    ImageRestaurantView, ImageRestaurantDetailView,
    CategorieMenuView, CategorieMenuDetailView,
    ArticleMenuView, ArticleMenuDetailView,
    MenuView, MenuDetailView,
    ImageMenuView, ImageMenuDetailView,
    TableView, TableDetailView,
    HoraireView, HoraireDetailView,
    StoreView, StoreDetailView
)

urlpatterns = [
    # Endpoints pour TypeRestaurant
    path('types/', TypeRestaurantView.as_view(), name='type-restaurant-list'),
    path('type/<int:pk>/', TypeRestaurantDetailView.as_view(), name='type-restaurant-detail'),
    
    # Endpoints pour Restaurant
    path('restaurants/', RestaurantView.as_view(), name='restaurant-list'),
    path('restaurant/<int:pk>/', RestaurantDetailView.as_view(), name='restaurant-detail'),

    # Endpoints pour Store
    path('stores/', StoreView.as_view(), name='store-list'),
    path('stores/<int:pk>/', StoreDetailView.as_view(), name='store-detail'),

    # Endpoints pour ImageRestaurant
    path('restaurant-images/', ImageRestaurantView.as_view(), name='restaurant-image-list'),
    path('restaurant-image/<int:pk>/', ImageRestaurantDetailView.as_view(), name='restaurant-image-detail'),
    
    # Endpoints pour CategorieMenu
    path('categories/', CategorieMenuView.as_view(), name='categorie-menu-list'),
    path('categorie/<int:pk>/', CategorieMenuDetailView.as_view(), name='categorie-menu-detail'),
    
    # Endpoints pour ArticleMenu
    path('articles/', ArticleMenuView.as_view(), name='article-menu-list'),
    path('article/<int:pk>/', ArticleMenuDetailView.as_view(), name='article-menu-detail'),
    
    # Endpoints pour Menu
    path('menus/', MenuView.as_view(), name='menu-list'),
    path('menu/<int:pk>/', MenuDetailView.as_view(), name='menu-detail'),
    
    # Endpoints pour ImageMenu
    path('menu-images/', ImageMenuView.as_view(), name='menu-image-list'),
    path('menu-image/<int:pk>/', ImageMenuDetailView.as_view(), name='menu-image-detail'),
    
    # Endpoints pour Table
    path('tables/', TableView.as_view(), name='table-list'),
    path('table/<int:pk>/', TableDetailView.as_view(), name='table-detail'),
    
    # Endpoints pour Horaire
    path('horaires/', HoraireView.as_view(), name='horaire-list'),
    path('horaire/<int:pk>/', HoraireDetailView.as_view(), name='horaire-detail'),
]
