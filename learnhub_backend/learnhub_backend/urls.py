from django.contrib import admin
from django.urls import path, include
from courses.views import CourseListCreate

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/courses/", CourseListCreate.as_view()),
]
