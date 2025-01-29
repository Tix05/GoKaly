from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Utilisateur, Client, ImageClient,
    RestoManager, ImageRestoManager,
    StoreManager, ImageStoreManager,
    SuperAdmin, ImageSuperAdmin,
    Livreur, ImageLivreur
)

class ImageInline(admin.StackedInline):
    max_num = 1
    can_delete = True
    
    def get_image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 100px;"/>', obj.image.url)
        return "No image"
    get_image_preview.short_description = "Aperçu"

class ImageClientInline(ImageInline):
    model = ImageClient

class ImageRestoManagerInline(ImageInline):
    model = ImageRestoManager

class ImageStoreManagerInline(ImageInline):
    model = ImageStoreManager

class ImageSuperAdminInline(ImageInline):
    model = ImageSuperAdmin

class ImageLivreurInline(ImageInline):
    model = ImageLivreur

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('email', 'nom', 'contact', 'date_creation', 'last_logged', 'date_update')
    list_filter = ('date_creation', 'date_update')
    search_fields = ('email', 'nom', 'contact')
    readonly_fields = ('date_creation', 'last_logged', 'date_update')
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'email', 'contact')
        }),
        ('Sécurité', {
            'fields': ('password',)
        }),
        ('Dates', {
            'fields': ('date_creation', 'last_logged', 'date_update'),
        }),
    )
    inlines = [ImageClientInline]

@admin.register(RestoManager)
class RestoManagerAdmin(admin.ModelAdmin):
    list_display = ('email', 'nom', 'date_creation', 'last_logged')
    list_filter = ('date_creation',)
    search_fields = ('email', 'nom')
    readonly_fields = ('date_creation', 'last_logged')
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'email')
        }),
        ('Sécurité', {
            'fields': ('password',)
        }),
        ('Dates', {
            'fields': ('date_creation', 'last_logged'),
            'classes': ('collapse',)
        }),
    )
    inlines = [ImageRestoManagerInline]

@admin.register(StoreManager)
class StoreManagerAdmin(admin.ModelAdmin):
    list_display = ('email', 'nom', 'date_creation', 'last_logged')
    list_filter = ('date_creation',)
    search_fields = ('email', 'nom')
    readonly_fields = ('date_creation', 'last_logged')
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'email')
        }),
        ('Sécurité', {
            'fields': ('password',)
        }),
        ('Dates', {
            'fields': ('date_creation', 'last_logged'),
            'classes': ('collapse',)
        }),
    )
    inlines = [ImageStoreManagerInline]

@admin.register(SuperAdmin)
class SuperAdminAdmin(admin.ModelAdmin):
    list_display = ('email', 'nom', 'date_creation', 'last_logged')
    list_filter = ('date_creation',)
    search_fields = ('email', 'nom')
    readonly_fields = ('date_creation', 'last_logged')
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('nom', 'email')
        }),
        ('Sécurité', {
            'fields': ('password',)
        }),
        ('Dates', {
            'fields': ('date_creation', 'last_logged'),
            'classes': ('collapse',)
        }),
    )
    inlines = [ImageSuperAdminInline]

@admin.register(Livreur)
class LivreurAdmin(admin.ModelAdmin):
    list_display = ('nom', 'contact', 'isAvailable', 'get_status_icon')
    list_filter = ('isAvailable',)
    search_fields = ('nom', 'contact')
    inlines = [ImageLivreurInline]

    def get_status_icon(self, obj):
        if obj.isAvailable:
            return format_html('<span style="color: green;">●</span> Disponible')
        return format_html('<span style="color: red;">●</span> Indisponible')
    get_status_icon.short_description = "Statut"


@admin.register(Utilisateur)
class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_creation', 'last_logged')
    list_filter = ('date_creation',)
    search_fields = ('email',)
    readonly_fields = ('date_creation', 'last_logged')
    
    def has_add_permission(self, request):
        return False