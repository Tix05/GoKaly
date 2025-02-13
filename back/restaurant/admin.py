from django.contrib import admin
from django.utils.html import format_html
from .models import (
    TypeRestaurant, Restaurant, ImageRestaurant,
    Horaire, Table, CategorieMenu, Store,
    ArticleMenu, Menu, ImageMenu
)

class ImageInline(admin.TabularInline):
    max_num = 4
    extra = 1

    def get_image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 50px;"/>', obj.image.url)
        return "Aucune image"
    get_image_preview.short_description = "Aperçu"

class ImageRestaurantInline(ImageInline):
    model = ImageRestaurant
    fields = ('image', 'get_image_preview')
    readonly_fields = ('get_image_preview',)

class ImageMenuInline(ImageInline):
    model = ImageMenu
    fields = ('image', 'get_image_preview')
    readonly_fields = ('get_image_preview',)

class HoraireInline(admin.TabularInline):
    model = Horaire
    extra = 1
    fields = ('jour_ouverture', 'jour_fermeture', 'heure_debut', 'heure_fermeture')

class TableInline(admin.TabularInline):
    model = Table
    extra = 1
    fields = ('designation', 'capacite')

@admin.register(TypeRestaurant)
class TypeRestaurantAdmin(admin.ModelAdmin):
    list_display = ('intitule',)
    search_fields = ('intitule',)

@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('nom', 'type_restaurant', 'gerant', 'contact', 'total_table', 'get_tables_occupees')
    list_filter = ('type_restaurant', 'gerant')
    search_fields = ('nom', 'contact', 'gerant__nom')
    inlines = [ImageRestaurantInline, HoraireInline, TableInline]
    
    def get_tables_occupees(self, obj):
        return obj.table_set.count()
    get_tables_occupees.short_description = "Tables enregistrées"

@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'store_manager')
    list_filter = ('restaurant',)
    search_fields = ('restaurant__nom', 'store_manager__nom')
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('restaurant', 'store_manager')


@admin.register(Horaire)
class HoraireAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'jour_ouverture', 'jour_fermeture', 'heure_debut', 'heure_fermeture')
    list_filter = ('restaurant', 'jour_ouverture', 'jour_fermeture')
    search_fields = ('restaurant__nom',)

    def has_add_permission(self, request):
        return False

@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ('designation', 'capacite', 'restaurant')
    list_filter = ('restaurant', 'capacite')
    search_fields = ('designation', 'restaurant__nom')

    def has_add_permission(self, request):
        return False

@admin.register(CategorieMenu)
class CategorieMenuAdmin(admin.ModelAdmin):
    list_display = ('intitule', 'description')
    search_fields = ('intitule',)

@admin.register(ArticleMenu)
class ArticleMenuAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix', 'description')
    list_filter = ('prix',)
    search_fields = ('nom',)

class MenuArticleInline(admin.TabularInline):
    model = Menu
    extra = 1
    fields = ('article', 'categorie', 'isVisible')

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('article', 'categorie', 'isVisible')
    list_filter = ('categorie', 'isVisible')
    search_fields = ('article__nom', 'categorie__intitule')
    inlines = [ImageMenuInline]
    list_editable = ('isVisible',)

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('article', 'categorie')

# Personnalisation de l'interface d'administration
admin.site.site_header = "Administration du Restaurant"
admin.site.site_title = "Panel d'administration"
admin.site.index_title = "Gestion du Restaurant"