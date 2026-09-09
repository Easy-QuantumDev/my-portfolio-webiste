from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = [
        "title",
        "category",
        "is_featured",
        "created_at",
    ]

    list_filter = [
        "category",
        "is_featured",
    ]

    search_fields = [
        "title",
        "description",
        "technologies",
    ]

    prepopulated_fields = {
        "slug": ("title",)
    }
# Register your models here.
